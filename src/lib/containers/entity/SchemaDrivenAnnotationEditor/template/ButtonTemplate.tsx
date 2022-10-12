import { Add, ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'
import { Button } from 'react-bootstrap'
import { Close } from '@material-ui/icons'
import { IconButtonProps } from '@rjsf/utils'

export function AddButtonTemplate(props: IconButtonProps) {
  const { icon, iconType, uiSchema, ...rest } = props
  return (
    <Button className="AddButton" variant="primary-500" {...rest}>
      <Add />
    </Button>
  )
}

export function RemoveButtonTemplate(props: IconButtonProps) {
  const { icon, iconType, uiSchema, ...rest } = props

  return (
    <Button
      className="RemoveButton"
      variant="transparent-primary-500"
      {...rest}
    >
      <Close />
    </Button>
  )
}

export function MoveUpButtonTemplate(props: IconButtonProps) {
  const { icon, iconType, uiSchema, ...rest } = props

  return (
    <Button
      className="MoveUpButton"
      variant="transparent-primary-500"
      {...rest}
    >
      <ArrowUpward />
    </Button>
  )
}

export function MoveDownButtonTemplate(props: IconButtonProps) {
  const { icon, iconType, uiSchema, ...rest } = props
  return (
    <Button
      className="MoveDownButton"
      variant="transparent-primary-500"
      {...rest}
    >
      <ArrowDownward />
    </Button>
  )
}

export default {
  AddButton: AddButtonTemplate,
  RemoveButton: RemoveButtonTemplate,
  MoveUpButton: MoveUpButtonTemplate,
  MoveDownButton: MoveDownButtonTemplate,
}
