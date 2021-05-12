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

const defaultProps: FacetNavProps = {
  isLoading: false,
  getLastQueryRequest: mockGetLastQueryRequest,
  data: testData as QueryResultBundle,
  topLevelControlsState: {
    showFacetVisualization: true,
    showFacetFilter: true,
    showColumnFilter: true,
    showSearchBar: true,
    showDownloadConfirmation: false,
    showColumnSelectDropdown: false,
  },
}

function createTestProps(overrides?: FacetNavProps): FacetNavProps {
  return {
    ...defaultProps,
    ...overrides,
  }
}

function isHidden(element: Element | null): boolean {
  return !element || (element as HTMLElement).style.display === 'none'
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

async function init(overrides?: FacetNavProps) {
  const props = createTestProps(overrides)
  render(<FacetNav {...props} />)
  await waitFor(() => expect(() => screen.getByRole('list')).not.toThrowError())
}

describe('facets display hide/show', () => {
  it("should display 2 facets with 'show more' button", async () => {
    await init()
    expect(screen.getAllByRole('graphics-document').length).toBe(2)
    screen.getByRole('button', { name: 'View All Charts' })
  })

  it('shows all facet plots when show more is clicked', async () => {
    await init()
    const showMoreButton = screen.getByRole('button', {
      name: 'View All Charts',
    })
    userEvent.click(showMoreButton!)

    const expectedLength = defaultProps.data?.facets?.filter(
      facet => facet.facetType === 'enumeration',
    ).length

    await waitFor(() => {
      expect(screen.getAllByRole('graphics-document').length).toBe(
        expectedLength,
      )
    })

    expect(() =>
      screen.getByRole('button', { name: 'View All Charts' }),
    ).toThrowError()
  })

  it('if there are only 2 facets show more button should not exist', async () => {
    const data = cloneDeep(defaultProps.data)
    data!.facets = data?.facets?.splice(0, 2)
    await init({
      data: data,
    })
    expect(() =>
      screen.getByRole('button', { name: 'View All Charts' }),
    ).toThrowError()
  })

  it("should only show specified facets if 'facetsToPlot' are set", async () => {
    await init({
      facetsToPlot: ['Make', 'Model'],
    })

    // Only two plots are shown and the button is hidden
    expect(screen.getAllByRole('graphics-document').length).toBe(2)
    expect(() =>
      screen.getByRole('button', { name: 'View All Charts' }),
    ).toThrowError()
  })

  it('hiding facet should hide it from facet grid', async () => {
    await init()

    expect(screen.getAllByRole('graphics-document').length).toBe(2)

    const closeFacetPlotButton = getButtonOnFacet('Hide graph', 0)!
    userEvent.click(closeFacetPlotButton)

    await waitFor(() => {
      expect(screen.getAllByRole('graphics-document').length).toBe(1)
    })
  })

  it('expanding facet should additionally show the facet in a modal', async () => {
    await init()
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
