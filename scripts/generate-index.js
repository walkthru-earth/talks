import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '..');
const PACKAGES_DIR = path.join(ROOT_DIR, 'packages');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

// Premium Design HTML Template
const HTML_TEMPLATE = (links) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WalkThru Earth | Presentations</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #0f172a;
            --card-bg: rgba(30, 41, 59, 0.7);
            --text-primary: #f8fafc;
            --text-secondary: #94a3b8;
            --accent-color: #38bdf8;
            --hover-color: #0ea5e9;
            --glass-border: rgba(255, 255, 255, 0.1);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Outfit', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-primary);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2rem;
            overflow-x: hidden;
            background-image: 
                radial-gradient(at 0% 0%, rgba(56, 189, 248, 0.1) 0px, transparent 50%),
                radial-gradient(at 100% 100%, rgba(14, 165, 233, 0.1) 0px, transparent 50%);
        }

        header {
            margin-bottom: 4rem;
            text-align: center;
            animation: fadeInDown 1s ease-out;
        }

        h1 {
            font-size: 3rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            background: linear-gradient(to right, #38bdf8, #818cf8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: -0.05em;
        }

        p.subtitle {
            color: var(--text-secondary);
            font-size: 1.1rem;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 2rem;
            width: 100%;
            max-width: 1200px;
        }

        .card {
            background: var(--card-bg);
            border: 1px solid var(--glass-border);
            border-radius: 16px;
            padding: 2rem;
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-decoration: none;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            animation: fadeInUp 0.8s ease-out backwards;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
            border-color: rgba(56, 189, 248, 0.3);
        }

        .card h2 {
            color: var(--text-primary);
            font-size: 1.5rem;
            margin-bottom: 1rem;
            font-weight: 600;
        }

        .card p {
            color: var(--text-secondary);
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 1.5rem;
            flex-grow: 1;
        }

        .card .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--accent-color);
            font-weight: 600;
            font-size: 0.9rem;
            transition: color 0.2s;
        }

        .card:hover .btn {
            color: var(--hover-color);
        }

        .card .btn svg {
            width: 20px;
            height: 20px;
            margin-left: 0.5rem;
            transition: transform 0.2s;
        }

        .card:hover .btn svg {
            transform: translateX(4px);
        }

        @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        /* Stagger animations */
        ${links.map((_, i) => `.card:nth-child(${i + 1}) { animation-delay: ${i * 0.1}s; }`).join('\n')}

    </style>
</head>
<body>
    <header>
        <h1>Talks</h1>
        <p class="subtitle">WalkThru Earth Presentations Collection</p>
    </header>

    <main class="grid">
        ${links.map(link => `
        <a href="${link.url}" class="card">
            <div>
                <h2>${link.title}</h2>
                <p>${link.description || 'No description available.'}</p>
            </div>
            <div class="btn">
                View Presentation
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
        </a>
        `).join('')}
    </main>
</body>
</html>`;

async function main() {
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR, { recursive: true });
    }

    const packages = fs.readdirSync(PACKAGES_DIR).filter(file => {
        return fs.statSync(path.join(PACKAGES_DIR, file)).isDirectory();
    });

    const links = [];

    for (const pkgName of packages) {
        const pkgJsonPath = path.join(PACKAGES_DIR, pkgName, 'package.json');
        if (fs.existsSync(pkgJsonPath)) {
            const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'));
            // Assuming base path follows the pattern /talks/<pkgName>/
            const url = `./${pkgName}/`;
            
            // Format title: "walkthru-earth-template" -> "Walkthru Earth Template"
            const title = pkgName
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

            links.push({
                title: pkg.description || title, // Use description as title if available, else formatted name
                description: pkg.description ? title : `Presentation for ${title}`, // Swap if description is used as title
                url: url
            });
        }
    }
    
    // Sort links alphabetically
    links.sort((a, b) => a.title.localeCompare(b.title));

    const html = HTML_TEMPLATE(links);
    fs.writeFileSync(path.join(DIST_DIR, 'index.html'), html);
    console.log(`Generated dist/index.html with ${links.length} presentations.`);
    console.log('To test locally: npx serve dist');
}

main().catch(console.error);
