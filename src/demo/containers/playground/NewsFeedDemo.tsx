import * as React from 'react'
import RssFeed from '../../../lib/containers/RssFeed'

export const NewsFeedDemo:React.SFC = () => {
  return (
    <div className="container">
      {/* with details tag */}
      <RssFeed
        url={'https://99u.adobe.com/feed/'}
      />
    </div>
  )
}
