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
import { getSubscribe } from './ForumTable'
import { displayToast } from '../ToastMessage'
import { DiscussionReply } from './DiscussionReply'
import { Button, FormControl } from 'react-bootstrap'
import IconSvg from '../IconSvg'
import Tooltip from '../../utils/tooltip/Tooltip'
import MarkdownSynapse from '../markdown/MarkdownSynapse'
import { ObjectType } from '../../utils/synapseTypes'

export type DiscussionThreadProps = {
  threadId: string
  limit: number
}

const FOLLOWING_TEXT = 'You are following this topic. Click to stop following.'
const UNFOLLOWING_TEXT = 'You are not following this topic. Click to follow.'

export function DiscussionThread(props: DiscussionThreadProps) {
  const { threadId, limit } = props

  const { accessToken } = useSynapseContext()
  const [datePosted, setDatePosted] = useState(true)
  const [message, setMessage] = useState<string>()
  const [subscribed, setSubscribed] = useState<Subscription>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getSubscribe(accessToken, threadId, SubscriptionObjectType.THREAD).then(
      result => setSubscribed(result),
    )
  }, [accessToken, threadId])

  const { data: threadData } = useGetThread(threadId)
  const {
    data: replyData,
    hasNextPage,
    fetchNextPage,
  } = useGetRepliesInfinite(threadId, datePosted, limit)
  const replies = replyData?.pages.flatMap(page => page.results) ?? []

  useEffect(() => {
    const getMess = async () => {
      if (threadData) {
        const messageUrl = await SynapseClient.getThreadMessageUrl(
          threadData.messageKey,
          accessToken,
        )
        const body = await getMessage(messageUrl.messageUrl)
        setMessage(body)
      }
    }
    getMess()
  }, [threadData, accessToken, threadId])

  const handleFollowBtn = async () => {
    try {
      setIsLoading(true)
      if (subscribed) {
        await SynapseClient.deleteSubscription(
          accessToken,
          subscribed.subscriptionId,
        )
        setSubscribed(undefined)
      } else {
        const topic: Topic = {
          objectId: threadId,
          objectType: SubscriptionObjectType.THREAD,
        }
        const follow = await SynapseClient.postSubscription(accessToken, topic)
        setSubscribed(follow)
      }
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bootstrap-4-backport DiscussionThread">
      {threadData && message ? (
        <>
          <div style={{ textAlign: 'center' }}>
            <Button
              variant={datePosted ? 'primary' : 'outline-primary'}
              onClick={() => setDatePosted(true)}
            >
              Date Posted
            </Button>
            <Button
              variant={datePosted ? 'outline-primary' : 'primary'}
              onClick={() => setDatePosted(false)}
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
