import { useEffect, useRef } from 'react'

export default function NavBar() {
  const barRef = useRef(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const items = Array.from(bar.querySelectorAll('[data-magnet]'))

    const handleMove = (e) => {
      const rect = bar.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      items.forEach((el) => {
        const r = el.getBoundingClientRect()
        const cx = r.left - rect.left + r.width / 2
        const cy = r.top - rect.top + r.height / 2
        const dx = (x - cx) / rect.width
        const dy = (y - cy) / rect.height
        const strength = parseFloat(el.getAttribute('data-magnet')) || 12
        el.style.transform = `translate3d(${dx * strength}px, ${dy * strength}px, 0)`
      })
    }

    const reset = () => {
      items.forEach((el) => { el.style.transform = 'translate3d(0,0,0)' })
    }

    bar.addEventListener('mousemove', handleMove)
    bar.addEventListener('mouseleave', reset)
    return () => {
      bar.removeEventListener('mousemove', handleMove)
      bar.removeEventListener('mouseleave', reset)
    }
  }, [])

  return (
    <div ref={barRef} className="fixed top-4 inset-x-0 z-50 px-6 md:px-10">
      <div className="glass glass-hover rounded-2xl border border-white/10 backdrop-blur-md px-4 md:px-6 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group select-none" data-magnet="10">
          <div className="w-8 h-8 rounded-lg bg-[conic-gradient(from_180deg,rgba(70,179,255,0.5),transparent_60%)] border border-white/10 shadow-[0_0_25px_rgba(70,179,255,0.35)]" />
          <div className="leading-tight">
            <div className="text-white font-semibold tracking-tight">Syed Asrar Zahoor</div>
            <div className="text-[11px] text-white/60 mono">AI/ML • Data • Full‑Stack</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-2">
          {[
            { href: '#projects', label: 'Projects' },
            { href: '#experience', label: 'Experience' },
            { href: '#skills', label: 'Skills' },
            { href: '#contact', label: 'Contact' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-lg text-sm text-white/80 hover:text-white border border-transparent hover:border-white/10 transition mono"
              data-magnet="14"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1SleOJtfqaddBP_2wR-AKz6Umex-ldyGR/view?usp=sharing"
            className="px-4 py-2 rounded-lg neon-btn text-sm"
            data-magnet="16"
            target="_blank"
            rel="noreferrer"
            aria-label="Open resume in a new tab"
            title="Open Resume"
          >
            Resume
          </a>
        </nav>
      </div>
    </div>
  )
}
