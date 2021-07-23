import { Drawer, List, ListItem } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import IconSvg from './IconSvg'
import SynapseLogoName from '../assets/icons/SynapseLogoName'
import ReactTooltip from 'react-tooltip'
import { SynapseClient } from '../utils'
import { UserProfile } from '../utils/synapseTypes'
import { useSynapseContext } from '../utils/SynapseContext'
import { Avatar } from './Avatar'
import { Form } from 'react-bootstrap'
import SynapseIconWhite from '../assets/icons/SynapseIconWhite'

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
  const [projectSearchText, setProjectSearchText] = useState<string>('')
  const [docSiteSearchText, setDocSiteSearchText] = useState<string>('')

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

    return <ListItem button key={iconName} data-tip={tooltip} data-for={`${tooltip}Link`} onClick={handler} className="SRC-whiteText">
      <ReactTooltip
        delayShow={300}
        place="right"
        type="dark"
        effect="solid"
        id={`${tooltip}Link`}
      />
      {onClickGoToUrl && 
        <a href={onClickGoToUrl} rel="noopener noreferrer" className="SRC-whiteText">
          {item}
        </a>
      }
      {!onClickGoToUrl && item}
    </ListItem>
  }
  
  return (
    <div className="SynapseNavDrawer">
      <Drawer variant="permanent" className='SynapseNavDrawerMenu' >
        <a className='synapseIcon' rel="noopener noreferrer" 
          onClick={()=>
            {
              handleDrawerClose()
              window.open('/#!Home:0','_self')
            }} >
          <SynapseIconWhite />
        </a>
        <List>
          {currentUserProfile && <>
            {getListItem({tooltip: 'Projects', iconName: 'dashboard', onClickOpenNavMenu: NavItem.PROJECTS})}
            {getListItem({tooltip: 'Favorites', iconName: 'favOutlined', onClickGoToUrl: `/#!Profile:${currentUserProfile.ownerId}/favorites`})}
            {getListItem({tooltip: 'Teams', iconName: 'peopleOutlined', onClickGoToUrl: `/#!Profile:${currentUserProfile.ownerId}/teams`})}
            {getListItem({tooltip: 'Challenges', iconName: 'challengesOutlined', onClickGoToUrl: `/#!Profile:${currentUserProfile.ownerId}/challenges`})}
            {getListItem({tooltip: 'Download Cart', iconName: 'downloadOutlined', onClickGoToUrl: `/#!Profile:${currentUserProfile.ownerId}/downloads`})}
          </>}
          {getListItem({tooltip: 'Search', iconName: 'searchOutlined', onClickGoToUrl: '/#!Search:'})}
        </List>
        <div className="filler"/>
        <List>
          {currentUserProfile && getListItem({tooltip: 'Your Account', onClickOpenNavMenu: NavItem.PROFILE, additionalChildren: <Avatar userProfile={currentUserProfile} avatarSize='SMALL' />})}
          {!currentUserProfile && getListItem({tooltip: 'Sign in', iconName: 'login', onClickGoToUrl: '/#!LoginPlace:0'})}
          {getListItem({tooltip: 'Help', iconName: 'helpOutlined', onClickOpenNavMenu: NavItem.HELP})}
        </List>
      </Drawer>
      <Drawer variant="temporary" open={isOpen} className={`SynapseNavContentDrawer`} onClose={handleDrawerClose} >
        <div className="synapseLogoNameContainer">
          <SynapseLogoName />
        </div>
        <div className="navContentContainer">
          {selectedItem == NavItem.PROJECTS && <>
            <div className="header">
              Projects
            </div>
            <div className="searchContainer">
              <IconSvg options={{ icon: 'searchOutlined' }} />
              <Form.Control type="search" placeholder="Search All Projects" 
                value={projectSearchText}
                onChange={event => {
                  setProjectSearchText(event.target.value)
                }}
                onKeyDown={(event: any) => {
                  if (event.key === 'Enter') {
                    if (event.target.value !== '') {
                      setProjectSearchText('')
                      window.location.href = `/#!Search:${encodeURI(event.target.value)}`
                    }
                  }
                }}/>
            </div>
            <div className="linkList" onClick={handleDrawerClose}>
              <a className="SRC-whiteText" href={`/#!Profile:${currentUserProfile?.ownerId}/projects/all`} rel="noopener noreferrer">
                All
              </a>
              <a className="SRC-whiteText" href={`/#!Profile:${currentUserProfile?.ownerId}/projects/created_by_me`} rel="noopener noreferrer">
                Created By Me
              </a>
              <a className="SRC-whiteText" href={`/#!Profile:${currentUserProfile?.ownerId}/projects/shared_directly_with_me`} rel="noopener noreferrer">
                Shared With Me
              </a>
              <a className="SRC-whiteText" href={`/#!Profile:${currentUserProfile?.ownerId}/projects/all_my_team_projects`} rel="noopener noreferrer">
                Team Projects
              </a>
            </div>
          </>}
          {selectedItem == NavItem.PROFILE && <>
            <div className="header">
              Welcome Back,<br />
              {currentUserProfile?.userName}!
            </div>
            <div className="linkList" onClick={handleDrawerClose}>
              <a className="SRC-whiteText" href={`/#!Profile:${currentUserProfile?.ownerId}/profile`} rel="noopener noreferrer">
                View Profile
              </a>
              <a className="SRC-whiteText" href={`/#!Profile:${currentUserProfile?.ownerId}/settings`} rel="noopener noreferrer">
                Account Settings
              </a>
              <a className="SRC-whiteText" onClick={() => {SynapseClient.signOut(window.location.reload)}} rel="noopener noreferrer">
                Sign Out
              </a>
            </div>
          </>}
          {selectedItem == NavItem.HELP && <>
            <div className="header">
              Help
            </div>
            <div className="searchContainer">
              <IconSvg options={{ icon: 'searchOutlined' }} />
              <Form.Control type="search" placeholder="Search Synapse Documentation" 
                value={docSiteSearchText}
                onChange={event => {
                  setDocSiteSearchText(event.target.value)
                }}
                onKeyDown={(event: any) => {
                  if (event.key === 'Enter') {
                    if (event.target.value !== '') {
                      window.open(`https://help.synapse.org/search.html?max=10&s=docs&q=${encodeURI(event.target.value)}`)
                      setDocSiteSearchText('')
                    }
                  }
              }}/>
            </div>
            <div className="linkList" onClick={handleDrawerClose}>
              <a className="SRC-whiteText" href='https://help.synapse.org/docs/Getting-Started.2055471150.html' rel="noopener noreferrer" target='_blank'>
                Getting Started
              </a>
              <a className="SRC-whiteText" href='https://help.synapse.org/docs/' rel="noopener noreferrer" target='_blank'>
                Synapse Documentation
              </a>
              <a className="SRC-whiteText" href='#!SynapseForum:default' rel="noopener noreferrer">
                Help Forum
              </a>
              <a className="SRC-whiteText" href='mailto:synapseinfo@sagebionetworks.org' rel="noopener noreferrer">
                Contact Us
              </a>
            </div>
          </>}
        </div>
      </Drawer>
    </div>
  )
}
