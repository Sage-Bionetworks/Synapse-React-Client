import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { ButtonVariant } from 'react-bootstrap/esm/types'

export type WarningModalProps = {
  title: string
  copy: string | JSX.Element
  confirmCopy?: string
  className?: string
  show: boolean
  onConfirm: Function
  confirmButtonVariant?: ButtonVariant
  onCancel: Function
  callbackArgs: any
}

export const WarningModal: React.FunctionComponent<WarningModalProps> = ({
  title,
  copy,
  confirmCopy,
  className,
  show,
  onConfirm,
  confirmButtonVariant = 'success',
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
        <Button
          variant={confirmButtonVariant}
          onClick={() => onConfirm(...callbackArgs)}
        >
          <span>{confirmCopy || 'OK'}</span>
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default WarningModal
