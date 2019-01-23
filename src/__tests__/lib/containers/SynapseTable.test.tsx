import * as React from 'react'
import { mount, shallow } from 'enzyme'
import SynapseTable from '../../../lib/containers/SynapseTable'
import { mockData, mockRequest } from '../../../mocks'
import QueryWrapper from '../../../lib/containers/QueryWrapper'

describe('basic functionality', () => {
  let SynapseClient
  const synapseId = 'syn5604373'

  beforeAll(() => {
    SynapseClient = require('../../../lib/utils/SynapseClient')
    SynapseClient.getQueryTableResults = jest.fn(() => Promise.resolve(mockData))
  })

  it('renders without crashing', async () => {
    const wrapper = shallow(
      <QueryWrapper
        facetName={'name'}
        initQueryRequest={mockRequest}
        rgbIndex={0}
      >
        <SynapseTable
          synapseId={synapseId}
          title={''}
        />
      </QueryWrapper>
      )
    expect(wrapper).toBeDefined()
    expect(wrapper.find(SynapseTable)).toHaveLength(1)
  })
})
