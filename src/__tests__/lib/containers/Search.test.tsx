import * as React from 'react'
import { mount } from 'enzyme'
import syn16787123Json from '../../../mocks/syn16787123.json'
import Search from 'lib/containers/Search'
import QueryWrapper from 'lib/containers/QueryWrapper'
import { SynapseConstants } from 'lib'
import CardContainer from 'lib/containers/CardContainer'
import { GenericCardSchema } from 'lib/containers/GenericCard.jsx'
import { CommonCardProps } from 'lib/containers/CardContainerLogic.jsx'

const SynapseClient = require('../../../lib/utils/SynapseClient')
const mockGetQueryTableResultsFn = jest.fn(() => Promise.resolve(syn16787123Json))
SynapseClient.getQueryTableResults = mockGetQueryTableResultsFn
const searchable = [
  {
    key: 'dataStatus',
    alias: 'Data Status',
    hintText: 'Blocked'
  }
]

const createMountedComponent = () => {
  const genericCardSchema: GenericCardSchema = {
    title: 'Title',
    type: 'Generic Tool',
    subTitle: 'softwareType',
    description: 'summary',
    icon: 'icon',
    secondaryLabels: {
      0: { key: 'contributor', alias: 'Contributor' },
      1: { key: 'diagnosis', alias: 'Diagnosis' },
      2: { key: 'program', alias: 'Program' }
    }
  }
  const commonCardProps: CommonCardProps = {
    type: SynapseConstants.GENERIC_CARD,
    genericCardSchema,
  }
  const wrapper = mount<QueryWrapper>(
    <QueryWrapper
      initQueryRequest={{
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        partMask: SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
          SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
          SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
          SynapseConstants.BUNDLE_MASK_QUERY_COUNT |
          SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
        query: {
          sql: 'SELECT * FROM TABLE',
          limit: 25,
          offset: 0
        }
      }}
      showBarChart={false}
      unitDescription={'studies'}
      >
      <Search
        searchable={searchable}
      />
      <CardContainer
        {...commonCardProps}
      />
    </QueryWrapper>
    )
  const instance = wrapper.instance()
  return { wrapper, instance }
}

describe('it performs basic functionality', () => {
  it('renders withour crashing', () => {
    const { wrapper } = createMountedComponent()
    expect(wrapper).toBeDefined()
    const searchWrapper = wrapper.find(Search)
    expect(searchWrapper).toHaveLength(1)
    expect(wrapper.find('input').props().placeholder).toEqual(`e.g. "${searchable[0].hintText}"`)
  })
  it.only('queries correctly', async () => {
    const { wrapper, instance } = createMountedComponent()
    const spyOnExecuteQueryRequest = jest.spyOn(instance, 'executeQueryRequest')
    const searchWrapper = wrapper.find(Search)
    // Set the search text and 
    const searchText = 'complete'
    const stateUpdate = {
      searchText
    }
    await searchWrapper.setState(stateUpdate)
    await searchWrapper.find('form').simulate('submit')
    expect(spyOnExecuteQueryRequest).toHaveBeenCalledWith(
      expect.objectContaining({
        query: expect.objectContaining({
          sql: "SELECT *\n"
          +   "  FROM TABLE\n"
          +   "  WHERE (`dataStatus` LIKE '%complete%')"
        })
      })
    )
  })
})