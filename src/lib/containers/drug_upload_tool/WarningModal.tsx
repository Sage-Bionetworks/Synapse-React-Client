import React from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export type WarningModalProps = {
  title: string
  copy: string | JSX.Element
  confirmCopy?: string
  className?: string
  show: boolean
  onOK: Function
  onCancel: Function
  callbackArgs: any
}

export default function WarningModal(props: WarningModalProps) {
 
  return (
    <Modal show={props.show} animation={false} className={props.className}>
      <Modal.Header closeButton={false} onHide={() => props.onCancel()}>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.copy}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => props.onCancel()}>
          Cancel
        </Button>
        <Button variant="success" onClick={() => props.onOK(...props.callbackArgs)}>
          <span>{props.confirmCopy || 'OK'}</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

