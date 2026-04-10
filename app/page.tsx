import CodeBlock from '@/components/CodeBlock'
import ThemeToggle from '@/components/ThemeToggle'

const outputStructure = [
  { file: 'notion-design/',          desc: 'Your project output folder', indent: 0 },
  { file: 'SKILL.md',                desc: 'Master reference — all files embedded inline', indent: 1 },
  { file: 'CLAUDE.md',               desc: 'Auto-read by Claude Code on folder open', indent: 1 },
  { file: 'DESIGN.md',               desc: 'Colors, typography, spacing', indent: 1 },
  { file: 'notion-design.skill',     desc: 'ZIP package auto-installed to /skills', indent: 1 },
  { file: 'references/',             desc: '', indent: 1 },
  { file: 'ANIMATIONS.md',           desc: 'CSS keyframes, scroll triggers, motion libs', indent: 2 },
  { file: 'LAYOUT.md',               desc: 'Flex/grid containers, page structure', indent: 2 },
  { file: 'COMPONENTS.md',           desc: 'DOM patterns, HTML fingerprints', indent: 2 },
  { file: 'INTERACTIONS.md',         desc: 'Hover/focus state diffs', indent: 2 },
  { file: 'VISUAL_GUIDE.md',         desc: 'All screenshots in sequence', indent: 2 },
  { file: 'screens/',                desc: '', indent: 1 },
  { file: 'scroll/',                 desc: '7 cinematic scroll journey screenshots', indent: 2 },
  { file: 'pages/',                  desc: 'Full-page screenshots per URL', indent: 2 },
  { file: 'sections/',               desc: 'Clipped section screenshots', indent: 2 },
  { file: 'states/',                 desc: 'Hover/focus state screenshots', indent: 2 },
  { file: 'tokens/',                 desc: '', indent: 1 },
  { file: 'colors.json',             desc: 'All extracted colors', indent: 2 },
  { file: 'spacing.json',            desc: 'Spacing scale', indent: 2 },
  { file: 'typography.json',         desc: 'Font families, sizes, weights', indent: 2 },
  { file: 'fonts/',                  desc: 'Google Fonts bundled as woff2', indent: 1 },
  { file: 'screenshots/',            desc: 'Homepage screenshot', indent: 1 },
]

const flags = [
  { flag: 'skillui --url <url>',   desc: 'Crawl a live website' },
  { flag: 'skillui --dir <path>',  desc: 'Scan a local project directory' },
  { flag: 'skillui --repo <url>',  desc: 'Clone and scan a git repository' },
  { flag: '--mode ultra',          desc: 'Enable cinematic extraction mode' },
  { flag: '--screens <n>',         desc: 'Pages to crawl in ultra mode (default: 5, max: 20)' },
  { flag: '--out <path>',          desc: 'Output directory (default: ./)' },
  { flag: '--name <string>',       desc: 'Override the project name' },
  { flag: '--format <format>',     desc: 'Output format: design-md, skill, or both' },
  { flag: '--no-skill',            desc: 'Output DESIGN.md only, skip .skill packaging' },
]

const step1Code = `# Website
skillui --url https://linear.app --mode ultra

# Local project
skillui --dir ./my-app

# Git repo
skillui --repo https://github.com/org/repo`

const step3Code = `# Open Claude Code inside the output folder
cd notion-design && claude

# Then ask:
"Build me a UI that matches this design system"

# Claude reads CLAUDE.md + SKILL.md automatically
# and generates your UI as an HTML file`

