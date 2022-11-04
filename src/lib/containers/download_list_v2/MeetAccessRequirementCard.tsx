import React, { useEffect, useState } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import useGetAccessRequirement from '../../utils/hooks/SynapseAPI/dataaccess/useGetAccessRequirement'
import { SelfSignAccessRequirement } from '../../utils/synapseTypes'
import { Button } from 'react-bootstrap'
import { Icon } from '../row_renderers/utils'
import {
  EASY_DIFFICULTY,
  MEDIUM_DIFFICULTY,
  VARIABLE_DIFFICULTY,
} from '../../utils/SynapseConstants'
import AccessRequirementList, {
  SUPPORTED_ACCESS_REQUIREMENTS,
} from '../access_requirement_list/AccessRequirementList'
import { Skeleton } from '@mui/material'
import { Typography } from '@mui/material'

export type MeetAccessRequirementCardProps = {
  accessRequirementId: number
  count: number
}
export const TERMS_OF_USE_TITLE =
  'Requires Acceptance of Data-Specific Terms of Use'
export const SELF_SIGN_TITLE =
  'Requires Acceptance of Data-Specific Terms of Use'
export const ACT_TITLE =
  'Requires Approval of Data-Specific Access Requirements'
export const LOCK_TITLE = 'Access Restricted'

export const MeetAccessRequirementCard: React.FunctionComponent<
  MeetAccessRequirementCardProps
> = ({ accessRequirementId, count }: MeetAccessRequirementCardProps) => {
  const handleError = useErrorHandler()
  const {
    data: ar,
    isFetching,
    isError,
    error: newError,
  } = useGetAccessRequirement(accessRequirementId)
  useEffect(() => {
    if (isError && newError) {
      handleError(newError)
    }
  }, [isError, newError, handleError])
  const [isShowingAccessRequirement, setIsShowingAccessRequirement] =
    useState<boolean>(false)
  let content = <></>
  if (!isError && !isFetching && ar) {
    let title: string | undefined = undefined
    let iconType = ''
    let description = ''
    switch (ar.concreteType) {
      case SUPPORTED_ACCESS_REQUIREMENTS.TermsOfUseAccessRequirement:
        title = TERMS_OF_USE_TITLE
        iconType = EASY_DIFFICULTY
        description = ar.name ?? ''
        break
      case SUPPORTED_ACCESS_REQUIREMENTS.SelfSignAccessRequirement: {
        title = SELF_SIGN_TITLE
        const selfSignAR: SelfSignAccessRequirement =
          ar as SelfSignAccessRequirement
        if (selfSignAR.isValidatedProfileRequired) {
          iconType = VARIABLE_DIFFICULTY
        } else if (selfSignAR.isCertifiedUserRequired) {
          iconType = MEDIUM_DIFFICULTY
        } else {
          iconType = EASY_DIFFICULTY
        }
        description = ar.name ?? ''
        break
      }
      case SUPPORTED_ACCESS_REQUIREMENTS.ManagedACTAccessRequirement:
      case SUPPORTED_ACCESS_REQUIREMENTS.ACTAccessRequirement:
        title = ACT_TITLE
        iconType = VARIABLE_DIFFICULTY
        description = ar.name ?? ''
        break
      case 'org.sagebionetworks.repo.model.LockAccessRequirement':
        title = LOCK_TITLE
        iconType = VARIABLE_DIFFICULTY
        description =
          'Access restricted pending review by Synapse Access and Compliance Team.'
        break
    }
    if (title) {
      content = (
        <div className="MeetAccessRequirementCard actionRequiredCard">
          <Icon type={iconType} />
          <div className="metadata">
            <Typography variant="headline3" className="title">
              {title}
            </Typography>
            <div className="fileCount">{count} File(s)</div>
            <div className="description">{description}</div>
          </div>
          <div className="startButtonContainer">
            <Button
              className="startButton"
              variant="primary"
              onClick={() => setIsShowingAccessRequirement(true)}
            >
              Start
            </Button>
          </div>
        </div>
      )
    }
  }

  return (
    <>
      {!isError && !isFetching && content}
      {isFetching && <LoadingAccessRequirementCard />}
      {isShowingAccessRequirement && ar && (
        <AccessRequirementList
          entityId={ar.subjectIds[0].id}
          accessRequirementFromProps={[ar]}
          renderAsModal={true}
          numberOfFilesAffected={count}
          onHide={() => setIsShowingAccessRequirement(false)}
        />
      )}
    </>
  )
}

export const LoadingAccessRequirementCard: React.FunctionComponent = () => {
  return (
    <div className="MeetAccessRequirementCard actionRequiredCard">
      <Skeleton variant="rectangular" width={136} height={74} />
      <div className="metadata">
        <div className="title">
          <Skeleton width={320} />
        </div>
        <div className="fileCount">
          <Skeleton width={100} />
        </div>
      </div>
      <div className="startButtonContainer">
        <Skeleton variant="rectangular" width={160} height={33} />
      </div>
    </div>
  )
}
