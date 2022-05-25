import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { SMALL_USER_CARD } from '../utils/SynapseConstants'
import { useSynapseContext } from '../utils/SynapseContext'
import {
  AccessApprovalSearchRequest,
  AccessApprovalSearchResponse,
  AccessApprovalSearchResult,
  AccessApprovalSearchSort,
  AccessApprovalSortField,
} from '../utils/synapseTypes'
import { searchAccessApprovals } from '../utils/SynapseClient'
import Typography from '../utils/typography/Typography'
import IconSvg from './IconSvg'
import UserCard from './UserCard'
import { displayToast } from './ToastMessage'
import { PRODUCTION_ENDPOINT_CONFIG } from '../utils/functions/getEndpoint'
import { SynapseSpinner } from './LoadingScreen'
import { SortDirection } from './FavoritesPage'

export type AccessApprovalsTableProps = {
  accessorId: string
  accessRequirementId?: string
}
export const AccessApprovalsTable: React.FunctionComponent<
  AccessApprovalsTableProps
> = ({ accessorId, accessRequirementId }) => {
  const { accessToken } = useSynapseContext()
  const [searchResult, setSearchResult] =
    useState<AccessApprovalSearchResponse>()
  const [isLoading, setIsLoading] = useState(false)
  const [isDescending, setIsDescending] = useState(false)
  const [arList, setArList] = useState<AccessApprovalSearchResult[]>()

  const getApprovals = async () => {
    try {
      const searchRequest: AccessApprovalSearchRequest = {
        accessorId,
        accessRequirementId,
      }
      const approvalResponse = await searchAccessApprovals(
        searchRequest,
        accessToken,
      )
      setSearchResult(approvalResponse)
      setArList(approvalResponse.results)
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    }
  }

  const onLoadMore = async () => {
    setIsLoading(true)
    try {
      const searchRequest: AccessApprovalSearchRequest = {
        accessorId,
        accessRequirementId,
        nextPageToken: searchResult?.nextPageToken,
      }
      const approvalResponse = await searchAccessApprovals(
        searchRequest,
        accessToken,
      )
      setSearchResult(approvalResponse)
      if (arList) {
        setArList([...arList, ...approvalResponse.results])
      }
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getApprovals()
  }, [accessToken, accessorId, accessRequirementId])

  const sortColumn = async (
    field: AccessApprovalSortField,
    isDescending: boolean,
  ) => {
    try {
      const direction = isDescending
        ? ('DESC' as SortDirection)
        : ('ASC' as SortDirection)
      const sort: AccessApprovalSearchSort[] = [
        {
          field,
          direction,
        },
      ]
      const searchRequest: AccessApprovalSearchRequest = {
        accessorId,
        accessRequirementId,
        sort,
      }
      const sortRequest = await searchAccessApprovals(
        searchRequest,
        accessToken,
      )
      setSearchResult(sortRequest)
      setArList(sortRequest.results)
      setIsDescending(!isDescending)
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className="AccessApprovalsTable">
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
                  sortColumn(
                    'MODIFIED_ON' as AccessApprovalSortField,
                    isDescending,
                  )
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
                  sortColumn(
                    'EXPIRED_ON' as AccessApprovalSortField,
                    isDescending,
                  )
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
          {searchResult?.results.map(item => {
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
      {searchResult?.nextPageToken &&
        (isLoading ? (
          <SynapseSpinner size={30} />
        ) : (
          <button className="load-more-button" onClick={onLoadMore}>
            Show More
          </button>
        ))}
    </div>
  )
}
