import React, { useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { toError } from '../../utils/ErrorUtils'
import { SynapseSpinner } from '../LoadingScreen'
import { useGetEntityHeaders } from '../../utils/hooks/SynapseAPI/useGetEntityHeaders'
import { EntityHeader } from '../../utils/synapseTypes'

export type RequestDownloadCardProps = {
  entityId: string
  count: number
}

export const RequestDownloadCard:React.FunctionComponent<RequestDownloadCardProps> = (
  {
    entityId,
    count,
  }: RequestDownloadCardProps
) => {
  const handleError = useErrorHandler()
  const {
    data,
    isFetching,
    isError,
    error: newError,
  } = useGetEntityHeaders([{targetId: entityId}])
  const entityHeader:EntityHeader | undefined = data?.results[0]
  useEffect(() => {
    if (isError && newError) {
      handleError(toError(newError))
    }
  }, [isError, newError, handleError])

  return (
    <>
      {!isError && !isFetching && (
        <div>
          Entity Type={entityHeader?.type}, Entity Name= {entityHeader?.name}, count = {count}
        </div>
      )}
      {isFetching && (
        <div className="EntityFinderDetailsView__Placeholder">
          <SynapseSpinner size={30} />
        </div>
      )}
    </>
  )
}
