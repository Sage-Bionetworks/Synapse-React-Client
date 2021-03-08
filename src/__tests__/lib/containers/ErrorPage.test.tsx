import * as React from 'react'
import { mount } from 'enzyme'
import ErrorPage, { ErrorPageProps } from '../../../lib/containers/ErrorPage'

describe('DirectDownload: basic functionality', () => {

  const propsNoAccess:ErrorPageProps = {
    image: "noAccess",
    title: "bcd",
    message: "5678"
  }

  it('render error page component without crashing', async () => {
    const wrapper = mount(<ErrorPage {...propsNoAccess}/>)
    expect(wrapper).toBeDefined()
  })

  it('should render the correct content', async () => {
    const wrapper = mount(<ErrorPage {...propsNoAccess}/>)
    expect(wrapper.find("svg").text()).toEqual("no-access.svg")
    expect(wrapper.find("h2").text()).toEqual("bcd")
    expect(wrapper.find("p").text()).toEqual("5678")
  })

})

