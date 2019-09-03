import * as React from 'react'
import { shallow } from 'enzyme'
import formschemaJson from '../../../../mocks/formschema.json'
import UserFileGrid, { UserFileGridProps } from '../../../../lib/containers/drug_upload_tool/UserFileGrid'
import { mockUserProfileData } from '../../../../mocks/mock_user_profile'
import { mockFileEntity } from '../../../../mocks/mock_file_entity'


const SynapseClient = require('../../../../lib/utils/SynapseClient')
const targetFolderId = 'syn9988882982'
const token: string = '123444'
const pathpart = 'someTool'
const parentContainerId: string = 'syn20355732'


const createShallowComponent = async (props: UserFileGridProps, disableLifecycleMethods: boolean = false) => {
  const wrapper = await shallow(
    <UserFileGrid
      {...props}
    />,
    {
      disableLifecycleMethods
    }
  )


  const instance = wrapper.instance() as UserFileGrid
  return { wrapper, instance }
}

describe('basic tests', () => {
 
  const props: UserFileGridProps = {
    parentContainerId,
    token,
    pathpart,
  }

  beforeEach(() => {
    SynapseClient.getFileEntityContent = jest.fn(() => Promise.resolve(formschemaJson))
    SynapseClient.getUserProfile = jest.fn(() => Promise.resolve(mockUserProfileData))
    SynapseClient.getEntityChildren = jest.fn(() => Promise.resolve({ 'page': [mockFileEntity, mockFileEntity] }))
    SynapseClient.lookupChildEntity = jest.fn(() => Promise.resolve({ id: targetFolderId }))
    SynapseClient.getEntity = jest.fn(() => Promise.resolve(mockFileEntity))
    SynapseClient.createEntity = jest.fn(() => Promise.resolve({ mockFileEntity }))
    SynapseClient.getSessionTokenFromCookie = jest.fn(() => Promise.resolve('123444'))
    SynapseClient.createEntity = jest.fn(() => Promise.resolve('123444'))
  });


  it('displays table with file list when files are present', async () => {
    const { wrapper, instance } = await createShallowComponent(props)
    await instance.componentDidMount()
    expect(wrapper).toBeDefined()
    expect(wrapper.find('table')).toHaveLength(1)
    expect(wrapper.find('tbody > tr')).toHaveLength(2)
  })

  it('not display the table when there are no files', async () => {
    SynapseClient.getEntityChildren = jest.fn(() => Promise.resolve({ 'page': [] }))
    const { wrapper, instance } = await createShallowComponent(props)
    await instance.componentDidMount()
    expect(wrapper).toBeDefined()
    expect(wrapper.find('table')).toHaveLength(0)
    expect(wrapper.find('.no-submissions').length).toBe(1)
  })

  it('should create a folder for user files if it doesn\'t exist', async () => {

    SynapseClient.lookupChildEntity = jest.fn(() => Promise.reject({ statusCode: 404 }))
    SynapseClient.getEntityChildren = jest.fn(() => Promise.resolve({ 'page': [] }))
    SynapseClient.createEntity = jest.fn(() => Promise.resolve({ id: '123' }))
    const spy = jest.spyOn(SynapseClient, 'createEntity')
    const { wrapper, instance } = await createShallowComponent(props)

    await instance.componentDidMount()
    expect(wrapper).toBeDefined()
    expect(spy).toHaveBeenCalled()
    expect(wrapper.find('table').length).toBe(0)
    expect(wrapper.find('.no-submissions').length).toBe(1)
  })

  it('should modify the modal state when clicking "delete"', async () => {

    const spy = jest.spyOn(SynapseClient, 'deleteEntity')
    const { wrapper, instance } = await createShallowComponent(props)
    await instance.componentDidMount()
    const button = wrapper.find('td button').first()
    expect(instance.state.modalContext).not.toBeDefined;
    button.simulate('click');
    expect(instance.state.modalContext).toBeDefined;
    expect(spy).not.toHaveBeenCalled();
  })

  it('should call deleteEntity with correct params', async () => {
    const spy = jest.spyOn(SynapseClient, 'deleteEntity')
    const { instance } = await createShallowComponent(props)
    await instance.componentDidMount()
    await instance.deleteFile('123', '456')
    expect(spy).toHaveBeenCalledWith('123', '456')

  })

})
