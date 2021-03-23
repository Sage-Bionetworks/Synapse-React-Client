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
  TermsOfUseAccessRequirement,
  UserProfile,
  WikiPageKey,
} from '../../../utils/synapseTypes/'
import { SynapseClient } from '../../../utils'
import AccessApprovalCheckMark from '../AccessApprovalCheckMark'
import { SUPPORTED_ACCESS_REQUIREMENTS } from '../AccessRequirementList'
import {
  ManagedACTAccessRequirementStatus,
  SUBMISSION_STATE,
} from '../../../utils/synapseTypes/AccessRequirement/ManagedACTAccessRequirementStatus'

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
    // window.open(
    //   `https://www.synapse.org/#!AccessRequirement:AR_ID=${accessRequirement.id}&TYPE=ENTITY&ID=${entityId}`,
    // )
    requestDataStepCallback?.(accessRequirementStatus?.accessRequirementId, 1)  //TODO: update test code
  }
  const onAcceptClicked = () => {
    if (
      accessRequirement.concreteType ===
        SUPPORTED_ACCESS_REQUIREMENTS.ManagedACTAccessRequirement ||
      accessRequirement.concreteType ===
        SUPPORTED_ACCESS_REQUIREMENTS.ACTAccessRequirement
    ) {
      gotoSynapseAccessRequirementPage()
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
        return `Your data access request has been ${submissionState.toLocaleLowerCase()}`
      } else {
        return 'Request access'
      }
    } else {
      return 'I Accept Terms of Use'
    }
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
        <MarkdownSynapse
          token={token}
          wikiId={wikiPage?.wikiPageId}
          ownerId={wikiPage?.ownerObjectId}
          objectType={wikiPage?.ownerObjectType}
        />
      </div>
    )
  } else if (isActOrTermsOfUse) {
    markdown = (
      <MarkdownSynapse
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
                  >
                    Update Request
                  </button>
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
      {token && showButton && (
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
