import * as React from 'react'
import { mount } from 'enzyme'
import { mockData } from '../../../mocks'
import SynapseTableCardView from '../../../lib/containers/SynapseTableCardView'
import { Study } from '../../../lib/containers/row_renderers'
import { SynapseConstants } from '../../../lib'
import syn16859448Json from '../../../mocks/syn16859448.json'

describe('it renders without failing', () => {
  let SynapseClient
  beforeAll(() => {
    SynapseClient = require('../../../lib/utils/SynapseClient')
    SynapseClient.getQueryTableResults = jest.fn(() =>
      Promise.resolve(syn16859448Json)
    )
  })

  it('renders a study card', () => {
    const tree = mount(
      <SynapseTableCardView data={mockData} type={SynapseConstants.STUDY} />
    )
    expect(tree).toBeDefined()
    expect(tree.find(SynapseTableCardView)).toHaveLength(1)
    expect(tree.find(Study)).toHaveLength(1)
  })
})
