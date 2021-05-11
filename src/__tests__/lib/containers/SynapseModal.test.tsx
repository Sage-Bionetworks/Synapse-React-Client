import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import SynapseModal, {
  SynapseModalProps,
} from '../../../lib/containers/SynapseModal'

const mockOnHide = jest.fn()

const defaultProps: SynapseModalProps = {
  title: 'Modal Title',
  children: <div role="article">My modal content</div>,
  show: true,
  onHide: mockOnHide(),
}

function renderComponent(propOverrides?: Partial<SynapseModalProps>) {
  return render(<SynapseModal {...defaultProps} {...propOverrides} />)
}

describe('Custom modal tests', () => {
  beforeEach(() => jest.resetAllMocks())

  it('Modal and contents are visible when show is true', async () => {
    renderComponent()
    expect(() => screen.getByRole('dialog')).not.toThrowError()
    expect(() => screen.getByRole('article')).not.toThrowError()
  })

  it('Modal and contents are not visible when show is false', () => {
    renderComponent({ show: false })
    expect(() => screen.getByRole('dialog')).toThrowError()
    expect(() => screen.getByRole('article')).toThrowError()
  })

  it('calls onHide when the close button is clicked', async () => {
    renderComponent()

    expect(mockOnHide).not.toBeCalled()

    userEvent.click(screen.getByRole('button'))

    expect(mockOnHide).toBeCalled()
  })
})
