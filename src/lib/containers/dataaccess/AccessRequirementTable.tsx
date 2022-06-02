import moment from 'moment'
import React, { useMemo, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import SortIcon from '../../assets/icons/Sort'
import { formatDate } from '../../utils/functions/DateFormatter'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import { useSearchAccessRequirementsInfinite } from '../../utils/hooks/SynapseAPI/dataaccess/useGetAccessRequirement'
import { ACT_TEAM_ID } from '../../utils/SynapseConstants'
import { ACCESS_TYPE } from '../../utils/synapseTypes'
import {
  AccessRequirementSearchRequest,
  AccessRequirementSearchSort,
} from '../../utils/synapseTypes/AccessRequirement/AccessRequirementSearch'
import Typography from '../../utils/typography/Typography'
import { EntityLink } from '../EntityLink'
import IconSvg from '../IconSvg'
import { SynapseSpinner } from '../LoadingScreen'
import UserOrTeamBadge from '../UserOrTeamBadge'

export type AccessRequirementTableProps = {
  nameContains?: string
  relatedProjectId?: string
  reviewerId?: string
  accessType?: ACCESS_TYPE
  onCreateNewAccessRequirementClicked?: () => void
}

export default function AccessRequirementTable(
  props: AccessRequirementTableProps,
) {
  const {
    nameContains,
    relatedProjectId,
    reviewerId,
    accessType,
    onCreateNewAccessRequirementClicked,
  } = props

  const [sort, setSort] = useState<AccessRequirementSearchSort>({
    field: 'CREATED_ON',
    direction: 'DESC',
  })

  const searchRequest: Omit<AccessRequirementSearchRequest, 'nextPageToken'> =
    useMemo(
      () => ({
        nameContains,
        relatedProjectId,
        reviewerId,
        accessType,
        sort: [sort],
      }),
      [nameContains, relatedProjectId, reviewerId, accessType, sort],
    )

  const { data, hasNextPage, fetchNextPage, isFetching } =
    useSearchAccessRequirementsInfinite(searchRequest)

  const accessRequirements = data?.pages.flatMap(page => page.results) ?? []
  const onSort = (field: AccessRequirementSearchSort['field']) => {
    if (sort.field === field) {
      setSort({ field, direction: sort.direction === 'DESC' ? 'ASC' : 'DESC' })
    } else {
      setSort({ field, direction: 'DESC' })
    }
  }

  return (
    <div className="bootstrap-4-backport">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="headline3" style={{ marginBottom: 0 }}>
          Access Requirements
        </Typography>
        {onCreateNewAccessRequirementClicked && (
          <Button
            variant={'outline'}
            onClick={onCreateNewAccessRequirementClicked}
          >
            <IconSvg options={{ icon: 'favTwoTone', padding: 'right' }} />
            New Access Requirement
          </Button>
        )}
      </div>

      <div className="AccessRequirementsTable">
        <Table striped borderless bordered={false}>
          <thead className="access-requirements-header">
            <tr>
              <th className="thead-cell remove-border">AR ID</th>
              <th className="thead-cell remove-border button-cell">
                Access Requirement Name
                <button
                  style={{ float: 'right' }}
                  onClick={() => onSort('NAME')}
                >
                  <SortIcon
                    aria-label="Sort by Name"
                    active={sort.field === 'NAME'}
                    direction={sort.field === 'NAME' ? sort.direction : 'DESC'}
                  />
                </button>
              </th>
              <th className="thead-cell remove-border">Related to Projects</th>
              <th className="thead-cell remove-border">Reviewer</th>
              <th className="thead-cell remove-border">Last Modified</th>
              <th className="thead-cell remove-border">
                Created On
                <button
                  style={{ float: 'right' }}
                  onClick={() => onSort('CREATED_ON')}
                >
                  <SortIcon
                    active={sort.field === 'CREATED_ON'}
                    aria-label="Sort by Created On"
                    direction={
                      sort.field === 'CREATED_ON' ? sort.direction : 'DESC'
                    }
                  />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {accessRequirements.map(ar => {
              return (
                <tr key={ar.id}>
                  <td className="remove-border">
                    <a
                      href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!AccessRequirement:AR_ID=${ar.id}`}
                    >
                      {ar.id}
                    </a>
                  </td>
                  <td className="remove-border">{ar.name}</td>
                  <td className="remove-border">
                    {ar.relatedProjectIds.map(projectId => (
                      <EntityLink key={projectId} entity={projectId} />
                    ))}
                  </td>
                  <td className="remove-border">
                    {ar.reviewerIds.length === 0 ? (
                      <UserOrTeamBadge principalId={ACT_TEAM_ID} />
                    ) : (
                      ar.reviewerIds.map(reviewerId => (
                        <UserOrTeamBadge
                          key={reviewerId}
                          principalId={reviewerId}
                        />
                      ))
                    )}
                  </td>
                  <td className="remove-border">
                    {formatDate(moment(ar.modifiedOn))}
                  </td>
                  <td className="remove-border">
                    {formatDate(moment(ar.createdOn))}
                  </td>
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
