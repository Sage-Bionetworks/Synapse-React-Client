import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { ButtonVariant } from 'react-bootstrap/esm/types'

export type WarningModalProps = {
  title: string
  modalBody: string | JSX.Element
  confirmButtonText?: string
  className?: string
  show: boolean
  onConfirm: Function
  onConfirmCallbackArgs: any
  confirmButtonVariant?: ButtonVariant
  onCancel: () => void
}

export const WarningModal: React.FunctionComponent<WarningModalProps> = ({
  title,
  modalBody,
  confirmButtonText,
  className,
  show,
  onConfirm,
  confirmButtonVariant = 'success',
  onCancel,
  onConfirmCallbackArgs,
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
      <Modal.Body>{modalBody}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => onCancel()}>
          Cancel
        </Button>
        <Button
          variant={confirmButtonVariant}
          onClick={() => onConfirm(...onConfirmCallbackArgs)}
        >
          <span>{confirmButtonText || 'OK'}</span>
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default WarningModal
