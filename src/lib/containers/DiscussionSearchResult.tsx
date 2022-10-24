import React, { useState, useEffect } from 'react'
import {
  getReply,
  getReplyMessageUrl,
  getThreadMessageUrl,
  getThread,
  getUserProfileById,
} from '../utils/SynapseClient'
import { useSynapseContext } from '../utils/SynapseContext'
import { UserProfile } from '../utils/synapseTypes'
import {
  DiscussionReplyBundle,
  DiscussionThreadBundle,
} from '../utils/synapseTypes/DiscussionBundle'
import moment from 'moment'
import Typography from '../utils/typography/Typography'
import { Col, Row } from 'react-bootstrap'
import UserCard from './UserCard'
import { SMALL_USER_CARD } from '../utils/SynapseConstants'
import IconSvg from './IconSvg'
import { Skeleton } from '@material-ui/lab'
import { SkeletonTable } from '../assets/skeletons/SkeletonTable'
import { PRODUCTION_ENDPOINT_CONFIG } from '../utils/functions/getEndpoint'

export const getMessage = async (url: string): Promise<string> => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: '*/*',
      'Access-Control-Request-Headers': 'authorization',
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
  return response.text()
}

export type DiscussionSearchResultProps = {
  threadId: string
  replyId?: string
}

const DiscussionSearchResult = (props: DiscussionSearchResultProps) => {
  const { threadId, replyId } = props
  const { accessToken } = useSynapseContext()
  const [threadBundle, setThreadBundle] = useState<DiscussionThreadBundle>()
  const [messageUrl, setMessageUrl] = useState<string>('')
  const [replyBundle, setReplyBundle] = useState<DiscussionReplyBundle>()
  const [replyAuthor, setReplyAuthor] = useState<UserProfile>()
  const [isLoading, setIsLoading] = useState(false)

  const getThreadOrReply = async () => {
    let newMessageUrl
    const thread = await getThread(threadId, accessToken)
    setIsLoading(true)
    if (replyId) {
      const reply = await getReply(replyId, accessToken)
      newMessageUrl = await getReplyMessageUrl(reply.messageKey, accessToken)
      setReplyAuthor(await getUserProfileById(accessToken, reply.createdBy))
      setReplyBundle(reply)
    } else {
      setReplyAuthor(await getUserProfileById(accessToken, thread.createdBy))
      newMessageUrl = await getThreadMessageUrl(thread.messageKey, accessToken)
    }
    setMessageUrl(await getMessage(newMessageUrl.messageUrl))
    setThreadBundle(thread)
    setIsLoading(false)
  }

  useEffect(() => {
    getThreadOrReply()
  }, [])

  const getUrl = (threadId: string, projectId: string, replyId?: string) => {
    let url = `${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${projectId}/discussion/threadId=${threadId}`
    if (replyId) {
      url += `&replyId=${replyId}`
    }
    return url
  }

  return (
    <div className="search-result-container">
      <Row>
        <Col xs={1}>
          {isLoading ? (
            <Skeleton variant="circle" width="40px" height="40px" />
          ) : replyId ? (
            <IconSvg options={{ icon: 'replyTwoTone' }} />
          ) : (
            <IconSvg options={{ icon: 'chatTwoTone' }} />
          )}
        </Col>
        <Col xs={11}>
          {isLoading ? (
            <SkeletonTable numCols={1} numRows={4} />
          ) : (
            <>
              <Typography variant="headline3">
                <a
                  className="link"
                  href={getUrl(
                    threadBundle?.id!,
                    threadBundle?.projectId!,
                    replyBundle?.id,
                  )}
                >
                  {threadBundle?.title}
                </a>
              </Typography>
              <div className="truncated">
                <Typography variant="body1">{messageUrl}</Typography>
              </div>
              <div className="search-result-footer">
                {replyId ? 'Reply' : 'Thread'} by{' '}
                {
                  <UserCard
                    size={SMALL_USER_CARD}
                    ownerId={replyAuthor?.ownerId!}
                  />
                }{' '}
                {moment(replyBundle?.createdOn).format('l LT')}
              </div>
            </>
          )}
        </Col>
      </Row>
    </div>
  )
}

export default DiscussionSearchResult
