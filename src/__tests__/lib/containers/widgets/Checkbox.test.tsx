import * as React from 'react'
import { mount, HTMLAttributes, ReactWrapper } from 'enzyme'
import {
  Checkbox,
  CheckboxProps,
} from '../../../../lib/containers/widgets/Checkbox'

const mockCallback = jest.fn()

function createTestProps(overrides?: CheckboxProps): CheckboxProps {
  return {
    label: 'checkboxLabel',
    id: 'c1',
    checked: true,
    className: 'checkboxClass',
    onChange: mockCallback,
    ...overrides,
  }
}
let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>
let props: CheckboxProps
let checkboxProps: HTMLAttributes

function init(overrides?: CheckboxProps) {
  props = createTestProps(overrides)
  wrapper = mount(<Checkbox {...props} />)
  checkboxProps = wrapper.find('input').props()
}

beforeEach(() => init())

describe('basic function', () => {
  it('should render with correct properties', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper.find('span span').text()).toBe(props.label)
    expect(checkboxProps.checked).toBe(true)
    expect(checkboxProps.id).toBe(props.id)
    expect(
      wrapper
        .find('div')
        .at(0)
        .hasClass('checkboxClass'),
    ).toBe(true)
  })

  it('should render with correct checked state', () => {
    init({ ...props, checked: false })
    expect(checkboxProps.checked).toBe(false)
  })

  it('should call callbackFn on change with correct params and change the value', () => {
    init({ ...props, checked: false })

    let event = {
      target: {
        checked: true,
      },
    } as React.ChangeEvent<HTMLInputElement>

    expect(wrapper.find('input').props().checked).toBe(false)
    wrapper.find('input').simulate('change', event)
    expect(mockCallback).toHaveBeenCalledWith(true)
    expect(wrapper.find('input').props().checked).toBe(true)
  })
})
