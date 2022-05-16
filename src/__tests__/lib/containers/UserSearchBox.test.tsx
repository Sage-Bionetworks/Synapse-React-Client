import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import UserSearchBox from '../../../lib/containers/UserSearchBox'

describe('UserSearchBox: basic functionality', () => {
  it('render component without crashing', async () => {
    const { container } = render(<UserSearchBox />)
    expect(container).toBeDefined()
  })

  it('should display a list of users when typing into search box', async () => {
    const utils = render(<UserSearchBox />)
    const input = utils.getByRole('searchbox')
    const ul = utils.getByRole('list')
    fireEvent.change(input, { target: { value: 'ab' } })
    expect(ul.className).toEqual('users-visible')
  })

  it('should hide user list when search box is not focused', async () => {
    const utils = render(<UserSearchBox />)
    const input = utils.getByRole('searchbox')
    const ul = utils.getByRole('list')
    input.blur()
    expect(ul.className).toEqual('')
  })
})
