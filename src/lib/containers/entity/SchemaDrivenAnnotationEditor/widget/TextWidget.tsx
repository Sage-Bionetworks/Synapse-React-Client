import { Widget, WidgetProps } from '@rjsf/utils'
import React from 'react'

/**
 * This TextWidget is almost identical to the rjsf TextWidget, except we handle numbers like strings to prevent issues if
 * the actual annotation data is not a string.
 */
export const TextWidget: Widget = (props: WidgetProps) => {
  const { BaseInputTemplate } = props.registry.templates

  // options.inputType will override the input type determined via schema
  let inputType: string | undefined = undefined
  if (props.schema.type === 'number' || props.schema.type === 'integer') {
    inputType = 'text'
  }

  return (
    <BaseInputTemplate
      {...props}
      options={{ ...props.options, inputType: inputType }}
    />
  )
}

export default TextWidget
