import React from 'react'
import { act } from '@testing-library/react'
import { ReactWrapper, ShallowWrapper } from 'enzyme'

/**
 * Resolve pending promises in an enzyme mounted component. Particularly useful when you need to test
 * something depending on useEffect (which requires the mount API, see https://github.com/enzymejs/enzyme/issues/2086)
 */
export async function resolveAllPending(
  wrapper: ReactWrapper<any> | ShallowWrapper<any>,
) {
  await act(
    async (): Promise<any> => {
      await Promise.resolve(wrapper)
      await new Promise(resolve => setImmediate(resolve))
      wrapper.update()
      return wrapper
    },
  )
}
