import {
  faDatabase,
  faLink,
  faUnlockAlt,
  faLock,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { mount } from 'enzyme'
import {
  FileHandle,
  RestrictableObjectType,
  RestrictionInformationRequest,
  ExternalFileHandleConcreteTypeEnum,
} from '../../../lib/utils/synapseTypes/'
import { CloudProviderFileHandleConcreteTypeEnum } from '../../../lib/utils/synapseTypes/CloudProviderFileHandle'
import * as React from 'react'
import HasAccess, {
  FileHandleDownloadTypeEnum,
  GIGABYTE_SIZE,
  HasAccessProps,
} from '../../../lib/containers/HasAccess'
import {
  mockOpenRestrictionInformation,
  mockUnmetControlledDataRestrictionInformationACT,
} from '../../../mocks/mock_has_access_data'
import { mockFileHandle } from '../../../mocks/mock_file_handle'
import { mockFolderEntity } from '../../../mocks/mock_folder_entity'
import { mockFileEntity } from '../../../mocks/mock_file_entity'
import {
  MOCK_CONTEXT_VALUE,
  SynapseTestContext,
} from '../../../mocks/MockSynapseContext'
import { resolveAllPending } from '../../../lib/testutils/EnzymeHelpers'

const SynapseClient = require('../../../lib/utils/SynapseClient')
const entityId = 'syn9988882982'
const isInDownloadList: boolean = true
const externalFileHandle: FileHandle = {
  id: '',
  etag: '',
  createdBy: '',
  createdOn: '',
  concreteType: ExternalFileHandleConcreteTypeEnum.ExternalFileHandle,
  contentType: '',
  contentMd5: '',
  fileName: '',
  storageLocationId: 0,
  contentSize: 0,
}
const tooLargeFileHandle: FileHandle = {
  id: '',
  etag: '',
  createdBy: '',
  createdOn: '',
  concreteType: '',
  contentType: '',
  contentMd5: '',
  fileName: '',
  storageLocationId: 0,
  contentSize: GIGABYTE_SIZE,
}

const renderComponent = (props: HasAccessProps) => {
  const wrapper = mount<HasAccess>(<HasAccess {...props} />, {
    wrappingComponent: SynapseTestContext,
  })

  const instance = wrapper.instance()
  return { wrapper, instance }
}
const props: HasAccessProps = {
  entityId,
  isInDownloadList,
}

describe('basic tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('works with open data no restrictions', async () => {
    SynapseClient.getEntity = jest.fn(() => Promise.resolve(mockFileEntity))
    SynapseClient.getFileResult = jest.fn(() => Promise.resolve(mockFileHandle))

    SynapseClient.getRestrictionInformation = jest.fn(() =>
      Promise.resolve(mockOpenRestrictionInformation),
    )
    const { wrapper, instance } = renderComponent(props)
    await resolveAllPending(wrapper)

    const request: RestrictionInformationRequest = {
      restrictableObjectType: RestrictableObjectType.ENTITY,
      objectId: entityId,
    }
    // verify api calls and counts
    expect(SynapseClient.getRestrictionInformation).toHaveBeenCalledTimes(1)
    expect(SynapseClient.getRestrictionInformation).toHaveBeenCalledWith(
      request,
      MOCK_CONTEXT_VALUE.accessToken,
    )
    expect(instance.state.restrictionInformation).toEqual(
      mockOpenRestrictionInformation,
    )
    expect(SynapseClient.getEntity).toHaveBeenCalledTimes(1)
    expect(SynapseClient.getFileResult).toHaveBeenCalledTimes(1)
    // verify UI
    instance.setState({
      fileHandleDownloadType: FileHandleDownloadTypeEnum.Accessible,
    })

    await resolveAllPending(wrapper)

    const icons = wrapper.find(FontAwesomeIcon)
    expect(icons).toHaveLength(2)
    expect(icons.get(1).props.icon).toEqual(faUnlockAlt)
    // no access restrictions
    expect(wrapper.find('button')).toHaveLength(0)
  })

  it('works with a public folder', async () => {
    SynapseClient.getEntity = jest.fn(() => Promise.resolve(mockFolderEntity))
    expect(SynapseClient.getFileResult).not.toHaveBeenCalled()

    SynapseClient.getRestrictionInformation = jest.fn(() =>
      Promise.resolve(mockOpenRestrictionInformation),
    )
    const { wrapper } = renderComponent(props)
    await resolveAllPending(wrapper)

    const icons = wrapper.find(FontAwesomeIcon)
    expect(icons).toHaveLength(2)
    expect(icons.get(1).props.icon).toEqual(faUnlockAlt)
    // no access restrictions
    expect(wrapper.find('button')).toHaveLength(0)
  })

  it('works when an ExternalFileHandle is passed in - not in download list', async () => {
    const { wrapper } = renderComponent({
      ...props,
      isInDownloadList: false,
      fileHandle: externalFileHandle,
    })
    const icons = wrapper.find(FontAwesomeIcon)
    expect(icons).toHaveLength(2)
    expect(icons.get(1).props.icon).toEqual(faUnlockAlt)
    // no access restrictions
    expect(wrapper.find('button')).toHaveLength(0)
  })

  it('works when an ExternalFileHandle is passed in - in Download List', async () => {
    const { wrapper } = renderComponent({
      ...props,
      fileHandle: externalFileHandle,
    })
    const icons = wrapper.find(FontAwesomeIcon)
    expect(icons).toHaveLength(2)
    expect(icons.get(1).props.icon).toEqual(faLink)
    const tooltipSpan = wrapper.find(
      `[data-tip="${
        HasAccess.tooltipText[FileHandleDownloadTypeEnum.ExternalFileLink]
      }"]`,
    )
    expect(tooltipSpan).toHaveLength(1)
    // no access restrictions
    expect(wrapper.find('button')).toHaveLength(0)
  })

  it('works when a cloud file handle is passed in - in Download List', async () => {
    const cloudFileHandle: FileHandle = {
      id: '',
      etag: '',
      createdBy: '',
      createdOn: '',
      concreteType:
        CloudProviderFileHandleConcreteTypeEnum.GoogleCloudFileHandle,
      contentType: '',
      contentMd5: '',
      fileName: '',
      storageLocationId: 0,
      contentSize: 0,
    }
    SynapseClient.getEntity = jest.fn(() => Promise.resolve(mockFileEntity))
    SynapseClient.getFileEntityFileHandle = jest.fn(() =>
      Promise.resolve(cloudFileHandle),
    )

    const { wrapper } = renderComponent({
      ...props,
      fileHandle: cloudFileHandle,
    })
    const icons = wrapper.find(FontAwesomeIcon)
    expect(icons).toHaveLength(2)
    expect(icons.get(1).props.icon).toEqual(faLink)
    const tooltipSpan = wrapper.find(
      `[data-tip="${
        HasAccess.tooltipText[FileHandleDownloadTypeEnum.ExternalCloudFile]
      }"]`,
    )
    expect(tooltipSpan).toHaveLength(1)
    // no access restrictions
    expect(wrapper.find('button')).toHaveLength(0)
  })

  it('works when the file is too large in Download List', async () => {
    const { wrapper } = renderComponent({
      ...props,
      fileHandle: tooLargeFileHandle,
    })
    const icons = wrapper.find(FontAwesomeIcon)
    expect(icons).toHaveLength(2)
    expect(icons.get(1).props.icon).toEqual(faDatabase)
    const tooltipSpan = wrapper.find(
      `[data-tip="${
        HasAccess.tooltipText[FileHandleDownloadTypeEnum.TooLarge]
      }"]`,
    )
    expect(tooltipSpan).toHaveLength(1)
    // no access restrictions
    expect(wrapper.find('button')).toHaveLength(0)
  })

  it('works when the file is too large for Download List, but HasAccess is not in the Download List', async () => {
    const { wrapper } = renderComponent({
      ...props,
      isInDownloadList: false,
      fileHandle: tooLargeFileHandle,
    })
    const icons = wrapper.find(FontAwesomeIcon)
    expect(icons).toHaveLength(2)
    expect(icons.get(1).props.icon).toEqual(faUnlockAlt)
    // no access restrictions
    expect(wrapper.find('button')).toHaveLength(0)
  })

  it('works when download is IsOpenNoRestrictions', async () => {
    const IsOpenNoUnmetAccessRestrictions: FileHandle = {
      id: '',
      etag: '',
      createdBy: '',
      createdOn: '',
      concreteType: '',
      contentType: '',
      contentMd5: '',
      fileName: '',
      storageLocationId: 0,
      contentSize: 0,
    }
    const { wrapper } = renderComponent({
      ...props,
      fileHandle: IsOpenNoUnmetAccessRestrictions,
    })
    const icons = wrapper.find(FontAwesomeIcon)
    expect(icons).toHaveLength(2)
    expect(icons.get(1).props.icon).toEqual(faUnlockAlt)
  })

  it('works with unmet controlled access data AND an UNAUTHORIZED ACL', async () => {
    SynapseClient.getEntity = jest.fn(() => Promise.reject('UNAUTHORIZED'))
    SynapseClient.getRestrictionInformation = jest.fn(() =>
      Promise.resolve(mockUnmetControlledDataRestrictionInformationACT),
    )

    const { wrapper, instance } = renderComponent(props)
    await resolveAllPending(wrapper)

    const request: RestrictionInformationRequest = {
      restrictableObjectType: RestrictableObjectType.ENTITY,
      objectId: entityId,
    }
    expect(SynapseClient.getRestrictionInformation).toHaveBeenCalledWith(
      request,
      MOCK_CONTEXT_VALUE.accessToken,
    )
    expect(instance.state.restrictionInformation).toEqual(
      mockUnmetControlledDataRestrictionInformationACT,
    )

    const icons = wrapper.find(FontAwesomeIcon)
    expect(icons).toHaveLength(2)
    expect(icons.get(1).props.icon).toEqual(faLock)
    const tooltipSpan = wrapper.find(
      `[data-tip="${
        HasAccess.tooltipText[
          FileHandleDownloadTypeEnum.AccessBlockedByRestriction
        ]
      }"]`,
    )
    expect(tooltipSpan).toHaveLength(1)
  })

  it('works with an UNAUTHORIZED ACL but no unmet access restrictions', async () => {
    SynapseClient.getEntity = jest.fn(() => Promise.reject('UNAUTHORIZED'))
    SynapseClient.getRestrictionInformation = jest.fn(() =>
      Promise.resolve(mockOpenRestrictionInformation),
    )
    const { wrapper, instance } = renderComponent(props)
    await resolveAllPending(wrapper)

    const request: RestrictionInformationRequest = {
      restrictableObjectType: RestrictableObjectType.ENTITY,
      objectId: entityId,
    }
    expect(SynapseClient.getRestrictionInformation).toHaveBeenCalledWith(
      request,
      MOCK_CONTEXT_VALUE.accessToken,
    )
    expect(instance.state.restrictionInformation).toEqual(
      mockOpenRestrictionInformation,
    )

    const icons = wrapper.find(FontAwesomeIcon)
    expect(icons).toHaveLength(2)
    expect(icons.get(1).props.icon).toEqual(faLock)
    const tooltipSpan = wrapper.find(
      `[data-tip="${
        HasAccess.tooltipText[FileHandleDownloadTypeEnum.AccessBlockedByACL]
      }"]`,
    )
    expect(tooltipSpan).toHaveLength(1)
    expect(wrapper.find('button')).toHaveLength(0)
  })
})
