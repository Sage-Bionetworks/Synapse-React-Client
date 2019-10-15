import * as React from 'react'
import { shallow } from 'enzyme'
import
  StackedBarChart,
  {
    StackedBarChartProps,
    NEXT_CLICK,
    PREVIOUS_ITEM_CLICK,
  }
from '../../../lib/containers/StackedBarChart'
import syn16787123Json from '../../../mocks/syn16787123.json'
import { QueryWrapperChildProps } from '../../../lib/containers/QueryWrapper'
import { QueryResultBundle } from '../../../lib/utils/jsonResponses/Table/QueryResultBundle'
import { SynapseConstants } from '../../../lib'

const createShallowComponent = (props: StackedBarChartProps & QueryWrapperChildProps) => {
  const wrapper = shallow(
      <StackedBarChart
        {...props}
      />
    )
  const instance = wrapper.instance() as StackedBarChart
  return { wrapper, instance }
}

describe('it performs basic functionality', () => {

  const facet = 'tumorType'
  const castData = syn16787123Json as QueryResultBundle
  /*
    Looking at the data the facet values for tumorType and their
    respective counts are:
      - Not set (3)
      - Cutaneous Neurofibroma (12)
      - JMML (1)
      - Low Grade Glioma (4)
      - MPNST (6)
      - Plexiform Neurofibroma (28)
      - Plexiform Neurofibroma | MPNST (1)
      - Plexiform Neurofibroma | MPNST | Cutaneous Neurofibroma (1)
      - Schwannoma (1)
      - Schwannoma | Meningioma (1)
      - SMN (1)

    The chart displays this information in a sorted order, so it should render
    in this order:
      - Plexiform Neurofibroma (28)
      - Cutaneous Neurofibroma (12)
      - MPNST (6)
      - Low Grade Glioma (4)
      - Not set (3)
      - JMML (1)
      - Plexiform Neurofibroma | MPNST (1)
      - Plexiform Neurofibroma | MPNST | Cutaneous Neurofibroma (1)
      - Schwannoma (1)
      - Schwannoma | Meningioma (1)
      - SMN (1)
  */
  const facetValueWithMaxCount = 'Plexiform Neurofibroma'
  const lastQueryRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
    ,
    query: {
      sql: 'SELECT * FROM syn16787123',
      isConsistent: false,
      limit: 25,
      offset: 0,
      selectedFacets: [
        {
          columnName: 'projectStatus',
          concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          facetValues: [
            'Active',
            'Completed',
          ],
        },
        {
          columnName: 'tumorType',
          concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          facetValues: [
            'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
            'Cutaneous Neurofibroma',
            'JMML',
            'Low Grade Glioma',
            'MPNST',
            'Plexiform Neurofibroma',
            'Plexiform Neurofibroma | MPNST',
            'Plexiform Neurofibroma | MPNST | Cutaneous Neurofibroma',
            'Schwannoma',
            'Schwannoma | Meningioma',
            'SMN'
          ],
        }
      ]
    }
  }

  const getLastQueryRequest = jest.fn(() => lastQueryRequest)
  const unitDescription = 'types'
  // setup tests stubs
  const props = {
    facet,
    unitDescription,
    getLastQueryRequest,
    data: castData,
    isAllFilterSelectedForFacet: {},
    synapseId: 'syn16787123',
    loadingScreen: <div/>,
    isChecked: [],
    chartSelectionIndex: 0,
    updateParentState: jest.fn(() => {})
  } as StackedBarChartProps & QueryWrapperChildProps

  it('renders without crashing', () => {
    const { wrapper } = createShallowComponent(props)
    expect(wrapper).toBeDefined()
  })

  it('renders the bar chart correctly', () => {
    /*
      Overview:
      1. The data rendering the component has 11 facet values, so we
      expect there to be 11 slices.
      2. The text being displayed under the chart should be the
      first facet selection and it should have the correct unit
      description and count displayed
      3. There's a link that should be displayed only if link and linkText
      are set as props
    */
    let { wrapper } = createShallowComponent(props)
    expect(wrapper).toBeDefined()
    // 1.
    expect(wrapper.render().find('svg.SRC-hoverBox')).toHaveLength(11)
    // 2.
    expect(wrapper.find('span.SRC-text-title.SRC-filter-display').text()).toEqual('Tumor Type')
    expect(wrapper.find('span.SRC-facet-view').text()).toEqual(` ${facetValueWithMaxCount}`)
    expect(wrapper.find('#fileCount').text()).toEqual(`28 ${unitDescription}`)
    // shouldn't have a link unless link and linkText are specified
    expect(wrapper.find('.SRC-chart-link')).toHaveLength(0);
    ({ wrapper } = createShallowComponent({ ...props, link: 'mywebsite.com', linkText: 'Explore Data' }))
    expect(wrapper.find('.SRC-chart-link')).toHaveLength(1)
  })

  it('handles arrow click correctly', async () => {
    /*
      We test the handle arrow click as a static method
    */
    const { instance } = createShallowComponent(props)
    // cast and ignore, event doesn't get used in the method
    const mockedEvent = {} as React.MouseEvent
    // it wraps backwards
    expect(instance.handleArrowClick(PREVIOUS_ITEM_CLICK)(mockedEvent)).toEqual(10)
    // goes forward
    expect(instance.handleArrowClick(NEXT_CLICK)(mockedEvent)).toEqual(1)
  })

  it('handles componentDidUpdate correctly', async () => {
    /*
      Overview:
      We change the filter to project status, this filter
      has only two facet values:

      Active (35)
      Completed (24)

      So we expect the barchart to have two svgs and for the
      display text to show active and its count of 35

    */
    const { wrapper } = createShallowComponent(props)
    const filterUpdated = 'projectStatus'
    await wrapper.setProps({
      facet: filterUpdated
    })
    const facetValueWithMaxCountUpdated = 'Active'
    expect(wrapper.render().find('svg.SRC-hoverBox')).toHaveLength(2)
    expect(wrapper.find('span.SRC-text-title.SRC-filter-display').text()).toEqual('Project Status')
    expect(wrapper.find('span.SRC-facet-view').text()).toEqual(` ${facetValueWithMaxCountUpdated}`)
    expect(wrapper.find('#fileCount').text()).toEqual(`35 ${unitDescription}`)
  })

})
