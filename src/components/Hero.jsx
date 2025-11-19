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

const ElectricGlow = ({ className = '' }) => (
  <div className={`absolute inset-0 -z-10 pointer-events-none ${className}`}>
    <div className="absolute -inset-40 opacity-30 blur-3xl" style={{
      background: 'radial-gradient(60% 60% at 50% 40%, rgba(59,130,246,0.35) 0%, rgba(59,130,246,0.08) 40%, transparent 70%)'
    }} />
    <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24px,rgba(255,255,255,0.04)_25px),linear-gradient(90deg,transparent_24px,rgba(255,255,255,0.04)_25px)] bg-[size:25px_25px] opacity-30" />
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
    <section className="relative min-h-[82vh] flex items-center justify-center px-6 md:px-10 py-24" style={{background:'#0a0a0a', color:'#f5f5f5'}}>
      <ElectricGlow />
      <div className="max-w-6xl w-full">
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-white/5 border border-white/10 text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-[#46b3ff] animate-pulse" />
            Senior Software Engineer • Data Engineering • AI • Full Stack
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">Syed Asrar Zahoor.</h1>
        <p className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl">
          Bridging the gap between Data Science, Enterprise Engineering, and Scalable Architecture.
        </p>

        <div className="mt-10 grid gap-4 sm:flex">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold text-[#0a0a0a]"
            style={{background:'#46b3ff'}}
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

        <div className="mt-14">
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 md:p-6">
            <div className="text-xs text-white/50 mb-2">terminal</div>
            <div className="font-mono text-base md:text-lg text-[#46b3ff]">
              {'>'} {typed}
              <span className="inline-block w-3 h-5 bg-[#46b3ff] ml-1 align-middle animate-pulse" style={{boxShadow:'0 0 12px #46b3ff'}} />
            </div>
            <div className="mt-2 text-xs md:text-sm text-white/50">Python {'>'} SQL {'>'} React</div>
          </div>
        </div>
      </div>
    </section>
  )
}
