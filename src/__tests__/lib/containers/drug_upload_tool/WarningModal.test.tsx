import * as React from 'react'
import { mount } from 'enzyme'
import * as _ from 'lodash'

import WarningModal, { WarningModalProps } from '../../../../lib/containers/drug_upload_tool/WarningModal'



const createMountedComponent = (props: WarningModalProps) => {
  const wrapper = mount(
    <WarningModal
      {...props}
    />,
  )


  //const instance = wrapper.instance() as  WarningModal
  return { wrapper/*, instance */}
}

describe('basic tests', () => {
    const mock = {
     okFn:  jest.fn(() => Promise.resolve({ value: 'ok' }))
    };
 
  const props:  WarningModalProps = {
    title: 'Some Warning',
    copy: 'Some Copy',
    confirmCopy: 'Do it!',
    show: true,
    onOK: mock.okFn,
    onCancel: _.noop,
    callbackArgs: ['one', 'two']
  }

  beforeEach(() => {
 });


  it('should display the modal with correct text', async () => {
    const { wrapper, } = createMountedComponent(props)
    expect(wrapper).toBeDefined()
    expect( wrapper.find('.modal-title.h4').text()).toBe(props.title)
    expect( wrapper.find('div.modal-body').text()).toBe(props.copy)
    expect( wrapper.find('.btn-success').text()).toBe(props.confirmCopy)
  })

  it('should call callback fn with correct arguments', async () => {
    const spy = jest.spyOn(mock, 'okFn')
    const { wrapper, } = createMountedComponent(props)
    const btn = wrapper.find('.btn-success');
    btn.simulate('click');
    expect(spy).toHaveBeenCalledWith('one', 'two');
  })
})
