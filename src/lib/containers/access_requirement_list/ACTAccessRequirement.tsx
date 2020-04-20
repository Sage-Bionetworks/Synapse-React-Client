import React, { useEffect, useState } from 'react'
import { ACTAccessRequirement, WikiPageKey } from '../../utils/synapseTypes'
import { SynapseClient } from '../../utils'
import AcceptedRequirements from './AcceptedRequirements'
import { AccessRequirementProps } from './AccessRequirementProps'

export default function ACTAccessRequirementComponent({
  accessRequirement,
  token,
  user,
  onHide,
  accessRequirementStatus,
}: AccessRequirementProps<ACTAccessRequirement>) {
  const [wikiPage, setWikiPage] = useState<WikiPageKey>()

  useEffect(() => {
    const getACTAccessData = async () => {
      try {
        const wikipageRequirement = await SynapseClient.getWikiPageKey(
          token,
          accessRequirement.id,
        )
        setWikiPage(wikipageRequirement)
      } catch (err) {
        console.error('Error on get ACTAccessRequirement', err)
      }
    }

    getACTAccessData()
  }, [token, accessRequirement])

  return (
    <AcceptedRequirements
      accessRequirement={accessRequirement}
      accessRequirementStatus={accessRequirementStatus}
      token={token}
      user={user}
      wikiPage={wikiPage}
      showButton={false}
      onHide={onHide}
    />
  )
}
