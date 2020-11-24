import React, { ReactElement } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { VIEW_TYPES, VIEW_TYPE_NAMES } from './constants'
import { stateViewType, setStateViewType } from './state/ViewTypeState'

export default function ViewTypeChooser(): ReactElement {
  const viewType = stateViewType()
  const viewTypes: string[] = Object.keys(VIEW_TYPES).map(
    key => VIEW_TYPES[key],
  )
  const label = `View Type`
  const inputId = `label-viewType`

  return (
    <FormControl variant={`outlined`} className={`form-control`}>
      <InputLabel id={inputId}>{label}</InputLabel>
      <Select
        id={`select-viewType`}
        label={label}
        labelId={inputId}
        onChange={(
          event: React.ChangeEvent<{
            name?: string | undefined
            value: unknown
          }>,
        ) => setStateViewType(event.target.value as VIEW_TYPES)}
        value={viewType}
      >
        {viewTypes.map((type: string, index: number) => (
          <MenuItem key={`viewType-dd${index}`} value={type}>
            {VIEW_TYPE_NAMES[type]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
