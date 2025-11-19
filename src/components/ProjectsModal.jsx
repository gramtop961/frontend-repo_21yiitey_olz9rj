import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 'heart-sound',
    title: 'AI-Powered Heart Sound Classification',
    summary: 'Two-stage pipeline on raw audio delivering 98% F1-Score with real-time demo.',
    timeline: [
      { t: 'Week 1', text: 'Exploration, dataset curation, baseline metrics' },
      { t: 'Week 3', text: 'Feature engineering + model selection' },
      { t: 'Week 6', text: 'Ensemble tuning + evaluations' },
      { t: 'Week 8', text: 'Realtime Streamlit app + packaging' },
    ],
    stack: ['Python','Scikit-learn','Signal Processing','Streamlit']
  },
  {
    id: 'bottle-vision',
    title: 'AI Bottle Image Classifier',
    summary: 'Realtime detection/classification with a slick upload UI and batch analytics.',
    timeline: [
      { t: 'Sprint 1', text: 'Data labeling & model bootstrapping' },
      { t: 'Sprint 2', text: 'Model training, MLOps scripts' },
      { t: 'Sprint 3', text: 'Frontend integration + QA' },
    ],
    stack: ['YOLOv5','Python','Flask','React']
  },
]

export default function ProjectsModal() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(projects[0])

  return (
    <div className="px-6 md:px-10 py-16" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Projects</h2>
          <button className="neon-btn px-4 py-2 rounded-lg" onClick={() => setOpen(true)}>Open Overview</button>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((p) => (
            <div key={p.id} className="group rounded-2xl glass glass-hover p-5 card-3d tilt">
              <div className="text-white text-lg font-semibold">{p.title}</div>
              <div className="text-white/70 text-sm mt-2">{p.summary}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="px-2 py-1 rounded-md text-xs border border-white/10 text-white/70 bg-white/5">{s}</span>
                ))}
              </div>
              <button className="mt-4 text-sm font-semibold text-[#46b3ff] hover:underline" onClick={() => { setActive(p); setOpen(true) }}>View Details</button>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 160, damping: 18 }}
              className="relative z-10 w-full max-w-3xl glass rounded-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-white/10 flex items-start justify-between gap-4">
                <div>
                  <div className="text-xl md:text-2xl font-bold text-white">{active.title}</div>
                  <div className="text-white/70 text-sm mt-1">{active.summary}</div>
                </div>
                <button className="px-3 py-2 rounded-lg border border-white/10 text-white/70 hover:text-white hover:bg-white/5" onClick={() => setOpen(false)}>Close</button>
              </div>

              <div className="p-6 grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-white/80 text-sm font-semibold mono mb-2">Timeline</div>
                  <div className="space-y-3">
                    {active.timeline.map((step, i) => (
                      <div key={i} className="relative pl-6">
                        <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full" style={{background:'#46b3ff', boxShadow:'0 0 8px #46b3ff'}} />
                        <div className="text-white text-sm font-semibold">{step.t}</div>
                        <div className="text-white/70 text-sm">{step.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-white/80 text-sm font-semibold mono mb-2">3D Preview</div>
                  <div className="h-48 rounded-xl border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(70,179,255,0.35),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(70,179,255,0.15),transparent_60%)] card-3d tilt" />
                </div>
              </div>

              <div className="p-6 border-t border-white/10 flex items-center justify-end gap-3">
                <button className="px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/5" onClick={() => setOpen(false)}>Close</button>
                <a className="px-4 py-2 rounded-lg neon-btn" href="#" target="_blank" rel="noreferrer">Open Project</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
