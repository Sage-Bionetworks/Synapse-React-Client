import React from 'react'
import { useEffect } from 'react'
import { FormLabel } from 'react-bootstrap'
import { FieldTemplateProps } from '@rjsf/core'

export function CustomDefaultTemplate<T>(
  props: FieldTemplateProps<T> & {
    onChange: (newValue: unknown) => void
  },
) {
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
    formData,
    onChange,
  } = props

  // The formData that we get may be an array (for example, if it was an additionalProperty, but then the key was added to the schema)
  // If the object passes through this template, then it should no longer be an array, so we coerce it to a string.
  useEffect(() => {
    if (Array.isArray(formData)) {
      const newValue = formData.map(v => `${v}`).join(', ')
      // TODO: This only works when we have a short delay
      setTimeout(() => {
        onChange(newValue)
      }, 50)
    }
  }, [])

  if (hidden) {
    return <div className="hidden">{children}</div>
  }

  return (
    <>
      {displayLabel && (
        <FormLabel htmlFor={id}>
          {label}
          {required && <span className="required">*</span>}
        </FormLabel>
      )}
      {displayLabel && description ? description : null}
      {children}
      {errors}
      {help}
    </>
  )
}
