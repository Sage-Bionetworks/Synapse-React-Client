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
  ACTSubmissionStatus,
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
import { cancelDataAccessRequest } from '../../../utils/SynapseClient'
import { AlertProps } from './RequestDataAccessStep2'
import { Alert } from 'react-bootstrap'

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

const RequestDataAccess: React.FC<RequestDataAccessProps> = (props) => {
  const { user, token, wikiPage, accessRequirementStatus, accessRequirement, showButton = true, onHide, requestDataStepCallback } = props
  const [isHide, setIsHide] = useState<boolean>(true)
  const propsIsApproved = accessRequirementStatus?.isApproved
  const [isApproved, setIsApproved] = useState<boolean | undefined>(
    propsIsApproved,
  )
  const [submissionState, setSubmissionState] = useState<SUBMISSION_STATE>()
  const [alert, setAlert] = useState<AlertProps | undefined>()
  const [isSubmissionCanceled, setIsSubmissionCanceled] = useState<boolean>(false)

  useEffect(() => {

    setIsApproved(propsIsApproved)
    if (accessRequirementStatus?.currentSubmissionStatus) {
      setSubmissionState(accessRequirementStatus.currentSubmissionStatus.state)
      showSubmissionStatusAlert(accessRequirementStatus.currentSubmissionStatus.state)
    }

  }, [propsIsApproved])

  const gotoSynapseAccessRequirementPage = () => {
    requestDataStepCallback?.({
      managedACTAccessRequirement: accessRequirement,
      step: 1
    })
  }

  const onAcceptClicked = async () => {
    if (
      accessRequirement.concreteType ===
        SUPPORTED_ACCESS_REQUIREMENTS.ManagedACTAccessRequirement ||
      accessRequirement.concreteType ===
        SUPPORTED_ACCESS_REQUIREMENTS.ACTAccessRequirement
    ) {
      if (token) {
        // !isSubmissionCanceled: if the submission has already been canceled, don't cancel again
        if (submissionState === SUBMISSION_STATE.SUBMITTED && !isSubmissionCanceled) {
          const errAlert = {
            key: 'danger',
            message: (<>
              <strong>Error canceling your data access request.</strong><br />
              Please try again later.
            </>)
          }
          try {
            const resp:ACTSubmissionStatus | any = await cancelDataAccessRequest(accessRequirementStatus?.currentSubmissionStatus!.submissionId, token)
            if (resp.state === SUBMISSION_STATE.CANCELLED) {  // successfully cancelled
              setAlert({
                key: 'success',
                message: (<strong>Your data access request has been canceled.</strong>)
              })
              setIsSubmissionCanceled(true)
            } else {
              setAlert(errAlert)
            }
          } catch (e) {
            console.log("RequestDataAccess: error canceling data access request:", e)
            setAlert(errAlert)
          }
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
            btnActionText = isSubmissionCanceled ? 'Update Request' : `Cancel Request`
            break
          case SUBMISSION_STATE.APPROVED:
          case SUBMISSION_STATE.REJECTED:
          case SUBMISSION_STATE.CANCELLED:
            btnActionText = 'Update Request'
        }
        return btnActionText
      } else {
        return 'Request access'
      }
    } else {
      return 'I Accept Terms of Use'
    }
  }

  const showSubmissionStatusAlert = (state:string) => {
    switch (state) {
      case SUBMISSION_STATE.SUBMITTED:
        setAlert({
          key: 'primary',
          message: (<strong>You have submitted a data access request.</strong>)
        })
        break
      case SUBMISSION_STATE.APPROVED:
        setAlert({
          key: 'success',
          message: (<strong>Your data access request has been approved.</strong>)
        })
        break
      case SUBMISSION_STATE.REJECTED:
        setAlert({
          key: 'danger',
          message: (<>
            <strong>Your data access request has been rejected.</strong><br />
            Before I can accept your request, please address the following:
            <ul>
              <li>Please upload every page of the DUC.</li>
              <li>Please contact us at <a href={"mailto:act@sagebionetworks.org"}>act@sagebionetworks.org</a> if you have any questions.</li>
            </ul>
          </>)
        })
        break
    }
    return <></>
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
        { /* Alert message */
          alert && <Alert className={"access-requirement-list-alert"} variant={alert.key}>
            {alert.message}
          </Alert>
        }
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
              </p>
              <p style={{marginBottom: '0'}}>
                {isManagedActAr && (
                  <button
                    className="update-request-button"
                    onClick={() => {
                      gotoSynapseAccessRequirementPage()
                    }}
                    style={{
                      paddingLeft: '0',
                      marginRight: '2rem'
                    }}
                  >{ getAcceptButtonText() }</button>
                )}
                <button
                  className="view-terms-button"
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
          {showButton && ( // This will show when the access is not approved
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
        </div>
      </div>
    </>
  )
}

export default RequestDataAccess
