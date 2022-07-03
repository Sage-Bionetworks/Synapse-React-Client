import { SynapseClientError } from '../../../lib/utils/SynapseClientError'

describe('SynapseClientError tests', () => {
  it('Includes the class in the prototype chain', () => {
    const error = new SynapseClientError(404, 'Not found!', 'some-url')
    expect(error instanceof SynapseClientError).toBe(true)
  })
})
