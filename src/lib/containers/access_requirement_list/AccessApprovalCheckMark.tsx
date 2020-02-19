import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faLock } from '@fortawesome/free-solid-svg-icons'

type Props = {
  isCompleted: boolean | undefined
}
export default function AccessApprovalCheckMark({ isCompleted }: Props) {
  return (
    <div className={`check-mark-container ${isCompleted ? 'green' : 'orange'}`}>
      <FontAwesomeIcon icon={isCompleted ? faCheck : faLock} />
    </div>
  )
}
