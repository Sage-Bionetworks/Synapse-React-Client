import { SchemaJson } from './../types/IDataSchemaTypes'

export const DEFAULT_SCHEMA: SchemaJson = {
  '@context': {},
  '@graph': [],
  '@id': '',
}

export const MINUTES_TO_CACHE = 15

export const TABLE_PAGE_SIZE = 25

export const LIST_LENGTH = 7

export enum DATA_TYPES {
  COMMENT = 'description',
  DISPLAY_NAME = 'attribute',
  ID = 'id',
  LABEL = 'label',
  REQUIRED = 'required',
  SOURCE = 'source',
  VALIDATION_RULES = 'validationRules',
  TYPE = 'type',
}

export enum VIEW_TYPES {
  DOMAIN_INCLUDES = 'domainIncludes',
  RANGE_INCLUDES = 'validValues',
  REQUIRES_COMPONENT = 'requiresComponent',
  REQUIRES_DEPENDENCY = 'requiredDependencies',
  SUBCLASS_OF = 'parentIds',
}

export const DATA_TYPE_NAMES = {
  [DATA_TYPES.COMMENT]: 'Description',
  [DATA_TYPES.DISPLAY_NAME]: 'Attribute',
  [VIEW_TYPES.DOMAIN_INCLUDES]: 'Properties',
  [DATA_TYPES.ID]: 'ID',
  [DATA_TYPES.LABEL]: 'Label',
  [VIEW_TYPES.RANGE_INCLUDES]: 'Valid Values',
  [DATA_TYPES.REQUIRED]: 'Required',
  [VIEW_TYPES.REQUIRES_COMPONENT]: 'Depends on Component',
  [VIEW_TYPES.REQUIRES_DEPENDENCY]: 'Requires Attributes',
  [DATA_TYPES.SOURCE]: 'Source',
  [VIEW_TYPES.SUBCLASS_OF]: 'Parent Attributes',
  [DATA_TYPES.TYPE]: 'Type',
  [DATA_TYPES.VALIDATION_RULES]: 'Format',
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

export const DESC_MAP = {
  [DATA_TYPES.ID]: `Unique ID of an object; JSON-LD resolves that to a URI`,
  [DATA_TYPES.TYPE]: `Determines whether the object defined is a "class" or a "property" in the schema hierarchy.`,
  [DATA_TYPES.COMMENT]: `Description of the object`,
  [DATA_TYPES.LABEL]: `Unique label of the object w/in the schema document`,
  [VIEW_TYPES.SUBCLASS_OF]: `This is a reference to the parent object of this object in the schema. Objects can have one or multiple parents`,
  [DATA_TYPES.DISPLAY_NAME]: `This is a human readable name associated with this object; not required in schema.org however all objects in schemas we define have that attribute`,
  [DATA_TYPES.REQUIRED]: `Indicates whether values/annotations for this attribute/object have to be provided`,
  [DATA_TYPES.VALIDATION_RULES]: `What kinds of values/annotations are applicable to this object (e.g. can it take on a list of values, or a particular regular expression), Currently supported validation rule is only one: 'list'`,
  [VIEW_TYPES.REQUIRES_DEPENDENCY]: `Indicates that this attribute/object depends on other objects to be fully specified. E.g. if this object is represented as a column in a RDB entity table, then the set of required dependencies corresponds to a set of other columns in this entity table.`,
  [VIEW_TYPES.RANGE_INCLUDES]: `A set of objects that can be used as values/annotations for this object (e.g. set of values in a data validation dropdown)`,
  'schema:domainIncludes': `If this object is a property of another object, domainIncludes indicates what class this object is a property of`,
  [VIEW_TYPES.DOMAIN_INCLUDES]: `If this object is a property of another object, domainIncludes indicates what class this object is a property of`,
  [VIEW_TYPES.REQUIRES_COMPONENT]: `A component is a higher level grouping of objects/attributes; components may require other components (e.g. an entity table in a RDB may "require" another entity table via mandatory foreign key)`,
}
