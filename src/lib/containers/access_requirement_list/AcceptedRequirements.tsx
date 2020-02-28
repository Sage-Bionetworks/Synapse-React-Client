import * as React from 'react'
import { useState, useEffect } from 'react'
import MarkdownSynapse from '../../../lib/containers/MarkdownSynapse'
import {
  WikiPageKey,
  AccessRequirementStatus,
  AccessRequirement,
  UserProfile,
  TermsOfUseAccessRequirement,
  AccessApproval,
  ApprovalState,
} from '../../../lib/utils/synapseTypes/'
import { SynapseClient } from '../../../lib/utils'
import AccessApprovalCheckMark from './AccessApprovalCheckMark'
import { SUPPORTED_ACCESS_REQUIREMENTS } from './AccessRequirementList'

export type AcceptedRequirementsProps = {
  user: UserProfile | undefined
  token: string | undefined
  wikiPage: WikiPageKey | undefined
  accessRequirement: AccessRequirement | TermsOfUseAccessRequirement
  accessRequirementStatus: AccessRequirementStatus | undefined
  onHide?: Function
}

export default function AcceptedRequirements({
  user,
  token,
  wikiPage,
  accessRequirement,
  accessRequirementStatus,
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
  }, [propsIsApproved])

  const onAcceptClicked = () => {
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

  const RenderMarkdown = () => {
    const termsOfUse = (accessRequirement as TermsOfUseAccessRequirement)
      .termsOfUse

    return (
      <div>
        {accessRequirement.concreteType ===
          SUPPORTED_ACCESS_REQUIREMENTS.TermsOfUseAccessRequirement &&
        termsOfUse ? (
          <div>
            <MarkdownSynapse markdown={termsOfUse} />
          </div>
        ) : (
          <div>
            <MarkdownSynapse
              wikiId={wikiPage?.wikiPageId}
              ownerId={wikiPage?.ownerObjectId}
              objectType={wikiPage?.ownerObjectType}
            />
          </div>
        )}
      </div>
    )
  }
  const RenderAcceptedRequirements = () => {
    if (isApproved) {
      return (
        <div>
          <p>
            You have accepted Terms of Use.
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
      <div className={`button-container ${isApproved ? `hide` : `default`}`}>
        <div className="accept-button-container">
          <button className="accept-button" onClick={onAcceptClicked}>
            Accept Terms of Use
          </button>
        </div>
        <div className="not-accept-button-container">
          <button className="not-accpet-button" onClick={() => onHide?.()}>
            I do not accept
          </button>
        </div>
      </div>
    </div>
  )
}
