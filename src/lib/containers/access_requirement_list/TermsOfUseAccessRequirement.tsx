import * as React from 'react'
import { useEffect, useState } from 'react'
import {
  TermsOfUseAccessRequirement,
  UserProfile,
  WikiPageKey,
  AccessRequirementStatus,
} from '../../utils/synapseTypes'
import { SynapseClient } from '../../utils'
import AcceptedRequirements from './AcceptedRequirements'

type Props = {
  accessRequirement: TermsOfUseAccessRequirement
  token: string | undefined
  user: UserProfile | undefined
  onHide?: Function
}

export default function TermsOfUseAccessRequirementComponent({
  accessRequirement,
  token,
  user,
  onHide,
}: Props) {
  const [wikiPage, setWikiPage] = useState<WikiPageKey | undefined>(undefined)
  const [
    termsOfUseRequirementStatus,
    setTermsOfUseRequirementStatus,
  ] = useState<AccessRequirementStatus | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const accessRequirementText = 'Terms of Use'

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

        const requirementStatus = await SynapseClient.getAccessRequirementStatus(
          token,
          accessRequirement!.id,
        )
        setTermsOfUseRequirementStatus(requirementStatus)
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
        accessRequirementStatus={termsOfUseRequirementStatus}
        accessRequirementText={accessRequirementText}
        onHide={onHide}
      />
    </div>
  )
}
