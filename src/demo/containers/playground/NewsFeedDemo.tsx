import * as React from 'react'
import NewsFeedMenu from '../../../lib/containers/NewsFeedMenu'

export const NewsFeedDemo:React.SFC = () => {
  return (
    <NewsFeedMenu
      menuConfig={[
        {
          feedName:'Data Releases',
          feedDescription:'The AMP-AD Knowledge Portal releases new Alzheimer\'s disease data twice annually, in May and November. Data releases may include new data, analyses, and results; as well as changes and updates to previously released data.',
          feedUrl:'https://portalnewsstg.wpengine.com/?feed=rss2&cat=4',
          defaultItemsToShow:3,
        },
        {
          feedName:'Updates',
          feedDescription:'The AMP-AD Knowledge Portal reaches the broader scientific community through multiple channels that encourage open-science collaborations. News updates include videos, events, and presentations that highlight the community behind the data.',
          feedUrl:'https://portalnewsstg.wpengine.com/?feed=rss2&cat=3',
          defaultItemsToShow:3,
          twitterFeedUrl:'https://twitter.com/AMPADPortal?ref_src=twsrc%5Etfw'
        },
        {
          feedName:'Newsletter',
          feedDescription:'The AMP-AD Knowledge Portal sends a quarterly newsletter to interested members of the scientific community, delivering consolidated information and updates related to the Portal.',
          feedUrl:'https://portalnewsstg.wpengine.com/?feed=rss2&cat=5',
          defaultItemsToShow:3,
          mailChimpListName:'AMP-AD quarterly newsletter',
          mailChimpUrl:'https://sagebase.us7.list-manage.com/subscribe/post?u=b146de537186191a9d2110f3a&amp;id=96b614587a'
        },
      ]}
    />
  )
}


