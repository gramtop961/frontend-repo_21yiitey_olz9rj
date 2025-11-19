import { useEffect, useRef } from 'react'

const logos = [
  'Python','Java','JavaScript','SQL','React','FastAPI','Flask','Spring Boot','LangChain','LangGraph','Pandas','NumPy','PostgreSQL','MySQL','MongoDB','Highcharts','Syncfusion','Tailwind CSS'
]

export default function BadgesMarquee() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let start = null
    let last = 0
    const speed = 40 // px/sec
    const step = (ts) => {
      if (start === null) start = ts
      const dt = (ts - last) / 1000
      last = ts
      el.scrollLeft += speed * dt
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
        el.scrollLeft = 0
      }
      requestAnimationFrame(step)
    }
    const id = requestAnimationFrame(step)
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div className="px-6 md:px-10" style={{ background: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto overflow-x-auto whitespace-nowrap scrollbar-hide py-4 border-y border-white/10 edge-fade">
        {logos.concat(logos).map((l, i) => (
          <span key={i} className="inline-block mx-3 px-3 py-1 rounded-full text-xs md:text-sm border border-white/10 text-white/70 bg-white/5 glass-hover">
            <span className="shine bg-clip-text text-transparent" style={{WebkitTextFillColor:'transparent'}}>{l}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
