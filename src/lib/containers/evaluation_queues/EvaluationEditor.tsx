import { Button, Col, Dropdown, Form, Row } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { capitalize } from 'lodash-es'
import {
  createEvaluation,
  deleteEvaluation,
  getEvaluation,
  SynapseClientError,
  updateEvaluation,
} from '../../utils/SynapseClient'
import { ErrorBanner } from '../ErrorBanner'
import {
  Evaluation,
  EvaluationStatus,
} from '../../utils/synapseTypes/Evaluation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { CreatedOnByUserDiv } from './CreatedOnByUserDiv'

const defaultEvaluationStatus = EvaluationStatus.PLANNED

export type EvaluationEditorProps = {
  /** session token to make authenticated API calls */
  readonly sessionToken: string
  /** Use if UPDATING an existing Evaluation. Id of the evaluation to edit */
  readonly evaluationId?: string
  /** Use if CREATING a new Evaluation. Id of the Entity that will be associated with the Evaluation */
  readonly entityId?: string
  /** If true, the "Created on" date will be displayed in UTC time */
  readonly utc: boolean
}

/**
 * Edits basic properties of an Evaluation
 */
export const EvaluationEditor: React.FunctionComponent<EvaluationEditorProps> = ({
  sessionToken,
  evaluationId,
  entityId,
  utc,
}: EvaluationEditorProps) => {
  if (evaluationId && entityId) {
    throw new Error('please use either evaluationId or entityId but not both')
  }

  const [error, setError] = useState<SynapseClientError>()

  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [
    submissionInstructionsMessage,
    setSubmissionInstructionsMessage,
  ] = useState<string>('')
  const [submissionReceiptMessage, setSubmissionReceiptMessage] = useState<
    string
  >('')
  const [status, setStatus] = useState<EvaluationStatus>(
    defaultEvaluationStatus,
  )

  const [evaluation, setEvaluation] = useState<Evaluation>({
    contentSource: entityId,
  })

  useEffect(() => {
    setName(evaluation.name ?? '')
    setDescription(evaluation.description ?? '')
    setSubmissionInstructionsMessage(
      evaluation.submissionInstructionsMessage ?? '',
    )
    setSubmissionReceiptMessage(evaluation.submissionReceiptMessage ?? '')
    setStatus(evaluation.status ?? defaultEvaluationStatus)
  }, [evaluation])

  useEffect(() => {
    // if we initially passed in a update the we retrieve a new Evaluation
    if (evaluationId) {
      //clear error
      setError(undefined)
      getEvaluation(evaluationId, sessionToken)
        .then(retrievedEvaluation => {
          setEvaluation(retrievedEvaluation)
        })
        .catch(error => setError(error))
    }
  }, [evaluationId, sessionToken])

  const onSave = () => {
    // clear out error
    setError(undefined)
    const newOrUpdatedEvaluation: Evaluation = {
      ...evaluation,
      name,
      description,
      submissionInstructionsMessage,
      submissionReceiptMessage,
      status,
    }

    const promise = newOrUpdatedEvaluation.id
      ? updateEvaluation(newOrUpdatedEvaluation, sessionToken)
      : createEvaluation(newOrUpdatedEvaluation, sessionToken)

    promise
      .then(evaluation => setEvaluation(evaluation))
      .catch(error => setError(error))
  }

  // create delete callback if the evaluation has id
  const onDelete = evaluation?.id
    ? () => {
        setError(undefined)
        deleteEvaluation(evaluation.id!, sessionToken)
          .then(() =>
            setEvaluation({
              contentSource: evaluation.contentSource,
            }),
          )
          .catch(setError)
      }
    : undefined

  return (
    <div className="bootstrap-4-backport">
      <div className="evaluation-editor">
        <Row>
          <Col>
            <h4>{evaluation.id ? 'Edit' : 'Create'} Evaluation Queue</h4>
          </Col>
          <Col>
            <Dropdown className="float-right">
              <Dropdown.Toggle
                variant="link"
                className="dropdown-no-caret evaluation-round-editor-dropdown"
              >
                <FontAwesomeIcon icon={faEllipsisV} />
              </Dropdown.Toggle>
              <Dropdown.Menu alignRight={true}>
                <Dropdown.Item onClick={onSave}>Save</Dropdown.Item>
                <Dropdown.Item
                  onClick={onDelete}
                  disabled={onDelete === undefined}
                >
                  Delete
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              custom
              value={status}
              onChange={event =>
                setStatus(event.target.value as EvaluationStatus)
              }
            >
              {Object.keys(EvaluationStatus).map(key => {
                return (
                  <option key={key} value={key}>
                    {capitalize(key)}
                  </option>
                )
              })}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              value={description}
              rows={2}
              onChange={event => setDescription(event.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Submission Instructions</Form.Label>
            <Form.Control
              as="textarea"
              value={submissionInstructionsMessage}
              rows={2}
              onChange={event =>
                setSubmissionInstructionsMessage(event.target.value)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Submission Receipt Message</Form.Label>
            <Form.Control
              type="text"
              value={submissionReceiptMessage}
              onChange={event =>
                setSubmissionReceiptMessage(event.target.value)
              }
            />
          </Form.Group>
          {evaluation?.createdOn && (
            <CreatedOnByUserDiv
              userId={evaluation.ownerId!}
              date={new Date(evaluation.createdOn)}
              sessionToken={sessionToken}
              utc={utc}
            />
          )}
          {error && <ErrorBanner error={error} token={sessionToken} />}
          <div>
            <Button className="float-right save-button" onClick={onSave}>
              Save
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
