import { mapSchemaDataToDataSchemaData } from 'lib/containers/data_schema/utils/mapSchemaDataToDataSchemaData'
import mockDataSchema from 'mocks/mockDataSchema.json'
import {
  BaseEntity,
  DataSchemaData,
  SchemaContext,
  SchemaData,
} from 'lib/containers/data_schema/types/IDataSchemaTypes'

test(`mapSchemaDataToDataSchemaData maps schema to dataSchema`, () => {
  const context: SchemaContext = mockDataSchema['@context']
  const data: SchemaData[] = mockDataSchema['@graph']
  const mappedData: DataSchemaData[] = data.map(
    mapSchemaDataToDataSchemaData(context),
  )

  expect(mappedData.length).toEqual(data.length)

  mappedData.forEach((entity: DataSchemaData, index: number) => {
    // @id
    expect(entity.id).toEqual(data[index]['@id'])

    // @type
    validateArray('type', '@type', entity, data, index)

    // rdfs:comment
    if (data[index]['rdfs:comment']) {
      expect(entity.description).toEqual(data[index]['rdfs:comment'])
    } else {
      expect(entity.description).toEqual(``)
    }

    // rdfs:label
    expect(entity.label).toEqual(data[index]['rdfs:label'])

    // rdfs:subClassOf
    let subClassOf = data[index]['rdfs:subClassOf']
    subClassOf = !subClassOf
      ? []
      : !Array.isArray(subClassOf)
      ? Array(subClassOf)
      : subClassOf
    if (subClassOf.length > 0) {
      const sunClassOfIds: string[] = subClassOf.map(
        (node: BaseEntity) => node['@id'],
      )
      expect(entity.parentIds).toEqual(sunClassOfIds)
    } else {
      expect(entity.parentIds).toEqual([])
    }

    // sms:displayName
    if (data[index]['sms:displayName']) {
      expect(entity.attribute).toEqual(data[index]['sms:displayName'])
    } else {
      expect(entity.attribute).toEqual(``)
    }

    // sms:required
    if (
      data[index]['sms:required'] &&
      data[index]['sms:required'] === 'sms:true'
    ) {
      expect(entity.required).toBeTruthy()
    } else {
      expect(entity.required).toBeFalsy()
    }

    // sms:validationRules
    if (data[index]['sms:validationRules']) {
      expect(entity.validationRules).toEqual(data[index]['sms:validationRules'])
    } else {
      expect(entity.validationRules).toEqual([])
    }

    // sms:requiresDependency
    validateArray(
      'requiredDependencies',
      'sms:requiresDependency',
      entity,
      data,
      index,
    )

    // schema:rangeIncludes
    validateArray('validValues', 'schema:rangeIncludes', entity, data, index)

    // sms:requiresComponent
    validateArray(
      'requiresComponent',
      'sms:requiresComponent',
      entity,
      data,
      index,
    )

    // sms:domainIncludes
    validateArray('domainIncludes', 'sms:domainIncludes', entity, data, index)

    // sms:domainIncludes
    validateArray('domainIncludes', 'sms:domainIncludes', entity, data, index)

    // Source
    const pieces: string[] = data[index]['@id'].split(`:`)
    const source: string = `${context[pieces[0]]}${pieces[1]}`
    expect(entity.source).toEqual(source)
  })
})

function validateArray(
  entityKey: string,
  dataKey: string,
  entity: DataSchemaData,
  data: SchemaData[],
  index: number,
) {
  if (data[index][dataKey] && typeof data[index][dataKey] === 'string') {
    expect(entity[entityKey]).toEqual([data[index][dataKey]])
  } else if (data[index][dataKey]) {
    expect(entity[entityKey]).toEqual(data[index][dataKey])
  } else {
    expect(entity[entityKey]).toEqual([])
  }
}
