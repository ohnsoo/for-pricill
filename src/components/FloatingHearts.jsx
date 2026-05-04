import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const hearts = [
  { left: '8%', top: '18%', size: 18, color: '#C4B5FD', delay: 0 },
  { left: '18%', top: '74%', size: 14, color: '#FFFFFF', delay: 1.2 },
  { left: '29%', top: '34%', size: 12, color: '#F5D0FE', delay: 0.6 },
  { left: '47%', top: '12%', size: 15, color: '#DDD6FE', delay: 1.7 },
  { left: '65%', top: '28%', size: 13, color: '#FFFFFF', delay: 0.9 },
  { left: '76%', top: '68%', size: 17, color: '#C4B5FD', delay: 1.4 },
  { left: '88%', top: '20%', size: 12, color: '#FBCFE8', delay: 0.3 },
  { left: '92%', top: '84%', size: 15, color: '#DDD6FE', delay: 2.1 },
]

function FloatingHearts() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {hearts.map((heart, index) => (
        <motion.div
          key={`${heart.left}-${heart.top}`}
          className="absolute"
          style={{ left: heart.left, top: heart.top }}
          animate={{
            y: [0, -18, 0],
            x: [0, index % 2 === 0 ? 8 : -8, 0],
            rotate: [0, index % 2 === 0 ? 8 : -8, 0],
            opacity: [0.25, 0.58, 0.25],
          }}
          transition={{
            duration: 7 + index * 0.35,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Heart
            size={heart.size}
            color={heart.color}
            fill={heart.color}
            strokeWidth={1.4}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingHearts
