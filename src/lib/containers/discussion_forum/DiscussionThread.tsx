import moment from 'moment'
import React, { useState } from 'react'
import { formatDate } from '../../utils/functions/DateFormatter'
import {
  useGetRepliesInfinite,
  useGetThread,
} from '../../utils/hooks/SynapseAPI/forum/useForum'
import { SMALL_USER_CARD } from '../../utils/SynapseConstants'
import { SubscriptionObjectType } from '../../utils/synapseTypes/Subscription'
import { Typography } from '@mui/material'
import UserCard from '../UserCard'
import { displayToast } from '../ToastMessage'
import { DiscussionReply } from './DiscussionReply'
import { Button, FormControl, Modal } from 'react-bootstrap'
import IconSvg from '../IconSvg'
import { Tooltip } from '@mui/material'
import MarkdownSynapse from '../markdown/MarkdownSynapse'
import { ObjectType } from '../../utils/synapseTypes'
import { useSubscription } from '../../utils/hooks/SynapseAPI/subscription/useSubscription'
import { useGetCurrentUserProfile } from '../../utils/hooks/SynapseAPI'
import { ForumThreadEditor } from './ForumThreadEditor'

export type DiscussionThreadProps = {
  threadId: string
  limit: number
}

const FOLLOWING_TEXT = 'You are following this topic. Click to stop following.'
const UNFOLLOWING_TEXT = 'You are not following this topic. Click to follow.'

export function DiscussionThread(props: DiscussionThreadProps) {
  const { threadId, limit } = props

  const [orderByDatePosted, setOrderByDatePosted] = useState(true)
  const [showThreadModal, setShowThreadModal] = useState(false)

  const { threadData, threadBody } = useGetThread(threadId)
  const { data: currentUserProfile } = useGetCurrentUserProfile()
  const { subscription, toggleSubscribed, isLoading } = useSubscription(
    threadId,
    SubscriptionObjectType.THREAD,
  )

  const isAuthor = threadData?.createdBy == currentUserProfile?.ownerId

  function handleFollowBtn() {
    try {
      toggleSubscribed()
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    }
  }

  const {
    data: replyData,
    hasNextPage,
    fetchNextPage,
  } = useGetRepliesInfinite(threadId, orderByDatePosted, limit)
  const replies = replyData?.pages.flatMap(page => page.results) ?? []

  return (
    <div className="bootstrap-4-backport DiscussionThread">
      {threadData && threadBody ? (
        <>
          <div style={{ textAlign: 'center' }}>
            <Button
              variant={orderByDatePosted ? 'primary' : 'outline-primary'}
              onClick={() => setOrderByDatePosted(true)}
            >
              Date Posted
            </Button>
            <Button
              variant={orderByDatePosted ? 'outline-primary' : 'primary'}
              onClick={() => setOrderByDatePosted(false)}
            >
              Most Recent
            </Button>
          </div>
          <UserCard
            withAvatar={true}
            avatarSize="MEDIUM"
            showCardOnHover={true}
            size={SMALL_USER_CARD}
            ownerId={threadData.createdBy}
          />
          <Typography style={{ marginTop: '4px' }} variant="headline2">
            {threadData.title}
          </Typography>
          <div>
            <MarkdownSynapse
              markdown={threadBody}
              objectType={ObjectType.THREAD}
            />
          </div>
          <span>
            posted {formatDate(moment(threadData.createdOn), 'M/D/YYYY')}
          </span>
        </>
      ) : (
        <></>
      )}
      <div className="control-container">
        <Tooltip title={subscription ? FOLLOWING_TEXT : UNFOLLOWING_TEXT}>
          <span>
            <button
              className="follow-button"
              aria-label={subscription ? 'Unfollow thread' : 'Follow thread'}
              disabled={isLoading}
              onClick={() => handleFollowBtn()}
            >
              {subscription ? (
                <IconSvg options={{ icon: 'visibility' }} />
              ) : (
                <IconSvg options={{ icon: 'visibilityOff' }} />
              )}
            </button>
          </span>
        </Tooltip>
        {isAuthor && (
          <Tooltip title="Edit Thread">
            <button onClick={() => setShowThreadModal(true)}>
              <IconSvg options={{ icon: 'edit' }} />
            </button>
          </Tooltip>
        )}
      </div>
      {/* Todo : add markdown editor to add replies */}
      <FormControl type="text" placeholder="Write a reply..." />
      <div>
        {replies.map(reply => (
          <DiscussionReply key={reply.id} reply={reply} />
        ))}
      </div>
      {/* Todo : add markdown editor to add replies */}
      <FormControl type="text" placeholder="Write a reply..." />

      {hasNextPage ? (
        <Button
          variant="outline-primary"
          onClick={() => {
            fetchNextPage()
          }}
        >
          Show more results
        </Button>
      ) : (
        <></>
      )}
      <Modal
        size="lg"
        show={showThreadModal}
        onHide={() => setShowThreadModal(false)}
        animation={false}
      >
        <Modal.Header>
          <Modal.Title>New Thread</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ForumThreadEditor
            initialText={threadBody}
            onClose={() => setShowThreadModal(false)}
            initialTitle={threadData?.title}
            id={threadId}
          />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  )
}
