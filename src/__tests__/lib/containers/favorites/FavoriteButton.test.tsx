import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { createWrapper } from '../../../../lib/testutils/TestingLibraryUtils'
import FavoriteButton from '../../../../lib/containers/favorites/FavoriteButton'
import { rest, server } from '../../../../mocks/msw/server'
import mockFileEntityData from '../../../../mocks/entity/mockFileEntity'
import { FAVORITES } from '../../../../lib/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../lib/utils/functions/getEndpoint'
import {
  EntityHeader,
  PaginatedResults,
} from '../../../../lib/utils/synapseTypes'
import userEvent from '@testing-library/user-event'
import { SynapseContextType } from '../../../../lib/utils/SynapseContext'
import { MOCK_CONTEXT_VALUE } from '../../../../mocks/MockSynapseContext'

function renderComponent(wrapperProps?: SynapseContextType) {
  return render(<FavoriteButton entityId={mockFileEntityData.id} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

const onAddFavoriteCalled = jest.fn()
const onDeleteFavoriteCalled = jest.fn()

function useIsInFavorites() {
  server.use(
    rest.get(
      `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${FAVORITES}`,

      async (req, res, ctx) => {
        const response: PaginatedResults<EntityHeader> = {
          results: [mockFileEntityData.entityHeader!],
        }

        return res(ctx.status(200), ctx.json(response))
      },
    ),
  )
}
function useIsNotInFavorites() {
  server.use(
    rest.get(
      `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${FAVORITES}`,

      async (req, res, ctx) => {
        const response: PaginatedResults<EntityHeader> = {
          results: [],
        }

        return res(ctx.status(200), ctx.json(response))
      },
    ),
  )
}

server.use(
  rest.post(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${FAVORITES}/:id`,
    async (req, res, ctx) => {
      onAddFavoriteCalled(req.params.id)
      useIsInFavorites()
      return res(ctx.status(201), ctx.json(mockFileEntityData.entityHeader!))
    },
  ),
  rest.delete(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${FAVORITES}/:id`,
    async (req, res, ctx) => {
      onDeleteFavoriteCalled(req.params.id)
      useIsNotInFavorites()
      return res(ctx.status(200))
    },
  ),
)

describe('FavoriteButton tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Clicking the button adds/removes from favorites', async () => {
    useIsNotInFavorites()

    renderComponent()

    await screen.findByLabelText('Add to Favorites')
    let button = await screen.findByRole('button')

    await userEvent.click(button)
    await waitFor(() => expect(onAddFavoriteCalled).toBeCalledTimes(1))

    await screen.findByLabelText('Remove from Favorites')
    button = await screen.findByRole('button')

    await userEvent.click(button)
    await waitFor(() => expect(onDeleteFavoriteCalled).toBeCalledTimes(1))

    await screen.findByLabelText('Add to Favorites')
  })

  it('Disables the button with a useful tooltip for an unauthenticated user', async () => {
    renderComponent({
      ...MOCK_CONTEXT_VALUE,
      accessToken: undefined,
    })

    await screen.findByLabelText('Sign in to add this to your favorites')
  })

  it('Disables the button while toggling the favorite', async () => {
    // Create a function that we'll use to delay the response from the mock server
    let sendResponse: (() => void) | null
    server.use(
      rest.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${FAVORITES}/:id`,
        (req, res, ctx) => {
          onAddFavoriteCalled(req.params.id)
          useIsInFavorites()
          sendResponse = () => {
            res(ctx.status(201), ctx.json(mockFileEntityData.entityHeader!))
          }
          return
        },
      ),
    )

    // Start with the button not in favorites
    useIsNotInFavorites()

    renderComponent()

    // Click "Add to Favorites"
    const button = await screen.findByRole('button')
    await userEvent.click(button)

    // Wait for the server to get the request and assign the variable
    await waitFor(() => expect(sendResponse).toBeDefined())

    // No response yet; the button should be disabled
    expect(button).toBeDisabled()

    // Allow the server to send the response
    sendResponse!()

    // Once the client receives the response, the button should be enabled again
    await waitFor(() => expect(button).not.toBeDisabled())
  })
})
