import { SynapseClient } from 'lib/utils'
import React from 'react'

export type LogoutProps = {
  callback: Function
}

export default function Logout(props: LogoutProps) {
  const { callback } = props
  return (
    <button
        className="btn btn-default"
        onClick={() => {SynapseClient.signOut(callback)}}>Log out</button>
  )
}