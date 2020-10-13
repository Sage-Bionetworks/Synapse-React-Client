import React from 'react'
import {
  EvaluationRoundLimitInput,
  EvaluationRoundLimitOptions,
  LIMIT_TYPE_DISPLAY_NAME,
} from './EvaluationRoundLimitOptions'
import { EvaluationRoundLimitType } from '../../../utils/synapseTypes/Evaluation'
import { Col, Row } from 'react-bootstrap'

export type EvaluationRoundLimitOptionsListProps = {
  limitInputs: EvaluationRoundLimitInput[]
  onChange: (limits: EvaluationRoundLimitInput[]) => void
}

const AVAILABLE_LIMIT_TYPES = Object.keys(LIMIT_TYPE_DISPLAY_NAME)
export const EvaluationRoundLimitOptionsList: React.FunctionComponent<EvaluationRoundLimitOptionsListProps> = ({
  limitInputs,
  onChange,
}) => {
  // all types that are currently being used
  const selectedTypes: Set<EvaluationRoundLimitType> = new Set(
    limitInputs.map(limit => limit.type),
  )

  function selectUnusedType(
    selectedTypes: Set<EvaluationRoundLimitType>,
  ): EvaluationRoundLimitType {
    return AVAILABLE_LIMIT_TYPES.find(
      key => !selectedTypes.has(key as EvaluationRoundLimitType),
    ) as EvaluationRoundLimitType
  }

  // function generator to handle a single limit change in the list
  const handleChange = (index: number) => (
    limitInput: EvaluationRoundLimitInput,
  ): void => {
    //copy limits from props
    const limitsList = [...limitInputs]
    limitsList[index] = limitInput
    onChange(limitsList)
  }

  const handleDeleteLimit = (index: number) => (): void => {
    //copy limits from props
    const limitsList = limitInputs.filter(
      (value, arr_index) => index !== arr_index,
    )
    onChange(limitsList)
  }

  const addNewLimit = () => {
    const limitsList: EvaluationRoundLimitInput[] = [...limitInputs]
    limitsList.push({
      type: selectUnusedType(selectedTypes),
      maxSubmissionString: '',
    })
    onChange(limitsList)
  }

  //display some input even if no limits currently exist
  if (limitInputs.length === 0) {
    addNewLimit()
  }

  return (
    <React.Fragment>
      {limitInputs.map((limit, index) => {
        return (
          //TODO: using type as key has weird change behavior and using using index as key cause page refresh upon removing from the top of the list ( causes index change)
          <Row key={limit.type}>
            <EvaluationRoundLimitOptions
              limitInput={limit}
              allSelectedTypes={selectedTypes}
              onChange={handleChange(index)}
            />
            <Col>
              <button onClick={handleDeleteLimit(index)}>remove</button>
            </Col>
            <Col>
              {/*if last element*/}
              {index === limitInputs.length - 1 &&
                limitInputs.length < AVAILABLE_LIMIT_TYPES.length && (
                  // todo: use add icon
                  <button onClick={addNewLimit}>add</button>
                )}
            </Col>
          </Row>
        )
      })}
    </React.Fragment>
  )
}
