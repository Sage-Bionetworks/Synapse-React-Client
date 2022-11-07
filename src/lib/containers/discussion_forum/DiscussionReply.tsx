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
import { Modal } from 'react-bootstrap'
import { ForumThreadEditor } from './ForumThreadEditor'
import { useGetCurrentUserProfile } from '../../utils/hooks/SynapseAPI'

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
  const [showReplyModal, setShowReplyModal] = useState(false)
  const { data: currentUserProfile } = useGetCurrentUserProfile()

  const isAuthor = reply.createdBy == currentUserProfile?.ownerId

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
            <div style={{ float: 'right' }}>
              <button onClick={() => onClickLink()}>
                <IconSvg icon="link" />
              </button>
              {isAuthor && (
                <button onClick={() => setShowReplyModal(true)}>
                  <IconSvg icon="edit" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      <Modal
        size="lg"
        show={showReplyModal}
        onHide={() => setShowReplyModal(false)}
        animation={false}
      >
        <Modal.Header>
          <Modal.Title>Edit Reply</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ForumThreadEditor
            isReply={true}
            initialText={message}
            onClose={() => setShowReplyModal(false)}
            id={reply.id}
          />
        </Modal.Body>
      </Modal>
    </div>
  )
}
