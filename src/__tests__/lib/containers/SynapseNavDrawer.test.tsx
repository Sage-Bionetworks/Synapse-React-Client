import { render, screen } from '@testing-library/react'
import React from 'react'
import {
  SynapseNavDrawer,
  SynapseNavDrawerProps,
} from '../../../lib/containers/SynapseNavDrawer'
import { createWrapper } from '../../../lib/testutils/TestingLibraryUtils'
import { SynapseContextType } from '../../../lib/utils/SynapseContext'
import { server } from '../../../mocks/msw/server'
import { INVALID_ACCESS_TOKEN_CAUSES_GET_PROFILE_ERROR } from '../../../mocks/user/mock_user_profile'

const defaultProps: SynapseNavDrawerProps = {
  initIsOpen: false,
  signoutCallback: jest.fn(),
}

function renderComponent(wrapperProps?: SynapseContextType) {
  render(<SynapseNavDrawer {...defaultProps} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

describe('SynapseNavDrawer tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Shows Synapse Nav Drawer with logged in user items', async () => {
    // mock successful response set up in handlers.ts (when an access token is provided)
    renderComponent()

    await screen.findByTestId('Projects')
    await screen.findByTestId('Favorites')
    await screen.findByTestId('Teams')
    await screen.findByTestId('Challenges')
    await screen.findByTestId('Search')
    await screen.findByTestId('Help')
    await screen.findByTestId('Your Account')
  })
})
