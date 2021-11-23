import React, { useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { toError } from '../../utils/ErrorUtils'
import { useGetDownloadListActionsRequiredInfinite } from '../../utils/hooks/SynapseAPI/useGetDownloadListActionsRequired'
import { useInView } from 'react-intersection-observer'
import {
  ActionRequiredCount,
  MeetAccessRequirement,
  RequestDownload,
} from '../../utils/synapseTypes/DownloadListV2/ActionRequiredCount'
import { LoadingAccessRequirementCard, MeetAccessRequirementCard } from './MeetAccessRequirementCard'
import { RequestDownloadCard } from './RequestDownloadCard'

export default function DownloadListActionsRequired() {
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
  } = useGetDownloadListActionsRequiredInfinite()

  useEffect(() => {
    if (isError && newError) {
      handleError(toError(newError))
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

  const allRows = data?.pages.flatMap(page => page.page) ?? []

  /**
   * Returns rendering for the ActionRequiredCount.
   *
   * @param {ActionRequiredCount} actionRequiredCount actionRequiredCount being rendered
   */
  const renderActionRequired = (actionRequiredCount: ActionRequiredCount) => {
    switch (actionRequiredCount.action.concreteType) {
      case 'org.sagebionetworks.repo.model.download.MeetAccessRequirement': {
        const meetARAction: MeetAccessRequirement = actionRequiredCount.action as MeetAccessRequirement
        return (
          <MeetAccessRequirementCard
            key={meetARAction.accessRequirementId}
            accessRequirementId={meetARAction.accessRequirementId}
            count={actionRequiredCount.count}
          />
        )
      }
      case 'org.sagebionetworks.repo.model.download.RequestDownload': {
        const requestDownloadAction: RequestDownload = actionRequiredCount.action as RequestDownload
        return (
          <RequestDownloadCard
            key={requestDownloadAction.benefactorId}
            entityId={`syn${requestDownloadAction.benefactorId}`}
            count={actionRequiredCount.count}
          />
        )
      }
      // case not supported yet
      default:
        return undefined
    }
  }
  return (
    <>
      {allRows.length > 0 && (
        <div className="DownloadListActionsRequired">
          {allRows.map((item: ActionRequiredCount) => {
            if (item) {
              return renderActionRequired(item)
            } else return false
          })}
          {/* To trigger loading the next page */}
          <div ref={ref} />
        </div>
      )}
      {isLoading && (
        <LoadingAccessRequirementCard />
      )}
    </>
  )
}
