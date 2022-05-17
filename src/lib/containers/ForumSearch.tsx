import React, { useEffect, useState } from 'react'
import { forumSearch, getEntity } from '../utils/SynapseClient'
import {
  DiscussionSearchResponse,
  Match,
} from '../utils/synapseTypes/DiscussionSearch'
import { useSynapseContext } from '../utils/SynapseContext'
import DiscussionReply from './DiscussionSearchResult'
import { Entity } from '../utils/synapseTypes'
import Typography from '../utils/typography/Typography'
import NoSearchResults from '../assets/icons/NoSearchResults'
import { Button } from 'react-bootstrap'
import IconSvg from './IconSvg'
import { displayToast } from './ToastMessage'

export type ForumSearchProps = {
  forumId: string
  projectId?: string
  onSearchResultsVisible?: (visible: boolean) => void
}

const ForumSearch = (props: ForumSearchProps) => {
  const { onSearchResultsVisible } = props
  const { accessToken } = useSynapseContext()
  const [searchInput, setSearchInput] = useState<string>('')
  const [searchResult, setSearchResult] = useState<DiscussionSearchResponse>()
  const [matchList, setMatchList] = useState<Match[]>()
  const [entity, setEntity] = useState<Entity | undefined>()
  const [noSearchResult, setNoSearchResult] = useState(false)

  const onSearch = async () => {
    if (onSearchResultsVisible) {
      onSearchResultsVisible(true)
    }
    try {
      setSearchResult(undefined)
      setNoSearchResult(false)
      const searchResponse = await forumSearch(
        {
          searchString: searchInput,
          nextPageToken: searchResult?.nextPageToken ?? undefined,
        },
        props.forumId,
        accessToken,
      )
      if (searchResponse.matches.length == 0) {
        setNoSearchResult(true)
      }
      setSearchResult(searchResponse)
      setMatchList(searchResponse.matches)
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    }
  }

  const onResetSearch = () => {
    if (onSearchResultsVisible) {
      onSearchResultsVisible(false)
    }
    setSearchInput('')
    setSearchResult(undefined)
    setNoSearchResult(false)
    setMatchList(undefined)
  }

  useEffect(() => {
    const fetchEntity = async () => {
      if (props.projectId) {
        const entity = await getEntity(accessToken, props.projectId)
        setEntity(entity)
      }
    }
    fetchEntity()
  }, [accessToken, props.projectId])

  const NoSearchResultComponent = () => {
    return (
      <div className="text-center">
        {NoSearchResults}
        <Typography variant="body1">No results with this query</Typography>
        <Typography variant="body2">
          Search the full text of posts, replies, and titles
        </Typography>
      </div>
    )
  }

  const onLoadMore = async () => {
    const searchResponse = await forumSearch(
      {
        searchString: searchInput,
        nextPageToken: searchResult?.nextPageToken,
      },
      props.forumId,
      accessToken,
    )
    setSearchResult(searchResponse)
    if (matchList) {
      setMatchList([...matchList, ...searchResponse.matches])
    }
  }

  return (
    <div className="bootstrap-4-backport ForumSearch">
      <div>
        <span className="SearchIcon">
          <IconSvg options={{ icon: 'searchTwoTone' }} />
        </span>
        <input
          role="textbox"
          type="search"
          className={`SearchBar  ${searchResult ? 'SearchBarResult' : ''}`}
          placeholder="Search discussions"
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
          <button
            className="ClearSearchIcon"
            onClick={() => {
              onResetSearch()
            }}
          >
            <IconSvg options={{ icon: 'clear' }} />
          </button>
        )}
      </div>
      {noSearchResult && (
        <>
          {props.projectId && (
            <Typography variant="body2" className="NoResultsText">
              No results for '{searchInput}' in {entity?.name}
            </Typography>
          )}
          <NoSearchResultComponent />
        </>
      )}
      {matchList && (
        <>
          {props.projectId && !noSearchResult && (
            <Typography variant="body2" className="ResultsText">
              Results for '{searchInput}' in {entity?.name}
            </Typography>
          )}
          {matchList.map(match => (
            <div key={`${match.forumId}-${match.threadId}-${match.replyId}`}>
              <DiscussionReply
                threadId={match.threadId}
                replyId={match.replyId}
              />
            </div>
          ))}
        </>
      )}
      {searchResult?.nextPageToken && (
        <div className="text-center">
          <Button variant="primary" onClick={onLoadMore}>
            Load more
          </Button>
        </div>
      )}
    </div>
  )
}

export default ForumSearch
