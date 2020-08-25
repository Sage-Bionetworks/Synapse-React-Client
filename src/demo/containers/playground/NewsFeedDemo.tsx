import * as React from 'react'
import RssFeedCards from '../../../lib/containers/RssFeedCards'

export const NewsFeedDemo:React.SFC = () => {
  // in the portal, search params should be filled in based on URL query parameters.
  return (
    <RssFeedCards
      url='https://portalnewsdev.wpengine.com/?feed=rss2'
      defaultItemsToShow={3}
      showMoreElements={true}
      mailChimpListName='AMP-AD quarterly newsletter'
      mailChimpUrl='https://sagebase.us7.list-manage.com/subscribe/post?u=b146de537186191a9d2110f3a&amp;id=96b614587a'
    />
  )
}


