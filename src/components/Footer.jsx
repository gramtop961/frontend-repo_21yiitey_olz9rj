export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-12 border-t border-white/10" style={{background:'#0a0a0a', color:'#f5f5f5'}}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/60">Built by an Engineer, Driven by Data.</p>
        <div className="flex items-center gap-5 text-sm">
          <a className="hover:text-[#46b3ff] transition" href="https://github.com/syedasrar00" target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:text-[#46b3ff] transition" href="https://www.linkedin.com/in/syed-asrar-zahoor" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:text-[#46b3ff] transition" href="mailto:syedasrar00@outlook.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
