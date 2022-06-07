import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React, { useState } from 'react'
import { useDebouncedEffect } from '../../../../lib/utils/hooks/useDebouncedEffect'

const onEffect = jest.fn()
const DEBOUNCE_TIME = 1000

function TestComponent() {
  const [counter, setCounter] = useState(0)
  useDebouncedEffect(
    () => {
      onEffect(counter)
    },
    [counter],
    DEBOUNCE_TIME,
  )

  return (
    <button
      onClick={() => {
        setCounter(counter => counter + 1)
      }}
    />
  )
}

describe('useDebouncedEffect tests', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    jest.resetAllMocks()
  })

  it('Groups multiple clicks', () => {
    render(<TestComponent />)
    const button = screen.getByRole('button')
    userEvent.click(button)

    jest.advanceTimersByTime(DEBOUNCE_TIME)
    expect(onEffect).toHaveBeenCalledTimes(1)
    expect(onEffect).toHaveBeenLastCalledWith(1)

    // Click the button 5 more times
    for (let i = 0; i < 5; i++) {
      userEvent.click(button)
    }

    jest.advanceTimersByTime(DEBOUNCE_TIME)

    // Should only be called one more time, with 6
    expect(onEffect).toHaveBeenCalledTimes(2)
    expect(onEffect).toHaveBeenLastCalledWith(6)
  })

  it('Resets the delay each time a dependency changes', () => {
    render(<TestComponent />)
    const button = screen.getByRole('button')

    userEvent.click(button)
    jest.advanceTimersByTime(DEBOUNCE_TIME / 2)

    // Clicking again should restart the timer
    userEvent.click(button)
    jest.advanceTimersByTime(DEBOUNCE_TIME / 2)

    expect(onEffect).toHaveBeenCalledTimes(0)

    jest.advanceTimersByTime(DEBOUNCE_TIME / 2)

    expect(onEffect).toHaveBeenCalledTimes(1)
    expect(onEffect).toHaveBeenLastCalledWith(2)
  })
})
