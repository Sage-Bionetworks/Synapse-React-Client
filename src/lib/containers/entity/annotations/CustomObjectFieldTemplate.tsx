import { ObjectFieldTemplateProps, utils } from '@sage-bionetworks/rjsf-core'
import React from 'react'
import { Button } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
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
  const CUSTOM_OBJECT_FIELD_TEMPLATE_TOOLTIP_ID = `CustomObjectFieldTooltip-${props.idSchema.$id}`
  return (
    <fieldset id={props.idSchema.$id}>
      <ReactTooltip
        id={CUSTOM_OBJECT_FIELD_TEMPLATE_TOOLTIP_ID}
        place="top"
        effect="solid"
      />
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
      {props.properties.map(prop => {
        return <div key={prop.name}>{prop.content}</div>
      })}
      {utils.canExpand(props.schema, props.uiSchema, props.formData) && (
        <Button
          variant="gray"
          className="object-property-expand"
          onClick={props.onAddClick(props.schema)}
          disabled={props.disabled || props.readonly}
          data-for={CUSTOM_OBJECT_FIELD_TEMPLATE_TOOLTIP_ID}
          data-tip={`Add a new custom field`}
          aria-label={'Add Custom Field'}
        >
          <AddToList />
        </Button>
      )}
    </fieldset>
  )
}
