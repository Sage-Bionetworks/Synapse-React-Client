import React, { useEffect, useState } from 'react'
import {
  ManagedACTAccessRequirement,
  UserProfile,
  WikiPageKey,
} from '../../../utils/synapseTypes'
import { SynapseClient } from '../../../utils'
import RequestDataAccess from './RequestDataAccess'
import { ManagedACTAccessRequirementStatus } from '../../../utils/synapseTypes/AccessRequirement/ManagedACTAccessRequirementStatus'
import { useSynapseContext } from '../../../utils/SynapseContext'

export type ManagedACTAccessRequirementComponentProps = {
  entityId: string
  user: UserProfile | undefined
  accessRequirement: ManagedACTAccessRequirement
  accessRequirementStatus: ManagedACTAccessRequirementStatus
  onHide?: Function
  requestDataStepCallback?: Function
}

const ManagedACTAccessRequirementComponent: React.FC<ManagedACTAccessRequirementComponentProps> = props => {
  const {
    entityId,
    user,
    accessRequirement,
    accessRequirementStatus,
    onHide,
    requestDataStepCallback,
  } = props
  const { accessToken } = useSynapseContext()
  const [wikiPage, setWikiPage] = useState<WikiPageKey>()

  useEffect(() => {
    const getManagedACTAccessData = async () => {
      try {
        const wikipageRequirement = await SynapseClient.getWikiPageKeyForAccessRequirement(
          accessToken,
          accessRequirement.id,
        )
        setWikiPage(wikipageRequirement)
      } catch (err) {
        console.error('Error on get ManagedACTAccessRequirement', err)
      }
    }

    getManagedACTAccessData()
  }, [accessToken, accessRequirement])

  return (
    <RequestDataAccess
      accessRequirement={accessRequirement}
      accessRequirementStatus={accessRequirementStatus}
      entityId={entityId}
      user={user}
      wikiPage={wikiPage}
      onHide={onHide}
      requestDataStepCallback={requestDataStepCallback}
    />
  )
}

export default ManagedACTAccessRequirementComponent
