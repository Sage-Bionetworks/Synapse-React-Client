import { Close, Add } from '@material-ui/icons'
import { ArrayFieldTemplateProps, FieldTemplateProps } from '@rjsf/core'
import React from 'react'
import { Button, FormGroup, FormLabel } from 'react-bootstrap'
import { ADDITIONAL_PROPERTY_FLAG } from 'react-jsonschema-form/lib/utils'

export function CustomFieldTemplate<T>(props: FieldTemplateProps<T>) {
  const {
    id,
    classNames,
    label,
    description,
    rawDescription,
    children,
    errors,
    rawErrors,
    help,
    rawHelp,
    hidden,
    required,
    readonly,
    disabled,
    displayLabel,
    fields,
    schema,
    uiSchema,
    onChange,
    formContext,
    formData,
    registry,
  } = props

  const isArray = schema.type === 'array' ?? false

  console.log(label, isArray)

  return (
    <>
      {label ? (
        <div className="labelDiv">
          {displayLabel && <FormLabel id={id}>{label}</FormLabel>}
          {displayLabel && description ? description : null}
        </div>
      ) : null}
      <div className="childrenDiv">{children}</div>
      <div className="errorHelpDiv">
        {errors}
        {help}
      </div>
    </>
    // <FormGroup className={classNames} style={{ width: '100%' }}>
    //   <FormLabel htmlFor={id}>{label}</FormLabel>
    //   {description}
    //   <div style={{ display: 'flex' }}>{children}</div>

    //   {errors}
    //   {help}
    // </FormGroup>
  )
}
