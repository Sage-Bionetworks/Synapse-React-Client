import { Button, Col, Dropdown, Form, Row } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import UserCard from '../UserCard'
import { SynapseConstants } from '../../index'
import {
  createEvaluation,
  getEvaluation,
  SynapseClientError,
  updateEvaluation,
} from '../../utils/SynapseClient'
import { Error } from '../Error'
import { Evaluation } from '../../utils/synapseTypes/Evaluation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

export type EvaluationEditorProps = {
  // id of the evaluation to edit
  readonly evaluationId: string
  // session token to make authenticated calls
  readonly sessionToken: string
}

export const EvaluationEditor: React.FunctionComponent<EvaluationEditorProps> = ({
  evaluationId,
  sessionToken,
}) => {
  const [error, setError] = useState<SynapseClientError>()

  const [name, setName] = useState<string>()
  const [description, setDescription] = useState<string>()
  const [
    submissionInstructionsMessage,
    setSubmissionInstructionsMessage,
  ] = useState<string>()
  const [submissionReceiptMessage, setSubmissionReceiptMessage] = useState<
    string
  >()

  const [evaluation, setEvaluation] = useState<Evaluation>()
  useEffect(() => {
    setName(evaluation?.name)
    setDescription(evaluation?.description)
    setSubmissionInstructionsMessage(evaluation?.submissionInstructionsMessage)
    setSubmissionReceiptMessage(evaluation?.submissionReceiptMessage)
  }, [evaluation])

  useEffect(() => {
    //clear error
    setError(undefined)
    getEvaluation(evaluationId, sessionToken)
      .then(retrievedEvaluation => {
        setEvaluation(retrievedEvaluation)
      })
      .catch(error => setError(error))
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
    }
    const promise = newOrUpdatedEvaluation.id
      ? updateEvaluation(newOrUpdatedEvaluation, sessionToken)
      : createEvaluation(newOrUpdatedEvaluation, sessionToken)

    promise
      .then(evaluation => setEvaluation(evaluation))
      .catch(error => setError(error))
  }

  //TODO: implement
  const onDelete = () => {}

  return (
    <div className="bootstrap-4-backport">
      <div className="evaluation-editor">
        <Row>
          <Col>
            <h4>Edit Evaluation Queue</h4>
          </Col>
          <Col>
            <Dropdown className="float-right">
              <Dropdown.Toggle
                variant="link"
                className="dropdown-no-caret SRC-primary-text-color evaluation-round-editor-dropdown"
              >
                <FontAwesomeIcon icon={faEllipsisV} />
              </Dropdown.Toggle>
              <Dropdown.Menu alignRight={true}>
                <Dropdown.Item onClick={onSave}>Save</Dropdown.Item>
                <Dropdown.Item onClick={onDelete}>Delete</Dropdown.Item>
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
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={event => setDescription(event.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Submission Instructions</Form.Label>
            <Form.Control
              type="text"
              value={submissionInstructionsMessage}
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
          {evaluation && (
            <div>
              <span>Created on 4/4/20 By </span>
              <UserCard
                size={SynapseConstants.SMALL_USER_CARD}
                ownerId={evaluation.ownerId}
                extraSmall={true}
              />
            </div>
          )}
          {error && <Error error={error} token={sessionToken} />}
          <div>
            <Button className="float-right" onClick={onSave}>
              Save
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
