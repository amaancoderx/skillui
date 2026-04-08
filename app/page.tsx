import CodeBlock from '@/components/CodeBlock'
import ThemeToggle from '@/components/ThemeToggle'

const extractedFiles = [
  { file: 'DESIGN.md',       desc: 'Colors, typography, spacing, components' },
  { file: 'ANIMATIONS.md',   desc: 'CSS keyframes, scroll triggers, motion libs' },
  { file: 'LAYOUT.md',       desc: 'Flex/grid containers, page structure' },
  { file: 'COMPONENTS.md',   desc: 'DOM patterns, HTML fingerprints' },
  { file: 'INTERACTIONS.md', desc: 'Hover/focus state diffs' },
  { file: 'screens/scroll/', desc: '7 cinematic scroll journey screenshots' },
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

const step3Code = `> claude skill install ./linear-design.skill`

const whatYouGet = [
  { title: 'Design tokens',  body: 'Every color, font, spacing value, border radius, and breakpoint extracted as CSS variables.' },
  { title: 'Motion specs',   body: 'Full CSS keyframes, GSAP/Lottie/Three.js detection, scroll triggers, transition timings.' },
  { title: 'Scroll journey', body: '7 cinematic screenshots at each scroll depth showing exactly how the page animates.' },
  { title: 'Component map',  body: 'DOM patterns, class fingerprints, hover states, focus rings and interaction diffs.' },
  { title: 'Layout system',  body: 'Every flex/grid container with alignment, gap, padding, and responsive breakpoints.' },
  { title: 'Font bundles',   body: 'Google Fonts downloaded locally into the .skill ZIP so Claude has them offline.' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">

      {/* ── Nav ──────────────────────────────────────────────────── */}
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
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 border-b border-[#e5e5e5] dark:border-[#1a1a1a]">
        <div className="max-w-2xl">
          <p className="font-mono text-xs text-[#bbb] dark:text-[#444] mb-6 tracking-widest uppercase">
            v1.1.0 / pure static analysis
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.15] mb-6 text-black dark:text-white">
            Reverse-engineer any<br />design system.
          </h1>
          <p className="text-[#666] dark:text-[#666] text-lg leading-relaxed mb-10 max-w-xl">
            Point skillui at any URL, repo, or folder. Get exact colors, fonts,
            spacing, components, and animations packaged as a{' '}
            <code className="font-mono text-[#444] dark:text-[#999] text-base">.skill</code>{' '}
            file Claude can read.
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

      {/* ── How It Works ─────────────────────────────────────────── */}
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
            <h2 className="text-sm font-medium text-[#666] dark:text-[#aaa]">Point at any source</h2>
            <CodeBlock code={step1Code} variant="terminal" label="bash" />
          </div>

          {/* Step 02 */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#ccc] dark:text-[#333]">02</span>
              <div className="h-px flex-1 bg-[#e5e5e5] dark:bg-[#1a1a1a]" />
            </div>
            <h2 className="text-sm font-medium text-[#666] dark:text-[#aaa]">Ultra mode extracts everything</h2>
            <div className="rounded-xl border border-[#e5e5e5] dark:border-[#222] bg-[#f6f6f6] dark:bg-[#0c0c0c] overflow-hidden">
              <div className="border-b border-[#e0e0e0] dark:border-[#1a1a1a] px-4 py-2.5 bg-[#efefef] dark:bg-[#111]">
                <span className="font-mono text-xs text-[#aaa] dark:text-[#444]">output</span>
              </div>
              <div className="p-2">
                {extractedFiles.map(({ file, desc }) => (
                  <div
                    key={file}
                    className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-[#efefef] dark:hover:bg-[#111] transition-colors duration-100"
                  >
                    <code className="font-mono text-xs text-[#222] dark:text-[#c8c8c8] whitespace-nowrap mt-px shrink-0 w-36">
                      {file}
                    </code>
                    <span className="text-xs text-[#888] dark:text-[#444] leading-relaxed">{desc}</span>
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
            <h2 className="text-sm font-medium text-[#666] dark:text-[#aaa]">Drop the .skill into Claude</h2>
            <CodeBlock code={step3Code} variant="terminal" label="terminal" />
            <div className="rounded-xl border border-[#e5e5e5] dark:border-[#1a1a1a] bg-[#fafafa] dark:bg-[#0a0a0a] px-4 py-4">
              <p className="text-xs text-[#888] dark:text-[#555] leading-relaxed">
                Then ask:{' '}
                <span className="text-[#555] dark:text-[#777] italic">
                  &ldquo;Build me a dashboard that matches the Linear design system&rdquo;
                </span>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Command Reference ─────────────────────────────────────── */}
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

      {/* ── What you get ─────────────────────────────────────────── */}
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

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span className="font-mono text-xs text-[#ddd] dark:text-[#2a2a2a]">skillui v1.1.0</span>
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
