import * as React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import UserIdList, { UserIdListProps } from '../../../lib/containers/UserIdList'
import { act } from 'react-dom/test-utils'
import {
  MOCK_CONTEXT_VALUE,
  SynapseTestContext,
} from '../../../mocks/MockSynapseContext'
import { render, screen, waitFor } from '@testing-library/react'
import {
  mockUserProfileData,
  MOCK_USER_ID,
  MOCK_USER_NAME,
} from '../../../mocks/user/mock_user_profile'
import { getUserProfiles } from '../../../lib/utils/SynapseClient'

const SynapseClient = require('../../../lib/utils/SynapseClient')

SynapseClient.getUserProfiles = jest
  .fn()
  .mockResolvedValue({ list: [mockUserProfileData] })

describe('UserIdList: basic functionality', () => {
  const props: UserIdListProps = {
    userIds: [`${MOCK_USER_ID}`],
  }

  it('renders and retrieves data without crashing', async () => {
    render(<UserIdList {...props} />, {
      wrapper: SynapseTestContext,
    })
    act(() => {
      mockAllIsIntersecting(true)
    })
    await waitFor(() =>
      expect(getUserProfiles).toBeCalledWith(
        props.userIds,
        MOCK_CONTEXT_VALUE.accessToken,
      ),
    )
    screen.getByText(`@${MOCK_USER_NAME}`)
  })
})
