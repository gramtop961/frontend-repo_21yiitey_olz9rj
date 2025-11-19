import { motion } from 'framer-motion'

export default function Section({ id, children, variant = 'fade', delay = 0 }) {
  const variants = {
    fade: { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } },
    wipe: { hidden: { clipPath: 'inset(0 0 100% 0 round 16px)', opacity: 0 }, show: { clipPath: 'inset(0 0 0% 0 round 16px)', opacity: 1 } },
    reveal: { hidden: { opacity: 0, filter: 'blur(6px)' }, show: { opacity: 1, filter: 'blur(0px)' } },
  }
  const chosen = variants[variant] || variants.fade
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      variants={chosen}
    >
      {children}
    </motion.section>
  )
}
