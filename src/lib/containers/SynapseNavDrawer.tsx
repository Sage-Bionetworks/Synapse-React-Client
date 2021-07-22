import { Drawer, List, ListItem } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import IconSvg from './IconSvg'
import SynapseIcon from '../assets/icons/SynapseIcon'
import SynapseLogoName from '../assets/icons/SynapseLogoName'
import ReactTooltip from 'react-tooltip'
import { SynapseClient } from '../utils'
import { UserProfile } from '../utils/synapseTypes'
import { useSynapseContext } from '../utils/SynapseContext'
import { Avatar } from './Avatar'

export type SynapseNavDrawerProps = {
  initIsOpen?: boolean
}

type MenuItemParams = {
  tooltip: string,
  iconName?: string,
  onClickOpenNavMenu?: NavItem,
  onClickGoToUrl?: string,
  additionalChildren?: JSX.Element
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
  const getListItem = (params: MenuItemParams) => {
    const { tooltip, iconName, onClickOpenNavMenu, onClickGoToUrl, additionalChildren } = params
    const handler = selectedItem == onClickOpenNavMenu ? handleDrawerClose : () => { handleDrawerOpen(onClickOpenNavMenu) }
    const item = iconName ? <><IconSvg options={{ icon: iconName }} /> {additionalChildren} </> : additionalChildren

    return <ListItem button key={iconName} data-tip={tooltip} data-for={`${tooltip}Link`} onClick={handler}>
      <ReactTooltip
        delayShow={300}
        place="right"
        type="dark"
        effect="solid"
        id={`${tooltip}Link`}
      />
      {onClickGoToUrl && 
        <a href={onClickGoToUrl} rel="noopener noreferrer">
          {item}
        </a>
      }
      {!onClickGoToUrl && item}
    </ListItem>
  }
  
  return (
    <div className="SynapseNavDrawer">
      <Drawer variant="permanent" className='SynapseNavDrawerMenu' >
        <a href='#!Home:0' className='synapseIcon' rel="noopener noreferrer">
          <SynapseIcon />
        </a>
        <List>
          {currentUserProfile && <>
            {getListItem({tooltip: 'Projects', iconName: 'dashboard', onClickOpenNavMenu: NavItem.PROJECTS})}
            {getListItem({tooltip: 'Favorites', iconName: 'favOutlined', onClickGoToUrl: `#!Profile:${currentUserProfile.ownerId}/favorites`})}
            {getListItem({tooltip: 'Teams', iconName: 'peopleOutlined', onClickGoToUrl: `#!Profile:${currentUserProfile.ownerId}/teams`})}
            {getListItem({tooltip: 'Challenges', iconName: 'challengesOutlined', onClickGoToUrl: `#!Profile:${currentUserProfile.ownerId}/challenges`})}
            {getListItem({tooltip: 'Download Cart', iconName: 'downloadOutlined', onClickGoToUrl: `#!Profile:${currentUserProfile.ownerId}/downloads`})}
          </>}
          {getListItem({tooltip: 'Search', iconName: 'searchOutlined', onClickGoToUrl: '#!Search:'})}
        </List>
        <div className="filler"/>
        <List>
          {currentUserProfile && getListItem({tooltip: 'Your Account', onClickOpenNavMenu: NavItem.PROFILE, additionalChildren: <Avatar userProfile={currentUserProfile} avatarSize='SMALL' />})}
          {!currentUserProfile && getListItem({tooltip: 'Sign in', iconName: 'login', onClickGoToUrl: '#!LoginPlace:0'})}
          {getListItem({tooltip: 'Help', iconName: 'helpOutlined', onClickOpenNavMenu: NavItem.HELP})}
        </List>
      </Drawer>
      <Drawer variant="temporary" open={isOpen} className={`SynapseNavContentDrawer`} onClose={handleDrawerClose} >
        <div className="synapseLogoNameContainer">
          <SynapseLogoName />
        </div>
        <div className="navContentContainer">
          {selectedItem == NavItem.PROJECTS && <>
            <div>
              PROJECTS UI<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </>}
          {selectedItem == NavItem.PROFILE && <>
            <div>
              <div className="header">
                Welcome Back,<br />
                {currentUserProfile?.userName}!
              </div>
              <div className="linkList">
                <a className="SRC-whiteText" href={`#!Profile:${currentUserProfile?.ownerId}/profile`} rel="noopener noreferrer">
                  View Profile
                </a>
                <a className="SRC-whiteText" href={`#!Profile:${currentUserProfile?.ownerId}/settings`} rel="noopener noreferrer">
                  Account Settings
                </a>
                <a className="SRC-whiteText" onClick={() => {SynapseClient.signOut(window.location.reload)}} rel="noopener noreferrer">
                  Sign Out
                </a>
              </div>
            </div>
          </>}
          {selectedItem == NavItem.HELP && <>
            <div>HELP UI<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
          </>}
        </div>
      </Drawer>
    </div>
  )
}
