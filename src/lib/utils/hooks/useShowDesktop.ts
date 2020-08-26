import { useEffect, useState } from 'react'
export type UseShowDesktopProps = number

export const MOBILE_VIEWPORT_WIDTH = 600

export default function useShowDesktop(breakpoint?: UseShowDesktopProps) {
  let usedBreakpoint = breakpoint ?? MOBILE_VIEWPORT_WIDTH
  const [showDesktop, setShowDesktop] = useState(
    window.innerWidth > usedBreakpoint,
  )
  useEffect(() => {
    const listener = () => {
      const updatedValue = window.innerWidth > usedBreakpoint
      if (updatedValue !== showDesktop) {
        setShowDesktop(updatedValue)
      }
    }
    window.addEventListener('resize', listener)
    return () => {
      window.removeEventListener('resize', listener)
    }
  })

  return showDesktop
}
