import * as React from 'react'
import { useEffect, useState } from 'react'
import {
  WikiPageKey,
  TermsOfUseAccessRequirement,
} from '../../utils/synapseTypes'
import { SynapseClient } from '../../utils'
import AcceptedRequirements from './AcceptedRequirements'
import { AccessRequirementProps } from './AccessRequirementProps'

export default function TermsOfUseAccessRequirementComponent({
  accessRequirement,
  user,
  onHide,
  accessRequirementStatus,
  entityId,
}: AccessRequirementProps<TermsOfUseAccessRequirement>) {
  const [wikiPage, setWikiPage] = useState<WikiPageKey | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const getTermsOfUseData = async () => {
      setIsLoading(true)

      try {
        const wikiPageRequirement = await SynapseClient.getWikiPageKeyForAccessRequirement(
          accessRequirement.id,
        )
        setWikiPage(wikiPageRequirement)
      } catch (err) {
        console.error('Error on prepare terms of use ', err)
      } finally {
        setIsLoading(false)
      }
    }

    getTermsOfUseData()
  }, [accessRequirement])

  return (
    <>
      {isLoading && <span className="spinner" />}
      <AcceptedRequirements
        user={user}
        wikiPage={wikiPage}
        accessRequirement={accessRequirement}
        accessRequirementStatus={accessRequirementStatus}
        onHide={onHide}
        entityId={entityId}
      />
    </>
  )
}
