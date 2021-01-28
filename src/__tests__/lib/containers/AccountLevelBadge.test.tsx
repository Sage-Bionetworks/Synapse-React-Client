import { mount } from 'enzyme'
import * as React from 'react'
import { resolveAllPending } from '../../../lib/testutils/EnzymeHelpers'
import { AccountLevelBadge, accountLevelRegisteredLabel, accountLevelCertifiedLabel, accountLevelVerifiedLabel } from '../../../lib/containers/AccountLevelBadge'
import { UserBundle } from '../../../lib/utils/synapseTypes'

const SynapseClient = require('../../../lib/utils/SynapseClient')

const mockRegistered:UserBundle = {"userId":"345424","isCertified":false,"isVerified":false}
const mockCertified:UserBundle = {"userId":"345424","isCertified":true,"isVerified":false}
const mockVerified:UserBundle = {"userId":"345424","isCertified":true,"isVerified":true}

describe('basic functionality', () => {
  const props = {
    userId: '1234',
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('registered user', async () => {
    SynapseClient.getUserBundle = jest
      .fn()
      .mockResolvedValueOnce(mockRegistered)

    const wrapper = mount(<AccountLevelBadge {...props} />)
    await resolveAllPending(wrapper)

    // find account level label
    const label = wrapper.find('.AccountLevelBadge__body__userAccountLevel'); 
    expect(label.text()).toEqual(accountLevelRegisteredLabel)
    expect(SynapseClient.getUserBundle).toHaveBeenCalledTimes(1)
  })

  it('certified user', async () => {
    SynapseClient.getUserBundle = jest
      .fn()
      .mockResolvedValueOnce(mockCertified)

    const wrapper = mount(<AccountLevelBadge {...props} />)
    await resolveAllPending(wrapper)

    // find account level label
    const label = wrapper.find('.AccountLevelBadge__body__userAccountLevel'); 
    expect(label.text()).toEqual(accountLevelCertifiedLabel)
    expect(SynapseClient.getUserBundle).toHaveBeenCalledTimes(1)
  })

  it('verified user', async () => {
    SynapseClient.getUserBundle = jest
      .fn()
      .mockResolvedValueOnce(mockVerified)

    const wrapper = mount(<AccountLevelBadge {...props} />)
    await resolveAllPending(wrapper)

    // find account level label
    const label = wrapper.find('.AccountLevelBadge__body__userAccountLevel'); 
    expect(label.text()).toEqual(accountLevelVerifiedLabel)
    expect(SynapseClient.getUserBundle).toHaveBeenCalledTimes(1)
  })
})
