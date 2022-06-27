import FacetNav, {
  FacetNavProps,
} from '../../../../../lib/containers/widgets/facet-nav/FacetNav'
import * as React from 'react'
import { cloneDeep } from 'lodash-es'
import { render, screen, waitFor } from '@testing-library/react'
import {
  QueryResultBundle,
  QueryBundleRequest,
} from '../../../../../lib/utils/synapseTypes'
import testData from '../../../../../mocks/mockQueryResponseDataWithManyEnumFacets.json'
import { SynapseConstants } from '../../../../../lib'
import userEvent from '@testing-library/user-event'
import { SynapseTestContext } from '../../../../../mocks/MockSynapseContext'
import {
  QueryContextProvider,
  QueryContextType,
} from '../../../../../lib/containers/QueryContext'
import {
  QueryVisualizationContextProvider,
  QueryVisualizationContextType,
} from '../../../../../lib/containers/QueryVisualizationWrapper'

const lastQueryRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
  entityId: '123',
  query: {
    sql: '',
    limit: 25,
    offset: 0,
  },
}
const mockGetLastQueryRequest = jest.fn(() => lastQueryRequest)

const defaultQueryContext: Partial<QueryContextType> = {
  isLoadingNewBundle: false,
  getLastQueryRequest: mockGetLastQueryRequest,
  data: testData as QueryResultBundle,
}

const defaultQueryVisualizationContext: Partial<QueryVisualizationContextType> =
  {
    topLevelControlsState: {
      showFacetVisualization: true,
      showFacetFilter: true,
      showColumnFilter: true,
      showSearchBar: true,
      showDownloadConfirmation: false,
      showColumnSelectDropdown: false,
    },
  }

function getButtonOnFacet(
  text: string,
  facetIndex: number = 0,
): HTMLElement | undefined {
  const itemList = screen.getAllByLabelText(text, { exact: false })
  if (itemList ? [facetIndex] : undefined) {
    return itemList[facetIndex] as HTMLElement
  } else {
    return undefined
  }
}

function init(
  props?: FacetNavProps,
  queryContextProps?: Partial<QueryContextType>,
  queryVisualizationContextProps?: Partial<QueryVisualizationContextType>,
) {
  render(
    <QueryContextProvider
      queryContext={{
        ...defaultQueryContext,
        ...queryContextProps,
      }}
    >
      <QueryVisualizationContextProvider
        queryVisualizationContext={{
          ...defaultQueryVisualizationContext,
          ...queryVisualizationContextProps,
        }}
      >
        <FacetNav {...props} />
      </QueryVisualizationContextProvider>
    </QueryContextProvider>,
    {
      wrapper: SynapseTestContext,
    },
  )
}

describe('facets display hide/show', () => {
  it("should display 2 facets with 'show more' button", async () => {
    init()
    expect(screen.getAllByRole('graphics-document').length).toBe(2)
    screen.getByRole('button', { name: 'View All Charts' })
  })

  it('shows all facet plots when show more is clicked', async () => {
    init()

    const showMoreButton = screen.getByRole('button', {
      name: 'View All Charts',
    })

    userEvent.click(showMoreButton)

    const expectedLength = defaultQueryContext.data?.facets?.filter(
      facet => facet.facetType === 'enumeration',
    ).length

    expect((await screen.findAllByRole('graphics-document')).length).toBe(
      expectedLength,
    )

    expect(() => screen.getByText('View All Charts')).toThrowError()
  })

  it('if there are only 2 facets show more button should not exist', async () => {
    const data = cloneDeep(defaultQueryContext.data)
    data!.facets = data?.facets?.splice(0, 2)
    init(undefined, {
      data: data,
    })
    expect(() => screen.getByText('View All Charts')).toThrowError()
  })

  it("should only show specified facets if 'facetsToPlot' are set", async () => {
    init({
      facetsToPlot: ['Make', 'Model'],
    })

    // Only two plots are shown and the button is hidden
    expect(screen.getAllByRole('graphics-document').length).toBe(2)
    expect(() => screen.getByText('View All Charts')).toThrowError()
  })

  it('hiding facet should hide it from facet grid', async () => {
    init()

    expect(screen.getAllByRole('graphics-document').length).toBe(2)

    const closeFacetPlotButton = getButtonOnFacet('Hide graph', 0)!
    userEvent.click(closeFacetPlotButton)

    await waitFor(() => {
      expect(screen.getAllByRole('graphics-document').length).toBe(1)
    })
  })

  it('expanding facet should additionally show the facet in a modal', async () => {
    init()
    expect(screen.getAllByRole('graphics-document').length).toBe(2)

    expect(() => screen.getByRole('dialog')).toThrowError()
    const expandButton = getButtonOnFacet('expand', 1)!
    userEvent.click(expandButton)

    screen.getByRole('dialog')
    expect(screen.getAllByRole('graphics-document').length).toBe(1)

    // Close the modal
    userEvent.click(screen.getByRole('button', { name: 'Close' }))
    expect(screen.getAllByRole('graphics-document').length).toBe(2)
  })
})
