import * as React from 'react'
import { mount, shallow } from 'enzyme'
import SynapseFormWrapper, {
  SynapseFormWrapperProps,
  UploadToolSearchParams,
} from '../../../../lib/containers/synapse_form_wrapper/SynapseFormWrapper'

import { SynapseFormProps } from '../../../../lib/containers/synapse_form_wrapper/SynapseForm'
import { mockFileEntity } from '../../../../mocks/mock_file_entity'
import { mockFileHandle } from '../../../../mocks/mock_file_handle'
import {
  mockFileEntityWithVersion,
  mockFormData,
  mockFormSchema as formschemaJson,
} from '../../../../mocks/mock_drug_tool_data'
import _ from 'lodash-es'
import {
  MOCK_CONTEXT,
  MOCK_CONTEXT_VALUE,
  SynapseTestContext,
} from '../../../../mocks/MockSynapseContext'

const SynapseClient = require('../../../../lib/utils/SynapseClient')
const formSchemaEntityId = 'syn9988882982'
const formUiSchemaEntityId = 'syn9988882983'
const formNavSchemaEntityId = 'syn9988882984'
const formDataId = 'syn9988882985'
const formGroupId = 'syn9988882986'
const dataFileHandleId = '43157'
const searchParams: UploadToolSearchParams = {
  formGroupId,
}
const fileNamePath = 'somescreen.somefield'
const formTitle = 'my submission'
const formClass = 'someFormClass'

const createShallowComponent = (
  props: SynapseFormWrapperProps,
  disableLifecycleMethods: boolean = false,
) => {
  const wrapper = shallow<SynapseFormWrapper>(
    <SynapseFormWrapper {...props} />,
    {
      context: MOCK_CONTEXT,
      disableLifecycleMethods,
    },
  )

  const instance = wrapper.instance()
  return { wrapper, instance }
}
const props: SynapseFormWrapperProps = {
  formSchemaEntityId,
  formUiSchemaEntityId,
  formNavSchemaEntityId,
  searchParams,
  fileNamePath,
  formTitle,
  formClass,
}

describe('basic tests', () => {
  beforeEach(() => {
    SynapseClient.getFileResult = jest.fn(() => Promise.resolve(mockFileHandle))
    SynapseClient.getFileHandleContent = jest.fn(() =>
      Promise.resolve(JSON.stringify(formschemaJson)),
    )
    SynapseClient.uploadFile = jest.fn(() => Promise.resolve(mockFileEntity))
    SynapseClient.getEntity = jest.fn(() => Promise.resolve(mockFileEntity))
    SynapseClient.createEntity = jest.fn(() => Promise.resolve('123444'))
    SynapseClient.getFileHandleContentFromID = jest.fn(() =>
      Promise.resolve(mockFormData),
    )
  })

  it('gets configuration data calls should be called with correct params', async () => {
    const { instance } = createShallowComponent(props)
    await instance.componentDidMount()
    expect(SynapseClient.getEntity).toHaveBeenNthCalledWith(
      1,
      MOCK_CONTEXT_VALUE.accessToken,
      'syn9988882982',
      undefined,
    )
    expect(SynapseClient.getEntity).toHaveBeenNthCalledWith(
      2,
      MOCK_CONTEXT_VALUE.accessToken,
      'syn9988882983',
      undefined,
    )
    expect(SynapseClient.getEntity).toHaveBeenNthCalledWith(
      3,
      MOCK_CONTEXT_VALUE.accessToken,
      'syn9988882984',
      undefined,
    )
    expect(SynapseClient.getFileResult).toHaveBeenCalledWith(
      mockFileEntity,
      MOCK_CONTEXT_VALUE.accessToken,
      true,
      true,
    )
  })

  it('gets configuration data', async () => {
    const { instance } = createShallowComponent(props)
    await instance.componentDidMount()
    const result = await instance.getFileEntityData(
      MOCK_CONTEXT_VALUE.accessToken,
      '123444',
    )
    expect(result).toEqual({ content: formschemaJson, version: undefined })
  })

  describe('if there is no datafile (no formDataId)', () => {
    it('should make 3 calls to getFileEntityData ', async () => {
      const { wrapper, instance } = createShallowComponent(props)
      const getFileEntityData = jest.spyOn(instance, 'getFileEntityData')
      const getFileHandleContentFromID = jest.spyOn(
        SynapseClient,
        'getFileHandleContentFromID',
      )
      await instance.componentDidMount()
      expect(wrapper).toBeDefined()
      expect(getFileEntityData).toHaveBeenCalledTimes(3)
      expect(getFileHandleContentFromID).not.toHaveBeenCalled()
    })

    it('should populate formData with metadata', async () => {
      SynapseClient.getEntity = jest.fn(() =>
        Promise.resolve(mockFileEntityWithVersion),
      )
      const { wrapper, instance } = createShallowComponent(props)

      await instance.componentDidMount()
      expect(wrapper).toBeDefined()
      expect(instance.state.formData.metadata.formSchemaVersion).toBe(
        mockFileEntityWithVersion.versionNumber,
      )
    })
  })

  describe('if there is  datafile (formDataId)', () => {
    it('should make 4 calls to getFileEntityData ', async () => {
      const _props = {
        ...props,
        ...{ searchParams: { formGroupId, formDataId, dataFileHandleId } },
      }
      const { wrapper, instance } = createShallowComponent(_props)
      const getFileEntityData = jest.spyOn(instance, 'getFileEntityData')
      SynapseClient.getFileHandleContentFromID = jest.fn(() =>
        Promise.resolve(JSON.stringify(mockFormData)),
      )
      const getFileHandleContentFromID = jest.spyOn(
        SynapseClient,
        'getFileHandleContentFromID',
      )
      await instance.componentDidMount()

      expect(wrapper).toBeDefined()
      expect(getFileEntityData).toHaveBeenCalledTimes(3)
      expect(instance.state.formData).toEqual(mockFormData)
      expect(getFileHandleContentFromID).toHaveBeenCalled()
      expect(getFileEntityData).not.toHaveBeenCalledWith(
        MOCK_CONTEXT_VALUE.accessToken,
        formSchemaEntityId,
        mockFormData.metadata.formSchemaVersion,
      )
      expect(getFileEntityData).toHaveBeenCalledWith(
        MOCK_CONTEXT_VALUE.accessToken,
        formSchemaEntityId,
        undefined,
      )
    })

    it('if the form is submitted it should pull the schemas with apropriate versions', async () => {
      const _props = {
        ...props,
        ...{
          searchParams: {
            formGroupId,
            formDataId,
            dataFileHandleId,
            submitted: true,
          },
        },
      }
      const { wrapper, instance } = createShallowComponent(_props)
      const getFileEntityData = jest.spyOn(instance, 'getFileEntityData')
      SynapseClient.getFileHandleContentFromID = jest.fn(() =>
        Promise.resolve(JSON.stringify(mockFormData)),
      )

      await instance.componentDidMount()

      expect(wrapper).toBeDefined()
      expect(getFileEntityData).toHaveBeenCalledTimes(3)
      expect(instance.state.formData).toEqual(mockFormData)
      expect(getFileEntityData).toHaveBeenCalledWith(
        MOCK_CONTEXT_VALUE.accessToken,
        formSchemaEntityId,
        mockFormData.metadata.formSchemaVersion,
      )
      expect(getFileEntityData).not.toHaveBeenCalledWith(
        MOCK_CONTEXT_VALUE.accessToken,
        formSchemaEntityId,
        undefined,
      )
    })
  })

  describe('pass params', () => {
    it('should pass parameters correctly', async () => {
      const _props = {
        ...props,
        ...{ searchParams: { formGroupId, formDataId }, isWizardMode: true },
      }
      const { wrapper, instance } = createShallowComponent(_props)
      await instance.componentDidMount()

      expect(wrapper).toBeDefined()
      wrapper.find('div').first().hasClass('someFormClass')
      const formProps: SynapseFormProps = (wrapper
        .find('SynapseForm')
        .props() as any) as SynapseFormProps
      expect(formProps.formTitle).toBe(props.formTitle)
      expect(formProps.isWizardMode).toBeTruthy()
    })

    it('should pass parameters correctly', async () => {
      const _props = { ...props, ...{ formTitle: 'Another Title' } }
      const { wrapper, instance } = createShallowComponent(_props)
      await instance.componentDidMount()

      expect(wrapper).toBeDefined()
      wrapper.find('div').first().hasClass('someFormClass')
      const formProps: SynapseFormProps = (wrapper
        .find('SynapseForm')
        .props() as any) as SynapseFormProps
      expect(formProps.formTitle).toBe('Another Title')
      expect(Object.keys(formProps.formData)).toEqual(['metadata'])
      expect(formProps.isWizardMode).toBeFalsy()
    })
  })
})

