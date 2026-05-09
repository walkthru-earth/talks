import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '..');
const PACKAGES_DIR = path.join(ROOT_DIR, 'packages');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

// Walkthru Earth Design System HTML Template
const HTML_TEMPLATE = (links) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WalkThru Earth | Presentations</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        /* Walkthru Earth Design System - Matching website theme */
        :root {
            /* Light Mode - Walkthru Earth Tones */
            --background: hsl(60 20% 99%); /* Warm white */
            --foreground: hsl(0 0% 9%); /* Soft black */

            --card: hsl(60 10% 98%);
            --card-foreground: hsl(0 0% 9%);

            --primary: hsl(158 64% 52%); /* Earth green */
            --primary-foreground: hsl(0 0% 100%);

            --secondary: hsl(37 91% 55%); /* Warm amber */
            --secondary-foreground: hsl(0 0% 9%);

            --muted: hsl(60 5% 96%);
            --muted-foreground: hsl(0 0% 45%);

            --border: hsl(60 5% 90%);
            --ring: hsl(158 64% 52%);

            --radius: 0.75rem;
        }

        .dark {
            /* Dark Mode - Night Earth Tones */
            --background: hsl(0 0% 7%); /* Deep charcoal */
            --foreground: hsl(60 10% 98%); /* Soft white */

            --card: hsl(0 0% 10%);
            --card-foreground: hsl(60 10% 98%);

            --primary: hsl(158 64% 42%); /* Muted earth green */
            --primary-foreground: hsl(0 0% 9%);

            --secondary: hsl(37 70% 45%); /* Muted amber */
            --secondary-foreground: hsl(60 10% 98%);

            --muted: hsl(0 0% 15%);
            --muted-foreground: hsl(60 5% 65%);

            --border: hsl(0 0% 20%);
            --ring: hsl(158 64% 42%);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            border-color: var(--border);
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Quicksand', sans-serif;
            background-color: var(--background);
            color: var(--foreground);
            min-height: 100vh;
            font-size: 18px;
            line-height: 1.7;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        /* Container */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 1.5rem;
        }

        @media (min-width: 768px) {
            .container {
                padding: 3rem;
            }
        }

        @media (min-width: 1024px) {
            .container {
                padding: 4rem 6rem;
            }
        }

        /* Header */
        header {
            text-align: center;
            margin-bottom: 3rem;
            animation: fadeInDown 0.8s ease-out;
        }

        .logo {
            width: 80px;
            height: 80px;
            margin: 0 auto 1.5rem;
        }

        h1 {
            font-size: clamp(2.5rem, 6vw, 4rem);
            font-weight: 700;
            line-height: 1.15;
            letter-spacing: -0.01em;
            margin-bottom: 0.5rem;
        }

        /* Gradient text like website */
        .gradient-text {
            background: linear-gradient(to right, var(--primary), var(--primary), var(--secondary));
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        p.subtitle {
            color: var(--muted-foreground);
            font-size: 1.125rem;
        }

        /* Theme Toggle */
        .theme-toggle {
            position: fixed;
            top: 1rem;
            right: 1rem;
            z-index: 50;
        }

        .theme-toggle button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 44px;
            height: 44px;
            border-radius: var(--radius);
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--foreground);
            cursor: pointer;
            transition: background-color 0.2s ease, border-color 0.2s ease;
        }

        .theme-toggle button:hover {
            background: var(--muted);
            border-color: var(--primary);
        }

        .theme-toggle svg {
            width: 20px;
            height: 20px;
        }

        .sun-icon { display: block; }
        .moon-icon { display: none; }
        .dark .sun-icon { display: none; }
        .dark .moon-icon { display: block; }

        /* Grid Layout */
        .grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 1.5rem;
        }

        @media (min-width: 640px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (min-width: 1024px) {
            .grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        /* Card Styles - Matching website */
        .card {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
            text-decoration: none;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
            animation: fadeInUp 0.6s ease-out backwards;
        }

        .card:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
            border-color: var(--primary);
        }

        .card-header {
            padding: 1.5rem 1.5rem 0;
        }

        .card-content {
            padding: 1rem 1.5rem;
            flex-grow: 1;
        }

        .card-footer {
            padding: 0 1.5rem 1.5rem;
            display: flex;
            align-items: center;
        }

        .card h2 {
            color: var(--card-foreground);
            font-size: 1.25rem;
            font-weight: 600;
            line-height: 1.3;
            letter-spacing: -0.01em;
        }

        .card p {
            color: var(--muted-foreground);
            font-size: 0.95rem;
            line-height: 1.6;
        }

        /* Button Styles - Matching website */
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            white-space: nowrap;
            border-radius: 0.5rem;
            font-size: 1rem;
            font-weight: 500;
            transition: all 0.2s ease;
            text-decoration: none;
            cursor: pointer;
        }

        .btn svg {
            width: 20px;
            height: 20px;
            flex-shrink: 0;
            transition: transform 0.2s ease;
        }

        /* Primary Button (default) */
        .btn-primary {
            height: 44px;
            padding: 0 1.5rem;
            background: var(--primary);
            color: var(--primary-foreground);
            box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
        }

        .btn-primary:hover {
            background: hsl(158 64% 47%);
        }

        .btn-primary:hover svg {
            transform: translateX(4px);
        }

        /* Outline Button */
        .btn-outline {
            height: 44px;
            padding: 0 1.5rem;
            background: var(--background);
            color: var(--primary);
            border: 1px solid var(--primary);
        }

        .btn-outline:hover {
            background: var(--primary);
            color: var(--primary-foreground);
        }

        /* Link Button (in cards) */
        .btn-link {
            color: var(--primary);
            font-weight: 600;
            padding: 0;
        }

        .btn-link:hover {
            text-decoration: underline;
            text-underline-offset: 4px;
        }

        .btn-link:hover svg {
            transform: translateX(4px);
        }

        /* Back to website link */
        .back-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--muted-foreground);
            text-decoration: none;
            font-size: 0.95rem;
            margin-bottom: 2rem;
            transition: color 0.2s ease;
        }

        .back-link:hover {
            color: var(--primary);
        }

        .back-link svg {
            width: 16px;
            height: 16px;
        }

        .nav-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
        }

        .nav-header .back-link {
            margin-bottom: 0;
        }

        /* Animations */
        @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Stagger card animations */
        ${links.map((_, i) => `.card:nth-child(${i + 1}) { animation-delay: ${i * 0.1}s; }`).join('\n        ')}

        /* Accessibility: Respect reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }

        /* Focus styles for keyboard navigation */
        .card:focus-visible,
        .btn:focus-visible,
        button:focus-visible {
            outline: 2px solid var(--ring);
            outline-offset: 2px;
        }
    </style>
