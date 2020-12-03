import Carousel, { CarouselProps } from '@brainhubeu/react-carousel'
import React, { useState } from 'react'
import Arrow from '../../assets/icons/Arrow'
import useShowDesktop from '../../utils/hooks/useShowDesktop'
import { SizeMe, SizeMeProps } from 'react-sizeme'
import '@brainhubeu/react-carousel/lib/style.css'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
function mod(a: number, b: number) {
  return ((a % b) + b) % b
}

export type CardCarouselProps = {
  children: React.ReactElement[]
}

const DesktopProps: CarouselProps = {
  clickToChange: true,
  infinite: true,
  slidesPerScroll: 1,
  slidesPerPage: 3,
  centered: true,
  arrowLeft: <Arrow className="CardCarousel__LeftArrow" />,
  arrowRight: <Arrow className="CardCarousel__RightArrow" />,
  addArrowClickHandler: true,
  breakpoints: {
    1100: {
      slidesPerPage: 1,
    },
  },
}

const MobileProps: CarouselProps = {
  dots: true,
  infinite: true,
  slidesPerScroll: 1,
  slidesPerPage: 1,
}

/**
 * Responsive carousel. The component will display a loading spinner if no children are passed via props.
 * Note that the child components must accept a className prop, or its class will be overriden
 */
export const CardCarousel: React.FunctionComponent<CardCarouselProps> = ({
  children,
}) => {
  const showDesktop = useShowDesktop()
  const [currentIndex, setCurrentIndex] = useState(0)
  const isLoading = children.length === 0

  const styledChildren = React.Children.map(children, (child, index) => {
    // react-carousel renders a flexbox that translates the visible portion to achieve the carousel effect.
    // To create the 'infinite' effect, duplicates are rendered, and the translation sometimes 'jumps' to the previous identical part of the flex container
    // Styling just the 'active' card (and not duplicates) causes CSS transitions to appear to run twice when the translation jumps
    // Calculating the mod index lets us style all duplicates, preventing the user from seeing multiple transitions.
    let carouselClass = child.props.className ?? ''
    if (index === mod(currentIndex, children.length)) {
      carouselClass += ' CardCarousel__SelectedCard'
    } else {
      carouselClass += ' CardCarousel__UnselectedCard'
    }
    return React.cloneElement(child, { className: carouselClass })
  })

  return isLoading ? (
    <div className="spinner" style={{ display: 'block' }} />
  ) : (
    <div className="CardCarousel">
      <SizeMe>
        {(props: SizeMeProps) => (
          <Carousel
            {...(showDesktop ? DesktopProps : MobileProps)}
            key={props.size.width!}
            value={currentIndex}
            onChange={value => setCurrentIndex(value)}
          >
            {styledChildren}
          </Carousel>
        )}
      </SizeMe>
    </div>
  )
}

export default CardCarousel
