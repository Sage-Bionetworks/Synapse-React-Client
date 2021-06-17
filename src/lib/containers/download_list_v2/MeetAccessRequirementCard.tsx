import React, { useEffect, useState } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { toError } from '../../utils/ErrorUtils'
import { SynapseSpinner } from '../LoadingScreen'
import useGetAccessRequirement from '../../utils/hooks/SynapseAPI/useGetAccessRequirement'
import { AccessRequirement, SelfSignAccessRequirement } from '../../utils/synapseTypes'
import { Button } from 'react-bootstrap'
import { Icon } from '../row_renderers/utils'
import { EASY_DIFFICULTY, MEDIUM_DIFFICULTY, VARIABLE_DIFFICULTY } from '../../utils/SynapseConstants'
import AccessRequirementList, { SUPPORTED_ACCESS_REQUIREMENTS } from '../access_requirement_list/AccessRequirementList'

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
  const [isShowingAccessRequirement, setIsShowingAccessRequirement] = useState<boolean>(false)
  let content = <></>
  if (!isError && !isFetching) {
    let title:string|undefined = undefined
    let iconType = ''
    let description = ''
    switch(ar.concreteType) {
      case SUPPORTED_ACCESS_REQUIREMENTS.TermsOfUseAccessRequirement:
        title = 'Requires Acceptance of Data-Specific Terms of Use'
        iconType = EASY_DIFFICULTY
        description = ar.description ?? ''
        break;
      case SUPPORTED_ACCESS_REQUIREMENTS.SelfSignAccessRequirement: {
        title = 'Requires Acceptance of Data-Specific Terms of Use'
        const selfSignAR:SelfSignAccessRequirement = ar as SelfSignAccessRequirement
        if (selfSignAR.isValidatedProfileRequired) {
          iconType = VARIABLE_DIFFICULTY
        } else if (selfSignAR.isCertifiedUserRequired) {
          iconType = MEDIUM_DIFFICULTY
        } else {
          iconType = EASY_DIFFICULTY
        }
        description = ar.description ?? ''
        break;
      }
      case SUPPORTED_ACCESS_REQUIREMENTS.ManagedACTAccessRequirement:
      case SUPPORTED_ACCESS_REQUIREMENTS.ACTAccessRequirement:
        title = 'Requires Approval of Data-Specific Access Requirements'
        iconType = VARIABLE_DIFFICULTY
        description = ar.description ?? ''
        break;
      case 'org.sagebionetworks.repo.model.LockAccessRequirement':
        title = 'Access Restricted'
        iconType = VARIABLE_DIFFICULTY
        description = 'Access restricted pending review by Synapse Access and Compliance Team.'
        break;
    }
    if (title) {
      content = <div className="MeetAccessRequirementCard actionRequiredCard">
      <Icon type={iconType} />
      <div className="metadata">
        <div className="title">{title}</div>
        <div className="fileCount">{count} File(s)</div>
        <div className="description">
          {description}
        </div>
      </div>
      <div className="startButtonContainer">
        <Button className="startButton" variant="secondary"
          onClick={()=>setIsShowingAccessRequirement(true)}
        >Start</Button>
      </div>
    </div>
    }
  }

  return (
    <>
      {!isError && !isFetching && content}
      {isFetching && (
        <div className="EntityFinderDetailsView__Placeholder">
          <SynapseSpinner size={30} />
        </div>
      )}
      {isShowingAccessRequirement && (
        <AccessRequirementList entityId={ar.subjectIds[0].id}
          accessRequirementFromProps={[ar]}
          renderAsModal={true}
          numberOfFilesEffected={count}
          onHide={()=>setIsShowingAccessRequirement(false)}/>
      )}
    </>
  )
}
