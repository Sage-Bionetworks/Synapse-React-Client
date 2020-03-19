import React, { useEffect, useState } from 'react'
import {
  ManagedACTAccessRequirement,
  UserProfile,
  WikiPageKey,
  AccessRequirementStatus,
} from '../../utils/synapseTypes'
import { SynapseClient } from '../../utils'
import AcceptedRequirements from './AcceptedRequirements'

type ManagedACTAccessRequirementProps = {
  accessRequirement: ManagedACTAccessRequirement
  token: string | undefined
  user: UserProfile | undefined
  onHide?: Function
}

export default function ManagedACTAccessRequirementComponent({
  accessRequirement,
  token,
  user,
  onHide,
}: ManagedACTAccessRequirementProps) {
  const [wikiPage, setWikiPage] = useState<WikiPageKey>()
  const [accessRequirementStatus, setAccessRequirementStatus] = useState<
    AccessRequirementStatus
  >()
  const accessRequirementText = 'Managed ACT Access Requirement'

  useEffect(() => {
    const getManagedACTAccessData = async () => {
      try {
        const wikipageRequirement = await SynapseClient.getWikiPageKey(
          token,
          accessRequirement.id,
        )
        setWikiPage(wikipageRequirement)

        const accessRequirementStatus = await SynapseClient.getAccessRequirementStatus(
          token,
          accessRequirement.id,
        )
        setAccessRequirementStatus(accessRequirementStatus)
      } catch (err) {
        console.error('Error on get ManagedACTAccessRequirement', err)
      }
    }

    getManagedACTAccessData()
  }, [token, accessRequirement])

  return (
    <AcceptedRequirements
      accessRequirement={accessRequirement}
      accessRequirementText={accessRequirementText}
      accessRequirementStatus={accessRequirementStatus}
      token={token}
      user={user}
      wikiPage={wikiPage}
      onHide={onHide}
    />
  )
}
