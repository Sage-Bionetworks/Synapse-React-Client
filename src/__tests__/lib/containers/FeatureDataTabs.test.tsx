import * as React from 'react'
import { shallow } from 'enzyme'
import { QueryResultBundle } from 'lib/utils/synapseTypes/'
import syn16787123Json from '../../../mocks/syn16787123.json'
import FeaturedDataTabs, { FeaturedDataTabsProps } from '../../../lib/containers/home_page/featured-data/FeaturedDataTabs'

const SynapseClient = require('../../../lib/utils/SynapseClient')
const data = syn16787123Json as QueryResultBundle
const token: string = '123444'

const createShallowComponent = async (props: FeaturedDataTabsProps) => {
  const wrapper = shallow(<FeaturedDataTabs {...props} />)
  const instance = wrapper.instance()
  return { wrapper, instance }
}

describe('basic tests', () => {
  const props: FeaturedDataTabsProps = {
    rgbIndex: 0,
    token,
    exploreSql: 'select * from syn11346063',
    explorePagePath: '/Explore/Data',
    configs:
      [
        {
          title: 'Human Studies',
          icon: 'PERSON',
          exploreFacetColumnName: 'species',
          exploreFacetColumnValue: 'Human',
          plotsConfig: {
            configs: [{
              facetsToPlot:['dataType', 'assay'],
              selectFacetColumnName:'study',
              selectFacetColumnValue:'ROSMAP',                            
            },
            {
              facetsToPlot:['dataType', 'assay'],
              selectFacetColumnName:'study',
              selectFacetColumnValue:'MSBB',
            },]
          }
        }]
      }  

  beforeEach(() => {
    SynapseClient.getFullQueryTableResults = jest.fn(() =>
      Promise.resolve(data),
    )
  })

  it('displays plot', async () => {
    const { wrapper } = await createShallowComponent(props)
    expect(wrapper).toBeDefined()
    expect(wrapper.find(FeaturedDataTabs)).toBeDefined()
  })
})
