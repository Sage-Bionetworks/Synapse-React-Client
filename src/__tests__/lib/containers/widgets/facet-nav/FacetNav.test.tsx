import FacetNav, {
  FacetNavProps,
} from '../../../../../lib/containers/widgets/facet-nav/FacetNav'
import * as React from 'react'
import * as _ from 'lodash-es'
import { render, fireEvent, act, screen } from '@testing-library/react'
import {
  QueryResultBundle,
  QueryBundleRequest,
} from '../../../../../lib/utils/synapseTypes'
import testData from '../../../../../mocks/mockQueryResponseDataWithManyEnumFacets.json'
import { SynapseConstants } from '../../../../../lib'

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

function createTestProps(overrides?: FacetNavProps): FacetNavProps {
  return {
    getLastQueryRequest: mockGetLastQueryRequest,
    data: testData as QueryResultBundle,
    ...overrides,
    topLevelControlsState: {
      showFacetVisualization: true,
      showFacetFilter: true,
      showColumnFilter: true,
      showSearchBar: true,
      showDownloadConfirmation: false,
      showColumnSelectDropdown: false,
    },
  }
}

function isHidden(element: Element | null): boolean {
  return !element || (element as HTMLElement).style.display === 'none'
}

function getButtonOnFacet(
  container: HTMLElement,
  dataIcon: string,
  facetIndex: number = 0,
): HTMLElement | undefined {
  const itemList = container.querySelectorAll(
    `.FacetNavPanel__title svg[data-icon=${dataIcon}]`,
  )
  if (itemList ? [facetIndex] : undefined) {
    return itemList[facetIndex] as HTMLElement
  } else {
    return undefined
  }
}

let container: HTMLElement
let props: FacetNavProps

function init(overrides?: FacetNavProps) {
  props = createTestProps(overrides)
  const { container: _container, ...others } = render(<FacetNav {...props} />)
  container = _container
  return others
}

beforeEach(() => init())

describe('facets display hide/show', () => {
  it("should display 3 facets with 'show more' button", async () => {
    const panel = container.querySelector<HTMLElement>('div.FacetNav')
    const expectedLength = props.data?.facets?.filter(
      facet => facet.facetType === 'enumeration',
    ).length
    expect(panel).not.toBeNull()
    expect(container.querySelector('.FacetNav__row')!.children.length).toBe(
      expectedLength,
    )
    expect(
      isHidden(container.querySelector('.FacetNav__row')!.children[1]),
    ).toBe(false)
    expect(
      isHidden(container.querySelector('.FacetNav__row')!.children[2]),
    ).toBe(true)
    expect(
      isHidden(container.querySelector('.FacetNav__row')!.children[3]),
    ).toBe(true)
    expect(
      container.querySelector('button.FacetNav__showMore')?.innerHTML,
    ).toBe('View All Charts')
  })

  it('when show more is clicked', async () => {
    //const panel = container.querySelector<HTMLElement>('div.FacetNav')
    const button = container.querySelector('button.FacetNav__showMore')
    act(() => {
      fireEvent.click(button!)
    })
    expect(
      isHidden(container.querySelector('.FacetNav__row')!.children[1]),
    ).toBe(false)
    expect(
      isHidden(container.querySelector('.FacetNav__row')!.children[2]),
    ).toBe(false)
    expect(
      isHidden(container.querySelector('.FacetNav__row')!.children[3]),
    ).toBe(false)
    expect(
      container.querySelector('button.FacetNav__showMore')?.innerHTML,
    ).toBe('Hide Charts')
    act(() => {
      fireEvent.click(button!)
    })
    expect(
      isHidden(container.querySelector('.FacetNav__row')!.children[1]),
    ).toBe(false)
    expect(
      isHidden(container.querySelector('.FacetNav__row')!.children[2]),
    ).toBe(true)
    expect(
      isHidden(container.querySelector('.FacetNav__row')!.children[3]),
    ).toBe(true)
    expect(
      container.querySelector('button.FacetNav__showMore')?.innerHTML,
    ).toBe('View All Charts')
  })

  it('if there are only 4 facets show more button should not exist', async () => {
    const data = _.cloneDeep(props.data)
    data!.facets = data?.facets?.splice(0, 3)
    init({
      ...props,
      data: data,
    })
    expect(isHidden(container.querySelector('button.FacetNav__showMore'))).toBe(
      true,
    )
  })
  it("should only show specified facets if 'facetsToPlot' are set", async () => {
    init({
      ...props,
      facetsToPlot: ['Make', 'Model'],
    })

    expect(container.querySelector('.FacetNav__row')!.children.length).toBe(2)
    expect(isHidden(container.querySelector('button.FacetNav__showMore'))).toBe(
      true,
    )
  })
  it('hiding facet should hide it from facet grid', async () => {
    init(props)
    const icon = getButtonOnFacet(container, 'close', 0)
    expect(
      isHidden(container.querySelector('.FacetNav__row')!.children[0]),
    ).toBe(false)
    act(() => {
      fireEvent.click(icon?.parentNode as HTMLElement)
    })
    expect(
      isHidden(container.querySelector('.FacetNav__row')!.children[0]),
    ).toBe(true)
  })

  it('expanding facet should additionally show the facet in a modal', async () => {
    init(props)

    expect(
      isHidden(container.querySelector('.FacetNav__row')!.children[1]),
    ).toBe(false)
    expect(() => screen.getByRole('dialog')).toThrowError()

    const icon = getButtonOnFacet(container, 'expand', 1)
    act(() => {
      fireEvent.click(icon?.parentNode as HTMLElement)
    })

    expect(
      isHidden(container.querySelector('.FacetNav__row')!.children[1]),
    ).toBe(false)

    expect(() => screen.getByRole('dialog')).not.toThrowError()
  })
})
