import * as React from 'react'
import UserCard from 'src/lib/containers/UserCard'
import { SynapseConstants } from 'src/lib'
import MarkdownSynapse from 'src/lib/containers/MarkdownSynapse'
import { UserProfile } from '../../../lib/utils/jsonResponses/UserProfile'

export default class UserBadgeSmallDemo extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  public render() {
    const goToGoole = (userProfile: UserProfile) => { window.location.href = 'https://google.com' }
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <h3>User Card Small </h3>
             <p> sans photo- </p>
            <UserCard
              ownerId={'3374422'}
              size={SynapseConstants.SMALL_USER_CARD}
              profileClickHandler={goToGoole}
            />
            <p> without text </p>
            <UserCard
              ownerId={'3374422'}
              hideText={true}
              size={SynapseConstants.SMALL_USER_CARD}
            />
            <hr/>
            <p> with photo- </p>
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
            <hr/>
            <p>inside of markdown-</p>
              <MarkdownSynapse
                wikiId={'588827'}
                ownerId={'syn18380882'}
              />
          </div>
          <div className="row">
            <h3> User Card Large </h3>
            <p> with photo- </p>
            <UserCard
              ownerId={'1131050'}
              // tslint:disable-next-line:jsx-no-lambda
              profileClickHandler={(userProfile) => { window.location.href = 'https://google.com' }}
              size={SynapseConstants.LARGE_USER_CARD}
              menuActions={[
                {
                  field: 'Projects',
                  callback: (userProfile) => { console.log(userProfile) }
                },
                {
                  field: 'Profile',
                  callback: (userProfile) => { console.log(userProfile) }
                },
                {
                  field: 'SEPERATOR',
                },
                {
                  field: 'Teams',
                  callback: (userProfile) => { console.log(userProfile) }
                }
              ]}
            />
            <br/>
            <p> sans photo- </p>
            <br/>
            <UserCard
              ownerId={'3374422'}
              // tslint:disable-next-line:jsx-no-lambda
              profileClickHandler={(userProfile) => { window.location.href = 'https://google.com' }}
              size={SynapseConstants.LARGE_USER_CARD}
            />
            <br/>
            <br/>
            <UserCard
              ownerId={'273960'}
              // tslint:disable-next-line:jsx-no-lambda
              profileClickHandler={(userProfile) => { window.location.href = 'https://google.com' }}
              size={SynapseConstants.LARGE_USER_CARD}
              menuActions={[
                {
                  field: 'Projects',
                  callback: (userProfile) => { console.log(userProfile) }
                },
                {
                  field: 'Profile',
                  callback: (userProfile) => { console.log(userProfile) }
                },
                {
                  field: 'SEPERATOR',
                },
                {
                  field: 'Teams',
                  callback: (userProfile) => { console.log(userProfile) }
                }
              ]}
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
                        menuActions={[
                          {
                            field: 'Projects',
                            callback: (userProfile) => { console.log(userProfile) }
                          },
                          {
                            field: 'Profile',
                            callback: (userProfile) => { console.log(userProfile) }
                          },
                          {
                            field: 'SEPERATOR',
                          },
                          {
                            field: 'Teams',
                            callback: (userProfile) => { console.log(userProfile) }
                          }
                        ]}
                        ownerId={'1131050'}
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
