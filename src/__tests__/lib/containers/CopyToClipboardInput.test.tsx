import CopyToClipboardInput, {
  CopyToClipboardInputProps,
} from '../../../lib/containers/CopyToClipboardInput'
import { mount, ReactWrapper } from 'enzyme'
import * as React from 'react'
import { act } from 'react-dom/test-utils'

const createMountedComponent = (props: CopyToClipboardInputProps) => {
  const wrapper = mount<React.FunctionComponent<CopyToClipboardInputProps>>(
    <CopyToClipboardInput {...props} />,
  )

  return { wrapper }
}

const resolveAllPending = async (
  wrapper: ReactWrapper<
    React.FunctionComponent<CopyToClipboardInputProps>,
    any,
    React.Component<{}, {}, any>
  >,
) => {
  await act(
    async (): Promise<any> => {
      await Promise.resolve(wrapper)
      await new Promise(resolve => setImmediate(resolve))
      wrapper.update()
      return wrapper
    },
  )
}

describe('basic functionality', () => {
  const props = {
    value: 'some value to be copied',
    inputWidth: '500px',
  }

  it('copies to clipboard when icon is clicked', async () => {
    document.execCommand = jest.fn()
    const { wrapper } = createMountedComponent(props)
    await resolveAllPending(wrapper)
    wrapper.find('svg').simulate('click')
    await resolveAllPending(wrapper)
    expect(document.execCommand).toHaveBeenCalledWith('copy')
  })

  it('copies to clipboard when input field is clicked', async () => {
    document.execCommand = jest.fn()
    const { wrapper } = createMountedComponent(props)
    await resolveAllPending(wrapper)
    wrapper.find('input').simulate('click')
    await resolveAllPending(wrapper)
    expect(document.execCommand).toHaveBeenCalledWith('copy')
  })
})
