import { shallow } from 'enzyme'
import * as React from 'react'
import { SynapseConstants } from '../../../lib'
import CardContainer, {
  CardContainerProps,
} from '../../../lib/containers/CardContainer'
import TotalQueryResults from '../../../lib/containers/TotalQueryResults'
import {
  QueryBundleRequest,
  QueryResultBundle,
} from '../../../lib/utils/synapseTypes/'
import syn16787123Json from '../../../mocks/syn16787123.json'
import { cloneDeep } from 'lodash-es'

const createShallowComponent = (props: CardContainerProps) => {
  const wrapper = shallow(<CardContainer {...props} />)
  const instance = wrapper.instance()
  return { wrapper, instance }
}

describe('it performs all functionality', () => {
  // for our purposes its okay to return the same data again
  const getNextPageOfData = jest.fn((_arg: QueryBundleRequest) => {})
  const sql = 'SELECT * FROM syn16787123'
  const lastQueryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: 'syn16787123',
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
      SynapseConstants.BUNDLE_MASK_QUERY_COUNT,
    query: {
      sql,
      limit: 25,
      offset: 0,
    },
  }
  const getLastQueryRequest = jest.fn(() => lastQueryRequest)

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
    hasMoreData: true,
  }

  it('renders without crashing', () => {
    const tree = createShallowComponent(props)
    expect(tree).toBeDefined()
  })

  it('Renders total and RowContainer correctly with a faceted view', () => {
    // inject filter prop
    const { wrapper } = createShallowComponent({
      ...props,
      facet: 'projectStatus',
    })
    expect(wrapper.find('button.SRC-light-button').text()).toEqual('View More')
    expect(wrapper.find(TotalQueryResults)).toHaveLength(1)
    expect(wrapper.find('button.SRC-light-button').text()).toEqual('View More')
  })

  it('Renders with a title', () => {
    const title = 'HelloWorld'
    const { wrapper } = createShallowComponent({ ...props, title })
    expect(wrapper.find('h2.SRC-card-overview-title').text()).toEqual(title)
  })

  it('handleViewMore works', () => {
    const { wrapper } = createShallowComponent(props)
    // go through calling handle view more
    wrapper.find('button').simulate('click')
    expect(getLastQueryRequest).toHaveBeenCalled()
    expect(getNextPageOfData).toHaveBeenCalled()
  })

  it('show ViewMore does not render when number of data points less than 25', () => {
    const dataCopy = cloneDeep(syn16787123Json) as QueryResultBundle
    dataCopy.queryResult.queryResults.rows.splice(0, 10)
    const propsWithDataCopy = {
      ...props,
      data: dataCopy,
    }
    const { wrapper } = createShallowComponent(propsWithDataCopy)
    expect(wrapper.find('button.SRC-light-button')).toHaveLength(0)
  })

  it('show ViewMore does not render when hasMoreData is false', () => {
    const propsWithHasMoreDataFalse = {
      ...props,
      hasMoreData: false,
    }
    const { wrapper } = createShallowComponent(propsWithHasMoreDataFalse)
    expect(wrapper.find('button.SRC-light-button')).toHaveLength(0)
  })
})
