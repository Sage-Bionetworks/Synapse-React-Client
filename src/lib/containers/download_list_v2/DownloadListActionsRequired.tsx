import React, { useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { toError } from '../../utils/ErrorUtils'
import { useGetDownloadListActionsRequiredInfinite } from '../../utils/hooks/SynapseAPI/useGetDownloadListActionsRequired'
import { useInView } from 'react-intersection-observer'
import { ActionRequiredResponse } from '../../utils/synapseTypes/DownloadListV2/QueryResponseDetails'
import { SynapseSpinner } from '../LoadingScreen'
import { ActionRequiredCount, MeetAccessRequirement, RequestDownload } from '../../utils/synapseTypes/DownloadListV2/ActionRequiredCount'
import { MeetAccessRequirementCard } from './MeetAccessRequirementCard'
import { RequestDownloadCard } from './RequestDownloadCard'

export default function DownloadListActionsRequired() {
  const handleError = useErrorHandler()
  // Load the next page when this ref comes into view.
  const { ref, inView } = useInView()
  const {
    data,
    status,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isError,
    error: newError,
    refetch,
  } = useGetDownloadListActionsRequiredInfinite()

  useEffect(() => {
    if (isError && newError) {
      handleError(toError(newError))
    }
  }, [isError, newError, handleError])

  useEffect(() => {
    if (
      status === 'success' &&
      !isFetching &&
      hasNextPage &&
      fetchNextPage &&
      inView
    ) {
      fetchNextPage()
    }
  }, [status, isFetching, hasNextPage, fetchNextPage, inView])

  const allRows = data
    ? ([] as ActionRequiredCount[]).concat.apply(
        [],
        data.pages.map(
          page => (page.responseDetails as ActionRequiredResponse).page,
        ),
      )
    : []

      /**
   * Returns rendering for the ActionRequiredCount.
   *
   * @param {ActionRequiredCount} actionRequiredCount actionRequiredCount being rendered
   */
  const renderActionRequired = (
    actionRequiredCount: ActionRequiredCount,
  ) => {
    switch (actionRequiredCount.action.concreteType) {
      case 'org.sagebionetworks.repo.model.download.MeetAccessRequirement': {
        const meetARAction:MeetAccessRequirement = actionRequiredCount.action as MeetAccessRequirement
        return (
          <MeetAccessRequirementCard key={meetARAction.accessRequirementId} accessRequirementId={meetARAction.accessRequirementId} count={actionRequiredCount.count} />
        )
      }
      case 'org.sagebionetworks.repo.model.download.RequestDownload': {
        const requestDownloadAction:RequestDownload = actionRequiredCount.action as RequestDownload
        return (
          <RequestDownloadCard key={requestDownloadAction.benefactorId} entityId={`syn${requestDownloadAction.benefactorId}`} count={actionRequiredCount.count} />
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
        <div
          className="DownloadListActionsRequired"
        >
            {allRows.map(item => {
              if (item) {
                return renderActionRequired(item)
              } else return false
            })}
            {/* To trigger loading the next page */}
            <div ref={ref} />
        </div>
      )}
      {isFetching && (
        <div className="placeholder">
          <SynapseSpinner size={30} />
        </div>
      )}
      {!isFetching && allRows.length === 0 && (
        <div className="placeholder">
          <div>No actions are currently required.</div>
        </div>
      )}
    </>
  )
}
