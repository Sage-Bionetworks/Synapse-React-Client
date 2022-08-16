import { act, render, waitFor } from '@testing-library/react'
import * as React from 'react'
import {
  PaginatedQueryContextType,
  usePaginatedQueryContext,
} from '../../../lib/containers/QueryContext'
import {
  QueryVisualizationContextType,
  QueryVisualizationWrapper,
  useQueryVisualizationContext,
} from '../../../lib/containers/QueryVisualizationWrapper'
import {
  QueryWrapper,
  QueryWrapperProps,
} from '../../../lib/containers/QueryWrapper'
import { createWrapper } from '../../../lib/testutils/TestingLibraryUtils'
import { SynapseConstants } from '../../../lib/utils/'
import {
  ColumnType,
  QueryBundleRequest,
} from '../../../lib/utils/synapseTypes/'
import { MOCK_TABLE_ENTITY_ID } from '../../../mocks/entity/mockEntity'
import queryResponse from '../../../mocks/mockQueryResponseDataWithManyEnumFacets'
import { getHandlersForTableQuery } from '../../../mocks/msw/handlers/tableQueryHandlers'
import { server } from '../../../mocks/msw/server'

const onQueryContextReceived = jest.fn<void, [PaginatedQueryContextType]>()
const onContextReceived = jest.fn<void, [QueryVisualizationContextType]>()

function QueryVizWrapperConsumer(props: { mockFn?: jest.Mock }) {
  const queryContext = usePaginatedQueryContext()
  onQueryContextReceived(queryContext)
  const context = useQueryVisualizationContext()
  const fn = props.mockFn ?? onContextReceived
  fn(context)
  return null
}

function TestComponent(
  props: Partial<QueryWrapperProps & { mockFn: jest.Mock }> = {},
) {
  return (
    <QueryWrapper initQueryRequest={initialQueryRequest} {...props}>
      <QueryVisualizationWrapper>
        <QueryVizWrapperConsumer mockFn={props.mockFn} />
      </QueryVisualizationWrapper>
    </QueryWrapper>
  )
}

const initialQueryRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  partMask:
    SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
    SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
    SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
    SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
  entityId: MOCK_TABLE_ENTITY_ID,
  query: {
    sql: `SELECT * FROM ${MOCK_TABLE_ENTITY_ID}`,
    limit: 25,
    offset: 0,
  },
}

describe('QueryVisualizationWrapper', () => {
  beforeAll(() => server.listen())
  beforeEach(() => server.use(...getHandlersForTableQuery(queryResponse)))
  afterEach(() => {
    server.restoreHandlers()
    jest.resetAllMocks()
  })
  afterAll(() => server.close())

  test('Initialize selectColumns', async () => {
    render(<TestComponent />, { wrapper: createWrapper() })

    await waitFor(() => {
      const data = onQueryContextReceived.mock.calls.at(-1)![0].data
      expect(data).toBeDefined()
      expect(data!.selectColumns!.length).toBeGreaterThan(0)
    })

    await waitFor(() =>
      expect(onContextReceived).toHaveBeenCalledWith(
        expect.objectContaining({
          columnsToShowInTable: queryResponse.selectColumns!.map(
            col => col.name,
          ),
        }),
      ),
    )
  })

  test('Reset column visibility on sql change', async () => {
    render(<TestComponent />, { wrapper: createWrapper() })

    let firstSetOfVisibleColumns
    await waitFor(() => {
      expect(onContextReceived).toHaveBeenLastCalledWith(
        expect.objectContaining({
          columnsToShowInTable: queryResponse.selectColumns!.map(
            col => col.name,
          ),
        }),
      )
      firstSetOfVisibleColumns =
        onContextReceived.mock.calls.at(-1)![0].columnsToShowInTable
    })

    server.use(
      ...getHandlersForTableQuery({
        ...queryResponse,
        selectColumns: [
          {
            id: '123',
            name: 'someOtherColumns',
            columnType: ColumnType.STRING,
          },
        ],
      }),
    )

    act(() => {
      onQueryContextReceived.mock.calls[0][0].executeQueryRequest({
        ...initialQueryRequest,
        query: {
          ...initialQueryRequest.query,
          sql: 'SELECT some, other, sql, query FROM syn123',
        },
      })
    })

    let secondSetOfVisibleColumns
    await waitFor(() => {
      const data = onQueryContextReceived.mock.calls.at(-1)![0].data
      expect(data?.selectColumns).toEqual([
        {
          id: '123',
          name: 'someOtherColumns',
          columnType: ColumnType.STRING,
        },
      ])
      expect(onContextReceived).toHaveBeenLastCalledWith(
        expect.objectContaining({
          columnsToShowInTable: ['someOtherColumns'],
        }),
      )
      secondSetOfVisibleColumns =
        onContextReceived.mock.calls.at(-1)![0].columnsToShowInTable
    })

    // The select columns should have changed
    expect(firstSetOfVisibleColumns).not.toEqual(secondSetOfVisibleColumns)
  })

  test('Do not reset when selectColumns deep equals the previous value', async () => {
    render(<TestComponent />, { wrapper: createWrapper() })

    let firstSetOfVisibleColumns
    await waitFor(() => {
      const data = onQueryContextReceived.mock.calls.at(-1)![0].data
      expect(data).toBeDefined()
      expect(onContextReceived).toHaveBeenLastCalledWith(
        expect.objectContaining({
          columnsToShowInTable: queryResponse.selectColumns!.map(
            col => col.name,
          ),
        }),
      )
      firstSetOfVisibleColumns =
        onContextReceived.mock.calls.at(-1)![0].columnsToShowInTable
    })

    const prevData = onQueryContextReceived.mock.calls.at(-1)![0].data

    // The results are different (e.g. on another page of data), but the selectColumns do not change
    server.use(
      ...getHandlersForTableQuery({
        ...queryResponse,
        queryResult: {
          ...queryResponse.queryResult!,
          queryResults: {
            ...queryResponse.queryResult!.queryResults,
            rows: [
              {
                rowId: 5,
                values: [
                  '2018',
                  'Honda',
                  'CR-V',
                  'windows, doors, gps, car play',
                  '8799',
                  null,
                  '1575305363000',
                  '273978',
                  null,
                ],
                versionNumber: 1,
              },
            ],
          },
        },
      }),
    )

    // e.g. navigate to the next page of data:
    act(() => {
      onQueryContextReceived.mock.calls.at(-1)![0].goToPage(2)
    })

    let secondSetOfVisibleColumns

    // Wait for the data to update.
    await waitFor(() => {
      const data = onQueryContextReceived.mock.calls.at(-1)![0].data
      expect(data).toBeDefined()
      expect(data?.queryResult?.queryResults.rows).not.toEqual(
        prevData?.queryResult?.queryResults.rows,
      )

      expect(data!.queryResult!.queryResults.rows).toHaveLength(1)
      secondSetOfVisibleColumns =
        onContextReceived.mock.calls.at(-1)![0].columnsToShowInTable
    })

    // The array of visible columns should not have changed, and should have referential equality
    expect(firstSetOfVisibleColumns).toBe(secondSetOfVisibleColumns)
  })
})
