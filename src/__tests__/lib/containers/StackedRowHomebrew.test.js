import React from 'react';
import {shallow, configure} from 'enzyme'
import StackedRowHomebrew from '../../../lib/containers/StackedRowHomebrew'
import {mockData} from '../../../JSON_test_data'

describe('it renders a chart without crashing', () => {

    it('renders a chart', async () => {
        const tree = await shallow(
            <StackedRowHomebrew
                data={mockData}             
                getLastQueryRequest={() => {return {query: {selectedFacets: {}}}}}
            ></StackedRowHomebrew>
        )
        expect(tree).toBeDefined()
    })

})