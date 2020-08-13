import * as React from 'react'
import { SynapseClientError } from '../utils/SynapseClient'
import SignInButton from './SignInButton'
import { Alert } from 'react-bootstrap'
type ErrorProps = {
  token?: string
  error?: string | TypeError | SynapseClientError
}

function isSynapseClientError(
  error: string | TypeError | SynapseClientError,
): error is SynapseClientError {
  return (error as any).status !== undefined
}

function isTypeError(
  error: string | TypeError | SynapseClientError,
): error is TypeError {
  return (error as any).message !== undefined
}

function isString(
  error: string | TypeError | SynapseClientError,
): error is string {
  return typeof error === 'string'
}

export const ClientError = (props: {
  error: SynapseClientError
  token?: string
}) => {
  const { error, token } = props
  const loginError = error.status === 403 && !token
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

export const Error = (props: ErrorProps) => {
  const { error, token } = props

  if (!error) {
    return <></>
  }

  let synapseClientError: SynapseClientError | undefined = undefined
  let typeError: TypeError | undefined = undefined
  let stringError: string | undefined = undefined
  if (isSynapseClientError(error)) {
    synapseClientError = error
  } else if (isTypeError(error)) {
    typeError = error
  } else if (isString(error)) {
    stringError = error
  }
  return (
    <div className="Error">
      <Alert
        dismissible={false}
        show={true}
        variant={'danger'}
        transition={'div'}
      >
        <p>
          {synapseClientError && (
            <ClientError error={synapseClientError} token={token} />
          )}
          {typeError && typeError.message}
          {stringError && stringError}
        </p>
      </Alert>
    </div>
  )
}
