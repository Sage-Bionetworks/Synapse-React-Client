import * as React from 'react'
import { mount } from 'enzyme'
import sinon from 'sinon'
import StaticQueryWrapper from '../../../lib/containers/StaticQueryWrapper'
import SynapseTableCardView from '../../../lib/containers/SynapseTableCardView'
import { SynapseConstants } from '../../../lib'
import syn16859448Json from '../../../mocks/syn16859448.json'

describe('it renders without crashing', () => {
  let SynapseClient
  beforeAll(() => {
    SynapseClient = require('../../../lib/utils/SynapseClient')
    SynapseClient.getQueryTableResults = jest.fn(() =>  Promise.resolve(syn16859448Json))
  })

  it('renders using json', async () => {
    const tree = await mount(
        <StaticQueryWrapper
            token={'1'}
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

  it('renders making an api call', async () => {
    const spy = sinon.spy(StaticQueryWrapper.prototype, 'getData')
    const tree = await mount(
            <StaticQueryWrapper
                token={'1'}
                sql={'SELECT * FROM TEST'}
            >
                <SynapseTableCardView
                    type={SynapseConstants.AMP_CONSORTIUM}
                />
            </StaticQueryWrapper>
        )
    expect(tree).toBeDefined()
    expect(tree.find(SynapseTableCardView)).toHaveLength(1)
    expect(spy.calledOnce).toBeTruthy()
  })
})
