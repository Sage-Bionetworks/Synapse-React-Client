import * as React from 'react'
import RssFeed from '../../../lib/containers/RssFeed'

export const NewsFeedDemo:React.SFC = () => {
  return (
    <div className="container">
      <RssFeed
        url={'https://www.houstonzoo.org/feed'}
      />
    </div>
  )
}
