import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { forumSearch, getEntity } from '../utils/SynapseClient'
import { DiscussionSearchResponse, Match } from '../utils/synapseTypes/DiscussionSearch'
import { useSynapseContext } from '../utils/SynapseContext'
import DiscussionReply from './DiscussionSearchResult'
import { SynapseSpinner } from './LoadingScreen'
import { Entity } from '../utils/synapseTypes'
import Typography from '../utils/typography/Typography'
import NoSearchResults from '../assets/icons/NoSearchResults'

export type ForumSearchProps = {
    forumId: string,
    projectId?: string,
}

const ForumSearch = (props: ForumSearchProps) => {
    const { accessToken } = useSynapseContext()
    const [isLoading, setIsLoading] = useState(false)
    const [searchInput, setSearchInput] = useState<string>('')
    const [searchResult, setSearchResult] = useState<DiscussionSearchResponse>()
    const [matchList, setMatchList] = useState<Match[]>()
    const [entity, setEntity] = useState<Entity | undefined>()
    const [noSearchResult, setNoSearchResult] = useState(false)

    const onSearch = async () => {
        setSearchResult(undefined)
        setIsLoading(true)
        setNoSearchResult(false)
        const searchResponse = await forumSearch(
            {
                searchString: searchInput,
                nextPageToken: searchResult?.nextPageToken ?? undefined
            },
            props.forumId,
            accessToken)
        if (searchResponse.matches.length == 0) {
            setNoSearchResult(true)
        }
        setSearchResult(searchResponse)
        setMatchList(searchResponse.matches)
        setIsLoading(false)
    }

    useEffect(() => {
        const fetchEntity = async () => {
            if (props.projectId) {
                const entity = await getEntity(accessToken, props.projectId)
                setEntity(entity)
            }
        }
        fetchEntity()
    }, [])

    const NoSearchResultComponent = () => {
        return (
            <div className='text-center'>
                {NoSearchResults}
                <Typography variant='body1'>No results with this query</Typography>
                <Typography variant='body2'>Search the full text of posts, replies, and titles</Typography>
            </div>
        )
    }

    const onLoadMore = async () => {
        const searchResponse = await forumSearch(
            {
                searchString: searchInput,
                nextPageToken: searchResult?.nextPageToken
            },
            props.forumId,
            accessToken)
        setSearchResult(searchResponse)
        if (matchList) {
            setMatchList([...matchList, ...searchResponse.matches])
        }
    }

    return (
        <div className="bootstrap-4-backport ForumSearch">
            <div>
                <FontAwesomeIcon
                    size={'sm'}
                    icon={faSearch}
                    className="SearchIcon"
                />
                <input
                    role='textbox'
                    type='search'
                    className={`SearchBar  ${searchResult ? 'SearchBarResult' : ''}`}
                    placeholder='Search discussions'
                    value={searchInput}
                    onChange={event => {
                        setSearchInput(event.target.value)
                    }}
                    onKeyDown={(event: any) => {
                        if (event.key === 'Enter') {
                            onSearch()
                        }
                    }}
                />
                {searchInput && (
                    <FontAwesomeIcon
                        size={'sm'}
                        icon={faTimes}
                        role="button"
                        title="Clear Search"
                        className="ClearSearchIcon"
                        onClick={() => {
                            setSearchInput('')
                        }}
                    />
                )}
            </div>
            {
                noSearchResult && <NoSearchResultComponent />
            }
            {isLoading ?
                <div style={{ textAlign: 'center' }}>
                    <SynapseSpinner size={40} />
                </div> :
                matchList &&
                <>
                    {props.projectId && (
                        <Typography variant='body2'>Results for '{searchInput}' in {entity?.name}</Typography>
                    )}
                    {matchList.map(entity =>
                        <div key={`${entity.forumId}-${entity.threadId}-${entity.replyId}`}>
                            <DiscussionReply threadId={entity.threadId} replyId={entity.replyId} />
                        </div>
                    )}
                </>
            }
            {searchResult?.nextPageToken && <button onClick={onLoadMore}>Load more</button>}
        </div>
    )
}

export default ForumSearch