import { motion } from 'framer-motion'

function OpeningLetter({ onOpen }) {
  return (
    <motion.section
      key="opening-letter"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f1e7ff] px-5 text-purple-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.72),transparent_48%),radial-gradient(circle_at_20%_18%,rgba(196,181,253,0.38),transparent_30%),radial-gradient(circle_at_80%_76%,rgba(244,193,218,0.24),transparent_34%)]" />

      <motion.button
        type="button"
        onClick={onOpen}
        className="group relative z-10 flex flex-col items-center gap-5 rounded-[2rem] p-4 outline-none focus-visible:ring-4 focus-visible:ring-violet-300/70"
        initial={{ opacity: 0, y: 18, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileTap={{ scale: 0.98 }}
        aria-label="Open birthday letter"
      >
        <motion.div
          className="relative h-48 w-72 drop-shadow-[0_22px_42px_rgba(167,139,250,0.28)] sm:h-56 sm:w-[22rem]"
          animate={{
            y: [0, -10, 0],
            rotate: [-1.4, 1.4, -1.4],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg
            className="h-full w-full overflow-visible"
            viewBox="0 0 360 230"
            role="img"
            aria-hidden="true"
          >
            <defs>
              <filter
                id="letterSoftShadow"
                x="-20%"
                y="-30%"
                width="140%"
                height="160%"
              >
                <feDropShadow
                  dx="0"
                  dy="16"
                  stdDeviation="14"
                  floodColor="#c4b5fd"
                  floodOpacity="0.38"
                />
              </filter>
              <linearGradient id="heartSeal" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#f0abfc" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
            </defs>
            <g filter="url(#letterSoftShadow)">
              <path
                d="M38 66 C38 55 47 48 58 48 H302 C313 48 322 55 322 66 V168 C322 179 313 186 302 186 H58 C47 186 38 179 38 168 Z"
                fill="white"
              />
              <path
                d="M44 60 L180 143 L316 60"
                fill="none"
                stroke="#efe4ff"
                strokeWidth="13"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M44 178 L142 104"
                fill="none"
                stroke="#efe4ff"
                strokeWidth="13"
                strokeLinecap="round"
              />
              <path
                d="M316 178 L218 104"
                fill="none"
                stroke="#efe4ff"
                strokeWidth="13"
                strokeLinecap="round"
              />
              <path
                d="M48 61 C48 53 55 48 64 48 H296 C305 48 312 53 312 61"
                fill="none"
                stroke="white"
                strokeWidth="14"
                strokeLinecap="round"
              />
            </g>
            <motion.path
              d="M180 158 C159 139 137 125 137 101 C137 86 149 75 163 75 C172 75 178 80 180 87 C183 80 190 75 199 75 C213 75 224 86 224 101 C224 125 202 139 180 158 Z"
              fill="url(#heartSeal)"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '180px 116px' }}
            />
          </svg>
        </motion.div>
        <motion.p
          className="text-lg font-semibold lowercase tracking-wide text-violet-500 drop-shadow-sm sm:text-xl"
          animate={{ opacity: [0.55, 1, 0.55], y: [0, -2, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          open it!
        </motion.p>
      </motion.button>
    </motion.section>
  )
}

export default OpeningLetter
