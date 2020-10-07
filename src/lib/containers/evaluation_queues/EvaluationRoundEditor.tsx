import {
  EvaluationRound,
  EvaluationRoundLimitType,
} from 'lib/utils/synapseTypes'
import React, { useEffect, useState } from 'react'
import { Col, Form, InputGroup } from 'react-bootstrap'
import 'react-datetime/css/react-datetime.css'
import { Moment } from 'moment'
import { CalendarWithIconInputGroup } from './CalendarWithIconInputGroup'

export type EvaluationRoundEditorProps = {
  evaluationRound: EvaluationRound
}

export const EvaluationRoundEditor: React.FunctionComponent<EvaluationRoundEditorProps> = ({
  evaluationRound,
}) => {
  //TODO: use UTC or local time?????
  const [startDate, setStartDate] = useState<string | Moment>(
    evaluationRound.roundStart,
  )
  const [endDate, setEndDate] = useState<string | Moment>(
    evaluationRound.roundEnd,
  )

  const [evaluationLimits, setEvaluationLimits] = useState<
    Partial<Record<EvaluationRoundLimitType, number>>
  >(
    (evaluationRound.limits || []).reduce((dict, evaluationLimit) => {
      dict[evaluationLimit.limitType] = evaluationLimit.maximumSubmissions
      return dict
    }, {}),
  )

  const [advancedMode, setAdvancedMode] = useState<boolean>(false)

  useEffect(() => {
    console.log(startDate)
    console.log(endDate)
  }, [startDate, endDate])

  function handleEvaluationLimitTypeChange(
    type: EvaluationRoundLimitType,
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    const newLimits = { ...evaluationLimits }
    const value = parseInt(event.target.value)
    newLimits[type] = isNaN(value) ? undefined : value
    setEvaluationLimits(newLimits)
  }

  function generateAdvancedLimits() {
    return Object.entries(evaluationLimits)
      .filter(([limitType]) => limitType !== 'TOTAL')
      .map(([limitType, maxSubmissionLimit]) => (
        <input key={limitType} value={maxSubmissionLimit} />
      ))
  }

  // https://react-bootstrap.github.io/components/forms/#forms-validation-native
  return (
    <div className="EvaluationRoundEditor bootstrap-4-backport">
      <Form>
        <h2>ROUND STATUS</h2>
        <h2>DURATION</h2>
        <Form.Row>
          <Col>
            <CalendarWithIconInputGroup
              value={startDate}
              setterCallback={setStartDate}
              label="Round Start"
              // todo: disabled should use start date
              disabled={true}
            />
          </Col>
          <Col>
            <CalendarWithIconInputGroup
              value={endDate}
              label="Round End"
              setterCallback={setEndDate}
              // todo: disabled should use start date
              disabled={true}
            />
          </Col>
        </Form.Row>

        <h2>SUBMISSION LIMITS</h2>
        <Form.Row>
          <Col>
            <label>Total Submissions / Round</label>
            <InputGroup>
              <input
                value={evaluationLimits['MONTHLY']}
                type="text"
                pattern="[0-9]*"
                onChange={event =>
                  handleEvaluationLimitTypeChange('MONTHLY', event)
                }
              />
            </InputGroup>
          </Col>
        </Form.Row>

        <a onClick={() => setAdvancedMode(!advancedMode)}>Advanced Limits</a>
        <div>{advancedMode && generateAdvancedLimits()}</div>
      </Form>
    </div>
  )
}
