import { Close } from '@material-ui/icons'
import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { uniqueId } from 'lodash-es'

export type SynapseModalProps = {
  title: string
  children: React.ReactNode
  footer?: JSX.Element
  show: boolean
  onHide: () => void
}

export default function SynapseModal({
  title,
  children,
  footer,
  show,
  onHide,
}: SynapseModalProps) {
  // ID used for ARIA roles and labels
  const id = useRef(uniqueId('modal-')).current
  const titleId = id + '-title'
  const bodyId = id + '-title'

  const modalElement = (
    <div className="SynapseModalBackdrop" onClick={() => onHide()}>
      <div
        role="dialog"
        aria-labelledby={titleId}
        aria-describedby={bodyId}
        className="SynapseModal"
        onClick={event => event.stopPropagation()}
      >
        <div className="ModalHeader">
          <h3 id={titleId} className="ModalTitle">
            {title}
          </h3>
          <div className={'CloseButton'} role="button" onClick={() => onHide()}>
            <Close />
          </div>
        </div>
        <hr />
        <div id={bodyId} className="ModalBody">
          {children}
        </div>
        {!!footer && (
          <>
            <hr />
            <div>{footer}</div>
          </>
        )}
      </div>
    </div>
  )

  const modal = ReactDOM.createPortal(modalElement, document.body)

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [show])

  return show ? modal : <></>
}
