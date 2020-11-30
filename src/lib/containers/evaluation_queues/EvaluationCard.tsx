import React, { useEffect, useState } from 'react'
import {
  getEvaluation,
  getEvaluationPermissions,
  SynapseClientError,
} from '../../utils/SynapseClient'
import { capitalize } from 'lodash-es'
import { Evaluation } from '../../utils/synapseTypes/Evaluation'
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap'
import { ErrorBanner } from '../ErrorBanner'
import { CreatedOnByUserDiv } from './CreatedOnByUserDiv'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { UserEvaluationPermissions } from '../../utils/synapseTypes/Evaluation/UserEvaluationPermissions'

export type EvaluationCardProps = {
  /** id of the Evaluation to edit*/
  evaluationId: string
  /** session token to make authenticated API calls */
  sessionToken: string
  /** If true, dates for start/end are displayed in UTC instead of local time*/
  utc: boolean
  /** Callback when the Edit option in the dropdown is clicked*/
  onEdit: () => void
  /** Callback when the Modify Access option in the dropdown is clicked*/
  onModifyAccess: () => void
  /** Callback when the Delete option in the dropdown is clicked*/
  onDelete: () => void
  /** Callback when the Submit button is clicked*/
  onSubmit: () => void
}

/**
 * This component is currently only intended to be used in Synapse.org.
 * For this reason, the dropdown menu items are unimplemented as no components
 * in this project implement their behavior. The dropdown options are also
 * disabled if the current user does not have permissions for the action
 */
export const EvaluationCard: React.FunctionComponent<EvaluationCardProps> = ({
  evaluationId,
  sessionToken,
  utc,
  onEdit,
  onModifyAccess,
  onDelete,
  onSubmit,
}: EvaluationCardProps) => {
  const [error, setError] = useState<SynapseClientError>()
  const [evaluation, setEvaluation] = useState<Evaluation>()
  const [permissions, setPermissions] = useState<UserEvaluationPermissions>()

  useEffect(() => {
    getEvaluation(evaluationId!, sessionToken)
      .then(retrievedEvaluation => {
        //clear error
        setError(undefined)
        setEvaluation(retrievedEvaluation)
      })
      .catch(error => setError(error))
  }, [evaluationId, sessionToken])

  useEffect(() => {
    //clear error
    setError(undefined)
    getEvaluationPermissions(evaluationId!, sessionToken)
      .then(retrievedPermissions => {
        //clear error
        setError(undefined)
        setPermissions(retrievedPermissions)
      })
      .catch(error => setError(error))
  }, [evaluationId, sessionToken])

  return (
    <div className="bootstrap-4-backport evaluation-card">
      <Card>
        <Card.Body>
          {error && <ErrorBanner error={error} />}

          {evaluation && (
            <>
              <Row>
                <Col>
                  <label>CHALLENGE QUEUE</label>
                </Col>
                <Col>
                  <Dropdown className="float-right">
                    <Dropdown.Toggle
                      variant="link"
                      className="dropdown-no-caret"
                    >
                      <FontAwesomeIcon icon={faEllipsisV} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu alignRight={true}>
                      <Dropdown.Item
                        onClick={onEdit}
                        disabled={!permissions?.canEdit}
                      >
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={onModifyAccess}
                        disabled={!permissions?.canChangePermissions}
                      >
                        Modify Access
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        onClick={onDelete}
                        disabled={!permissions?.canDelete}
                      >
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>

              <h4>{evaluation.name}</h4>

              <label>Status</label>
              <p>{capitalize(evaluation.status)}</p>
              <label>Description</label>
              <p>{evaluation.description}</p>
              <label>Instructions</label>
              <p>{evaluation.submissionInstructionsMessage}</p>
              <CreatedOnByUserDiv
                userId={evaluation.ownerId!}
                date={new Date(evaluation.createdOn!)}
                sessionToken={sessionToken}
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
