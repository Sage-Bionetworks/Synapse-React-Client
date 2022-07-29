import React, { useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { formatDate } from '../../utils/functions/DateFormatter'
import moment from 'moment'
import { useGetOAuthClientInfinite } from '../../utils/hooks/SynapseAPI'
import { CreateOAuthModal } from './CreateOAuthClient'
import { OAuthClient } from '../../utils/synapseTypes/OAuthClient'
import Typography from '../../utils/typography/Typography'

export const OAuthManagement: React.FunctionComponent = () => {
  const [isShowingCreateClientModal, setIsShowingCreateClientModal] =
    useState(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [selectedClient, setSelectedClient] = useState<OAuthClient>()
  const [isShowingConfirmModal, setIsShowingConfirmModal] = useState(false)
  const [isShowingVerification, setIsShowingVerification] = useState(false)

  const { data, hasNextPage, fetchNextPage } = useGetOAuthClientInfinite()
  const oAuthClientList = data?.pages.flatMap(page => page.results) ?? []

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
                <td>GENERATE_PLACEHOLDER</td>
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
            <a href="https://sagebionetworks.jira.com/servicedesk/customer/portal/9">
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
