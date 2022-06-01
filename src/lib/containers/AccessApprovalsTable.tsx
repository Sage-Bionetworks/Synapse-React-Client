import moment from 'moment'
import React, { useMemo, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { SMALL_USER_CARD } from '../utils/SynapseConstants'
import {
  AccessApprovalSearchRequest,
  AccessApprovalSearchSort,
  AccessApprovalSortField,
  Direction,
} from '../utils/synapseTypes'
import Typography from '../utils/typography/Typography'
import UserCard from './UserCard'
import { PRODUCTION_ENDPOINT_CONFIG } from '../utils/functions/getEndpoint'
import { useSearchAccessApprovalsInfinite } from '../utils/hooks/SynapseAPI/dataaccess/useAccessApprovals'
import { SynapseSpinner } from './LoadingScreen'
import SortIcon from '../assets/icons/Sort'
import { formatDate } from '../utils/functions/DateFormatter'
import { upperFirst } from 'lodash-es'

export type AccessApprovalsTableProps = {
  accessorId: string
  accessRequirementId?: string
}
export const AccessApprovalsTable: React.FunctionComponent<
  AccessApprovalsTableProps
> = ({ accessorId, accessRequirementId }) => {
  const [sort, setSort] = useState<AccessApprovalSearchSort>({
    field: AccessApprovalSortField.MODIFIED_ON,
    direction: Direction.DESC,
  })

  const searchRequest: AccessApprovalSearchRequest = useMemo(
    () => ({
      accessorId,
      accessRequirementId,
      sort: [sort],
    }),
    [accessorId, accessRequirementId, sort],
  )

  const { data, hasNextPage, fetchNextPage, isFetching } =
    useSearchAccessApprovalsInfinite(searchRequest)
  const accessApprovals = data?.pages.flatMap(page => page.results) ?? []

  const onSort = (field: AccessApprovalSortField) => {
    if (sort.field === field) {
      setSort({
        field,
        direction:
          sort.direction === Direction.DESC ? Direction.ASC : Direction.DESC,
      })
    } else {
      setSort({ field, direction: Direction.DESC })
    }
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
            <th className="thead-cell remove-border">
              Modified Date
              <SortIcon
                role="button"
                style={{ float: 'right' }}
                active={sort.field === AccessApprovalSortField.MODIFIED_ON}
                direction={
                  sort.field === 'MODIFIED_ON'
                    ? sort.direction === 'DESC'
                      ? Direction.DESC
                      : Direction.ASC
                    : Direction.DESC
                }
                onClick={() => onSort(AccessApprovalSortField.MODIFIED_ON)}
              />
            </th>
            <th className="thead-cell remove-border">
              Expires
              <SortIcon
                role="button"
                style={{ float: 'right' }}
                active={sort.field === AccessApprovalSortField.EXPIRED_ON}
                direction={
                  sort.field === 'EXPIRED_ON'
                    ? sort.direction === 'DESC'
                      ? Direction.DESC
                      : Direction.ASC
                    : Direction.DESC
                }
                onClick={() => onSort(AccessApprovalSortField.EXPIRED_ON)}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {accessApprovals.map(item => {
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
                  {upperFirst(item.state.toLocaleLowerCase())}
                </td>
                <td className="remove-border">
                  {formatDate(moment(item.modifiedOn))}
                </td>
                <td
                  className={`${
                    item.expiredOn &&
                    (new Date() > new Date(item.expiredOn) ? 'expired' : '')
                  } remove-border`}
                >
                  {item.expiredOn ? formatDate(moment(item.expiredOn)) : <></>}
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
