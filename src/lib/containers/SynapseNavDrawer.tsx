import { Drawer, List, ListItem } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import IconSvg from './IconSvg'
import SynapseIcon from '../assets/icons/SynapseIcon'
import ReactTooltip from 'react-tooltip'
import { SynapseClient } from '../utils'
import { UserProfile } from '../utils/synapseTypes'
import { useSynapseContext } from '../utils/SynapseContext'
import { Avatar } from './Avatar'

export type SynapseNavDrawerProps = {
  initIsOpen?: boolean
}

export enum NavItem {
  PROJECTS,
  FAVORITES,
  TEAMS,
  CHALLENGES,
  DOWNLOADS,
  SEARCH,
  PROFILE,
  HELP
}

/**
 * Displays the Synapse navigational drawer on the left side of the page.  Has links to various areas if logged in.
 */
export const SynapseNavDrawer: React.FunctionComponent<SynapseNavDrawerProps> = ({ initIsOpen = false }) => {
  const { accessToken } = useSynapseContext()
  const [isOpen, setOpen] = useState(initIsOpen)
  const [selectedItem, setSelectedItem] = useState<NavItem>()
  const [currentUserProfile, setUserProfile] = useState<UserProfile>()

  useEffect(() => {
    async function getUserProfile() {
      const userProfile = await SynapseClient.getUserProfile(accessToken)
      setUserProfile(userProfile)
    }
    if (accessToken) {
      getUserProfile()
    } else {
      setUserProfile(undefined)
    }
  }, [
    accessToken
  ])
  const handleDrawerOpen = (navItem?: NavItem) => {
    setOpen(true)
    setSelectedItem(navItem)
  }

  const handleDrawerClose = () => {
    setOpen(false)
    setSelectedItem(undefined)
  }

  return (
    <div className="SynapseNavDrawer">
      <Drawer variant="permanent" className='SynapseNavDrawerMenu' >
        <a href='#!Home:0' className='synapseIcon' rel="noopener noreferrer">
          <SynapseIcon />
        </a>
        <List>
          {currentUserProfile && <ListItem button key='projects' data-tip="Projects" data-for="projectLink" onClick={selectedItem == NavItem.PROJECTS ? handleDrawerClose : () => { handleDrawerOpen(NavItem.PROJECTS) }}>
            <ReactTooltip
              delayShow={300}
              place="right"
              type="dark"
              effect="solid"
              id="projectLink"
            />
            <IconSvg options={{ icon: 'dashboard' }} />
          </ListItem>}
          {currentUserProfile && <ListItem button key='favorites' data-tip="Favorites" data-for="favsLink" onClick={selectedItem == NavItem.FAVORITES ? handleDrawerClose : () => { handleDrawerOpen(NavItem.FAVORITES) }}>
            <ReactTooltip
              delayShow={300}
              place="right"
              type="dark"
              effect="solid"
              id="favsLink"
            />
            <a href={`#!Profile:${currentUserProfile.ownerId}/favorites`} rel="noopener noreferrer">
              <IconSvg options={{ icon: 'favOutlined' }} />
            </a>
          </ListItem>}
          {currentUserProfile && <ListItem button key='teams' data-tip="Teams" data-for="teamsLink" onClick={selectedItem == NavItem.TEAMS ? handleDrawerClose : () => { handleDrawerOpen(NavItem.TEAMS) }}>
            <ReactTooltip
              delayShow={300}
              place="right"
              type="dark"
              effect="solid"
              id="teamsLink"
            />
            <a href={`#!Profile:${currentUserProfile.ownerId}/teams`} rel="noopener noreferrer">
              <IconSvg options={{ icon: 'peopleOutlined' }} />
            </a>
          </ListItem>}
          {currentUserProfile && <ListItem button key='challenges' data-tip="Challenges" data-for="challengeLink" onClick={selectedItem == NavItem.TEAMS ? handleDrawerClose : () => { handleDrawerOpen(NavItem.TEAMS) }}>
            <ReactTooltip
              delayShow={300}
              place="right"
              type="dark"
              effect="solid"
              id="challengeLink"
            />
            <a href={`#!Profile:${currentUserProfile.ownerId}/challenges`} rel="noopener noreferrer">
              <IconSvg options={{ icon: 'challengesOutlined' }} />
            </a>
          </ListItem>}
          {currentUserProfile && <ListItem button key='download' data-tip="Download Cart" data-for="downloadLink" onClick={selectedItem == NavItem.TEAMS ? handleDrawerClose : () => { handleDrawerOpen(NavItem.TEAMS) }}>
            <ReactTooltip
              delayShow={300}
              place="right"
              type="dark"
              effect="solid"
              id="downloadLink"
            />
            <a href={`#!Profile:${currentUserProfile.ownerId}/downloads`} rel="noopener noreferrer">
              <IconSvg options={{ icon: 'downloadOutlined' }} />
            </a>
          </ListItem>}
          <ListItem button key='search' data-tip="Search" data-for="searchLink" onClick={selectedItem == NavItem.TEAMS ? handleDrawerClose : () => { handleDrawerOpen(NavItem.TEAMS) }}>
            <ReactTooltip
              delayShow={300}
              place="right"
              type="dark"
              effect="solid"
              id="searchLink"
            />
            <a href='#!Search:' rel="noopener noreferrer">
              <IconSvg options={{ icon: 'searchOutlined' }} />
            </a>
          </ListItem>
        </List>
        <div className="filler"/>
        <List>
          {currentUserProfile && <ListItem button key='profile' data-tip="Your Account" data-for="profileLink" onClick={selectedItem == NavItem.PROFILE ? handleDrawerClose : () => { handleDrawerOpen(NavItem.PROFILE) }}>
            <ReactTooltip
              delayShow={300}
              place="right"
              type="dark"
              effect="solid"
              id="profileLink"
            />
            <Avatar userProfile={currentUserProfile} avatarSize='SMALL' />
          </ListItem>}
          <ListItem button key='help' data-tip="Help" data-for="helpLink" onClick={selectedItem == NavItem.PROFILE ? handleDrawerClose : () => { handleDrawerOpen(NavItem.PROFILE) }}>
            <ReactTooltip
              delayShow={300}
              place="right"
              type="dark"
              effect="solid"
              id="helpLink"
            />
            <IconSvg options={{ icon: 'helpOutlined' }} />
          </ListItem>
        </List>
      </Drawer>
      <Drawer variant="temporary" open={isOpen} className={`SynapseNavContentDrawer`} onClose={handleDrawerClose} >
        {selectedItem == NavItem.PROJECTS && <>
          <div>
            SYNAPSE
            PROJECTS UI<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </>}
        {selectedItem == NavItem.FAVORITES && <>
          <div>FAVORITES UI<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
        </>}
      </Drawer>
    </div>
  )
}
