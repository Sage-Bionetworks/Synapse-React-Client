import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import CertificationQuiz from '../../../lib/containers/CertificationQuiz'
import { displayToast } from '../../../lib/containers/ToastMessage'
import { createWrapper } from '../../../lib/testutils/TestingLibraryUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../lib/utils/functions/getEndpoint'
import { Quiz } from '../../../lib/utils/synapseTypes/CertificationQuiz/Quiz'
import { rest, server } from '../../../mocks/msw/server'

window.open = jest.fn()
jest.mock('../../../lib/containers/ToastMessage', () => {
  return { displayToast: jest.fn() }
})

const mockToastFn = displayToast
const gettingStartedUrl =
  'https://help.synapse.org/docs/Getting-Started.2055471150.html'

const getQuizHandler = rest.get(
  `${getEndpoint(
    BackendDestinationEnum.REPO_ENDPOINT,
  )}/repo/v1/certifiedUserTest`,
  async (req, res, ctx) => {
    const response: Quiz = {
      id: 123,
      header: 'Mock Certification Quiz',
      questions: [],
    }
    return res(ctx.status(200), ctx.json(response))
  },
)

function renderComponent() {
  render(<CertificationQuiz />, {
    wrapper: createWrapper(),
  })
}

describe('CertificationQuiz tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('Shows loads the certification quiz', async () => {
    server.use(getQuizHandler)
    renderComponent()
    await screen.findByText('Mock Certification Quiz')
  })

  it('Open new tab when clicking help button', async () => {
    renderComponent()
    const helpButton = screen.queryByRole('button', { name: 'Help' })
    userEvent.click(helpButton!)

    expect(window.open).toHaveBeenCalledWith(gettingStartedUrl, '_blank')
  })

  it('Open new tab when clicking help button', async () => {
    renderComponent()
    const submitButton = screen.queryByRole('button', { name: 'Submit' })
    userEvent.click(submitButton!)

    await waitFor(() =>
      expect(mockToastFn).toBeCalledWith(
        'Please answer all of the questions and try again.',
        'warning',
      ),
    )
  })
})
