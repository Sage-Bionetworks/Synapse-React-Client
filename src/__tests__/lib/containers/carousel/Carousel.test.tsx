import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import SizeMe from 'react-sizeme'
import Carousel, { CarouselProps } from '../../../../lib/containers/Carousel'
SizeMe.noPlaceholders = true

function renderComponent(props: CarouselProps) {
  return render(<Carousel {...props} />)
}

describe('basic functionality', () => {
  it('renders a loading spinner when isLoading is true', () => {
    const { container } = renderComponent({ isLoading: true, children: [] })
    expect(container.querySelector('div.spinner')).not.toBeNull()
  })

  it('Does not show a spinner when isLoading is false', () => {
    const { container } = renderComponent({ isLoading: false, children: [] })
    expect(container.querySelector('div.spinner')).toBeNull()
  })

  it('applies the correct classes to components based on index', async () => {
    const children = [
      <div className="child0" key={0} />,
      <div className="child1" key={1} />,
      <div className="child2" key={2} />,
    ]
    const { container } = renderComponent({ isLoading: false, children })

    function assertAllMatchesHaveClass(query: string, className: string): void {
      const matches = container.querySelectorAll(query)
      expect(matches.length).toBeGreaterThan(0)
      matches.forEach(match => {
        expect(match.classList.contains(className)).toBe(true)
      })
    }

    // Cards that map to the first child should have the 'Selected' class, second and third child should be unselected
    assertAllMatchesHaveClass('div.child0', 'SRC-Carousel__SelectedCard')
    assertAllMatchesHaveClass('div.child1', 'SRC-Carousel__UnselectedCard')
    assertAllMatchesHaveClass('div.child2', 'SRC-Carousel__UnselectedCard')

    // Click the right arrow
    userEvent.click(
      container.querySelector('div.BrainhubCarousel__custom-arrowRight')!,
    )

    // Cards that map to the second child should have the 'Selected' class, others unselected
    assertAllMatchesHaveClass('div.child0', 'SRC-Carousel__UnselectedCard')
    assertAllMatchesHaveClass('div.child1', 'SRC-Carousel__SelectedCard')
    assertAllMatchesHaveClass('div.child2', 'SRC-Carousel__UnselectedCard')
  })
})
