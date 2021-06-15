import React, { useEffect, useState } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { toError } from '../../utils/ErrorUtils'
import { SynapseSpinner } from '../LoadingScreen'
import useGetAccessRequirement from '../../utils/hooks/SynapseAPI/useGetAccessRequirement'
import { AccessRequirement } from '../../utils/synapseTypes'
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
    switch(ar.concreteType) {
      case SUPPORTED_ACCESS_REQUIREMENTS.TermsOfUseAccessRequirement:
      case SUPPORTED_ACCESS_REQUIREMENTS.SelfSignAccessRequirement:
        content = <div className="MeetAccessRequirementCard actionRequiredCard">
            <Icon type={EASY_DIFFICULTY} />
            <div className="metadata">
              <div className="title">Requires Terms Of Use</div>
              <div className="fileCount">{count} File(s)</div>
              <div className="description">
                {ar.description ?? ''}
              </div>
            </div>
            <div className="startButtonContainer">
              <Button className="startButton" variant="secondary"
                onClick={()=>setIsShowingAccessRequirement(true)}
              >Start</Button>
            </div>
          </div>
          break;
      case SUPPORTED_ACCESS_REQUIREMENTS.ManagedACTAccessRequirement:
      case SUPPORTED_ACCESS_REQUIREMENTS.ACTAccessRequirement:
        content = <div className="MeetAccessRequirementCard actionRequiredCard">
            <Icon type={MEDIUM_DIFFICULTY} />
            <div className="metadata">
              <div className="title">Requires Access Requirements</div>
              <div className="fileCount">{count} File(s)</div>
              <div className="description">
                {ar.description ?? ''}
              </div>
            </div>
            <div className="startButtonContainer">
              <Button className="startButton" variant="secondary"
                onClick={()=>setIsShowingAccessRequirement(true)}
              >Start</Button>
            </div>
          </div>
          break;
        case 'org.sagebionetworks.repo.model.LockAccessRequirement':
          content = <div className="MeetAccessRequirementCard actionRequiredCard">
          <Icon type={VARIABLE_DIFFICULTY} />
          <div className="metadata">
            <div className="title">Access Restricted</div>
            <div className="fileCount">{count} File(s)</div>
            <div className="description">
              Access restricted pending review by Synapse Access and Compliance Team.
            </div>
          </div>
        </div>
        break;
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
