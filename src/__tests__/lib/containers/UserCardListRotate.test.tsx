import * as React from 'react'
import { mount, shallow } from 'enzyme'
// import { SynapseClient } from '../../../lib/utils'
import UserCardListRotate, {
  UserCardListRotateProps,
  getDisplayIds,
} from '../../../lib/containers/UserCardListRotate'
import { SynapseTestContext } from '../../../mocks/MockSynapseContext'

const STORED_UID_KEY = 'sage_rotate_uids'
const createShallowComponent = async (props: UserCardListRotateProps) => {
  const wrapper = await mount(<UserCardListRotate {...props} />, {
    wrappingComponent: SynapseTestContext,
  })
  const instance = wrapper.instance()
  return { wrapper, instance }
}

describe('UserCardListRotate Component Testing', () => {
  const prop: UserCardListRotateProps = {
    sql: 'SELECT * FROM syn22096112 where feature=true',
    count: 3,
  }

  let set = 3
  const data = ['1', '2', '3', '4', '5', '6', '7']
  const data_even = ['1', '2', '3', '4', '5', '6']
  const storage_name = 'sage_rotate_uids'

  afterEach(() => {
    localStorage.removeItem(storage_name)
  })

  it('Should create the component', async () => {
    const { wrapper } = await createShallowComponent(prop)
    expect(wrapper).toBeDefined()
  })

  it('Should save the correct ids in storage', () => {
    const saved = getDisplayIds(data, set, STORED_UID_KEY)
    expect(saved).toEqual(['1', '2', '3'])
  })

  it('Should rotate back to the beginning once it reaches the end - case 1', () => {
    localStorage.setItem(
      storage_name,
      JSON.stringify(['1', '2', '3', '4', '5', '6']),
    )
    const saved = getDisplayIds(data_even, set, STORED_UID_KEY)
    expect(saved).toEqual(['1', '2', '3'])
  })

  it('Should rotate back to the beginning once it reaches the end - case 2', () => {
    localStorage.setItem(
      storage_name,
      JSON.stringify(['1', '2', '3', '4', '5', '6']),
    )
    const saved = getDisplayIds(data, set, STORED_UID_KEY)
    expect(saved).toEqual(['7', '1', '2'])
  })
})
