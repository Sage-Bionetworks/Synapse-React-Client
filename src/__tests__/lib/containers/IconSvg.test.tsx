import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import IconSvg, { IconSvgOptions } from '../../../lib/containers/IconSvg'

describe('IconSvg: basic functionality', () => {
  const iconOptions: IconSvgOptions = {
    icon: 'data',
    color: '#000000',
  }

  it('should render an image', () => {
    render(<IconSvg options={iconOptions} />)
    screen.getByRole('img')
  })

  it('should render tooltip when label is set', async () => {
    const iconOptionsWithLabel: IconSvgOptions = {
      icon: 'data',
      color: '#000000',
      label: 'abc',
    }
    render(<IconSvg options={iconOptionsWithLabel} />)
    const iconContainer = screen.getByRole('img')
    await userEvent.hover(iconContainer)
    await screen.findByText(iconOptionsWithLabel.label!)
  })
})
