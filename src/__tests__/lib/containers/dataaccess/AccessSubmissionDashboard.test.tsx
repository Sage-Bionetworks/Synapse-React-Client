import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory, MemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'
import selectEvent from 'react-select-event'
import {
  DataAccessSubmissionDashboard,
  DataAccessSubmissionDashboardProps,
} from '../../../../lib/containers/dataaccess/AccessSubmissionDashboard'
import { createWrapper } from '../../../../lib/testutils/TestingLibraryUtils'
import { server } from '../../../../mocks/msw/server'
import {
  MOCK_USER_ID,
  MOCK_USER_NAME,
} from '../../../../mocks/user/mock_user_profile'

const SUBMISSION_TABLE_TEST_ID = 'AccessSubmissionTableTestId'
const AR_NAME = 'abc'

jest.mock('../../../../lib/containers/AccessRequestSubmissionTable', () => ({
  AccessRequestSubmissionTable: jest.fn().mockImplementation(() => {
    return <div data-testid={SUBMISSION_TABLE_TEST_ID}></div>
  }),
}))

const {
  AccessRequestSubmissionTable: mockAccessRequestSubmissionTable,
} = require('../../../../lib/containers/AccessRequestSubmissionTable')

function renderComponent(
  props?: DataAccessSubmissionDashboardProps,
  modifyHistory?: (history: MemoryHistory) => void,
) {
  const history = createMemoryHistory()
  if (modifyHistory) {
    modifyHistory(history)
  }
  const renderResult = render(
    <Router history={history}>
      <DataAccessSubmissionDashboard {...props} />
    </Router>,
    {
      wrapper: createWrapper(),
    },
  )
  return { ...renderResult, history }
}

describe('AccessSubmissionDashboard tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Renders inputFields and the table component', async () => {
    renderComponent()

    expect(await screen.findAllByRole('textbox')).toHaveLength(3)
    await screen.findByTestId(SUBMISSION_TABLE_TEST_ID)
    expect(mockAccessRequestSubmissionTable).toHaveBeenCalledWith(
      expect.objectContaining({
        arName: undefined,
        requesterId: undefined,
        reviewerId: undefined,
      }),
      expect.anything(),
    )
  })

  it('Updates the passed props and URLSearchParams when updating arName', async () => {
    const { history } = renderComponent()
    const arNameInput = (await screen.findAllByRole('textbox'))[0]
    userEvent.type(arNameInput, AR_NAME)

    await waitFor(() =>
      expect(
        new URLSearchParams(history.location.search).get('arName'),
      ).toEqual(AR_NAME),
    )
    expect(mockAccessRequestSubmissionTable).toHaveBeenCalledWith(
      expect.objectContaining({
        arName: AR_NAME,
        requesterId: undefined,
        reviewerId: undefined,
      }),
      expect.anything(),
    )
  })

  it('Updates the passed props and URLSearchParams when updating requesterId', async () => {
    const { history } = renderComponent()
    const requesterInput = (await screen.findAllByRole('textbox'))[1]
    userEvent.type(requesterInput, MOCK_USER_NAME.substring(0, 1))
    selectEvent.select(requesterInput, '@' + MOCK_USER_NAME)

    await waitFor(() =>
      expect(
        new URLSearchParams(history.location.search).get('requesterId'),
      ).toEqual(MOCK_USER_ID.toString()),
    )
    expect(mockAccessRequestSubmissionTable).toHaveBeenCalledWith(
      expect.objectContaining({
        arName: undefined,
        requesterId: MOCK_USER_ID.toString(),
        reviewerId: undefined,
      }),
      expect.anything(),
    )
  })

  it('Updates the passed props and URLSearchParams when updating reviewerId', async () => {
    const { history } = renderComponent()
    const reviewerInput = (await screen.findAllByRole('textbox'))[2]
    userEvent.type(reviewerInput, MOCK_USER_NAME.substring(0, 1))
    selectEvent.select(reviewerInput, '@' + MOCK_USER_NAME)

    await waitFor(() =>
      expect(
        new URLSearchParams(history.location.search).get('reviewerId'),
      ).toEqual(MOCK_USER_ID.toString()),
    )
    expect(mockAccessRequestSubmissionTable).toHaveBeenCalledWith(
      expect.objectContaining({
        arName: undefined,
        requesterId: undefined,
        reviewerId: MOCK_USER_ID.toString(),
      }),
      expect.anything(),
    )
  })

  it('Auto-fills the inputs with search parameter values', async () => {
    renderComponent(undefined, history => {
      const searchParams = new URLSearchParams('')
      searchParams.set('arName', AR_NAME)
      searchParams.set('requesterId', MOCK_USER_ID.toString())
      searchParams.set('reviewerId', MOCK_USER_ID.toString())
      history.push('?' + searchParams.toString())
    })

    await waitFor(() =>
      expect(mockAccessRequestSubmissionTable).toHaveBeenLastCalledWith(
        expect.objectContaining({
          arName: AR_NAME,
          requesterId: MOCK_USER_ID.toString(),
          reviewerId: MOCK_USER_ID.toString(),
        }),
        expect.anything(),
      ),
    )
  })
})
