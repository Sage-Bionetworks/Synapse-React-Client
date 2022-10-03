import React from 'react'
import {
  render,
  screen,
  renderHook,
  waitFor,
  within,
} from '@testing-library/react'
import HtmlPreview, {
  HtmlPreviewProps,
  EXPORTED_FOR_UNIT_TESTING,
} from '../../../../../lib/containers/FilePreview/HtmlPreview/HtmlPreview'
import { createWrapper } from '../../../../../lib/testutils/TestingLibraryUtils'
import { rest, server } from '../../../../../mocks/msw/server'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../../lib/utils/functions/getEndpoint'
import { TEAM_MEMBERS } from '../../../../../lib/utils/APIConstants'
import { PaginatedResults } from '../../../../../lib/utils/synapseTypes'
import { TeamMember } from '../../../../../lib/utils/synapseTypes/TeamMember'
import {
  MOCK_USER_ID,
  MOCK_USER_ID_2,
  MOCK_USER_NAME,
} from '../../../../../mocks/user/mock_user_profile'
import { TRUSTED_HTML_USERS_TEAM_ID } from '../../../../../lib/utils/SynapseConstants'
import userEvent from '@testing-library/user-event'

function renderComponent(props: HtmlPreviewProps) {
  return render(<HtmlPreview {...props} />, { wrapper: createWrapper() })
}

const { useCleanHtml } = EXPORTED_FOR_UNIT_TESTING

describe('HTML Preview tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    // Configure the team members request to indicate that MOCK_USER_ID is on the trusted users team
    const results: TeamMember[] = [
      {
        teamId: TRUSTED_HTML_USERS_TEAM_ID.toString(),
        member: {
          userName: MOCK_USER_NAME,
          ownerId: MOCK_USER_ID.toString(),
          isIndividual: true,
        },
        isAdmin: false,
      },
    ]

    server.use(
      rest.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${TEAM_MEMBERS(
          TRUSTED_HTML_USERS_TEAM_ID,
        )}`,
        (req, res, ctx) => {
          const result: PaginatedResults<TeamMember> = {
            results: results,
          }
          return res(ctx.status(200), ctx.json(result))
        },
      ),
    )
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  describe('useCleanHtml unit tests', () => {
    it('Returns undefined if isLoading is true', () => {
      const { result } = renderHook(() =>
        useCleanHtml({
          isLoading: true,
          rawHtml: '',
          isTrusted: false,
        }),
      )
      expect(result.current).toEqual(undefined)
    })
    it('Returns rawHtml if the user is trusted', () => {
      const isTrustedUser = true
      const rawHtml = "<script>alert('hello')</script>"
      const { result } = renderHook(() =>
        useCleanHtml({
          isLoading: false,
          rawHtml: rawHtml,
          isTrusted: isTrustedUser,
        }),
      )
      expect(result.current).toEqual(rawHtml)
    })
    it('Sanitizes HTML if the user is not trusted', () => {
      const isTrustedUser = false
      const rawHtml = "<script>alert('hello')</script>"
      const { result } = renderHook(() =>
        useCleanHtml({
          isLoading: false,
          rawHtml: rawHtml,
          isTrusted: isTrustedUser,
        }),
      )
      expect(result.current).not.toEqual(rawHtml)
    })
  })

  it('Renders the raw HTML if the creator is on the trusted team', async () => {
    const idOfUserOnTrustedTeam = MOCK_USER_ID.toString()
    const rawHtml = "<script>alert('hello')</script>"
    const fileHandle = {
      createdBy: idOfUserOnTrustedTeam,
    }
    const { container } = renderComponent({
      rawHtml,
      fileHandle,
    })

    let frame: HTMLIFrameElement | null = null
    await waitFor(() => {
      frame = container.querySelector('iframe')
      expect(frame).toBeDefined()
      expect(frame).toHaveAttribute('srcdoc', rawHtml)
    })
    // Verify that no alert is shown since the content is trusted
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('Sanitizes the HTML if the creator is NOT on the trusted team', async () => {
    // Use a user ID NOT on the trusted team
    const idOfUserNotOnTrustedTeam = MOCK_USER_ID_2.toString()
    const rawHtml = "<script>alert('hello')</script>"
    const fileHandle = {
      createdBy: idOfUserNotOnTrustedTeam,
    }
    const { container } = renderComponent({
      rawHtml,
      fileHandle,
    })

    let frame: HTMLIFrameElement | null = null
    await waitFor(() => {
      frame = container.querySelector('iframe')
      expect(frame).toBeDefined()
      // The HTML is sanitized, so the script tag is removed
      expect(frame).toHaveAttribute('srcdoc', '')
    })

    // An alert should be shown to open the unsanitized content in a new window
    const alert = await screen.findByRole('alert')
    const openInNewWindowLink = within(alert).getByText(
      'External view available.',
    )

    // Mock the window.open function to validate that we pass unsanitized HTML
    const mockDocumentWrite = jest.fn()
    const mockDocumentClose = jest.fn()
    jest.spyOn(window, 'open').mockImplementation(() => ({
      document: { write: mockDocumentWrite, close: mockDocumentClose },
    }))

    await userEvent.click(openInNewWindowLink)
    const modalConfirmation = await screen.findByRole('dialog')
    await userEvent.click(
      within(modalConfirmation).getByRole('button', { name: 'OK' }),
    )

    await waitFor(() => {
      expect(window.open).toHaveBeenCalled()
      // Unsanitized HTML passed to new window
      expect(mockDocumentWrite).toHaveBeenCalledWith(rawHtml)
      expect(mockDocumentClose).toHaveBeenCalled()
    })
  })

  it('Shows no alert if sanitized HTML is identical to unsanitized HTML', async () => {
    // Use a user ID NOT on the trusted team
    const idOfUserNotOnTrustedTeam = MOCK_USER_ID_2.toString()
    const rawHtml = '<span>no restricted content here</span>'
    const fileHandle = {
      createdBy: idOfUserNotOnTrustedTeam,
    }
    const { container } = renderComponent({
      rawHtml,
      fileHandle,
    })

    let frame: HTMLIFrameElement | null = null
    await waitFor(() => {
      frame = container.querySelector('iframe')
      expect(frame).toBeDefined()
      // The HTML should be identical since it doesn't contain anything that would be stripped by sanitization
      expect(frame).toHaveAttribute('srcdoc', rawHtml)
    })

    // Verify that no alert is shown since the content was unchanged by sanitization
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
