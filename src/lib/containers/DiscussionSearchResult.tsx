import React, { useState, useEffect } from 'react'
import { getReply, getReplyMessageUrl, getThreadMessageUrl, getThread, getUserProfileById } from '../utils/SynapseClient'
import { useSynapseContext } from '../utils/SynapseContext'
import { UserProfile } from '../utils/synapseTypes'
import { DiscussionReplyBundle, DiscussionThreadBundle } from '../utils/synapseTypes/DiscussionBundle'
import moment from 'moment'
import ReplyIcon from '../assets/icons/reply.svg'
import ThreadIcon from '../assets/icons/thread.svg'
import Typography from '../utils/typography/Typography'
import { Col, Row } from 'react-bootstrap'
import UserCard from './UserCard'
import { SMALL_USER_CARD } from '../utils/SynapseConstants'

export const getMessage = async (url: string): Promise<any> => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Accept: '*/*',
            'Access-Control-Request-Headers': 'authorization',
            'Content-Type': 'text/plain; charset=utf-8'
        }
    })
    return response.text()
}

export type DiscussionSearchResultProps = {
    threadId: string,
    replyId?: string,
}

const DiscussionSearchResult = (props: DiscussionSearchResultProps) => {
    const { threadId, replyId } = props
    const { accessToken } = useSynapseContext()
    const [threadBundle, setThreadBundle] = useState<DiscussionThreadBundle>()
    const [messageUrl, setMessageUrl] = useState<string>('')
    const [replyBundle, setReplyBundle] = useState<DiscussionReplyBundle>()
    const [replyAuthor, setReplyAuthor] = useState<UserProfile>()

    const getThreadOrReply = async () => {
        let someUrl
        const thread = await getThread(threadId, accessToken)
        if (replyId) {
            const reply = await getReply(replyId, accessToken)
            someUrl = await getReplyMessageUrl(reply.messageKey, accessToken)
            setReplyAuthor(await getUserProfileById(accessToken, reply.createdBy))
            setReplyBundle(reply)
        } else {
            setReplyAuthor(await getUserProfileById(accessToken, thread.createdBy))
            someUrl = await getThreadMessageUrl(thread.messageKey, accessToken)
        }
        setMessageUrl(await getMessage(someUrl.messageUrl))
        setThreadBundle(thread)
    }

    useEffect(() => {
        getThreadOrReply()
    }, [])

    const getUrl = (threadId: string, replyId: string, projectId: string) => {
        return `https://synapse.org/#!Synapse:${projectId}/discussion/threadId=${threadId}&replyId=${replyId}`
    }

    return (
        <div className='search-result-container'>
            <Row>
                <Col xs={1}>
                    <img src={replyId ? ReplyIcon : ThreadIcon} alt={replyId ? 'reply-icon' : 'thread-icon'} className='search-result-icon' />
                </Col>
                <Col xs={11}>
                    <Typography variant='headline3'>
                        <a className='link' href={getUrl(threadBundle?.id!, replyBundle?.id!, threadBundle?.projectId!)}>{threadBundle?.title}</a>
                    </Typography>
                    <div className='truncated'>
                        <Typography variant='body1'>
                            {messageUrl}
                        </Typography>
                    </div>
                    <div className='search-result-footer'>
                        {replyId ? 'Reply' : 'Thread'} by {<UserCard size={SMALL_USER_CARD} ownerId={replyAuthor?.ownerId!} />} {moment(replyBundle?.createdOn).format('l LT')}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default DiscussionSearchResult