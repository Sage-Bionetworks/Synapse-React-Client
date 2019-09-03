import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export type WarningModalProps = {
  title: string
  copy: string | JSX.Element
  confirmCopy?: string
  show: boolean
  onOK: Function
  onCancel: Function
  callbackArgs: any
}

export default function WarningModal(props: WarningModalProps) {
  const [show] = useState(props.show);
  console.log(`callback: ${props.callbackArgs}`)

  return (
    <Modal show={show} animation={false}>
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

