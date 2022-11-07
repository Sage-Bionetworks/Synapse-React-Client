import { act, cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import _ from 'lodash-es'
import React from 'react'
import Columns from '../../../../lib/assets/icons/columns'
import { IconSvgProps } from '../../../../lib/containers/IconSvg'
import { ElementWithTooltip } from '../../../../lib/containers/widgets/ElementWithTooltip'

const mockCallback = jest.fn()
type ElementWithTooltipProps = React.ComponentProps<typeof ElementWithTooltip>

afterEach(cleanup)

function createTestProps(
  overrides?: ElementWithTooltipProps,
): ElementWithTooltipProps {
  return {
    image: { icon: 'check' },
    callbackFn: mockCallback,
    tooltipText: 'my tooltip',
    ...overrides,
  }
}

let props: ElementWithTooltipProps
let container: HTMLElement
let imageButton: HTMLElement

function init(overrides?: ElementWithTooltipProps) {
  props = createTestProps(overrides)
  mockCallback.mockClear()
  container = render(<ElementWithTooltip {...props} />).container
  imageButton = container.getElementsByTagName('button').item(0)!
}

describe('ElementWithTooltip', () => {
  beforeEach(() => init())
  afterEach(() => {
    jest.useRealTimers()
  })
  it('should render with correct tooltip properties', async () => {
    jest.useFakeTimers()
    const user = userEvent.setup({ advanceTimers: jest.runAllTimers })
    await user.hover(imageButton)

    await screen.findByText(props.tooltipText)
    expect(imageButton.attributes['aria-label'].value).toBe(props.tooltipText)
    expect(imageButton.classList.contains('dropdown-toggle')).toBe(false)
  })

  it('should render with correct properties for icon and custom image', () => {
    expect(
      imageButton.getElementsByClassName('styled-svg-wrapper').item(0)!
        .attributes['data-svg'].value,
    ).toBe((props.image as IconSvgProps).icon)
    expect(imageButton.getElementsByTagName('img')).toHaveLength(0)

    const props_: ElementWithTooltipProps = {
      ...props,
      image: {
        svgImg: Columns,
        altText: 'test',
      },
    }
    init(props_)

    expect(imageButton.getElementsByTagName('svg')).toHaveLength(1)
  })

  it('should create dropdown toggle element without callbackFn passed in', () => {
    init({ ...props, callbackFn: undefined })
    expect(imageButton.classList.contains('dropdown-toggle')).toBe(true)
  })
  it('should call the callback Fn', async () => {
    await userEvent.click(imageButton)
    expect(mockCallback).toHaveBeenCalled()
  })
  it('should create correctly without image as a text tooltip', async () => {
    jest.useFakeTimers()
    const user = userEvent.setup({ advanceTimers: jest.runAllTimers })
    const child = <span className="my_class">hello world</span>
    init({
      ...props,
      callbackFn: _.noop,
      children: child,
      image: undefined,
    })
    const tooltipTrigger = container.getElementsByClassName('my_class').item(0)
    expect(tooltipTrigger!.classList.contains('my_class')).toBe(true)
    expect(tooltipTrigger!.innerHTML).toBe('hello world')

    await user.hover(tooltipTrigger!)

    act(() => {
      jest.runAllTimers()
    })
    await screen.findByText(props.tooltipText)
  })
})
