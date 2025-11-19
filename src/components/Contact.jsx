export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-16" style={{ background: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Let’s build something intelligent.</h2>
            <p className="mt-2 text-white/70 text-sm md:text-base">Open to Data/AI Engineering and full‑stack roles. Prefer Bengaluru/Remote.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:syedasrar00@outlook.com" className="px-4 py-2 rounded-lg font-semibold text-[#0a0a0a]" style={{ background: '#46b3ff' }}>Email</a>
            <a href="https://www.linkedin.com/in/syed-asrar-zahoor" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg font-semibold border border-white/20 text-white hover:bg-white/5 transition">LinkedIn</a>
            <a href="https://github.com/syedasrar00" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg font-semibold border border-white/20 text-white hover:bg-white/5 transition">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}