</head>
<body>
    <!-- Theme Toggle -->
    <div class="theme-toggle">
        <button onclick="toggleTheme()" aria-label="Toggle theme">
            <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
        </button>
    </div>

    <div class="container">
        <div class="nav-header">
            <!-- Back to website -->
            <a href="https://walkthru.earth" class="back-link">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to walkthru.earth
            </a>

            <!-- Links Page -->
            <a href="https://walkthru.earth/links" class="btn btn-outline" style="height: 36px; font-size: 0.9rem; padding: 0 1rem;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Links
            </a>
        </div>

        <header>
            <img src="https://walkthru.earth/icon.svg" alt="Walkthru Earth" class="logo" />
            <h1><span class="gradient-text">Presentations</span></h1>
            <p class="subtitle">Explore our talks and presentations</p>
        </header>

        <main class="grid">
            ${links.map(link => `
            <a href="${link.url}" class="card">
                <div class="card-header">
                    <h2>${link.title}</h2>
                </div>
                <div class="card-content">
                    <p>${link.description || 'No description available.'}</p>
                </div>
                <div class="card-footer">
                    <span class="btn btn-link">
                        View Presentation
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </div>
            </a>
            `).join('')}
        </main>
    </div>

    <script>
        // Theme management
        function getTheme() {
            if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
                return localStorage.getItem('theme');
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        function setTheme(theme) {
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            localStorage.setItem('theme', theme);
        }

        function toggleTheme() {
            const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        }

        // Initialize theme
        setTheme(getTheme());

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    </script>
</body>
</html>`;

async function main() {
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR, { recursive: true });
    }

    const packages = fs.readdirSync(PACKAGES_DIR).filter(file => {
        return fs.statSync(path.join(PACKAGES_DIR, file)).isDirectory();
    });

    // Copy analytics files to each package
    const analyticsSourceDir = path.join(ROOT_DIR, 'shared', 'analytics');
    const analyticsFiles = ['global-top.vue', 'consent.ts', 'env.d.ts'];
    
    console.log('Copying analytics files to packages...');
    for (const pkgName of packages) {
        const pkgDir = path.join(PACKAGES_DIR, pkgName);
        
        for (const file of analyticsFiles) {
            const sourcePath = path.join(analyticsSourceDir, file);
            const destPath = path.join(pkgDir, file);
            
            if (fs.existsSync(sourcePath)) {
                fs.copyFileSync(sourcePath, destPath);
                console.log(`  ✓ ${pkgName}/${file}`);
            }
        }
    }

    const links = [];

    for (const pkgName of packages) {
        const pkgJsonPath = path.join(PACKAGES_DIR, pkgName, 'package.json');
        if (fs.existsSync(pkgJsonPath)) {
            const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'));
            // Assuming base path follows the pattern /talks/<pkgName>/
            const url = `./${pkgName}/`;
            
            // Format title: "walkthru-earth-intro" -> "Walkthru Earth Intro"
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
