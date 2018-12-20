import React from 'react';
import {mount} from 'enzyme'
import StaticQueryWrapper from '../../../lib/containers/StaticQueryWrapper';
import SynapseTableCardView from '../../../lib/containers/SynapseTableCardView';
import { SynapseConstants } from '../../../lib';
import syn16859448Json from '../../../JSON_test_data/syn16859448.json'

describe('it renders without failing', () => {

    let SynapseClient
    beforeAll(() => {
        SynapseClient = require('../../../lib/utils/SynapseClient')   
        SynapseClient.getQueryTableResults = jest.fn(() =>  Promise.resolve(syn16859448Json))
    })


    it('renders the correct cards', () => {
        const tree = mount(
            <StaticQueryWrapper
                token={"1"}
                json={syn16859448Json}
            >
                <SynapseTableCardView
                    type={SynapseConstants.AMP_CONSORTIUM}
                />
            </StaticQueryWrapper>
        )
        expect(tree).toBeDefined()
        expect(tree.find(SynapseTableCardView)).toHaveLength(1)
    })


})