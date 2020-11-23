import { SchemaJson } from './../types/IDataDictionaryTypes'

export const DEFAULT_SCHEMA: SchemaJson = {
  '@context': {},
  '@graph': [],
  '@id': '',
}

export const TABLE_PAGE_SIZE = 25

export enum VIEW_TYPES {
  DOMAIN_INCLUDES = 'domainIncludes',
  RANGE_INCLUDES = 'rangeIncludes',
  REQUIRES_COMPONENT = 'requiresComponent',
  REQUIRES_DEPENDENCY = 'requiresDependency',
  SUBCLASS_OF = 'sunClassOf',
}
