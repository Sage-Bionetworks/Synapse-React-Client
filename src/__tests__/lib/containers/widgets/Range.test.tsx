import * as React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { Range, RangeProps } from '../../../../lib/containers/widgets/Range'

const mockCallback = jest.fn()

function createTestProps(overrides?: RangeProps): RangeProps {
  return {
    type: 'number',
    initialValues: { min: '2.3', max: '5' },
    className: 'rangeClass',
    onChange: mockCallback,
    ...overrides,
  }
}
let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>
let props: RangeProps

function init(overrides?: RangeProps) {
  props = createTestProps(overrides)
  wrapper = mount(<Range {...props} />)
  mockCallback.mockClear()
}

beforeEach(() => init())

function updateValue(
  wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>,
  min: number | string,
  max: number | string,
) {
  wrapper
    .find('input')
    .at(0)
    .simulate('change', { target: { value: min } })
  wrapper
    .find('input')
    .at(1)
    .simulate('change', { target: { value: max } })
  wrapper.find('button').simulate('click')
}

describe('number range ', () => {
  it('should render with correct properties', () => {
    expect(wrapper).toBeDefined()
    expect(
      wrapper
        .find('input')
        .at(0)
        .props().value,
    ).toBe(props.initialValues!.min)
    expect(
      wrapper
        .find('input')
        .at(1)
        .props().value,
    ).toBe(props.initialValues!.max)
    expect(
      wrapper
        .find('div')
        .at(0)
        .hasClass('rangeClass'),
    ).toBe(true)
  })

  it('should render without values specified', () => {
    let noDefaultProps = { ...props, initialValues: undefined}
    init(noDefaultProps)
    expect(wrapper).toBeDefined()
    expect(
      wrapper
        .find('input')
        .at(0)
        .props().value,
    ).toBeUndefined()

    expect(
      wrapper
        .find('input')
        .at(1)
        .props().value,
    ).toBeUndefined()
  })

  it('should call callbackFn correctly', () => {
    updateValue(wrapper, 2, 4.9)
    expect(mockCallback).toHaveBeenCalledWith({ min: 2, max: 4.9 })
  })
  it('should not trigger callback for min > max and should show error', () => {
    updateValue(wrapper, 4.9, 2)
    expect(mockCallback).not.toHaveBeenCalled()
    expect(wrapper.find('.SRC-danger-color')).toHaveLength(1)
  })
})

describe('date range', () => {
  const initialValues = {
    min: new Date(2019, 0, 4).toISOString(),
    max: new Date(2019, 9, 3).toISOString(),
  }
  const updatedValues = {
    min: new Date(2019, 7, 1).toString(),
    max: new Date(2019, 7, 3).toString(),
  }
  it('should render with correct checked state', () => {
    init({ ...props, type: 'date', initialValues: initialValues})
    expect(
      wrapper
        .find('input')
        .at(0)
        .props().value,
    ).toBe('2019-01-04')
    expect(
      wrapper
        .find('input')
        .at(1)
        .props().value,
    ).toBe('2019-10-03')
  })

  it('should render without values specified', () => {
    let noDefaultProps = { ...props, initialValues: undefined }
    init(noDefaultProps)
    expect(wrapper).toBeDefined()
    expect(
      wrapper
        .find('input')
        .at(0)
        .props().value,
    ).toBeUndefined()

    expect(
      wrapper
        .find('input')
        .at(1)
        .props().value,
    ).toBeUndefined()
  })

  it('should call callbackFn correctly', async () => {
    updateValue(wrapper, updatedValues.min, updatedValues.max)
    expect(mockCallback).toHaveBeenCalledWith(updatedValues)
  })

  it('should not trigger callback for min > max and should show error', async () => {
    updateValue(wrapper, updatedValues.max, updatedValues.min)
    expect(mockCallback).not.toHaveBeenCalled()
    expect(wrapper.find('.SRC-danger-color')).toHaveLength(1)
  })
})
