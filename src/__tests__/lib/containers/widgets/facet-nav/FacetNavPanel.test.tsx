import * as React from 'react'
import FacetNavPanel, {
  FacetNavPanelOwnProps,
} from '../../../../../lib/containers/widgets/facet-nav/FacetNavPanel'
import { render} from '@testing-library/react'
import {

  FacetColumnResultValues,
} from 'lib/utils/synapseTypes'

const mockApplyCallback = jest.fn(() => null)
const mockHideCallback = jest.fn(() => null)
const mockExpandCallback = jest.fn(() => null)

const stringFacetValues: FacetColumnResultValues = {
  facetType: 'enumeration',
  columnName: 'Make',
  concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
  facetValues: [
    { value: 'Honda', count: 2, isSelected: false },
    { value: 'Chevy', count: 1, isSelected: true },
    {
      value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
      count: 1,
      isSelected: false,
    },
  ],
}

function createTestProps(overrides?: FacetNavPanelOwnProps): FacetNavPanelOwnProps {
  return {
    applyChanges: mockApplyCallback,
    index: 1,
    loadingScreen: <div className="loading"></div>,
    facetToPlot: stringFacetValues,
    onHide: mockHideCallback,
    onExpand: mockExpandCallback,

    ...overrides,
  }
}

let container: HTMLElement
let props: FacetNavPanelOwnProps

function init(overrides?: FacetNavPanelOwnProps) {
  props = createTestProps(overrides)
  container = render(<FacetNavPanel {...props} />).container
}

beforeEach(() => init())

describe('initialization', () => {
  it('should initiate the panel with correct buttons and classes when not expanded', async () => {
    const panel = container.querySelectorAll<HTMLElement>(
      'div.FacetNavPanel',
    )
    expect(panel).toHaveLength(1)

    const buttons =  container.querySelectorAll<HTMLElement>('button > svg')
    expect(buttons.length).toBe(3)
    expect((buttons[0].getAttribute('data-icon'))).toBe('filter')
    expect((buttons[1].getAttribute('data-icon'))).toBe('expand-alt')
    expect((buttons[2].getAttribute('data-icon'))).toBe('times')

    const panelBody = container.querySelectorAll('div.FacetNavPanel__body')
    expect(panelBody.length).toBe(1)
    const panelBody2= container.querySelectorAll('div.FacetNavPanel__body--expanded')
    expect(panelBody2.length).toBe(0)

  })


  it('should initiate the panel with correct buttons and clases when expanded', async () => {
      //when expanded the onCollapse callback is passed but onExpand is not
      init({
        ...props,
        onCollapse: mockExpandCallback,
        onExpand: undefined
      })
    const panel = container.querySelectorAll<HTMLElement>(
      'div.FacetNavPanel',
    )
    expect(panel).toHaveLength(1)

    const buttons =  container.querySelectorAll<HTMLElement>('button > svg')
    expect(buttons.length).toBe(4)
    expect((buttons[0].getAttribute('data-icon'))).toBe('chart-bar')
    expect((buttons[1].getAttribute('data-icon'))).toBe('filter')
    expect((buttons[2].getAttribute('data-icon'))).toBe('compress-alt')
    expect((buttons[3].getAttribute('data-icon'))).toBe('times')

    const panelBody = container.querySelectorAll('div.FacetNavPanel__body')
    expect(panelBody.length).toBe(0)
    const panelBody2= container.querySelectorAll('div.FacetNavPanel__body--expanded')
    expect(panelBody2.length).toBe(1)

  })
})
