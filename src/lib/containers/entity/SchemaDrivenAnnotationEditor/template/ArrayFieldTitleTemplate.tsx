import { ArrayFieldTitleProps } from '@rjsf/utils'
import React from 'react'
import { FormLabel } from 'react-bootstrap'

/**
 * Custom title template for array fields.
 *
 * @param props
 * @returns
 */
export default function ArrayFieldTitleTemplate<T, F>(
  props: ArrayFieldTitleProps<T, F>,
) {
  const { title, required } = props
  return (
    <FormLabel>
      {title}
      {required && <span className="required">*</span>}
    </FormLabel>
  )
}
