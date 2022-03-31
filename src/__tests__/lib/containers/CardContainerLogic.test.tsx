import { shallow } from 'enzyme'
import * as React from 'react'
import { SynapseConstants } from '../../../lib'
import CardContainer from '../../../lib/containers/CardContainer'
import CardContainerLogic, {
  CardContainerLogicProps,
} from '../../../lib/containers/CardContainerLogic'
import syn16787123Json from '../../../mocks/query/syn16787123'

const createShallowComponent = async (
  props: CardContainerLogicProps,
  disableLifecycleMethods: boolean = false,
) => {
  const wrapper = await shallow(<CardContainerLogic {...props} />)
  const instance = wrapper.instance() as CardContainerLogic
  return { wrapper, instance }
}

describe('it performs basic functionality', () => {
  const sql = 'SELECT * FROM syn16787123'
  const SynapseClient = require('../../../lib/utils/SynapseClient')

  SynapseClient.getQueryTableResults = jest.fn(() =>
    Promise.resolve(syn16787123Json),
  )
  const props = {
    sql,
    limit: 5,
    unitDescription: 'files',
    type: SynapseConstants.STUDY,
  }

  it('renders without crashing', async () => {
    const { wrapper } = await createShallowComponent(props, true)
    expect(wrapper).toBeDefined()
    expect(wrapper.find(CardContainer)).toHaveLength(1)
  })

  it('passes down props correctly', async () => {
    const { wrapper } = await createShallowComponent(props, true)

    const QueryWrapper = wrapper.find('QueryWrapper')
    expect(QueryWrapper.props()).toEqual(
      expect.objectContaining({
        initQueryRequest: expect.objectContaining({
          concreteType:
            'org.sagebionetworks.repo.model.table.QueryBundleRequest',
          entityId: 'syn16787123',
          partMask:
            SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
            SynapseConstants.BUNDLE_MASK_QUERY_COUNT |
            SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
            SynapseConstants.BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE |
            SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
            SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
            SynapseConstants.BUNDLE_MASK_SUM_FILES_SIZE_BYTES |
            SynapseConstants.BUNDLE_MASK_LAST_UPDATED_ON,
          query: {
            sql: props.sql,
            limit: props.limit,
          },
        }),
      }),
    )
    const CardContainer = wrapper.find('CardContainer')
    expect(CardContainer.props()).toEqual(props)
  })
})
