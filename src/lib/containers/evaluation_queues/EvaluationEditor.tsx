import { Alert, Button, Col, Dropdown, Form, Row } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import {
  createEvaluation,
  deleteEvaluation,
  getEvaluation,
  SynapseClientError,
  updateEvaluation,
} from '../../utils/SynapseClient'
import { ErrorBanner } from '../ErrorBanner'
import { Evaluation } from '../../utils/synapseTypes/Evaluation/Evaluation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { CreatedOnByUserDiv } from './CreatedOnByUserDiv'
import WarningModal from '../synapse_form_wrapper/WarningModal'

export type EvaluationEditorProps = {
  /** Use if UPDATING an existing Evaluation. Id of the evaluation to edit */
  readonly evaluationId?: string
  /** Use if CREATING a new Evaluation. Id of the Entity that will be associated with the Evaluation */
  readonly entityId?: string
  /** If true, the "Created on" date will be displayed in UTC time */
  readonly utc: boolean
  /** Callback after successful deletion of the Evaluation */
  readonly onDeleteSuccess: () => void
  /** Callback after successful save of the Evaluation */
  readonly onSaveSuccess?: (evaluationId: string) => void
}

/**
 * Edits basic properties of an Evaluation
 */
export const EvaluationEditor: React.FunctionComponent<EvaluationEditorProps> = ({
  evaluationId,
  entityId,
  utc,
  onDeleteSuccess,
  onSaveSuccess,
}: EvaluationEditorProps) => {
  if (evaluationId && entityId) {
    throw new Error('please use either evaluationId or entityId but not both')
  }

  const [error, setError] = useState<SynapseClientError>()
  const [showSaveSuccess, setShowSaveSuccess] = useState<boolean>(false)

  useEffect(() => {
    if (error) {
      setShowSaveSuccess(false)
    }
  }, [error])

  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [
    submissionInstructionsMessage,
    setSubmissionInstructionsMessage,
  ] = useState<string>('')
  const [
    submissionReceiptMessage,
    setSubmissionReceiptMessage,
  ] = useState<string>('')

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
  }, [evaluation])

  useEffect(() => {
    // if we initially passed in a update the we retrieve a new Evaluation
    if (evaluationId) {
      //clear error
      setError(undefined)
      getEvaluation(evaluationId)
        .then(retrievedEvaluation => {
          setEvaluation(retrievedEvaluation)
        })
        .catch(error => setError(error))
    }
  }, [evaluationId])

  const onSave = () => {
    // clear out error
    setError(undefined)
    setShowSaveSuccess(false)
    const newOrUpdatedEvaluation: Evaluation = {
      ...evaluation,
      name,
      description,
      submissionInstructionsMessage,
      submissionReceiptMessage,
    }

    const promise = newOrUpdatedEvaluation.id
      ? updateEvaluation(newOrUpdatedEvaluation)
      : createEvaluation(newOrUpdatedEvaluation)

    promise
      .then(evaluation => {
        setEvaluation(evaluation)
        setShowSaveSuccess(true)
        if (onSaveSuccess) {
          onSaveSuccess(evaluation.id!)
        }
      })
      .catch(error => setError(error))
  }

  // create delete callback if the evaluation has id
  const onDelete = evaluation?.id
    ? () => {
        setError(undefined)
        deleteEvaluation(evaluation.id!)
          .then(onDeleteSuccess)
          .catch(error => setError(error))
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
            <EvaluationEditorDropdown onClick={onSave} onDelete={onDelete} />
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
              utc={utc}
            />
          )}
          {error && <ErrorBanner error={error}/>}
          {showSaveSuccess && (
            <Alert
              className="save-success-alert"
              dismissible={true}
              variant="success"
              transition={false}
              onClose={() => setShowSaveSuccess(false)}
            >
              Successfully saved.
            </Alert>
          )}
          <div className="d-flex justify-content-end">
            <Button className="save-button" onClick={onSave}>
              Save
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

type EvaluationEditorDropdownProps = {
  onClick: () => void
  onDelete?: () => void
}

const EvaluationEditorDropdown: React.FunctionComponent<EvaluationEditorDropdownProps> = ({
  onClick,
  onDelete,
}) => {
  const [deleteWarningShow, setDeleteWarningShow] = useState<boolean>(false)

  return (
    <>
      {onDelete && (
        <WarningModal
          title="Delete Evaluation Queue"
          modalBody="Are you sure you want to delete this Evaluation Queue?"
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
          <Dropdown.Item onClick={onClick}>Save</Dropdown.Item>
          {onDelete && (
            <>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => setDeleteWarningShow(true)}>
                Delete
              </Dropdown.Item>
            </>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}
