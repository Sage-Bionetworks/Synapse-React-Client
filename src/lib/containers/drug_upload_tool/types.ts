export enum StepStateEnum {
  TODO,
  PROGRESS,
  COMPLETED,
  EXCLUDED,
  ERROR,
}

export type Step = {
  id: string
  title: string
  order: number
  state: StepStateEnum
  inProgress: boolean
  rules: any[]
  default: string
  excluded?: boolean
  final?: boolean
  description?: string
  copy?: string
  static?: boolean
  child?: boolean
  children?: string[]
}

export enum NavActionEnum {
  PREVIOUS,
  NEXT,
  GO_TO_STEP,
  SAVE,
  SUBMIT,
  VALIDATE,
  NONE,
}

export enum StatusEnum {
  PROGRESS,
  ERROR,
  SAVE_SUCCESS,
  SUBMIT_SUCCESS,
  ERROR_CRITICAL,
}

export interface SummaryFormat {
  screen: Step
  label: string
  value: string
}

export type FormSchema = {
  properties?: any
  definitions?: any
}
