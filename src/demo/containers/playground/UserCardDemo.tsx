import * as React from 'react'
import UserCard from 'src/lib/containers/UserCard'
import { SynapseConstants } from 'src/lib'
import MarkdownSynapse from 'src/lib/containers/MarkdownSynapse'

export default class UserBadgeSmallDemo extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  public render() {
    return (
      <div className="container">
        <div className="row">
          <h3>User Card Small </h3>
           <p> sans photo- </p>
          <UserCard
            ownerId={'3374422'}
            mask={63}
            size={SynapseConstants.SMALL_USER_CARD}
          />
          <UserCard
            ownerId={'3374422'}
            mask={63}
            size={SynapseConstants.SMALL_USER_CARD}
          />
          <br/>
          <p> with photo- </p>
          <UserCard
            ownerId={'1131050'}
            mask={63}
            size={SynapseConstants.SMALL_USER_CARD}
          />
          <UserCard
            ownerId={'273960'}
            mask={63}
            size={SynapseConstants.SMALL_USER_CARD}
          />
          <br/>
          <p>inside of markdown-</p>
            <MarkdownSynapse
              wikiId={'588827'}
              ownerId={'syn18380882'}
            />
        </div>
        <div className="row">
          <h3> User Card Medium </h3>
          <p> with photo- </p>
          <UserCard
            ownerId={'1131050'}
            mask={63}
            size={SynapseConstants.MEDIUM_USER_CARD}
          />
          <UserCard
            ownerId={'3374422'}
            mask={63}
            size={SynapseConstants.MEDIUM_USER_CARD}
          />
        </div>
      </div>
    )
  }
}
