import * as React from 'react'
import FacetNavPanel, {
  FacetNavPanelOwnProps,
  truncate,
} from '../../../../../lib/containers/widgets/facet-nav/FacetNavPanel'
import { render } from '@testing-library/react'
import { FacetColumnResultValues } from '../../../../../lib/utils/synapseTypes'
import testData from '../../../../../mocks/mockQueryResponseDataWithManyEnumFacets.json'
import { SynapseConstants } from '../../../../../lib'
import { SynapseTestContext } from '../../../../../mocks/MockSynapseContext'

const mockApplyCallback = jest.fn(() => null)
const mockHideCallback = jest.fn(() => null)
const mockSetPlotTypeCallback = jest.fn(() => null)

const stringFacetValues: FacetColumnResultValues = {
  facetType: 'enumeration',
  columnName: 'Make',
  concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
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

function createTestProps(
  overrides?: FacetNavPanelOwnProps,
): FacetNavPanelOwnProps {
  const defaultProps: FacetNavPanelOwnProps = {
    applyChangesToGraphSlice: mockApplyCallback,
    applyChangesToFacetFilter: mockApplyCallback,
    index: 1,
    facetToPlot: stringFacetValues,
    onHide: mockHideCallback,
    plotType: 'PIE',
    onSetPlotType: mockSetPlotTypeCallback,
    lastQueryRequest: {} as any,
    isModalView: false,
  }
  return {
    ...defaultProps,
    ...overrides,
    // @ts-ignore
    data: testData,
  }
}

let container: HTMLElement
let props: FacetNavPanelOwnProps

function init(overrides?: FacetNavPanelOwnProps) {
  props = createTestProps(overrides)
  container = render(
    <SynapseTestContext>
      <FacetNavPanel {...props} />
    </SynapseTestContext>,
  ).container
}

describe('initialization', () => {
  it('should initiate the panel with correct buttons and classes when not expanded', async () => {
    init()
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
    init({
      ...props,
      onSetPlotType: mockSetPlotTypeCallback,
      isModalView: true,
    })
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
