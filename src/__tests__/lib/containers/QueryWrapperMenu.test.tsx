import * as React from 'react'
import { shallow, mount } from 'enzyme'
import { mockData }   from '../../../mocks/'
import QueryWrapperMenu from '../../../lib/containers/QueryWrapperMenu'
import QueryWrapper from '../../../lib/containers/QueryWrapper'
import StackedBarChart from '../../../lib/containers/StackedBarChart'
import { Facets } from '../../../lib/containers/Facets'
import SynapseTableCardView from '../../../lib/containers/SynapseTableCardView'
import SynapseTable from '../../../lib/containers/SynapseTable'
import { SynapseConstants } from '../../../lib/utils'

describe('it renders with basic functionality', () => {
  let SynapseClient:any
  const sql: string = 'SELECT * FROM syn5604373'
  const facetName : string = 'name'
  const synapseId : string = 'syn5604373'
  const token: string = ''

  beforeAll(
    () =>  {
      SynapseClient = require('../../../lib/utils/SynapseClient')
      SynapseClient.getQueryTableResults = jest.fn(() => Promise.resolve(mockData))
    }
  )

  it('renders without crashing', () => {
    const tree = shallow(
        <QueryWrapperMenu
          menuConfig={[{ sql, facetName, synapseId }]}
          token={token}
          rgbIndex={3}
        />
    )
    expect(tree).toBeDefined()
  })

  it('renders a bar chart, table, and facets', async () => {
    const tree = await mount(
        <QueryWrapperMenu
            menuConfig={[{ sql, facetName, synapseId, title: 'title' }]}
            token={token}
            rgbIndex={3}
        />
    )
    expect(tree).toBeDefined()
    expect(tree.find(QueryWrapper)).toHaveLength(1)
    expect(tree.find(StackedBarChart)).toHaveLength(1)
    expect(tree.find(Facets)).toHaveLength(1)
    expect(tree.find(SynapseTable)).toHaveLength(1)
  })

  it('renders a bar chart, cards, and facets', async () => {
    const tree = await mount(
      <QueryWrapperMenu
          menuConfig={[{ sql, facetName, synapseId }]}
          type={SynapseConstants.STUDY}
          token={token}
          rgbIndex={3}
      />
    )
    expect(tree).toBeDefined()
    expect(tree.find(QueryWrapper)).toHaveLength(1)
    expect(tree.find(StackedBarChart)).toHaveLength(1)
    expect(tree.find(SynapseTableCardView)).toHaveLength(1)
    expect(tree.find(Facets)).toHaveLength(1)
  })
})
