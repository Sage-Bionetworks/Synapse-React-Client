import * as React from 'react'
import { mount } from 'enzyme'
import formschemaJson from '../../../mocks/formschema.json'
import EntityForm, { EntityFormProps } from '../../../lib/containers/EntityForm'
import { mockUserProfileData } from '../../../mocks/mock_user_profile'
import { mockFileEntity } from '../../../mocks/mock_file_entity'
import reactJsonschemaForm from 'react-jsonschema-form'

const createShallowComponent = (props: EntityFormProps) => {
  const wrapper = mount(<EntityForm {...props} />)
  const instance = wrapper.instance() as EntityForm
  return { wrapper, instance }
}

describe('it basic tests', () => {
  // Test setup
  const SynapseClient = require('../../../lib/utils/SynapseClient')
  SynapseClient.getFileEntityContent = jest.fn(() =>
    Promise.resolve(formschemaJson),
  )
  SynapseClient.getUserProfile = jest.fn(() =>
    Promise.resolve(mockUserProfileData),
  )
  const targetFolderId = 'syn9988882982'
  SynapseClient.lookupChildEntity = jest.fn(() =>
    Promise.resolve({ id: targetFolderId }),
  )
  SynapseClient.getEntity = jest.fn(() => Promise.resolve(mockFileEntity))
  const token: string = '123444'
  const parentContainerId: string = 'syn20355732'
  const formSchemaEntityId: string = 'syn20184776'
  const formUiSchemaEntityId: string = 'syn20184771'
  const initFormData: boolean = false
  const synIdCallback = jest.fn()
  const props: EntityFormProps = {
    parentContainerId,
    token,
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
