import * as React from 'react'
import RssFeedCards from '../../../lib/containers/RssFeedCards'

export const NewsFeedDemo:React.SFC = () => {
  // in the portal, search params should be filled in based on URL query parameters.
  return (
    <RssFeedCards
      url='https://news.adknowledgeportal.org'
      itemsToShow={3}
      allowCategories={['Data Release', 'News', 'Webinar','rosMAP']}
      tag='rosMAP' // optional
      mailChimpListName='AMP-AD quarterly newsletter' // optional
      mailChimpUrl='https://sagebase.us7.list-manage.com/subscribe/post?u=b146de537186191a9d2110f3a&amp;id=96b614587a' // optional
    />
  )
}


