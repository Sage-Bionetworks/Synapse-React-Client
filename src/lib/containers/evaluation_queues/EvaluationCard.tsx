import { useEffect, useState } from 'react'
import { getEvaluation, SynapseClientError } from '../../utils/SynapseClient'
import { Evaluation } from '../../utils/synapseTypes/Evaluation'
import { Button, Card } from 'react-bootstrap'
import React from 'react'
import { Error } from '../Error'
import { CreatedOnByUserDiv } from './CreatedOnByUserDiv'

export type EvaluationCardProps = {
  evaluationId: string
  sessionToken: string
  utc?: boolean
}

export const EvaluationCard: React.FunctionComponent<EvaluationCardProps> = ({
  evaluationId,
  sessionToken,
  utc,
}) => {
  const [error, setError] = useState<SynapseClientError>()
  const [evaluation, setEvaluation] = useState<Evaluation>()

  useEffect(() => {
    //clear error
    setError(undefined)
    getEvaluation(evaluationId!, sessionToken)
      .then(retrievedEvaluation => {
        setEvaluation(retrievedEvaluation)
      })
      .catch(error => setError(error))
  }, [evaluationId, sessionToken])

  console.log(evaluation?.ownerId)
  return (
    <div className="bootstrap-4-backport evaluation-card">
      <Card>
        <Card.Body>
          {error && <Error error={error} />}

          {evaluation && (
            <>
              <label>CHALLENGE QUEUE</label>
              <h4>{evaluation?.name}</h4>
              <label>Description</label>
              <p>{evaluation?.description}</p>
              <label>Instructions</label>
              <p>{evaluation?.submissionInstructionsMessage}</p>
              <CreatedOnByUserDiv
                userId={evaluation?.ownerId!}
                date={new Date(evaluation?.createdOn!)}
                sessionToken={sessionToken}
                utc={utc ?? false}
              />
              <Button className="submit-button" type="primary">
                Submit
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  )
}
