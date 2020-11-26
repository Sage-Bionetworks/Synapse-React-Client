import React, { ReactElement } from 'react'
import { Form } from 'react-bootstrap'
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
    <Form className={`select-viewType`}>
      <Form.Group controlId={`select-viewType`}>
        <Form.Label id={inputId}>{label}</Form.Label>
        <Form.Control
          as={`select`}
          onChange={(
            event: React.ChangeEvent<{
              name?: string | undefined
              value: unknown
            }>,
          ) => setStateViewType(event.target.value as VIEW_TYPES)}
          value={viewType}
        >
          {viewTypes.map((type: string, index: number) => (
            <option key={`viewType-dd${index}`} value={type}>
              {VIEW_TYPE_NAMES[type]}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  )
}
