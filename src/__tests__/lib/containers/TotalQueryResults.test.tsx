import { mount } from 'enzyme'
import * as React from 'react'
import TotalQueryResults, {
  TotalQueryResultsProps,
} from '../../../lib/containers/TotalQueryResults'
import {
  QueryResultBundle,
  RowSet,
  QueryBundleRequest,
  ColumnType,
} from '../../../lib/utils/synapseTypes/'
import { SynapseConstants } from 'lib'
import { act } from 'react-dom/test-utils'

const createMountedComponent = async (props: TotalQueryResultsProps) => {
  const wrapper = await mount(<TotalQueryResults {...props} />)
  return { wrapper }
}

const actions = async (
  wrapper: { update: () => void },
  _actions: () => void,
) => {
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 0))
    _actions()
    wrapper.update()
  })
}

describe('it works', () => {
  const mockQueryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: '',
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS,
    query: {
      sql: '',
    },
  }
  const mockQueryReturn: QueryResultBundle = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
    queryCount: 98,
    columnModels: [
      {
        id: '111488',
        name: 'studyStatus',
        columnType: ColumnType.STRING,
        maximumSize: 50,
        facetType: 'enumeration',
      },
      {
        id: '111489',
        name: 'dataStatus',
        columnType: ColumnType.STRING,
        maximumSize: 20,
        facetType: 'enumeration',
      },
    ],
    facets: [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
        columnName: 'studyStatus',
        facetType: 'enumeration',
        // @ts-ignore
        facetValues: [
          { value: 'Active', count: 55, isSelected: false },
          { value: 'Completed', count: 28, isSelected: true },
        ],
      },
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
        columnName: 'dataStatus',
        facetType: 'enumeration',
        // @ts-ignore
        facetValues: [
          { value: 'Published', count: 11, isSelected: false },
          { value: 'None', count: 9, isSelected: false },
          { value: 'Under Embargo', count: 6, isSelected: false },
          { value: 'Partially Released', count: 2, isSelected: false },
        ],
      },
    ],
    queryResult: {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
      queryResults: {} as RowSet,
    },
  }

  const lastQueryRequest = mockQueryRequest
  const SynapseClient = require('../../../lib/utils/SynapseClient')
  const mockGetQueryTableResultsFn = jest
    .fn()
    .mockResolvedValue(mockQueryReturn)
  SynapseClient.getQueryTableResults = mockGetQueryTableResultsFn
  const displayText = 'Displaying'
  const unitDescription = 'units'
  const props: TotalQueryResultsProps = {
    unitDescription,
    isLoading: false,
    token: '',
    lastQueryRequest,
    frontText: 'Displaying',
  }
  it('renders without crashing', async () => {
    const { wrapper } = await createMountedComponent(props)
    await actions(wrapper, () => {
      expect(wrapper).toBeDefined()
    })
  })

  it('calls synapse with query count part mask', async () => {
    mockGetQueryTableResultsFn.mockClear()
    const { wrapper } = await createMountedComponent(props)
    await actions(wrapper, () => {
      expect(wrapper.find('.SRC-boldText').text()).toContain(
        `${displayText} ${mockQueryReturn.queryCount} ${unitDescription}`,
      )
      expect(mockGetQueryTableResultsFn).toHaveBeenCalledWith(
        expect.objectContaining({
          partMask:
            SynapseConstants.BUNDLE_MASK_QUERY_COUNT |
            SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
            SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS,
        }),
        '',
      )
    })
  })
})
