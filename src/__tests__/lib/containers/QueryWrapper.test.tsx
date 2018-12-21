import * as React from 'react'
import { shallow } from 'enzyme'
import QueryWrapper from '../../../lib/containers/QueryWrapper'
import { mockData, mockRequest } from '../../../JSON_test_data'

describe('basic functionality', () => {
  let SynapseClient

  beforeAll(() => {
    SynapseClient = require('../../../lib/utils/SynapseClient')
    SynapseClient.getQueryTableResults = jest.fn(() => Promise.resolve(mockData))
  })

  it('make init query request', async () => {
    const wrapper = await shallow(
            <QueryWrapper
                initQueryRequest={mockRequest}
                token={''}
                facetName={'name'}
            />)
    expect(wrapper.find('div')).toHaveLength(2)
    mockRequest.query.selectedFacets = [
      {
        columnName: 'name',
        concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
        facetValues: ['a']
      }
    ]
    const wrapperState = wrapper.state() as any
    expect(wrapperState.lastQueryRequest).toEqual(mockRequest)
    expect(wrapperState.data).toEqual(mockData)
  })
})
