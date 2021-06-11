import * as React from 'react'
import { mount } from 'enzyme'
import EntityForm, { EntityFormProps } from '../../../lib/containers/EntityForm'
import { mockUserProfileData } from '../../../mocks/user/mock_user_profile'
import { mockFileEntity } from '../../../mocks/entity/mockEntity'
import reactJsonschemaForm from 'react-jsonschema-form'
import { SynapseTestContext } from '../../../mocks/MockSynapseContext'

const createShallowComponent = (props: EntityFormProps) => {
  const wrapper = mount(<EntityForm {...props} />, {
    wrappingComponent: SynapseTestContext,
  })
  const instance = wrapper.instance() as EntityForm
  return { wrapper, instance }
}

describe('it basic tests', () => {
  // Test setup
  const SynapseClient = require('../../../lib/utils/SynapseClient')
  SynapseClient.getUserProfile = jest.fn(() =>
    Promise.resolve(mockUserProfileData),
  )
  const targetFolderId = 'syn9988882982'
  SynapseClient.lookupChildEntity = jest.fn(() =>
    Promise.resolve({ id: targetFolderId }),
  )
  SynapseClient.getEntity = jest.fn(() => Promise.resolve(mockFileEntity))
  const parentContainerId: string = 'syn20355732'
  const formSchemaEntityId: string = 'syn20184776'
  const formUiSchemaEntityId: string = 'syn20184771'
  const initFormData: boolean = false
  const synIdCallback = jest.fn()
  const props: EntityFormProps = {
    parentContainerId,
    formSchemaEntityId,
    formUiSchemaEntityId,
    initFormData,
    synIdCallback,
  }
  it('renders without crashing', () => {
    const { wrapper } = createShallowComponent(props)
    expect(wrapper).toBeDefined()
  })

  it('renders Form', () => {
    const { wrapper } = createShallowComponent(props)
    expect(wrapper.find(reactJsonschemaForm)).toBeDefined()
  })
})
