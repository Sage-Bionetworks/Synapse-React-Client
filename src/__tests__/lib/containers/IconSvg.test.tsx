import { mount } from 'enzyme'
import * as React from 'react'
import ReactTooltip from 'react-tooltip'
import IconSvg, { IconSvgOptions } from '../../../lib/containers/IconSvg'

describe('IconSvg: basic functionality', () => {

  const iconOptions: IconSvgOptions = {
    icon: "data",
    color: "#000000"
  }

  it('render component without crashing', async () => {
    const wrapper = mount(<IconSvg
      options={iconOptions}
    />)
    expect(wrapper).toBeDefined()
  })

  it('should render the correct icon', async () => {
    const wrapper = mount(<IconSvg
      options={iconOptions}
    />)
    expect(wrapper.find(".styled-svg-wrapper").prop('data-svg')).toEqual("data")
  })

  it('should render tooltip when label is set', async () => {
    const iconOptionsWithLabel: IconSvgOptions = {
      icon: "data",
      color: "#000000",
      label: "abc"
    }
    const wrapper = mount(<IconSvg
      options={iconOptionsWithLabel}
    />)
    expect(wrapper.containsMatchingElement(<ReactTooltip />)).toEqual(true)
  })

})