import { Skeleton } from '@material-ui/lab'
import { upperFirst, toLower } from 'lodash-es'
import moment from 'moment'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useErrorHandler } from 'react-error-boundary'
import { SynapseClient } from '../../utils'
import { formatDate } from '../../utils/functions/DateFormatter'
import useGetAccessRequirement, {
  useGetAccessRequirementACL,
  useGetAccessRequirementWikiPageKey,
} from '../../utils/hooks/SynapseAPI/dataaccess/useGetAccessRequirement'
import useGetDataAccessSubmission from '../../utils/hooks/SynapseAPI/dataaccess/useGetDataAccessSubmission'
import { ACT_TEAM_ID } from '../../utils/SynapseConstants'
import { useSynapseContext } from '../../utils/SynapseContext'
import {
  FileHandleAssociateType,
  ManagedACTAccessRequirement,
  SubmissionState,
} from '../../utils/synapseTypes'
import Typography from '../../utils/typography/Typography'
import MarkdownSynapse from '../MarkdownSynapse'
import WarningModal, {
  WarningModalProps,
} from '../synapse_form_wrapper/WarningModal'
import UserCard from '../UserCard'
import UserOrTeamBadge from '../UserOrTeamBadge'
import { FileHandleLink } from '../widgets/FileHandleLink'

export type SubmissionPageProps = {
  /** The ID of the submission to view */
  submissionId: string | number
  /** Invoked when a reviewer clicks "Reject". Note that the web request to reject the submission is not sent. We do this to continue using the existing rejection dialog written in SWC */
  onRejectClicked: () => void
}

function DataAccessSubmissionFileHandleLink(props: {
  submissionId: string
  fileHandleId: string
}) {
  const { submissionId, fileHandleId } = props
  const fileHandleAssociation = React.useMemo(
    () => ({
      fileHandleId: fileHandleId,
      associateObjectId: submissionId,
      associateObjectType:
        FileHandleAssociateType.DataAccessSubmissionAttachment,
    }),
    [fileHandleId, submissionId],
  )
  return (
    <FileHandleLink
      key={fileHandleId}
      showDownloadIcon={true}
      fileHandleAssociation={fileHandleAssociation}
    />
  )
}

function ApproveConfirmationModal(
  props: Pick<WarningModalProps, 'show' | 'onConfirm' | 'onCancel'>,
) {
  return (
    <WarningModal
      show={props.show}
      title="Approve Request?"
      modalBody={
        <>
          <Typography variant="body1">
            Approving the request will grant access to controlled data.
          </Typography>
          <Typography variant="body1">
            In addition, the user will receive an email notification alerting
            them that the request has been granted.
          </Typography>
        </>
      }
      onConfirm={props.onConfirm}
      onConfirmCallbackArgs={[]}
      onCancel={props.onCancel}
      confirmButtonText="Approve"
    />
  )
}

/**
 * Page for a Data Access Submission that a designated reviewer can view, and choose to approve or reject.
 */
