import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import SortIcon from '../../assets/icons/Sort'
import { SynapseClient } from '../../utils'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import { useGetForumInfinite } from '../../utils/hooks/SynapseAPI/forum/useForum'
import { AVATAR, SMALL_USER_CARD } from '../../utils/SynapseConstants'
import { useSynapseContext } from '../../utils/SynapseContext'
import { Direction } from '../../utils/synapseTypes'
import {
  DiscussionFilter,
  DiscussionThreadOrder,
} from '../../utils/synapseTypes/DiscussionBundle'
import {
  SortByType,
  Subscription,
  SubscriptionObjectType,
  SubscriptionRequest,
  Topic,
} from '../../utils/synapseTypes/Subscription'
import IconSvg from '../IconSvg'
import { displayToast } from '../ToastMessage'
import UserCard from '../UserCard'

export type ForumTableProps = {
  forumId: string
  limit: number
  filter?: DiscussionFilter
}

export const ForumTable: React.FC<ForumTableProps> = ({
  forumId,
  limit,
  filter,
}) => {
  const { accessToken } = useSynapseContext()
  const [sort, setSort] = useState<DiscussionThreadOrder>(
    DiscussionThreadOrder.PINNED_AND_LAST_ACTIVITY,
  )
  const [subscribed, setSubscribed] = useState<Subscription>()
  const [isAscending, setIsAscending] = useState(false)

  async function getSubscribe() {
    let subscriptionRequest: SubscriptionRequest = {
      objectType: SubscriptionObjectType.FORUM,
      idList: [forumId],
      sortByType: SortByType.OBJECT_ID,
      sortDirection: Direction.ASC,
    }
    let subscriptionList = await SynapseClient.postSubscriptionList(
      accessToken,
      subscriptionRequest,
    )
    if (subscriptionList.totalNumberOfResults > 0) {
      let currentSubscription = subscriptionList.results[0]
      setSubscribed(currentSubscription)
    }
  }
  useEffect(() => {
    getSubscribe()
  }, [accessToken])

  const { data, hasNextPage, fetchNextPage } = useGetForumInfinite(
    forumId,
    limit,
    sort,
    isAscending,
    filter,
  )

  const threads = data?.pages.flatMap(page => page.results) ?? []

  const getUrl = (threadId: string, projectId: string) => {
    return `${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${projectId}/discussion/threadId=${threadId}`
  }

  const handleFollowBtn = async () => {
    try {
      if (subscribed) {
        await SynapseClient.deleteSubscription(
          accessToken,
          subscribed.subscriptionId,
        )
        setSubscribed(undefined)
      } else {
        const topic: Topic = {
          objectId: forumId,
          objectType: SubscriptionObjectType.FORUM,
        }
        const follow = await SynapseClient.postSubscription(accessToken, topic)
        setSubscribed(follow)
      }
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    }
  }

  const onSort = (field: DiscussionThreadOrder) => {
    if (sort == field) {
      setSort(field)
      setIsAscending(!isAscending)
    } else {
      setSort(field)
      setIsAscending(false)
    }
  }

  return (
    <div className="ForumTable bootstrap-4-backport">
      <div className="ForumTable__top-level-control">
        <Button
          variant={subscribed ? 'outline-primary' : 'primary'}
          onClick={() => handleFollowBtn()}
        >
          {subscribed ? 'Unfollow' : 'Follow'}
        </Button>
      </div>
      <Table>
        <thead>
          <tr>
            <th>
              <span className="SRC-split">
                <span>Topic</span>
                <SortIcon
                  role="button"
                  aria-label="Sort by Topic"
                  active={sort === DiscussionThreadOrder.THREAD_TITLE}
                  direction={
                    sort === 'THREAD_TITLE'
                      ? isAscending === false
                        ? Direction.DESC
                        : Direction.ASC
                      : Direction.DESC
                  }
                  onClick={() => onSort(DiscussionThreadOrder.THREAD_TITLE)}
                />
              </span>
            </th>
            <th>Author</th>
            <th>Active Users</th>
            <th>
              <span className="SRC-split">
                <span>Replies</span>
                <SortIcon
                  role="button"
                  aria-label="Sort by Replies"
                  active={sort === DiscussionThreadOrder.NUMBER_OF_REPLIES}
                  direction={
                    sort === 'NUMBER_OF_REPLIES'
                      ? isAscending === false
                        ? Direction.DESC
                        : Direction.ASC
                      : Direction.DESC
                  }
                  onClick={() =>
                    onSort(DiscussionThreadOrder.NUMBER_OF_REPLIES)
                  }
                />
              </span>
            </th>
            <th>
              <span className="SRC-split">
                <span>Views</span>
                <SortIcon
                  role="button"
                  aria-label="Sort by Views"
                  active={sort === DiscussionThreadOrder.NUMBER_OF_VIEWS}
                  direction={
                    sort === 'NUMBER_OF_VIEWS'
                      ? isAscending === false
                        ? Direction.DESC
                        : Direction.ASC
                      : Direction.DESC
                  }
                  onClick={() => onSort(DiscussionThreadOrder.NUMBER_OF_VIEWS)}
                />
              </span>
            </th>
            <th>
              <span className="SRC-split">
                <span>Activity</span>
                <SortIcon
                  role="button"
                  aria-label="Sort by Last Activity"
                  active={
                    sort === DiscussionThreadOrder.PINNED_AND_LAST_ACTIVITY
                  }
                  direction={
                    sort === 'PINNED_AND_LAST_ACTIVITY'
                      ? isAscending === false
                        ? Direction.DESC
                        : Direction.ASC
                      : Direction.DESC
                  }
                  onClick={() =>
                    onSort(DiscussionThreadOrder.PINNED_AND_LAST_ACTIVITY)
                  }
                />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {threads.map(item => {
            return (
              <tr key={item.id}>
                <td>
                  <a href={getUrl(item.id, item.projectId)}>
                    {item.isPinned ? (
                      <IconSvg options={{ icon: 'pushpin' }} />
                    ) : (
                      <></>
                    )}
                    {item.title}
                  </a>
                </td>
                <td>
                  <UserCard size={SMALL_USER_CARD} ownerId={item.createdBy} />
                </td>
                <td>
                  {item.activeAuthors.map(user => (
                    <div key={user} className="avatarContainer">
                      <UserCard
                        showCardOnHover={true}
                        className="ActiveUsers"
                        size={AVATAR}
                        avatarSize={'MEDIUM'}
                        ownerId={user}
                      />
                    </div>
                  ))}
                </td>
                <td>{item.numberOfReplies}</td>
                <td>{item.numberOfViews}</td>
                <td>{moment(item.lastActivity).format('L')}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
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
