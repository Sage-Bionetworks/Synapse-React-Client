import { render, screen, waitFor } from '@testing-library/react'
import * as React from 'react'
import selectEvent from 'react-select-event'
import UserSearchBox from '../../../lib/containers/UserSearchBoxV2'
import { createWrapper } from '../../../lib/testutils/TestingLibraryUtils'
import { server } from '../../../mocks/msw/server'
import {
  mockUserGroupHeader,
  MOCK_USER_ID,
  MOCK_USER_NAME,
} from '../../../mocks/user/mock_user_profile'

describe('UserSearchBoxV2 tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  const onChange = jest.fn()

  function renderComponent() {
    return render(<UserSearchBox onChange={onChange} />, {
      wrapper: createWrapper(),
    })
  }

  it('test onChange by making a selection and clearing it', async () => {
    renderComponent()
    const input = screen.getByRole('textbox')
    selectEvent.openMenu(input)
    selectEvent.select(input, '@' + MOCK_USER_NAME)

    await waitFor(() =>
      expect(onChange).toHaveBeenLastCalledWith(
        MOCK_USER_ID.toString(),
        mockUserGroupHeader,
      ),
    )

    selectEvent.clearFirst(input)
    await waitFor(() => expect(onChange).toHaveBeenLastCalledWith(null, null))
  })
})
