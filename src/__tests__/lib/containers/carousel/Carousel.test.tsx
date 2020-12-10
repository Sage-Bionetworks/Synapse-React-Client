import { mount, shallow } from 'enzyme'
import Carousel from 'lib/containers/Carousel'
import { resolveAllPending } from 'lib/testutils/EnzymeHelpers'
import React from 'react'
import { act } from 'react-dom/test-utils'
import SizeMe from 'react-sizeme'
SizeMe.noPlaceholders = true

describe('basic functionality', () => {
  it('renders a loading spinner isLoading is true', async () => {
    const emptyCarouselWrapper = shallow(
      <Carousel isLoading={true}>{[]}</Carousel>,
    )
    expect(emptyCarouselWrapper.find('div.spinner')).toHaveLength(1)

    // No loading spinner
    const carouselWrapper = shallow(<Carousel isLoading={false}>{[]}</Carousel>)
    expect(carouselWrapper.find('div.spinner')).toHaveLength(0)
  })

  it('applies the correct classes to components based on index', async () => {
    const children = [
      <div className="child0" key={0} />,
      <div className="child1" key={1} />,
      <div className="child2" key={2} />,
    ]
    const wrapper = mount(<Carousel isLoading={false}>{children}</Carousel>)
    await resolveAllPending(wrapper)

    // Cards that map to the first child should have the 'Selected' class
    expect(wrapper.find('div.child0').length).toBeGreaterThan(0)
    wrapper.find('div.child0').forEach(child => {
      expect(child.hasClass('SRC-Carousel__SelectedCard')).toBe(true)
    })
    expect(wrapper.find('div.child1').length).toBeGreaterThan(0)
    wrapper.find('div.child1').forEach(child => {
      expect(child.hasClass('SRC-Carousel__UnselectedCard')).toBe(true)
    })
    expect(wrapper.find('div.child2').length).toBeGreaterThan(0)
    wrapper.find('div.child2').forEach(child => {
      expect(child.hasClass('SRC-Carousel__UnselectedCard')).toBe(true)
    })

    // Click the right arrow
    await act(async () => {
      await wrapper
        .find('div.BrainhubCarousel__custom-arrowRight')
        .simulate('click')
    })
    await resolveAllPending(wrapper)

    // Cards that map to the second child should have the 'Selected' class
    expect(wrapper.find('div.child0').length).toBeGreaterThan(0)
    wrapper.find('div.child0').forEach(child => {
      expect(child.hasClass('SRC-Carousel__UnselectedCard')).toBe(true)
    })
    expect(wrapper.find('div.child1').length).toBeGreaterThan(0)
    wrapper.find('div.child1').forEach(child => {
      expect(child.hasClass('SRC-Carousel__SelectedCard')).toBe(true)
    })
    expect(wrapper.find('div.child2').length).toBeGreaterThan(0)
    wrapper.find('div.child2').forEach(child => {
      expect(child.hasClass('SRC-Carousel__UnselectedCard')).toBe(true)
    })
  })
})
