import { mount } from 'enzyme'
import * as React from 'react'
import IconSvg, { IconSvgOptions } from '../../../lib/containers/IconSvg'
import 'jest-styled-components'

describe('IconSvg: basic functionality', () => {

  const iconOptions: IconSvgOptions = {
    icon: "data",
    color: "#000000",
    size: "sm",
    padding: "right"
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

})