import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { noop } from 'lodash-es'
import * as React from 'react'
import WarningModal, {
  WarningModalProps,
} from '../../../../lib/containers/synapse_form_wrapper/WarningModal'

function renderComponent(props: WarningModalProps) {
  return render(<WarningModal {...props} />)
}

describe('WarningModal tests', () => {
  const mock = {
    confirmFn: jest.fn(() => Promise.resolve({ value: 'ok' })),
  }

  const props: WarningModalProps = {
    title: 'Some Warning',
    modalBody: 'Some Copy',
    confirmButtonText: 'Do it!',
    show: true,
    onConfirm: mock.confirmFn,
    onCancel: noop,
    onConfirmCallbackArgs: ['one', 'two'],
  }

  it('should display the modal with correct text', () => {
    renderComponent(props)
    expect(screen.getByRole('dialog')).toBeVisible()
    screen.getByRole('heading', { name: props.title })
    within(screen.getByRole('article')).queryByText(props.modalBody)
    screen.getByRole('button', { name: props.confirmButtonText })
  })

  it('should call callback fn with correct arguments', () => {
    const spy = jest.spyOn(mock, 'confirmFn')
    renderComponent(props)
    userEvent.click(
      screen.getByRole('button', { name: props.confirmButtonText }),
    )
    expect(spy).toHaveBeenCalledWith('one', 'two')
  })
})
