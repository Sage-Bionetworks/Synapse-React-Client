import { EvaluationRound, EvaluationRoundLimit } from 'lib/utils/synapseTypes'
import React, { useState } from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import 'react-datetime/css/react-datetime.css'
import moment, { Moment } from 'moment'
import { CalendarWithIconInputGroup } from './CalendarWithIconInputGroup'
import { EvaluationRoundLimitInput } from './round_limits/EvaluationRoundLimitOptions'
import { EvaluationRoundLimitOptionsList } from './round_limits/EvaluationRoundLimitsList'
import { faSyncAlt, faClipboardCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useListState } from '../../utils/hooks/useListState'

export type EvaluationRoundEditorProps = {
  evaluationRound: EvaluationRound
  //If true, dates for start/end are displayed in UTC instead of local time
  utc: boolean
  onDelete: () => void
  onSave: (evaluationRound: EvaluationRound) => void
}

const convertToRoundToInput = (
  evaluationRoundLimits?: EvaluationRoundLimit[],
): EvaluationRoundLimitInput[] => {
  return (evaluationRoundLimits || [])
    .filter(evaluationLimit => evaluationLimit.limitType !== 'TOTAL')
    .reduce<EvaluationRoundLimitInput[]>((limitInputList, evaluationLimit) => {
      limitInputList.push({
        type: evaluationLimit.limitType,
        maxSubmissionString: evaluationLimit.maximumSubmissions.toString(),
      })
      //after filtering there should exist at most one evaluationLimit
      return limitInputList
    }, [])
}

export const EvaluationRoundEditor: React.FunctionComponent<EvaluationRoundEditorProps> = ({
  evaluationRound,
  onSave,
  utc,
}) => {
  const [startDate, setStartDate] = useState<string | Moment>(
    moment(evaluationRound.roundStart),
  )
  const [endDate, setEndDate] = useState<string | Moment>(
    moment(evaluationRound.roundEnd),
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

  const initialAdvancedLimits: EvaluationRoundLimitInput[] = convertToRoundToInput(
    evaluationRound.limits,
  )
  const {
    list: advancedLimits,
    handleListRemove: handleAdvancedLimitsRemove,
    handleListChange: handleAdvancedLimitsChange,
    appendToList: addAdvancedLimit,
  } = useListState<EvaluationRoundLimitInput>(initialAdvancedLimits)

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

  const determineRoundStatus = () => {
    const now = moment()
    if (now.isSameOrAfter(startDate)) {
      if (now.isBefore(endDate)) {
        return (
          <div className="in-progress">
            <FontAwesomeIcon icon={faSyncAlt} /> <span>IN PROGRESS</span>
          </div>
        )
      } else {
        return (
          <div className="completed">
            <FontAwesomeIcon icon={faClipboardCheck} /> <span>COMPLETED</span>
          </div>
        )
      }
    } else {
      return (
        <div className="not-yet-started">
          <span>NOT YET STARTED</span>{' '}
        </div>
      )
    }
  }

  // https://react-bootstrap.github.io/components/forms/#forms-validation-native
  return (
    <div className="EvaluationRoundEditor bootstrap-4-backport">
      <Form>
        <h2>ROUND STATUS</h2>
        <div className="round-status">{determineRoundStatus()}</div>
        <h2>DURATION</h2>
        <Row>
          <Col xs="auto">
            <CalendarWithIconInputGroup
              value={startDate}
              setterCallback={setStartDate}
              label="Round Start"
              utc={utc}
              // todo: disabled should use start date
            />
          </Col>
          <Col xs="auto">
            <CalendarWithIconInputGroup
              value={endDate}
              label="Round End"
              setterCallback={setEndDate}
              utc={utc}
              // todo: disabled should use start date
            />
          </Col>
        </Row>

        <h2>SUBMISSION LIMITS</h2>
        <Row>
          <Col>
            <label>Total Submissions / Round</label>
            <InputGroup>
              <input
                value={totalSubmissionLimit}
                type="text"
                pattern="[0-9]*"
                onChange={event => setTotalSubmissionLimit(event.target.value)}
              />
            </InputGroup>
          </Col>
        </Row>

        <a onClick={() => setAdvancedMode(!advancedMode)}>Advanced Limits</a>
        {advancedMode && (
          <EvaluationRoundLimitOptionsList
            limitInputs={advancedLimits}
            handleChange={handleAdvancedLimitsChange}
            handleDeleteLimit={handleAdvancedLimitsRemove}
            onAddNewLimit={addAdvancedLimit}
          />
        )}
        <Row>
          <Col xs={1}>
            <Button
              className="float-right"
              variant="primary"
              onClick={handleSave}
            >
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}
