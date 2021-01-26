import * as React from 'react'
import { mount } from 'enzyme'
import syn16787123Json from '../../../mocks/syn16787123.json'
import Search from '../../../lib/containers/Search'
import QueryWrapper from '../../../lib/containers/QueryWrapper'
import { SynapseConstants } from '../../../lib'
import CardContainer from '../../../lib/containers/CardContainer'
import { GenericCardSchema } from '../../../lib/containers/GenericCard'
import { CardConfiguration } from '../../../lib/containers/CardContainerLogic'
import TotalQueryResults from '../../../lib/containers/TotalQueryResults'
import { act } from '@testing-library/react'

const SynapseClient = require('../../../lib/utils/SynapseClient')
const mockGetQueryTableResultsFn = jest.fn(() =>
  Promise.resolve(syn16787123Json),
)
SynapseClient.getQueryTableResults = mockGetQueryTableResultsFn
const facetAliases = {
  dataStatus: 'Data Status',
}
const searchable = [
  {
    columnName: 'dataStatus',
    hintText: 'Blocked',
  },
]

const createMountedComponent = () => {
  const genericCardSchema: GenericCardSchema = {
    title: 'Title',
    type: 'Generic Tool',
    subTitle: 'softwareType',
    description: 'summary',
    icon: 'icon',
    secondaryLabels: ['contributor', 'diagnosis', 'program'],
  }
  const commonCardProps: CardConfiguration = {
    type: SynapseConstants.GENERIC_CARD,
    genericCardSchema,
  }
  const wrapper = mount<QueryWrapper>(
    <QueryWrapper
      facetAliases={facetAliases}
      initQueryRequest={{
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        entityId: '',
        partMask:
          SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
          SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
          SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
          SynapseConstants.BUNDLE_MASK_QUERY_COUNT |
          SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
        query: {
          sql: 'SELECT * FROM TABLE',
          limit: 25,
          offset: 0,
        },
      }}
      showBarChart={false}
      unitDescription={'studies'}
    >
      <Search searchable={searchable} />
      <CardContainer {...commonCardProps} />
    </QueryWrapper>,
  )
  const instance = wrapper.instance()
  return { wrapper, instance }
}

describe('it performs basic functionality', () => {
  it('renders without crashing and displays correctly', async () => {
    const { wrapper } = createMountedComponent()
    await act(async () => {
      expect(wrapper).toBeDefined()
      const searchWrapper = wrapper.find(Search)
      expect(searchWrapper).toHaveLength(1)
      expect(wrapper.find('input').props().placeholder).toEqual(
        `e.g. "${searchable[0].hintText}"`,
      )
    })
  })
  it('queries correctly', async () => {
    const { wrapper, instance } = createMountedComponent()

    const spyOnExecuteQueryRequest = jest.spyOn(instance, 'executeQueryRequest')
    const searchWrapper = wrapper.find(Search)
    // Set the search text
    const searchText = 'complete'
    const stateUpdate = {
      searchText,
    }
    await act(async () => {
      await searchWrapper.setState(stateUpdate)
      await searchWrapper.find('form').simulate('submit')
    })
    expect(spyOnExecuteQueryRequest).toHaveBeenCalledWith(
      expect.objectContaining({
        query: expect.objectContaining({
          sql:
            'SELECT *\n' +
            '  FROM TABLE\n' +
            "  WHERE (`dataStatus` LIKE '%complete%')",
        }),
      }),
    )
    const searchLabel = `Displaying 59 studies containing "${searchText}" in Data Status`
    expect(searchWrapper.find(TotalQueryResults).text()).toContain(searchLabel)
  })
})
it('handles special characters correctly', () => {
  const withQuote = "that's"
  const withEscapedQuote = "that''s"
  expect(Search.addEscapeCharacters(withQuote)).toEqual(withEscapedQuote)
  const withPercent = '100%'
  const withEscapedPercent = '100%'
  expect(Search.addEscapeCharacters(withPercent)).toContain(withEscapedPercent)
  const withBackSlash = `he\\o`
  const withEscapedBackSlash = 'he\\\\o'
  expect(Search.addEscapeCharacters(withBackSlash)).toContain(
    withEscapedBackSlash,
  )
})
