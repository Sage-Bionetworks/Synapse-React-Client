import * as React from 'react'
import { shallow } from 'enzyme'
import QueryWrapper from '../../../lib/containers/QueryWrapper'
import SynapseTable from '../../../lib/containers/SynapseTable'
import { mockData, mockRequest } from '../../../mocks'

describe('basic functionality', () => {
  let SynapseClient
  let getLastQueryRequestMock
  beforeAll(() => {
    SynapseClient = require('../../../lib/utils/SynapseClient')
    SynapseClient.getQueryTableResults = jest.fn(() => Promise.resolve(mockData))
  })

  it('make init query request', async () => {
    const wrapper = await shallow(
      <QueryWrapper
        initQueryRequest={mockRequest}
        facetName={'name'}
        token={''}
        rgbIndex={0}
      >
        <SynapseTable synapseId={''} title={''} />
      </QueryWrapper>)

    mockRequest.query.selectedFacets = [
      {
        columnName: 'name',
        concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
        facetValues: ['a']
      }
    ]
    const wrapperState = wrapper.state() as any
    expect(wrapper.find(SynapseTable)).toHaveLength(1)
    expect(wrapperState.lastQueryRequest).toEqual(mockRequest)
    expect(wrapperState.data).toEqual(mockData)
  })

  it('renders a query table', async () => {
    getLastQueryRequestMock = jest.fn(() => { return mockRequest })
    const testRenderer = await shallow(
      <SynapseTable
        data={mockData}
        synapseId={''}
        title={''}
        getLastQueryRequest={getLastQueryRequestMock}
      />
    )
    expect(testRenderer).toBeDefined()
  })

})
