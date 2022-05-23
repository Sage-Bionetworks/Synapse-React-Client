import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import CopyToClipboardInput from '../../../lib/containers/CopyToClipboardInput'

describe('basic functionality', () => {
  const props = {
    value: 'some value to be copied',
    inputWidth: '500px',
  }

  it('copies to clipboard when icon is clicked', () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockImplementation(() => Promise.resolve()),
      },
    })
    render(<CopyToClipboardInput {...props} />)
    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      'some value to be copied',
    )
  })

  it('copies to clipboard when input field is clicked', () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockImplementation(() => Promise.resolve()),
      },
    })
    render(<CopyToClipboardInput {...props} />)
    const inputField = screen.getByRole('textbox')
    userEvent.click(inputField)
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      'some value to be copied',
    )
  })
})
