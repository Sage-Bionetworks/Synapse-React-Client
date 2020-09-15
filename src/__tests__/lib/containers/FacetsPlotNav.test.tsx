import * as React from 'react'
import { shallow } from 'enzyme'
import FacetsPlotNav, {
  FacetsPlotNavProps,
  Plot,
} from '../../../lib/containers/FacetsPlotNav'
import syn16787123Json from '../../../mocks/syn16787123.json'
import { QueryWrapperChildProps } from '../../../lib/containers/QueryWrapper'
import { QueryResultBundle } from '../../../lib/utils/synapseTypes/'
import { SynapseConstants } from '../../../lib'

const createShallowComponent = (
  props: FacetsPlotNavProps & QueryWrapperChildProps,
) => {
  const wrapper = shallow(<FacetsPlotNav {...props} />)
  const instance = wrapper.instance() as FacetsPlotNav
  return { wrapper, instance }
}

describe('it performs basic functionality', () => {
  const facetsToPlot = ['tumorType', 'projectStatus']
  const castData = syn16787123Json as QueryResultBundle
  /*
    Looking at the data the facet values for tumorType and their
    respective counts are:
      - Unannotated (3)
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
      - Unannotated (3)
      - JMML (1)
      - Plexiform Neurofibroma | MPNST (1)
      - Plexiform Neurofibroma | MPNST | Cutaneous Neurofibroma (1)
      - Schwannoma (1)
      - Schwannoma | Meningioma (1)
      - SMN (1)
  */
  const lastQueryRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: {
      sql: 'SELECT * FROM syn16787123',
      limit: 25,
      offset: 0,
      selectedFacets: [
        {
          columnName: 'projectStatus',
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          facetValues: ['Active', 'Completed'],
        },
        {
          columnName: 'tumorType',
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
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
            'SMN',
          ],
        },
      ],
    },
  }
  const updateParentState = jest.fn()
  const executeInitialQueryRequest = jest.fn()
  const executeQueryRequest = jest.fn()
  const getLastQueryRequest = jest.fn(() => lastQueryRequest)
  const unitDescription = 'types'
  // setup tests stubs
  const props = {
    facetsToPlot,
    unitDescription,
    getLastQueryRequest,
    data: castData,
    isAllFilterSelectedForFacet: {},
    synapseId: 'syn16787123',
    loadingScreen: <div />,
    isChecked: [],
    chartSelectionIndex: 0,
    updateParentState,
    executeInitialQueryRequest,
    executeQueryRequest,
  } as FacetsPlotNavProps & QueryWrapperChildProps

  it('renders without crashing', () => {
    const { wrapper } = createShallowComponent(props)
    expect(wrapper).toBeDefined()
  })

  it('renders the charts correctly, and has expected plot data', () => {
    let { wrapper, instance } = createShallowComponent(props)
    expect(wrapper).toBeDefined()
    let plotData: any[] = instance.extractPlotDataArray(props.data!)
    expect(plotData).toHaveLength(facetsToPlot.length)

    expect(plotData[0].name).toEqual('projectStatus')
    expect(plotData[0].domain).toEqual({ row: 0, column: 0 })
    // verify second subplot data is accurate
    expect(plotData[1].name).toEqual('tumorType')
    expect(plotData[1].values).toEqual([3, 12, 1, 4, 6, 28, 1, 1, 1, 1, 1])
    expect(plotData[1].labels).toEqual([
      'Unannotated',
      'Cutaneous Neurofibroma',
      'JMML',
      'Low Grade Glioma',
      'MPNST',
      'Plexiform Neurofibroma',
      'Plexiform Neurofibroma | MPNST',
      'Plexiform Neurofibroma | MPNST | Cutaneous Neurofibroma',
      'Schwannoma',
      'Schwannoma | Meningioma',
      'SMN',
    ])
    expect(plotData[1].domain).toEqual({ row: 0, column: 1 })
    expect(wrapper.find(Plot)).toHaveLength(1)
    expect(wrapper.find('.SRC-loadingContainer')).toHaveLength(0)
  })

  it('click does not cause error', async () => {
    let { instance } = createShallowComponent(props)
    let event = {
      event: {}, // MouseEvent
      points: [
        {
          //plot point data
          pointNumber: 0,
          data: {
            name: 'tumorType',
            facetEnumerationValues: [
              'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
            ],
          },
        },
      ],
    }
    instance.handleClick(event)
  })

  it('data not ready shows loading UI', () => {
    props.data = undefined
    const { wrapper } = createShallowComponent(props)
    expect(wrapper).toBeDefined()
    expect(wrapper.find('.SRC-loadingContainer')).toHaveLength(1)
    expect(wrapper.find(Plot)).toHaveLength(0)
  })
})
