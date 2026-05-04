import { motion } from 'framer-motion'

const balloons = [
  { left: '7%', size: 48, color: '#C4B5FD', delay: 0, drift: 42 },
  { left: '15%', size: 34, color: '#E9D5FF', delay: 0.18, drift: -28 },
  { left: '24%', size: 54, color: '#A78BFA', delay: 0.08, drift: 34 },
  { left: '35%', size: 38, color: '#DDD6FE', delay: 0.32, drift: -36 },
  { left: '46%', size: 46, color: '#F5D0FE', delay: 0.14, drift: 30 },
  { left: '56%', size: 36, color: '#C4B5FD', delay: 0.42, drift: -24 },
  { left: '66%', size: 52, color: '#A78BFA', delay: 0.22, drift: 38 },
  { left: '76%', size: 35, color: '#E9D5FF', delay: 0.5, drift: -34 },
  { left: '86%', size: 50, color: '#DDD6FE', delay: 0.1, drift: 28 },
  { left: '94%', size: 40, color: '#F5D0FE', delay: 0.36, drift: -30 },
]

function BalloonSvg({ color, size }) {
  return (
    <svg
      viewBox="0 0 72 122"
      width={size}
      height={size * 1.7}
      className="drop-shadow-[0_18px_28px_rgba(126,87,194,0.34)]"
    >
      <ellipse cx="36" cy="34" rx="25" ry="31" fill={color} />
      <ellipse
        cx="27"
        cy="23"
        rx="8"
        ry="12"
        fill="#FFFFFF"
        opacity="0.34"
      />
      <path d="M31 62 H41 L36 72Z" fill="#7C3AED" opacity="0.75" />
      <path
        d="M36 72 C28 84 45 94 36 106 C31 113 36 118 43 121"
        fill="none"
        stroke="#8B5CF6"
        strokeLinecap="round"
        strokeWidth="2.2"
        opacity="0.75"
      />
    </svg>
  )
}

function BalloonBurst() {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
    >
      {balloons.map((balloon, index) => (
        <motion.div
          key={`${balloon.left}-${balloon.delay}`}
          className="absolute bottom-[-8rem]"
          style={{ left: balloon.left }}
          initial={{ y: 120, x: 0, rotate: index % 2 === 0 ? -6 : 6, opacity: 0 }}
          animate={{
            y: ['12vh', '-42vh', '-118vh'],
            x: [0, balloon.drift, -balloon.drift / 1.8],
            rotate: [
              index % 2 === 0 ? -8 : 8,
              index % 2 === 0 ? 8 : -8,
              index % 2 === 0 ? -5 : 5,
            ],
            opacity: [0, 1, 0.92, 0],
          }}
          transition={{
            duration: 5.8,
            delay: balloon.delay,
            ease: 'easeOut',
            times: [0, 0.16, 0.78, 1],
          }}
        >
          <BalloonSvg color={balloon.color} size={balloon.size} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default BalloonBurst
