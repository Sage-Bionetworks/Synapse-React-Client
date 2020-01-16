import {
  faDatabase,
  faLink,
  faMinusCircle,
  faUnlockAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { shallow } from 'enzyme'
import {
  FileHandle,
  RestrictableObjectType,
  RestrictionInformationRequest,
} from 'lib/utils/synapseTypes/'
import * as React from 'react'
import HasAccess, {
  DownloadTypeEnum,
  ExternalFileHandleConcreteTypeEnum,
  GIGABYTE_SIZE,
  GoogleCloudFileHandleEnum,
  HasAccessProps,
} from '../../../lib/containers/HasAccess'
import {
  mockOpenRestrictionInformation,
  mockUnmetControlledDataRestrictionInformationACT,
  mockUnmetControlledDataRestrictionInformationRestricted,
} from '../../../mocks/mock_has_access_data'

const SynapseClient = require('../../../lib/utils/SynapseClient')
const token: string = '123444'
const entityId = 'syn9988882982'

const createShallowComponent = async (
  props: HasAccessProps,
  disableLifecycleMethods: boolean = false,
) => {
  const wrapper = await shallow<HasAccess>(<HasAccess {...props} />, {
    disableLifecycleMethods,
  })

  const instance = wrapper.instance()
  return { wrapper, instance }
}
const props: HasAccessProps = {
  token,
  entityId,
}

describe('basic tests', () => {
  it('get open data', async () => {
    SynapseClient.getRestrictionInformation = jest.fn(() =>
      Promise.resolve(mockOpenRestrictionInformation),
    )
    const { wrapper, instance } = await createShallowComponent(props)
    instance.getRestrictionInformation()
    const request: RestrictionInformationRequest = {
      restrictableObjectType: RestrictableObjectType.ENTITY,
      objectId: entityId,
    }
    expect(SynapseClient.getRestrictionInformation).toHaveBeenCalledWith(
      request,
      token,
    )
    expect(instance.state.restrictionInformation).toEqual(
      mockOpenRestrictionInformation,
    )
    const icons = wrapper.find(FontAwesomeIcon)
    expect(icons).toHaveLength(2)
    expect(icons.get(1).props.icon).toEqual(faUnlockAlt)
    // no access restrictions
    expect(wrapper.find('a')).toHaveLength(0)
  })

  it('works when an ExternalFileHandle is passed in', async () => {
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
    const { wrapper } = await createShallowComponent({
      ...props,
      fileHandle: externalFileHandle,
    })
    const icons = wrapper.find(FontAwesomeIcon)
    expect(icons).toHaveLength(2)
    expect(icons.get(1).props.icon).toEqual(faLink)
    const tooltipSpan = wrapper.find(
      `[data-tip="${
        HasAccess.tooltipText[DownloadTypeEnum.ExternalFileHandle]
      }"]`,
    )
    expect(tooltipSpan).toHaveLength(1)
    // no access restrictions
    expect(wrapper.find('a')).toHaveLength(0)
  })

  it('works when a cloud file handle is passed in', async () => {
    const cloudFileHandle: FileHandle = {
      id: '',
      etag: '',
      createdBy: '',
      createdOn: '',
      concreteType: GoogleCloudFileHandleEnum.GoogleCloudFileHandle,
      contentType: '',
      contentMd5: '',
      fileName: '',
      storageLocationId: 0,
      contentSize: 0,
    }
    const { wrapper } = await createShallowComponent({
      ...props,
      fileHandle: cloudFileHandle,
    })
    const icons = wrapper.find(FontAwesomeIcon)
    expect(icons).toHaveLength(2)
    expect(icons.get(1).props.icon).toEqual(faLink)
    const tooltipSpan = wrapper.find(
      `[data-tip="${HasAccess.tooltipText[DownloadTypeEnum.CloudFileHandle]}"]`,
    )
    expect(tooltipSpan).toHaveLength(1)
    // no access restrictions
    expect(wrapper.find('a')).toHaveLength(0)
  })

  it('works when the file is too large', async () => {
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
    const { wrapper } = await createShallowComponent({
      ...props,
      fileHandle: tooLargeFileHandle,
    })
    const icons = wrapper.find(FontAwesomeIcon)
    expect(icons).toHaveLength(2)
    expect(icons.get(1).props.icon).toEqual(faDatabase)
    const tooltipSpan = wrapper.find(
      `[data-tip="${HasAccess.tooltipText[DownloadTypeEnum.TooLargeFile]}"]`,
    )
    expect(tooltipSpan).toHaveLength(1)
    // no access restrictions
    expect(wrapper.find('a')).toHaveLength(0)
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
    const { wrapper } = await createShallowComponent({
      ...props,
      fileHandle: IsOpenNoUnmetAccessRestrictions,
    })
    const icons = wrapper.find(FontAwesomeIcon)
    expect(icons).toHaveLength(2)
    expect(icons.get(1).props.icon).toEqual(faUnlockAlt)
    // no access restrictions
    expect(wrapper.find('a')).toHaveLength(0)
  })

  it('works with unmet controlled access data - controlled by act', async () => {
    SynapseClient.getRestrictionInformation = jest.fn(() =>
      Promise.resolve(mockUnmetControlledDataRestrictionInformationACT),
    )

    const { wrapper, instance } = await createShallowComponent(props)
    instance.getRestrictionInformation()
    const request: RestrictionInformationRequest = {
      restrictableObjectType: RestrictableObjectType.ENTITY,
      objectId: entityId,
    }
    expect(SynapseClient.getRestrictionInformation).toHaveBeenCalledWith(
      request,
      token,
    )
    expect(instance.state.restrictionInformation).toEqual(
      mockUnmetControlledDataRestrictionInformationACT,
    )
    const link = wrapper.find('a')
    expect(link).toHaveLength(1)
    const icons = wrapper.find(FontAwesomeIcon)
    expect(icons).toHaveLength(2)
    expect(icons.get(1).props.icon).toEqual(faMinusCircle)
    const tooltipSpan = wrapper.find(
      `[data-tip="${
        HasAccess.tooltipText[DownloadTypeEnum.HasUnmetAccessRestrictions]
      }"]`,
    )
    expect(tooltipSpan).toHaveLength(1)
    // no access restrictions
    expect(wrapper.find('a').text()).toEqual('Request Access')
  })

  it('works with unmet controlled access data - terms of use', async () => {
    SynapseClient.getRestrictionInformation = jest.fn(() =>
      Promise.resolve(mockUnmetControlledDataRestrictionInformationRestricted),
    )

    const { wrapper, instance } = await createShallowComponent(props)
    instance.getRestrictionInformation()
    const request: RestrictionInformationRequest = {
      restrictableObjectType: RestrictableObjectType.ENTITY,
      objectId: entityId,
    }
    expect(SynapseClient.getRestrictionInformation).toHaveBeenCalledWith(
      request,
      token,
    )
    expect(instance.state.restrictionInformation).toEqual(
      mockUnmetControlledDataRestrictionInformationRestricted,
    )
    const link = wrapper.find('a')
    expect(link).toHaveLength(1)
    const icons = wrapper.find(FontAwesomeIcon)
    expect(icons).toHaveLength(2)
    expect(icons.get(1).props.icon).toEqual(faMinusCircle)
    const tooltipSpan = wrapper.find(
      `[data-tip="${
        HasAccess.tooltipText[DownloadTypeEnum.HasUnmetAccessRestrictions]
      }"]`,
    )
    expect(tooltipSpan).toHaveLength(1)
    // no access restrictions
    expect(wrapper.find('a').text()).toEqual('Request Access')
  })
})
