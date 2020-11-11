import * as React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export type ToastMessageProps = {
  text: string
  show: boolean
  autohide: boolean
}

/**
 * Generalization of a Material-style toast message used in a couple of places. In the future,
 * we could consider scaffolding this to support multiple messages that can be triggered by sibling/child components
 * using a dispatch function passed via context.
 */
export const ToastMessage: React.FunctionComponent<ToastMessageProps> = ({
  text,
  show,
  autohide,
}) => {
  return (
    <TransitionGroup>
      {show && (
        <CSSTransition
          classNames="SRC-card"
          timeout={autohide ? { enter: 500, exit: 300 } : {}}
        >
          <div className="SRC-modal">{text}</div>
        </CSSTransition>
      )}
    </TransitionGroup>
  )
}
