import * as React from 'react'
import { render, screen } from '@testing-library/react'
import ErrorPage, { ErrorPageProps } from '../../../lib/containers/ErrorPage'

describe('DirectDownload: basic functionality', () => {
  const propsNoAccess: ErrorPageProps = {
    image: 'noAccess',
    title: 'bcd',
    message: '5678',
  }

  it('should render the correct content', () => {
    render(<ErrorPage {...propsNoAccess} />)
    // Should actually be an image, but our test platform doesn't currently load SVGs imported as React Components
    screen.getByText('no-access.svg')
    screen.getByRole('heading', { name: propsNoAccess.title })
    screen.getByText(propsNoAccess.message)
  })
})
