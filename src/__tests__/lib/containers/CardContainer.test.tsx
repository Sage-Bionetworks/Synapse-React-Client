import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
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
import { createWrapper } from '../../../lib/testutils/TestingLibraryUtils'
import {
  QueryBundleRequest,
  QueryResultBundle,
} from '../../../lib/utils/synapseTypes/'
import syn16787123Json from '../../../mocks/query/syn16787123'

const renderComponent = (
  props: CardContainerProps,
  queryContext: Partial<QueryContextType>,
) => {
  const defaultQueryVisualizationContext: Partial<QueryVisualizationContextType> =
    {}

  return render(
    <QueryContextProvider queryContext={queryContext}>
      <QueryVisualizationContextProvider
        queryVisualizationContext={defaultQueryVisualizationContext}
      >
        <CardContainer {...props} />
      </QueryVisualizationContextProvider>
    </QueryContextProvider>,
    {
      wrapper: createWrapper(),
    },
  )
}

describe('CardContainer tests', () => {
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
    const tree = renderComponent(props, queryContext)
    expect(tree).toBeDefined()
  })

  it('Renders total and RowContainer correctly with a faceted view', () => {
    // inject filter prop
    const { container } = renderComponent(props, queryContext)
    screen.getByRole('button', { name: 'View More' })
    expect(container.querySelector('.TotalQueryResults')).toBeDefined()
  })

  it('Renders with a title', () => {
    const title = 'HelloWorld'
    renderComponent({ ...props, title }, queryContext)

    screen.getByText(title)
  })

  it('handleViewMore works', () => {
    renderComponent(props, queryContext)
    // go through calling handle view more
    const viewMoreButton = screen.getByRole('button', { name: 'View More' })
    userEvent.click(viewMoreButton)
    expect(getLastQueryRequest).toHaveBeenCalled()
    expect(getNextPageOfData).toHaveBeenCalled()
  })

  it('show ViewMore does not render when hasNextPage is false', () => {
    const queryContextWithHasNextPageFalse = {
      ...queryContext,
      hasNextPage: false,
    }
    renderComponent(props, queryContextWithHasNextPageFalse)
    expect(
      screen.queryByRole('button', { name: 'View More' }),
    ).not.toBeInTheDocument()
  })
})
