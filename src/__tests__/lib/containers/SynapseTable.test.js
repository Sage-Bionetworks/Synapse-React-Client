import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import QueryWrapper from '../../../lib/containers/QueryWrapper'
import SynapseTable from '../../../lib/containers/SynapseTable';
import {mockData, mockRequest} from './../../../JSON_test_data'

configure({ adapter: new Adapter() });

describe('basic functionality', () => {
    let SynapseClient
    let getLastQueryRequestMock
    beforeAll(() => {
        SynapseClient = require('../../../lib/utils/SynapseClient')
        SynapseClient.getQueryTableResults = jest.fn(() => Promise.resolve(mockData))
    })
    
    it ('make init query request', async () => {
        const wrapper = await shallow(
            <QueryWrapper
                initQueryRequest = {mockRequest}
                filter={"name"}
                RGB={[0,0,0]}
                token={""}
                sql={""}>
                <SynapseTable>
                </SynapseTable>
            </QueryWrapper>)
        
        mockRequest.query.selectedFacets = [
            {
                columnName: "name",
                concreteType: "org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",
                facetValues: [undefined]
            }
        ]
        expect(wrapper.find(SynapseTable)).toHaveLength(1)
        expect(wrapper.state().lastQueryRequest).toEqual(mockRequest)
        expect(wrapper.state().data).toEqual(mockData)
    })

    it ('renders a query table', async () => {
        getLastQueryRequestMock = jest.fn(() => {return mockRequest})
        const testRenderer = await shallow(
                                    <SynapseTable
                                        data={mockData}
                                        getLastQueryRequest={getLastQueryRequestMock}>
                                    </SynapseTable>
                                )
        expect(testRenderer).toBeDefined()
    })

})