import { DATA_TYPES, VIEW_TYPES } from './../constants'

export interface BaseEntity {
  '@id': string
}

export interface SchemaContext {
  [key: string]: string
}

export interface SchemaData extends BaseEntity {
  '@type': string[] | string
  'rdfs:comment'?: string | null
  'rdfs:label': string
  'rdfs:subClassOf'?: BaseEntity | BaseEntity[]
  'sms:displayName'?: string
  'sms:required'?: string
  'sms:validationRules'?: string[]
  'sms:requiresDependency'?: BaseEntity[]
  'schema:rangeIncludes'?: BaseEntity | BaseEntity[]
  'schema:domainIncludes'?: BaseEntity | BaseEntity[]
  'sms:requiresComponent'?: BaseEntity | BaseEntity[]
}

export interface SchemaJson extends BaseEntity {
  '@context': SchemaContext
  '@graph': SchemaData[]
}

export interface IdMap {
  [id: string]: string
}

export interface DataSchemaData {
  // @id
  [DATA_TYPES.ID]: string

  // @type
  [DATA_TYPES.TYPE]: string[]

  // rdfs:label
  [DATA_TYPES.LABEL]: string

  // rdfs:comment
  [DATA_TYPES.COMMENT]: string

  // sms:displayName [note: substitute label if not present]
  [DATA_TYPES.DISPLAY_NAME]: string

  // rdfs:subClassOf [note: source can be object or array]
  [VIEW_TYPES.SUBCLASS_OF]: string[]

  // sms:required
  [DATA_TYPES.REQUIRED]: boolean

  // sms:requiresDependency
  [VIEW_TYPES.REQUIRES_DEPENDENCY]: string[]

  // Built from the context and the id.
  [DATA_TYPES.SOURCE]: string

  // sms:validationRules
  [DATA_TYPES.VALIDATION_RULES]: string[]

  // schema:rangeIncludes [note: source can be object or array]
  [VIEW_TYPES.RANGE_INCLUDES]: string[]

  // schema:requiresComponent [note: source can be object or array]
  [VIEW_TYPES.REQUIRES_COMPONENT]: string[]

  // schema:domainIncludes [note: source can be object or array]
  [VIEW_TYPES.DOMAIN_INCLUDES]: string[]
}

export interface DataSchemaState {
  data: DataSchemaData[]
  schemaJson: SchemaJson
}

export interface DepStateData {
  [parentId: string]: string[]
}

export type DepState = {
  [key in VIEW_TYPES]: DepStateData
}

export interface RefState {
  [key: string]: HTMLDivElement | null
}

export interface ElementObj {
  id: string
  el: HTMLDivElement | null
}

export interface OpenModalDictionary {
  [key: string]: boolean
}

export interface GraphNodeData extends DataSchemaData {
  onNodeClick: (
    id: string,
  ) => (event: React.MouseEvent<SVGCircleElement, MouseEvent>) => void
  viewType: VIEW_TYPES
  nodeColor: string
}

export interface GraphNodeLinkData {
  source: string | GraphNodeData
  target: string | GraphNodeData
  viewType: VIEW_TYPES
  linkColor: string
}
export interface GraphNetworkData {
  nodes: Array<GraphNodeData>
  links: Array<GraphNodeLinkData>
}
