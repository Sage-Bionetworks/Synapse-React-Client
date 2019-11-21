import * as React from 'react'
import { shallow } from 'enzyme'
import UserCardList, {
  UserCardListProps,
} from '../../../lib/containers/UserCardList'
import { SynapseConstants } from '../../../lib/utils'

const createShallowComponent = async (props: UserCardListProps) => {
  const wrapper = await shallow<UserCardList>(<UserCardList {...props} />)
  const instance = wrapper.instance() as UserCardList
  return { wrapper, instance }
}

describe('UserCardList functions correctly ', () => {
  const getUserData = require('../../../lib/utils/getUserData')
  const userOneId = '1'
  const userTwoId = '2'
  const userThreeId = '3'

  const propsInitial: UserCardListProps = {
    list: [userOneId, userTwoId],
    size: SynapseConstants.MEDIUM_USER_CARD,
  }

  const propsSecond: UserCardListProps = {
    list: [userOneId, userThreeId],
    size: SynapseConstants.MEDIUM_USER_CARD,
  }

  const propsLast: UserCardListProps = {
    list: [userThreeId],
    size: SynapseConstants.MEDIUM_USER_CARD,
  }

  const mockedDataFirstCall = {
    list: [
      {
        ownerId: userOneId,
      },
      {
        ownerId: userTwoId,
      },
    ],
  }

  const mockedDataSecondCall = {
    list: [
      {
        ownerId: userThreeId,
      },
    ],
  }

  let mockImplementation = jest.fn(() => Promise.resolve(mockedDataFirstCall))

  getUserData.getUserProfileWithProfilePicAttached = mockImplementation

  it('renders without crashing', async () => {
    const { wrapper } = await createShallowComponent(propsInitial)
    expect(wrapper).toBeDefined()
  })

  it('updates state correctly', async () => {
    const spyOnUpdate = jest.spyOn(UserCardList.prototype, 'update')
    const { wrapper } = await createShallowComponent(propsInitial)
    expect(spyOnUpdate).toHaveBeenLastCalledWith(propsInitial.list)

    // it should see that it was updated with a new ownerId not already contained
    spyOnUpdate.mockClear()
    mockImplementation = jest.fn(() => Promise.resolve(mockedDataSecondCall))
    wrapper.setProps(propsSecond)
    expect(spyOnUpdate).toHaveBeenLastCalledWith([userThreeId])

    // it should see that it was updated with a new ownerId that was contained already
    spyOnUpdate.mockClear()
    mockImplementation = jest.fn() // mock no longer matters
    wrapper.setProps(propsLast)
    expect(spyOnUpdate).not.toHaveBeenCalled()
    spyOnUpdate.mockClear()
  })
})
