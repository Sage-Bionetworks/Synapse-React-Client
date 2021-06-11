import React, { useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { toError } from '../../utils/ErrorUtils'
import { SynapseSpinner } from '../LoadingScreen'
import useGetAccessRequirement from '../../utils/hooks/SynapseAPI/useGetAccessRequirement'
import { AccessRequirement } from '../../utils/synapseTypes'

export type MeetAccessRequirementCardProps = {
  accessRequirementId: number
  count: number
}


export const MeetAccessRequirementCard:React.FunctionComponent<MeetAccessRequirementCardProps> = (
  {
    accessRequirementId,
    count,
  }: MeetAccessRequirementCardProps
) => {
  const handleError = useErrorHandler()
  const {
    data,
    isFetching,
    isError,
    error: newError,
  } = useGetAccessRequirement(accessRequirementId)
  const ar:AccessRequirement = data as AccessRequirement
  useEffect(() => {
    if (isError && newError) {
      handleError(toError(newError))
    }
  }, [isError, newError, handleError])

  return (
    <>
      {!isError && !isFetching && (
        <div>
          Concrete Type= {ar.concreteType}, count = {count}
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
