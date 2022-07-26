import React, { useEffect, useState } from 'react'
import { useSynapseContext } from '../../utils/SynapseContext'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { displayToast } from '../ToastMessage'
import Typography from '../../utils/typography/Typography'
import { OAuthClient } from '../../utils/synapseTypes/OAuthClient'
import { useMutateOAuthClient } from '../../utils/hooks/SynapseAPI'
import IconSvg from '../IconSvg'
import { ConfirmModal } from './OAuthConfirmationModal'

export type CreateOAuthModalProps = {
  isShowingModal: boolean
  isEdit: boolean
  onClose: () => void
  setSelectedClient: (client: OAuthClient | undefined) => void
  setIsShowingConfirmModal: (a: boolean) => void
  isShowingConfirmModal: boolean
  client?: OAuthClient
}

export const CreateOAuthModal: React.FunctionComponent<
  CreateOAuthModalProps
> = ({
  isShowingModal = false,
  isEdit,
  onClose,
  client,
  setSelectedClient,
  setIsShowingConfirmModal,
  isShowingConfirmModal,
}) => {
  const { accessToken } = useSynapseContext()
  const [clientName, setClientName] = useState('')
  const [redirectUris, setRedirectUris] = useState<string | undefined>()
  const [policyUri, setPolicyUri] = useState<string>()
  const [clientUri, setClientUri] = useState<string>()
  const [sectorUri, setSectorUri] = useState<string | undefined>()
  const [tosUri, setTosUri] = useState<string>()
  const [warnTrigger, setWarnTrigger] = useState(false)
  const [isDelete, setIsDelete] = useState<boolean>(false)
  const [updatedClient, setUpdatedClient] = useState<OAuthClient>()

  useEffect(() => {
    setClientName(client?.client_name ?? '')
    setRedirectUris(client?.redirect_uris.toString() ?? undefined)
    setPolicyUri(client?.policy_uri ?? '')
    setClientUri(client?.client_uri ?? '')
    setSectorUri(client?.sector_identifier_uri ?? undefined)
    setTosUri(client?.tos_uri ?? '')
  }, [isShowingModal])

  useEffect(() => {
    client &&
    (redirectUris != client?.redirect_uris.toString() ||
      sectorUri != client?.sector_identifier_uri)
      ? setWarnTrigger(true)
      : setWarnTrigger(false)
  }, [redirectUris, sectorUri])

  const hide = () => {
    setClientName('')
    setRedirectUris('')
    setPolicyUri('')
    setClientUri('')
    setSectorUri('')
    setTosUri('')
    onClose()
  }

  const { mutate } = useMutateOAuthClient({
    onSuccess: () => {
      displayToast(`Successfully saved`, 'success')
      hide()
    },
  })

  const onCreateClient = () => {
    try {
      if (accessToken) {
        const redirectUrisArray = redirectUris
          ?.split(',')
          .map(uri => uri.trim())
        const oAuthClient: OAuthClient = {
          client_id: client?.client_id,
          client_name: clientName,
          redirect_uris: redirectUrisArray ?? [''],
          policy_uri: policyUri,
          client_uri: clientUri,
          sector_identifier_uri: sectorUri ?? '',
          tos_uri: tosUri,
          etag: client?.etag,
        }
        setUpdatedClient(oAuthClient)
        if (warnTrigger === true) {
          setIsShowingConfirmModal(true)
          hide()
        } else {
          if (isEdit) {
            mutate({ action: 'UPDATE', client: oAuthClient })
          } else {
            mutate({ action: 'CREATE', client: oAuthClient })
          }
        }
      }
    } catch (err) {
      console.log(err.reason)
    }
  }

  return (
    <div>
      <Modal
        show={isShowingModal}
        animation={false}
        backdrop="static"
        onHide={hide}
        size="lg"
        className="OAuthDialog"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Typography variant="headline1">
              {isEdit ? 'Client Details' : 'Create New OAuth Client'}
            </Typography>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Typography variant="body1">
            To protect you and your users, your consent screen and application
            will need to be verified by Sage Bionetworks. Before your consent
            screen and application are verified by Sage Bionetworks, you can
            still test your application with limitations. Learn more about how
            your app will behave before it's verified.
          </Typography>

          {isEdit && (
            <Typography style={{ marginTop: '16px' }} variant="label">
              Client ID: {client?.client_id}
            </Typography>
          )}
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Form.Group className="required">
                <Form.Label>Client Name</Form.Label>
                <Form.Control
                  required
                  onChange={e => setClientName(e.target.value)}
                  placeholder="Client Name"
                  type="text"
                  value={clientName}
                />
              </Form.Group>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Form.Label className="required">Client Homepage</Form.Label>
              <Form.Control
                onChange={e => setClientUri(e.target.value)}
                placeholder="https://"
                type="text"
                value={clientUri}
              />
            </Col>
          </Row>
          <Row>
            {!isEdit && (
              <>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <Form.Group className="required">
                    <Form.Label>Redirect URI(s)</Form.Label>
                    <Form.Control
                      required
                      onChange={e => setRedirectUris(e.target.value)}
                      placeholder="https://"
                      type="text"
                    />
                  </Form.Group>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <Form.Label>Sector Identifier URI</Form.Label>
                  <Form.Control
                    onChange={e => setSectorUri(e.target.value)}
                    placeholder="https://"
                    type="text"
                  />
                </Col>
              </>
            )}
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Form.Label>Link to Privacy Policy</Form.Label>
              <Form.Control
                onChange={e => setPolicyUri(e.target.value)}
                placeholder="https://"
                type="text"
                value={policyUri}
              />
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Form.Label>Links to Terms of Service</Form.Label>
              <Form.Control
                onChange={e => setTosUri(e.target.value)}
                placeholder="https://"
                type="text"
                value={tosUri}
              />
            </Col>
          </Row>
          {isEdit && (
            <div className="danger">
              <Typography
                style={{ marginTop: '8px' }}
                color="error"
                variant="headline3"
              >
                DANGER ZONE
              </Typography>
              <Typography variant="smallText1">
                Editing the following information will render your client
                invalid and will require you to create it again and resubmit
                verification if needed.
              </Typography>
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <Form.Label>Redirect URI(s)</Form.Label>
                  <Form.Control
                    required
                    onChange={e => setRedirectUris(e.target.value)}
                    placeholder="https://"
                    type="text"
                    value={redirectUris}
                  />
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <Form.Label>Sector Identifier URI</Form.Label>
                  <Form.Control
                    onChange={e => setSectorUri(e.target.value)}
                    placeholder="https://"
                    type="text"
                    value={sectorUri}
                  />
                </Col>
              </Row>

              <button
                className="delete-button"
                onClick={() => {
                  setIsDelete(true)
                  setIsShowingConfirmModal(true)
                  hide()
                }}
              >
                <IconSvg options={{ icon: 'delete', color: '#f44336' }} />
                DELETE CLIENT
              </button>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="default" onClick={hide}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={onCreateClient}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <ConfirmModal
        onClose={() => {
          setIsShowingConfirmModal(false)
          setIsDelete(false)
          setSelectedClient(undefined)
        }}
        isDelete={isDelete}
        showModal={isShowingConfirmModal}
        client={isDelete ? client! : updatedClient!}
      />
    </div>
  )
}
