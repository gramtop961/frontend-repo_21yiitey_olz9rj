const Badge = ({ children }) => (
  <span className="px-2.5 py-1 rounded-md text-xs font-medium border border-white/10 text-white/80 bg-white/5">
    {children}
  </span>
)

const SkillBlock = ({ title, items }) => (
  <div className="group rounded-2xl glass glass-hover p-5 md:p-6">
    <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>
    <div className="mt-3 flex flex-wrap gap-2">
      {items.map((it) => (
        <Badge key={it}>{it}</Badge>
      ))}
    </div>
  </div>
)

export default function Skills() {
  return (
    <section className="px-6 md:px-10 py-16" style={{ background: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <SkillBlock
            title="AI / ML"
            items={['Machine Learning','Deep Learning','LLMs','LangChain','LangGraph','Pandas','NumPy','Matplotlib','Seaborn']}
          />
          <SkillBlock
            title="Backend"
            items={['FastAPI','Flask','Spring Boot','REST APIs']}
          />
          <SkillBlock
            title="Frontend"
            items={['React.js','Tailwind CSS','SCSS','Highcharts','Syncfusion']}
          />
          <SkillBlock
            title="Databases"
            items={['PostgreSQL','MySQL','MongoDB','SQL']}
          />
          <SkillBlock
            title="Languages"
            items={['Python','Java','JavaScript']}
          />
          <SkillBlock
            title="Tools"
            items={['Git','GitHub','Jupyter','Google Colab','VS Code','PyCharm','Eclipse']}
          />
        </div>
      </div>
    </section>
  )
}
