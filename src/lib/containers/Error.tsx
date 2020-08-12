import * as React from 'react'
import { SynapseClientError } from '../utils/SynapseClient'
import SignInButton from './SignInButton'
import { Alert } from 'react-bootstrap'
type ErrorProps = {
  error?: SynapseClientError
  token?: string
}

export const Error = (props: ErrorProps) => {
  const { error, token } = props

  if (!error) {
    return <></>
  }

  const loginError = error.status === 403 && !token
  const accessDenied = error.status === 403 && token

  return (
    <div className="Error">
      <Alert
        dismissible={false}
        show={true}
        variant={'danger'}
        transition={'div'}
      >
        <p>
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
        </p>
      </Alert>
    </div>
  )
}
