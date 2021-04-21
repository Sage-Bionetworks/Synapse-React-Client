import React, { RefObject, useRef, useState } from 'react'
import { Overlay } from 'react-bootstrap'
import { Placement } from 'react-bootstrap/esm/Overlay'

function resetTimer(timer: React.MutableRefObject<NodeJS.Timeout | null>) {
  if (timer.current) {
    clearTimeout(timer.current)
  }
}

export function useOverlay(
  children: JSX.Element,
  targetRef: RefObject<any>,
  delayShow = 250,
  delayHide = 500,
  placement: Placement = 'top-start',
) {
  const timer = useRef<NodeJS.Timeout | null>(null)
  const [isShowing, setIsShowing] = useState(false)

  function toggle(show: boolean = isShowing, withDelay: boolean = true) {
    resetTimer(timer)
    if (withDelay) {
      timer.current = setTimeout(
        () => setIsShowing(show),
        show ? delayShow : delayHide,
      )
    } else {
      setIsShowing(show)
    }
  }

  function toggleShow(withDelay: boolean = true) {
    toggle(true, withDelay)
  }

  function toggleHide(withDelay: boolean = true) {
    toggle(false, withDelay)
  }

  const OverlayComponent = (
    <Overlay target={targetRef.current} show={isShowing} placement={placement}>
      {({ placement, arrowProps, show: _show, popper, ...props }) => {
        return (
          <div
            className="bootstrap-4-backport"
            onMouseEnter={() => {
              toggle(true, false)
            }}
            onMouseLeave={() => {
              toggleHide(true)
            }}
            {...props}
            style={{ ...props.style, width: 'max-content', minWidth: '300px' }}
          >
            {children}
          </div>
        )
      }}
    </Overlay>
  )

  return { OverlayComponent, isShowing, toggleShow, toggleHide, toggle }
}
