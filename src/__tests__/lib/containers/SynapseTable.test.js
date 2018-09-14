import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import QueryWrapper from 'lib/containers/QueryWrapper'
import SynapseTable from 'lib/containers/SynapseTable';

configure({ adapter: new Adapter() });

describe('basic functionality', () => {
    let SynapseClient
    
    beforeAll(() => {
        SynapseClient = require('lib/utils/SynapseClient')
        SynapseClient.getQueryTableResults = jest.fn(() => Promise.resolve({
            columnModels: [{
                columnType: "ENTITYID",
                name: "id",
                id: "2510"
            }],
            queryResult: {
                queryResults: {
                    rows: [{
                        rowId: "1",
                        values: ["syn5604373"]
                    }]
                }
            }
        }))
    })
    
    it ('make init query request', async () => {
        const wrapper = await shallow(
            <QueryWrapper
                initQueryRequest = {{}}
                token={""}
                sql={""}>
                <SynapseTable>
                </SynapseTable>
            </QueryWrapper>)
    
        expect(wrapper.find("table")).toHaveLength(1)
        expect(wrapper.state().lastQueryRequest).toEqual({})
        expect(wrapper.state().data).toEqual({data: "data"})
    })

})