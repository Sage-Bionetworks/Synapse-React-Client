import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory, MemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'
import selectEvent from 'react-select-event'
import {
  AccessRequirementDashboard,
  AccessRequirementDashboardProps,
} from '../../../../lib/containers/dataaccess/AccessRequirementDashboard'
import { createWrapper } from '../../../../lib/testutils/TestingLibraryUtils'
import { server } from '../../../../mocks/msw/server'
import {
  MOCK_USER_ID,
  MOCK_USER_NAME,
} from '../../../../mocks/user/mock_user_profile'

const AR_TABLE_TEST_ID = 'AccessRequirementTableTestId'
const NAME_CONTAINS_PREFIX = 'abc'
const RELATED_PROJECT_ID = 'syn123'

jest.mock(
  '../../../../lib/containers/dataaccess/AccessRequirementTable',
  () => ({
    AccessRequirementTable: jest.fn().mockImplementation(() => {
      return <div data-testid={AR_TABLE_TEST_ID}></div>
    }),
  }),
)

const {
  AccessRequirementTable: mockAccessRequirementTable,
} = require('../../../../lib/containers/dataaccess/AccessRequirementTable')

function renderComponent(
  props?: AccessRequirementDashboardProps,
  modifyHistory?: (history: MemoryHistory) => void,
) {
  const history = createMemoryHistory()
  if (modifyHistory) {
    modifyHistory(history)
  }
  const renderResult = render(
    <Router history={history}>
      <AccessRequirementDashboard {...props} />
    </Router>,
    {
      wrapper: createWrapper(),
    },
  )
  return { ...renderResult, history }
}

describe('AccessRequirementDashboard tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Renders input fields and the table component', async () => {
    const mockOnCreateNewAR = jest.fn()
    renderComponent({ onCreateNewAccessRequirementClicked: mockOnCreateNewAR })

    expect(await screen.findAllByRole('textbox')).toHaveLength(3)
    await screen.findByTestId(AR_TABLE_TEST_ID)
    expect(mockAccessRequirementTable).toHaveBeenCalledWith(
      expect.objectContaining({
        nameContains: '',
        relatedProjectId: undefined,
        reviewerId: undefined,
        onCreateNewAccessRequirementClicked: mockOnCreateNewAR,
      }),
      expect.anything(),
    )
  })

  it('Updates the passed props and URLSearchParams when updating nameContains', async () => {
    const { history } = renderComponent()
    const nameContainsInput = (await screen.findAllByRole('textbox'))[0]
    userEvent.type(nameContainsInput, NAME_CONTAINS_PREFIX)

    await waitFor(() =>
      expect(
        new URLSearchParams(history.location.search).get('nameContains'),
      ).toEqual(NAME_CONTAINS_PREFIX),
    )
    expect(mockAccessRequirementTable).toHaveBeenCalledWith(
      expect.objectContaining({
        nameContains: NAME_CONTAINS_PREFIX,
        relatedProjectId: undefined,
        reviewerId: undefined,
      }),
      expect.anything(),
    )
  })

  it('Updates the URL search parameters when updating relatedProjectId', async () => {
    const { history } = renderComponent()
    const relatedProjectInput = (await screen.findAllByRole('textbox'))[1]
    userEvent.type(relatedProjectInput, RELATED_PROJECT_ID)

    await waitFor(() =>
      expect(
        new URLSearchParams(history.location.search).get('relatedProjectId'),
      ).toEqual(RELATED_PROJECT_ID),
    )
    expect(mockAccessRequirementTable).toHaveBeenCalledWith(
      expect.objectContaining({
        nameContains: '',
        relatedProjectId: RELATED_PROJECT_ID,
        reviewerId: undefined,
      }),
      expect.anything(),
    )
  })

  it('Updates the URL search parameters when updating reviewerId', async () => {
    const { history } = renderComponent()
    const reviewerInput = (await screen.findAllByRole('textbox'))[2]
    userEvent.type(reviewerInput, MOCK_USER_NAME.substring(0, 1))
    selectEvent.select(reviewerInput, '@' + MOCK_USER_NAME)

    await waitFor(() =>
      expect(
        new URLSearchParams(history.location.search).get('reviewerId'),
      ).toEqual(MOCK_USER_ID.toString()),
    )
    expect(mockAccessRequirementTable).toHaveBeenCalledWith(
      expect.objectContaining({
        nameContains: '',
        relatedProjectId: undefined,
        reviewerId: MOCK_USER_ID.toString(),
      }),
      expect.anything(),
    )
  })

  it('Auto-fills the inputs with search parameter values', async () => {
    renderComponent(undefined, history => {
      // Modify the search parameters before rendering
      const searchParams = new URLSearchParams('')
      searchParams.set('nameContains', NAME_CONTAINS_PREFIX)
      searchParams.set('relatedProjectId', RELATED_PROJECT_ID)
      searchParams.set('reviewerId', MOCK_USER_ID.toString())
      history.push('?' + searchParams.toString())
    })

    await waitFor(() =>
      expect(mockAccessRequirementTable).toHaveBeenLastCalledWith(
        expect.objectContaining({
          nameContains: NAME_CONTAINS_PREFIX,
          relatedProjectId: RELATED_PROJECT_ID,
          reviewerId: MOCK_USER_ID.toString(),
        }),
        expect.anything(),
      ),
    )
  })
})
