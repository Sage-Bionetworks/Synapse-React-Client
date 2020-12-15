import { mount } from 'enzyme'
import * as React from 'react'
import DirectDownload, { DirectFileDownloadProps } from '../../../lib/containers/DirectDownload'
import { FileFetchResponse } from '../../../lib/containers/FileEntityHandleQueryWrapper'
import { Icon } from '../../../lib/containers/row_renderers/utils'

describe('DirectDownload: basic functionality', () => {

  const failedResponse:FileFetchResponse = {
    fileHandleId: '1000',
    failureCode: 'UNAUTHORIZED'
  }

  const successDownloadIconResponse:FileFetchResponse = {
    fileEntity: {
      dataFileHandleId: '123',
      concreteType: 'org.sagebionetworks.repo.model.FileEntity',
      name: ''
    },
    fileHandle: {
      id: '',
      etag: '',
      createdBy: '',
      createdOn: '',
      concreteType: '',
      contentType: '',
      contentMd5: '',
      fileName: '',
      storageLocationId: 123,
      contentSize: 100,
      isPreview: false,
      externalURL: ''
    }
  }

  const successExternalLinkIconResponse:FileFetchResponse = {
    fileEntity: {
      dataFileHandleId: '123',
      concreteType: 'org.sagebionetworks.repo.model.FileEntity',
      name: ''
    },
    fileHandle: {
      id: '',
      etag: '',
      createdBy: '',
      createdOn: '',
      concreteType: 'org.sagebionetworks.repo.model.file.ExternalFileHandle',
      contentType: '',
      contentMd5: '',
      fileName: '',
      storageLocationId: 123,
      contentSize: 100,
      isPreview: false,
      externalURL: 'www.google.com'
    }
  }

  const failureProps:DirectFileDownloadProps = {
    token: '1234',
    fileEntityHandle: failedResponse
  }

  const successDownloadIconProps:DirectFileDownloadProps = {
    token: '1234',
    fileEntityHandle: successDownloadIconResponse
  }

  const successExternalLinkProps:DirectFileDownloadProps = {
    token: '1234',
    fileEntityHandle: successExternalLinkIconResponse
  }

  it('render direct download component without crashing', async () => {
    const wrapper = mount(<DirectDownload {...failureProps} />)
    expect(wrapper).toBeDefined()
  })

  it('file handle fetch failure should display nothing', async () => {
    const wrapper = mount(<DirectDownload {...failureProps} />)
    expect(wrapper.children()).toEqual({})
  })

  it('if authorized, internal file should display download icon', async () => {
    const wrapper = mount(<DirectDownload {...successDownloadIconProps} />)
    const icon = wrapper.find(Icon)
    expect(icon.length).toEqual(1)
    expect(icon.props().type).toEqual("download")
  })

  it('if authorized, external file should display external link icon', async () => {
    const wrapper = mount(<DirectDownload {...successExternalLinkProps} />)
    const icon = wrapper.find(Icon)
    expect(icon.length).toEqual(1)
    expect(icon.props().type).toEqual("externallink")
  })

})