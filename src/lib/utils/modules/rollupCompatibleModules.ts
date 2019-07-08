// This file is used for any import modules that have to be
// rewritten due rollup import nuances

// @ts-ignore
import * as cloneDeepProxy from 'lodash/cloneDeep'
// wonky syntax explained here - https://github.com/rollup/rollup/issues/670#issuecomment-281139978
export function cloneDeep <T>(x : T): T {
  const fn = ((cloneDeepProxy as any).default) || cloneDeepProxy
  return fn(x)
}
// https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}
