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

export type RangeFacetFilterProps = {
  facetResult: FacetColumnResultRange
  columnModel: ColumnModel
  onChange: Function
}

export type RangeFacetFilterState = {
  facetResult: FacetColumnResultRange
  columnModel: ColumnModel
}

export const RangeFacetFilter: React.FunctionComponent<RangeFacetFilterProps> = ({
  facetResult,
  columnModel,
  onChange,
}: RangeFacetFilterProps) => {
  const options = [
    { label: 'Not Set', value: RadioValuesEnum.NOT_SET },
    { label: 'Any', value: RadioValuesEnum.ANY },
    { label: 'Range', value: RadioValuesEnum.RANGE },
  ]

  let { columnMin, columnMax, selectedMin, selectedMax } = facetResult // the upper bound of the selected range

  const hasAnyValue = !selectedMin && !selectedMax

  selectedMin = selectedMin || columnMin
  selectedMax = selectedMax || columnMax

  const rangeType = columnModel.columnType === 'DOUBLE' ? 'number' : 'date'

  const getRadioValue = (min: string, isAnyValue: boolean) => {
    if (isAnyValue) {
      return RadioValuesEnum.ANY
    } else if (min === VALUE_NOT_SET) {
      return RadioValuesEnum.NOT_SET
    }
    return RadioValuesEnum.RANGE
  }

  const handleRadioGroupChange = (
    radioValue: RadioValuesEnum,
    onChangeCallback: Function,
  ) => {
    setRadioValue(radioValue)

    if (radioValue !== RadioValuesEnum.RANGE) {
      onChangeCallback([radioValue, radioValue])
    }
  }

  const [radioValue, setRadioValue] = useState(
    getRadioValue(selectedMin, hasAnyValue),
  )

  const result = (
    <div>
      <RadioGroup
        value={radioValue}
        id="rangeSelector"
        options={options}
        onChange={(radioValue: RadioValuesEnum) =>
          handleRadioGroupChange(radioValue, onChange)
        }
      ></RadioGroup>
      {radioValue === RadioValuesEnum.RANGE &&
        (columnMin === columnMax ? (
          <label>{columnMax}</label>
        ) : (
          <>
            {columnModel.columnType === 'INTEGER' && (
              <RangeSlider
                key="RangeSlider"
                domain={[columnMin, columnMax]}
                initialValues={{ min: selectedMin, max: selectedMax }}
                step={1}
                doUpdateOnApply={true}
                onChange={(values: RangeValues) =>
                  onChange([values.min, values.max])
                }
              >
                ) >
              </RangeSlider>
            )}

            {(columnModel.columnType === 'DATE' ||
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
            )}
          </>
        ))}
    </div>
  )
  return result
}
