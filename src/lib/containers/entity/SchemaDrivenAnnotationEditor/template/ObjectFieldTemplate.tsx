import {
  ADDITIONAL_PROPERTY_FLAG,
  canExpand,
  getTemplate,
  getUiOptions,
  ObjectFieldTemplatePropertyType,
  ObjectFieldTemplateProps,
} from '@rjsf/utils'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDeepCompareEffectNoCheck } from 'use-deep-compare-effect'
import AddToList from '../../../../assets/icons/AddToList'
import Tooltip from '../../../../utils/tooltip/Tooltip'
import { displayToast } from '../../../ToastMessage'

/**
 * Basically identical to the default object field template, with a custom button.
 *
 * See {@link node_modules/@rjsf/core/src/components/fields/ObjectField.js#DefaultObjectFieldTemplate}
 * @param props
 * @returns
 */
export function ObjectFieldTemplate<T, F>(
  props: ObjectFieldTemplateProps<T, F>,
) {
  const {
    description,
    disabled,
    formData,
    idSchema,
    onAddClick,
    properties,
    readonly,
    registry,
    required,
    schema,
    title,
    uiSchema,
  } = props

  const options = getUiOptions(uiSchema)
  const TitleFieldTemplate = getTemplate<'TitleFieldTemplate'>(
    'TitleFieldTemplate',
    registry,
    options,
  )
  const DescriptionFieldTemplate = getTemplate<'DescriptionFieldTemplate'>(
    'DescriptionFieldTemplate',
    registry,
    options,
  )

  const [previousSchemaDefinedProperties, setPreviousSchemaDefinedProperties] =
    useState<Set<string>>(new Set())

  /**
   * We track how the schema changes as the user enters data, causing conditional subschemas to be evaluated.
   *
   * If a property exists in the previous version of the schema and has user data, and then is dropped from the schema due to a data update, then
   * we need to prompt the user whether they want to undo the change, or continue and keep/remove those fields
   *
   * In this component, we can identify when one or more fields with user data are dropped (the field gains the additional property flag in the schema prop).
   * We then use a function provided by the context to report which fields were lost.
   */
  useDeepCompareEffectNoCheck(() => {
    if (schema.properties) {
      const propertyKeys = Object.keys(schema.properties)
      // Schema-defined properties are those properties in the schema without the additional property flag.
      const schemaDefinedProperties = new Set<string>(
        propertyKeys.filter(key => {
          const propertyObject = schema.properties![key]
          return !propertyObject[ADDITIONAL_PROPERTY_FLAG]
        }),
      )

      if (previousSchemaDefinedProperties != null) {
        // Compare the schema defined properties with the previous version to see if any were lost.

        const lostProperties = Array.from(
          previousSchemaDefinedProperties,
        ).filter(
          schemaDefinedProperty =>
            !schemaDefinedProperties.has(schemaDefinedProperty) &&
            formData[schemaDefinedProperty] != null, // if the data is null, then we don't need to worry about it; user data isn't lost
        )
        if (lostProperties.length > 0) {
          // Report the converted fields in a toast message
          displayToast(
            `The following annotations are no longer specified by the schema and have been converted to Custom Fields: ${lostProperties.join(
              ', ',
            )}.`,
            'warning',
            {
              title: 'Fields No Longer Specified By Schema',
            },
          )
        }
      }
      setPreviousSchemaDefinedProperties(schemaDefinedProperties)
    }
  }, [schema.properties])

  return (
    <fieldset id={idSchema.$id}>
      {(options.title || title) && (
        <TitleFieldTemplate
          id={`${idSchema.$id}__title`}
          schema={schema}
          title={options.title || title}
          required={required}
          uiSchema={uiSchema}
          registry={registry}
        />
      )}
      {(options.description || description) && (
        <DescriptionFieldTemplate
          id={`${idSchema.$id}__description`}
          description={options.description || description!}
          registry={registry}
          schema={schema}
        />
      )}
      {properties.map((prop: ObjectFieldTemplatePropertyType) => prop.content)}

      {canExpand(schema, uiSchema, formData) && (
        <Tooltip interactive title="Add a new custom field" placement="top">
          <Button
            variant="gray"
            className="object-property-expand"
            onClick={onAddClick(schema)}
            disabled={disabled || readonly}
            aria-label={'Add Custom Field'}
          >
            <AddToList />
          </Button>
        </Tooltip>
      )}
    </fieldset>
  )
}
