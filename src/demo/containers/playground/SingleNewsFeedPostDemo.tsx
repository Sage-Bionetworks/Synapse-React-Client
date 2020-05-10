import * as React from 'react'
import SingleNewsFeedPost from '../../../lib/containers/SingleNewsFeedPost'

export const SingleNewsFeedPostDemo:React.SFC = () => {
  // in the portal, search params will be filled in based on URL query parameters.
  // in the demo app, we'll send you to a target post by supplying a tag in the url params 
  //  (but it would recognize any param supported by WordPress rss2 feeds)
  // For example: /Playground/SingleNewsFeedPostDemo?tag=centenarians
  return (
    <SingleNewsFeedPost
      feedUrl='https://portalnews.wpengine.com/?feed=rss2'
    />
  )
}

