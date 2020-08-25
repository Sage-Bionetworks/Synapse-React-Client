import React from 'react'
import { Data } from './Resources'
import MarkdownSynapse from '../../../containers/MarkdownSynapse'
import ExpandableContent from '../ExpandableContent'

export type ResourcesMobileProps = {
  data: Data
  token?: string
}

export default function ResourcesMobile({ data, token }: ResourcesMobileProps) {
  return (
    <div className="Resources_Mobile">
      {data.map(({ name, ownerId, wikiId }) => {
        let title = <> {name} </>
        let markdown = (
          <MarkdownSynapse token={token} ownerId={ownerId} wikiId={wikiId} />
        )
        return <ExpandableContent key={name} title={title} content={markdown} />
      })}
    </div>
  )
}
