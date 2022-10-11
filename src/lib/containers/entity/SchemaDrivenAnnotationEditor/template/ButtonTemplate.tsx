import { Add, ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'
import { Button } from 'react-bootstrap'
import { Close } from '@material-ui/icons'
import { IconButtonProps } from '@rjsf/utils'

export function AddButtonTemplate(props: IconButtonProps) {
  return (
    <Button className="AddButton" variant="primary-500" {...props}>
      <Add />
    </Button>
  )
}

export function RemoveButtonTemplate(props: IconButtonProps) {
  return (
    <Button
      className="RemoveButton"
      variant="transparent-primary-500"
      {...props}
    >
      <Close />
    </Button>
  )
}

export function MoveUpButtonTemplate(props: IconButtonProps) {
  return (
    <Button
      className="MoveUpButton"
      variant="transparent-primary-500"
      {...props}
    >
      <ArrowUpward />
    </Button>
  )
}

export function MoveDownButtonTemplate(props: IconButtonProps) {
  return (
    <Button
      className="MoveDownButton"
      variant="transparent-primary-500"
      {...props}
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
