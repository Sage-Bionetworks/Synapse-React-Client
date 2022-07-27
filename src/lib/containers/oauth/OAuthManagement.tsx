import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { formatDate } from '../../utils/functions/DateFormatter'
import moment from 'moment'
import { useGetOAuthClientInfinite } from '../../utils/hooks/SynapseAPI'
import { CreateOAuthModal } from './CreateOAuthClient'
import { OAuthClient } from '../../utils/synapseTypes/OAuthClient'

export const OAuthManagement: React.FunctionComponent = () => {
  const [isShowingCreateClientModal, setIsShowingCreateClientModal] =
    useState(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [selectedClient, setSelectedClient] = useState<OAuthClient>()
  const [isShowingConfirmModal, setIsShowingConfirmModal] = useState(false)

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
                  {item.verified ? 'Yes' : 'SUBMIT_VERIFICATION_PLACE_HOLDER'}
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
    </div>
  )
}
