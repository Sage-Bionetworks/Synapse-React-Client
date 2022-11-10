import moment from 'moment'
import React, { useState } from 'react'
import { formatDate } from '../../utils/functions/DateFormatter'
import { useGetModerators } from '../../utils/hooks/SynapseAPI/forum/useForum'
import { useGetRepliesInfinite } from '../../utils/hooks/SynapseAPI/forum/useReply'
import {
  useDeleteThread,
  useGetThread,
} from '../../utils/hooks/SynapseAPI/forum/useThread'
import {
  ALL_ENTITY_BUNDLE_FIELDS,
  SMALL_USER_CARD,
  SRC_SIGN_IN_CLASS,
} from '../../utils/SynapseConstants'
import { SubscriptionObjectType } from '../../utils/synapseTypes/Subscription'
import { Typography } from '@mui/material'
import UserCard from '../UserCard'
import { displayToast } from '../ToastMessage'
import { DiscussionReply } from './DiscussionReply'
import { Button, FormControl, Modal } from 'react-bootstrap'
import IconSvg from '../IconSvg'
import MarkdownSynapse from '../markdown/MarkdownSynapse'
import { ObjectType } from '../../utils/synapseTypes'
import { useSubscription } from '../../utils/hooks/SynapseAPI/subscription/useSubscription'
import {
  useGetCurrentUserProfile,
  useGetEntityBundle,
} from '../../utils/hooks/SynapseAPI'
import { ForumThreadEditor } from './ForumThreadEditor'
import WarningModal from '../synapse_form_wrapper/WarningModal'

export type DiscussionThreadProps = {
  threadId: string
  limit: number
}

const FOLLOWING_TEXT = 'You are following this topic. Click to stop following.'
const UNFOLLOWING_TEXT = 'You are not following this topic. Click to follow.'
const SIGN_IN_TEXT = 'You will need to sign in for access to that resource'

export function DiscussionThread(props: DiscussionThreadProps) {
  const { threadId, limit } = props

  const [orderByDatePosted, setOrderByDatePosted] = useState(true)
  const [showThreadModal, setShowThreadModal] = useState(false)
  const [showReplyEditor1, setShowReplyEditor1] = useState(false)
  const [showReplyEditor2, setShowReplyEditor2] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showSignInModal, setShowSignInModal] = useState(false)

  const { threadData, threadBody, togglePin } = useGetThread(threadId)
  const { data: currentUserProfile } = useGetCurrentUserProfile()
  const { data: entityBundle } = useGetEntityBundle(
    threadData?.projectId ?? '',
    undefined,
    ALL_ENTITY_BUNDLE_FIELDS,
    {
      enabled: !!threadData,
    },
  )
  const { data: moderatorList } = useGetModerators(threadData?.forumId ?? '', {
    enabled: !!threadData,
  })
  const { subscription, toggleSubscribed, isLoading } = useSubscription(
    threadId,
    SubscriptionObjectType.THREAD,
  )
  const { mutate: deleteThread } = useDeleteThread({
    onSuccess: () => {
      setShowDeleteModal(false)
      displayToast('A thread has been deleted.', 'info')
    },
  })
  const isCurrentUserAuthor =
    threadData?.createdBy == currentUserProfile?.ownerId
  const isCurrentUserModerator = moderatorList?.results.includes(
    currentUserProfile?.ownerId ?? '',
  )

  function handleFollowBtn() {
    if (currentUserProfile?.userName == 'anonymous') {
      setShowSignInModal(true)
    } else {
      try {
        toggleSubscribed()
      } catch (err: any) {
        displayToast(err.reason as string, 'danger')
      }
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
        <span>
          <button
            className="follow-button"
            aria-label={subscription ? 'Unfollow thread' : 'Follow thread'}
            disabled={isLoading}
            onClick={() => handleFollowBtn()}
          >
            {subscription ? (
              <IconSvg icon="visibility" label={FOLLOWING_TEXT} />
            ) : (
              <IconSvg icon="visibilityOff" label={UNFOLLOWING_TEXT} />
            )}
          </button>
        </span>
        {isCurrentUserAuthor && (
          <button onClick={() => setShowThreadModal(true)}>
            <IconSvg icon="edit" label="Edit thread" />
          </button>
        )}

        {entityBundle?.permissions.canModerate ? (
          <>
            <button onClick={() => setShowDeleteModal(true)}>
              <IconSvg icon="delete" label="Delete thread" />
            </button>
            <button onClick={() => togglePin()}>
              {threadData?.isPinned ? (
                <IconSvg
                  icon="pushpin"
                  sx={{ color: 'error.main' }}
                  label="Unpin thread"
                />
              ) : (
                <IconSvg icon="pushpin" label="Pin thread" />
              )}
            </button>
          </>
        ) : null}
      </div>
      {!showReplyEditor1 ? (
        <FormControl
          type="text"
          placeholder="Write a reply..."
          onClick={() => {
            currentUserProfile?.userName == 'anonymous'
              ? setShowSignInModal(true)
              : setShowReplyEditor1(true)
          }}
        />
      ) : (
        <ForumThreadEditor
          id={threadId}
          isReply={true}
          onClose={() => setShowReplyEditor1(false)}
        />
      )}
      <div>
        {replies.map(reply => (
          <DiscussionReply key={reply.id} reply={reply} />
        ))}
      </div>
      {replies.length > 0 && (
        <>
          {!showReplyEditor2 ? (
            <FormControl
              type="text"
              placeholder="Write a reply..."
              onClick={() => {
                currentUserProfile?.userName == 'anonymous'
                  ? setShowSignInModal(true)
                  : setShowReplyEditor2(true)
              }}
            />
          ) : (
            <ForumThreadEditor
              id={threadId}
              isReply={true}
              onClose={() => setShowReplyEditor2(false)}
            />
          )}
        </>
      )}

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
          <Modal.Title>Edit Thread</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ForumThreadEditor
            isReply={false}
            initialText={threadBody}
            onClose={() => setShowThreadModal(false)}
            initialTitle={threadData?.title}
            id={threadId}
          />
        </Modal.Body>
      </Modal>
      <WarningModal
        show={showDeleteModal}
        className="bootstrap-4-backport"
        title="Confirm Deletion"
        modalBody="Are you sure you want to delete this thread?"
        onCancel={() => setShowDeleteModal(false)}
        onConfirm={() => threadData && deleteThread(threadData)}
        confirmButtonVariant="danger"
        confirmButtonText="Delete"
      />
      <Modal
        className="bootstrap-4-backport"
        show={showSignInModal}
        onHide={() => setShowSignInModal(false)}
        animation={false}
      >
        <Modal.Header closeButton />
        <Modal.Body>{SIGN_IN_TEXT}</Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => setShowSignInModal(false)}
            className={SRC_SIGN_IN_CLASS}
          >
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
