import * as React from 'react'
import NewsFeedMenu from '../../../lib/containers/NewsFeedMenu'

export const NewsFeedDemo:React.SFC = () => {
  return (
    <NewsFeedMenu
      menuConfig={[
        {
          feedName:'Data Releases',
          feedUrl:'https://portalnewsstg.wpengine.com/?feed=rss2&cat=4',
          defaultItemsToShow:3,
        },
        {
          feedName:'Updates',
          feedUrl:'https://portalnewsstg.wpengine.com/?feed=rss2&cat=3',
          defaultItemsToShow:3,
          twitterFeedUrl:'https://twitter.com/AMPADPortal?ref_src=twsrc%5Etfw'
        },
        {
          feedName:'Newsletter',
          feedUrl:'https://portalnewsstg.wpengine.com/?feed=rss2&cat=5',
          defaultItemsToShow:3,
          mailChimpSignupText:'Sign up to receive the AD Knowledge Portal\'s quarterly newsletter',
          mailChimpUrl:'https://sagebase.us7.list-manage.com/subscribe/post?u=b146de537186191a9d2110f3a&amp;id=96b614587a'
        },
      ]}
    />
  )
}


