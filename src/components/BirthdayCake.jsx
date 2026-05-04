import { motion } from 'framer-motion'

const candles = [
  { x: 82, delay: 0 },
  { x: 110, delay: 0.25 },
  { x: 138, delay: 0.5 },
]

function BirthdayCake() {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, y: 16, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="mx-auto mb-7 h-44 w-64 max-w-full"
    >
      <svg
        viewBox="0 0 220 160"
        className="h-full w-full drop-shadow-[0_24px_35px_rgba(126,87,194,0.22)]"
        role="img"
        aria-label="Birthday cake with lilac candles"
      >
        <defs>
          <linearGradient id="cakeTop" x1="42" x2="178" y1="64" y2="118">
            <stop stopColor="#FDF7FF" />
            <stop offset="1" stopColor="#EDE9FE" />
          </linearGradient>
          <linearGradient id="cakeBody" x1="52" x2="168" y1="86" y2="150">
            <stop stopColor="#F5D0FE" />
            <stop offset="1" stopColor="#C4B5FD" />
          </linearGradient>
          <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
            <stop stopColor="#FEF3C7" stopOpacity="1" />
            <stop offset="0.45" stopColor="#FDBA74" stopOpacity="0.75" />
            <stop offset="1" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="110" cy="146" rx="72" ry="8" fill="#A78BFA" opacity="0.18" />

        {candles.map((candle) => (
          <motion.g
            key={candle.x}
            animate={{ rotate: [-2, 2, -2], y: [0, -1.5, 0] }}
            transition={{
              duration: 2.2,
              delay: candle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ originX: `${candle.x}px`, originY: '72px' }}
          >
            <rect
              x={candle.x - 5}
              y="38"
              width="10"
              height="42"
              rx="4"
              fill="#C4B5FD"
            />
            <path
              d={`M${candle.x - 3} 44 L${candle.x + 4} 38 M${candle.x - 4} 57 L${candle.x + 4} 50 M${candle.x - 4} 70 L${candle.x + 4} 63`}
              fill="none"
              stroke="#7C3AED"
              strokeLinecap="round"
              strokeWidth="2"
              opacity="0.65"
            />
            <motion.g
              animate={{
                scale: [1, 1.18, 0.92, 1],
                x: [0, 1.2, -0.8, 0],
              }}
              transition={{
                duration: 0.95,
                delay: candle.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <ellipse
                cx={candle.x}
                cy="28"
                rx="16"
                ry="18"
                fill="url(#flameGlow)"
                opacity="0.85"
              />
              <path
                d={`M${candle.x} 13 C${candle.x - 10} 26 ${candle.x - 2} 36 ${candle.x} 39 C${candle.x + 5} 34 ${candle.x + 11} 25 ${candle.x} 13Z`}
                fill="#F59E0B"
              />
              <path
                d={`M${candle.x + 1} 20 C${candle.x - 4} 28 ${candle.x} 33 ${candle.x + 1} 35 C${candle.x + 5} 31 ${candle.x + 7} 25 ${candle.x + 1} 20Z`}
                fill="#FEF3C7"
              />
            </motion.g>
          </motion.g>
        ))}

        <path
          d="M46 82 C46 68 58 58 74 58 H146 C162 58 174 68 174 82 V92 H46Z"
          fill="url(#cakeTop)"
          stroke="#DDD6FE"
          strokeWidth="3"
        />
        <path
          d="M46 86 H174 V130 C174 139 166 146 156 146 H64 C54 146 46 139 46 130Z"
          fill="url(#cakeBody)"
          stroke="#A78BFA"
          strokeWidth="3"
        />
        <path
          d="M55 90 C63 105 73 105 81 90 C89 105 99 105 107 90 C115 105 125 105 133 90 C141 105 151 105 159 90"
          fill="none"
          stroke="#FFFFFF"
          strokeLinecap="round"
          strokeWidth="8"
          opacity="0.8"
        />
        <path
          d="M68 122 H152"
          fill="none"
          stroke="#FFFFFF"
          strokeLinecap="round"
          strokeWidth="6"
          opacity="0.7"
        />
        <circle cx="78" cy="115" r="4" fill="#FDF2F8" />
        <circle cx="104" cy="116" r="4" fill="#FDF2F8" />
        <circle cx="130" cy="115" r="4" fill="#FDF2F8" />
        <circle cx="151" cy="117" r="4" fill="#FDF2F8" />
      </svg>
    </motion.div>
  )
}

export default BirthdayCake
