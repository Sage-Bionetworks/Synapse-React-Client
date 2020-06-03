import * as React from 'react'
import { useState, useEffect } from 'react'
import MarkdownSynapse from '../MarkdownSynapse'
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
} from '../../utils/synapseTypes/'
import { SynapseClient } from '../../utils'
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
  accessRequirementStatus: AccessRequirementStatus | undefined
  showButton?: boolean
  onHide?: Function
}

export default function AcceptedRequirements({
  user,
  token,
  wikiPage,
  accessRequirement,
  accessRequirementStatus,
  showButton,
  onHide,
}: AcceptedRequirementsProps) {
  const [isHide, setIsHide] = useState<boolean>(true)
  const propsIsApproved = accessRequirementStatus?.isApproved
  const [isApproved, setIsApproved] = useState<boolean | undefined>(
    propsIsApproved,
  )

  let acceptButtonText = ''

  console.log('accessRequirement = ', accessRequirement)
  console.log(
    accessRequirement.concreteType ===
      SUPPORTED_ACCESS_REQUIREMENTS.ACTAccessRequirement,
  )
  if (
    accessRequirement.concreteType ===
      SUPPORTED_ACCESS_REQUIREMENTS.ManagedACTAccessRequirement ||
    accessRequirement.concreteType ===
      SUPPORTED_ACCESS_REQUIREMENTS.ACTAccessRequirement
  ) {
    if (
      window.location.hostname === 'www.synapse.org' ||
      window.location.hostname === 'staging.synapse.org'
    ) {
      acceptButtonText = 'Get access'
    } else {
      acceptButtonText = 'Get access via Synapse.org'
    }
  } else {
    acceptButtonText = 'I Accept Terms of Use'
  }

  useEffect(() => {
    const setIsApprovedValueFromProps = (propsIsApproved?: boolean) => {
      setIsApproved(propsIsApproved)
    }
    setIsApprovedValueFromProps(propsIsApproved)
  }, [propsIsApproved])

  const onAcceptClicked = () => {
    if (
      accessRequirement.concreteType ===
        SUPPORTED_ACCESS_REQUIREMENTS.ManagedACTAccessRequirement ||
      accessRequirement.concreteType ===
        SUPPORTED_ACCESS_REQUIREMENTS.ACTAccessRequirement
    ) {
      window.open(
        `https://www.synapse.org/#!AccessRequirement:AR_ID=${accessRequirement.id}`,
      )
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
    if (wikiPage) {
      return (
        <div className="AcceptRequirementsMarkdown">
          <MarkdownSynapse
            token={token}
            wikiId={wikiPage?.wikiPageId}
            ownerId={wikiPage?.ownerObjectId}
            objectType={wikiPage?.ownerObjectType}
          />
        </div>
      )
    }
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
      return <div className="AcceptRequirementsMarkdown">{actContactInfo}</div>
    }
    return <></>
  }

  const RenderAcceptedRequirements = () => {
    if (isApproved) {
      return (
        <div>
          <p>
            You have accepted the terms of use.
            <button
              className="view-terms-button bold-text"
              onClick={() => {
                setIsHide(!isHide)
              }}
            >
              View Terms
            </button>
          </p>
          <div className={`view-terms ${isHide ? 'hidden' : 'show'}`}>
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
        <div className="terms-of-use-content">
          <RenderAcceptedRequirements />
        </div>
      </div>
      {showButton ?? (
        <div className={`button-container ${isApproved ? `hide` : `default`}`}>
          <div className="accept-button-container">
            <button className="accept-button" onClick={onAcceptClicked}>
              {acceptButtonText}
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
