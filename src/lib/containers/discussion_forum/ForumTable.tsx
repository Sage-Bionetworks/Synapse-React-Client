import moment from 'moment'
import React, { useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import SortIcon from '../../assets/icons/Sort'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import { useGetForumInfinite } from '../../utils/hooks/SynapseAPI/forum/useForum'
import { useSubscription } from '../../utils/hooks/SynapseAPI/subscription/useSubscription'
import { AVATAR, SMALL_USER_CARD } from '../../utils/SynapseConstants'
import { Direction } from '../../utils/synapseTypes'
import {
  DiscussionFilter,
  DiscussionThreadOrder,
} from '../../utils/synapseTypes/DiscussionBundle'
import { SubscriptionObjectType } from '../../utils/synapseTypes/Subscription'
import IconSvg from '../IconSvg'
import { displayToast } from '../ToastMessage'
import UserCard from '../UserCard'
import { ForumThreadEditor } from './ForumThreadEditor'

export type ForumTableProps = {
  forumId: string
  limit: number
  onClickLink: () => void
  filter?: DiscussionFilter
}

export const ForumTable: React.FC<ForumTableProps> = ({
  forumId,
  limit,
  filter,
  onClickLink,
}) => {
  const [sort, setSort] = useState<DiscussionThreadOrder>(
    DiscussionThreadOrder.PINNED_AND_LAST_ACTIVITY,
  )
  const [isAscending, setIsAscending] = useState(false)
  const [showThreadModal, setShowThreadModal] = useState(false)
  const { subscription, isLoading, toggleSubscribed } = useSubscription(
    forumId,
    SubscriptionObjectType.FORUM,
  )

  function handleFollowBtn() {
    try {
      toggleSubscribed()
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    }
  }

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
          variant={subscription ? 'outline-primary' : 'primary'}
          onClick={() => handleFollowBtn()}
          disabled={isLoading}
        >
          {subscription ? 'Unfollow' : 'Follow'}
        </Button>
        <Button variant="primary" onClick={() => setShowThreadModal(true)}>
          New Thread
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
                  <a onClick={() => onClickLink()}>
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
      {hasNextPage && (
        <Button
          variant="outline-primary"
          onClick={() => {
            fetchNextPage()
          }}
        >
          Show more results
        </Button>
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
            isReply={false}
            id={forumId}
            onClose={() => setShowThreadModal(false)}
          />
        </Modal.Body>
      </Modal>
    </div>
  )
}
