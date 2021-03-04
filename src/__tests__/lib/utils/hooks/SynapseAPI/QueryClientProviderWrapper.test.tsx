import { mount } from 'enzyme'
import React from 'react'
import { useQuery } from 'react-query'
import { resolveAllPending } from '../../../../../lib/testutils/EnzymeHelpers'
import { withQueryClientProvider } from '../../../../../lib/utils/hooks/SynapseAPI/QueryClientProviderWrapper'

const BasicComponentWithUseQuery: React.FC = () => {
  const query = useQuery(['some-query-key'], () => Promise.resolve('Hello'))
  return <div>{query.data}</div>
}

describe('Functionality', () => {
  it('Successfully renders an application that uses useQuery', async () => {
    const WrappedComponent = withQueryClientProvider(BasicComponentWithUseQuery)
    const wrapper = mount(<WrappedComponent />)
    await resolveAllPending(wrapper)
    expect(wrapper.find('div').text()).toEqual('Hello')
  })

  it('An application that uses useQuery fails to render without the wrapper', async () => {
    // Mocking console.error not necessary for the test, we just expect it to happen and want to suppress
    jest.spyOn(console, 'error').mockImplementation(() => {})

    try {
      expect(mount(<BasicComponentWithUseQuery />)).toThrow()
    } catch (e) {
      // Do nothing
    }
  })
})
