
export enum StepStateEnum {
    TODO,
    PROGRESS,
    COMPLETED,
    EXCLUDED,
    ERROR
  }
  

export type Step = {
    id: string;
    title: string;
    order: number;
    state: StepStateEnum,
    rules: any[],
    default: string,
    disabled?: boolean,
    final?: boolean,
    description?: string,
    copy? : string,
    static?: boolean,
    child?: boolean,
    children?: string[]
  }

  export enum NavActionEnum {
    PREVIOUS,
    NEXT,
    NAV,
    SAVE,
    SUBMIT,
    NONE,
  }

  export enum StatusEnum {
    PROGRESS,
    ERROR,
    SUCCESS,
    PROGRESS2,
    ERROR_CRITICAL,
    }


export interface SummaryFormat {
  screen: Step,
  label: string,
  value: string,
}
  