export default function SubmissionPage(props: SubmissionPageProps) {
  const { submissionId, onRejectClicked } = props

  const handleError = useErrorHandler()
  const { accessToken } = useSynapseContext()
  const { data: submission, refetch } = useGetDataAccessSubmission(
    submissionId,
    { useErrorBoundary: true },
  )

  const { data: accessRequirement } =
    useGetAccessRequirement<ManagedACTAccessRequirement>(
      parseInt(submission?.accessRequirementId!),
      { enabled: !!submission },
    )

  const { data: acl } = useGetAccessRequirementACL(
    submission?.accessRequirementId!,
    { enabled: !!submission, useErrorBoundary: true },
  )
  const { data: wikiPageKey } = useGetAccessRequirementWikiPageKey(
    submission?.accessRequirementId!,
    { enabled: !!submission, useErrorBoundary: true },
  )

  const [showApprovalConfirmation, setShowApprovalConfirmation] =
    useState(false)

  async function approveSubmission() {
    return await SynapseClient.updateSubmissionStatus(
      {
        submissionId: submission?.id ?? '',
        newState: SubmissionState.APPROVED,
      },
      accessToken,
    )
  }

  return (
    <div className="SubmissionPage">
      <ApproveConfirmationModal
        show={showApprovalConfirmation}
        onCancel={() => {
          setShowApprovalConfirmation(false)
        }}
        onConfirm={async () => {
          try {
            await approveSubmission()
          } catch (e) {
            handleError(e)
          }
          setShowApprovalConfirmation(false)
          refetch()
        }}
      />
      <div className="SubmissionSummary">
        <Typography className="FieldName" variant="smallText1">
          Status
        </Typography>
        <Typography variant="headline3">
          {submission ? submission.state : <Skeleton width={100} />}
        </Typography>
        <br />
        {submission ? (
          submission.state === 'SUBMITTED' && (
            <div className="bootstrap-4-backport ButtonContainer">
              <Button
                onClick={() => {
                  setShowApprovalConfirmation(true)
                }}
                variant="success"
              >
                Approve
              </Button>
              <Button onClick={onRejectClicked} variant="danger">
                Reject
              </Button>
            </div>
          )
        ) : (
          <Skeleton width={200} />
        )}
        <Typography variant="smallText1" className="FieldName">
          Access Requirement Name
        </Typography>
        <Typography variant="smallText1">
          {accessRequirement?.name ?? <Skeleton width={100} />}
        </Typography>
        <br />
        <Typography variant="smallText1" className="FieldName">
          Assigned Reviewer
        </Typography>
        <Typography variant="smallText1">
          {acl !== undefined ? (
            acl !== null ? (
              acl.resourceAccess.map(ra => {
                return (
                  <UserOrTeamBadge
                    key={ra.principalId}
                    principalId={ra.principalId}
                  />
                )
              })
            ) : (
              <UserOrTeamBadge principalId={ACT_TEAM_ID} />
            )
          ) : (
            <Skeleton width={100} />
          )}
        </Typography>
        <br />
        <Typography variant="smallText1" className="FieldName">
          Conditions
        </Typography>
        {accessRequirement ? (
          <Typography variant="smallText1">
            <ul>
              <li>
                Expiration period:{' '}
                {moment
                  .duration(accessRequirement.expirationPeriod, 'milliseconds')
                  .asDays()}{' '}
                day(s)
                {accessRequirement.expirationPeriod === 0 && ' (no expiration)'}
              </li>

              {accessRequirement.isCertifiedUserRequired && (
                <li>User must be Certified</li>
              )}
              {accessRequirement.isValidatedProfileRequired && (
                <li>User Profile must be Validated</li>
              )}
              {accessRequirement.isDUCRequired && <li>DUC is required</li>}
              {accessRequirement.isIDURequired && <li>IDU is required</li>}
              {accessRequirement.isIDUPublic && (
                <li>IDU will be made public</li>
              )}
              {accessRequirement.isIRBApprovalRequired && (
                <li>IRB Approval is required</li>
              )}
              {accessRequirement.areOtherAttachmentsRequired && (
                <li>Other attachments are required</li>
              )}
            </ul>
          </Typography>
        ) : (
          <Skeleton width={100} />
        )}
        <br />
        <div className="SubmissionSummaryGrid">
          <Typography variant="smallText1" className="FieldName">
            Submitted By
          </Typography>
          <Typography variant="smallText1">
            {submission ? (
              <UserCard
                size={'SMALL USER CARD'}
                ownerId={submission.submittedBy}
              />
            ) : (
              <Skeleton width={100} />
            )}
          </Typography>
          <Typography variant="smallText1" className="FieldName">
            Submitted On
          </Typography>
          <Typography variant="smallText1">
            {submission ? (
              formatDate(moment(submission.submittedOn))
            ) : (
              <Skeleton width={100} />
            )}
          </Typography>
          {/* TODO: Determine if modifiedOn reliably indicates a reviewer if not the submitter. */}
          <Typography variant="smallText1">Modified By</Typography>
          <Typography variant="smallText1">
            {submission ? (
              <UserCard
                size={'SMALL USER CARD'}
                ownerId={submission.modifiedBy}
              />
            ) : (
              <Skeleton width={100} />
            )}
          </Typography>
          <br />
          <Typography variant="smallText1">Modified On</Typography>
          <Typography variant="smallText1">
            {submission ? (
              formatDate(moment(submission.modifiedOn))
            ) : (
              <Skeleton width={100} />
            )}
          </Typography>
          <Typography className="FieldName Key" variant="smallText1">
            Data Requesters
            {`${submission ? ` (${submission.accessorChanges.length})` : ''}`}
          </Typography>
          {submission ? (
            submission.accessorChanges.map(accessorChange => (
              <React.Fragment key={accessorChange.userId}>
                <Typography className="Key" variant="smallText1">
                  <span style={{ whiteSpace: 'nowrap' }}>
                    <UserCard
                      key={accessorChange.userId}
                      size="SMALL USER CARD"
                      ownerId={accessorChange.userId}
                    />
                  </span>
                </Typography>
                <Typography className="Value" variant="smallText1">
                  {upperFirst(
                    toLower(
                      accessorChange.type.substring(
                        0,
                        accessorChange.type.indexOf('_'),
                      ),
                    ),
                  )}
                </Typography>
              </React.Fragment>
            ))
          ) : (
            <Skeleton width={100} />
          )}
          <Typography className="FieldName Key" variant="smallText1">
            Institution
          </Typography>
          <Typography className="Value" variant="smallText1">
            {submission ? (
              submission.researchProjectSnapshot.institution
            ) : (
              <Skeleton width={100} />
            )}
          </Typography>
          <Typography className="FieldName Key" variant="smallText1">
            Project Lead
          </Typography>
          <Typography className="Value" variant="smallText1">
            {submission ? (
              submission.researchProjectSnapshot.projectLead
            ) : (
              <Skeleton width={100} />
            )}
          </Typography>
        </div>
      </div>
      <div className="SubmissionRightPane">
        <div className="AccessRequirementWikiContainer">
          <div className="AccessRequirementWikiContent">
            <Typography variant="headline1">Access Requirement</Typography>
            <hr />
            <MarkdownSynapse
              wikiId={wikiPageKey?.wikiPageId}
              ownerId={wikiPageKey?.ownerObjectId}
              objectType={wikiPageKey?.ownerObjectType}
            />
          </div>
        </div>
        <div>
          {submission?.rejectedReason && (
            <>
              <Typography variant="headline1">
                Reason for rejection given by reviewer
              </Typography>
              <hr />
              <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>
                {submission.rejectedReason}
              </Typography>
            </>
          )}
          <Typography variant="headline1">
            Contents of the Access Request
          </Typography>
          <hr />
          {submission?.researchProjectSnapshot.intendedDataUseStatement && (
            <>
              <Typography variant="headline2">
                Intended Data Use Statement
              </Typography>
              <Typography variant="body1">
                {submission.researchProjectSnapshot.intendedDataUseStatement}
              </Typography>
            </>
          )}
          <Typography variant="headline2">Documents</Typography>
          {submission?.ducFileHandleId && (
            <>
              <Typography variant="smallText2">
                Data User Certificate (DUC)
              </Typography>
              <DataAccessSubmissionFileHandleLink
                submissionId={submission.id}
                fileHandleId={submission.ducFileHandleId}
              />
            </>
          )}
          {submission?.irbFileHandleId && (
            <>
              <Typography variant="smallText2">IRB Approval Letter</Typography>
              <DataAccessSubmissionFileHandleLink
                submissionId={submission.id}
                fileHandleId={submission.irbFileHandleId}
              />
            </>
          )}
          {submission?.attachments && (
            <>
              <Typography variant="smallText2">Other Attachments</Typography>
              {submission.attachments.map(fileHandleId => (
                <>
                  <DataAccessSubmissionFileHandleLink
                    key={fileHandleId}
                    submissionId={submission.id}
                    fileHandleId={fileHandleId}
                  />
                  <br />
                </>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
