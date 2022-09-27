import React from 'react'
import { SynapseConstants } from '../../../utils'
import UserCard from '../../UserCard'

export type MarkdownUserBadgeProps = {
  alias: string
}

export default function MarkdownUserBadge(props: MarkdownUserBadgeProps) {
  const { alias } = props
  return <UserCard alias={alias} size={SynapseConstants.SMALL_USER_CARD} />
}
