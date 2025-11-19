import { useEffect, useState } from 'react'

function typeSequence(words, speed = 120, pause = 800) {
  let i = 0
  let j = 0
  let deleting = false
  let current = ''
  return (set) => {
    if (!deleting && j < words[i].length) {
      current += words[i][j]
      j++
      set(current)
      return speed
    }
    if (!deleting && j === words[i].length) {
      deleting = true
      return pause
    }
    if (deleting && j > 0) {
      current = current.slice(0, -1)
      j--
      set(current)
      return speed * 0.7
    }
    if (deleting && j === 0) {
      deleting = false
      i = (i + 1) % words.length
      return 400
    }
    return speed
  }
}

const GridFX = () => (
  <div className="absolute inset-0 pointer-events-none -z-10">
    <div className="absolute -inset-20 opacity-60" style={{
      background: 'radial-gradient(60% 60% at 50% 40%, rgba(70,179,255,0.18) 0%, rgba(70,179,255,0.08) 40%, transparent 70%)'
    }} />
  </div>
)

export default function Hero() {
  const [typed, setTyped] = useState('')

  useEffect(() => {
    const words = ['Python', 'SQL', 'React']
    const driver = typeSequence(words)
    let timeout
    const tick = () => {
      const next = driver(setTyped)
      timeout = setTimeout(tick, next)
    }
    timeout = setTimeout(tick, 400)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center px-6 md:px-10 py-24 overflow-hidden" style={{background:'#0a0a0a', color:'#f5f5f5'}}>
      <GridFX />
      {/* Decorative orbs */}
      <div className="absolute -top-20 -left-16 w-56 h-56 rounded-full blur-3xl opacity-40" style={{background: 'radial-gradient(circle at 30% 30%, rgba(70,179,255,.55), transparent 60%)'}} />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(circle at 70% 70%, rgba(168,85,247,.4), transparent 60%)'}} />

      <div className="max-w-6xl w-full">
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-white/5 border border-white/10 text-white/70 edge-fade">
            <span className="w-1.5 h-1.5 rounded-full bg-[#46b3ff] animate-pulse" />
            AI/ML • Data Engineering • Full Stack
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]">
          Syed Asrar Zahoor
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl">
          AI/ML engineer with strong data and product sense. I architect reliable pipelines and ship intelligent applications end‑to‑end.
        </p>

        <div className="mt-10 grid gap-4 sm:flex">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg neon-btn"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold border border-white/20 text-white hover:bg-white/5 transition"
            download
          >
            Download Resume
          </a>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-4">
          <div className="glass glass-hover rounded-xl p-4 md:p-6 scanlines">
            <div className="text-xs text-white/50 mb-2">terminal</div>
            <div className="font-mono text-base md:text-lg text-[#46b3ff]">
              {'>'} {typed}
              <span className="inline-block w-3 h-5 bg-[#46b3ff] ml-1 align-middle animate-pulse" style={{boxShadow:'0 0 12px #46b3ff'}} />
            </div>
            <div className="mt-2 text-xs md:text-sm text-white/50">Python {'>'} SQL {'>'} React</div>
          </div>

          <div className="glass glass-hover rounded-xl p-4 md:p-6 card-3d tilt">
            <div className="text-sm text-white/60">Now building</div>
            <div className="mt-2 text-white text-xl font-semibold">Conversational Analytics Agents</div>
            <div className="mt-2 text-white/60 text-sm">NL → SQL • Guardrails • Postgres • LangChain</div>
            <div className="mt-4 h-24 rounded-lg bg-[radial-gradient(circle_at_30%_30%,rgba(70,179,255,.35),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(70,179,255,.15),transparent_60%)] border border-white/10 floating" />
          </div>
        </div>
      </div>
    </section>
  )
}
