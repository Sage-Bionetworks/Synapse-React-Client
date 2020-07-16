import * as React from 'react'
import { SynapseClientError } from 'lib/utils/SynapseClient'
import SignInButton from './SignInButton'
import Alert from 'react-bootstrap/Alert'
type ErrorProps = {
  error?: SynapseClientError
}

export const Error = (props: ErrorProps) => {
  const { error } = props

  if (!error) {
    return <></>
  }

  return (
    <div className="Error">
      <Alert
        dismissible={false}
        show={true}
        variant={'danger'}
        transition={'div'}
      >
        {error.status === 403 && (
          <p>
            Please <SignInButton /> to view this resource.
          </p>
        )}
        <p>{error.reason}</p>
      </Alert>
    </div>
  )
}
