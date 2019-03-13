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
      <React.Fragment>
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
              size={SynapseConstants.MEDIUM_USER_CARD}
            />
            <UserCard
              ownerId={'3374422'}
              size={SynapseConstants.MEDIUM_USER_CARD}
            />
          </div>
        </div>
        <h3> User Card Medium Wrapping Example </h3>
        <div className="SRC-cardContainer">
          <div className="SRC-card-grid-row">
            {
              [1, 2, 3, 4, 5, 6].map(
                (_el, index) => {
                  return (
                    <div className="SRC-grid-item" key={index}>
                      <UserCard
                        ownerId={'1131050'}
                        mask={63}
                        size={SynapseConstants.MEDIUM_USER_CARD}
                      />
                    </div>
                  )
                }
              )
            }
          </div>
        </div>
      </React.Fragment>
    )
  }
}
