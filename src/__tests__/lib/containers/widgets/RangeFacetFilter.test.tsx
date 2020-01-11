import * as React from 'react'
import { mount, ReactWrapper, shallow } from 'enzyme'
import {
  RangeFacetFilter,
  RangeFacetFilterProps,
} from '../../../../lib/containers/widgets/query-filter/RangeFacetFilter'
import {
  FacetColumnResultRange,
  ColumnModel,
} from '../../../../lib/utils/synapseTypes'
import { VALUE_NOT_SET } from '../../../../lib/utils/SynapseConstants'

const mockCallback = jest.fn(() => null)
const intFacetResult: FacetColumnResultRange = {
  columnMax: '1999',
  columnMin: '1996',
  columnName: 'Year',
  concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnResultRange',
  facetType: 'range',
}

const notSetFacetResult: FacetColumnResultRange = {
  columnMax: '1999',
  columnMin: '1996',
  columnName: 'Year',
  selectedMax: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
  selectedMin: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
  concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnResultRange',
  facetType: 'range',
}

const rangeFacetResult = {
  ...notSetFacetResult,
  ...{ selectedMin: '1997', selectedMax: '1998' },
}

const columnModel: ColumnModel = {
  columnType: 'INTEGER',
  facetType: 'range',
  id: '86423',
  name: 'Year',
}

function createTestProps(overrides?: RangeFacetFilterProps): RangeFacetFilterProps {
  return {
    facetResult: intFacetResult,
    columnModel: columnModel,
    onChange: mockCallback,
    ...overrides,
  }
}

let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>
let props: RangeFacetFilterProps

function init(overrides?: RangeFacetFilterProps) {
  props = createTestProps(overrides)
  wrapper = mount(<RangeFacetFilter {...props} />)
}

beforeEach(() => init())

describe('basic function', () => {
  describe('setting correct range value', () => {
    it('should set for any', () => {
      const radios = wrapper.find('input[type="radio"]')
      expect(radios).toHaveLength(3)
      expect(radios.at(1).props().checked).toBe(true)
      expect(
        radios
          .at(1)
          .parents('span')
          .text(),
      ).toBe('Any')
    })

    it('should set for not set', () => {
      init({ ...props, ...{ facetResult: notSetFacetResult } })
      const radios = wrapper.find('input[type="radio"]')
      expect(radios.at(0).props().checked).toBe(true)
      expect(
        radios
          .at(0)
          .parents('span')
          .text(),
      ).toBe('Not Set')
    })

    it('interval', () => {
      init({ ...props, ...{ facetResult: rangeFacetResult } })
      const radios = wrapper.find('input[type="radio"]')

      expect(radios.at(2).props().checked).toBe(true)
      expect(
        radios
          .at(2)
          .parents('span')
          .text(),
      ).toBe('Range')
    })
  })

  describe('displaying  correct range control', () => {
    const dateColumnModel: ColumnModel = {
      ...columnModel,
      ...{ columnType: 'DATE' },
    }
    const doubleColumnModel: ColumnModel = {
      ...columnModel,
      ...{ columnType: 'DOUBLE' },
    }
    it('should set for integer', () => {
      init({ ...props, ...{ facetResult: rangeFacetResult } })
      const slider = wrapper.find('.rangeSlider')
      expect(slider).toHaveLength(1)
    })
    it('should set for date', async () => {
      init({
        ...props,
        ...{ facetResult: rangeFacetResult, columnModel: dateColumnModel },
      })
      const doubleRange = wrapper.find('.range input[type="date"]')
      expect(doubleRange).toHaveLength(2)
    })

    it('should set for double', async () => {
      init({
        ...props,
        ...{ facetResult: rangeFacetResult, columnModel: doubleColumnModel },
      })
      const doubleRange = wrapper.find('.range input[type="number"]')
      expect(doubleRange).toHaveLength(2)
    })
  })

  describe('communicating the change corectly', () => {
    it('should update from enum', () => {
      let radios = wrapper.find('input[type="radio"]')
      //2nd radio selected
      expect(radios.at(1).props().checked).toBe(true)
      mockCallback.mockClear()
      // click first radio
      radios.at(0).simulate('change')
      expect(mockCallback).toHaveBeenCalledWith([VALUE_NOT_SET, VALUE_NOT_SET])
      expect(mockCallback).toBeCalledTimes(1)
      //get updated wrapper and clear mocks
      mockCallback.mockClear()
      wrapper = wrapper.update()
      radios = wrapper.find('input[type="radio"]')
      expect(radios.at(1).props().checked).toBe(false)
      expect(radios.at(0).props().checked).toBe(true)
      //click the third radio
      radios.at(2).simulate('change')
      expect(mockCallback).not.toHaveBeenCalled()
      expect(wrapper.find('.rangeSlider')).toHaveLength(1)
      //get updated wrapper and clear mocks
      mockCallback.mockClear()
      wrapper = wrapper.update()
      radios = wrapper.find('input[type="radio"]')
      expect(radios.at(0).props().checked).toBe(false)
      expect(radios.at(2).props().checked).toBe(true)
      //click the third radio
      radios.at(1).simulate('change')
      expect(mockCallback).toHaveBeenCalledWith(['', ''])
      expect(wrapper.find('.rangeSlider')).toHaveLength(0)
      wrapper = wrapper.update()
      radios = wrapper.find('input[type="radio"]')
      expect(radios.at(1).props().checked).toBe(true)
    })

    it('should update from a range control', () => {
      const dateColumnModel: ColumnModel = {
        ...columnModel,
        ...{ columnType: 'DATE' },
      }

      const updatedProps = {
        ...props,
        ...{ facetResult: rangeFacetResult, columnModel: dateColumnModel },
      }

      init(updatedProps)
      const wrapperShallow = shallow(<RangeFacetFilter {...updatedProps} />)
      const range = wrapperShallow.find('Range')
      range.simulate('change', { min: '22', max: '23' })
      expect(mockCallback).toHaveBeenCalledWith(['22', '23'])
    })
  })
})
