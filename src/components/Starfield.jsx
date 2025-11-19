import { useEffect, useRef } from 'react'

export default function Starfield({ density = 160, speed = 0.02 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf

    const stars = Array.from({ length: density }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
    }))

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = Math.floor(canvas.clientWidth * dpr)
      canvas.height = Math.floor(canvas.clientHeight * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const step = () => {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      ctx.fillStyle = 'rgba(255,255,255,0.9)'
      stars.forEach((s) => {
        s.z -= speed
        if (s.z <= 0) {
          s.x = Math.random(); s.y = Math.random(); s.z = 1
        }
        const k = 0.1 / s.z
        const x = (s.x - 0.5) * width * k + width / 2
        const y = (s.y - 0.5) * height * k + height / 2
        const r = Math.max(0.5, 1.5 * (1 - s.z))
        ctx.globalAlpha = 0.8 * (1 - s.z)
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill()
      })

      raf = requestAnimationFrame(step)
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    raf = requestAnimationFrame(step)
    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, [density, speed])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
