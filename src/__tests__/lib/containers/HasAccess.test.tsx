import * as React from 'react'
import { shallow } from 'enzyme'
import HasAccess, { HasAccessProps } from '../../../lib/containers/HasAccess'
import { 
  mockUnmetControlledDataRestrictionInformation,
  mockOpenRestrictionInformation,
 } from '../../../mocks/mock_has_access_data'
import _ from 'lodash'
import { RestrictionInformationRequest, RestrictableObjectType } from 'lib/utils/jsonResponses/RestrictionInformation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SynapseClient = require('../../../lib/utils/SynapseClient')
const token: string = '123444'
const synapseId = 'syn9988882982'

const createShallowComponent = async (
  props: HasAccessProps,
  disableLifecycleMethods: boolean = false,
) => {
  const wrapper = await shallow<HasAccess>(<HasAccess {...props} />, {
    disableLifecycleMethods,
  })

  const instance = wrapper.instance()
  return { wrapper, instance }
}
const props: HasAccessProps = {
  token,
  synapseId
}

describe('basic tests', () => {
  it('get open data', async () => {
    SynapseClient.getRestrictionInformation = jest.fn(() =>
      Promise.resolve(mockOpenRestrictionInformation),
    )
    const { wrapper, instance } = await createShallowComponent(props)
    instance.getRestrictionInformation()
    const request: RestrictionInformationRequest = {
      restrictableObjectType: RestrictableObjectType.ENTITY,
      objectId: synapseId
    }
    expect(SynapseClient.getRestrictionInformation).toHaveBeenCalledWith(
      request,
      token
    )
    expect(instance.state.restrictionInformation).toEqual(mockOpenRestrictionInformation)
    const icon = wrapper.find(FontAwesomeIcon)
    expect(icon).toHaveLength(1)
  })

  it('get unmet controlled access data', async () => {
    SynapseClient.getRestrictionInformation = jest.fn(() =>
      Promise.resolve(mockUnmetControlledDataRestrictionInformation),
    )

    const { wrapper, instance } = await createShallowComponent(props)
    instance.getRestrictionInformation()
    const request: RestrictionInformationRequest = {
      restrictableObjectType: RestrictableObjectType.ENTITY,
      objectId: synapseId
    }
    expect(SynapseClient.getRestrictionInformation).toHaveBeenCalledWith(
      request,
      token
    )
    expect(instance.state.restrictionInformation).toEqual(mockUnmetControlledDataRestrictionInformation)
    const link = wrapper.find('a')
    expect(link).toHaveLength(1)
  })
})
