import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import {
  QueryFilterProps,
  QueryFilter,
} from '../../../../../lib/containers/widgets/query-filter/QueryFilter'
import {

  QueryResultBundle,
} from '../../../../../lib/utils/synapseTypes'

import _ from 'lodash'

import mockQueryResponseData from '../../../../../mocks/mockQueryResponseData.json'

const lastQueryRequestResult = {
  partMask: 53,
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: 'syn16787123',
  query: {
    sql: 'SELECT * FROM syn21450294',
    selectedFacets: [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
        columnName: 'Make',
        facetValues: ['Honda', 'Chevy'],
      },
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
        columnName: 'Year',
        min: 1997,
        max: 1999,
      },
    ],
    isConsistent: true,
    limit: 25,
    offset: 0,
  },
}

const mockApplyChanges = jest.fn(() => null)
const mockGetQueryRequest = jest.fn(() => _.cloneDeep(lastQueryRequestResult))

function createTestProps(overrides?: QueryFilterProps): QueryFilterProps {
  return {
    applyChanges: mockApplyChanges,
    isLoading: false,
    data: mockQueryResponseData as QueryResultBundle,
    getLastQueryRequest: mockGetQueryRequest,
    token: '123',

    ...overrides,
  }
}

let wrapper: ShallowWrapper<
  React.FunctionComponent<QueryFilterProps>,
  any,
  Readonly<{}>
>
let props: QueryFilterProps

function init(overrides?: QueryFilterProps) {
  props = createTestProps(overrides)
  wrapper = shallow(<QueryFilter {...props} />)
}

beforeEach(() => init())

describe('initialization', () => {
  it('should initiate selected items correctly', async () => {
    const enumFacets = mockQueryResponseData.facets.filter(
      facet => facet.facetType === 'enumeration',
    )
    const rangeFacets = mockQueryResponseData.facets.filter(
      facet => facet.facetType === 'range',
    )
    expect(wrapper.find('QueryEnum')).toHaveLength(enumFacets.length)
    expect(wrapper.find('QueryRange')).toHaveLength(rangeFacets.length)
  })
})

describe('handling child component callbacks', () => {
  it('should propagate enum update correctluy', async () => {
    const expectedResult = [
      {
        columnName: 'Make',
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
        facetValues: ['Honda', 'Chevy', 'Ford'],
      },
      {
        columnName: 'Year',
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
        max: 1999,
        min: 1997,
      },
    ]

    const enumWrapper = wrapper.find('QueryEnum').at(0)
    enumWrapper.simulate('change', 'Ford', true)
  
    expect(mockApplyChanges).toHaveBeenCalledWith(expectedResult)
  })

  it('should propagate enum clear correctly', async () => {
    const expectedResult = [
      {
        columnName: 'Year',
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
        max: 1999,
        min: 1997,
      },
    ]
    const enumWrapper = wrapper.find('QueryEnum').at(0)
    enumWrapper.simulate('clear')
    expect(mockApplyChanges).toHaveBeenCalledWith(expectedResult)
  })

  it('should propagate range correctly', async () => {
    const expectedResult = [
      {
        columnName: 'Make',
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
        facetValues: ['Honda', 'Chevy'],
      },
      {
        columnName: 'Year',
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
        max: '1998',
        min: '1997',
      },
    ]
    const enumWrapper = wrapper.find('QueryRange').at(0)
    enumWrapper.simulate('change', ['1997', '1998'])
    expect(mockApplyChanges).toHaveBeenCalledWith(expectedResult)
  })
})
