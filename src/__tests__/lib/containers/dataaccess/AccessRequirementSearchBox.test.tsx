import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import selectEvent from 'react-select-event'
import AccessRequirementSearchBox from '../../../../lib/containers/dataaccess/AccessRequirementSearchBox'
import { createWrapper } from '../../../../lib/testutils/TestingLibraryUtils'
import { ACCESS_REQUIREMENT_SEARCH } from '../../../../lib/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../lib/utils/functions/getEndpoint'
import { mockSearchResults } from '../../../../mocks/mockAccessRequirements'
import { rest, server } from '../../../../mocks/msw/server'

const mockOnChange = jest.fn()
const onServiceRecievedRequest = jest.fn()

function renderComponent() {
  render(<AccessRequirementSearchBox onChange={mockOnChange} />, {
    wrapper: createWrapper(),
  })
}

describe('Submission Page tests', () => {
  beforeAll(() => {
    server.listen()

    // Configure MSW
    server.use(
      // Return a mocked access requirement
      rest.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUIREMENT_SEARCH}`,

        async (req, res, ctx) => {
          onServiceRecievedRequest(req.body)
          return res(ctx.status(200), ctx.json(mockSearchResults))
        },
      ),
    )
  })
  afterEach(() => {
    server.restoreHandlers()
    jest.clearAllMocks()
  })
  afterAll(() => server.close())

  it('Queries the service with the initial blank query', async () => {
    renderComponent()

    const input = screen.getByRole('textbox')

    userEvent.click(input)

    // Should have sent a request with a blank input to populate the options
    await waitFor(() =>
      expect(onServiceRecievedRequest).toBeCalledWith(
        expect.objectContaining({
          nameContains: '',
        }),
      ),
    )
  })

  it('Sends a new query upon typing an input string', async () => {
    renderComponent()

    const input = screen.getByRole('textbox')
    const inputQuery = 'test query'
    userEvent.type(input, inputQuery)

    // Should have sent a new request with the input string
    await waitFor(() =>
      expect(onServiceRecievedRequest).toBeCalledWith(
        expect.objectContaining({
          nameContains: inputQuery,
        }),
      ),
    )
  })

  it('Calls the passed prop upon making a selection', async () => {
    renderComponent()

    const input = screen.getByRole('textbox')

    userEvent.click(input)

    // We haven't made a selection yet, so verify that we never called the passed prop
    expect(mockOnChange).not.toHaveBeenCalled()

    // Select the first access requirement (the label is $NAME ($ID))
    await selectEvent.select(input, 'Access Requirement 1 (123)')
    // The prop should have fired upon selecting this option
    await waitFor(() =>
      expect(mockOnChange).toBeCalledWith(mockSearchResults.results[0].id),
    )
  })
})
