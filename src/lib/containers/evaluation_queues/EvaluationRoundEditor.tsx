import { EvaluationRound } from 'lib/utils/synapseTypes'
import React, { useEffect, useState } from 'react'
import { Col, Form, FormControl, InputGroup } from 'react-bootstrap'
import Datetime from 'react-datetime'
// import 'react-datetime/css/react-datetime.css'
import { Moment } from 'moment'

export type EvaluationRoundEditorProps = {
  roundIndex?: number
  evaluationRound: EvaluationRound
}

export const EvaluationRoundEditor: React.FunctionComponent<EvaluationRoundEditorProps> = ({
  roundIndex,
  evaluationRound,
}) => {
  //Todo: this or undefined?
  const titleText =
    roundIndex != null ? `ROUND #${roundIndex} STATUS` : 'NEW ROUND'

  //TODO: use UTC or local time?????
  const [startDate, setStartDate] = useState<string | Moment>(
    evaluationRound.roundStart,
  )
  const [endDate, setEndDate] = useState<string | Moment>(
    evaluationRound.roundEnd,
  )

  useEffect(() => {
    console.log(startDate)
    console.log(endDate)
  }, [startDate, endDate])

  // https://react-bootstrap.github.io/components/forms/#forms-validation-native
  return (
    <div className="EvaluationRoundEditor">
      <h2>{titleText}</h2>
      <Form>
        <Form.Row>
          <Col>
            <InputGroup>
              <FormControl />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl />
            </InputGroup>
          </Col>
        </Form.Row>
      </Form>
      <Datetime value={startDate} utc={true} onChange={setStartDate} />
      <Datetime value={endDate} utc={true} onChange={setEndDate} />
    </div>
  )
}
