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
  const INPUT_CHANGE_DEBOUNCE_DELAY_MS = 500

  useEffect(() => {
    const initializeFromSearchParam = () => {
      const initialParams = new URLSearchParams(location.search)
      setArName(initialParams.get('arName') ?? undefined)
      setRequesterId(initialParams.get('requesterId') ?? undefined)
      setReviewerId(initialParams.get('reviewerId') ?? undefined)
    }
    initializeFromSearchParam()
  }, [location.search])

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
        history.replace({
          pathname: location.pathname,
          search: params.toString(),
        })
      }

      updateQueryParams(arName, requesterId, reviewerId)
      setTableProps({
        arName,
        requesterId,
        reviewerId,
        showRequesters: true,
      })
    },
    [arName, requesterId, reviewerId, history, location],
    INPUT_CHANGE_DEBOUNCE_DELAY_MS,
  )

  return (
    <div className="AccessSubmissionDashboard bootstrap-4-backport">
      <div className="InputPanel SubmissionGrid">
        <div>
          <FormLabel htmlFor="arName-filter">
            Filter by Access Requirement Name
          </FormLabel>
          <InputGroup>
            <FormControl
              id="arName-filter"
              type="text"
              placeholder="Search for an Access Requirement Name"
              value={arName}
              onChange={e => {
                const tempVal = e.target.value
                tempVal === '' ? setArName(undefined) : setArName(tempVal)
              }}
            />
            {arName && (
              <button
                onClick={() => setArName('')}
                className="styled-svg-wrapper"
                style={{ right: '30px' }}
              >
                <IconSvg options={{ icon: 'clear' }} />
              </button>
            )}
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
