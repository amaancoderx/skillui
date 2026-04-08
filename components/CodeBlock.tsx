'use client'

import { useState } from 'react'

interface CodeBlockProps {
  code: string
  language?: string
  label?: string
  className?: string
  /** terminal: macOS dots. editor: tab bar. inline: single-line pill */
  variant?: 'terminal' | 'editor' | 'inline'
}

function ClipboardIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function useCopy(text: string) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const el = document.createElement('textarea')
      el.value = text
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return { copied, copy }
}

function CodeLines({ code }: { code: string }) {
  return (
    <>
      {code.split('\n').map((line, i) => {
        const isComment = line.trim().startsWith('#')
        const isPrompt = line.trim().startsWith('>')
        if (line === '') return <span key={i} className="block h-3" />
        if (isComment) return (
          <div key={i}>
            <span className="text-[#999] dark:text-[#555]">{line}</span>
          </div>
        )
        if (isPrompt) return (
          <div key={i}>
            <span className="text-[#bbb] dark:text-[#555] select-none">{'> '}</span>
            <span className="text-[#111] dark:text-[#e8e8e8]">{line.replace(/^>\s*/, '')}</span>
          </div>
        )
        return (
          <div key={i}>
            <span className="text-[#111] dark:text-[#e8e8e8]">{line}</span>
          </div>
        )
      })}
    </>
  )
}

function CopyButton({ copied, copy }: { copied: boolean; copy: () => void }) {
  return (
    <button
      onClick={copy}
      className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs font-mono transition-all duration-150
        ${copied
          ? 'text-green-600 dark:text-[#28c840]'
          : 'text-[#bbb] dark:text-[#444] hover:text-[#555] dark:hover:text-[#aaa]'
        }`}
      aria-label={copied ? 'Copied' : 'Copy'}
    >
      {copied ? <CheckIcon /> : <ClipboardIcon />}
      <span>{copied ? 'copied' : 'copy'}</span>
    </button>
  )
}

function TerminalBlock({ code, label, className = '' }: { code: string; label?: string; className?: string }) {
  const { copied, copy } = useCopy(code)
  return (
    <div className={`rounded-xl overflow-hidden border border-[#e5e5e5] dark:border-[#222] bg-[#f6f6f6] dark:bg-[#0c0c0c] ${className}`}>
      <div className="relative flex items-center justify-between px-4 h-10 border-b border-[#e0e0e0] dark:border-[#1a1a1a] bg-[#efefef] dark:bg-[#111]">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        {label && (
          <span className="absolute left-1/2 -translate-x-1/2 font-mono text-xs text-[#aaa] dark:text-[#444]">
            {label}
          </span>
        )}
        <CopyButton copied={copied} copy={copy} />
      </div>
      <div className="overflow-x-auto p-5">
        <pre className="text-sm font-mono leading-7">
          <CodeLines code={code} />
        </pre>
      </div>
    </div>
  )
}

function EditorBlock({ code, language, label, className = '' }: { code: string; language?: string; label?: string; className?: string }) {
  const { copied, copy } = useCopy(code)
  const tab = label || language || 'bash'
  return (
    <div className={`rounded-xl overflow-hidden border border-[#e5e5e5] dark:border-[#222] bg-[#f6f6f6] dark:bg-[#0c0c0c] ${className}`}>
      <div className="flex items-center justify-between border-b border-[#e0e0e0] dark:border-[#1a1a1a] bg-[#efefef] dark:bg-[#111] px-1">
        <div className="flex items-center">
          <div className="px-4 py-2.5 border-b-2 border-[#111] dark:border-white">
            <span className="font-mono text-xs text-[#111] dark:text-white">{tab}</span>
          </div>
        </div>
        <CopyButton copied={copied} copy={copy} />
      </div>
      <div className="overflow-x-auto p-5">
        <pre className="text-sm font-mono leading-7">
          <CodeLines code={code} />
        </pre>
      </div>
    </div>
  )
}

function InlineBlock({ code, className = '' }: { code: string; className?: string }) {
  const { copied, copy } = useCopy(code)
  return (
    <div className={`group flex items-center justify-between gap-4 rounded-lg border border-[#e5e5e5] dark:border-[#1f1f1f] bg-[#f8f8f8] dark:bg-[#0c0c0c] px-4 h-11 hover:border-[#d0d0d0] dark:hover:border-[#2a2a2a] transition-colors duration-150 ${className}`}>
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-[#bbb] dark:text-[#555] font-mono text-sm select-none shrink-0">$</span>
        <code className="font-mono text-sm text-[#111] dark:text-[#d4d4d4] truncate">{code}</code>
      </div>
      <button
        onClick={copy}
        className={`shrink-0 flex items-center justify-center w-6 h-6 rounded transition-all duration-150
          ${copied
            ? 'text-green-600 dark:text-[#28c840]'
            : 'text-[#ccc] dark:text-[#333] group-hover:text-[#888] dark:group-hover:text-[#666]'
          }`}
        aria-label={copied ? 'Copied' : 'Copy'}
      >
        {copied ? <CheckIcon /> : <ClipboardIcon />}
      </button>
    </div>
  )
}

export default function CodeBlock({ code, language, label, variant = 'editor', className = '' }: CodeBlockProps) {
  if (variant === 'terminal') return <TerminalBlock code={code} label={label} className={className} />
  if (variant === 'inline')   return <InlineBlock code={code} className={className} />
  return <EditorBlock code={code} language={language} label={label} className={className} />
}
