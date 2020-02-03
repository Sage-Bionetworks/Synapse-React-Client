export enum RestrictableObjectType {
  ENTITY = 'ENTITY',
  EVALUATION = 'EVALUATION',
  TEAM = 'TEAM',
}

export type RestrictableObjectDescriptor = {
  id: string
  type: RestrictableObjectType
}
