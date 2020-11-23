import { VIEW_TYPES } from './../constants'

export interface baseEntity {
  '@id': string
}

export interface SchemaContext {
  [key: string]: string
}

export interface SchemaData extends baseEntity {
  '@type'?: string[] | string
  'rdfs:comment'?: string
  'rdfs:label'?: string
  'rdfs:subClassOf'?: baseEntity | baseEntity[]
  'sms:displayName'?: string
  'sms:required'?: string
  'sms:validationRules'?: string[]
  'sms:requiresDependency'?: baseEntity[]
  'schema:rangeIncludes'?: baseEntity | baseEntity[]
  'schema:domainIncludes'?: baseEntity | baseEntity[]
  'sms:requiresComponent'?: baseEntity | baseEntity[]
}

export interface SchemaJson extends baseEntity {
  '@context': SchemaContext
  '@graph': SchemaData[]
}

export interface DataDictionaryData {
  //@id
  id: string

  //@type
  type: string[]

  //rdfs:label
  label: string

  //rdfs:comment
  description: string

  //sms:displayName [note: substitute label if not present]
  attribute: string

  //rdfs:subClassOf [note: source can be object or array]
  parentIds: string[]

  //sms:required
  required: boolean

  //sms:requiresDependency
  requiredDependencies: string[]

  // Built from the context and the id.
  source: string

  //sms:validationRules
  validationRules: string[]

  //schema:rangeIncludes [note: source can be object or array]
  validValues: string[]

  //schema:requiresComponent [note: source can be object or array]
  requiresComponent: string[]

  //schema:domainIncludes [note: source can be object or array]
  domainIncludes: string[]

  //[Calculated] number of children using this field
  numOfDependents: number
}

export interface DataDictionaryState {
  data: DataDictionaryData[]
  schemaJson: SchemaJson
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

export interface GraphNodeData extends DataDictionaryData {
  onNodeClick: (
    id: string,
  ) => (event: React.MouseEvent<SVGCircleElement, MouseEvent>) => void
  viewType: VIEW_TYPES
}

export interface GraphNodeLinkData {
  source: string
  target: string
  viewType: VIEW_TYPES
}
export interface GraphNetworkData {
  nodes: Array<GraphNodeData>
  links: Array<GraphNodeLinkData>
}
