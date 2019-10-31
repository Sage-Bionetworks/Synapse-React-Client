import * as React from 'react'
import UserCard from '../../../lib/containers/UserCard'
import { SynapseConstants } from '../../../lib'
import MarkdownSynapse from '../../../lib/containers/MarkdownSynapse'

export default class UserBadgeSmallDemo extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  public render() {
    const profiles = [
      '3376985',
      '1131050',
      '273960',
      '3346401',
      '3374422',
      '273950',
      '273950',
    ]
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <h3>User Card Small </h3>
            <p> sans photo- </p>
            <UserCard
              ownerId={'273950'}
              size={SynapseConstants.SMALL_USER_CARD}
            />
            <p> without text </p>
            <UserCard
              ownerId={'3374422'}
              hideText={true}
              size={SynapseConstants.SMALL_USER_CARD}
            />
            <hr />
            <p> with custom link- </p>
            <UserCard
              ownerId={'273950'}
              size={SynapseConstants.SMALL_USER_CARD}
              link={'https://google.com'}
            />
            <UserCard
              ownerId={'3374422'}
              hideText={true}
              size={SynapseConstants.SMALL_USER_CARD}
              link={'https://google.com'}
            />
            <hr />
            <p> without tooltip </p>
            <div className="SRC-centerContent">
              <UserCard
                ownerId={'3374422'}
                hideTooltip={true}
                size={SynapseConstants.SMALL_USER_CARD}
              />
              <UserCard
                ownerId={'3346401'}
                hideTooltip={true}
                size={SynapseConstants.SMALL_USER_CARD}
              />
            </div>
            <hr />
            <p> with photo- </p>
            <UserCard
              ownerId={'3346401'}
              size={SynapseConstants.SMALL_USER_CARD}
            />
            <UserCard
              ownerId={'1131050'}
              size={SynapseConstants.SMALL_USER_CARD}
            />
            <p> without text- </p>
            <UserCard
              ownerId={'273960'}
              hideText={true}
              size={SynapseConstants.SMALL_USER_CARD}
            />
            <hr />
            <p>inside of markdown-</p>
            <MarkdownSynapse wikiId={'588827'} ownerId={'syn18380882'} />
          </div>
          <div className="row">
            <h3> User Card Large </h3>
            <p> with photo- </p>
            <UserCard
              ownerId={'1131050'}
              // tslint:disable-next-line:jsx-no-lambda
              size={SynapseConstants.LARGE_USER_CARD}
              menuActions={[
                {
                  field: 'Projects',
                  callback: userProfile => {
                    console.log(userProfile)
                  },
                },
                {
                  field: 'Profile',
                  callback: userProfile => {
                    console.log(userProfile)
                  },
                },
                {
                  field: 'SEPERATOR',
                },
                {
                  field: 'Teams',
                  callback: userProfile => {
                    console.log(userProfile)
                  },
                },
              ]}
            />
            <br />
            <p> sans photo- </p>
            <br />
            <UserCard
              ownerId={'3374422'}
              size={SynapseConstants.LARGE_USER_CARD}
            />
            <br />
            <br />
            <UserCard
              ownerId={'345424'}
              size={SynapseConstants.LARGE_USER_CARD}
              menuActions={[
                {
                  field: 'Projects',
                  callback: userProfile => {
                    console.log(userProfile)
                  },
                },
                {
                  field: 'Profile',
                  callback: userProfile => {
                    console.log(userProfile)
                  },
                },
                {
                  field: 'SEPERATOR',
                },
                {
                  field: 'Teams',
                  callback: userProfile => {
                    console.log(userProfile)
                  },
                },
              ]}
            />
          </div>
        </div>
        <h3> User Card Medium Wrapping Example </h3>
        <div className="SRC-card-grid-row">
          {[1, 2, 3, 4, 5].map((_el, index) => {
            return (
              <div className="SRC-grid-item" key={index}>
                <UserCard
                  hideEmail={index % 2 === 0}
                  menuActions={[
                    {
                      field: 'Projects',
                      callback: userProfile => {
                        console.log(userProfile)
                      },
                    },
                    {
                      field: 'Profile',
                      callback: userProfile => {
                        console.log(userProfile)
                      },
                    },
                    {
                      field: 'SEPERATOR',
                    },
                    {
                      field: 'Teams',
                      callback: userProfile => {
                        console.log(userProfile)
                      },
                    },
                  ]}
                  ownerId={profiles[index]}
                  size={SynapseConstants.MEDIUM_USER_CARD}
                  link={index % 2 ? 'https://google.com' : ''}
                />
              </div>
            )
          })}
        </div>
      </React.Fragment>
    )
  }
}
