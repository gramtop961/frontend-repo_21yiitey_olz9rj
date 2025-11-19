export default function Experience() {
  const items = [
    {
      company: 'Enhancesys Innovations',
      focus: 'Data Migration • Dashboard Optimization',
      period: '—',
    },
  ]

  return (
    <section className="px-6 md:px-10 py-16" style={{background:'#0a0a0a'}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Experience</h2>
        <div className="relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-white/10" />
          {items.map((it, idx) => (
            <div key={idx} className="relative mb-8">
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full" style={{background:'#46b3ff', boxShadow:'0 0 8px #46b3ff'}} />
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="text-white text-lg md:text-xl font-semibold">{it.company}</h3>
                  <span className="text-white/50 text-sm">{it.period}</span>
                </div>
                <p className="mt-1 text-white/70 font-mono text-sm">{it.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
