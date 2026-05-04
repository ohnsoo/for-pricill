import { useEffect } from 'react'
import { motion } from 'framer-motion'

const particles = [
  { left: '50%', top: '48%', x: -310, y: -180, size: 18, delay: 0 },
  { left: '50%', top: '48%', x: -230, y: -60, size: 12, delay: 0.04 },
  { left: '50%', top: '48%', x: -150, y: 110, size: 16, delay: 0.1 },
  { left: '50%', top: '48%', x: -48, y: -150, size: 13, delay: 0.08 },
  { left: '50%', top: '48%', x: 82, y: 132, size: 15, delay: 0.02 },
  { left: '50%', top: '48%', x: 185, y: -96, size: 12, delay: 0.12 },
  { left: '50%', top: '48%', x: 265, y: 62, size: 18, delay: 0.06 },
  { left: '50%', top: '48%', x: 330, y: -160, size: 14, delay: 0.16 },
  { left: '50%', top: '48%', x: -360, y: 48, size: 10, delay: 0.18 },
  { left: '50%', top: '48%', x: 360, y: 160, size: 11, delay: 0.2 },
]

function TinyHeart({ size }) {
  return (
    <svg viewBox="0 0 44 44" width={size} height={size} aria-hidden="true">
      <path
        d="M22 36 C13 29 6 23 6 14 C6 8 12 5 17 9 C20 11 21 14 22 16 C23 14 25 11 28 9 C34 5 39 9 39 15 C38 23 31 29 22 36Z"
        fill="#C084FC"
      />
    </svg>
  )
}

function TinySparkle({ size }) {
  return (
    <svg viewBox="0 0 44 44" width={size} height={size} aria-hidden="true">
      <path
        d="M22 4 L27 17 L40 22 L27 27 L22 40 L17 27 L4 22 L17 17 Z"
        fill="#F5D0FE"
      />
      <path
        d="M22 11 L25 19 L33 22 L25 25 L22 33 L19 25 L11 22 L19 19 Z"
        fill="#A78BFA"
        opacity="0.55"
      />
    </svg>
  )
}

function OpeningRevealEffect({ onComplete }) {
  useEffect(() => {
    const timer = window.setTimeout(onComplete, 2800)

    return () => {
      window.clearTimeout(timer)
    }
  }, [onComplete])

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[80] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <motion.div
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/45 blur-3xl"
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: [0.2, 2.8, 4], opacity: [0, 0.65, 0] }}
        transition={{ duration: 1.45, ease: 'easeOut' }}
      />

      {particles.map((particle, index) => (
        <motion.div
          key={`${particle.x}-${particle.y}`}
          className="absolute"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          initial={{ x: 0, y: 0, scale: 0.25, rotate: 0, opacity: 0 }}
          animate={{
            x: particle.x,
            y: particle.y,
            scale: [0.25, 1.2, 0.75],
            rotate: index % 2 === 0 ? 34 : -34,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2.15,
            delay: particle.delay,
            ease: 'easeOut',
            times: [0, 0.28, 1],
          }}
        >
          {index % 2 === 0 ? (
            <TinyHeart size={particle.size * 2} />
          ) : (
            <TinySparkle size={particle.size * 2} />
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default OpeningRevealEffect
