import * as React from 'react'
import { mount } from 'enzyme'
import sinon from 'sinon'
import StaticQueryWrapper from '../../../lib/containers/StaticQueryWrapper'
import CardContainer from '../../../lib/containers/CardContainer'
import { SynapseConstants } from '../../../lib'
import syn16787123Json from '../../../mocks/syn16787123.json'

describe('it renders without crashing', () => {
  const SynapseClient = require('../../../lib/utils/SynapseClient')
  SynapseClient.getQueryTableResults = jest.fn(() =>  Promise.resolve(syn16787123Json))

  it('renders using json', async () => {
    const tree = await mount(
        <StaticQueryWrapper
            token={'1'}
            json={syn16787123Json}
        >
            <CardContainer
                hasMoreData={false}
                type={SynapseConstants.AMP_CONSORTIUM}
            />
        </StaticQueryWrapper>
    )
    expect(tree).toBeDefined()
    expect(tree.find(CardContainer)).toHaveLength(1)
  })

  it('renders making an api call', async () => {
    const spy = sinon.spy(StaticQueryWrapper.prototype, 'getData')
    const tree = await mount(
            <StaticQueryWrapper
                token={'1'}
                sql={'SELECT * FROM TEST'}
            >
                <CardContainer
                    hasMoreData={false}
                    type={SynapseConstants.AMP_CONSORTIUM}
                />
            </StaticQueryWrapper>
        )
    expect(tree).toBeDefined()
    expect(tree.find(CardContainer)).toHaveLength(1)
    expect(spy.calledOnce).toBeTruthy()
  })
})
