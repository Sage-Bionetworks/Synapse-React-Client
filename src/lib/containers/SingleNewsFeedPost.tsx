import React, { useState } from 'react' // importing FunctionComponent
import RssFeed from './RssFeed'

export type SingleNewsFeedPostProps = {
  feedUrl: string 
}

export default function SingleNewsFeedPost(props: SingleNewsFeedPostProps) {
  const [modifiedFeedUrl, setModifiedFeedUrl] = useState()
  const {feedUrl} = props
  let updatedModifiedFeedUrl = feedUrl
  const urlParams = new URLSearchParams(window.location.search)
  if (urlParams) {
    urlParams.forEach((value, key) => {
      updatedModifiedFeedUrl = `${updatedModifiedFeedUrl}&${key}=${value}`
    })
  }
  if (updatedModifiedFeedUrl && modifiedFeedUrl !== updatedModifiedFeedUrl)
    setModifiedFeedUrl(updatedModifiedFeedUrl)
  return (
      <>
        {modifiedFeedUrl && (
          <RssFeed
            key={modifiedFeedUrl}
            url={modifiedFeedUrl}
            defaultItemsToShow={1}
            showMoreElements={false}
          />
        )}
      </>
  )
}
