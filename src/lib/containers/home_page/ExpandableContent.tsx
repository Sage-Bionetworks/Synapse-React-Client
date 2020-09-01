import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export type ExpandableContentProps = {
  title: JSX.Element
  content: JSX.Element
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
          <FontAwesomeIcon
            className="SRC-primary-action-color"
            icon={isExpanded ? 'times' : 'plus'}
          />
        </button>
      </div>
      <div
        className={`ExpandableContent__content__container ${
          isExpanded ? '' : 'hide'
        }`}
      >
        {content}
      </div>
    </div>
  )
}
