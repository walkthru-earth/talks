# Walkthru Earth Talks, working guide

Best practices for building and editing the presentations in this repo. Read this before touching any deck. The goal is decks that look and behave the same, slide to slide and deck to deck.

## What this repo is

- A pnpm workspace of Slidev decks under `packages/`. Each package is one talk.
- `walkthru-earth-intro` is the design baseline. Other talks are cloned from it and must keep its look and feel.
- Shared brand styling lives in each package's `style.css` and `uno.config.ts`, both mirrored from the website design system.
- `@vueuse/motion` is a repo wide dependency, so `v-motion` is available in every deck.

## Writing style, this is strict

- Never use em dashes or long dashes. Replace with a comma or a period only.
- Never use colons or semicolons in slide copy or speaker notes.
- This applies to everything the audience can read, titles, body text, labels, notes.
- Keep slide copy short and plain. One idea per line.

## Design system and consistency

Do

- Use the brand tokens already defined, the CSS variables in `style.css` and the color and font theme in `uno.config.ts`.
- Use the Earth Green and Warm Amber brand colors. Pull them from the tokens, `var(--primary)`, `var(--secondary)`, or the `primary` and `secondary` Uno colors.
- Keep Quicksand as the font. It is already wired through the theme.
- Keep the canvas the same across a deck. It is set once in the headmatter, `canvasWidth: 1280` and `aspectRatio: 16/9`. Do not change it per slide.
- Use per slide `zoom` to fit dense content, not hand tuned font sizes.

Do not

- Do not hardcode brand hex values inside slides. Reference the tokens so a rebrand stays one edit.
- Do not introduce a new font, a new accent color, or a new card style when an existing one fits.
- Do not change `canvasWidth` or `aspectRatio` to make one slide fit. Use `zoom` or the `Transform` component instead.

## Reuse, never copy paste class strings

When the same block of utility classes appears more than once, promote it to a shortcut in `uno.config.ts` and use the shortcut everywhere.

Established shared pieces

- `Reveal.vue`, a wrapper that fades and rises content in on slide enter, with a `delay` prop for staggering. Use this for all entrance animation.
- `section-label`, the small uppercase gray label above a grid.
- `logo-tile`, the white fixed height tile that holds a single logo.
- `gradient-text`, the green to amber text gradient.
- `Morph.vue` and the `morph-panel` shortcut, the zoom into a card mechanism, see the section below.

Do

- Reach for an existing shortcut or component first.
- Add a new shortcut when a pattern repeats, give it a clear name, and replace the duplicates.

Do not

- Do not paste a long `class="rounded-xl border-2 ..."` string into many slides. That is the signal to make a shortcut.

## Animation

Do

- Animate with `Reveal` so content enters on slide change, not on click. This keeps navigation at one key press per slide.
- Stagger siblings with increasing `delay` values, lead text first near 0, then cards around 60 to 120 apart, closing line last.
- Keep motion subtle and consistent across slides so the whole deck feels like one piece.

Do not

- Do not add click steps with `v-click` unless the talk truly needs a reveal by reveal build. Extra clicks slow a live pitch.
- Do not invent a different animation per slide. One entrance language for the deck.
- Do not animate so heavily that the audience waits on the slide. Total cascade should land in well under a second.

## Bordered links, the missing or dashed bottom edge

Watch for this whenever a clickable card or tile is an `<a>` with a border.

- Slidev's default theme draws a link underline as a dashed bottom border, `.slidev-layout a { border-b border-dashed }`. That selector outspecs plain utility classes, so on a bordered link it overrides only the bottom side. The symptom is a card whose bottom edge is dashed, a different color, or missing while the other three sides look right. It shows up on any bordered `<a>`, the logo grids and the flow diagram are the usual victims.
- The fix lives in `style.css` and the shortcuts, do not patch it per slide. `style.css` removes the underline at a higher specificity than the theme but without `!important`, so a card can win the bottom back. The `logo-tile` and `flow-card` shortcuts then set their border with `!important` utilities, `!border`, `!border-solid`, `!border-<color>`, so all four sides survive.
- So, build bordered link cards with the `logo-tile` or `flow-card` shortcut. If you need a one off bordered link, write its border with the important prefix, `!border-2 !border-solid !border-amber-400`, or the bottom edge will break.
- A bordered `<div>` is unaffected, this is links only. Buttons are fine too, the `btn-outline` rule already sets an important border.

