import CopyToClipboardInput from '../../../lib/containers/CopyToClipboardInput'
import { mount } from 'enzyme'
import * as React from 'react'
import { act } from '@testing-library/react'
import { Button, FormControl } from 'react-bootstrap'

describe('basic functionality', () => {
  const props = {
    value: 'some value to be copied',
    inputWidth: '500px',
  }

  it('copies to clipboard when icon is clicked', async () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockImplementation(() => Promise.resolve()),
      },
    })
    const wrapper = mount(<CopyToClipboardInput {...props} />)
    await act(async () => {
      await wrapper.find(Button).simulate('click')
    })
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      'some value to be copied',
    )
  })

  it('copies to clipboard when input field is clicked', async () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockImplementation(() => Promise.resolve()),
      },
    })
    const wrapper = mount(<CopyToClipboardInput {...props} />)
    await act(async () => {
      await wrapper.find(FormControl).simulate('click')
    })
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      'some value to be copied',
    )
  })
})
