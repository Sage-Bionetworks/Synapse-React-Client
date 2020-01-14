import * as React from 'react'
import { mount, ReactWrapper, shallow } from 'enzyme'
import {
  EnumFacetFilter,
  EnumFacetFilterProps,
} from '../../../../lib/containers/widgets/query-filter/EnumFacetFilter'
import {
  ColumnModel,
  FacetColumnResultValueCount,
} from '../../../../lib/utils/synapseTypes'
import { act } from 'react-dom/test-utils'

const SynapseClient = require('../../../../lib/utils/SynapseClient')

const mockCallback = jest.fn(() => null)
const mockOnClear = jest.fn(() => null)

SynapseClient.getUserProfiles = jest.fn(() =>
  Promise.resolve({
    list: [
      { ownerId: '123', userName: 'somename' },
      { ownerId: '1234', userName: 'somename2' },
    ],
  }),
)

SynapseClient.getEntityHeader = jest.fn(() =>
  Promise.resolve({
    results: [
      { id: '123', name: 'Entity1' },
      { id: '1234', name: 'Entity2' },
    ],
  }),
)

const stringFacetValues: FacetColumnResultValueCount[] = [
  { value: 'Honda', count: 2, isSelected: false },
  { value: 'Chevy', count: 1, isSelected: true },
  {
    value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
    count: 1,
    isSelected: false,
  },
]

const userEntityFacetValues: FacetColumnResultValueCount[] = [
  {
    value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
    count: 2,
    isSelected: false,
  },
  { value: '123', count: 1, isSelected: false },
  { value: '1234', count: 1, isSelected: false },
]

const columnModel: ColumnModel = {
  columnType: 'STRING',
  facetType: 'enumeration',
  id: '86423',
  name: 'Make',
}

function generateManyFacetColumnResultValueCounts(): FacetColumnResultValueCount[] {
  const result: FacetColumnResultValueCount[] = []
  // create ranom facet values with 6th item having largest count
  //and have an item with count = 1
  for (let i = 0; i < 20; i++) {
    result.push({
      value: `Honda${i}`,
      count: i === 5 ? 12 : i === 6 ? 1 : Math.floor(Math.random() * 10),
      isSelected: false,
    })
  }
  return result
}

const resolveAllPending = async (
  wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>,
) => {
  await act(
    async (): Promise<any> => {
      await Promise.resolve(wrapper)
      await new Promise(resolve => setImmediate(resolve))
      wrapper = wrapper.update()
      return wrapper
    },
  )
}

function createTestProps(
  overrides?: EnumFacetFilterProps,
): EnumFacetFilterProps {
  return {
    facetValues: stringFacetValues,
    columnModel: columnModel,
    token: '12345',
    onChange: mockCallback,
    onClear: mockOnClear,
    ...overrides,
  }
}

let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>
let props: EnumFacetFilterProps

function init(overrides?: EnumFacetFilterProps) {
  props = createTestProps(overrides)
  wrapper = mount(<EnumFacetFilter {...props} />)
}

beforeEach(() => init())

describe('initialization', () => {
  it('should initiate selected items correctly', async () => {
    const checkboxes = wrapper.find('input[type="checkbox"]')
    expect(checkboxes).toHaveLength(3)
    checkboxes.forEach((checkbox, i) => {
      if (i === 1) {
        expect(checkbox.props().checked).toBe(true)
      } else {
        expect(checkbox.props().checked).toBe(false)
      }
    })
  })

  describe('label initialization', () => {
    it('should set labels correctly for STRING type', async () => {
      await resolveAllPending(wrapper)
      const labels = wrapper.find('input[type="checkbox"] ~ span')
      expect(labels).toHaveLength(3)
      labels.forEach((label, i) => {
        if (i !== 2) {
          expect(label.text()).toBe(
            `${stringFacetValues[i].value} (${stringFacetValues[i].count})`,
          )
        } else {
          expect(label.text()).toBe(`Not Set (${stringFacetValues[i].count})`)
        }
      })
    })

    it('should hide > 5 items if items with index >=5 not selected', async () => {
      const facetValues = generateManyFacetColumnResultValueCounts()

      init({
        ...props,
        facetValues,
      })

      await resolveAllPending(wrapper)
      const labels = wrapper.find('input[type="checkbox"] ~ span')
      expect(labels).toHaveLength(5)
      expect(labels.at(0).text()).toContain('(12)')
    })

    it('should show all items if items with index >=5 is selected', async () => {
      const facetValues = generateManyFacetColumnResultValueCounts()
      facetValues.find(item => item.count === 1)!.isSelected = true

      init({
        ...props,
        facetValues,
      })

      await resolveAllPending(wrapper)
      const labels = wrapper.find('input[type="checkbox"] ~ span')
      expect(labels).toHaveLength(20)
    })

    it('should set labels correctly for ENTITYID type', async () => {
      const entityColumnModel: ColumnModel = {
        ...columnModel,
        columnType: 'ENTITYID',
        name: 'File',
      }

      const updatedProps = {
        ...props,
        ...{
          facetValues: userEntityFacetValues,
          columnModel: entityColumnModel,
        },
      }

      init(updatedProps)
      await resolveAllPending(wrapper)

      const labels = wrapper.find('input[type="checkbox"] ~ span')
      expect(labels.at(0).text()).toBe(
        `Not Set (${userEntityFacetValues[0].count})`,
      )
      expect(labels.at(1).text()).toBe(
        `Entity1 (${userEntityFacetValues[1].count})`,
      )
      expect(labels.at(2).text()).toBe(
        `Entity2 (${userEntityFacetValues[2].count})`,
      )
    })
  })

  it('should set labels correctly for USERID type', async () => {
    const userColumnModel: ColumnModel = {
      ...columnModel,
      columnType: 'USERID',
      name: 'Users',
    }

    const updatedProps = {
      ...props,
      facetValues: userEntityFacetValues,
      columnModel: userColumnModel,
    }

    init(updatedProps)
    await resolveAllPending(wrapper)
    const labels = wrapper.find('input[type="checkbox"] ~ span')
    expect(labels).toHaveLength(3)
    expect(labels.at(0).text()).toBe(
      `Not Set (${userEntityFacetValues[0].count})`,
    )
    expect(labels.at(1).text()).toBe(
      `somename (${userEntityFacetValues[1].count})`,
    )
    expect(labels.at(2).text()).toBe(
      `somename2 (${userEntityFacetValues[2].count})`,
    )
  })
})

describe('callbacks', () => {
  it('should trigger callback on checkbox change', () => {
    const checkboxes = wrapper.find('input[type="checkbox"]')
    checkboxes.at(0).simulate('change')
    expect(mockCallback).toHaveBeenCalledWith(stringFacetValues[0].value, false)
  })

  it('should trigger callback on clear', () => {
    const clear = wrapper.find('button')
    clear.simulate('click')
    expect(mockOnClear).toHaveBeenCalledWith(props.columnModel.name)
  })
})
