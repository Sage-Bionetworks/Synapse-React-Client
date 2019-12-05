// This file is used for any import modules that have to be
// rewritten due rollup import nuances

import * as cloneDeepProxy from 'lodash.clonedeep'

// wonky syntax explained here - https://github.com/rollup/rollup/issues/670#issuecomment-281139978
export function cloneDeep<T>(x: T): T {
  const fn = (cloneDeepProxy as any).default || cloneDeepProxy
  return fn(x)
}
