import React from 'react';
import {shallow} from 'enzyme'
import StackedRowHomebrew from '../../../lib/containers/StackedRowHomebrew'
import {mockData, mockRequest} from '../../../JSON_test_data'

describe('it renders a chart without crashing', () => {

    it('renders a chart', async () => {
        const tree = await shallow(
            <StackedRowHomebrew
                data={mockData}             
                getLastQueryRequest={() => {return mockRequest}}
                loadingScreen={<div/>}
                synapseId={""}
                unitDescription={""}
            ></StackedRowHomebrew>
        )
        expect(tree).toBeDefined()
    })

})