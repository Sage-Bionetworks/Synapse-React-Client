import { mount } from 'enzyme'
import * as React from 'react'
import TermsAndConditions from '../../../lib/containers/TermsAndConditions'

describe('Terms And Conditions: basic functionality', () => {

  const props = {
    token: '1234',
  }
  const checkboxCount = 8

  it('render terms and condition without crashing', async () => {
    const wrapper = mount(<TermsAndConditions {...props} />)
    expect(wrapper).toBeDefined()
  })

  it('should render all checkboxes', async () => {
    const wrapper = mount(<TermsAndConditions {...props} />)
    const li = wrapper.find(".term-list > li")
    expect(li.length).toEqual(checkboxCount)
  })

  it('should display signature pad modal', async () => {
    const wrapper = mount(<TermsAndConditions {...props} />)
    wrapper.find(".terms-signature-action").simulate('click')
    expect(wrapper.find(".signature-pad-modal")).toBeDefined()
  })

})