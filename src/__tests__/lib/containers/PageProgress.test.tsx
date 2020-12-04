import { mount } from 'enzyme'
import * as React from 'react'
import PageProgress, { PageProgressProps } from '../../../lib/containers/PageProgress'

describe('Page Progress: basic functionality', () => {

  const onBackButtonClicked = jest.fn()
  const onNextButtonClicked = jest.fn()
  const props:PageProgressProps = {
    barColor: "",
    barPercent: 30,
    backBtnLabel: "Go back",
    backBtnCallback: onBackButtonClicked,
    forwardBtnLabel: "Go forward",
    forwardBtnCallback: onNextButtonClicked,
    forwardBtnActive: false
  }
  const canGoNextProps:PageProgressProps = {...props}
  canGoNextProps.forwardBtnActive = true

  it('render component without crashing', async () => {
    const wrapper = mount(<PageProgress {...props} />)
    expect(wrapper).toBeDefined()
  })

  it('should render progress bar with correct width', async () => {
    const wrapper = mount(<PageProgress {...props} />)
    expect(wrapper.find('.page-progress-percent').prop('style')).toHaveProperty('width', '30%')
  })

  it('should render button with correct labels', async () => {
    const wrapper = mount(<PageProgress {...props} />)
    expect(wrapper.find('button.btn-progress-back').text()).toEqual('Go back')
    expect(wrapper.find('button.btn-progress-next').text()).toEqual('Go forward')
  })

  it('should have correct css class for forward button', async () => {
    const wrapper = mount(<PageProgress {...props} />)
    expect(wrapper.find('button.btn-progress-back')).toBeDefined()

    const wrapper2 = mount(<PageProgress {...canGoNextProps} />)
    expect(wrapper2.find('button.btn-progress-next-active').text()).toEqual('Go forward')
  })

  it('should call back button callback when clicked', async () => {
    const wrapper = mount(<PageProgress {...props} />)
    wrapper.find("button.btn-progress-back").simulate('click')
    expect(onBackButtonClicked).toHaveBeenCalledTimes(1)
  })

  it('should not call forward button callback when it is not active', async () => {
    const wrapper = mount(<PageProgress {...props} />)
    wrapper.find("button.btn-progress-back").simulate('click')
    expect(onNextButtonClicked).toHaveBeenCalledTimes(0)
  })

  it('should call forward button callback when it is active', async () => {
    const wrapper = mount(<PageProgress {...canGoNextProps} />)
    wrapper.find("button.btn-progress-next-active").simulate('click')
    expect(onNextButtonClicked).toHaveBeenCalledTimes(1)
  })

})
