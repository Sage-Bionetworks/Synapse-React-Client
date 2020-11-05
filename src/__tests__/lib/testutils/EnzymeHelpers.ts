import { act } from '@testing-library/react'
import { ReactWrapper } from 'enzyme'
import { ClassAttributes } from 'react'

/**
 * Resolve pending promises in an enzyme mounted component. Particularly useful when you need to test
 * something depending on useEffect (which requires the mount API, see https://github.com/enzymejs/enzyme/issues/2086)
 */
export async function resolveAllPending(
  wrapper: ReactWrapper<
    React.FunctionComponent,
    any,
    React.Component<{}, {}, any>
  >,
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
