import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { createWrapper } from '../../../../lib/testutils/TestingLibraryUtils'
import { rest, server } from '../../../../mocks/msw/server'
import {
  CreateOAuthModal,
  CreateOAuthModalProps,
} from '../../../../lib/containers/oauth/CreateOAuthClient'
import { mockClientList1 } from '../../../../mocks/oauth/MockClient'
import { displayToast } from '../../../../lib/containers/ToastMessage'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../lib/utils/functions/getEndpoint'
import { ConfirmModal } from '../../../../lib/containers/oauth/OAuthConfirmationModal'

jest.mock('../../../../lib/containers/ToastMessage', () => {
  return { displayToast: jest.fn() }
})
jest.mock('../../../../lib/containers/oauth/OAuthConfirmationModal', () => ({
  ConfirmModal: jest.fn().mockImplementation(() => {
    return <div></div>
  }),
}))

const mockConfirmModal = ConfirmModal
const mockToastFn = displayToast

const updatedClient = jest.fn()
const mockClient = mockClientList1.results[0]
const defaultProps: CreateOAuthModalProps = {
  isShowingModal: true,
  onClose: jest.fn(),
  isEdit: false,
  setSelectedClient: jest.fn(),
  isShowingConfirmModal: false,
  setIsShowingConfirmModal: jest.fn(),
}

function renderComponent(props: CreateOAuthModalProps = defaultProps) {
  render(<CreateOAuthModal {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('Create 0Auth Client', () => {
  beforeAll(() => server.listen())
  afterEach(() => {
    jest.clearAllMocks()
    server.restoreHandlers()
    updatedClient.mockClear()
  })
  afterAll(() => server.close())

  it('Shows the modal', async () => {
    renderComponent()
    await screen.findByText('Create New OAuth Client')
    expect(screen.getAllByRole('textbox')).toHaveLength(6)
  })

  it('Creates a client on save', async () => {
    server.use(
      rest.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/auth/v1/oauth2/client`,
        async (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(req.body))
        },
      ),
    )
    renderComponent()
    const inputName = (await screen.findAllByRole('textbox'))[0]
    const inputHomePage = (await screen.findAllByRole('textbox'))[1]
    const inputRedirectURI = (await screen.findAllByRole('textbox'))[2]

    const saveButton = screen.queryByRole('button', { name: 'Save' })

    userEvent.type(inputName, mockClient.client_name)
    userEvent.type(inputHomePage, mockClient.client_uri!)
    userEvent.type(inputRedirectURI, mockClient.redirect_uris[0]!)

    await waitFor(() => {
      expect(inputName).toHaveValue(mockClient.client_name)
      expect(inputHomePage).toHaveValue(mockClient.client_uri)
      expect(inputRedirectURI).toHaveValue(mockClient.redirect_uris[0])
    })

    userEvent.click(saveButton!)

    await waitFor(() =>
      expect(mockToastFn).toBeCalledWith('Successfully saved', 'success'),
    )
  })

  it('Shows a warning modal when deleteing a client', async () => {
    renderComponent({ ...defaultProps, isEdit: true, client: mockClient })
    const deleteButton = screen.queryByRole('button', { name: 'DELETE CLIENT' })
    userEvent.click(deleteButton!)

    // await screen.findByText('Are you absolutely sure?')
    expect(mockConfirmModal).toHaveBeenLastCalledWith(
      expect.objectContaining({
        client: mockClient,
        isDelete: true,
      }),
      expect.anything(),
    )
  })

  it('Updates a client', async () => {
    server.use(
      rest.put(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/auth/v1/oauth2/client/${mockClient.client_id}`,
        async (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(req.body))
        },
      ),
    )
    const showModal = jest.fn().mockReturnValue(true)

    renderComponent({
      ...defaultProps,
      setIsShowingConfirmModal: showModal,
      isEdit: true,
      client: mockClient,
    })
    const inputName = (await screen.findAllByRole('textbox'))[0]
    const saveButton = screen.queryByRole('button', { name: 'Save' })
    fireEvent.change(inputName, { target: { value: 'rename' } })

    await waitFor(() => expect(inputName).toHaveValue('rename'))
    userEvent.click(saveButton!)

    await waitFor(() =>
      expect(mockToastFn).toBeCalledWith('Successfully saved', 'success'),
    )
  })

  it('Shows a warning modal when changing redirect uri', async () => {
    renderComponent({ ...defaultProps, isEdit: true, client: mockClient })
    const inputRedirectURI = (await screen.findAllByRole('textbox'))[4]
    const saveButton = screen.queryByRole('button', { name: 'Save' })

    userEvent.type(inputRedirectURI, 'xxx')
    await waitFor(() =>
      expect(inputRedirectURI).toHaveValue('https://sagebase.orgxxx'),
    )
    userEvent.click(saveButton!)

    expect(mockConfirmModal).toHaveBeenCalledWith(
      expect.objectContaining({
        client: {
          client_id: '999',
          client_name: 'First',
          client_uri: 'https://sagebase.org',
          etag: undefined,
          policy_uri: 'https://sagebase.org',
          redirect_uris: ['https://sagebase.orgxxx'],
          sector_identifier_uri: 'https://sagebase.org',
          tos_uri: 'https://sagebase.org',
        },
        isDelete: false,
      }),
      expect.anything(),
    )
  })
})
