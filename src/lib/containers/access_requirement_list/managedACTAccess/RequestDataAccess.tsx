/**
 * Copied from src/lib/containers/access_requirement_list/AcceptedRequirements.tsx
 */

import * as React from 'react'
import { useEffect, useState } from 'react'
import MarkdownSynapse from '../../MarkdownSynapse'
import {
  AccessApproval,
  AccessRequirement,
  ACTAccessRequirement,
  ApprovalState,
  ManagedACTAccessRequirement,
  SelfSignAccessRequirement,
  SUBMISSION_STATE,
  TermsOfUseAccessRequirement,
  UserProfile,
  WikiPageKey,
} from '../../../utils/synapseTypes/'
import { SynapseClient } from '../../../utils'
import AccessApprovalCheckMark from '../AccessApprovalCheckMark'
import { SUPPORTED_ACCESS_REQUIREMENTS } from '../AccessRequirementList'
import { ManagedACTAccessRequirementStatus } from '../../../utils/synapseTypes/AccessRequirement/ManagedACTAccessRequirementStatus'

export type RequestDataAccessProps = {
  user: UserProfile | undefined
  token: string | undefined
  wikiPage: WikiPageKey | undefined
  entityId: string
  accessRequirement:
    | AccessRequirement
    | TermsOfUseAccessRequirement
    | SelfSignAccessRequirement
    | ManagedACTAccessRequirement
  accessRequirementStatus?: ManagedACTAccessRequirementStatus
  showButton?: boolean
  onHide?: Function
  requestDataStepCallback?: Function
}

// const LoginPage: React.FunctionComponent<LoginPageProps> =
const RequestDataAccess: React.FC<RequestDataAccessProps> = (props) => {
  const { user, token, wikiPage, accessRequirementStatus, accessRequirement, showButton = true, onHide, requestDataStepCallback } = props
  const [isHide, setIsHide] = useState<boolean>(true)
  const propsIsApproved = accessRequirementStatus?.isApproved
  const [isApproved, setIsApproved] = useState<boolean | undefined>(
    propsIsApproved,
  )
  const [submissionState, setSubmissionState] = useState<SUBMISSION_STATE>()

  useEffect(() => {

    setIsApproved(propsIsApproved)
    if (accessRequirementStatus?.currentSubmissionStatus) {
      setSubmissionState(accessRequirementStatus.currentSubmissionStatus.state)
    }

  }, [propsIsApproved])

  const gotoSynapseAccessRequirementPage = () => {
    requestDataStepCallback?.({
      managedACTAccessRequirement: accessRequirement,
      step: 1
    })
  }

  const onAcceptClicked = () => {
    if (
      accessRequirement.concreteType ===
        SUPPORTED_ACCESS_REQUIREMENTS.ManagedACTAccessRequirement ||
      accessRequirement.concreteType ===
        SUPPORTED_ACCESS_REQUIREMENTS.ACTAccessRequirement
    ) {
      if (token) {
        if (submissionState === SUBMISSION_STATE.CANCELLED) {
          // TODO: add logic to handle cancel request
        } else {
          gotoSynapseAccessRequirementPage()
        }
      } else {
        requestDataStepCallback?.({
          managedACTAccessRequirement: accessRequirement,
          step: 4
        })
      }

      // PORTALS-1483: and close the dialog.
      // onHide?.()
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

  const getAcceptButtonText = () => {
    if ( accessRequirement.concreteType === SUPPORTED_ACCESS_REQUIREMENTS.ManagedACTAccessRequirement ||
      accessRequirement.concreteType === SUPPORTED_ACCESS_REQUIREMENTS.ACTAccessRequirement ) {
      if (submissionState) {
        let btnActionText
        switch (submissionState) {
          case SUBMISSION_STATE.SUBMITTED:
            btnActionText = `Cancel Request`
            break
          case SUBMISSION_STATE.APPROVED:
          case SUBMISSION_STATE.REJECTED:
            btnActionText = 'Update Request'
        }
        return btnActionText
        // return `Your data access request has been ${submissionState.toLocaleLowerCase()}`  // TODO: delete
      } else {
        return 'Request access'
      }
    } else {
      return 'I Accept Terms of Use'
    }
  }

  const getSubmissionStatusText = () => {
    switch (submissionState) {
      case SUBMISSION_STATE.SUBMITTED:
        return `You have submitted a data access request.`
      case SUBMISSION_STATE.APPROVED:
        return 'Your data access request has been approved.'
      case SUBMISSION_STATE.REJECTED:
        return `Your data access request has been rejected. Before I can accept your request, please address the following: ` +
          `Please upload every page of the DUC. Please contact us at act@sagebionetworks.org if you have any questions.` +
          `Regards, Access and Compliance Team (ACT) act@sagebionetworks.org`
      case SUBMISSION_STATE.CANCELLED:
        return 'Your data access request has been canceled.'
    }
    return ''
  }

  const termsOfUse = (accessRequirement as TermsOfUseAccessRequirement)
    .termsOfUse

  const actContactInfo = (accessRequirement as ACTAccessRequirement)
    .actContactInfo

  const isTermsOfUse =
    accessRequirement.concreteType ===
    SUPPORTED_ACCESS_REQUIREMENTS.TermsOfUseAccessRequirement
  const isActContactInfo =
    accessRequirement.concreteType ===
    SUPPORTED_ACCESS_REQUIREMENTS.ACTAccessRequirement

  const isActOrTermsOfUse =
    (isTermsOfUse && termsOfUse) || (isActContactInfo && actContactInfo)

  let markdown = <></>

  if (wikiPage) {
    markdown = (
      <div className="AcceptRequirementsMarkdown">
        {
          wikiPage && <MarkdownSynapse  // remove React mount/unmount error
            token={token}
            wikiId={wikiPage?.wikiPageId}
            ownerId={wikiPage?.ownerObjectId}
            objectType={wikiPage?.ownerObjectType}
          />
        }
        { submissionState && <div>{getSubmissionStatusText()}</div> }
      </div>
    )
  } else if (isActOrTermsOfUse) {
    markdown = (<MarkdownSynapse
        markdown={isTermsOfUse ? termsOfUse : actContactInfo}
        token={token}
      />
    )
  }

  const isManagedActAr =
    accessRequirement.concreteType ===
    SUPPORTED_ACCESS_REQUIREMENTS.ManagedACTAccessRequirement  
  const approvedText = isManagedActAr ? "Your data access request has been approved." : "You have accepted the terms of use."
  return (
    <>
      <div className="requirement-container">
        <AccessApprovalCheckMark isCompleted={isApproved} />
        <div className="terms-of-use-content">
          {isApproved ? (
            <div>
              <p>
                {approvedText}
                {isManagedActAr && (
                  <button
                    className="update-request-button bold-text"
                    onClick={() => {
                      gotoSynapseAccessRequirementPage()
                    }}
                  >{ getAcceptButtonText() }</button>
                )}
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
                {markdown}
              </div>
            </div>
          ) : (
            markdown
          )}
        </div>
      </div>
      {showButton && submissionState !== SUBMISSION_STATE.CANCELLED && ( // This will show when the access is not approved
        <div className={`button-container ${isApproved ? `hide` : `default`}`}>
          <div className="accept-button-container">
            <button className="accept-button" onClick={onAcceptClicked}>
              {getAcceptButtonText()}
            </button>
          </div>

          <div className="not-accept-button-container">
            <button className="not-accpet-button" onClick={() => onHide?.()}>
              I do not accept
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default RequestDataAccess
