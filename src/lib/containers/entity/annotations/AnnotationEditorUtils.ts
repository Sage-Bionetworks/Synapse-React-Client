import { AjvError } from "@sage-bionetworks/rjsf-core"

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
  