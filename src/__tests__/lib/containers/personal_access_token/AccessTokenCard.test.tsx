import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import {
  AccessTokenCard,
  AccessTokenCardProps,
} from '../../../../lib/containers/personal_access_token/AccessTokenCard'
import { createWrapper } from '../../../../lib/testutils/TestingLibraryUtils'
import * as SynapseContext from '../../../../lib/utils/SynapseContext'
import { MOCK_CONTEXT_VALUE } from '../../../../mocks/MockSynapseContext'

const SynapseClient = require('../../../../lib/utils/SynapseClient')
const mockOnDelete = jest.fn(() => null)

SynapseClient.deletePersonalAccessToken = jest
  .fn()
  .mockResolvedValue({ status: 200 })

const activeTokenProps: AccessTokenCardProps = {
  accessToken: {
    id: '45',
    userId: '3350396',
    scopes: ['view', 'download'],
    name: 'My access token',
    createdOn: '2020-08-23T14:59:19.073Z',
    lastUsed: '2020-10-25T14:59:19.073Z',
    state: 'ACTIVE',
  },
  onDelete: mockOnDelete,
}

const expiredTokenProps: AccessTokenCardProps = {
  accessToken: {
    id: '45',
    userId: '3350396',
    scopes: ['view', 'download'],
    name: 'My access token',
    createdOn: '2020-08-23T14:59:19.073Z',
    lastUsed: '2020-10-25T14:59:19.073Z',
    state: 'EXPIRED',
  },
  onDelete: mockOnDelete,
}

function renderComponent(props: AccessTokenCardProps) {
  return render(<AccessTokenCard {...props} />, { wrapper: createWrapper() })
}

describe('Personal Access Token Card tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest
      .spyOn(SynapseContext, 'useSynapseContext')
      .mockImplementation(() => MOCK_CONTEXT_VALUE)
  })

  it('Does not have warning style for an active token', () => {
    const { container } = renderComponent(activeTokenProps)
    expect(
      container
        .querySelector('div.PersonalAccessTokenCard')!
        .classList.contains('bg-warning'),
    ).toBe(false)
  })

  it('Has warning style for an expired token', () => {
    const { container } = renderComponent(expiredTokenProps)
    expect(
      container
        .querySelector('div.PersonalAccessTokenCard')!
        .classList.contains('bg-warning'),
    ).toBe(true)
  })

  it('modal pops up and sends request on delete', async () => {
    renderComponent(activeTokenProps)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    // Click delete button to open modal
    const deleteButton = screen.getByRole('button', { name: 'delete' })
    userEvent.click(deleteButton)

    expect(await screen.findByRole('dialog')).toBeVisible()

    // Click 'Delete'
    userEvent.click(screen.getByRole('button', { name: 'Delete Token' }))

    await waitFor(() =>
      expect(SynapseClient.deletePersonalAccessToken).toHaveBeenCalled(),
    )
    await waitFor(() => expect(mockOnDelete).toHaveBeenCalled())
  })

  it('does not delete when modal is canceled', async () => {
    renderComponent(activeTokenProps)

    // Click delete button to open modal
    const deleteButton = screen.getByRole('button', { name: 'delete' })
    userEvent.click(deleteButton)

    expect(await screen.findByRole('dialog')).toBeVisible()

    // Click 'Cancel'
    userEvent.click(screen.getByRole('button', { name: 'Cancel' }))

    await waitFor(() =>
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
    )
    expect(SynapseClient.deletePersonalAccessToken).not.toHaveBeenCalled()
    expect(mockOnDelete).not.toHaveBeenCalled()
  })

  it('sends request on delete with no modal when expired', async () => {
    renderComponent(expiredTokenProps)

    // Click delete button -- no modal should open, because the token has expired.
    const deleteButton = screen.getByRole('button', { name: 'delete' })
    userEvent.click(deleteButton)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    await waitFor(() =>
      expect(SynapseClient.deletePersonalAccessToken).toHaveBeenCalled(),
    )
    await waitFor(() => expect(mockOnDelete).toHaveBeenCalled())
  })
})
