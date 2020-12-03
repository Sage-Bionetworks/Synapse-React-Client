import {
  BaseEntity,
  DataSchemaData,
  SchemaContext,
  SchemaData,
} from '../types/IDataSchemaTypes'

export function mapSchemaDataToDataSchemaData(context: SchemaContext) {
  return function (nd: SchemaData): DataSchemaData {
    const parentIds: string[] = (normalizeEntity(
      nd['rdfs:subClassOf'],
    ) as BaseEntity[]).map((rd: BaseEntity): string => rd['@id'])

    const pieces: string[] = nd['@id'].split(`:`)
    const source: string = `${context[pieces[0]]}${pieces[1]}`

    const type: string[] = (normalizeEntity(nd['@type']) as string[]).map(
      (rd: string): string => rd,
    )

    const requiredDependencies: string[] = (normalizeEntity(
      nd['sms:requiresDependency'],
    ) as BaseEntity[]).map((rd: BaseEntity): string => rd['@id'])

    const validValues: string[] = (normalizeEntity(
      nd['schema:rangeIncludes'],
    ) as BaseEntity[]).map((rd: BaseEntity): string => rd['@id'])

    const requiresComponent: string[] = (normalizeEntity(
      nd['sms:requiresComponent'],
    ) as BaseEntity[]).map((rd: BaseEntity): string => rd['@id'])

    const domainIncludes: string[] = (normalizeEntity(
      nd['schema:domainIncludes'],
    ) as BaseEntity[]).map((rd: BaseEntity): string => rd['@id'])

    return {
      id: nd['@id'],
      type,
      description: nd['rdfs:comment'] || ``,
      label: nd['rdfs:label'],
      parentIds,
      attribute: nd['sms:displayName'] || ``,
      required: nd?.['sms:required'] === 'sms:true' || false,
      requiredDependencies,
      validationRules: nd['sms:validationRules'] || [],
      validValues,
      domainIncludes,
      requiresComponent,
      source,
    } as DataSchemaData
  }
}

function normalizeEntity(
  entity: string | string[] | BaseEntity | BaseEntity[] | undefined,
): (string | BaseEntity)[] {
  return !entity ? [] : !Array.isArray(entity) ? Array(entity) : entity
}
