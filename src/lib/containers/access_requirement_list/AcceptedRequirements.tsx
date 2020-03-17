import * as React from 'react'
import { useState, useEffect } from 'react'
import MarkdownSynapse from '../../../lib/containers/MarkdownSynapse'
import {
  WikiPageKey,
  AccessRequirementStatus,
  AccessRequirement,
  UserProfile,
  TermsOfUseAccessRequirement,
  SelfSignAccessRequirement,
  ManagedACTAccessRequirement,
  AccessApproval,
  ApprovalState,
  ACTAccessRequirement,
} from '../../../lib/utils/synapseTypes/'
import { SynapseClient } from '../../../lib/utils'
import AccessApprovalCheckMark from './AccessApprovalCheckMark'
import { SUPPORTED_ACCESS_REQUIREMENTS } from './AccessRequirementList'

export type AcceptedRequirementsProps = {
  user: UserProfile | undefined
  token: string | undefined
  wikiPage: WikiPageKey | undefined
  accessRequirement:
    | AccessRequirement
    | TermsOfUseAccessRequirement
    | SelfSignAccessRequirement
    | ManagedACTAccessRequirement
  accessRequirementText: string
  accessRequirementStatus: AccessRequirementStatus | undefined
  showButton?: boolean
  onHide?: Function
}

export default function AcceptedRequirements({
  user,
  token,
  wikiPage,
  accessRequirement,
  accessRequirementText,
  accessRequirementStatus,
  showButton,
  onHide,
}: AcceptedRequirementsProps) {
  const [isHide, setIsHide] = useState<boolean>(true)
  const propsIsApproved = accessRequirementStatus?.isApproved
  const [isApproved, setIsApproved] = useState<boolean | undefined>(
    propsIsApproved,
  )

  useEffect(() => {
    const setIsApprovedValueFromProps = (propsIsApproved?: boolean) => {
      setIsApproved(propsIsApproved)
    }
    setIsApprovedValueFromProps(propsIsApproved)
  }, [propsIsApproved, accessRequirementText])

  const onAcceptClicked = () => {
    if (
      accessRequirement.concreteType ===
      SUPPORTED_ACCESS_REQUIREMENTS.ManagedACTAccessRequirement
    ) {
      window.open(
        `https://www.synapse.org/#!AccessRequirement:AR_ID=${accessRequirement.id}`,
      )
      window.location.reload()
    } else {
      if (!isApproved) {
        const accessApprovalRequest: AccessApproval = {
          requirementId: accessRequirement?.id!,
          submitterId: user?.ownerId!,
          accessorId: user?.ownerId!,
          state: ApprovalState.APPROVED,
        }

        SynapseClient.postAccessApproval(token, accessApprovalRequest)
          .then(_ => {
            setIsApproved(true)
          })
          .catch(err => console.error('Error on post access approval: ', err))
      }
    }
  }

  const RenderMarkdown = () => {
    const termsOfUse = (accessRequirement as TermsOfUseAccessRequirement)
      .termsOfUse

    const actContactInfo = (accessRequirement as ACTAccessRequirement)
      .actContactInfo

    if (
      accessRequirement.concreteType ===
        SUPPORTED_ACCESS_REQUIREMENTS.TermsOfUseAccessRequirement &&
      termsOfUse
    ) {
      return <MarkdownSynapse markdown={termsOfUse} token={token} />
    } else if (
      accessRequirement.concreteType ===
        SUPPORTED_ACCESS_REQUIREMENTS.ACTAccessRequirement &&
      actContactInfo
    ) {
      return <p>{actContactInfo}</p>
    } else {
      return (
        <MarkdownSynapse
          token={token}
          wikiId={wikiPage?.wikiPageId}
          ownerId={wikiPage?.ownerObjectId}
          objectType={wikiPage?.ownerObjectType}
        />
      )
    }
  }

  const RenderAcceptedRequirements = () => {
    if (isApproved) {
      return (
        <div>
          <p>
            You have accepted {accessRequirementText}.
            <button
              className="view-terms-button bold-text"
              onClick={() => {
                setIsHide(!isHide)
              }}
            >
              View Terms
            </button>
          </p>
          <div className={`view-terms ${isHide ? 'hide' : 'show'}`}>
            <RenderMarkdown />
          </div>
        </div>
      )
    }
    return <RenderMarkdown />
  }

  return (
    <div>
      <div className="requirement-container">
        <AccessApprovalCheckMark isCompleted={isApproved} />
        <div>
          <p className="terms-of-use-title bold-text">
            Agree to the following terms and conditions.
          </p>
          <RenderAcceptedRequirements />
        </div>
      </div>

      {showButton ?? (
        <div className={`button-container ${isApproved ? `hide` : `default`}`}>
          <div className="accept-button-container">
            <button className="accept-button" onClick={onAcceptClicked}>
              {accessRequirement.concreteType ===
              SUPPORTED_ACCESS_REQUIREMENTS.ManagedACTAccessRequirement
                ? `Get ${accessRequirementText} via synapse.org`
                : `Accept ${accessRequirementText}`}
            </button>
          </div>

          <div className="not-accept-button-container">
            <button className="not-accpet-button" onClick={() => onHide?.()}>
              I do not accept
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
