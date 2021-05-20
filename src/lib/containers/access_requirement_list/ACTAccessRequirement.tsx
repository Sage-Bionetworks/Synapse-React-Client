import React, { useContext, useEffect, useState } from 'react'
import { ACTAccessRequirement, WikiPageKey } from '../../utils/synapseTypes'
import { SynapseClient } from '../../utils'
import AcceptedRequirements from './AcceptedRequirements'
import { AccessRequirementProps } from './AccessRequirementProps'
import { SynapseContext } from '../../utils/SynapseContext'

export default function ACTAccessRequirementComponent({
  accessRequirement,
  user,
  onHide,
  accessRequirementStatus,
  entityId,
}: AccessRequirementProps<ACTAccessRequirement>) {
  const { accessToken } = useContext(SynapseContext)
  const [wikiPage, setWikiPage] = useState<WikiPageKey>()

  useEffect(() => {
    const getACTAccessData = async () => {
      try {
        const wikipageRequirement = await SynapseClient.getWikiPageKeyForAccessRequirement(
          accessToken,
          accessRequirement.id,
        )
        setWikiPage(wikipageRequirement)
      } catch (err) {
        console.error('Error on get ACTAccessRequirement', err)
      }
    }

    getACTAccessData()
  }, [accessToken, accessRequirement])

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
