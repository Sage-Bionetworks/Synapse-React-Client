import { EvaluationRound, EvaluationRoundLimit } from 'lib/utils/synapseTypes'
import React, { useState } from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import 'react-datetime/css/react-datetime.css'
import moment, { Moment } from 'moment'
import { CalendarWithIconInputGroup } from './CalendarWithIconInputGroup'
import { EvaluationRoundLimitInput } from './round_limits/EvaluationRoundLimitOptions'
import { EvaluationRoundLimitOptionsList } from './round_limits/EvaluationRoundLimitsList'

export type EvaluationRoundEditorProps = {
  evaluationRound: EvaluationRound
  onSave: (evaluationRound: EvaluationRound) => void
}

export const EvaluationRoundEditor: React.FunctionComponent<EvaluationRoundEditorProps> = ({
  evaluationRound,
  onSave,
}) => {
  //TODO: use UTC or local time?????
  const [startDate, setStartDate] = useState<string | Moment>(
    evaluationRound.roundStart,
  )
  const [endDate, setEndDate] = useState<string | Moment>(
    evaluationRound.roundEnd,
  )

  // Mapping of limit type to its maxSubmissionLimit (e.g. {TOTAL: 123, MONTHLY: 456} )
  const initialTotalLimit: string = (evaluationRound.limits || [])
    .filter(evaluationLimit => evaluationLimit.limitType === 'TOTAL')
    .reduce((ignorePrevValue, evaluationLimit) => {
      //after filtering there should exist at most one evaluationLimit
      return evaluationLimit.maximumSubmissions.toString()
    }, '')

  const [totalSubmissionLimit, setTotalSubmissionLimit] = useState<string>(
    initialTotalLimit,
  )

  const [advancedMode, setAdvancedMode] = useState<boolean>(false)

  const initialAdvancedLimits: EvaluationRoundLimitInput[] = (
    evaluationRound.limits || []
  )
    .filter(evaluationLimit => evaluationLimit.limitType !== 'TOTAL')
    .reduce<EvaluationRoundLimitInput[]>((limitInputList, evaluationLimit) => {
      limitInputList.push({
        type: evaluationLimit.limitType,
        maxSubmissionString: evaluationLimit.maximumSubmissions.toString(),
      })
      //after filtering there should exist at most one evaluationLimit
      return limitInputList
    }, [])

  const [advancedLimits, setAdvancedLimits] = useState<
    EvaluationRoundLimitInput[]
  >(initialAdvancedLimits)

  const convertInputsToEvaluationRound = (): EvaluationRound => {
    const limits: EvaluationRoundLimit[] = []
    if (totalSubmissionLimit) {
      limits.push({
        limitType: 'TOTAL',
        maximumSubmissions: parseInt(totalSubmissionLimit),
      })
    }
    advancedLimits.forEach(limitInput => {
      if (limitInput.maxSubmissionString) {
        limits.push({
          limitType: limitInput.type,
          maximumSubmissions: parseInt(limitInput.maxSubmissionString),
        })
      }
    })

    return {
      id: evaluationRound.id,
      etag: evaluationRound.etag,
      evaluationId: evaluationRound.evaluationId,
      roundStart: moment.utc(startDate).toJSON(),
      roundEnd: moment.utc(endDate).toJSON(),
      limits: limits,
    }
  }

  const handleSave = () => {
    try {
      const evaluationRound = convertInputsToEvaluationRound()
      onSave(evaluationRound)
    } catch (e) {
      //TODO: figure out what error types are thrown when saved
      //TODO: figure out error message display
      console.log(e)
    }
  }

  // https://react-bootstrap.github.io/components/forms/#forms-validation-native
  return (
    <div className="EvaluationRoundEditor bootstrap-4-backport">
      <Form>
        <h2>ROUND STATUS</h2>
        <h2>DURATION</h2>
        <Row>
          <Col>
            <CalendarWithIconInputGroup
              value={startDate}
              setterCallback={setStartDate}
              label="Round Start"
              // todo: disabled should use start date
            />
          </Col>
          <Col>
            <CalendarWithIconInputGroup
              value={endDate}
              label="Round End"
              setterCallback={setEndDate}
              // todo: disabled should use start date
            />
          </Col>
        </Row>

        <h2>SUBMISSION LIMITS</h2>
        <Row>
          <label>Total Submissions / Round</label>
          <InputGroup>
            <input
              value={totalSubmissionLimit}
              type="text"
              pattern="[0-9]*"
              onChange={event => setTotalSubmissionLimit(event.target.value)}
            />
          </InputGroup>
        </Row>

        <a onClick={() => setAdvancedMode(!advancedMode)}>Advanced Limits</a>
        {advancedMode && (
          <EvaluationRoundLimitOptionsList
            limitInputs={advancedLimits}
            onChange={setAdvancedLimits}
          />
        )}
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Form>
    </div>
  )
}
