import React from 'react'
import Button from 'react-bootstrap/Button'
import { ButtonVariant } from 'react-bootstrap/esm/types'
import Modal from 'react-bootstrap/Modal'

export type WarningModalProps = {
  title: string
  copy: string | JSX.Element
  confirmCopy?: string
  className?: string
  show: boolean
  onOK: Function
  okButtonVariant?: ButtonVariant
  onCancel: Function
  callbackArgs: any
}

export const WarningModal: React.FunctionComponent<WarningModalProps> = ({
  title,
  copy,
  confirmCopy,
  className,
  show,
  onOK,
  okButtonVariant = 'success',
  onCancel,
  callbackArgs,
}: WarningModalProps) => {
  return (
    <Modal
      show={show}
      animation={false}
      className={className}
      onHide={() => onCancel()}
    >
      <Modal.Header closeButton={false} onHide={() => onCancel()}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{copy}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => onCancel()}>
          Cancel
        </Button>
        <Button variant={okButtonVariant} onClick={() => onOK(...callbackArgs)}>
          <span>{confirmCopy || 'OK'}</span>
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default WarningModal
