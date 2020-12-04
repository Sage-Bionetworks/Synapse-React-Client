import React from 'react'
import { render, screen } from '@testing-library/react'
import GraphLoader from 'lib/containers/data_schema/GraphLoader'

test('GraphLoader loads and displays text', async () => {
  render(<GraphLoader />)

  expect(screen.getByAltText('Sage Bionetworks logo')).toBeDefined()
  expect(screen.getByText(`Generating chart, please wait...`)).toBeDefined()
})
