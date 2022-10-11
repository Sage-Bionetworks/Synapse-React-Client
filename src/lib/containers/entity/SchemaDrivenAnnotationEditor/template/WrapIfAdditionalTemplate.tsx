import {
  WrapIfAdditionalTemplateProps,
  ADDITIONAL_PROPERTY_FLAG,
} from '@rjsf/utils'
import React from 'react'
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap'

/** The `WrapIfAdditional` component is used by the `FieldTemplate` to rename, or remove properties that are
 * part of an `additionalProperties` part of a schema.
 *
 * @param props - The `WrapIfAdditionalProps` for this component
 */
export default function WrapIfAdditionalTemplate<T = any, F = any>(
  props: WrapIfAdditionalTemplateProps<T, F>,
) {
  const {
    id,
    classNames,
    disabled,
    label,
    onKeyChange,
    readonly,
    required,
    schema,
    children,
  } = props
  const keyLabel = `Key`
  const additional = ADDITIONAL_PROPERTY_FLAG in schema

  if (!additional) {
    return <div className={classNames}>{children}</div>
  }

  return (
    <div className={classNames}>
      <div className="row">
        <div className="col-xs-3">
          <FormGroup>
            <FormLabel id={`${id}-key-label`} htmlFor={`${id}-key`}>
              {keyLabel}
            </FormLabel>
            <FormControl
              type="text"
              disabled={disabled}
              readOnly={readonly}
              defaultValue={label}
              required={required}
              id={`${id}-key`}
              onBlur={(event: {
                preventDefault: () => void
                target: { value: string }
              }) => {
                event.preventDefault()
                onKeyChange(event.target.value)
              }}
            />
          </FormGroup>
        </div>
        {children}
        {/* All additional properties are treated as arrays, so we don't show a remove button here. */}
        {/* To drop the property, drop the last array item. */}
      </div>
    </div>
  )
}
