import React, { ReactElement } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { VIEW_TYPES, VIEW_TYPE_NAMES } from './constants'

export default function ViewTypeChooser(): ReactElement {
  const [viewType, setViewType] = React.useState(VIEW_TYPES.REQUIRES_COMPONENT)

  return (
    <>
      <p>{`Chosen: ${viewType}`}</p>
      <FormControl className={`form-control`}>
        <InputLabel id={`label-viewType`}>View Type</InputLabel>
        <Select
          labelId={`label-viewType`}
          id={`select-viewType`}
          value={viewType}
          onChange={(
            event: React.ChangeEvent<{
              name?: string | undefined
              value: unknown
            }>,
          ) => setViewType(event.target.value as VIEW_TYPES)}
        >
          {Object.keys(VIEW_TYPES).map((type: string, index: number) => (
            <MenuItem key={`viewType-dd${index}`} value={type}>
              {VIEW_TYPE_NAMES[type]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}
