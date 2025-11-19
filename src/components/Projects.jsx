const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition overflow-hidden">
      <div className="aspect-[16/9] bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center">
        <div className="w-4/5 h-2/3 rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(70,179,255,0.35),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(70,179,255,0.15),transparent_60%)] border border-white/10" />
      </div>
      <div className="p-5 md:p-6">
        <h3 className="text-xl md:text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-white/70 text-sm md:text-base">{description}</p>
        {image && (
          <div className="mt-4 rounded-lg overflow-hidden border border-white/10">
            <img src={image} alt={title} className="w-full" />
          </div>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-10 py-16" style={{background:'#0a0a0a'}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <ProjectCard
            title="Automated ETL Data Pipeline"
            description="A robust Python-based ingestion system handling network retries, idempotent SQL UPSERTS, and complex data parsing for large-scale datasets."
          />
          <ProjectCard
            title="AI-Powered Heart Sound Analysis"
            description="State-of-the-art medical diagnostic tool achieving 98% F1-Score using custom audio feature engineering."
          />
          <ProjectCard
            title="Natural Language to SQL Engine"
            description="Enterprise chatbot converting human questions into executed SQL queries, democratizing data access."
          />
        </div>
      </div>
    </section>
  )
}
