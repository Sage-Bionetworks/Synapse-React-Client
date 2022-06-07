import { omitBy } from 'lodash-es'
import React, { useCallback, useEffect, useState } from 'react'
import { FormControl, FormLabel, InputGroup } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router'
import { useDebouncedEffect } from '../../utils/hooks/useDebouncedEffect'
import Typography from '../../utils/typography/Typography'
import {
  AccessRequestSubmissionTable,
  AccessRequestSubmissionTableProps,
} from '../AccessRequestSubmissionTable'
import IconSvg from '../IconSvg'
import UserSearchBoxV2 from '../UserSearchBoxV2'

export type DataAccessSubmissionDashboardProps = {}
export const DataAccessSubmissionDashboard: React.FunctionComponent<
  DataAccessSubmissionDashboardProps
> = () => {
  const [arName, setArName] = useState<string | undefined>()
  const [requesterId, setRequesterId] = useState<string | undefined>()
  const [reviewerId, setReviewerId] = useState<string | undefined>()
  const [tableProps, setTableProps] =
    useState<AccessRequestSubmissionTableProps>({
      arName,
      requesterId,
      reviewerId,
      showRequesters: true,
    })

  const location = useLocation()
  const history = useHistory()
  const initialParams = new URLSearchParams(location.search as string)

  useEffect(() => {
    const initializeFromSearchParam = () => {
      setArName(initialParams.get('arName') ?? undefined)
      setRequesterId(initialParams.get('requesterId') ?? undefined)
      setReviewerId(initialParams.get('reviewerId') ?? undefined)
    }
    initializeFromSearchParam()
  }, [])
  const onRequesterChange = useCallback((selected: string | null) => {
    if (selected) {
      setRequesterId(selected)
    } else {
      setRequesterId(undefined)
    }
  }, [])

  const onReviewerChange = useCallback((selected: string | null) => {
    if (selected) {
      setReviewerId(selected)
    } else {
      setReviewerId(undefined)
    }
  }, [])

  useDebouncedEffect(
    () => {
      const updateQueryParams = (
        arName: string | undefined,
        requesterId: string | undefined,
        reviewerId: string | undefined,
      ) => {
        const params = new URLSearchParams(
          omitBy(
            {
              arName,
              requesterId,
              reviewerId,
            },
            item => item === undefined || item === '',
          ) as Record<string, string>,
        )
        console.log(params)
        history.replace({
          pathname: location.pathname,
          search: params.toString(),
        })
      }

      setTableProps({
        arName,
        requesterId,
        reviewerId,
        showRequesters: true,
      })
      updateQueryParams(arName, requesterId, reviewerId)
    },
    [arName, requesterId, reviewerId],
    500,
  )

  return (
    <div className="bootstrap-4-backport">
      <div className="InputPanel">
        <div>
          <FormLabel htmlFor="ar-name-filter">
            Filter by Access Requirement Name
          </FormLabel>
          <InputGroup>
            <FormControl
              id="ar-name-filter"
              type="text"
              placeholder="Search for an Access Requirement Name"
              value={arName}
              onChange={e => setArName(e.target.value)}
            />
            <IconSvg options={{ icon: 'searchOutlined' }} />
          </InputGroup>
        </div>
        <div>
          <FormLabel htmlFor="requester-filter">Filter by Requester</FormLabel>
          <UserSearchBoxV2
            htmlId="requester-filter"
            placeholder="Search for a user or team name"
            defaultValue={requesterId}
            onChange={onRequesterChange}
          />
        </div>
        <div>
          <FormLabel htmlFor="reviewer-filter">Filter by Reviewer</FormLabel>
          <UserSearchBoxV2
            htmlId="reviewer-filter"
            placeholder="Search for a user or team name"
            defaultValue={reviewerId}
            onChange={onReviewerChange}
          />
        </div>
      </div>

      <Typography variant="headline3">Access Request Submissions</Typography>
      <AccessRequestSubmissionTable {...tableProps} />
    </div>
  )
}
