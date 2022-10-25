import { DescriptionFieldProps } from '@rjsf/utils'
import React from 'react'
import Typography from '../../../../utils/typography/Typography'

export default function DescriptionFieldTemplate(props: DescriptionFieldProps) {
  const { description, schema = {} } = props
  const { required } = schema

  if (schema.type === 'object') {
    return <Typography variant={'body1'}>{description}</Typography>
  }

  return (
    <table className="FieldDescriptionTable">
      <tbody>
        {description && (
          <tr>
            <th>Description</th>
            <td>{description}</td>
          </tr>
        )}
        <tr>
          <th>Type</th>
          <td>{schema.type}</td>
        </tr>
        <tr>
          <th>Required</th>
          <td>{required ? 'Yes' : 'No'}</td>
        </tr>
      </tbody>
    </table>
  )
}
