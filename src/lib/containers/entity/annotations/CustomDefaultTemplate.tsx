import React from 'react'
import { useEffect } from 'react'
import { FormLabel } from 'react-bootstrap'
import { FieldTemplateProps } from 'react-jsonschema-form'

export function CustomDefaultTemplate(
  props: FieldTemplateProps & {
    formData: unknown
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

  useEffect(() => {
    if (Array.isArray(formData)) {
      const newValue = formData.map(v => `${v}`).join(', ')
      // TODO This only works with delay
      setTimeout(() => {
        onChange(newValue)
      }, 100)
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
