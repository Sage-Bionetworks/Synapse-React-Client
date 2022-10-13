import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { SynapseClient } from '../../utils'
import { formatDate } from '../../utils/functions/DateFormatter'
import { SMALL_USER_CARD } from '../../utils/SynapseConstants'
import { useSynapseContext } from '../../utils/SynapseContext'
import { DiscussionReplyBundle } from '../../utils/synapseTypes/DiscussionBundle'
import { getMessage } from '../DiscussionSearchResult'
import UserCard from '../UserCard'
import MarkdownSynapse from '../markdown/MarkdownSynapse'
import { ObjectType } from '../../utils/synapseTypes'
import IconSvg from '../IconSvg'

export type DiscussionReplyProps = {
  reply: DiscussionReplyBundle
  onClickLink?: () => void
}

export const DiscussionReply: React.FC<DiscussionReplyProps> = ({
  reply,
  onClickLink = () => alert('This functionality has not been implemented yet'),
}) => {
  const { accessToken } = useSynapseContext()
  const [message, setMessage] = useState<string>()

  useEffect(() => {
    const getReplyMessage = async () => {
      const messageUrl = await SynapseClient.getReplyMessageUrl(
        reply.messageKey,
        accessToken,
      )
      const body = await getMessage(messageUrl.messageUrl)
      setMessage(body)
    }
    getReplyMessage()
  }, [accessToken, reply.messageKey])

  return (
    <div className="reply-container">
      {message && (
        <div>
          <UserCard
            withAvatar={true}
            avatarSize="MEDIUM"
            showCardOnHover={true}
            size={SMALL_USER_CARD}
            ownerId={reply.createdBy}
          />
          <div className="message-body">
            <MarkdownSynapse markdown={message} objectType={ObjectType.REPLY} />
            <span>
              posted {formatDate(moment(reply.createdOn), 'M/D/YYYY')}
            </span>
            <button onClick={() => onClickLink()} style={{ float: 'right' }}>
              <IconSvg options={{ icon: 'link' }} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
