import React from 'react'
import { Alert, Button } from 'react-bootstrap'
import {
  ErrorBoundary,
  ErrorBoundaryPropsWithComponent,
  FallbackProps,
} from 'react-error-boundary'
import { isError, isSynapseClientError } from '../utils/ErrorUtils'
import { SynapseClientError } from '../utils/SynapseClient'
import { Optional } from '../utils/types/Optional'
import SignInButton from './SignInButton'

type ErrorBannerProps = {
  token?: string
  error?: string | Error | SynapseClientError | null
  reloadButtonFn?: () => void
}

export const ClientError = (props: {
  error: SynapseClientError
  token?: string
}) => {
  const { error, token } = props
  const loginError = (error.status === 403 || error.status === 401) && !token
  const accessDenied = error.status === 403 && token

  return (
    <>
      {loginError && (
        <>
          Please <SignInButton /> to view this resource.
        </>
      )}
      {accessDenied && <>You are not authorized to access this resource.</>}
      {
        // if we don't have a friendly error message then show the error
        !accessDenied && !loginError && <>{error.reason}</>
      }
    </>
  )
}

export const ErrorBanner = (props: ErrorBannerProps) => {
  const { error, token, reloadButtonFn } = props

  if (!error) {
    return <></>
  }

  let synapseClientError: SynapseClientError | undefined = undefined
  let jsError: Error | undefined = undefined
  let stringError: string | undefined = undefined
  if (isSynapseClientError(error)) {
    synapseClientError = error
  } else if (isError(error)) {
    jsError = error
  } else if (typeof error === 'string') {
    stringError = error
  }
  return (
    <div className="Error bootstrap-4-backport">
      <Alert
        dismissible={false}
        show={true}
        variant={'danger'}
        transition={false}
      >
        <p>
          {synapseClientError && (
            <ClientError error={synapseClientError} token={token} />
          )}
          {jsError && jsError.message}
          {stringError && stringError}
        </p>
        {reloadButtonFn && (
          <Button variant="default" onClick={reloadButtonFn}>
            Reload
          </Button>
        )}
      </Alert>
    </div>
  )
}

export const ErrorFallbackComponent: React.FunctionComponent<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div role="alert" className="bootstrap-4-backport SRC-marginBottomTop">
      <ErrorBanner
        error={error}
        reloadButtonFn={resetErrorBoundary}
      ></ErrorBanner>
    </div>
  )
}

export const TableRowFallbackComponent: React.FunctionComponent<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <tr>
      <td colSpan={999}>
        <ErrorBanner error={error} reloadButtonFn={resetErrorBoundary} />
      </td>
    </tr>
  )
}

/**
 * ErrorBoundary component that uses the default error fallback component, unless overridden.
 * Internally uses `react-error-boundary`.
 *
 * Use with {@link react-error-boundary#handleError | handleError}
 * @param props
 * @returns
 */
export const SynapseErrorBoundary: React.FC<
  Optional<ErrorBoundaryPropsWithComponent, 'FallbackComponent'>
> = (props: Optional<ErrorBoundaryPropsWithComponent, 'FallbackComponent'>) => (
  <ErrorBoundary FallbackComponent={ErrorFallbackComponent} {...props} />
)
