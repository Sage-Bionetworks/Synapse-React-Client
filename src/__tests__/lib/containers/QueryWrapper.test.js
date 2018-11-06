import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import QueryWrapper from '../../../lib/containers/QueryWrapper'
import {mockData, mockRequest} from '../../../JSON_test_data/'
configure({ adapter: new Adapter() });

describe('basic functionality', () => {
    let SynapseClient

    beforeAll(() => {
        SynapseClient = require('../../../lib/utils/SynapseClient')
        SynapseClient.getQueryTableResults = jest.fn(() => Promise.resolve(mockData))
    })
    
    it ('make init query request', async () => {
        const wrapper = await shallow(
            <QueryWrapper
                initQueryRequest = {mockRequest}
                token={""}
                filter={"name"}
                showMenu      
                RGB={[0,0,0]}
                >
            </QueryWrapper>)
        expect(wrapper.find("div")).toHaveLength(3)
        mockRequest.query.selectedFacets = [
            {
                columnName: "name",
                concreteType: "org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",
                facetValues: [undefined]
            }
        ]
        expect(wrapper.state().lastQueryRequest).toEqual(mockRequest)
        expect(wrapper.state().data).toEqual(mockData)
    })
})