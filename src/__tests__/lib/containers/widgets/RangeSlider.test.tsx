import * as React from 'react'
import { shallow,  ShallowWrapper } from 'enzyme'
import {
  RangeSlider,
  RangeSliderProps,
} from '../../../../lib/containers/widgets/RangeSlider'

const mockCallback = jest.fn(() => {})

function createTestProps(overrides?: RangeSliderProps): RangeSliderProps {
  return {
    initialValues:{min: '1', max: '20'},
    domain: ['0', '35'],
    onChange: mockCallback,
    step: 1,
    doUpdateOnApply: true,
    ...overrides,
  }
}
let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>
let props: RangeSliderProps

function init(overrides?: RangeSliderProps) {
  props = createTestProps(overrides)
  wrapper = shallow(<RangeSlider {...props} />)
}

beforeEach(() => init())

describe('initialization ', () => {
  it('should render with correct properties', () => {

    expect(wrapper).toBeDefined()

    expect(wrapper.find('Slider').prop('domain')).toEqual([0, 35])
    expect(wrapper.find('Slider').prop('step')).toEqual(1)
    expect(wrapper.find('Tracks').prop('left')).toBe(true)
    expect(wrapper.find('Tracks').prop('right')).toBe(true)
  })
})

describe('callbacks', () => {
  it('should not call the callbackFn on change when doUpdateOnApply is true', () => {
    mockCallback.mockClear()
    wrapper.find('Slider').simulate('change', [2, 10])
    expect(mockCallback).not.toHaveBeenCalled()
  })

  it('should call the callbackFn on change when doUpdateOnApply is false',  () => {
    init({...props, doUpdateOnApply: false})
    mockCallback.mockClear()
    wrapper.find('Slider').simulate('change', [2, 10])
    expect(mockCallback).toHaveBeenCalledWith({min:2, max: 10})
  })
 
  it('should allways call callbackFn on Apply', () => {
    init({...props, doUpdateOnApply: true})
    mockCallback.mockClear()
    wrapper.find('Slider').simulate('change', [2, 10])
    wrapper.find('button').simulate('click')
    expect(mockCallback).toHaveBeenCalledWith({min:2, max:10})
  })
 
})
