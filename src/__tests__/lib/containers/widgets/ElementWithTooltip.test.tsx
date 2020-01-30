import * as React from 'react'
import _ from 'lodash'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { ElementWithTooltip } from '../../../../lib/containers/widgets/ElementWithTooltip'
import { faCheck, IconDefinition } from '@fortawesome/free-solid-svg-icons'

const mockCallback = jest.fn()
type ElementWithTooltipProps = React.ComponentProps<
  typeof ElementWithTooltip
>

afterEach(cleanup)

function createTestProps(
  overrides?: ElementWithTooltipProps,
): ElementWithTooltipProps {
  return {
    image: faCheck,
    callbackFn: mockCallback,
    tooltipText: 'my tooltip',
    idForToolTip: 'someId',
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

beforeEach(() => init())

describe('basic function', () => {
  it('should render with correct tooltip properties', () => {
    expect(container.children.length).toBe(2)
    expect(imageButton.attributes['data-for'].value).toBe(
      container.getElementsByTagName('div').item(0)!.id,
    )
    expect(imageButton.attributes['data-tip'].value).toBe(props.tooltipText)
    expect(imageButton.classList.contains('dropdown-toggle')).toBe(false)
  })

  it('should render with correct properties for icon and custom image', () => {
    expect(
      imageButton.getElementsByTagName('svg').item(0)!.attributes['data-icon']
        .value,
    ).toBe((props.image as IconDefinition).iconName)
    expect(imageButton.getElementsByTagName('img')).toHaveLength(0)

    const props_: ElementWithTooltipProps = {
      ...props,
      image: {
        svgImg: '/path/to/img',
        altText: 'test',
      },
    }
    init(props_)

    expect(imageButton.getElementsByTagName('svg')).toHaveLength(0)
    expect(imageButton.getElementsByTagName('img')).toHaveLength(1)
    expect(imageButton.getElementsByTagName('img').item(0)!.src).toContain(
      (props_.image as { svgImg: string; altText: string }).svgImg,
    )
    expect(imageButton.getElementsByTagName('img').item(0)!.alt).toContain(
      (props_.image as { svgImg: string; altText: string }).altText,
    )
    expect(imageButton.classList.contains('dropdown-toggle')).toBe(false)
  })

  it('should create dropdown toggle element without callbackFn passed in', () => {
    init({ ...props, callbackFn: undefined })
    expect(imageButton.classList.contains('dropdown-toggle')).toBe(true)
  })
  it('should call the callback Fn', () => {
    fireEvent.click(imageButton)
    expect(mockCallback).toHaveBeenCalled()
  })
  it('should create correctly without image as a text tooltip', () => {
    const child = <span className="my_class">hello world</span>
    init({
      ...props,
      callbackFn: _.noop,
      children: child,
      image: undefined,
    })
    expect(imageButton).toBeNull
    const tooltipTrigger = container.getElementsByClassName('my_class').item(0)
    expect(tooltipTrigger).toBeDefined
    expect(tooltipTrigger!.classList.contains('my_class')).toBe(true)
    expect(tooltipTrigger!.innerHTML).toBe('hello world')
    expect(tooltipTrigger!.attributes['data-tip'].value).toBe(props.tooltipText)
  })
})
