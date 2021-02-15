import { mount } from 'enzyme'
import * as React from 'react'
import DirectDownload, { DirectFileDownloadProps } from '../../../lib/containers/DirectDownload'
import { act } from '@testing-library/react'

describe('DirectDownload: basic functionality', () => {

  const props:DirectFileDownloadProps = {
    token: '123',
    associatedObjectId: 'abc',
    entityVersionNumber: '345'
  }

  it('render direct download component without crashing', async () => {
    const wrapper = mount(<DirectDownload {...props} />)
    expect(wrapper).toBeDefined()
  })

  it('file handle fetch failure should display nothing', async () => {
    await act(async () => {
      const wrapper = await mount(<DirectDownload {...props} />)
      expect(wrapper.children()).toEqual({})
    })
  })

})