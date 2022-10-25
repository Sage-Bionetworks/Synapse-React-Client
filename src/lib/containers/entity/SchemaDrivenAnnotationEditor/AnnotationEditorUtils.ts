import {
  ADDITIONAL_PROPERTY_FLAG,
  PROPERTIES_KEY,
  deepEquals,
  FieldProps,
  RJSFValidationError,
} from '@rjsf/utils'
import { flatMap, groupBy, isEmpty } from 'lodash-es'
import { entityJsonKeys } from '../../../utils/synapseTypes'

/**
 * Strips null values from arrays in the provided form data. If the array is empty after
 * removing null values, the key is removed from the form data.
 *
 * This allows users to submit forms with empty array fields (SWC-5762)
 */
export function dropNullishArrayValues(
  formData: Record<string, unknown>,
): Record<string, unknown> {
  const newFormData: Record<string, unknown> = {}
  Object.keys(formData).forEach(key => {
    let value = formData[key]
    if (Array.isArray(value)) {
      value = (value as Array<any>).filter((item: any) => item != null)
      if (!isEmpty(value)) {
        newFormData[key] = value
      }
    } else {
      newFormData[key] = value
    }
  })
  return newFormData
}

/**
 * Inspects the property of the AjvError and modifies it to be comparable to simple key strings, like entity property keys.
 * @param error
 * @returns
 */
export function getFriendlyPropertyName(error: RJSFValidationError) {
  if (error.property?.startsWith('[')) {
    // Additional properties are surrounded by brackets and quotations, so let's remove them
    return error.property.substring(2, error.property.length - 2)
  } else if (error.property?.startsWith('.')) {
    return error.property.substring(1)
  } else {
    return error.property
  }
}

export function transformErrors(
  errors: RJSFValidationError[],
): RJSFValidationError[] {
  // Transform the errors in the following ways:
  // - Simplify the set of errors when failing to select an enumeration defined with an anyOf (SWC-5724)
  // - Show a custom error message when using a property that collides with an internal entity property (SWC-5678)

  // Fixing anyOf errors
  // Group the errors by the property that the error applies to
  const grouped = groupBy(errors, error => error.property)
  Object.keys(grouped).map(property => {
    const errorGroup = grouped[property]

    // First, see if it is an anyOf error
    const hasAnyOfError = errorGroup.some(
      e => e.message === 'should match some schema in anyOf',
    )

    // We determine if it's an anyOf *enum* error if all error messages in the property match one of these three messages:
    const isEnumError =
      hasAnyOfError &&
      errorGroup.every(error => {
        if (error.message === 'should be string') {
          return true
        } else if (error.message === 'should be equal to constant') {
          return true
        } else if (error.message === 'should match some schema in anyOf') {
          return true
        } else {
          return false
        }
      })

    // If it's an anyOf enum error, we just modify the first message and drop the rest
    if (isEnumError && errorGroup.length > 0) {
      errorGroup[0].message = 'should be equal to one of the allowed values'
      grouped[property] = [errorGroup[0]]
    }
  })

  // Ungroup the errors after potentially modifying them
  errors = flatMap(grouped)

  // Custom error message if the custom annotation key collides with an internal entity property
  errors = errors.map(error => {
    const propertyName = getFriendlyPropertyName(error)
    if (propertyName && entityJsonKeys.includes(propertyName)) {
      error.message = `"${propertyName}" is a reserved internal key and cannot be used.`
    }
    return error
  })

  // Return the transformed errors.
  return errors
}

/**
 * Custom annotations in Synapse are always arrays. This function converts initial data to be an array type.
 * If the initial data is an array, return the data itself.
 * If the initial data is a string, returns an array of substrings separated by commas.
 * Otherwise, wrap the data in an array.
 */
export function convertToArray<T>(value: T): Array<any> {
  if (Array.isArray(value)) {
    return value
  } else if (typeof value === 'string') {
    return value.split(',').map(s => s.trim()) // split a string of comma-separated values, then trim whitespace
  } else {
    return [value]
  }
}

/**
 * `componentDidUpdate` function for RJSF ObjectField.
 *
 * For an object, this will
 * - convert additionalProperties formData to arrays
 * - convert schema-defined formData from an array to a non-array if the schema type is not an array
 * @param props
 */
export function objectFieldComponentDidUpdate(props: FieldProps) {
  const { schema, formData, onChange } = props
  const newFormData = { ...formData }
  if (schema[PROPERTIES_KEY]) {
    Object.entries(schema[PROPERTIES_KEY]).forEach(([key, propertySchema]) => {
      const data = newFormData[key]
      if (propertySchema[ADDITIONAL_PROPERTY_FLAG]) {
        /**
         * All additional properties should be converted to arrays.
         *
         * We need to convert it right away because the order of items is not stable, and seems to depend on if the item is an array or not
         */
        if (!Array.isArray(data)) {
          newFormData[key] = convertToArray(data)
        }
      } else {
        /**
         * If the schema does not call for an array, but the formData is an array, then this will coerce it to a string.
         *
         * This can occur when a formData value is an additionalProperty, which we always treat as an array, then the key
         * is added to the schema (e.g. conditionally).
         */
        if (
          typeof propertySchema === 'object' &&
          'type' in propertySchema &&
          propertySchema.type !== 'array' &&
          Array.isArray(data)
        ) {
          newFormData[key] = data.map(v => `${v}`).join(', ')
        }
      }
    })
    if (!deepEquals(formData, newFormData)) {
      onChange(newFormData)
    }
  }
}
