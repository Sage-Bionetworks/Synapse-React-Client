import * as React from 'react'
import { shallow } from 'enzyme'
import CardContainer, { RowContainer, CardContainerProps } from '../../../lib/containers/CardContainer'
import { SynapseConstants } from '../../../lib'
import syn16787123Json  from '../../../mocks/syn16787123.json'
import { QueryBundleRequest } from 'src/lib/utils/jsonResponses/Table/QueryBundleRequest'
import { QueryResultBundle } from 'src/lib/utils/jsonResponses/Table/QueryResultBundle'
import { cloneDeep } from '../../../lib/utils/modules'

const createShallowComponent = (props: CardContainerProps) => {
  const wrapper = shallow(
    <CardContainer
      {...props}
    />
  )
  const instance = wrapper.instance() as CardContainer
  return { wrapper, instance }
}

describe('it performs all functionality', () => {
  // for our purposes its okay to return the same data again
  const getNextPageOfData = jest.fn((_arg: QueryBundleRequest) => {})
  const getLastQueryRequest = jest.fn(() => {
    return  {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      partMask:
        SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
        SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
        SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
        SynapseConstants.BUNDLE_MASK_QUERY_COUNT
        ,
      query: {
        sql,
        isConsistent: false,
        limit: 25,
        offset: 0,
      }
    }
  })

  const sql = 'SELECT * FROM syn16787123'
  const unitDescription = 'studies'
  const type = SynapseConstants.STUDY
  // cast the data to ignore ts warning
  const data = syn16787123Json as QueryResultBundle
  const props = {
    getNextPageOfData,
    getLastQueryRequest,
    sql,
    unitDescription,
    type,
    data,
    hasMoreData: true
  }

  it('renders without crashing', () => {
    const tree = createShallowComponent(props)
    expect(tree).toBeDefined()
  })

  it('Renders total and RowContainer correctly without a faceted view', async () => {
    const propsWithTotalQueryCount = {
      ...props,
      totalResultsNoFacet: 59,
    }
    const { wrapper } = createShallowComponent(propsWithTotalQueryCount)
    expect(wrapper.find(RowContainer)).toHaveLength(25)
    expect(wrapper.find('p.SRC-boldText.SRC-text-title').text()).toEqual('Displaying 59 studies')
    expect(wrapper.find('button.SRC-viewMoreButton').text()).toEqual('View More')
  })

  it('Renders total and RowContainer correctly with a faceted view', () => {
    // inject filter prop
    const { wrapper } = createShallowComponent({ ...props, filter: 'projectStatus' })
    expect(wrapper.find(RowContainer)).toHaveLength(25)
    expect(wrapper.find('p.SRC-boldText.SRC-text-title').text()).toEqual('Displaying 59 studies')
    expect(wrapper.find('button.SRC-viewMoreButton').text()).toEqual('View More')
  })

  it('handleViewMore works', () => {
    const { instance } = createShallowComponent(props)
    // go through calling handle view more
    instance.handleViewMore()
    expect(getLastQueryRequest).toHaveBeenCalled()
    expect(getNextPageOfData).toHaveBeenCalled()
  })

  it('show ViewMore does not render when number of data points less than 25', () => {
    const dataCopy = cloneDeep(syn16787123Json) as QueryResultBundle
    dataCopy.queryResult.queryResults.rows.splice(0, 10)
    const propsWithDataCopy = {
      ...props,
      data: dataCopy
    }
    const { wrapper } = createShallowComponent(propsWithDataCopy)
    expect(wrapper.find('button.SRC-viewMoreButton')).toHaveLength(0)
  })

  it('show ViewMore does not render when hasMoreData is false', () => {
    const propsWithHasMoreDataFalse = {
      ...props,
      hasMoreData: false
    }
    const { wrapper } = createShallowComponent(propsWithHasMoreDataFalse)
    expect(wrapper.find('button.SRC-viewMoreButton')).toHaveLength(0)
  })
})
