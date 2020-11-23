import {
  baseEntity,
  DataDictionaryData,
  SchemaContext,
  SchemaData,
} from '../types/IDataDictionaryTypes'

export const getDataDictionaryDetails = (
  parentNodeId: string,
  data: DataDictionaryData[],
): DataDictionaryData[] => {
  return data.filter((c) => {
    if (c.parentIds.length > 0) {
      return c.parentIds.some((id) => id === parentNodeId)
    }
    return false
  })
}

export function mapSchemaDataToDataDictionaryData(
  context: SchemaContext,
  data: SchemaData[],
) {
  return function (nd: SchemaData): DataDictionaryData {
    const parentIds: string[] = (normalizeEntity(
      nd['rdfs:subClassOf'],
    ) as baseEntity[]).map((rd: baseEntity): string => rd['@id'])

    const pieces: string[] = nd['@id'].split(`:`)
    const source: string = `${context[pieces[0]]}${pieces[1]}`

    const type: string[] = (normalizeEntity(nd['@type']) as string[]).map(
      (rd: string): string => rd,
    )

    const requiredDependencies: string[] = (normalizeEntity(
      nd['sms:requiresDependency'],
    ) as baseEntity[]).map((rd: baseEntity): string => rd['@id'])

    const validValues: string[] = (normalizeEntity(
      nd['schema:rangeIncludes'],
    ) as baseEntity[]).map((rd: baseEntity): string => rd['@id'])

    const requiresComponent: string[] = (normalizeEntity(
      nd['sms:requiresComponent'],
    ) as baseEntity[]).map((rd: baseEntity): string => rd['@id'])

    const domainIncludes: string[] = (normalizeEntity(
      nd['schema:domainIncludes'],
    ) as baseEntity[]).map((rd: baseEntity): string => rd['@id'])

    return {
      id: nd['@id'],
      type,
      description: nd['rdfs:comment'] || ``,
      label: nd['rdfs:label'],
      parentIds,
      attribute: nd['sms:displayName'] || ``,
      numOfDependents: getNumberOfDependents(data, nd['@id']),
      required: nd?.['sms:required'] === 'sms:true' || false,
      requiredDependencies,
      validationRules: nd['sms:validationRules'] || [],
      validValues,
      domainIncludes,
      requiresComponent,
      source,
    } as DataDictionaryData
  }
}

function getNumberOfDependents(data: SchemaData[], id: string): number {
  return data.filter((entity) => {
    const entityDeps: baseEntity[] = normalizeEntity(
      entity['rdfs:subClassOf'],
    ) as baseEntity[]
    return entityDeps.some((dep: baseEntity): boolean => dep['@id'] === id)
  }).length
}

function normalizeEntity(
  entity: string | string[] | baseEntity | baseEntity[] | undefined,
): (string | baseEntity)[] {
  return !entity ? [] : !Array.isArray(entity) ? Array(entity) : entity
}
