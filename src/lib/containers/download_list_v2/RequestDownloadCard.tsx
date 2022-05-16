import React, { useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { useGetEntityHeaders } from '../../utils/hooks/SynapseAPI/entity/useGetEntityHeaders'
import { EntityHeader } from '../../utils/synapseTypes'
import { Icon } from '../row_renderers/utils'
import { VARIABLE_DIFFICULTY } from '../../utils/SynapseConstants'
import { Button } from 'react-bootstrap'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import { LoadingAccessRequirementCard } from './MeetAccessRequirementCard'

export type RequestDownloadCardProps = {
  entityId: string
  count: number
}

export const REQUEST_DOWNLOAD_TITLE = 'Requires Download Permission'
export const RequestDownloadCard: React.FunctionComponent<
  RequestDownloadCardProps
> = ({ entityId, count }: RequestDownloadCardProps) => {
  const handleError = useErrorHandler()
  const {
    data,
    isLoading,
    isError,
    error: newError,
  } = useGetEntityHeaders([{ targetId: entityId }])
  const entityHeader: EntityHeader | undefined = data?.results[0]
  useEffect(() => {
    if (isError && newError) {
      handleError(newError)
    }
  }, [isError, newError, handleError])

  return (
    <>
      {!isError && !isLoading && (
        <div className="RequestDownloadCart actionRequiredCard">
          <Icon type={VARIABLE_DIFFICULTY} />
          <div className="metadata">
            <div className="title">{REQUEST_DOWNLOAD_TITLE}</div>
            <div className="fileCount">{count} File(s)</div>
            <div className="description">
              You must be granted the download permission on{' '}
              <strong>{entityHeader?.name}</strong> in order to download this
              set of files.
            </div>
          </div>
          <a
            className="startButtonContainer"
            href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${entityHeader?.id}`}
            target="_blank"
            rel="noreferrer"
          >
            <Button className="startButton" variant="secondary">
              Start
            </Button>
          </a>
        </div>
      )}
      {isLoading && <LoadingAccessRequirementCard />}
    </>
  )
}