describe('saving data file', () => {
  it('should CREATE formData if there is not a formDataId', async () => {
    const { instance } = createShallowComponent(props)
    SynapseClient.uploadFile = jest.fn(() =>
      Promise.resolve({ fileHandleId: '123' }),
    )
    const create = (SynapseClient.createFormData = jest.fn(() =>
      Promise.resolve(JSON.stringify(formschemaJson)),
    ))
    const update = (SynapseClient.updateFormData = jest.fn(() =>
      Promise.resolve(JSON.stringify(formschemaJson)),
    ))
    const formData = _.cloneDeep(formschemaJson)
    _.set(formData, props.fileNamePath, 'someName')
    await instance.saveToFile(formData)
    expect(create).toHaveBeenCalled()
    expect(update).not.toHaveBeenCalled()
  })

  it('should UPDATE formData if there is formDataId', async () => {
    const _props = {
      ...props,
      ...{ searchParams: { formGroupId, formDataId } },
    }
    const { instance } = createShallowComponent(_props)
    SynapseClient.uploadFile = jest.fn(() =>
      Promise.resolve({ fileHandleId: '123' }),
    )
    const create = (SynapseClient.createFormData = jest.fn(() =>
      Promise.resolve(JSON.stringify(formschemaJson)),
    ))
    const update = (SynapseClient.updateFormData = jest.fn(() =>
      Promise.resolve(JSON.stringify(formschemaJson)),
    ))
    const formData = _.cloneDeep(formschemaJson)
    _.set(formData, props.fileNamePath, 'someName')
    await instance.saveToFile(formData)
    expect(create).not.toHaveBeenCalled()
    expect(update).toHaveBeenCalled()
  })
})

describe('submitting data file', () => {
  it('should create formData if there is not and ID', async () => {
    const { instance } = createShallowComponent(props)
    SynapseClient.uploadFile = jest.fn(() =>
      Promise.resolve({ fileHandleId: '123' }),
    )
    const submit = (SynapseClient.submitFormData = jest.fn(() =>
      Promise.resolve(JSON.stringify(formschemaJson)),
    ))
    const save = jest.spyOn(instance, 'saveToFile')

    const formData = _.cloneDeep(formschemaJson)
    _.set(formData, props.fileNamePath, 'someName')
    await instance.submitForm(formData)
    expect(save).toHaveBeenCalled()
    expect(submit).toHaveBeenCalled()
  })
})
