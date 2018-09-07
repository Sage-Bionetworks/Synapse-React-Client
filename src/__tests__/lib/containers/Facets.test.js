import React from 'react';
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Facets from 'lib/containers/Facets';

configure({ adapter: new Adapter() });

describe("it renders a facet without crashing", () => {
    let SynapseClient

    beforeAll(() => {
        SynapseClient = require("lib/utils/SynapseClient")
        let facetValues = {facets: [ 
            {
                columnName:"createdBy",
                facetType:"enumeration",
                facetValues: ["syn1", "syn2","syn3"]
            }
         ]}
         SynapseClient.getFullQueryTableResults = jest.fn(() => Promise.resolve((facetValues)))
    })

    it('renders correctly', async () => {
        const tree = await shallow( 
            <Facets sql={`SELECT * FROM syn15661198`}>
            </Facets>
        )
        expect(tree).toBeDefined()
    });
})