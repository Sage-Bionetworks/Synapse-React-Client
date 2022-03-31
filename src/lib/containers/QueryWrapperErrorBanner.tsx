import React from 'react'
import { ErrorBanner } from './ErrorBanner'
import { useQueryContext } from './QueryWrapper'

/**
 * Error banner that automatically pulls the error from QueryContext.
 */
export const QueryWrapperErrorBanner = () => {
  const { error } = useQueryContext()
  return <ErrorBanner error={error} />
}
