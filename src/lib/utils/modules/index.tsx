
// @ts-ignore
import * as cloneDeepProxy from 'lodash/cloneDeep'
const cloneDeep: (x :any) => any  = cloneDeepProxy

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // tslint:disable-next-line
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  }
  )
}
export {
  cloneDeep,
  uuidv4,
}
export default {
  cloneDeep,
  uuidv4
}
