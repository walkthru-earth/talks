# Walkthru Earth Intro

The canonical Walkthru.earth introduction deck, urban intelligence infrastructure for cities. Also the design baseline that other talks copy from, featuring our brand colors, Quicksand typography, and earth-toned aesthetic.

![WalkThru Earth](public/icon.svg)

## Features

- 🎨 **Brand Colors** - Earth Green and Warm Amber color scheme
- 🔤 **Quicksand Font** - Professional typography throughout
- 🌓 **Dark/Light Mode** - Beautiful themes for any environment
- ✨ **Smooth Animations** - Engaging transitions and click effects
- 📱 **Responsive Design** - Looks great on any screen
- 🎯 **Easy to Customize** - Just edit the markdown!

## Quick Start

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd talks

# Install dependencies
npm install
# or
pnpm install
```

### Development

Start the development server with hot reload:

```bash
pnpm dev
```

This will open the presentation in your browser at `http://localhost:3030`

### Building

Build the static site for deployment:

```bash
pnpm build
```

The output will be in the `dist/` directory.

### Exporting

Export slides to PDF:

```bash
pnpm export
```

## Customization

### Editing Your Presentation

Edit `slides.md` to create your presentation. The file uses markdown with special Slidev syntax:

```markdown
---
layout: center
---

# Your Slide Title

Your content here

- Bullet point 1
- Bullet point 2
```

### Brand Colors

The template uses WalkThru Earth brand colors defined in `style.css`:

**Light Mode:**

- Primary (Earth Green): `#3DD9A7`
- Secondary (Warm Amber): `#F5A524`

**Dark Mode:**

- Primary: `hsl(158 64% 42%)`
- Secondary: `hsl(37 70% 45%)`

Use these CSS classes in your slides:

- `.brand-accent` - Earth Green color
- `.brand-secondary` - Warm Amber color
- `.brand-gradient` - Gradient from green to amber

### Layouts

Available layouts:

- `center` - Centered content
- `intro` - Introduction slide
- `default` - Standard slide with title
- `end` - Final slide

### Animations

Use `v-click` for click-to-reveal animations:

```markdown
<v-clicks>

- Item 1
- Item 2
- Item 3

</v-clicks>
```

## File Structure

```
walkthru-earth-intro/
├── slides.md          # Your presentation content
├── style.css          # Brand colors and styles
├── uno.config.ts      # UnoCSS configuration
├── package.json       # Dependencies and scripts
├── public/            # Static assets
│   ├── icon.svg       # WalkThru Earth icon
│   └── favicon.png    # Favicon
└── README.md          # This file
```

## Tips

1. **Code Blocks**: Use triple backticks with language identifier for syntax highlighting
2. **Icons**: Use UnoCSS icons with `i-carbon:icon-name` classes
3. **Presenter Notes**: Add notes after `<!--` comments in slides
4. **Themes**: Toggle dark/light mode with the sun/moon icon in presenter view

## Learn More

- [Slidev Documentation](https://sli.dev/)
- [UnoCSS Documentation](https://unocss.dev/)
- [WalkThru Earth](https://walkthru.earth)

## License

This template is for WalkThru Earth internal use.
