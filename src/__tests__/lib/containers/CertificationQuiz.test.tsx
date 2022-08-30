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
import { rest, server } from '../../../mocks/msw/server'
import {
  mockQuiz,
  mockPassingRecord,
} from '../../../mocks/mockCertificationQuiz'

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
    return res(ctx.status(200), ctx.json(mockQuiz))
  },
)

const failedQuizHandler = rest.post(
  `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}
    /repo/v1/certifiedUserTestResponse`,
  async (req, res, ctx) => {
    return res(ctx.status(201), ctx.json({ mockPassingRecord }))
  },
)

const passedQuizHandler = rest.post(
  `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}
    /repo/v1/certifiedUserTestResponse`,
  async (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({ ...mockPassingRecord, passed: true }),
    )
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
    await screen.queryByText('Mock Certification Quiz')
  })

  it('Open new tab when clicking help button', async () => {
    renderComponent()
    const helpButton = await screen.findByRole('button', { name: 'Help' })
    userEvent.click(helpButton!)
    expect(window.open).toHaveBeenCalledWith(gettingStartedUrl, '_blank')
  })

  it('Submit quiz when not all questions are answered', async () => {
    renderComponent()
    const submitButton = await screen.findByRole('button', { name: 'Submit' })
    userEvent.click(submitButton)

    await waitFor(() =>
      expect(mockToastFn).toBeCalledWith(
        'Please answer all of the questions and try again.',
        'warning',
      ),
    )
  })

  it('Submit quiz that did not pass', async () => {
    server.use(failedQuizHandler)
    renderComponent()
    const submitButton = await screen.findByRole('button', { name: 'Submit' })
    userEvent.click(submitButton)

    await screen.queryByText('Quiz Failed')
  })

  it('Submit quiz that did pass', async () => {
    server.use(passedQuizHandler)
    renderComponent()
    await screen.queryByText(
      `${mockQuiz.questions.length} / ${mockQuiz.questions.length}`,
    )
  })
})
