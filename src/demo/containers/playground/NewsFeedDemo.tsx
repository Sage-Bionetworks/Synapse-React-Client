import TableFeedCards from 'lib/containers/TableFeedCards'
import * as React from 'react'
import { Container } from 'react-bootstrap'
import RssFeedCards from '../../../lib/containers/RssFeedCards'

export type NewsFeedDemoProps = {
  token?: string
}

export const NewsFeedDemo: React.FunctionComponent<NewsFeedDemoProps> = ({
  token,
}) => {
  // in the portal, search params should be filled in based on URL query parameters.
  return (
    <Container>
      <h3>RSSFeedCards</h3>
      <RssFeedCards
        url='https://news.adknowledgeportal.org'
        itemsToShow={3}
        allowCategories={['Data Release', 'News', 'Webinar','rosMAP']} // optional
        mailChimpListName='AMP-AD quarterly newsletter' // optional
        mailChimpUrl='https://sagebase.us7.list-manage.com/subscribe/post?u=b146de537186191a9d2110f3a&amp;id=96b614587a' // optional
        lockedFacet={{value: 'MSBB'}} // optional
        // viewAllNewsButtonText='VIEW ALL AD NEWS' // optional        
      />
      <h3>TableFeedCards</h3>
      <TableFeedCards
        tableEntityId='syn23519444'
        token={token}
      />
    </Container>
  )
}


