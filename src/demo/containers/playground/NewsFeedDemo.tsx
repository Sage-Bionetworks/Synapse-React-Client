import * as React from 'react'
import RssFeed from '../../../lib/containers/RssFeed'

export const NewsFeedDemo:React.SFC = () => {
  return (
    <div className="container">
      <RssFeed
        url={'https://jaystestblog.home.blog/category/whatsnew/feed/'}
      />
    </div>
  )
}
