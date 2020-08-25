import { useEffect, useState } from 'react'
export type UseShowDesktopProps = number

export default function useShowDesktop(breakpoint: UseShowDesktopProps) {
  const [showDesktop, setShowDesktop] = useState(true)
  useEffect(() => {
    document.addEventListener('resize', () => {
      const updatedValue = window.innerWidth > breakpoint
      if (updatedValue !== showDesktop) {
        setShowDesktop(updatedValue)
      }
    })
  })

  return showDesktop
}
