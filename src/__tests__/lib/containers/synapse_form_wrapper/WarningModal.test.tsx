import * as React from 'react'
import { mount } from 'enzyme'
import * as _ from 'lodash-es'

import WarningModal, {
  WarningModalProps,
} from '../../../../lib/containers/synapse_form_wrapper/WarningModal'

const createMountedComponent = (props: WarningModalProps) => {
  const wrapper = mount(<WarningModal {...props} />)

  //const instance = wrapper.instance() as  WarningModal
  return { wrapper /*, instance */ }
}

describe('basic tests', () => {
  const mock = {
    confirmFn: jest.fn(() => Promise.resolve({ value: 'ok' })),
  }

  const props: WarningModalProps = {
    title: 'Some Warning',
    modalBody: 'Some Copy',
    confirmButtonText: 'Do it!',
    show: true,
    onConfirm: mock.confirmFn,
    onCancel: _.noop,
    onConfirmCallbackArgs: ['one', 'two'],
  }

  it('should display the modal with correct text', async () => {
    const { wrapper } = createMountedComponent(props)
    expect(wrapper).toBeDefined()
    expect(wrapper.find('.modal-title.h4').text()).toBe(props.title)
    expect(wrapper.find('div.modal-body').text()).toBe(props.modalBody)
    expect(wrapper.find('.btn-sds-primary').text()).toBe(
      props.confirmButtonText,
    )
  })

  it('should call callback fn with correct arguments', async () => {
    const spy = jest.spyOn(mock, 'confirmFn')
    const { wrapper } = createMountedComponent(props)
    const btn = wrapper.find('.btn-sds-primary')
    btn.simulate('click')
    expect(spy).toHaveBeenCalledWith('one', 'two')
  })
})
