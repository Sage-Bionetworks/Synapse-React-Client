import React, { useEffect, useState } from 'react'
import {
  ACTAccessRequirement,
  UserProfile,
  WikiPageKey,
  AccessRequirementStatus,
} from '../../../lib/utils/synapseTypes'
import { SynapseClient } from '../../../lib/utils'
import AcceptedRequirements from './AcceptedRequirements'

export type Props = {
  accessRequirement: ACTAccessRequirement
  token: string | undefined
  user: UserProfile | undefined
  onHide?: Function
}

export default function ACTAccessRequirementComponent({
  accessRequirement,
  token,
  user,
  onHide,
}: Props) {
  const [wikiPage, setWikiPage] = useState<WikiPageKey>()
  const [accessRequirementStatus, setAccessRequirementStatus] = useState<
    AccessRequirementStatus
  >()
  const accessRequirementText = 'ACT Access Requirement'

  useEffect(() => {
    const getACTAccessData = async () => {
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
        console.error('Error on get ACTAccessRequirement', err)
      }
    }

    getACTAccessData()
  }, [token, accessRequirement])

  return (
    <AcceptedRequirements
      accessRequirement={accessRequirement}
      accessRequirementText={accessRequirementText}
      accessRequirementStatus={accessRequirementStatus}
      token={token}
      user={user}
      wikiPage={wikiPage}
      showButton={false}
      onHide={onHide}
    />
  )
}
