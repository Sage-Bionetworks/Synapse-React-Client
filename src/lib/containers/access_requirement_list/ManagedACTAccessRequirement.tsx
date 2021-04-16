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
  token,
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
    <AcceptedRequirements
      accessRequirement={accessRequirement}
      accessRequirementStatus={accessRequirementStatus}
      entityId={entityId}
      token={token}
      user={user}
      wikiPage={wikiPage}
      onHide={onHide}
      showRequestAccessButton={true}
    />
  )
}
