```
 ░██████╗██╗░░██╗██╗██╗░░░░░██╗░░░░░██╗░░░██╗██╗
 ██╔════╝██║░██╔╝██║██║░░░░░██║░░░░░██║░░░██║██║
 ╚█████╗░█████═╝░██║██║░░░░░██║░░░░░██║░░░██║██║
 ░╚═══██╗██╔═██╗░██║██║░░░░░██║░░░░░██║░░░██║██║
 ██████╔╝██║░╚██╗██║███████╗███████╗╚██████╔╝██║
 ╚═════╝░╚═╝░░╚═╝╚═╝╚══════╝╚══════╝░╚═════╝░╚═╝
```
> Reverse-engineer any design system. Pure static analysis. No AI, no API keys.

Point skillui at any website, git repo, or local project and get exact colors, fonts, spacing, components, and animations packaged as a `.skill` file Claude can read.

```bash
npm install -g skillui
skillui --url https://yoursite.com --mode ultra
```

---

## What it does

skillui crawls your target and extracts:

| Output | Contents |
|---|---|
| `DESIGN.md` | Colors, typography, spacing, border radius, components |
| `ANIMATIONS.md` | CSS keyframes, scroll triggers, GSAP/Lottie/Three.js detection |
| `LAYOUT.md` | Flex/grid containers, page structure, spacing relationships |
| `COMPONENTS.md` | DOM patterns, HTML fingerprints, class analysis |
| `INTERACTIONS.md` | Hover/focus state diffs with before/after style snapshots |
| `VISUAL_GUIDE.md` | Master visual reference with all screenshots embedded |
| `screens/scroll/` | 7 cinematic scroll journey screenshots |
| `tokens/*.json` | Colors, spacing, typography as JSON tokens |
| `fonts/` | Google Fonts bundled locally |

Everything is packaged into a `.skill` ZIP file you drop into Claude Code.

---

## Install

```bash
npm install -g skillui
```

Requires Node.js 18+.

For ultra mode visual extraction, install Playwright separately:

```bash
npm install playwright
npx playwright install chromium
```

---

## Usage

### Crawl a website

```bash
skillui --url https://linear.app
```

### Ultra mode (full cinematic extraction)

```bash
skillui --url https://linear.app --mode ultra
```

Ultra mode adds:

- 7 scroll journey screenshots showing the page at each scroll depth
- Hover/focus interaction state diffs
- Full CSS keyframe extraction
- Animation library detection (GSAP, Lottie, Three.js, AOS, etc.)
- Video background first-frame capture
- DOM component fingerprinting
- Flex/grid layout extraction

### Scan a local project

```bash
skillui --dir ./my-app
```

### Clone and scan a git repo

```bash
skillui --repo https://github.com/org/repo
```

### All flags

```
skillui --url <url>           Crawl a live website
skillui --dir <path>          Scan a local project directory
skillui --repo <url>          Clone and scan a git repository

--mode ultra                  Enable cinematic extraction (requires Playwright)
--screens <n>                 Pages to crawl in ultra mode (default: 5, max: 20)
--out <path>                  Output directory (default: ./)
--name <string>               Override the project name
--format design-md|skill|both Output format (default: both)
--no-skill                    Output DESIGN.md only, skip .skill packaging
```

---

## Use with Claude Code

After running skillui, install the `.skill` file:

```bash
claude skill install ./linear-design.skill
```

Then ask Claude:

> "Build me a dashboard that matches the Linear design system"

Claude will read `DESIGN.md`, `ANIMATIONS.md`, `LAYOUT.md`, `COMPONENTS.md`, and all scroll journey screenshots to reconstruct the exact visual language of the site.

---

## Output structure

```
linear-design/
├── SKILL.md                  # Master skill file (loaded by Claude)
├── DESIGN.md                 # Full design system tokens
├── references/
│   ├── DESIGN.md             # Extended design reference
│   ├── ANIMATIONS.md         # Motion specs and keyframes
│   ├── LAYOUT.md             # Layout containers and grid
│   ├── COMPONENTS.md         # DOM component patterns
│   ├── INTERACTIONS.md       # Hover/focus state diffs
│   └── VISUAL_GUIDE.md       # All screenshots in sequence
├── screens/
│   ├── scroll/               # Scroll journey screenshots
│   │   ├── scroll-000.png    # Hero / above the fold
│   │   ├── scroll-017.png
│   │   ├── scroll-033.png
│   │   ├── scroll-050.png
│   │   ├── scroll-067.png
│   │   ├── scroll-083.png
│   │   └── scroll-100.png    # Footer
│   ├── pages/                # Full-page screenshots (ultra)
│   └── sections/             # Section clip screenshots (ultra)
├── tokens/
│   ├── colors.json
│   ├── spacing.json
│   └── typography.json
└── fonts/                    # Bundled Google Fonts (woff2)
```

---

## Examples

```bash
# Extract Nothing.tech design system with full ultra mode
skillui --url https://nothing.tech --mode ultra --screens 10

# Scan a local Next.js app
skillui --dir ./my-nextjs-app --name "MyApp"

# Clone and analyze a public repo
skillui --repo https://github.com/vercel/next.js --name "Next.js"

# Output only DESIGN.md, no .skill packaging
skillui --url https://stripe.com --format design-md

# Save output to a specific directory
skillui --url https://linear.app --out ./design-systems
```

---

## How it works

skillui uses pure static analysis. No AI, no API keys, no cloud.

- **URL mode** fetches HTML, crawls all linked CSS files, extracts computed styles via Playwright DOM inspection
- **Dir mode** scans all `.css`, `.scss`, `.ts`, `.tsx`, `.js`, `.jsx` files for design tokens, Tailwind config, CSS variables, and component patterns
- **Repo mode** clones the repo to a temp directory and runs dir mode
- **Ultra mode** runs Playwright to capture scroll journey screenshots, detect animation libraries from `window.*` globals, extract `@keyframes` from `document.styleSheets`, capture hover/focus state diffs, and fingerprint DOM components

---

## Requirements

- Node.js 18+
- For `--mode ultra`: Playwright (`npm install playwright && npx playwright install chromium`)

---

## License

MIT
