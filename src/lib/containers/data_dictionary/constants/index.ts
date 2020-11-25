import { SchemaJson } from './../types/IDataDictionaryTypes'

export const DEFAULT_SCHEMA: SchemaJson = {
  '@context': {},
  '@graph': [],
  '@id': '',
}

export const MINUTES_TO_CACHE = 15

export const TABLE_PAGE_SIZE = 25

export enum VIEW_TYPES {
  DOMAIN_INCLUDES = 'domainIncludes',
  RANGE_INCLUDES = 'validValues',
  REQUIRES_COMPONENT = 'requiresComponent',
  REQUIRES_DEPENDENCY = 'requiredDependencies',
  SUBCLASS_OF = 'parentIds',
}

export const VIEW_TYPE_NAMES = {
  [VIEW_TYPES.DOMAIN_INCLUDES]: 'Domain Includes',
  [VIEW_TYPES.RANGE_INCLUDES]: 'Valid Values',
  [VIEW_TYPES.REQUIRES_COMPONENT]: 'Requires Component',
  [VIEW_TYPES.REQUIRES_DEPENDENCY]: 'Requires Dependencies',
  [VIEW_TYPES.SUBCLASS_OF]: 'SubClass Of',
}

export const PRIMARY_ENTITY = `bts:Component`
export const SECONDARY_ENTITY = `schema:Thing`
