const EduItem = ({ degree, school, period, coursework }) => (
  <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
      <h3 className="text-white text-lg md:text-xl font-semibold">{degree} • {school}</h3>
      <span className="text-white/50 text-sm">{period}</span>
    </div>
    {coursework && (
      <p className="mt-2 text-white/70 text-sm">Coursework: {coursework}</p>
    )}
  </div>
)

const CertItem = ({ name }) => (
  <div className="px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-white/80 text-sm">
    {name}
  </div>
)

export default function EducationCerts() {
  return (
    <section className="px-6 md:px-10 py-16" style={{ background: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Education & Certifications</h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-4">
            <EduItem
              degree="M.Tech, Artificial Intelligence"
              school="REVA University, Bangalore"
              period="Oct 2023 – Present"
              coursework="Python, DS & Algorithms, DBMS, Machine Learning, Deep Learning"
            />
            <EduItem
              degree="B.E., Computer Science"
              school="University of Kashmir, Srinagar"
              period="2017 – 2021"
              coursework="DSA, OOP, OS, DBMS, Computer Networks, Web Engineering, AI, ML"
            />
          </div>
          <div className="space-y-4">
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
              <h3 className="text-white text-lg md:text-xl font-semibold mb-3">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                <CertItem name="Google Data Analytics Professional Certificate" />
                <CertItem name="Microsoft Certified: Azure Data Scientist Associate (DP-100)" />
                <CertItem name="Microsoft Certified: Azure AI Engineer Associate (AI-102)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
