import React, { useState } from 'react'
import { FormLabel } from 'react-bootstrap'
import { FieldTemplateProps, getTemplate, getUiOptions } from '@rjsf/utils'
import { HelpOutline } from '@material-ui/icons'
import { Collapse } from '@material-ui/core'

export function FieldTemplate<T>(props: FieldTemplateProps<T>) {
  const {
    id,
    label,
    children,
    errors,
    help,
    description,
    hidden,
    required,
    displayLabel,
    registry,
    uiSchema,
    schema,
  } = props
  const uiOptions = getUiOptions(uiSchema)
  const WrapIfAdditionalTemplate = getTemplate<'WrapIfAdditionalTemplate'>(
    'WrapIfAdditionalTemplate',
    registry,
    uiOptions,
  )
  const [showDetails, setShowDetails] = useState(false)

  if (hidden) {
    return <div className="hidden">{children}</div>
  }
  return (
    <WrapIfAdditionalTemplate {...props}>
      {/* RJSF hides labels for boolean checkboxes, but since we replaced checkboxes with a custom component, we want to show them */}
      {(displayLabel || schema.type === 'boolean') && (
        <div className="LabelContainer">
          <FormLabel htmlFor={id}>
            {label}
            {required && <span className="required">*</span>}
          </FormLabel>
          <button
            aria-label="More Info"
            aria-expanded={showDetails}
            onClick={e => {
              e.preventDefault()
              setShowDetails(!showDetails)
            }}
          >
            <HelpOutline className="HelpButton SRC-primary-text-color" />
          </button>
        </div>
      )}
      {children}
      <Collapse className="field-description" in={showDetails}>
        {description}
      </Collapse>
      {errors}
      {help}
    </WrapIfAdditionalTemplate>
  )
}
