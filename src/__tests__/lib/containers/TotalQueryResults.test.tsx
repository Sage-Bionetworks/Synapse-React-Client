import * as React from 'react'
import { shallow } from 'enzyme'
import syn16787123Json  from '../../../mocks/syn16787123.json'
import { QueryResultBundle } from '../../../lib/utils/jsonResponses/Table/QueryResultBundle'
import { TotalQueryResults, TotalQueryResultsProps } from '../../../lib/containers/TotalQueryResults'
import { cloneDeep } from 'lodash'
import { FacetColumnResultValueCount } from '../../../lib/utils/jsonResponses/Table/FacetColumnResult.js'

const createShallowComponent = (props: TotalQueryResultsProps) => {
  const wrapper = shallow<typeof TotalQueryResults>(
    <TotalQueryResults
      {...props}
    />
  )
  const instance = wrapper.instance()
  return { wrapper, instance }
}

describe('it works', () => {
  const FUNDING_AGENCY_COUNT = 59
  const FUNDING_AGENCY_FACET_INDEX = 2
  const displayText = 'Displaying'
  // cast the data to ignore ts warning
  const data = syn16787123Json as QueryResultBundle
  const props: TotalQueryResultsProps = {
    data,
    isLoading: false,
    filter: 'fundingAgency',
    doneLoadingTextFunction: (total, loader) => <React.Fragment>{displayText} {total}{loader}</React.Fragment>,
    isLoadingTextFunction: (total, loader) => <React.Fragment>{displayText} {total}{loader}</React.Fragment>
  }
  it('renders without crashing', () => {
    const tree = createShallowComponent(props)
    expect(tree).toBeDefined()
  })

  it('renders with a faceted view correctly', async () => {
    const { wrapper } = createShallowComponent(props)
    expect(wrapper.find('.SRC-boldText').text()).toEqual(`${displayText} ${FUNDING_AGENCY_COUNT}`)
  })

  it('renders with a loading spinner when loading', async () => {
    const { wrapper } = createShallowComponent({ ...props, isLoading: true })
    expect(wrapper.find('span.spinner')).toHaveLength(1)
  })

  it('displays the total sum with zero facets selected in the given data', () => {
    const cloneData = cloneDeep(data)
    cloneData.facets[FUNDING_AGENCY_FACET_INDEX].facetValues.forEach(
      (element: FacetColumnResultValueCount) => {
        element.isSelected = false
      }
    )
    const { wrapper } = createShallowComponent({ ...props, data: cloneData })
    expect(wrapper.find('.SRC-boldText').text()).toEqual(`${displayText} ${FUNDING_AGENCY_COUNT}`)
  })

  it('renders without a faceted view correctly', async () => {
    const { wrapper } = createShallowComponent({ ...props, totalResultsNoFacet: 59, filter: '' })
    expect(wrapper.find('p.SRC-boldText.SRC-text-title').text()).toEqual(`${displayText} ${FUNDING_AGENCY_COUNT}`)
  })
})
