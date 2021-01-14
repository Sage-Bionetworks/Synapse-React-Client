import * as React from 'react'
import { shallow } from 'enzyme'
import SynapseFormWrapper, {
  SynapseFormWrapperProps,
  UploadToolSearchParams,
} from '../../../../lib/containers/synapse_form_wrapper/SynapseFormWrapper'

import { SynapseFormProps } from '../../../../lib/containers/synapse_form_wrapper/SynapseForm'
import { mockFileEntity } from '../../../../mocks/mock_file_entity'
import {
  mockFileEntityWithVersion,
  mockFormData,
  mockFormSchema as formschemaJson,
} from '../../../../mocks/mock_drug_tool_data'
import _ from 'lodash-es'

const SynapseClient = require('../../../../lib/utils/SynapseClient')
const token: string = '123444'
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

const createShallowComponent = async (
  props: SynapseFormWrapperProps,
  disableLifecycleMethods: boolean = false,
) => {
  const wrapper = await shallow<SynapseFormWrapper>(<SynapseFormWrapper {...props} />, {
    disableLifecycleMethods,
  })

  const instance = wrapper.instance()
  return { wrapper, instance }
}
const props: SynapseFormWrapperProps = {
  token,
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
    SynapseClient.getFileEntityContent = jest.fn(() =>
      Promise.resolve(JSON.stringify(formschemaJson)),
    )
    SynapseClient.uploadFile = jest.fn(() => Promise.resolve(mockFileEntity))
    SynapseClient.getEntity = jest.fn(() => Promise.resolve(mockFileEntity))
    SynapseClient.createEntity = jest.fn(() => Promise.resolve('123444'))
    SynapseClient.getFileHandleContentFromID = jest.fn(() =>
      Promise.resolve(mockFormData),
    )
  })

  it('gets configuration data', async () => {
    const { instance } = await createShallowComponent(props)
    await instance.componentDidMount()
    const result = await instance.getFileEntityData(token, '123444')
    expect(SynapseClient.getEntity).toHaveBeenCalledWith(
      token,
      '123444',
      undefined,
    )
    expect(SynapseClient.getFileResult).toHaveBeenCalledWith(
    // expect(SynapseClient.getFileEntityContent).toHaveBeenCalledWith(
      mockFileEntity,
      token,
      true,
      true
    )
    expect(result).toEqual({ content: formschemaJson, version: undefined })
  })

  describe('if there is no datafile (no formDataId)', () => {
    it('should make 3 calls to getFileEntityData ', async () => {
      const { wrapper, instance } = await createShallowComponent(props)
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
      const { wrapper, instance } = await createShallowComponent(props)

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
      const { wrapper, instance } = await createShallowComponent(_props)
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
        token,
        formSchemaEntityId,
        mockFormData.metadata.formSchemaVersion,
      )
      expect(getFileEntityData).toHaveBeenCalledWith(
        token,
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
      const { wrapper, instance } = await createShallowComponent(_props)
      const getFileEntityData = jest.spyOn(instance, 'getFileEntityData')
      SynapseClient.getFileHandleContentFromID = jest.fn(() =>
        Promise.resolve(JSON.stringify(mockFormData)),
      )

      await instance.componentDidMount()

      expect(wrapper).toBeDefined()
      expect(getFileEntityData).toHaveBeenCalledTimes(3)
      expect(instance.state.formData).toEqual(mockFormData)
      expect(getFileEntityData).toHaveBeenCalledWith(
        token,
        formSchemaEntityId,
        mockFormData.metadata.formSchemaVersion,
      )
      expect(getFileEntityData).not.toHaveBeenCalledWith(
        token,
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
      const { wrapper, instance } = await createShallowComponent(_props)
      await instance.componentDidMount()
      expect(wrapper).toBeDefined()
      wrapper
        .find('div')
        .first()
        .hasClass('someFormClass')
      const formProps: SynapseFormProps = (wrapper
        .find('SynapseForm')
        .props() as any) as SynapseFormProps
      console.log(wrapper.debug())
      expect(formProps.formTitle).toBe(props.formTitle)
      expect(formProps.isWizardMode).toBeTruthy()
    })

    it('should pass parameters correctly', async () => {
      const _props = { ...props, ...{ formTitle: 'Another Title' } }
      const { wrapper, instance } = await createShallowComponent(_props)
      await instance.componentDidMount()

      expect(wrapper).toBeDefined()
      wrapper
        .find('div')
        .first()
        .hasClass('someFormClass')
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
    const { instance } = await createShallowComponent(props)
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
    const { instance } = await createShallowComponent(_props)
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
    const { instance } = await createShallowComponent(props)
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
