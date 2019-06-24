// The utility of Omit is telling child components that they can have a guarentee of the properties
// coming from a parent component
// Omit taken from https://github.com/Microsoft/TypeScript/issues/28339#issuecomment-467220238
export type Omit<T, K extends keyof T> = T extends any ? Pick<T, Exclude<keyof T, K>> : never
