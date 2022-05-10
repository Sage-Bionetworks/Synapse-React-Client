import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { forumSearch } from '../utils/SynapseClient'
import { DiscussionSearchResponse } from '../utils/synapseTypes/DiscussionSearch'
import { useSynapseContext } from '../utils/SynapseContext'
import DiscussionReply from './DiscussionSearchResult'
import { SynapseSpinner } from './LoadingScreen'

export type ForumSearchProps = {
    forumId: string
}

const ForumSearch = (props: ForumSearchProps) => {
    const { accessToken } = useSynapseContext()
    const [isLoading, setIsLoading] = useState(false)
    const [searchInput, setSearchInput] = useState<string>('')
    const [searchResult, setSearchResult] = useState<DiscussionSearchResponse>()

    const onSearch = async () => {
        setSearchResult(undefined)
        setIsLoading(true)
        const result = await forumSearch(
            {
                searchString: searchInput,
                nextPageToken: searchResult?.nextPageToken ?? undefined
            },
            props.forumId,
            accessToken)
        setSearchResult(result)
        setIsLoading(false)
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
            {isLoading ?
                <div style={{ textAlign: 'center' }}>
                    <SynapseSpinner size={40} />
                </div> :
                searchResult &&
                <>
                    {searchResult?.matches.map(entity =>
                        <div key={`${entity.forumId}-${entity.threadId}-${entity.replyId}`}>
                            <DiscussionReply threadId={entity.threadId} replyId={entity.replyId} />
                        </div>
                    )}
                </>
            }
        </div>
    )
}

export default ForumSearch