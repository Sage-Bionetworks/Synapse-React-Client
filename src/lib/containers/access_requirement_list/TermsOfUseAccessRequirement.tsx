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
  token,
  user,
  onHide,
  accessRequirementStatus,
}: AccessRequirementProps<TermsOfUseAccessRequirement>) {
  const [wikiPage, setWikiPage] = useState<WikiPageKey | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const getTermsOfUseData = async () => {
      setIsLoading(true)

      try {
        if (!accessRequirement.termsOfUse) {
          const wikiPageRequirment = await SynapseClient.getWikiPageKey(
            token,
            accessRequirement.id,
          )

          setWikiPage(wikiPageRequirment)
        }
      } catch (err) {
        console.error('Error on prepare terms of use ', err)
      } finally {
        setIsLoading(false)
      }
    }

    getTermsOfUseData()
  }, [token, accessRequirement])

  return (
    <div>
      {isLoading && <span className="spinner" />}
      <AcceptedRequirements
        user={user}
        token={token}
        wikiPage={wikiPage}
        accessRequirement={accessRequirement}
        accessRequirementStatus={accessRequirementStatus}
        onHide={onHide}
      />
    </div>
  )
}
