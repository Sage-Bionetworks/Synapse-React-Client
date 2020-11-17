import { Button, Form } from 'react-bootstrap'
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

export type EvaluationEditorProps = {
  readonly evaluationId: string
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

  if (error) {
    return <Error error={error} token={sessionToken} />
  }

  return (
    <div className="bootstrap-4-backport">
      <Form className="evaluation-editor">
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
            readOnly={true}
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
            onChange={event => setSubmissionReceiptMessage(event.target.value)}
          />
        </Form.Group>
        <div>
          <span>Created on 4/4/20 By </span>
          <UserCard
            size={SynapseConstants.SMALL_USER_CARD}
            ownerId="3345868"
            extraSmall={true}
          />
        </div>
        <div>
          <Button className="float-right" onClick={onSave}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  )
}
