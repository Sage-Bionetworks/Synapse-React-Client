import { SynapseClient } from 'lib/utils'
import React from 'react'
import { Button } from 'react-bootstrap'

export type LogoutProps = {
  callback: Function
}

export default function Logout(props: LogoutProps) {
  const { callback } = props
  return (
    <div className="bootstrap-4-backport">
      <Button
        variant="default"
        onClick={() => {
          SynapseClient.signOut(callback)
        }}
      >
        Log out
      </Button>
    </div>
  )
}
