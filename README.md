# skillui

Reverse engineer any design system. Pure static analysis. No AI. No API keys.

Point skillui at any website, git repo, or local project and extract exact colors, fonts, spacing, components, and animations. Output is packaged as a .skill file that Claude can read.

------------------------------------------------------------

███████╗██╗  ██╗██╗██╗     ██╗     ██╗   ██╗██╗
██╔════╝██║ ██╔╝██║██║     ██║     ██║   ██║██║
███████╗█████╔╝ ██║██║     ██║     ██║   ██║██║
╚════██║██╔═██╗ ██║██║     ██║     ██║   ██║██║
███████║██║  ██╗██║███████╗███████╗╚██████╔╝██║
╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝ ╚═════╝ ╚═╝

------------------------------------------------------------

INSTALL

npm install -g skillui

Requires Node.js 18+

For ultra mode:

npm install playwright
npx playwright install chromium

------------------------------------------------------------

USAGE

# Crawl a website
skillui --url https://yoursite.com

# Ultra mode full extraction
skillui --url https://yoursite.com --mode ultra

# Scan a local project
skillui --dir ./my-app

# Scan a git repo
skillui --repo https://github.com/org/repo

------------------------------------------------------------

FLAGS

--url <url>           Crawl a live website
--dir <path>          Scan a local project directory
--repo <url>          Clone and scan a git repository

--mode ultra          Enable cinematic extraction
--screens <n>         Pages to crawl in ultra mode (default 5, max 20)
--out <path>          Output directory (default ./)
--name <string>       Override project name
--format design-md|skill|both   Output format (default both)
--no-skill            Output DESIGN.md only

------------------------------------------------------------

WHAT IT DOES

skillui crawls your target and extracts:

+--------------------+---------------------------------------------+
| OUTPUT             | CONTENTS                                    |
+--------------------+---------------------------------------------+
| DESIGN.md          | Colors, typography, spacing, components     |
| ANIMATIONS.md      | CSS keyframes, scroll triggers, libraries   |
| LAYOUT.md          | Flex/grid structure and layout relations    |
| COMPONENTS.md      | DOM patterns and class fingerprints         |
| INTERACTIONS.md    | Hover and focus state diffs                 |
| VISUAL_GUIDE.md    | Full visual reference with screenshots      |
| screens/scroll/    | Cinematic scroll journey images             |
| tokens/*.json      | Design tokens in JSON format                |
| fonts/             | Bundled Google Fonts                        |
+--------------------+---------------------------------------------+

Everything is packaged into a .skill ZIP file.

------------------------------------------------------------

ULTRA MODE FEATURES

Ultra mode adds deep visual extraction:

- 7 scroll journey screenshots across page depth
- Hover and focus interaction diffs
- Full CSS keyframe extraction
- Animation library detection
- GSAP
- Lottie
- Three.js
- AOS
- Video background frame capture
- DOM component fingerprinting
- Flex and grid layout mapping

------------------------------------------------------------

EXAMPLES

# Extract Nothing.tech design system
skillui --url https://nothing.tech --mode ultra --screens 10

# Scan a Next.js app
skillui --dir ./my-nextjs-app --name "MyApp"

# Analyze a repo
skillui --repo https://github.com/vercel/next.js --name "NextJS"

# Output only DESIGN.md
skillui --url https://stripe.com --format design-md

# Custom output directory
skillui --url https://linear.app --out ./design-systems

------------------------------------------------------------

USE WITH CLAUDE

Install the generated skill file:

claude skill install ./linear-design.skill

Then prompt:

Build me a dashboard that matches the Linear design system

Claude will use:

- DESIGN.md
- ANIMATIONS.md
- LAYOUT.md
- COMPONENTS.md
- INTERACTIONS.md
- VISUAL screenshots

to reconstruct the design system.

------------------------------------------------------------

OUTPUT STRUCTURE

linear-design/
├── SKILL.md
├── DESIGN.md
├── references/
│   ├── DESIGN.md
│   ├── ANIMATIONS.md
│   ├── LAYOUT.md
│   ├── COMPONENTS.md
│   ├── INTERACTIONS.md
│   └── VISUAL_GUIDE.md
├── screens/
│   ├── scroll/
│   │   ├── scroll-000.png
│   │   ├── scroll-017.png
│   │   ├── scroll-033.png
│   │   ├── scroll-050.png
│   │   ├── scroll-067.png
│   │   ├── scroll-083.png
│   │   └── scroll-100.png
│   ├── pages/
│   └── sections/
├── tokens/
│   ├── colors.json
│   ├── spacing.json
│   └── typography.json
└── fonts/

------------------------------------------------------------

HOW IT WORKS

skillui uses pure static analysis.

URL mode
- Fetches HTML
- Crawls linked CSS
- Extracts computed styles using Playwright

Dir mode
- Scans CSS, SCSS, TS, TSX, JS, JSX
- Extracts tokens, Tailwind config, variables
- Detects component patterns

Repo mode
- Clones repo to temp directory
- Runs dir mode

Ultra mode
- Uses Playwright
- Captures scroll journey screenshots
- Extracts keyframes from stylesheets
- Detects animation libraries via window globals
- Captures hover and focus diffs
- Fingerprints DOM components

------------------------------------------------------------

REQUIREMENTS

Node.js 18+

Ultra mode:
npm install playwright
npx playwright install chromium

------------------------------------------------------------

LICENSE

MIT

------------------------------------------------------------
