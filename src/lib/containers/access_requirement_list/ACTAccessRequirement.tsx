import React, { useEffect, useState } from 'react'
import { ACTAccessRequirement, WikiPageKey } from '../../utils/synapseTypes'
import { SynapseClient } from '../../utils'
import AcceptedRequirements from './AcceptedRequirements'
import { AccessRequirementProps } from './AccessRequirementProps'

export default function ACTAccessRequirementComponent({
  accessRequirement,
  user,
  onHide,
  accessRequirementStatus,
  entityId,
}: AccessRequirementProps<ACTAccessRequirement>) {
  const [wikiPage, setWikiPage] = useState<WikiPageKey>()

  useEffect(() => {
    const getACTAccessData = async () => {
      try {
        const wikipageRequirement = await SynapseClient.getWikiPageKeyForAccessRequirement(
          accessRequirement.id,
        )
        setWikiPage(wikipageRequirement)
      } catch (err) {
        console.error('Error on get ACTAccessRequirement', err)
      }
    }

    getACTAccessData()
  }, [accessRequirement])

  return (
    <AcceptedRequirements
      accessRequirement={accessRequirement}
      accessRequirementStatus={accessRequirementStatus}
      user={user}
      wikiPage={wikiPage}
      onHide={onHide}
      entityId={entityId}
    />
  )
}
