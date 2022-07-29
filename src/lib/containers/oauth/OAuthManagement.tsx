import React, { useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { formatDate } from '../../utils/functions/DateFormatter'
import moment from 'moment'
import { useGetOAuthClientInfinite } from '../../utils/hooks/SynapseAPI'
import { CreateOAuthModal } from './CreateOAuthClient'
import { OAuthClient } from '../../utils/synapseTypes/OAuthClient'
import WarningModal from '../synapse_form_wrapper/WarningModal'
import { SynapseClient } from '../../utils'
import { useSynapseContext } from '../../utils/SynapseContext'
import Typography from '../../utils/typography/Typography'
import CopyToClipboardInput from '../CopyToClipboardInput'

export const OAuthManagement: React.FunctionComponent = () => {
  const { accessToken } = useSynapseContext()
  const [isShowingCreateClientModal, setIsShowingCreateClientModal] =
    useState(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [selectedClient, setSelectedClient] = useState<OAuthClient>()
  const [isShowingConfirmModal, setIsShowingConfirmModal] = useState(false)
  const [isShowingSecretWarning, setIsShowingSecretWarning] = useState(false)
  const [isShowingSecret, setIsShowingSecret] = useState(false)
  const [secret, setSecret] = useState<string>()
  const [isShowingVerification, setIsShowingVerification] = useState(false)

  const { data, hasNextPage, fetchNextPage } = useGetOAuthClientInfinite()
  const oAuthClientList = data?.pages.flatMap(page => page.results) ?? []

  const warningHeader = 'Are you absolutely sure?'
  const warningBody =
    'If you have an existing secret, generating a new secret will make your application invalid after generation. This action cannot be undone.'

  const onShowSecret = async () => {
    setIsShowingSecretWarning(false)
    setSelectedClient(undefined)
    setIsShowingSecret(true)

    const secret = await SynapseClient.createOAuthClientSecret(
      accessToken!,
      selectedClient?.client_id!,
    )
    setSecret(secret.client_secret)
  }

  return (
    <div className="bootstrap-4-backport OAuthEditor">
      <Button
        onClick={() => {
          setIsShowingCreateClientModal(true)
          setIsEdit(false)
        }}
      >
        Create New Client
      </Button>
      <Table striped>
        <thead>
          <tr>
            <th>Created</th>
            <th>Modified</th>
            <th>Client</th>
            <th>Verified</th>
            <th>App Secret</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {oAuthClientList.map(item => {
            return (
              <tr key={item.client_id}>
                <td>{formatDate(moment(item.createdOn))}</td>
                <td>{formatDate(moment(item.modifiedOn))}</td>
                <td>{item.client_name}</td>
                <td>
                  {item.verified ? (
                    'Yes'
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsShowingVerification(true)}
                    >
                      SUBMIT VERIFICATION
                    </Button>
                  )}
                </td>
                <td>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedClient(item)
                      setIsShowingSecretWarning(true)
                    }}
                    size="sm"
                  >
                    GENERATE SECRET
                  </Button>
                </td>
                <td>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedClient(item)
                      setIsEdit(true)
                      setIsShowingCreateClientModal(true)
                    }}
                    size="sm"
                  >
                    EDIT
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      {hasNextPage && (
        <div className="text-center">
          <Button variant="primary" onClick={() => fetchNextPage()}>
            Load more
          </Button>
        </div>
      )}

      {(isShowingCreateClientModal || isShowingConfirmModal) && (
        <CreateOAuthModal
          onClose={() => {
            setIsShowingCreateClientModal(false)
          }}
          isShowingModal={isShowingCreateClientModal}
          client={isEdit ? selectedClient : undefined}
          isEdit={isEdit}
          setSelectedClient={setSelectedClient}
          setIsShowingConfirmModal={setIsShowingConfirmModal}
          isShowingConfirmModal={isShowingConfirmModal}
        />
      )}

      <WarningModal
        show={isShowingSecretWarning}
        title={warningHeader}
        modalBody={warningBody}
        onCancel={() => {
          setIsShowingSecretWarning(false)
          setSelectedClient(undefined)
        }}
        onConfirm={onShowSecret}
        confirmButtonVariant="danger"
        confirmButtonText="Yes, Continue"
      />

      <Modal
        show={isShowingSecret}
        animation={false}
        backdrop="static"
        onHide={() => {
          setIsShowingSecret(false)
          setSecret(undefined)
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Typography variant="headline1">App Secret</Typography>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <b>This secret will not be able to be retrieved again.</b> If
            needed, in order to generate a new secret select Generate from the
            Client List.
          </p>
          <CopyToClipboardInput value={secret} inputWidth={'350px'} />
        </Modal.Body>
      </Modal>

      <Modal
        show={isShowingVerification}
        animation={false}
        backdrop="static"
        onHide={() => setIsShowingVerification(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Typography variant="headline1">Submit Verification</Typography>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            In order to verify an OAuth client please submit a request to the{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://sagebionetworks.jira.com/servicedesk/customer/portal/9"
            >
              Synapse Service Desk.
            </a>
          </p>
          <b>Please list the following items in your request:</b>
          <ul>
            <li>Your name</li>
            <li>
              The ID of the client to be verified <br />
              <i>(You can find this within Actions)</i>
            </li>
            <li>A description of your application</li>
          </ul>
          {/* <p>
            Verification can take up to X weeks and we will notify you via X.
          </p> */}
        </Modal.Body>
      </Modal>
    </div>
  )
}
