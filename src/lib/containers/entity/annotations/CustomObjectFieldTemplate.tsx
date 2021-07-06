import { ObjectFieldTemplateProps, utils } from '@rjsf/core'
import React from 'react'
import { Button } from 'react-bootstrap'
import AddToList from '../../../assets/icons/AddToList'

/**
 * Basically identical to the default object field template, with a custom button.
 *
 * See {@link node_modules/@rjsf/core/src/components/fields/ObjectField.js#DefaultObjectFieldTemplate}
 * @param props
 * @returns
 */
export function CustomObjectFieldTemplate(props: ObjectFieldTemplateProps) {
  const { TitleField, DescriptionField } = props
  return (
    <fieldset id={props.idSchema.$id}>
      {(props.uiSchema['ui:title'] || props.title) && (
        <TitleField
          id={`${props.idSchema.$id}__title`}
          title={props.title || (props.uiSchema['ui:title'] as string)}
          required={props.required}
        />
      )}
      {props.description && (
        <DescriptionField
          id={`${props.idSchema.$id}__description`}
          description={props.description}
        />
      )}
      {props.properties.map(prop => prop.content)}
      {utils.canExpand(props.schema, props.uiSchema, props.formData) && (
        <Button
          variant="gray"
          className="object-property-expand"
          onClick={props.onAddClick(props.schema)}
          disabled={props.disabled || props.readonly}
        >
          <AddToList />
        </Button>
      )}
    </fieldset>
  )
}
