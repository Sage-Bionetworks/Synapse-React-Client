import { EvaluationRound, EvaluationRoundLimit } from 'lib/utils/synapseTypes'
import React, { useState } from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import 'react-datetime/css/react-datetime.css'
import moment, { Moment } from 'moment'
import { CalendarWithIconInputGroup } from './CalendarWithIconInputGroup'
import { EvaluationRoundLimitOptionsList } from './round_limits/EvaluationRoundLimitsList'
import { faClipboardCheck, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useListState } from '../../utils/hooks/useListState'
import {
  convertEvaluationRoundToInput,
  EvaluationRoundInput,
  EvaluationRoundLimitInput,
} from './input_models/models'
import {
  updateEvaluationRound,
  createEvaluationRound,
} from '../../utils/SynapseClient'

export type EvaluationRoundEditorProps = {
  sessionToken: string
  evaluationRoundInput: EvaluationRoundInput
  //If true, dates for start/end are displayed in UTC instead of local time
  utc: boolean
  onDelete: () => void
  onSave: (evaluationRound: EvaluationRoundInput) => void
}

//unfortnuately the date time picker we use does not have types
const disallowCalendarDateBefore = (date: Moment) => (currentDate: Moment) =>
  currentDate.isAfter(date)

export const EvaluationRoundEditor: React.FunctionComponent<EvaluationRoundEditorProps> = ({
  sessionToken,
  evaluationRoundInput,
  onSave,
  utc,
}) => {
  const [startDate, setStartDate] = useState<string | Moment>(
    moment(evaluationRoundInput.roundStart),
  )
  const [endDate, setEndDate] = useState<string | Moment>(
    moment(evaluationRoundInput.roundEnd),
  )

  const [totalSubmissionLimit, setTotalSubmissionLimit] = useState<string>(
    evaluationRoundInput.totalSubmissionLimit,
  )

  const [advancedMode, setAdvancedMode] = useState<boolean>(false)

  const {
    list: advancedLimits,
    handleListRemove: handleAdvancedLimitsRemove,
    handleListChange: handleAdvancedLimitsChange,
    appendToList: addAdvancedLimit,
  } = useListState<EvaluationRoundLimitInput>(evaluationRoundInput.otherLimits)

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
      id: evaluationRoundInput.id,
      etag: evaluationRoundInput.etag,
      evaluationId: evaluationRoundInput.evaluationId,
      roundStart: moment.utc(startDate).toJSON(),
      roundEnd: moment.utc(endDate).toJSON(),
      limits: limits,
    }
  }

  const handleSave = () => {
    const evaluationRound = convertInputsToEvaluationRound()

    const promise = evaluationRound.id
      ? updateEvaluationRound(evaluationRound, sessionToken)
      : createEvaluationRound(evaluationRound, sessionToken)

    promise
      //TODO: error handling
      .then(createdOrUpdatedRound => {
        const newInput = convertEvaluationRoundToInput(
          createdOrUpdatedRound,
          evaluationRoundInput.reactListKey,
        )
        onSave(newInput)
      })
      .catch(error => alert(error.reason))
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
  const disallowDatesBeforeNow = disallowCalendarDateBefore(moment())

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
              isValidDate={disallowDatesBeforeNow}
            />
          </Col>
          <Col xs="auto">
            <CalendarWithIconInputGroup
              value={endDate}
              label="Round End"
              setterCallback={setEndDate}
              utc={utc}
              isValidDate={disallowDatesBeforeNow}
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
