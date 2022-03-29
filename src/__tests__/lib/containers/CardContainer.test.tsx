import { mount } from 'enzyme'
import * as React from 'react'
import { SynapseConstants } from '../../../lib'
import CardContainer, {
  CardContainerProps,
} from '../../../lib/containers/CardContainer'
import {
  QueryVisualizationContextProvider,
  QueryVisualizationContextType,
} from '../../../lib/containers/QueryVisualizationWrapper'
import {
  QueryContextProvider,
  QueryContextType,
} from '../../../lib/containers/QueryWrapper'
import TotalQueryResults from '../../../lib/containers/TotalQueryResults'
import {
  QueryBundleRequest,
  QueryResultBundle,
} from '../../../lib/utils/synapseTypes/'
import { SynapseTestContext } from '../../../mocks/MockSynapseContext'
import syn16787123Json from '../../../mocks/query/syn16787123'

const mountComponent = (
  props: CardContainerProps,
  queryContext: QueryContextType,
) => {
  const defaultQueryVisualizationContext: Partial<QueryVisualizationContextType> =
    {}

  const wrapper = mount(
    <QueryContextProvider queryContext={queryContext}>
      <QueryVisualizationContextProvider
        queryVisualizationContext={defaultQueryVisualizationContext}
      >
        <CardContainer {...props} />
      </QueryVisualizationContextProvider>
    </QueryContextProvider>,
    {
      wrappingComponent: SynapseTestContext,
    },
  )
  const instance = wrapper.instance()
  return { wrapper, instance }
}

describe('it performs all functionality', () => {
  // for our purposes its okay to return the same data again
  const getNextPageOfData = jest.fn(() => {})
  const sql = 'SELECT * FROM syn16787123'
  const lastQueryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: 'syn16787123',
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
      SynapseConstants.BUNDLE_MASK_QUERY_COUNT,
    query: {
      sql,
      limit: 25,
      offset: 0,
    },
  }
  const getLastQueryRequest = jest.fn(() => lastQueryRequest)

  const unitDescription = 'studies'
  const type = SynapseConstants.STUDY
  // cast the data to ignore ts warning
  const data = syn16787123Json as QueryResultBundle
  const props = {
    unitDescription,
    type,
  }

  const queryContext: Partial<QueryContextType> = {
    data,
    hasNextPage: true,
    getLastQueryRequest: getLastQueryRequest,
    appendNextPageToResults: getNextPageOfData,
  }

  const queryVisualizationContext: Partial<QueryVisualizationContextType> = {}

  it('renders without crashing', () => {
    const tree = mountComponent(props, queryContext)
    expect(tree).toBeDefined()
  })

  it('Renders total and RowContainer correctly with a faceted view', () => {
    // inject filter prop
    const { wrapper } = mountComponent(props, queryContext)
    expect(wrapper.find('Button').text()).toEqual('View More')
    expect(wrapper.find(TotalQueryResults)).toHaveLength(1)
    expect(wrapper.find('Button').text()).toEqual('View More')
  })

  it('Renders with a title', () => {
    const title = 'HelloWorld'
    const { wrapper } = mountComponent({ ...props, title }, queryContext)
    expect(wrapper.find('h2.SRC-card-overview-title').text()).toEqual(title)
  })

  it('handleViewMore works', () => {
    const { wrapper } = mountComponent(props, queryContext)
    // go through calling handle view more
    wrapper.find('Button').simulate('click')
    expect(getLastQueryRequest).toHaveBeenCalled()
    expect(getNextPageOfData).toHaveBeenCalled()
  })

  it('show ViewMore does not render when hasNextPage is false', () => {
    const queryContextWithHasNextPageFalse = {
      ...queryContext,
      hasNextPage: false,
    }
    const { wrapper } = mountComponent(props, queryContextWithHasNextPageFalse)
    expect(wrapper.find('Button')).toHaveLength(0)
  })
})
