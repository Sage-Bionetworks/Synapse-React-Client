import { SynapseClientError } from '../utils/SynapseClient'
import SignInButton from './SignInButton'
import { Alert } from 'react-bootstrap'
import { useSynapseContext } from '../utils/SynapseContext'
import React from 'react'
type ErrorProps = {
  error?: string | Error | SynapseClientError | null
}

export function toError(clientError: SynapseClientError): Error {
  return new Error(clientError.reason)
}

function isSynapseClientError(
  error: string | Error | SynapseClientError,
): error is SynapseClientError {
  return (error as any).status !== undefined
}

function isError(error: string | Error | SynapseClientError): error is Error {
  return (error as any).message !== undefined
}

function isString(error: string | Error | SynapseClientError): error is string {
  return typeof error === 'string'
}

export const ClientError = (props: { error: SynapseClientError }) => {
  const { accessToken } = useSynapseContext()
  const { error } = props
  const loginError =
    (error.status === 403 || error.status === 401) && !accessToken
  const accessDenied = error.status === 403 && accessToken

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

export const ErrorBanner = (props: ErrorProps) => {
  const { error } = props

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
  } else if (isString(error)) {
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
          {synapseClientError && <ClientError error={synapseClientError} />}
          {jsError && jsError.message}
          {stringError && stringError}
        </p>
      </Alert>
    </div>
  )
}