const whatYouGet = [
  { title: 'Design tokens',    body: 'Every color, font, spacing value, border radius, and breakpoint extracted as CSS variables and JSON.' },
  { title: 'Motion specs',     body: 'Full CSS keyframes, GSAP/Lottie/Three.js detection, scroll triggers, transition timings.' },
  { title: 'Scroll journey',   body: '7 screenshots at each scroll depth showing exactly how the page animates as you scroll.' },
  { title: 'Component map',    body: 'DOM patterns, class fingerprints, hover states, focus rings and interaction diffs.' },
  { title: 'Layout system',    body: 'Every flex/grid container with alignment, gap, padding, and responsive breakpoints.' },
  { title: 'Font bundles',     body: 'Google Fonts downloaded locally into the .skill ZIP so Claude has them offline.' },
  { title: 'Auto /skills',     body: 'Skill folder auto-installed to ~/.claude/skills/ and visible instantly in Claude Code.' },
  { title: 'Full SKILL.md',    body: 'All reference files embedded inline so Claude has full context from /skills alone.' },
  { title: 'Zero config',      body: 'No API keys, no AI, no cloud. Pure static analysis that works on any site or codebase.' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">

      {/* Nav */}
      <nav className="border-b border-[#e5e5e5] dark:border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-mono text-sm text-black dark:text-white tracking-tight">skillui</span>
          <div className="flex items-center gap-3">
            <a
              href="https://www.npmjs.com/package/skillui"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#888] dark:text-[#555] hover:text-black dark:hover:text-white transition-colors duration-150 border border-[#e5e5e5] dark:border-[#1a1a1a] hover:border-[#ccc] dark:hover:border-[#333] px-3 py-1.5 rounded-md"
            >
              npm i -g skillui
            </a>
            <a
              href="https://github.com/amaancoderx/skillui"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#888] dark:text-[#555] hover:text-black dark:hover:text-white transition-colors duration-150 border border-[#e5e5e5] dark:border-[#1a1a1a] hover:border-[#ccc] dark:hover:border-[#333] px-3 py-1.5 rounded-md"
            >
              github
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 border-b border-[#e5e5e5] dark:border-[#1a1a1a]">
        <div className="max-w-2xl">
          <p className="font-mono text-xs text-[#bbb] dark:text-[#444] mb-6 tracking-widest uppercase">
            v1.3.2 &nbsp;·&nbsp; pure static analysis &nbsp;·&nbsp; no API keys
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.15] mb-6 text-black dark:text-white">
            Reverse-engineer any<br />design system.
          </h1>
          <p className="text-[#666] dark:text-[#666] text-lg leading-relaxed mb-10 max-w-xl">
            Point skillui at any URL, repo, or folder. Get exact colors, fonts,
            spacing, components, animations, and scroll journeys packaged as a{' '}
            <code className="font-mono text-[#444] dark:text-[#999] text-base">.skill</code>{' '}
            file. Then open Claude Code and build the UI.
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5 mb-6">
            <CodeBlock code="npm install -g skillui" variant="inline" className="flex-1" />
            <CodeBlock code="skillui --url https://yoursite.com --mode ultra" variant="inline" className="flex-1" />
          </div>

          <p className="font-mono text-xs text-[#ccc] dark:text-[#333]">
            No API keys. No AI. No cloud. Pure static analysis.
          </p>
        </div>
      </section>

      {/* DEMO VIDEO */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-[#e5e5e5] dark:border-[#1a1a1a]">
        <p className="font-mono text-xs text-[#bbb] dark:text-[#444] mb-4 tracking-widest uppercase">
          See it in action
        </p>
        <p className="text-[#888] dark:text-[#555] text-sm mb-10 max-w-xl">
          Watch skillui extract a full design system from a live website and then have Claude Code generate a matching UI from it in seconds.
        </p>

        <div className="relative rounded-2xl overflow-hidden border border-[#e5e5e5] dark:border-[#1f1f1f] bg-[#f8f8f8] dark:bg-[#080808] shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_24px_64px_-12px_rgba(0,0,0,0.12)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_64px_-12px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#e0e0e0] dark:border-[#1a1a1a] bg-[#f0f0f0] dark:bg-[#0f0f0f]">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="font-mono text-xs text-[#aaa] dark:text-[#444] ml-2">
              skillui --url https://notion.com --mode ultra
            </span>
          </div>
          <video
            className="w-full block"
            autoPlay
            muted
            loop
            playsInline
            controls
          >
            <source src="/demo.mp4" type="video/mp4" />
          </video>
        </div>

        <p className="font-mono text-xs text-[#ccc] dark:text-[#333] mt-4 text-center">
          Ultra mode: colors · fonts · scroll journey · keyframes · components · layout · interactions
        </p>
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-[#e5e5e5] dark:border-[#1a1a1a]">
        <p className="font-mono text-xs text-[#bbb] dark:text-[#444] mb-12 tracking-widest uppercase">
          How it works
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Step 01 */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#ccc] dark:text-[#333]">01</span>
              <div className="h-px flex-1 bg-[#e5e5e5] dark:bg-[#1a1a1a]" />
            </div>
            <h2 className="text-sm font-medium text-[#666] dark:text-[#aaa]">Run skillui on any source</h2>
            <CodeBlock code={step1Code} variant="terminal" label="bash" />
            <p className="text-xs text-[#aaa] dark:text-[#555] leading-relaxed">
              Crawls the site, extracts every design token, takes scroll screenshots, and packages everything into a project folder.
            </p>
          </div>

          {/* Step 02 */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#ccc] dark:text-[#333]">02</span>
              <div className="h-px flex-1 bg-[#e5e5e5] dark:bg-[#1a1a1a]" />
            </div>
            <h2 className="text-sm font-medium text-[#666] dark:text-[#aaa]">You get a complete design folder</h2>
            <div className="rounded-xl border border-[#e5e5e5] dark:border-[#222] bg-[#f6f6f6] dark:bg-[#0c0c0c] overflow-hidden">
              <div className="border-b border-[#e0e0e0] dark:border-[#1a1a1a] px-4 py-2.5 bg-[#efefef] dark:bg-[#111]">
                <span className="font-mono text-xs text-[#aaa] dark:text-[#444]">notion-design/</span>
              </div>
              <div className="p-2 max-h-72 overflow-y-auto">
                {outputStructure.map(({ file, desc, indent }) => (
                  <div
                    key={file + indent}
                    className="flex items-start gap-2 px-2 py-1.5 rounded hover:bg-[#efefef] dark:hover:bg-[#111] transition-colors duration-100"
                    style={{ paddingLeft: `${8 + indent * 14}px` }}
                  >
                    <code className="font-mono text-xs text-[#222] dark:text-[#c8c8c8] whitespace-nowrap shrink-0">
                      {indent > 0 && <span className="text-[#ccc] dark:text-[#333] mr-1">{indent === 1 ? '├' : '│ ├'}</span>}
                      {file}
                    </code>
                    {desc && <span className="text-xs text-[#aaa] dark:text-[#444] leading-relaxed">{desc}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step 03 */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#ccc] dark:text-[#333]">03</span>
              <div className="h-px flex-1 bg-[#e5e5e5] dark:bg-[#1a1a1a]" />
            </div>
            <h2 className="text-sm font-medium text-[#666] dark:text-[#aaa]">Open Claude Code and build the UI</h2>
            <CodeBlock code={step3Code} variant="terminal" label="terminal" />
            <div className="rounded-xl border border-[#e5e5e5] dark:border-[#1a1a1a] bg-[#fafafa] dark:bg-[#0a0a0a] px-4 py-4">
              <p className="text-xs text-[#888] dark:text-[#555] leading-relaxed">
                Claude reads{' '}
                <code className="font-mono text-[#555] dark:text-[#777]">CLAUDE.md</code> and{' '}
                <code className="font-mono text-[#555] dark:text-[#777]">SKILL.md</code> automatically when you open the folder.
                It generates a matching HTML file with exact colors, fonts, spacing, and animations.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Modes comparison */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-[#e5e5e5] dark:border-[#1a1a1a]">
        <p className="font-mono text-xs text-[#bbb] dark:text-[#444] mb-12 tracking-widest uppercase">
          Extraction modes
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Default */}
          <div className="rounded-xl border border-[#e5e5e5] dark:border-[#1a1a1a] bg-[#fafafa] dark:bg-[#0a0a0a] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-[#111] dark:text-[#ccc]">Default mode</h3>
              <span className="font-mono text-xs text-[#aaa] dark:text-[#444] border border-[#e5e5e5] dark:border-[#1f1f1f] px-2 py-0.5 rounded">fast</span>
            </div>
            <p className="text-sm text-[#888] dark:text-[#444] leading-relaxed mb-4">
              No Playwright required. Fetches HTML and CSS via HTTP and extracts all design tokens statically.
            </p>
            <ul className="space-y-1.5 mb-6">
              {['CSS colors and fonts','Spacing and grid tokens','Component patterns','JSON token files','No browser needed'].map(f => (
                <li key={f} className="flex items-center gap-2 text-xs text-[#666] dark:text-[#555]">
                  <span className="text-[#22c55e] text-base leading-none">✓</span> {f}
                </li>
              ))}
            </ul>
            <CodeBlock code="skillui --url https://yoursite.com" variant="inline" />
          </div>

          {/* Ultra */}
          <div className="rounded-xl border border-[#111] dark:border-[#2a2a2a] bg-[#0a0a0a] dark:bg-[#050505] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-white">Ultra mode</h3>
              <span className="font-mono text-xs text-[#555] border border-[#1f1f1f] px-2 py-0.5 rounded">cinematic</span>
            </div>
            <p className="text-sm text-[#555] leading-relaxed mb-4">
              Requires Playwright. Launches a real browser and captures everything including scroll journey, interactions, and animations.
            </p>
            <ul className="space-y-1.5 mb-6">
              {[
                'Everything in default mode',
                'Full-page and section screenshots',
                '7 scroll journey frames',
                'CSS keyframe extraction',
                'Animation lib detection (GSAP, Lottie...)',
                'Hover and focus state diffs',
                'DOM component fingerprinting',
                'Flex and grid layout extraction',
                'Video background capture',
              ].map(f => (
                <li key={f} className="flex items-center gap-2 text-xs text-[#555]">
                  <span className="text-[#22c55e] text-base leading-none">✓</span> {f}
                </li>
              ))}
            </ul>
            <CodeBlock code="skillui --url https://yoursite.com --mode ultra" variant="inline" />
          </div>
        </div>
      </section>

      {/* Command Reference */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-[#e5e5e5] dark:border-[#1a1a1a]">
        <p className="font-mono text-xs text-[#bbb] dark:text-[#444] mb-12 tracking-widest uppercase">
          Command reference
        </p>

        <div className="rounded-xl border border-[#e5e5e5] dark:border-[#1f1f1f] overflow-hidden bg-[#f8f8f8] dark:bg-[#0c0c0c]">
          <div className="flex items-center gap-8 px-5 py-3 border-b border-[#e0e0e0] dark:border-[#1a1a1a] bg-[#f0f0f0] dark:bg-[#111]">
            <span className="font-mono text-xs text-[#bbb] dark:text-[#333] w-72">flag</span>
            <span className="font-mono text-xs text-[#bbb] dark:text-[#333]">description</span>
          </div>
          {flags.map(({ flag, desc }, i) => (
            <div
              key={flag}
              className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-8 px-5 py-3.5
                hover:bg-[#f0f0f0] dark:hover:bg-[#111] transition-colors duration-100 cursor-default
                ${i < flags.length - 1 ? 'border-b border-[#ebebeb] dark:border-[#141414]' : ''}`}
            >
              <code className="font-mono text-sm text-[#111] dark:text-[#d4d4d4] shrink-0 sm:w-72">{flag}</code>
              <span className="text-sm text-[#888] dark:text-[#555]">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* What you get */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-[#e5e5e5] dark:border-[#1a1a1a]">
        <p className="font-mono text-xs text-[#bbb] dark:text-[#444] mb-12 tracking-widest uppercase">
          What you get
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {whatYouGet.map(({ title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-[#e5e5e5] dark:border-[#1a1a1a] bg-[#fafafa] dark:bg-[#0a0a0a] hover:bg-[#f5f5f5] dark:hover:bg-[#0d0d0d] hover:border-[#d8d8d8] dark:hover:border-[#242424] transition-colors duration-150 p-6 flex flex-col gap-2.5"
            >
              <h3 className="text-sm font-medium text-[#111] dark:text-[#ccc]">{title}</h3>
              <p className="text-sm text-[#888] dark:text-[#444] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-[#e5e5e5] dark:border-[#1a1a1a]">
        <div className="rounded-2xl border border-[#e5e5e5] dark:border-[#1a1a1a] bg-[#f8f8f8] dark:bg-[#080808] px-8 py-12 flex flex-col items-center text-center gap-6">
          <p className="font-mono text-xs text-[#bbb] dark:text-[#444] tracking-widest uppercase">Get started</p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111] dark:text-[#eee] max-w-md leading-snug">
            Clone any design system in one command.
          </h2>
          <p className="text-sm text-[#888] dark:text-[#444] max-w-sm leading-relaxed">
            Install once, use on any website, repo, or local project. Claude gets the full design context automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
            <CodeBlock code="npm install -g skillui" variant="inline" className="flex-1" />
            <a
              href="https://github.com/amaancoderx/skillui"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#888] dark:text-[#555] hover:text-black dark:hover:text-white transition-colors duration-150 border border-[#e5e5e5] dark:border-[#1a1a1a] hover:border-[#ccc] dark:hover:border-[#333] px-4 py-2.5 rounded-lg text-center"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span className="font-mono text-xs text-[#ddd] dark:text-[#2a2a2a]">skillui v1.3.2</span>
        <div className="flex items-center gap-6">
          <a
            href="https://www.npmjs.com/package/skillui"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#bbb] dark:text-[#333] hover:text-[#555] dark:hover:text-[#888] transition-colors duration-150"
          >
            npm
          </a>
          <a
            href="https://github.com/amaancoderx/skillui"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#bbb] dark:text-[#333] hover:text-[#555] dark:hover:text-[#888] transition-colors duration-150"
          >
            github
          </a>
        </div>
      </footer>

    </main>
  )
}
