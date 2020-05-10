import React from 'react' // importing FunctionComponent
import RssFeed from './RssFeed'

export type SingleNewsFeedPostProps = {
  feedUrl: string 
}

export default function SingleNewsFeedPost(props: SingleNewsFeedPostProps) {
  const {feedUrl} = props
  let updatedModifiedFeedUrl = feedUrl
  const urlParams = new URLSearchParams(window.location.search)
  if (urlParams) {
    urlParams.forEach((value, key) => {
      updatedModifiedFeedUrl = `${updatedModifiedFeedUrl}&${key}=${value}`
    })
  }
  return (
      <>
        {updatedModifiedFeedUrl && (
          <RssFeed
            key={updatedModifiedFeedUrl}
            url={updatedModifiedFeedUrl}
            defaultItemsToShow={1}
            showMoreElements={false}
          />
        )}
      </>
  )
}
