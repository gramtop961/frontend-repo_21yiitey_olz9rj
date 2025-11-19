export default function Experience() {
  const items = [
    {
      company: 'Enhancesys Innovations Pvt. Ltd',
      role: 'Data Scientist',
      period: 'Jan 2024 – Present • Bangalore',
      bullets: [
        'Built LangChain + OpenAI chatbot for NL → SQL analytics access',
        'Delivered dashboards in React with Syncfusion and Highcharts',
        'Scaled REST APIs in Spring Boot and Flask for fast data delivery',
        'Migrated MongoDB → PostgreSQL with zero downtime',
        'Automated reporting saving 10+ hours/week'
      ]
    },
    {
      company: 'PrepForTech.in',
      role: 'Full Stack Developer Intern (Virtual)',
      period: 'Jul 2022 – Dec 2022',
      bullets: [
        'Shipped two production-ready web apps end-to-end',
        'Worked in Agile using Java, Spring Boot, React',
        'Designed and consumed REST APIs for service integration'
      ]
    }
  ]

  return (
    <section id="experience" className="px-6 md:px-10 py-16" style={{background:'#0a0a0a'}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Experience</h2>
        <div className="relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-white/10" />
          {items.map((it, idx) => (
            <div key={idx} className="relative mb-8">
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full" style={{background:'#46b3ff', boxShadow:'0 0 8px #46b3ff'}} />
              <div className="glass glass-hover rounded-xl p-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-white text-lg md:text-xl font-semibold">{it.role} • {it.company}</h3>
                    <span className="text-white/50 text-sm">{it.period}</span>
                  </div>
                </div>
                <ul className="mt-3 space-y-2">
                  {it.bullets.map((b, i) => (
                    <li key={i} className="pl-5 relative text-white/80 text-sm">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full" style={{background:'#46b3ff'}} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
