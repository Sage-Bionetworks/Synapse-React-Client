import * as React from 'react'
import { mount } from 'enzyme'
import {
  QueryFilterProps,
  QueryFilter,
} from '../../../../../lib/containers/widgets/query-filter/QueryFilter'
import { QueryResultBundle } from '../../../../../lib/utils/synapseTypes'

import _ from 'lodash-es'

import mockQueryResponseData from '../../../../../mocks/mockQueryResponseData.json'
import {
  QueryWrapperContextProvider,
  QueryWrapperContextType,
} from '../../../../../lib/containers/QueryWrapper'
import { SynapseContextProvider } from '../../../../../lib/utils/SynapseContext'
import { MOCK_CONTEXT_VALUE } from '../../../../../mocks/MockSynapseContext'
import { act } from 'react-dom/test-utils'

const lastQueryRequestResult = {
  partMask: 53,
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: 'syn16787123',
  query: {
    sql: 'SELECT * FROM syn21450294',
    selectedFacets: [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
        columnName: 'Make',
        facetValues: ['Honda', 'Chevy'],
      },
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
        columnName: 'Year',
        min: 1997,
        max: 1999,
      },
    ],
    limit: 25,
    offset: 0,
  },
}

const mockExecuteQueryRequest = jest.fn(_selectedFacets => null)
const mockGetQueryRequest = jest.fn(() => _.cloneDeep(lastQueryRequestResult))

function createTestProps(overrides?: QueryFilterProps): QueryFilterProps {
  return {
    ...overrides,
  }
}

const defaultQueryWrapperContext: Partial<QueryWrapperContextType> = {
  data: mockQueryResponseData as QueryResultBundle,
  getLastQueryRequest: mockGetQueryRequest,
  executeQueryRequest: mockExecuteQueryRequest,
  isLoadingNewBundle: false,
  topLevelControlsState: {
    showColumnFilter: true,
    showFacetFilter: true,
    showFacetVisualization: true,
    showSearchBar: false,
    showDownloadConfirmation: false,
    showColumnSelectDropdown: false,
  },
}

let props: QueryFilterProps

function init(overrides?: QueryFilterProps) {
  jest.clearAllMocks()
  props = createTestProps(overrides)
  return mount(<QueryFilter {...props} />, {
    wrappingComponent: ({ synapseContext, queryWrapperContext, children }) => {
      return (
        <SynapseContextProvider synapseContext={synapseContext}>
          <QueryWrapperContextProvider
            queryWrapperContext={queryWrapperContext}
          >
            {children}
          </QueryWrapperContextProvider>
        </SynapseContextProvider>
      )
    },
    wrappingComponentProps: {
      synapseContext: MOCK_CONTEXT_VALUE,
      queryWrapperContext: defaultQueryWrapperContext,
    },
  })
}

describe('initialization', () => {
  it('should initiate selected items correctly', async () => {
    const wrapper = init()
    const enumFacets = mockQueryResponseData.facets.filter(
      facet => facet.facetType === 'enumeration',
    )
    const rangeFacets = mockQueryResponseData.facets.filter(
      facet => facet.facetType === 'range',
    )
    expect(wrapper.find('EnumFacetFilter')).toHaveLength(enumFacets.length)
    expect(wrapper.find('RangeFacetFilter')).toHaveLength(rangeFacets.length)
  })

  it('should only expand the first three collapsible facets', async () => {
    const wrapper = init()

    const facets = wrapper.children()
    facets.forEach((facet, index) => {
      if (index === 0) return // title
      if (index > 0 && index < 4) {
        expect(facet.childAt(0).props().collapsed).toEqual(false)
      } else {
        expect(facet.childAt(0).props().collapsed).toEqual(true)
      }
    })
  })

  it('should respect facetsToFilter', async () => {
    // set facetsToFilter to make the component only show a filter for Year (a range type facet) and not Make (a values/enum type)
    const wrapper = init({ facetsToFilter: ['Year'] })
    expect(wrapper.find('EnumFacetFilter').exists()).toBeFalsy()
    expect(wrapper.find('RangeFacetFilter').exists()).toBeTruthy()
  })
})

describe('handling child component callbacks', () => {
  it('should propagate enum update correctly', async () => {
    const wrapper = init()

    const expectedResult = [
      {
        columnName: 'Make',
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
        facetValues: ['Honda', 'Chevy', 'Ford'],
      },
      {
        columnName: 'Year',
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
        max: 1999,
        min: 1997,
      },
    ]

    const enumWrapper = wrapper.find('EnumFacetFilter').at(0)
    act(() => {
      enumWrapper.props()['onChange']({ Ford: true })
    })
    const expected = _.cloneDeep(lastQueryRequestResult)
    expected.query = { ...expected.query, selectedFacets: expectedResult }
    expect(mockExecuteQueryRequest).toHaveBeenCalledWith(expected)
  })

  it('should propagate enum clear correctly', async () => {
    const wrapper = init()

    const expectedResult = [
      {
        columnName: 'Year',
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
        max: 1999,
        min: 1997,
      },
    ]
    const enumWrapper = wrapper.find('EnumFacetFilter').at(0)
    act(() => {
      enumWrapper.props()['onClear']()
    })
    const expected = _.cloneDeep(lastQueryRequestResult)
    expected.query = { ...expected.query, selectedFacets: expectedResult }
    expect(mockExecuteQueryRequest).toHaveBeenCalledWith(expected)
  })

  it('should propagate range correctly', async () => {
    const wrapper = init()

    const expectedResult = [
      {
        columnName: 'Make',
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
        facetValues: ['Honda', 'Chevy'],
      },
      {
        columnName: 'Year',
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
        max: '1998',
        min: '1997',
      },
    ]
    const enumWrapper = wrapper.find('RangeFacetFilter').at(0)
    act(() => {
      enumWrapper.props()['onChange'](['1997', '1998'])
    })
    const expected = _.cloneDeep(lastQueryRequestResult)
    expected.query = { ...expected.query, selectedFacets: expectedResult }
    expect(mockExecuteQueryRequest).toHaveBeenCalledWith(expected)
  })
})
