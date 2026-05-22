# RZKCITY — strona serwera Minecraft

Single-page landing site for the RZKCITY Minecraft server. Polish copy, dark luxury + neon cyber aesthetic, scroll-driven voxel assembly.

## Stack

- Vite 5 + React 18
- Tailwind CSS v3
- GSAP 3 + ScrollTrigger (scroll-driven animations)
- Fontshare: **Array** (display, blocky) + **Satoshi** (body) · Google Fonts: **JetBrains Mono**

## Quickstart

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # writes static bundle to ./dist
npm run preview    # local preview of the production build
```

## Sections

1. **Nav** — fixed, blur-on-scroll, mobile sheet menu.
2. **Hero** — video-ready background, IP + copy button, asymmetric meta rail.
3. **VoxelBuild** — scroll-driven assembly of a 4×4×4 dirt/grass cube + a blocky character.
4. **Modes (Tryby)** — asymmetric 7/5 grid: RZKSMP + Skyblock + stat row.
5. **Discord + Socials** — neon CTA + divided social list.
6. **Footer** — logo, IP copy, nav.

## Updating the hero video

The hero ships with a CSS gradient + grid fallback so it looks complete without media. To add a real video:

1. Generate or render an MP4 (and optionally a WebM).
2. Drop the file(s) into `public/`:
   - `public/hero-video.mp4` (required)
   - `public/hero-video.webm` (optional, smaller modern variant)
   - `public/hero-poster.jpg` (optional poster — un-comment the `poster` attr in `src/components/Hero.jsx`)
3. Rebuild — `npm run build`. The `<video>` element auto-loads them; the fallback stays beneath.

Files are referenced as `./hero-video.mp4` so they work from any deploy path (S3 preview, GitHub Pages project pages, root domain).

## Updating Discord + socials

- **Discord invite:** edit `DISCORD_URL` near the top of `src/components/DiscordSocials.jsx`. Currently set to the placeholder `https://discord.gg/rzkcity`.
- **Social handles:** edit the `SOCIALS` array in the same file (name, handle, href).

## Deployment

### Preview (S3, via deploy_website)

Build output lives at `dist/`. Deploy with:

```
deploy_website(project_path="/home/user/workspace/rzkcity-site/dist", site_name="RZKCITY", entry_point="index.html")
```

Static-only — no backend required.

### GitHub Pages

`vite.config.js` sets `base: './'` so all built asset references are relative. The site works on:

- A user/org page (`username.github.io`, served from `/`)
- A project page (`username.github.io/rzkcity`, served from `/rzkcity/`)
- A custom domain at any path

Two common deploy approaches:

1. **gh-pages branch from `dist/`**
   - `npm run build`
   - Commit `dist/` to a `gh-pages` branch (or push `dist` as the publish dir via Actions / `gh-pages` npm package).
2. **GitHub Actions** — node setup, `npm ci`, `npm run build`, then `actions/upload-pages-artifact` with `path: dist`.

No `base` change required — relative paths handle all repo configurations.

## Accessibility

- Skip-link at the top of `<App>`.
- Focus-visible gold ring across all interactive elements.
- Semantic landmarks (`header`, `main`, `section`, `footer`), labeled buttons, `aria-hidden` on decorative SVGs.
- `prefers-reduced-motion` collapses scroll animations to instant final state.

## Known limitations

- The voxel build animation uses CSS 3D transforms; on very low-end mobile the cube may render flat-ish but still readable. ScrollTrigger handles touch.
- No real Discord member count, player count, or status pings — the hero status indicator is decorative. Wire `https://api.minetools.eu/ping/rzkcity.pl/25565` (or similar) if a live count is wanted later.
- Social hrefs in `DiscordSocials.jsx` are best-guess defaults and should be confirmed by the owner.
- The site assumes `rzkcity.pl` is the canonical IP; if a port other than 25565 is needed, update the `IP` constant in `src/components/Hero.jsx`.

## File map

```
rzkcity-site/
├── index.html                # meta tags, font loading, root mount
├── vite.config.js            # base: './' for GitHub Pages
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── public/
│   └── favicon.svg           # voxel mark
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css             # tokens, fallbacks, voxel base, reduced motion
    └── components/
        ├── Logo.jsx          # inline SVG voxel "R" mark
        ├── Nav.jsx
        ├── Hero.jsx          # video-ready + IP copy
        ├── VoxelBuild.jsx    # GSAP ScrollTrigger assembly
        ├── Modes.jsx         # asymmetric 7/5 cards + stat row
        ├── DiscordSocials.jsx
        └── Footer.jsx
```
