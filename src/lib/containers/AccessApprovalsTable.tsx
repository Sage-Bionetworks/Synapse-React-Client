import moment from 'moment'
import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { SMALL_USER_CARD } from '../utils/SynapseConstants'
import {
  AccessApprovalSearchRequest,
  AccessApprovalSearchSort,
  AccessApprovalSortField,
  SortDirection,
} from '../utils/synapseTypes'
import Typography from '../utils/typography/Typography'
import IconSvg from './IconSvg'
import UserCard from './UserCard'
import { PRODUCTION_ENDPOINT_CONFIG } from '../utils/functions/getEndpoint'
import { useSearchAccessApprovalsInfinite } from '../utils/hooks/SynapseAPI/dataaccess/useAccessApprovals'
import { SynapseSpinner } from './LoadingScreen'

export type AccessApprovalsTableProps = {
  accessorId: string
  accessRequirementId?: string
}
export const AccessApprovalsTable: React.FunctionComponent<
  AccessApprovalsTableProps
> = ({ accessorId, accessRequirementId }) => {
  const [isDescending, setIsDescending] = useState(false)
  const [sort, setSort] = useState<AccessApprovalSearchSort[]>()

  const searchRequest: AccessApprovalSearchRequest = {
    accessorId,
    accessRequirementId,
    sort,
  }

  const { data, hasNextPage, fetchNextPage, isFetching } =
    useSearchAccessApprovalsInfinite(searchRequest)

  const accessApprovals = data?.pages.flatMap(page => page.results) ?? []
  const onSort = (field: AccessApprovalSortField, isDescending: boolean) => {
    const direction: SortDirection = isDescending
      ? ('DESC' as SortDirection)
      : ('ASC' as SortDirection)
    setSort([{ field, direction }])
    setIsDescending(!isDescending)
  }
  return (
    <div className="AccessApprovalsTable bootstrap-4-backport">
      <Typography style={{ padding: '12px' }} variant="headline3">
        Status in Access Requirements
      </Typography>
      <Table striped borderless bordered={false}>
        <thead className="access-approval-header">
          <tr>
            <th className="thead-cell remove-border">AR ID</th>
            <th className="thead-cell remove-border">
              Access Requirement Name
            </th>
            <th className="thead-cell remove-border">Submitter</th>
            <th className="thead-cell remove-border">Status</th>
            <th className="thead-cell remove-border button-cell">
              Modified Date
              <button
                style={{ float: 'right' }}
                onClick={() =>
                  onSort(AccessApprovalSortField.MODIFIED_ON, isDescending)
                }
              >
                <IconSvg
                  options={{
                    icon: 'sortTwoTone',
                  }}
                />
              </button>
            </th>
            <th className="thead-cell remove-border button-cell">
              Expires
              <button
                style={{ float: 'right' }}
                onClick={() =>
                  onSort(AccessApprovalSortField.EXPIRED_ON, isDescending)
                }
              >
                <IconSvg
                  options={{
                    icon: 'sortTwoTone',
                  }}
                />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {accessApprovals.map(item => {
            let modifiedOn = moment(item.modifiedOn).format('L LT')
            let expiredOn = moment(item.expiredOn).format('L LT')
            return (
              <tr key={item.id}>
                <td className="remove-border">
                  <a
                    href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!AccessRequirement:AR_ID=${item.accessRequirementId}`}
                  >
                    {item.accessRequirementId}
                  </a>
                </td>
                <td className="remove-border">{item.accessRequirementName}</td>
                <td className="remove-border">
                  <UserCard size={SMALL_USER_CARD} ownerId={item.submitterId} />
                </td>
                <td className="remove-border">
                  {item.state[0] + item.state.slice(1).toLocaleLowerCase()}
                </td>
                <td className="remove-border">{modifiedOn}</td>
                <td
                  className={`${
                    new Date() > new Date(expiredOn) ? 'expired' : ''
                  } remove-border`}
                >
                  {expiredOn}
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      {!hasNextPage ? (
        ''
      ) : isFetching ? (
        <SynapseSpinner size={40} />
      ) : (
        <Button variant="outline" onClick={() => fetchNextPage}>
          Show More
        </Button>
      )}
    </div>
  )
}
