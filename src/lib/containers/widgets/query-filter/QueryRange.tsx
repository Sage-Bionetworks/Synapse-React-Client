import * as React from 'react'
import { Range, RangeValues } from '../Range'
import { RangeSlider } from '../RangeSlider'
import { FacetColumnResultRange } from '../../../utils/synapseTypes/Table/FacetColumnResult'
import { ColumnModel } from '../../../utils/synapseTypes/Table/ColumnModel'
import { VALUE_NOT_SET } from '../../../utils/SynapseConstants'


import { RadioGroup } from '../RadioGroup'
import { useState } from 'react'

export enum RadioValuesEnum {
  NOT_SET = 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
  RANGE = 'RANGE',
  ANY = '',
}

export type QueryRangeProps = {
  facetResult: FacetColumnResultRange
  columnModel: ColumnModel
  onChange: Function
}

export type QueryRangeState = {
  facetResult: FacetColumnResultRange
  columnModel: ColumnModel
}

export const QueryRange: React.FunctionComponent<QueryRangeProps> = ({
  facetResult,
  columnModel,
  onChange,
}: QueryRangeProps) => {
  //const[values, setValues] = useState()

  const options = [
    { label: 'Not Set', value: RadioValuesEnum.NOT_SET },
    { label: 'Any', value: RadioValuesEnum.ANY },
    { label: 'Range', value: RadioValuesEnum.RANGE },
  ]

  let {
    columnMin,
    columnMax,
    selectedMin,
    selectedMax,
  } = facetResult // the upper bound of the selected range

  const  hasAnyValue = !selectedMin && !selectedMax


  selectedMin = selectedMin || columnMin
 selectedMax = selectedMax || columnMax

  const rangeType = columnModel.columnType === 'DOUBLE' ? 'number' : 'date'

  const getValue = (min: string, max: string, isAnyValue: boolean) => {
    if (isAnyValue) {
      return RadioValuesEnum.ANY
    } else if (min === VALUE_NOT_SET) {
      return RadioValuesEnum.NOT_SET
    }
    return RadioValuesEnum.RANGE
  }

  const handleRadioGroupChange = (
    value: RadioValuesEnum,
    onChangeCallback: Function,
  ) => {
    setValue(value)

    if (value !== RadioValuesEnum.RANGE) {
      onChangeCallback([value, value])
    }
  }

  const [value, setValue] = useState(getValue(selectedMin, selectedMax, hasAnyValue))

  const result = (
    <div>
      <RadioGroup
        value={value}
        id="rangeSelector"
        options={options}
        onChange={(value: RadioValuesEnum) =>
          handleRadioGroupChange(value, onChange)
        }
      ></RadioGroup>
      {value === RadioValuesEnum.RANGE &&
        (columnMin === columnMax ? (
          <label>{columnMax}</label>
        ) : (
          [
            columnModel.columnType === 'INTEGER' && (
              <RangeSlider
                key="RangeSlider"
                domain={[columnMin, columnMax]}
                initialValues={{min: selectedMin, max: selectedMax}}
                step={1}
                doUpdateOnApply={true}
                onChange={(values: RangeValues) => onChange([values.min, values.max])}
              >
                ) >
              </RangeSlider>
            ),

            (columnModel.columnType === 'DATE' ||
              columnModel.columnType === 'DOUBLE') && (
              <Range
                key="Range"
                initialValues={{
                  min: selectedMin,
                  max: selectedMax,
                }}
                type={rangeType}
                onChange={(values: RangeValues) =>
                  onChange([values.min, values.max])
                }
              ></Range>
            ),
          ]
        ))}
    </div>
  )
  return result
}
