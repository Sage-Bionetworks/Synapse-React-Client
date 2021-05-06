import React, { useEffect, useState } from 'react'
import {
  deleteEvaluation,
  getEvaluationPermissions,
  SynapseClientError,
} from '../../utils/SynapseClient'
import { Evaluation } from '../../utils/synapseTypes'
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { ErrorBanner } from '../ErrorBanner'
import { CreatedOnByUserDiv } from './CreatedOnByUserDiv'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UserEvaluationPermissions } from '../../utils/synapseTypes/Evaluation/UserEvaluationPermissions'
import { RequiredProperties } from '../../utils'
import WarningModal from '../synapse_form_wrapper/WarningModal'

export type ExistingEvaluation = RequiredProperties<
  Evaluation,
  'id' | 'etag' | 'createdOn' | 'contentSource' | 'ownerId'
>

export type EvaluationCardProps = {
  /** properties of the Evaluation to show*/
  evaluation: ExistingEvaluation
  /** access token to make authenticated API calls */
  accessToken: string
  /** If true, dates for start/end are displayed in UTC instead of local time*/
  utc: boolean
  /** Callback when the Edit option in the dropdown is clicked*/
  onEdit: () => void
  /** Callback when the Modify Access option in the dropdown is clicked*/
  onModifyAccess: () => void
  /** Callback when the Submit button is clicked*/
  onSubmit: () => void
  /** Callback when the Delete option is successful */
  onDeleteSuccess: () => void
}

/**
 * This component is currently only intended to be used in Synapse.org.
 * For this reason, the dropdown menu items are unimplemented as no components
 * in this project implement their behavior. The dropdown options are also
 * not shown if the current user does not have permissions for the action
 *
 * All Evaluation metadata must be provided to this component; it will not
 * retrieve an Evaluation via a REST API call
 */
export const EvaluationCard: React.FunctionComponent<EvaluationCardProps> = ({
  evaluation,
  accessToken,
  utc,
  onEdit,
  onModifyAccess,
  onSubmit,
  onDeleteSuccess,
}: EvaluationCardProps) => {
  const [error, setError] = useState<SynapseClientError>()
  const [permissions, setPermissions] = useState<UserEvaluationPermissions>()

  useEffect(() => {
    //clear error
    setError(undefined)

    getEvaluationPermissions(evaluation.id, accessToken)
      .then(retrievedPermissions => {
        setPermissions(retrievedPermissions)
      })
      .catch(error => setError(error))
  }, [evaluation, accessToken])

  const onDelete = () => {
    setError(undefined)
    deleteEvaluation(evaluation.id, accessToken)
      .then(onDeleteSuccess)
      .catch(setError)
  }

  return (
    <div className="bootstrap-4-backport evaluation-card">
      <Card>
        <Card.Body>
          {error && <ErrorBanner error={error} />}

          {permissions && (
            <>
              <Row>
                <Col>
                  <label>EVALUATION QUEUE</label>
                </Col>
                <Col>
                  <EvaluationCardDropdown
                    permissions={permissions}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    onModifyAccess={onModifyAccess}
                  />
                </Col>
              </Row>

              <h4>
                {evaluation.name} ({evaluation.id})
              </h4>

              <label>Description</label>
              <p>{evaluation.description}</p>
              <label>Instructions</label>
              <p>{evaluation.submissionInstructionsMessage}</p>
              <CreatedOnByUserDiv
                userId={evaluation.ownerId}
                date={new Date(evaluation.createdOn)}
                accessToken={accessToken}
                utc={utc}
              />
              {permissions?.canSubmit && (
                <Button
                  className="submit-button"
                  type="primary"
                  onClick={onSubmit}
                >
                  Submit
                </Button>
              )}
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  )
}

type EvaluationCardDropdownProps = {
  permissions: UserEvaluationPermissions
  onEdit: () => void
  onModifyAccess: () => void
  onDelete: () => void
}

const EvaluationCardDropdown: React.FunctionComponent<EvaluationCardDropdownProps> = ({
  permissions,
  onEdit,
  onModifyAccess,
  onDelete,
}) => {
  const [deleteWarningShow, setDeleteWarningShow] = useState<boolean>(false)

  if (
    !(
      permissions.canEdit ||
      permissions.canChangePermissions ||
      permissions.canDelete
    )
  ) {
    return null
  }
  return (
    <>
      {permissions?.canDelete && (
        <WarningModal
          title="Delete Evaluation Queue"
          modalBody="Are you sure you want to delete the Evaluation Queue?"
          show={deleteWarningShow}
          confirmButtonText="Delete"
          onConfirm={() => {
            onDelete()
            setDeleteWarningShow(false)
          }}
          onConfirmCallbackArgs={[]}
          onCancel={() => {
            setDeleteWarningShow(false)
          }}
          confirmButtonVariant="danger"
        />
      )}
      <Dropdown className="float-right">
        <Dropdown.Toggle variant="link" className="dropdown-no-caret">
          <FontAwesomeIcon icon={faEllipsisV} />
        </Dropdown.Toggle>
        <Dropdown.Menu alignRight={true}>
          {permissions.canEdit && (
            <Dropdown.Item onClick={onEdit}>Edit</Dropdown.Item>
          )}
          {permissions.canChangePermissions && (
            <Dropdown.Item onClick={onModifyAccess}>
              Modify Access
            </Dropdown.Item>
          )}
          {permissions.canDelete && (
            <>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => setDeleteWarningShow(true)}>
                Delete
              </Dropdown.Item>{' '}
            </>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}
