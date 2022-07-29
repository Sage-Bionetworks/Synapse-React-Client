import * as React from 'react'
import FacetNavPanel, {
  FacetNavPanelProps,
  truncate,
} from '../../../../../lib/containers/widgets/facet-nav/FacetNavPanel'
import { render, screen } from '@testing-library/react'
import { FacetColumnResultValues } from '../../../../../lib/utils/synapseTypes'
import testData from '../../../../../mocks/mockQueryResponseDataWithManyEnumFacets'
import { SynapseConstants } from '../../../../../lib/utils'
import {
  QueryContextProvider,
  QueryContextType,
} from '../../../../../lib/containers/QueryContext'
import { QueryVisualizationContextProvider } from '../../../../../lib/containers/QueryVisualizationWrapper'
import { createWrapper } from '../../../../../lib/testutils/TestingLibraryUtils'

const mockApplyCallback = jest.fn(() => null)
const mockHideCallback = jest.fn(() => null)
const mockSetPlotTypeCallback = jest.fn(() => null)

const stringFacetValues: FacetColumnResultValues = {
  facetType: 'enumeration',
  columnName: 'Make',
  concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
  facetValues: [
    { value: 'Honda', count: 2, isSelected: false },
    { value: 'Chevy', count: 1, isSelected: true },
    {
      value: SynapseConstants.VALUE_NOT_SET,
      count: 1,
      isSelected: false,
    },
  ],
}

function createTestProps(overrides?: FacetNavPanelProps): FacetNavPanelProps {
  const defaultProps: FacetNavPanelProps = {
    applyChangesToGraphSlice: mockApplyCallback,
    applyChangesToFacetFilter: mockApplyCallback,
    index: 1,
    facetToPlot: stringFacetValues,
    onHide: mockHideCallback,
    plotType: 'PIE',
    onSetPlotType: mockSetPlotTypeCallback,
    isModalView: false,
  }
  return {
    ...defaultProps,
    ...overrides,
  }
}

const defaultQueryContext: Partial<QueryContextType> = {
  data: testData,
  getLastQueryRequest: () => ({}),
  isLoadingNewBundle: false,
}

let props: FacetNavPanelProps

function init(
  overrides?: FacetNavPanelProps,
  queryContextProps?: Partial<QueryContextType>,
) {
  props = createTestProps(overrides)
  return render(
    <QueryContextProvider
      queryContext={{
        ...defaultQueryContext,
        ...queryContextProps,
      }}
    >
      <QueryVisualizationContextProvider queryVisualizationContext={{}}>
        <FacetNavPanel {...props} />
      </QueryVisualizationContextProvider>
    </QueryContextProvider>,
    { wrapper: createWrapper() },
  )
}

describe('FacetNavPanel tests', () => {
  it('should initiate the panel with correct buttons and classes when not expanded', async () => {
    const { container } = init()
    await screen.findByRole('graphics-document')
    const panel = container.querySelectorAll<HTMLElement>('div.FacetNavPanel')
    expect(panel).toHaveLength(1)

    const buttons = container.querySelectorAll<HTMLElement>(
      'button > span > svg',
    )
    expect(buttons.length).toBe(3)
    expect(buttons[0].getAttribute('data-icon')).toBe('filter')
    expect(buttons[1].getAttribute('data-icon')).toBe('expand')
    expect(buttons[2].getAttribute('data-icon')).toBe('close')

    const panelBody = container.querySelectorAll('div.FacetNavPanel__body')
    expect(panelBody.length).toBe(1)
    const panelBody2 = container.querySelectorAll(
      'div.FacetNavPanel__body--expanded',
    )
    expect(panelBody2.length).toBe(0)
  })

  it('should initiate the panel with correct buttons and class when expanded', async () => {
    //when expanded the onCollapse callback is passed but onExpand is not
    const { container } = init({
      ...props,
      onSetPlotType: mockSetPlotTypeCallback,
      isModalView: true,
    })
    await screen.findByRole('graphics-document')
    const panel = container.querySelectorAll<HTMLElement>(
      'div.FacetNavPanel--expanded',
    )
    expect(panel).toHaveLength(1)

    const buttons = container.querySelectorAll<HTMLElement>(
      'div.SRC-labeled-dropdown',
    )
    expect(buttons.length).toBe(2)

    const panelBody = container.querySelectorAll('div.FacetNavPanel__body')
    expect(panelBody.length).toBe(0)
    const panelBody2 = container.querySelectorAll(
      'div.FacetNavPanel__body--expanded',
    )
    expect(panelBody2.length).toBe(1)
  })

  it('should truncate values', async () => {
    expect(truncate(undefined, 10)).toEqual(undefined)
    expect(truncate('', 0)).toEqual('')
    expect(truncate('', 5)).toEqual('')
    expect(truncate('123456789', 5)).toEqual('1234…')
    expect(truncate('12345', 5)).toEqual('12345')
  })
})
