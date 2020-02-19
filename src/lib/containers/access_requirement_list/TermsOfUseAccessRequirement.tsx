import * as React from 'react'
import { useEffect, useState } from 'react'
import {
  TermsOfUseAccessRequirement,
  UserProfile,
  WikiPageKey,
  AccessRequirementStatus
} from '../../../lib/utils/synapseTypes'
import { SynapseClient } from '../../../lib/utils'
import AccessApprovalCheckMark from './AccessApprovalCheckMark'
import AcceptedRequirements from './AcceptedRequirements'

type Props = {
  accessRequirement: TermsOfUseAccessRequirement,
  token: string | undefined,
  user: UserProfile | undefined,
  onHide?: Function,
}

export default function TermsOfUseAccessRequirementComponent({
  accessRequirement,
  token,
  user,
  onHide,
}: Props) {

  const [wikiPage, setWikiPage] = useState<WikiPageKey | undefined>(undefined)
  const [termsOfUseRequirementStatus, setTermsOfUseRequirementStatus] = useState<AccessRequirementStatus | undefined>(undefined)
  const [isApproved, setIsApproved] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {

    const getPrepareTermsOfUse = async () => {

      setIsLoading(true)

      try {

        if (!accessRequirement.termsOfUse) {

          const wikiPageRequirment = await SynapseClient.getWikiPageKey(token, accessRequirement.id)

          setWikiPage(wikiPageRequirment)
        }

        const requirementStatus = await SynapseClient.getAccessRequirementStatus(token, accessRequirement!.id)
        setTermsOfUseRequirementStatus(requirementStatus)
        setIsApproved(requirementStatus.isApproved)

      } catch (err) {
        console.error('Error on prepare terms of use ', err)

      } finally {
        setIsLoading(false)
      }

    }

    getPrepareTermsOfUse()

  }, [token, accessRequirement])

  return (
    <div>
      {isLoading && (<span className="spinner" />)}
      <div className="requirement-container">
        <AccessApprovalCheckMark isCompleted={isApproved} />
        <div className="terms-of-use-content">
          <AcceptedRequirements
            user={user}
            token={token}
            wikiPage={wikiPage!}
            accessRequirement={accessRequirement}
            accessRequirementStatus={termsOfUseRequirementStatus!}
            approval={isApproved}
            onHide={onHide}
          />
        </div>
      </div>
    </div>
  )
}

