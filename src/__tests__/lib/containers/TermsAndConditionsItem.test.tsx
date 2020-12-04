import { mount } from 'enzyme'
import * as React from 'react'
import TermsAndConditionsItem from '../../../lib/containers/TermsAndConditionsItem'
import { ReactComponent as chatBubblesSvg } from '../../../lib/assets/icons/terms/chat-bubbles.svg'

describe('Terms and Conditions Item: basic functionality', () => {

  const mockItem = {
    icon: chatBubblesSvg,
    label: "Item 1",
    description: "Item 1 desc"
  }
  const onChange = jest.fn()

  it('render component without crashing', async () => {
    const wrapper = mount(<TermsAndConditionsItem
      id={1}
      enabled={true}
      checked={false}
      item={mockItem}
      onChange={onChange}
    />)
    expect(wrapper).toBeDefined()
  })

  it('should populate the right content', async() => {
    const wrapper = mount(<TermsAndConditionsItem
      id={1}
      enabled={true}
      checked={false}
      item={mockItem}
      onChange={onChange}
    />)
    expect(wrapper.find(".terms-desc label").text()).toEqual(mockItem.label)
  })

  it('should display show more link when there is description', async() => {
    const wrapper = mount(<TermsAndConditionsItem
      id={1}
      enabled={true}
      checked={false}
      item={mockItem}
      onChange={onChange}
    />)
    expect(wrapper.find(".terms-show-desc").text()).toEqual("Show More")
  })

  it('should display show less link when show more link is clicked', async() => {
    const wrapper = mount(<TermsAndConditionsItem
      id={1}
      enabled={true}
      checked={false}
      item={mockItem}
      onChange={onChange}
    />)
    wrapper.find(".terms-show-desc").simulate('click')
    expect(wrapper.find(".terms-show-desc").text()).toEqual("Show Less")
  })

  it('should call event handler when checkbox is checked', async () => {
    const wrapper = mount(<TermsAndConditionsItem
      id={1}
      enabled={true}
      checked={false}
      item={mockItem}
      onChange={onChange}
    />)
    wrapper.find(".terms-circle").simulate('click')
    expect(onChange).toHaveBeenCalledTimes(1)
  })

})