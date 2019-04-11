import * as React from 'react'
import { mount } from 'enzyme'
import { Facets, CheckboxGroup, FACET_SELECTED_CLASS } from '../../../lib/containers/Facets'
// import { SELECT_ALL, DESELECT_ALL  } from '../../../lib/containers/SynapseTable'
import { QueryWrapperChildProps } from '../../../lib/containers/QueryWrapper'
import { SynapseConstants } from '../../../lib'
import syn16787123Json from '../../../mocks/syn16787123.json'
import { QueryResultBundle } from '../../../lib/utils/jsonResponses/Table/QueryResultBundle'
import { cloneDeep } from '../../../lib/utils/modules'

const createMountedComponent = (props: QueryWrapperChildProps) => {
  const wrapper = mount(
      <Facets
        {...props}
      />
    )
  const instance = wrapper.instance() as Facets
  return { wrapper, instance }
}

describe('it performs basic functionality', () => {
  // Test setup
  const SynapseClient = require('../../../lib/utils/SynapseClient')
  SynapseClient.executeQueryRequest = jest.fn()
  // column name that will get filtered on
  const filter = 'tumorType'

  const lastQueryRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
    ,
    query: {
      sql: 'SELECT * FROM syn16787123',
      isConsistent: false,
      limit: 25,
      offset: 0,
      selectedFacets: [
        {
          columnName: 'projectStatus',
          concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          facetValues: [
            'Active',
            'Completed',
          ],
        },
        {
          columnName: 'tumorType',
          concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          facetValues: [
            'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
            'Cutaneous Neurofibroma',
            'JMML',
            'Low Grade Glioma',
            'MPNST',
            'Plexiform Neurofibroma',
            'Plexiform Neurofibroma | MPNST',
            'Plexiform Neurofibroma | MPNST | Cutaneous Neurofibroma',
            'Schwannoma',
            'Schwannoma | Meningioma',
            'SMN'
          ],
        }
      ]
    }
  }
  const castData = syn16787123Json as QueryResultBundle
  const updateParentState = jest.fn()
  const executeInitialQueryRequest = jest.fn()
  const executeQueryRequest = jest.fn()
  const getLastQueryRequest = jest.fn(() => cloneDeep(lastQueryRequest))

  /*
    We have to clone deep the props in each test because isAllFilterSelectedForFacet
    gets modified by the Facets class, most test cases don't involve classes that modify
  */
  const props = {
    updateParentState,
    filter,
    executeInitialQueryRequest,
    executeQueryRequest,
    getLastQueryRequest,
    isAllFilterSelectedForFacet: {
      tumorType: true,
      projectStatus: true
    },
    isLoading: false,
    lastFacetSelection: {
      columnName: '',
      facetValue: '',
      selector: ''
    },
    data: castData,
    isChecked: [],
    rgbIndex: 0,
  } as QueryWrapperChildProps

  beforeEach(() => {
    /*
       This isn't 'necessary' to use below (unsure of why its not),
       all the tests will pass without the statement, however, it
       does give a sanity check that no state is bleeding over from
       one test to another.
    */
    jest.clearAllMocks()
  })

  it('renders without crashing', () => {
    const { wrapper } = createMountedComponent(props)
    expect(wrapper).toBeDefined()
    expect(wrapper.find(CheckboxGroup)).toHaveLength(1)
  })

  it('Show All is not present when < 5 facets ', () => {
    // override default
    const { wrapper } = createMountedComponent(
      {
        ...props,
        filter: 'projectStatus'
      }
    )
    expect(wrapper.find('#showAllFacetsButton')).toHaveLength(0)
  })

  it('Show All is present when >= 5 facets ', () => {
    const { wrapper } = createMountedComponent(props)
    expect(wrapper.find('#showAllFacetsButton')).toHaveLength(1)
  })

  it('Clicking a pill shows the rest of the facet when not already shown', async () => {
    const { wrapper } = await createMountedComponent(cloneDeep(props))
    const checkbox = wrapper.find(CheckboxGroup)
    const labels = checkbox.find('label')
    // only 5 shown by default
    expect(wrapper.find('input')).toHaveLength(5)
    await labels.at(0).find('input').simulate('change')
    // after click event it expands to show all 11 per the mocked data above
    expect(wrapper.find('input')).toHaveLength(11)
  })

  it('Onload all facets are considered selected', async () => {
    const { wrapper } = await createMountedComponent(cloneDeep(props))
    const checkbox = wrapper.find(CheckboxGroup)
    const labels = checkbox.find(`input.SRC-hidden.SRC-facet-checkboxes.${FACET_SELECTED_CLASS}`)
    expect(labels).toHaveLength(5)
  })

  it('Clicking an individual selects that pill and deselects all others', async () => {
    const { wrapper } = await createMountedComponent(cloneDeep(props))
    const checkbox = wrapper.find(CheckboxGroup)
    const labels = checkbox.find('label')
    // select the second pill
    const secondPill = labels.at(1).find('input')
    await secondPill.simulate('change')
    expect(checkbox.find('input.FACET_NOT_SELECTED_CLASS')).toHaveLength(10)
    expect(checkbox.find(`input.${FACET_SELECTED_CLASS}`)).toHaveLength(1)
  })

  it('Clicking two pills only colors the last one', async () => {
  })

})
