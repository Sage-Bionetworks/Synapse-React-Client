import { upperFirst } from 'lodash-es'
import moment from 'moment'
import React, { useState, useMemo } from 'react'
import { Button, Table } from 'react-bootstrap'
import SortIcon from '../assets/icons/Sort'
import { formatDate } from '../utils/functions/DateFormatter'
import { useSearchAccessSubmissionsInfinite } from '../utils/hooks/SynapseAPI/dataaccess/useAccessSubmission'
import { Direction, SubmissionState } from '../utils/synapseTypes'
import {
  SubmissionReviewerFilterType,
  SubmissionSearchRequest,
  SubmissionSearchSort,
  SubmissionSortField,
} from '../utils/synapseTypes/AccessSubmission'
import Typography from '../utils/typography/Typography'
import UserOrTeamBadge from './UserOrTeamBadge'
import { ACT_TEAM_ID } from '../utils/SynapseConstants'
import { PRODUCTION_ENDPOINT_CONFIG } from '../utils/functions/getEndpoint'
import { SynapseSpinner } from './LoadingScreen'

export type AccessRequestSubmissionTableProps = {
  showSubmitter: boolean
  showStatus: boolean
  showRequestors: boolean
  accessorId?: string
  accessRequirementId?: string
  reviewerId?: string
  submissionState?: SubmissionState
  reviewerFilterType?: SubmissionReviewerFilterType
}

export const AccessRequestSubmissionTable: React.FunctionComponent<
  AccessRequestSubmissionTableProps
> = ({
  showSubmitter,
  showStatus,
  showRequestors,
  accessorId,
  accessRequirementId,
  reviewerId,
  submissionState,
  reviewerFilterType,
}) => {
  const [sort, setSort] = useState<SubmissionSearchSort>({
    field: SubmissionSortField.CREATED_ON,
    direction: Direction.DESC,
  })

  const searchRequest: SubmissionSearchRequest = useMemo(
    () => ({
      accessorId,
      accessRequirementId,
      submissionState,
      reviewerId,
      reviewerFilterType,
      sort: [sort],
    }),
    [
      accessorId,
      accessRequirementId,
      submissionState,
      reviewerId,
      reviewerFilterType,
      sort,
    ],
  )

  const { data, hasNextPage, fetchNextPage, isFetching } =
    useSearchAccessSubmissionsInfinite(searchRequest)

  const accessSubmissions = data?.pages.flatMap(page => page.results) ?? []
  const onSort = (field: SubmissionSortField) => {
    if (sort.field === field) {
      setSort({ field, direction: sort.direction === 'DESC' ? 'ASC' : 'DESC' })
    } else {
      setSort({ field, direction: 'DESC' })
    }
  }

  return (
    <div className="bootstrap-4-backport">
      <div className="SRC-split">
        {accessorId ? (
          <Typography variant="headline3" style={{ marginBottom: 0 }}>
            Submissions including <UserOrTeamBadge principalId={accessorId} />
          </Typography>
        ) : (
          <Typography variant="headline3" style={{ marginBottom: 0 }}>
            Access Request Submissions
          </Typography>
        )}
      </div>

      <div className="AccessSubmissionTable">
        <Table striped borderless bordered={false}>
          <thead>
            <tr>
              <th>REQUEST</th>
              <th>Access Requirement Name</th>
              {showSubmitter && <th>Submitter</th>}
              {showStatus && <th>Status</th>}
              {showRequestors && <th>Requestors</th>}
              <th>Reviewer(s)</th>
              <th>
                Created Date
                <SortIcon
                  role="button"
                  style={{ float: 'right' }}
                  active={sort.field === 'CREATED_ON'}
                  aria-label="Sort by Created On"
                  direction={
                    sort.field === 'CREATED_ON'
                      ? sort.direction === 'DESC'
                        ? 'DESC'
                        : 'ASC'
                      : 'DESC'
                  }
                  onClick={() => onSort(SubmissionSortField.CREATED_ON)}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {accessSubmissions.map(item => {
              return (
                <tr key={item.id}>
                  <td>
                    <a
                      href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!AccessRequirement:AR_ID=${item.id}`}
                    >
                      {item.id}
                    </a>
                  </td>
                  <td>{item.accessRequirementName}</td>
                  {showSubmitter && (
                    <td>
                      <UserOrTeamBadge principalId={item.submitterId} />
                    </td>
                  )}
                  {showStatus && (
                    <td>{upperFirst(item.state.toLocaleLowerCase())}</td>
                  )}
                  {showRequestors && (
                    <td>
                      <UserOrTeamBadge principalId={item.submitterId} />
                      {item.accessorChanges
                        .filter(user => item.submitterId !== user.userId)
                        .map(requestor => (
                          <UserOrTeamBadge
                            key={requestor.userId}
                            principalId={requestor.userId}
                          />
                        ))}
                    </td>
                  )}
                  <td>
                    {item.accessRequirementReviewerIds.length === 0 ? (
                      <UserOrTeamBadge principalId={ACT_TEAM_ID} />
                    ) : (
                      item.accessRequirementReviewerIds.map(reviewerId => (
                        <UserOrTeamBadge
                          key={reviewerId}
                          principalId={reviewerId}
                        />
                      ))
                    )}
                  </td>
                  <td>{formatDate(moment(item.createdOn))}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        {!hasNextPage ? (
          <></>
        ) : isFetching ? (
          <SynapseSpinner size={40} />
        ) : (
          <Button
            variant="outline"
            onClick={() => {
              fetchNextPage()
            }}
          >
            Show More
          </Button>
        )}
      </div>
    </div>
  )
}