## Zoom into a card, the morph mechanism

This is the PowerPoint style zoom, an overview slide with a few cards, then you zoom into one card so it grows to fill the screen and becomes a detail slide, present it, then zoom back out to the overview before the next card. It is built on the View Transitions API, not extra clicks, so navigation stays one key press per step.

The reusable piece is `Morph.vue`. Put a `Morph` on an overview card and another `Morph` with the same `name` on the full screen detail panel. Set `transition: view-transition` on both slides and the browser grows the card into the panel on enter and shrinks it back on leave.

How to use

- On the overview, wrap each card box in a `Morph` and give it a unique name.

  ```md
  <Reveal :delay="80" class="h-full">
  <Morph name="vt-globe" class="rounded-xl border-2 border-blue-500 bg-blue-50 p-5 h-full flex flex-col">
    card content
  </Morph>
  </Reveal>
  ```

- On the detail slide, use `layout: full` and a `Morph` with the same name as the panel. Use the `morph-panel` shortcut for the full slide box, then add the matching color.

  ```md
  ---
  layout: full
  transition: view-transition
  ---

  <Morph name="vt-globe" class="morph-panel bg-blue-50 border-solid border-4 border-blue-500">
    detail content, stagger it with Reveal
  </Morph>
  ```

- Order the slides so you zoom out between cards, `overview, detail one, overview, detail two, overview, detail three, overview`. The overview returning is what makes the zoom out read.
- Keep the overview in one file and pull it in with `src` so the four copies stay one source of truth. See `pages/what-we-do.md` and the `src: ./pages/what-we-do.md` slides in `walkthru-earth-auc-p1`.

Rules

- Every name must be unique among everything on screen at one moment, so give each card its own name. Two visible elements sharing a name cancel the morph and you get a plain cut.
- Match the detail panel color and shape to the card, same border color, same background, so the grow looks like the card itself opening up.
- View transitions run in Chromium, Chrome and Edge, present from one of those. Other browsers fall back to a plain cut with no error, and the static PDF export is unaffected.
- Do not put a heavy element like a map or a 3D canvas inside the morphing box. The browser snapshots it during the morph. Morph a plain card and reveal the heavy element after with `Reveal`.

## Assets

Do

- Keep assets in the package `public/` folder and reference them by relative path. In markdown use a root path like `/logos/foo.svg`. In component code build the path from `import.meta.env.BASE_URL` so it works in dev and in the deployed base.
- When consolidating a deck to run offline, download remote assets into `public/` and verify each file is real, parquet starts with `PAR1`, glTF starts with `glTF`, JSON parses.
- Convert images to a sane format and check them visually before wiring them in.

Do not

- Do not inline large data or base64 blobs into slides. Use files in `public/`.
- Do not assume a fetch base path. A deck is served from a subpath in production, so always go through `BASE_URL` in code.
- Do not bundle a live tile service or streaming endpoint. Those stay remote. Note in a comment why.
- Do not silently add tens of megabytes to git. Flag large binaries and consider git lfs before committing.

## Authoring slides

- Separate slides with `---`. Put per slide options in the small frontmatter block above the slide.
- Put speaker notes in an HTML comment at the end of the slide. Keep them in the same writing style.
- Keep every slide inside the canvas. If content overflows, trim copy first, then lower `zoom`, then scale a single heavy element with `Transform`.
- For Mermaid diagrams, control size with the `{scale: ...}` option rather than resizing the whole slide.

## Build, run, verify

From a package folder

- `pnpm dev` to preview with hot reload at `http://localhost:3030`.
- `pnpm build` for a quick local build.
- `pnpm build-base` for the deploy build, it sets the correct `--base` subpath.
- `pnpm export` for PDF, needs `playwright-chromium`.

From the repo root

- `pnpm packages:build-base` builds every deck and regenerates the index.

Always

- Run a build after edits and confirm it succeeds before calling the work done.
- After localizing assets, grep the built `dist` for any leftover remote URLs to confirm nothing still phones home.
- Prefer letting the author preview animation and layout in the browser, since timing and fit are visual.

## Quick checklist before finishing

- Build passes.
- No em dashes, no colons, no semicolons in any copy.
- Brand tokens used, no stray fonts or colors.
- Repeated class strings live in a shortcut, not copied.
- Animation uses `Reveal` and is consistent across slides.
- Assets are local and relative where intended, large binaries flagged.
