import { Skeleton } from '@material-ui/lab'
import moment from 'moment'
import React from 'react'
import { Button } from 'react-bootstrap'
import { formatDate } from '../../utils/functions/DateFormatter'
import useGetAccessRequirement, {
  useGetAccessRequirementACL,
  useGetAccessRequirementWikiPageKey,
} from '../../utils/hooks/SynapseAPI/useGetAccessRequirement'
import { useTheme } from '../../utils/hooks/useTheme'
import { ACT_TEAM_ID } from '../../utils/SynapseConstants'
import {
  FileHandleAssociateType,
  ManagedACTAccessRequirement,
} from '../../utils/synapseTypes'
import { Submission } from '../../utils/synapseTypes/AccessRequirement/Submission'
import Typography from '../../utils/typography/Typography'
import IconSvg from '../IconSvg'
import MarkdownSynapse from '../MarkdownSynapse'
import UserCard from '../UserCard'
import UserOrTeamBadge from '../UserOrTeamBadge'
import { FileHandleLink } from '../widgets/FileHandleLink'

type SubmissionPageProps = {
  submission: Submission
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

/**
 * Page for a Data Access Submission that a designated reviewer can view, and choose to approve or reject.
 */
export default function SubmissionPage(props: SubmissionPageProps) {
  const { submission } = props

  const theme = useTheme()

  const { data: accessRequirement } =
    useGetAccessRequirement<ManagedACTAccessRequirement>(
      parseInt(submission.accessRequirementId),
    )

  const { data: acl } = useGetAccessRequirementACL(
    submission.accessRequirementId,
  )
  const { data: wikiPageKey } = useGetAccessRequirementWikiPageKey(
    submission.accessRequirementId,
  )

  const dataTitleStyle: React.CSSProperties = {
    color: '#878e95',
    textTransform: 'uppercase',
  }

  return (
    <div className="SubmissionPage">
      <div className="SubmissionSummary">
        <Typography variant="smallText1" style={dataTitleStyle}>
          Status
        </Typography>
        <Typography variant="headline3">{submission.state}</Typography>
        <br />
        {submission.state === 'SUBMITTED' && (
          <div
            className="bootstrap-4-backport"
            style={{ display: 'flex', gap: '10px' }}
          >
            <Button style={{ flexGrow: 1, flexBasis: 0 }} variant="success">
              Approve
            </Button>
            <Button style={{ flexGrow: 1, flexBasis: 0 }} variant="danger">
              Reject
            </Button>
          </div>
        )}
        <Typography variant="smallText1" style={dataTitleStyle}>
          Access Requirement Name
        </Typography>
        <Typography variant="smallText1">
          {accessRequirement?.name ?? <Skeleton width={150} />}
        </Typography>
        <br />
        <Typography variant="smallText1" style={dataTitleStyle}>
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
            <Skeleton width={150} />
          )}
        </Typography>
        <br />
        <Typography variant="smallText1" style={dataTitleStyle}>
          Conditions
        </Typography>
        {accessRequirement ? (
          <Typography variant="smallText1">
            <ul>
              <li>
                Expiration period: {accessRequirement.expirationPeriod} days
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
          <Skeleton width={150} />
        )}
        <br />
        <div className="SubmissionSummaryGrid">
          <Typography variant="smallText1" style={dataTitleStyle}>
            Submitted By
          </Typography>
          <Typography variant="smallText1">
            <UserCard
              size={'SMALL USER CARD'}
              ownerId={submission.submittedBy}
            />
          </Typography>
          <Typography variant="smallText1" style={dataTitleStyle}>
            Submitted On
          </Typography>
          <Typography variant="smallText1">
            {submission.modifiedOn === submission.submittedOn
              ? 'Not yet reviewed'
              : formatDate(moment(submission.submittedOn))}
          </Typography>
          {/* <Typography variant="smallText1">Reviewed By</Typography>
      <Typography variant="smallText1">
        {submission.modifiedBy === submission.submittedBy ? (
          'Not yet reviewed'
        ) : (
          <UserCard size={'SMALL USER CARD'} ownerId={submission.modifiedBy} />
        )}
      </Typography>
      <br />
      <Typography variant="smallText1">Reviewed On</Typography>
      <Typography variant="smallText1">
        {submission.modifiedOn === submission.submittedOn
          ? 'Not yet reviewed'
          : formatDate(moment(submission.modifiedOn))}
      </Typography> */}
          <Typography variant="smallText1" style={dataTitleStyle}>
            Accessors
          </Typography>
          <Typography variant="smallText1">
            {submission.accessorChanges.map(accessorChange => (
              <>
                <span style={{ whiteSpace: 'nowrap' }}>
                  {accessorChange.type === 'GAIN_ACCESS' && (
                    <IconSvg
                      icon="addCircleOutline"
                      options={{
                        color: theme.colors.success,
                        padding: 'right',
                        label: 'Gain Access',
                      }}
                    />
                  )}
                  {accessorChange.type === 'RENEW_ACCESS' && (
                    <IconSvg
                      icon="renew"
                      options={{
                        color: theme.colors.success,
                        padding: 'right',
                        label: 'Renew Access',
                      }}
                    />
                  )}
                  {accessorChange.type === 'REVOKE_ACCESS' && (
                    <IconSvg
                      icon="removeCircle"
                      options={{
                        color: theme.colors.error,
                        padding: 'right',
                        label: 'Revoke Access',
                      }}
                    />
                  )}
                  <UserCard
                    key={accessorChange.userId}
                    size="SMALL USER CARD"
                    ownerId={accessorChange.userId}
                  />
                </span>
                <br />
              </>
            ))}
          </Typography>
          <Typography variant="smallText1" style={dataTitleStyle}>
            Institution
          </Typography>
          <Typography variant="smallText1">
            {submission.researchProjectSnapshot.institution}
          </Typography>
          <Typography variant="smallText1" style={dataTitleStyle}>
            Project Lead
          </Typography>
          <Typography variant="smallText1">
            {submission.researchProjectSnapshot.projectLead}
          </Typography>
        </div>
      </div>
      <div style={{ flexGrow: 1 }}>
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
          {submission.rejectedReason && (
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
          <Typography variant="headline2">
            Intended Data Use Statement
          </Typography>
          <Typography variant="body1">
            {submission.researchProjectSnapshot.intendedDataUseStatement}
          </Typography>
          <Typography variant="headline2">Documents</Typography>
          {submission.ducFileHandleId && (
            <>
              <Typography variant="smallText1" style={{ fontWeight: 'bold' }}>
                Data User Certificate (DUC)
              </Typography>
              <DataAccessSubmissionFileHandleLink
                submissionId={submission.id}
                fileHandleId={submission.ducFileHandleId}
              />
            </>
          )}
          {submission.irbFileHandleId && (
            <>
              <Typography variant="smallText1" style={{ fontWeight: 'bold' }}>
                IRB Approval Letter
              </Typography>
              <DataAccessSubmissionFileHandleLink
                submissionId={submission.id}
                fileHandleId={submission.irbFileHandleId}
              />
            </>
          )}
          {submission.attachments && (
            <>
              <Typography variant="smallText1" style={{ fontWeight: 'bold' }}>
                Other Attachments
              </Typography>
              {submission.attachments.map(fileHandleId => (
                <DataAccessSubmissionFileHandleLink
                  key={fileHandleId}
                  submissionId={submission.id}
                  fileHandleId={fileHandleId}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
