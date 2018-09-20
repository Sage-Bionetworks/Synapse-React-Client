import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import QueryWrapper from 'lib/containers/QueryWrapper'
configure({ adapter: new Adapter() });

describe('basic functionality', () => {
    let SynapseClient
    let data

    beforeAll(() => {
        SynapseClient = require('lib/utils/SynapseClient')
        data = {
            facets: [ 
                {
                    columnName:"createdBy",
                    facetType:"enumeration",
                    facetValues: ["syn1", "syn2","syn3"]
                }
            ]
        }
        SynapseClient.getQueryTableResults = jest.fn(() => Promise.resolve(data))
    })
    
    it ('make init query request', async () => {
        const wrapper = await shallow(
            <QueryWrapper
                initQueryRequest = {{}}
                token={""}
                sql={""}
                filter={""}
                >
            </QueryWrapper>)
    
        expect(wrapper.find("div")).toHaveLength(1)
        expect(wrapper.state().lastQueryRequest).toEqual({})
        expect(wrapper.state().data).toEqual(data)
    })
})