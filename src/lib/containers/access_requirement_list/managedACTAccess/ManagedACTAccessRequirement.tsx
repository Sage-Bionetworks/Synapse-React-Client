import React, { useEffect, useState } from 'react'
import {
  ManagedACTAccessRequirement,
  UserProfile,
  WikiPageKey,
} from '../../../utils/synapseTypes'
import { SynapseClient } from '../../../utils'
import RequestDataAccess from './RequestDataAccess'
import { ManagedACTAccessRequirementStatus } from '../../../utils/synapseTypes/AccessRequirement/ManagedACTAccessRequirementStatus'

export type ManagedACTAccessRequirementComponentProps = {
  entityId: string
  token: string | undefined
  user: UserProfile | undefined,
  accessRequirement: ManagedACTAccessRequirement,
  accessRequirementStatus: ManagedACTAccessRequirementStatus,
  onHide?: Function,
  requestDataStepCallback?: Function
}

const ManagedACTAccessRequirementComponent: React.FC<ManagedACTAccessRequirementComponentProps> = props => {
  const { entityId, token, user, accessRequirement, accessRequirementStatus, onHide, requestDataStepCallback } = props
  const [wikiPage, setWikiPage] = useState<WikiPageKey>()


  useEffect(() => {
    const getManagedACTAccessData = async () => {
      try {
        const wikipageRequirement = await SynapseClient.getWikiPageKeyForAccessRequirement(
          token,
          accessRequirement.id,
        )
        setWikiPage(wikipageRequirement)
      } catch (err) {
        console.error('Error on get ManagedACTAccessRequirement', err)
      }
    }

    getManagedACTAccessData()
  }, [token, accessRequirement])

  return (
    <RequestDataAccess
      accessRequirement={accessRequirement}
      accessRequirementStatus={accessRequirementStatus}
      entityId={entityId}
      token={token}
      user={user}
      wikiPage={wikiPage}
      onHide={onHide}
      requestDataStepCallback={requestDataStepCallback}
    />
  )
}

export default ManagedACTAccessRequirementComponent
