import React, { useEffect } from 'react'
import {
  EvaluationRoundLimitOptions,
  LIMIT_TYPE_DISPLAY_NAME,
} from './EvaluationRoundLimitOptions'
import { EvaluationRoundLimitType } from '../../../utils/synapseTypes/Evaluation'
import { ReactComponent as IconPlusSquareFilled } from '../../../assets/icons/icon_plus_square_filled.svg'
import { ReactComponent as IconTimes } from '../../../assets/icons/icon_times.svg'
import { EvaluationRoundLimitInput } from '../input_models/models'

const AVAILABLE_LIMIT_TYPES = Object.keys(LIMIT_TYPE_DISPLAY_NAME)

export type EvaluationRoundLimitOptionsListProps = {
  limitInputs: EvaluationRoundLimitInput[]
  handleChange: (
    index: number,
  ) => (limitInput: EvaluationRoundLimitInput) => void

  handleDeleteLimit: (index: number) => () => void

  onAddNewLimit: (limit: EvaluationRoundLimitInput) => void
}

const selectUnusedType = (
  selectedTypes: Set<EvaluationRoundLimitType>,
): EvaluationRoundLimitType => {
  return AVAILABLE_LIMIT_TYPES.find(
    key => !selectedTypes.has(key as EvaluationRoundLimitType),
  ) as EvaluationRoundLimitType
}

export const EvaluationRoundLimitOptionsList: React.FunctionComponent<EvaluationRoundLimitOptionsListProps> = ({
  limitInputs,
  handleChange,
  handleDeleteLimit,
  onAddNewLimit,
}) => {
  // all types that are currently being used
  const selectedTypes: Set<EvaluationRoundLimitType> = new Set(
    limitInputs.map(limit => limit.type),
  )
  console.log(selectedTypes)

  const addNewLimit = () => {
    onAddNewLimit({
      type: selectUnusedType(selectedTypes),
      maxSubmissionString: '',
    })
  }

  //display some input even if no limits currently exist
  useEffect(() => {
    if (limitInputs.length === 0) {
      addNewLimit()
    }
  })

  return (
    <div className="advanced-limits-grid">
      {limitInputs.map((limit, index) => {
        return (
          //TODO: using type as key has weird change behavior and using using index as key cause page refresh upon removing from the top of the list ( causes index change)
          <React.Fragment key={limit.type}>
            <EvaluationRoundLimitOptions
              limitInput={limit}
              allSelectedTypes={selectedTypes}
              onChange={handleChange(index)}
            />
            <button
              className="remove-button"
              onClick={handleDeleteLimit(index)}
            >
              <IconTimes className="SRC-icon-fill" />
            </button>
            {/*if last element*/}
            {index === limitInputs.length - 1 &&
              limitInputs.length < AVAILABLE_LIMIT_TYPES.length && (
                // todo: use add icon
                <button onClick={addNewLimit} className="add-button">
                  <IconPlusSquareFilled className="SRC-icon-fill" />
                </button>
              )}
          </React.Fragment>
        )
      })}
    </div>
  )
}
