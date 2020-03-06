import { mount } from 'enzyme'
import * as React from 'react'
import TotalQueryResults, {
  TotalQueryResultsProps,
} from '../../../lib/containers/TotalQueryResults'
import {
  QueryResultBundle,
  RowSet,
  QueryBundleRequest,
} from '../../../lib/utils/synapseTypes/'
import { SynapseConstants } from 'lib'

const createMountedComponent = async (props: TotalQueryResultsProps) => {
  const wrapper = await mount(<TotalQueryResults {...props} />)
  const instance = wrapper.instance()
  return { wrapper, instance }
}

describe('it works', () => {
  const mockQueryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: '',
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: {
      sql: '',
    },
  }
  const mockQueryReturn: QueryResultBundle = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
    queryCount: 98,
    queryResult: {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
      queryResults: {} as RowSet,
    },
  }
  const getLastQueryRequest = jest.fn().mockReturnValue(mockQueryRequest)
  const SynapseClient = require('../../../lib/utils/SynapseClient')
  const mockGetQueryTableResultsFn = jest.fn().mockResolvedValue(() => {
    return mockQueryReturn
  })
  SynapseClient.getQueryTableResults = mockGetQueryTableResultsFn
  const displayText = 'Displaying'
  const unitDescription = 'units'
  const props: TotalQueryResultsProps = {
    unitDescription,
    isLoading: false,
    token: '',
    getLastQueryRequest,
    frontText: 'Displaying',
  }
  it('renders without crashing', () => {
    const tree = createMountedComponent(props)
    expect(tree).toBeDefined()
  })

  // TODO: Fix this test
  it.skip('calls synapse with query count part mask', async () => {
    const { wrapper } = await createMountedComponent(props)
    expect(wrapper.find('.SRC-boldText').text()).toEqual(
      `${displayText} ${mockQueryReturn.queryCount} ${unitDescription} `,
    )
    expect(mockGetQueryTableResultsFn).toHaveBeenCalledWith(
      expect.objectContaining({
        partMask: SynapseConstants.BUNDLE_MASK_QUERY_COUNT,
      }),
    )
  })
})
