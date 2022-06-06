import React, { useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { useInView } from 'react-intersection-observer'
import { useGetApprovedSubmissionInfoInfinite } from '../utils/hooks/SynapseAPI/useGetApprovedSubmissionInfo'
import { SubmissionInfo } from '../utils/synapseTypes/SubmissionInfo'
import {
  LoadingSubmissionInfoCard,
  SubmissionInfoCard,
} from './IDUReportSubmissionInfo'

export type IDUReportProps = {
  accessRequirementId: string
}

export const IDUReport: React.FunctionComponent<IDUReportProps> = (
  props: IDUReportProps,
) => {
  const { accessRequirementId } = props
  const handleError = useErrorHandler()
  // Load the next page when this ref comes into view.
  const { ref, inView } = useInView()

  const {
    data,
    status,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isError,
    error: newError,
  } = useGetApprovedSubmissionInfoInfinite(accessRequirementId)

  useEffect(() => {
    if (isError && newError) {
      handleError(newError)
    }
  }, [isError, newError, handleError])

  useEffect(() => {
    if (
      status === 'success' &&
      !isFetchingNextPage &&
      hasNextPage &&
      fetchNextPage &&
      inView
    ) {
      fetchNextPage()
    }
  }, [status, hasNextPage, isFetchingNextPage, fetchNextPage, inView])

  const allRows = data?.pages.flatMap(page => page.results) ?? []

  return (
    <>
      {allRows.length > 0 && (
        <div className="IDUReport">
          {allRows.map((item: SubmissionInfo) => {
            if (item) {
              return <SubmissionInfoCard info={item} />
            } else return false
          })}
          {/* To trigger loading the next page */}
          <div ref={ref} />
        </div>
      )}
      {isLoading && <LoadingSubmissionInfoCard />}
    </>
  )
}
export default IDUReport
