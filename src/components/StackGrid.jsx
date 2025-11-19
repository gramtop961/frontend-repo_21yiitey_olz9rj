const Card = ({ title, subtitle, tags }) => {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition p-5 md:p-6">
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition" style={{
        boxShadow: 'inset 0 0 0 1px rgba(70,179,255,0.35), 0 0 30px rgba(70,179,255,0.12)'
      }} />
      <h3 className="text-xl md:text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-1 text-white/60 font-mono text-sm">{subtitle}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium border border-white/10 text-white/70 bg-white/5">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function StackGrid() {
  return (
    <section className="px-6 md:px-10 py-16" style={{background:'#0a0a0a'}}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <Card title="ETL & Pipelines" subtitle="Data Engineering" tags={["Python","Airflow","Azure ADF","PostgreSQL","Web Scraping"]} />
          <Card title="Intelligent Systems" subtitle="AI & ML" tags={["LangChain","OpenAI API","PyTorch","Computer Vision"]} />
          <Card title="Application Architecture" subtitle="Full Stack" tags={["React.js","Spring Boot","Flask","REST APIs"]} />
        </div>
      </div>
    </section>
  )
}
