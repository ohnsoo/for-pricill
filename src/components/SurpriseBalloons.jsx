import { motion } from 'framer-motion'

const balloons = [
  { left: '8%', color: '#C4B5FD', delay: 0, size: 44, drift: 12 },
  { left: '20%', color: '#E9D5FF', delay: 0.25, size: 34, drift: -10 },
  { left: '76%', color: '#A78BFA', delay: 0.1, size: 42, drift: -12 },
  { left: '88%', color: '#DDD6FE', delay: 0.35, size: 36, drift: 10 },
  { left: '50%', color: '#F5D0FE', delay: 0.55, size: 32, drift: 8 },
]

function SurpriseBalloons() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {balloons.map((balloon, index) => (
        <motion.div
          key={`${balloon.left}-${balloon.color}`}
          initial={{ y: 220, opacity: 0, x: 0 }}
          animate={{
            y: [-10, -150, -122],
            opacity: [0, 0.9, 0.78],
            x: [0, balloon.drift, -balloon.drift / 2],
          }}
          transition={{
            duration: 4.8,
            delay: balloon.delay,
            repeat: Infinity,
            repeatDelay: 1.8 + index * 0.2,
            ease: 'easeInOut',
          }}
          className="absolute bottom-0"
          style={{ left: balloon.left }}
        >
          <svg
            viewBox="0 0 70 112"
            width={balloon.size}
            height={balloon.size * 1.6}
            className="drop-shadow-[0_14px_24px_rgba(126,87,194,0.28)]"
          >
            <ellipse cx="35" cy="31" rx="24" ry="29" fill={balloon.color} />
            <ellipse
              cx="27"
              cy="21"
              rx="8"
              ry="11"
              fill="#FFFFFF"
              opacity="0.32"
            />
            <path
              d="M31 58 L39 58 L35 66Z"
              fill="#8B5CF6"
              opacity="0.8"
            />
            <path
              d="M35 66 C29 76 42 84 35 94 C31 99 34 104 39 110"
              fill="none"
              stroke="#A78BFA"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

export default SurpriseBalloons
