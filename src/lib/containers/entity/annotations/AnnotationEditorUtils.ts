import { AjvError } from '@sage-bionetworks/rjsf-core'
import { flatMap, groupBy, isEmpty } from 'lodash-es'
import { ENTITY_CONCRETE_TYPE } from '../../../utils/synapseTypes'
import { entityJsonKeys } from '../../../utils/functions/EntityTypeUtils'

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
export function getFriendlyPropertyName(error: AjvError) {
  if (error.property.startsWith('[')) {
    // Additional properties are surrounded by brackets and quotations, so let's remove them
    return error.property.substring(2, error.property.length - 2)
  } else if (error.property.startsWith('.')) {
    return error.property.substring(1)
  } else {
    return error.property
  }
}

export function getTransformErrors(concreteType?: ENTITY_CONCRETE_TYPE) {
  return (errors: AjvError[]): AjvError[] => {
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
    if (concreteType) {
      errors = errors.map(error => {
        const propertyName = getFriendlyPropertyName(error)
        if (entityJsonKeys[concreteType].includes(propertyName)) {
          error.message = `"${propertyName}" is a reserved internal key and cannot be used.`
        }
        return error
      })
    }

    // Return the transformed errors.
    return errors
  }
}
