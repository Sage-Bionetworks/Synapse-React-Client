import { useEffect, useState } from 'react'
export type UseShowDesktopProps = number

export default function useShowDesktop(breakpoint: UseShowDesktopProps) {
  const [showDesktop, setShowDesktop] = useState(window.innerWidth > breakpoint)
  useEffect(() => {
    const listener = () => {
      const updatedValue = window.innerWidth > breakpoint
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
