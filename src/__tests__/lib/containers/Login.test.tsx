import * as React from 'react'
import { shallow } from 'enzyme'
import Login from '../../../lib/containers/Login'
import { resolveAllPending } from 'lib/testutils/EnzymeHelpers'

const SynapseClient = require('../../../lib/utils/SynapseClient')
SynapseClient.login = jest.fn().mockResolvedValue({
  sessionToken: 'abc-123',
  acceptsTermsOfUse: true,
  authenticationReceipt: 'xyz-456',
})

describe('Functionality of Login Component ', () => {
  const callback = jest.fn()

  it('renders', () => {
    const tree = shallow(<Login sessionCallback={callback} />)
    expect(tree).toBeDefined()
  })

  it('Makes a login request and invokes the callback when clicking Sign In', async () => {
    const tree = shallow(<Login sessionCallback={callback} />)

    const loginButton = tree.findWhere(
      n =>
        n.name() === 'Button' &&
        n.prop('className').includes('SRC-login-button'),
    )
    loginButton.prop('onSubmit')({ preventDefault: () => {} })

    await resolveAllPending(tree)
    expect(SynapseClient.login).toHaveBeenCalled()
    expect(callback).toHaveBeenCalled()
  })
})
