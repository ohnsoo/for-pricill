import { useEffect, useRef } from 'react'

function HeartCursorMark() {
  return (
    <svg viewBox="0 0 44 44" className="h-5 w-5" aria-hidden="true">
      <path
        d="M22 36 C13 29 6 23 6 14 C6 8 12 5 17 9 C20 11 21 14 22 16 C23 14 25 11 28 9 C34 5 39 9 39 15 C38 23 31 29 22 36Z"
        fill="#C084FC"
        stroke="#FFFFFF"
        strokeWidth="2"
      />
    </svg>
  )
}

function SparkleCursorMark() {
  return (
    <svg viewBox="0 0 28 28" className="h-3 w-3" aria-hidden="true">
      <path
        d="M14 2 L17 11 L26 14 L17 17 L14 26 L11 17 L2 14 L11 11 Z"
        fill="#A78BFA"
      />
    </svg>
  )
}

function CustomCursor() {
  const cursorRef = useRef(null)
  const targetPosition = useRef({ x: 0, y: 0 })
  const currentPosition = useRef({ x: 0, y: 0 })
  const frameRef = useRef(null)

  useEffect(() => {
    const canShowCursor =
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!canShowCursor) {
      return undefined
    }

    const cursor = cursorRef.current

    if (!cursor) {
      return undefined
    }

    const showCursor = () => {
      cursor.style.opacity = '1'
    }

    const hideCursor = () => {
      cursor.style.opacity = '0'
    }

    const handlePointerMove = (event) => {
      targetPosition.current = {
        x: event.clientX,
        y: event.clientY,
      }
      showCursor()
    }

    const animateCursor = () => {
      const current = currentPosition.current
      const target = targetPosition.current

      current.x += (target.x - current.x) * 0.2
      current.y += (target.y - current.y) * 0.2

      cursor.style.transform = `translate3d(${current.x - 14}px, ${
        current.y - 14
      }px, 0)`

      frameRef.current = window.requestAnimationFrame(animateCursor)
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerleave', hideCursor)
    frameRef.current = window.requestAnimationFrame(animateCursor)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', hideCursor)

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="custom-cursor pointer-events-none fixed left-0 top-0 z-[90] hidden h-7 w-7 opacity-0 transition-opacity duration-200 md:block"
    >
      <span className="custom-cursor__heart absolute left-1 top-1 drop-shadow-[0_6px_12px_rgba(167,139,250,0.5)]">
        <HeartCursorMark />
      </span>
      <span className="custom-cursor__sparkle absolute -right-1 -top-1">
        <SparkleCursorMark />
      </span>
      <span className="custom-cursor__mini-heart absolute -bottom-1 right-0 h-2.5 w-2.5 rounded-full bg-pink-200 shadow-[0_0_14px_rgba(244,114,182,0.45)]" />
    </div>
  )
}

export default CustomCursor
