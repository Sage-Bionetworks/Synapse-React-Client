import { render, screen } from '@testing-library/react'
import React from 'react'
import { SynapseNavDrawer, SynapseNavDrawerProps } from '../../../lib/containers/SynapseNavDrawer'
import { createWrapper } from '../../../lib/testutils/TestingLibraryUtils'
import { SynapseContextType } from '../../../lib/utils/SynapseContext'
import { server } from '../../../mocks/msw/server'

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

  it('Shows Synapse Nav Drawer with logged in user items', () => {
    // mock successful response set up in handlers.ts (when an access token is provided)
    renderComponent()

    // provide waitForElementOptions to allow time to update the component state (with user info)
    screen.findByTestId('Projects', undefined, { timeout: 1000 })
    screen.findByTestId('Favorites', undefined, { timeout: 1000 })
    screen.findByTestId('Teams', undefined, { timeout: 1000 })
    screen.findByTestId('Challenges', undefined, { timeout: 1000 })
    screen.findByTestId('Search')
    screen.findByTestId('Help')
    screen.findByTestId('Your Account', undefined, { timeout: 1000 })
  })

  it('Show Synapse Nav Drawer anonymous items', () => {
    renderComponent({accessToken: undefined, isInExperimentalMode: false, utcTime: false})
    screen.findByTestId('Search')
    screen.findByTestId('Help')
  })
})
