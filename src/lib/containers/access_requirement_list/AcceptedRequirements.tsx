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
    ApprovalState
} from '../../../lib/utils/synapseTypes/'
import { SynapseClient } from '../../../lib/utils'
import AccessApprovalCheckMark from './AccessApprovalCheckMark'


type Props = {
    user: UserProfile | undefined,
    token: string | undefined,
    wikiPage: WikiPageKey | undefined,
    accessRequirement: AccessRequirement | TermsOfUseAccessRequirement,
    accessRequirementStatus: AccessRequirementStatus,
    approval: boolean,
    onHide?: Function,
}

enum SUPPORTED_ACCESS_REQUIREMENTS {
    SelfSignAccessRequirement = 'org.sagebionetworks.repo.model.SelfSignAccessRequirement',
    TermsOfUseAccessRequirement = 'org.sagebionetworks.repo.model.TermsOfUseAccessRequirement',
}

export default function AcceptedRequirements({
    user,
    token,
    wikiPage,
    accessRequirement,
    accessRequirementStatus,
    approval,
    onHide,

}: Props) {

    const [isHide, setIsHide] = useState<boolean>(true)
    const [isApproved, setIsApproved] = useState<boolean>(false)

    useEffect(() => {

        setIsApproved(approval)

    }, [approval])

    const onAcceptClicked = () => {

        if (!accessRequirementStatus?.isApproved) {
            const accessApprovalRequest: AccessApproval = {
                requirementId: accessRequirement?.id!,
                submitterId: user?.ownerId!,
                accessorId: user?.ownerId!,
                state: ApprovalState.APPROVED,
            }

            SynapseClient.postAccessApproval(token, accessApprovalRequest).then(_ => {
                setIsApproved(true)

            }).catch(
                err => console.error('Error on post access approval: ', err))
        }

    }

    const RenderMarkDown = () => {
        return (
            <div>
                {(accessRequirement.concreteType === SUPPORTED_ACCESS_REQUIREMENTS.TermsOfUseAccessRequirement &&
                    (accessRequirement as TermsOfUseAccessRequirement).termsOfUse) ? (
                        <div>
                            <MarkdownSynapse markdown={(accessRequirement as TermsOfUseAccessRequirement).termsOfUse} />
                        </div>
                    ) : (
                        <div>
                            <MarkdownSynapse
                                wikiId={wikiPage?.wikiPageId}
                                ownerId={wikiPage?.ownerObjectId}
                                objectType={wikiPage?.ownerObjectType}
                            />
                        </div>
                    )
                }
            </div>
        )
    }

    const RenderAcceptedRequirements = () => {
        if (isApproved) {
            return (
                <div>
                    <p>
                        You have accepted self sign access requirements
                        <button className="view-terms-button bold-text" onClick={
                            () => { setIsHide(!isHide) }}>
                            View Terms
                        </button>
                    </p>
                    <div className={`view-terms ${isHide ? 'hide' : 'show'}`}>
                        <RenderMarkDown />
                    </div>
                </div>
            )
        }
        return <RenderMarkDown />
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
                    <button className="accept-button" onClick={onAcceptClicked}>Accept Terms of Use
                        </button>
                </div>
                <div className="not-accept-button-container">
                    <button className="not-accpet-button" onClick={() => onHide?.()}>I do not accept</button>
                </div>
            </div >
        </div>
    )
}