import * as React from 'react'
import { server } from '../../../mocks/msw/server'
import { SynapseContextType } from '../../../lib/utils/SynapseContext'
import { render, screen } from '@testing-library/react'
import { AccessApprovalsTable } from '../../../lib/containers/AccessApprovalsTable'
import { createWrapper } from '../../../lib/testutils/TestingLibraryUtils'
import { UserBundle } from '../../../lib/utils/synapseTypes'

function renderComponent(wrapperProps?: SynapseContextType) {
  render(<AccessApprovalsTable accessorId="123" />, {
    wrapper: createWrapper(wrapperProps),
  })
}

describe('AccessApprovalsTable tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Shows the table of access approvals', async () => {
    renderComponent()

    await screen.findByText('AR ID')
    await screen.findByText('Access Requirement Name')
    await screen.findByText('Submitter')
    await screen.findByText('Status')
    await screen.findByText('Modified Date')
    await screen.findByText('Expires')
  })
})
