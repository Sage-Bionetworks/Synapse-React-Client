import React from 'react'
import { Table } from 'react-bootstrap'
import { formatDate } from '../../utils/functions/DateFormatter'
import moment from 'moment'
import { Button } from 'react-bootstrap'
import { useGetOAuthClientInfinite } from '../../utils/hooks/SynapseAPI'

export const OAuthManagement: React.FunctionComponent = () => {
  const { data, hasNextPage, fetchNextPage } = useGetOAuthClientInfinite()
  const oAuthClientList = data?.pages.flatMap(page => page.results) ?? []

  return (
    <div className="bootstrap-4-backport">
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
                <td>ACTIONS_PLACEHOLDER</td>
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
    </div>
  )
}
