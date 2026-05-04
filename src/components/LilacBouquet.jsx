import { motion } from 'framer-motion'

const sprigs = [
  { x: 82, y: 178, rotate: -18, scale: 0.9, height: 118 },
  { x: 110, y: 178, rotate: -3, scale: 1.04, height: 136 },
  { x: 137, y: 177, rotate: 14, scale: 0.96, height: 124 },
]

const petalRows = [
  { y: -116, spread: 0, rx: 8, ry: 12 },
  { y: -101, spread: 7, rx: 9, ry: 13 },
  { y: -86, spread: 10, rx: 10, ry: 14 },
  { y: -70, spread: 12, rx: 10, ry: 14 },
  { y: -54, spread: 13, rx: 11, ry: 15 },
  { y: -38, spread: 11, rx: 10, ry: 14 },
  { y: -23, spread: 8, rx: 9, ry: 13 },
]

function Petal({ cx, cy, rx, ry, rotate, fill = '#5B2A86' }) {
  return (
    <g>
      <ellipse
        cx={cx - 1}
        cy={cy + 1}
        rx={rx + 4}
        ry={ry + 4}
        transform={`rotate(${rotate} ${cx} ${cy})`}
        fill="#C4B5FD"
        opacity="0.26"
        filter="url(#watercolor)"
      />
      <ellipse
        cx={cx}
        cy={cy}
        rx={rx}
        ry={ry}
        transform={`rotate(${rotate} ${cx} ${cy})`}
        fill={fill}
        opacity="0.72"
        filter="url(#watercolor)"
      />
      <ellipse
        cx={cx + 1}
        cy={cy - 1}
        rx={rx * 0.58}
        ry={ry * 0.68}
        transform={`rotate(${rotate + 4} ${cx} ${cy})`}
        fill="#3D1768"
        opacity="0.32"
      />
    </g>
  )
}

function LavenderSprig({ x, y, rotate, scale, height }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <path
        d={`M0 4 C-3 -34 1 -72 0 -${height}`}
        fill="none"
        stroke="#6C8F68"
        strokeLinecap="round"
        strokeWidth="5"
        opacity="0.55"
        filter="url(#watercolor)"
      />
      <path
        d={`M0 4 C-3 -34 1 -72 0 -${height}`}
        fill="none"
        stroke="#4E7A4E"
        strokeLinecap="round"
        strokeWidth="2.5"
        opacity="0.78"
      />

      {petalRows.map((row, index) => {
        const topOffset = Math.max(0, height - 118)
        const yPosition = row.y - topOffset
        const hue = index % 2 === 0 ? '#5B2A86' : '#684096'

        if (row.spread === 0) {
          return (
            <Petal
              key={row.y}
              cx={0}
              cy={yPosition}
              rx={row.rx}
              ry={row.ry}
              rotate={5}
              fill={hue}
            />
          )
        }

        return (
          <g key={row.y}>
            <Petal
              cx={-row.spread}
              cy={yPosition}
              rx={row.rx}
              ry={row.ry}
              rotate={-36}
              fill={hue}
            />
            <Petal
              cx={row.spread}
              cy={yPosition + 1}
              rx={row.rx}
              ry={row.ry}
              rotate={34}
              fill={hue}
            />
          </g>
        )
      })}
    </g>
  )
}

function LilacBouquet() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.86, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.85, delay: 0.15, ease: 'easeOut' }}
      className="relative mx-auto mb-8 flex h-52 w-52 items-center justify-center sm:h-60 sm:w-60"
    >
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -5, 0], rotate: [-1.5, 1, -1.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative h-full w-full rounded-[2.5rem] border border-purple-200/60 bg-white/45 shadow-glow backdrop-blur-sm"
      >
        <svg
          viewBox="0 0 220 220"
          role="img"
          aria-label="Watercolor lilac flower bouquet"
          className="h-full w-full drop-shadow-[0_18px_28px_rgba(126,87,194,0.22)]"
        >
          <defs>
            <filter id="watercolor" x="-30%" y="-30%" width="160%" height="160%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="2"
                seed="12"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="1.4"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>

          <g>
            {sprigs.map((sprig) => (
              <LavenderSprig key={`${sprig.x}-${sprig.rotate}`} {...sprig} />
            ))}
          </g>

          <g
            fill="none"
            stroke="#6C8F68"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#watercolor)"
          >
            <path
              d="M83 172 C65 159 57 148 50 128 C69 136 76 151 83 172Z"
              strokeWidth="4"
              opacity="0.65"
            />
            <path
              d="M136 165 C154 151 168 137 184 118 C167 121 149 139 136 165Z"
              strokeWidth="4"
              opacity="0.65"
            />
            <path
              d="M103 181 C93 166 88 154 86 137 C100 148 104 161 103 181Z"
              strokeWidth="3"
              opacity="0.58"
            />
          </g>

          <g
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#watercolor)"
          >
            <path
              d="M106 161 C91 140 74 144 76 162 C79 180 99 174 106 161Z"
              stroke="#EACB8D"
              strokeWidth="9"
            />
            <path
              d="M114 161 C130 140 148 144 144 162 C141 180 121 174 114 161Z"
              stroke="#EACB8D"
              strokeWidth="9"
            />
            <path
              d="M108 163 C98 177 86 188 73 195"
              stroke="#EACB8D"
              strokeWidth="8"
            />
            <path
              d="M114 163 C128 176 140 187 153 195"
              stroke="#EACB8D"
              strokeWidth="8"
            />
            <path
              d="M103 165 C109 159 115 159 121 165"
              stroke="#BFA7F2"
              strokeWidth="9"
            />
          </g>
        </svg>
      </motion.div>
    </motion.div>
  )
}

export default LilacBouquet
