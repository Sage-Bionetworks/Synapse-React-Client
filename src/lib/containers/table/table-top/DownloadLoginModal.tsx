import { Modal, ModalBody, ModalFooter, Button } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/ModalHeader'
import React from 'react'

export type DownloadLoginModalProps = {
  showModal?: boolean
  onHide: Function
}

export const DownloadLoginModal: React.FunctionComponent<DownloadLoginModalProps> = props => {
  return (
    <Modal animation={false} show={true} onHide={() => props.onHide()}>
      <ModalHeader closeButton>
        <span
          style={{ fontWeight: 'bold', color: '#515359', fontSize: '1.5em' }}
        >
          Sign In Required
        </span>
      </ModalHeader>
      <ModalBody>
        <p>
          Anyone can browse public content on the Synapse website, but in order
          to download and create content you will need to register for an
          account using an email address.
        </p>
        <p>
          To find out more see&nbsp;
          <a
            href="https://docs.synapse.org/articles/user_profiles.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            User Accounts
          </a>
          <span> and </span>
          <a
            href="https://docs.synapse.org/articles/governance.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            Governance Overview
          </a>
          .
        </p>
      </ModalBody>
      <ModalFooter>
        <Button variant="secondary" onClick={() => props.onHide()}>
          CANCEL
        </Button>
        <Button
          className="SRC-SIGN-IN-CLASS"
          variant="primary"
          onClick={() => props.onHide()}
        >
          Sign in
        </Button>
      </ModalFooter>
    </Modal>
  )
}
