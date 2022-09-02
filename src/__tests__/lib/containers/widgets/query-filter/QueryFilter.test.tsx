import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import _ from 'lodash-es'
import * as React from 'react'
import { act } from '@testing-library/react'
import {
  QueryContextProvider,
  QueryContextType,
} from '../../../../../lib/containers/QueryContext'
import {
  QueryVisualizationContextProvider,
  QueryVisualizationContextType,
} from '../../../../../lib/containers/QueryVisualizationWrapper'
import {
  QueryFilter,
  QueryFilterProps,
} from '../../../../../lib/containers/widgets/query-filter/QueryFilter'
import { SynapseContextProvider } from '../../../../../lib/utils/SynapseContext'
import { QueryResultBundle } from '../../../../../lib/utils/synapseTypes'
import mockQueryResponseData from '../../../../../mocks/mockQueryResponseData.json'
import { MOCK_CONTEXT_VALUE } from '../../../../../mocks/MockSynapseContext'

let capturedOnChange: Function | undefined
let capturedOnClear: Function | undefined

const captureHandlers = async (facetFilterElement: HTMLElement) => {
  await userEvent.click(facetFilterElement)
}

const MockFacetFilter = props => {
  return (
    <div
      data-testid={props.testid}
      data-collapsed={props.collapsed}
      onClick={() => {
        // There's no good way to capture passed callbacks passed to a component when the same mock could appear multiple times on one page.
        // So we'll capture the callbacks via a click handler.
        capturedOnChange = props.onChange
        capturedOnClear = props.onClear
      }}
    ></div>
  )
}

jest.mock(
  '../../../../../lib/containers/widgets/query-filter/EnumFacetFilter',
  () => ({
    EnumFacetFilter: jest.fn(props => (
      <MockFacetFilter {...props} testid="EnumFacetFilter" />
    )),
  }),
)

jest.mock(
  '../../../../../lib/containers/widgets/query-filter/RangeFacetFilter',
  () => ({
    RangeFacetFilter: jest.fn(props => (
      <MockFacetFilter {...props} testid="RangeFacetFilter" />
    )),
  }),
)

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

const defaultQueryContext: Partial<QueryContextType> = {
  data: mockQueryResponseData as QueryResultBundle,
  getLastQueryRequest: mockGetQueryRequest,
  executeQueryRequest: mockExecuteQueryRequest,
  isLoadingNewBundle: false,
}

const defaultQueryVisualizationContext: Partial<QueryVisualizationContextType> =
  {
    topLevelControlsState: {
      showColumnFilter: true,
      showFacetFilter: true,
      showFacetVisualization: true,
      showSearchBar: false,
      showDownloadConfirmation: false,
      showColumnSelectDropdown: false,
      showSqlEditor: false,
    },
  }

let props: QueryFilterProps
function init(overrides?: QueryFilterProps) {
  jest.clearAllMocks()
  props = createTestProps(overrides)
  return render(<QueryFilter {...props} />, {
    wrapper: ({ children }) => {
      return (
        <SynapseContextProvider synapseContext={MOCK_CONTEXT_VALUE}>
          <QueryContextProvider queryContext={defaultQueryContext}>
            <QueryVisualizationContextProvider
              queryVisualizationContext={defaultQueryVisualizationContext}
            >
              {children}
            </QueryVisualizationContextProvider>
          </QueryContextProvider>
        </SynapseContextProvider>
      )
    },
  })
}

describe('QueryFilter tests', () => {
  it('should initiate selected items correctly', () => {
    init()
    const enumFacets = mockQueryResponseData.facets.filter(
      facet => facet.facetType === 'enumeration',
    )
    const rangeFacets = mockQueryResponseData.facets.filter(
      facet => facet.facetType === 'range',
    )
    expect(screen.getAllByTestId('EnumFacetFilter')).toHaveLength(
      enumFacets.length,
    )
    expect(screen.getAllByTestId('RangeFacetFilter')).toHaveLength(
      rangeFacets.length,
    )
  })

  it('should only expand the first three collapsible facets', () => {
    init()
    const facetFilters = screen.getAllByTestId(/(Enum|Range)FacetFilter/)
    expect(facetFilters).toHaveLength(mockQueryResponseData.facets.length)
    facetFilters.forEach((facet, index) => {
      if (index < 3) {
        expect(facet.getAttribute('data-collapsed')).toBe('false')
      } else {
        expect(facet.getAttribute('data-collapsed')).toBe('true')
      }
    })
  })

  it('should respect facetsToFilter', () => {
    // set facetsToFilter to make the component only show a filter for Year (a range type facet) and not Make (a values/enum type)
    init({ facetsToFilter: ['Year'] })
    expect(screen.queryByTestId('EnumFacetFilter')).not.toBeInTheDocument()
    expect(screen.queryByTestId('RangeFacetFilter')).toBeInTheDocument()
  })

  describe('handling child component callbacks', () => {
    it('should propagate enum update correctly', async () => {
      init()

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
      const enumFacetFilter = screen.getAllByTestId('EnumFacetFilter')[0]
      await captureHandlers(enumFacetFilter)
      act(() => {
        capturedOnChange!({ Ford: true })
      })
      const expected = _.cloneDeep(lastQueryRequestResult)
      expected.query = { ...expected.query, selectedFacets: expectedResult }
      expect(mockExecuteQueryRequest).toHaveBeenCalledWith(expected)
    })

    it('should propagate enum clear correctly', async () => {
      init()

      const expectedResult = [
        {
          columnName: 'Year',
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
          max: 1999,
          min: 1997,
        },
      ]

      const enumFacetFilter = screen.getAllByTestId('EnumFacetFilter')[0]
      await captureHandlers(enumFacetFilter)
      act(() => {
        capturedOnClear!()
      })
      const expected = _.cloneDeep(lastQueryRequestResult)
      expected.query = { ...expected.query, selectedFacets: expectedResult }
      expect(mockExecuteQueryRequest).toHaveBeenCalledWith(expected)
    })

    it('should propagate range correctly', async () => {
      init()

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
      const rangeFacetFilter = screen.getAllByTestId('RangeFacetFilter')[0]
      await captureHandlers(rangeFacetFilter)
      act(() => {
        capturedOnChange!(['1997', '1998'])
      })
      const expected = _.cloneDeep(lastQueryRequestResult)
      expected.query = { ...expected.query, selectedFacets: expectedResult }
      expect(mockExecuteQueryRequest).toHaveBeenCalledWith(expected)
    })
  })
})
