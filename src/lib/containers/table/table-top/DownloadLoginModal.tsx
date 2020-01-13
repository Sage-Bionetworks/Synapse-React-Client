import { Modal, ModalBody, ModalFooter, Button } from 'react-bootstrap'
import Login from '../../Login'
import ModalHeader from 'react-bootstrap/ModalHeader'
import React, { useState } from 'react'

export type DownloadLoginModalProps = {
  showModal?: boolean
  onHide: Function
}

export const DownloadLoginModal: React.FunctionComponent<DownloadLoginModalProps> = props => {
  const [showLogin, setShowLogin] = useState(false)

  const getModalContent = (isShowLogin: boolean): JSX.Element => {
    if (isShowLogin) {
      return <Login token={''} theme={'light'} icon={true} />
    } else {
      return (
        <>
          <p>
            Anyone can browse public content on the Synapse website, but in
            order to download and create content you will need to register for
            an account using an email address.
          </p>
          <p>
            To find out more see&nbsp;
            <a
              href="https://docs.synapse.org/articles/user_profiles.html"
              target="_blank"
            >
              User Accounts
            </a>
            <span> and </span>
            <a
              href="https://docs.synapse.org/articles/governance.html"
              target="_blank"
            >
              Governance Overview
            </a>.
          </p>
        </>
      )
    }
  }
  return (
    <Modal
      animation={false}
      centered={true}
      show={true}
      onHide={() => props.onHide()}
    >
      {!showLogin && (
        <ModalHeader closeButton>
          <span
            style={{ fontWeight: 'bold', color: '#515359', fontSize: '1.5em' }}
          >
            Sign In Required
          </span>
        </ModalHeader>
      )}
      <ModalBody>{getModalContent(showLogin)}</ModalBody>
      <ModalFooter>
        <Button variant="secondary" onClick={() => props.onHide()}>
          CANCEL
        </Button>
        {!showLogin && (
          <Button
            className="SRC-primary-button"
            variant="primary"
            onClick={() => setShowLogin(true)}
          >
            Sign in
          </Button>
        )}
      </ModalFooter>
    </Modal>
  )
}
