import { mount } from 'enzyme'
import * as React from 'react'
import DirectDownload, {
  DirectFileDownloadProps,
} from '../../../lib/containers/DirectDownload'
import { act } from '@testing-library/react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { SynapseTestContext } from '../../../mocks/MockSynapseContext'

describe('DirectDownload: basic functionality', () => {
  const props: DirectFileDownloadProps = {
    associatedObjectId: 'abc',
    entityVersionNumber: '345',
  }

  it('render direct download component without crashing', async () => {
    const wrapper = mount(
      <SynapseTestContext>
        <DirectDownload {...props} />
      </SynapseTestContext>,
    )
    mockAllIsIntersecting(true)
    expect(wrapper).toBeDefined()
  })

  it('file handle fetch failure should display nothing', async () => {
    await act(async () => {
      const wrapper = await mount(
        <SynapseTestContext>
          <DirectDownload {...props} />
        </SynapseTestContext>,
      )
      mockAllIsIntersecting(true)
      expect(wrapper.children()).toEqual({})
    })
  })
})
