import React, { useState } from 'react'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export type ExpandableContentProps = {
  title: JSX.Element
  content: JSX.Element
  key: string
}

export default function ExpandableContent({
  title,
  content,
}: ExpandableContentProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="ExpandableContent">
      <div className={'ExpandableContent__button__container'}>
        <button
          className={isExpanded ? 'expanded' : ''}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>{title}</span>
          <FontAwesomeIcon icon={isExpanded ? 'times' : 'plus'} />
        </button>
      </div>
      <div
        className={`ExpandableContent__content__container ${
          isExpanded ? '' : 'hide'
        }`}
      >
        {content}
      </div>
      {/* <TransitionGroup component={null}>
        {isExpanded && (
          <CSSTransition
            // The component doesn't run a transition on mount, we override this
            // by setting appear to true because otherwise the triangle indicator wouldn't show
            appear={true}
            classNames="SRC-accordion-menu"
            key={key}
            timeout={{ enter: 1000, exit: 500 }}
          >
          </CSSTransition>
        )}
      </TransitionGroup> */}
    </div>
  )
}
