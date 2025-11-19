const Bullet = ({ children }) => (
  <li className="pl-5 relative text-white/80 text-sm md:text-base">
    <span className="absolute left-0 top-2 w-2 h-2 rounded-full" style={{ background: '#46b3ff', boxShadow: '0 0 6px #46b3ff' }} />
    {children}
  </li>
)

export default function ResumeHighlights() {
  return (
    <section className="px-6 md:px-10 py-16" style={{ background: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Impact Highlights</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 space-y-3">
            <h3 className="text-white text-lg md:text-xl font-semibold">Enhancesys Innovations • Data Scientist</h3>
            <ul className="space-y-2">
              <Bullet>Built a LangChain + OpenAI chatbot that converts natural language to SQL, unlocking self‑serve analytics for non‑technical teams.</Bullet>
              <Bullet>Delivered real‑time dashboards with React, Syncfusion, and Highcharts to elevate decision‑making.</Bullet>
              <Bullet>Designed and scaled REST APIs in Spring Boot and Flask to streamline data delivery.</Bullet>
              <Bullet>Migrated data from MongoDB to PostgreSQL with zero downtime and preserved analytics integrity.</Bullet>
              <Bullet>Automated weekly reporting with Python, saving 10+ hours each week.</Bullet>
            </ul>
          </div>
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 space-y-3">
            <h3 className="text-white text-lg md:text-xl font-semibold">PrepForTech • Full Stack Intern</h3>
            <ul className="space-y-2">
              <Bullet>Shipped two production web apps end‑to‑end in an Agile team with Java, Spring Boot, and React.</Bullet>
              <Bullet>Designed and consumed REST APIs to connect services and databases cleanly.</Bullet>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
