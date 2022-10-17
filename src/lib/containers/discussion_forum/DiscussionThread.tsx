import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { formatDate } from '../../utils/functions/DateFormatter'
import {
  useGetRepliesInfinite,
  useGetThread,
} from '../../utils/hooks/SynapseAPI/forum/useForum'
import { SynapseClient } from '../../utils'
import { SMALL_USER_CARD } from '../../utils/SynapseConstants'
import { useSynapseContext } from '../../utils/SynapseContext'
import {
  Subscription,
  SubscriptionObjectType,
  Topic,
} from '../../utils/synapseTypes/Subscription'
import Typography from '../../utils/typography/Typography'
import { getMessage } from '../DiscussionSearchResult'
import UserCard from '../UserCard'
import { displayToast } from '../ToastMessage'
import { DiscussionReply } from './DiscussionReply'
import { Button, FormControl } from 'react-bootstrap'
import IconSvg from '../IconSvg'
import Tooltip from '../../utils/tooltip/Tooltip'
import MarkdownSynapse from '../markdown/MarkdownSynapse'
import { ObjectType } from '../../utils/synapseTypes'
import { getSubscription } from '../../utils/functions/getSubscription'
import {
  useDeleteSubscription,
  usePostSubscription,
} from '../../utils/hooks/SynapseAPI/subscription/useSubscription'

export type DiscussionThreadProps = {
  threadId: string
  limit: number
}

const FOLLOWING_TEXT = 'You are following this topic. Click to stop following.'
const UNFOLLOWING_TEXT = 'You are not following this topic. Click to follow.'

export function DiscussionThread(props: DiscussionThreadProps) {
  const { threadId, limit } = props

  const { accessToken } = useSynapseContext()
  const [orderByDatePosted, setOrderByDatePosted] = useState(true)
  const [message, setMessage] = useState<string>()
  const [subscribed, setSubscribed] = useState<Subscription>()
  const [isLoading, setIsLoading] = useState(false)

  const { data: threadData } = useGetThread(threadId)
  const { mutate: updateSubscription } = usePostSubscription()
  const { mutate: deleteSubscription } = useDeleteSubscription()

  useEffect(() => {
    getSubscription(accessToken, threadId, SubscriptionObjectType.THREAD).then(
      result => setSubscribed(result),
    )
  }, [accessToken, threadId, handleFollowBtn])

  function handleFollowBtn() {
    try {
      setIsLoading(true)
      if (subscribed) {
        deleteSubscription(subscribed.subscriptionId)
      } else {
        const topic: Topic = {
          objectId: threadId,
          objectType: SubscriptionObjectType.THREAD,
        }
        updateSubscription(topic)
      }
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    } finally {
      setIsLoading(false)
    }
  }

  const {
    data: replyData,
    hasNextPage,
    fetchNextPage,
  } = useGetRepliesInfinite(threadId, orderByDatePosted, limit)
  const replies = replyData?.pages.flatMap(page => page.results) ?? []

  useEffect(() => {
    const getMessageBody = async () => {
      if (threadData) {
        const messageUrl = await SynapseClient.getThreadMessageUrl(
          threadData.messageKey,
          accessToken,
        )
        const body = await getMessage(messageUrl.messageUrl)
        setMessage(body)
      }
    }
    getMessageBody()
  }, [threadData, accessToken, threadId])

  return (
    <div className="bootstrap-4-backport DiscussionThread">
      {threadData && message ? (
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
              markdown={message}
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
      <Tooltip title={subscribed ? FOLLOWING_TEXT : UNFOLLOWING_TEXT}>
        <button
          className="follow-button"
          aria-label={subscribed ? 'follow-button' : 'unfollow-button'}
          disabled={isLoading}
          onClick={() => handleFollowBtn()}
        >
          {subscribed ? (
            <IconSvg options={{ icon: 'visibility' }} />
          ) : (
            <IconSvg options={{ icon: 'visibilityOff' }} />
          )}
        </button>
      </Tooltip>
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
        <Button variant="outline-primary" onClick={() => fetchNextPage()}>
          Show more results
        </Button>
      ) : (
        <></>
      )}
    </div>
  )
}
