const ProjectCard = ({ title, description, stack, link }) => {
  return (
    <div className="group rounded-2xl glass glass-hover overflow-hidden">
      <div className="relative aspect-[16/9] bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center">
        <div className="w-4/5 h-2/3 rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(70,179,255,0.35),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(70,179,255,0.15),transparent_60%)] border border-white/10 floating" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition" style={{boxShadow:'inset 0 0 0 1px rgba(70,179,255,.35)'}} />
      </div>
      <div className="p-5 md:p-6">
        <h3 className="text-xl md:text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-white/70 text-sm md:text-base">{description}</p>
        {stack && (
          <div className="mt-3 flex flex-wrap gap-2">
            {stack.map((s) => (
              <span key={s} className="px-2 py-1 rounded-md text-xs border border-white/10 text-white/70 bg-white/5">{s}</span>
            ))}
          </div>
        )}
        {link && (
          <a href={link} target="_blank" rel="noreferrer" className="inline-block mt-4 text-sm font-semibold text-[#46b3ff] hover:underline">View Project</a>
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
            title="AI-Powered Heart Sound Classification"
            description="Two-stage pipeline on raw, unfiltered audio delivering 98% F1-Score, surpassing published benchmarks. Deployed as a real-time Streamlit app."
            stack={["Python","Scikit-learn","Signal Processing","Streamlit"]}
          />
          <ProjectCard
            title="AI Bottle Image Classifier"
            description="Vision system to detect, classify, and count beverage bottles with real-time UI for upload and results."
            stack={["YOLOv5","Python","Flask","React"]}
          />
          <ProjectCard
            title="Natural Language → SQL Assistant"
            description="Conversational analytics agent translating questions into parameterized SQL with guardrails for safety."
            stack={["LangChain","OpenAI API","PostgreSQL","Flask/Spring Boot"]}
          />
        </div>
      </div>
    </section>
  )
}
