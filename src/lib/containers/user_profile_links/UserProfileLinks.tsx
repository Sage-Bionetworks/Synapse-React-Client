import React, { useState } from 'react'
import { useGetUserProfile } from '../../utils/hooks/SynapseAPI/useUserBundle'
import SRCTypography from '../../utils/typography/SRCTypography'
import IconSvg from '../IconSvg'
import UserChallenges from './UserChallenges'
import UserProjects from './UserProjects'
import UserTeams from './UserTeams'

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
  const { data: userProfile } = useGetUserProfile(userId)

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
      <SRCTypography variant="headline2" className="title">{userProfile?.userName}&apos;s Items</SRCTypography>
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
              <SRCTypography variant="buttonLink">
                <IconSvg options={{ icon: getIconName(UserProfileLinksTabs[keyName]) }} /> {UserProfileLinksTabs[keyName]}
              </SRCTypography>
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
            <UserTeams userId={userId} />
          </>)}
        {currentTab === UserProfileLinksTabs.CHALLENGES && (
          <>
            <UserChallenges userId={userId} />
          </>)}
      </div>
    </div>
  )
}

export default UserProfileLinks
