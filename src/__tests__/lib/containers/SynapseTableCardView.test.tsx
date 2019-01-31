import * as React from 'react'
import { mount, shallow } from 'enzyme'
import SynapseTableCardView, { RowContainer } from '../../../lib/containers/SynapseTableCardView'
import { SynapseConstants } from '../../../lib'
import syn16787123Json  from '../../../mocks/syn16787123.json'
import { QueryBundleRequest } from 'src/lib/utils/jsonResponses/Table/QueryBundleRequest'
import { QueryResultBundle } from 'src/lib/utils/jsonResponses/Table/QueryResultBundle'

describe('it performs all functionality', () => {

  let getLastQueryRequest: () => QueryBundleRequest
  let getNextPageOfData: (arg: QueryBundleRequest) => Promise<boolean>
  const sql = 'SELECT * FROM syn16787123'
  const unitDescription = 'studies'
  const type = SynapseConstants.STUDY
  // cast the data to ignore ts warning
  const data = syn16787123Json as QueryResultBundle

  beforeAll(() => {
    getLastQueryRequest = jest.fn(() => {
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

    // for our purposes its okay to return the same data again
    getNextPageOfData = jest.fn((arg: QueryBundleRequest) => { return Promise.resolve(true) })
  })

  it('renders without crashing', () => {
    const tree = shallow(
      <SynapseTableCardView
        data={data}
        type={type}
        totalResultsNoFacet={59}
        unitDescription={unitDescription}
        getLastQueryRequest={getLastQueryRequest}
        getNextPageOfData={getNextPageOfData}
      />
    )
    expect(tree).toBeDefined()
  })

  it('Renders total and RowContainer correctly without a faceted view', () => {
    const wrapper = shallow(
      <SynapseTableCardView
        data={data}
        type={type}
        totalResultsNoFacet={59}
        unitDescription={unitDescription}
        getLastQueryRequest={getLastQueryRequest}
        getNextPageOfData={getNextPageOfData}
      />
    )
    expect(wrapper.find(RowContainer)).toHaveLength(25)
    expect(wrapper.find('p.SRC-boldText.SRC-text-title').text()).toEqual('Displaying 59 studies')
    expect(wrapper.find('button.pull-right').text()).toEqual('View More')
  })

  it('Renders total and RowContainer correctly with a faceted view', () => {
    const wrapper = shallow(
      <SynapseTableCardView
        data={data}
        type={type}
        unitDescription={unitDescription}
        getLastQueryRequest={getLastQueryRequest}
        getNextPageOfData={getNextPageOfData}
        filter={'projectStatus'}
      />
    )
    expect(wrapper.find(RowContainer)).toHaveLength(25)
    expect(wrapper.find('p.SRC-boldText.SRC-text-title').text()).toEqual('Displaying 59 studies')
  })

  it('Loads buffer data correctly', async () => {
    const wrapper = await mount(
      <SynapseTableCardView
        data={data}
        type={SynapseConstants.STUDY}
        getLastQueryRequest={getLastQueryRequest}
        getNextPageOfData={getNextPageOfData}
      />
    )
    expect(wrapper.state('hasLoadedBufferData')).toEqual(false)
    // normally we would call componentDidMount, however, that function requires
    // setTimeout, the combination of testing jest with both a timeout and a promise returned
    // from that is not well defined so we test it this way
    const instance = wrapper.instance() as SynapseTableCardView
    await instance.gatherData()
    expect(getNextPageOfData).toHaveBeenCalled()
    expect(wrapper.state('hasLoadedBufferData')).toEqual(true)
    expect(wrapper.state('hasMoreData')).toEqual(true)
  })

  it('handleViewMore works', async () => {
    const wrapper = await mount(
      <SynapseTableCardView
        data={data}
        type={SynapseConstants.STUDY}
        getLastQueryRequest={getLastQueryRequest}
        getNextPageOfData={getNextPageOfData}
      />
    )
    expect(wrapper.state('hasLoadedBufferData')).toEqual(false)
    // normally we would call componentDidMount, however, that function requires
    // setTimeout, the combination of testing jest with both a timeout and a promise returned
    // from that is not well defined so we test it this way
    const instance = wrapper.instance() as SynapseTableCardView
    await instance.gatherData()

    // go through calling handle view more
    await instance.handleViewMore()
    expect(getLastQueryRequest).toHaveBeenCalled()
    expect(getNextPageOfData).toHaveBeenCalled()
    expect(wrapper.state('cardLimit')).toEqual(50)
  })

})
