import React, { useEffect, useState } from 'react'
import {
  ManagedACTAccessRequirement,
  WikiPageKey,
} from '../../utils/synapseTypes'
import { SynapseClient } from '../../utils'
import AcceptedRequirements from './AcceptedRequirements'
import { AccessRequirementProps } from './AccessRequirementProps'

export default function ManagedACTAccessRequirementComponent({
  accessRequirement,
  user,
  onHide,
  accessRequirementStatus,
  entityId,
}: AccessRequirementProps<ManagedACTAccessRequirement>) {
  const [wikiPage, setWikiPage] = useState<WikiPageKey>()

  useEffect(() => {
    const getManagedACTAccessData = async () => {
      try {
        const wikipageRequirement = await SynapseClient.getWikiPageKeyForAccessRequirement(
          accessRequirement.id,
        )
        setWikiPage(wikipageRequirement)
      } catch (err) {
        console.error('Error on get ManagedACTAccessRequirement', err)
      }
    }

    getManagedACTAccessData()
  }, [accessRequirement])

  return (
    <AcceptedRequirements
      accessRequirement={accessRequirement}
      accessRequirementStatus={accessRequirementStatus}
      entityId={entityId}
      user={user}
      wikiPage={wikiPage}
      onHide={onHide}
    />
  )
}
