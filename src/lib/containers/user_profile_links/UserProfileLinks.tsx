import React, { useState } from 'react'
import IconSvg from '../IconSvg'
import UserProjects from './UserProjects'

export enum UserProfileLinksTabs {
  PROJECTS = "Projects",
  TEAMS = "Teams",
  CHALLENGES = "Challenges",
}

type UserProfileLinksProps = {
  userId: string
}

function UserProfileLinks({
  userId,
}: UserProfileLinksProps) {
  const [currentTab, setCurrentTab] = useState<UserProfileLinksTabs>(UserProfileLinksTabs.PROJECTS)

  function getIconName(
    currentTab: UserProfileLinksTabs,
  ): string {
    switch (currentTab) {
      case UserProfileLinksTabs.PROJECTS:
        return 'dashboard'
      case UserProfileLinksTabs.TEAMS:
        return 'peopleOutlined'
      case UserProfileLinksTabs.CHALLENGES:
        return 'challengesOutlined'
    }
  }
  return (
      <div className="UserProfileLinks">
        <div className="Tabs">
          {Object.keys(UserProfileLinksTabs).map((keyName: string) => {
            return (
              <div
                className="Tab"
                role="tab"
                key={keyName}
                onClick={e => {
                  e.stopPropagation()
                  setCurrentTab(UserProfileLinksTabs[keyName])
                }}
                aria-selected={UserProfileLinksTabs[keyName] === currentTab}
              >
                <IconSvg options={{ icon: getIconName(UserProfileLinksTabs[keyName]) }} /> {UserProfileLinksTabs[keyName]}
              </div>
            )
          })}
        </div>
        <div className="TabContent">
          {currentTab === UserProfileLinksTabs.PROJECTS && (
            <>
              <UserProjects userId={userId} />
            </>)}
          {currentTab === UserProfileLinksTabs.TEAMS && (
            <>
              <p>User teams go here</p>
            </>)}
          {currentTab === UserProfileLinksTabs.CHALLENGES && (
            <>
              <p>User challenges go here</p>
            </>)}
        </div>
      </div>
  )
}

export default UserProfileLinks
