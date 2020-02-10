import { shallow } from 'enzyme'
import { cloneDeep } from 'lodash-es'
import * as React from 'react'
import TotalQueryResults, {
  TotalQueryResultsProps,
} from '../../../lib/containers/TotalQueryResults'
import {
  FacetColumnResultValueCount,
  QueryResultBundle,
} from '../../../lib/utils/synapseTypes/'
import syn16787123Json from '../../../mocks/syn16787123.json'

const createShallowComponent = (props: TotalQueryResultsProps) => {
  const wrapper = shallow<typeof TotalQueryResults>(
    <TotalQueryResults {...props} />,
  )
  const instance = wrapper.instance()
  return { wrapper, instance }
}

describe('it works', () => {
  const FUNDING_AGENCY_COUNT = 59
  const FUNDING_AGENCY_FACET_INDEX = 2
  const displayText = 'Displaying'
  const unitDescription = 'units'
  // cast the data to ignore ts warning
  const data = syn16787123Json as QueryResultBundle
  const props: TotalQueryResultsProps = {
    data,
    unitDescription,
    isLoading: false,
    facet: 'fundingAgency',
    frontText: 'Displaying',
  }
  it('renders without crashing', () => {
    const tree = createShallowComponent(props)
    expect(tree).toBeDefined()
  })

  it('renders with a faceted view correctly', async () => {
    const { wrapper } = createShallowComponent(props)
    expect(wrapper.find('.SRC-boldText').text()).toEqual(
      `${displayText} ${FUNDING_AGENCY_COUNT} ${unitDescription} `,
    )
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
      },
    )
    const { wrapper } = createShallowComponent({ ...props, data: cloneData })
    expect(wrapper.find('.SRC-boldText').text()).toEqual(
      `${displayText} ${FUNDING_AGENCY_COUNT} ${unitDescription} `,
    )
  })
})
