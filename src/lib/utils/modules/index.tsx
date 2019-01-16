
// @ts-ignore
import * as cloneDeepProxy from 'lodash/cloneDeep'
const cloneDeep: (x :any) => any  = cloneDeepProxy

// @ts-ignore
import * as uuidv4Proxy from 'uuid/v4'
const uuidv4: () => any  = uuidv4Proxy

export { cloneDeep, uuidv4 }
export default { cloneDeep, uuidv4 }
