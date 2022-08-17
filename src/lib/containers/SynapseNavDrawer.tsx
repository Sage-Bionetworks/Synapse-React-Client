import { Badge, Drawer, List, ListItem } from '@material-ui/core'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import SynapseIconWhite from '../assets/icons/SynapseIconWhite'
import SynapseLogoName from '../assets/icons/SynapseLogoName'
import { SynapseClient } from '../utils'
import { useSearchAccessSubmissionsInfinite } from '../utils/hooks/SynapseAPI/dataaccess/useDataAccessSubmission'
import { useGetDownloadListStatistics } from '../utils/hooks/SynapseAPI/download/useGetDownloadListStatistics'
import { useGetCurrentUserBundle } from '../utils/hooks/SynapseAPI/user/useUserBundle'
import { isInSynapseExperimentalMode } from '../utils/SynapseClient'
import { useSynapseContext } from '../utils/SynapseContext'
import { Direction, SubmissionState } from '../utils/synapseTypes'
import { SubmissionSortField } from '../utils/synapseTypes/AccessSubmission'
import Tooltip from '../utils/tooltip/Tooltip'
import { CreateProjectModal } from './CreateProjectModal'
import IconSvg, { Icon } from './IconSvg'
import UserCard from './UserCard'

export type SynapseNavDrawerProps = {
  initIsOpen?: boolean
  signoutCallback?: () => void
}

type MenuItemParams = {
  tooltip: string
  iconName?: Icon
  onClickOpenNavMenu?: NavItem
  onClickGoToUrl?: string
  additionalChildren?: JSX.Element
  badgeContent?: string | number
  isCurrentlySelectedItem?: boolean
  handleDrawerClose: () => void
  handleDrawerOpen: (navItem?: NavItem) => void
}

export enum NavItem {
  PROJECTS,
  FAVORITES,
  TEAMS,
  CHALLENGES,
  DOWNLOADS,
  SEARCH,
  PROFILE,
  HELP,
}

// To support project search, we send this json object in the url.
// We update the queryTerm array based on user input.
const projectSearchJson = {
  queryTerm: [],
  booleanQuery: [
    {
      key: 'node_type',
      value: 'project',
    },
  ],
  facetOptions: [
    {
      name: 'EntityType',
      maxResultCount: 300,
      sortType: 'COUNT',
    },
    {
      name: 'Consortium',
      maxResultCount: 300,
      sortType: 'COUNT',
    },
    {
      name: 'ModifiedOn',
      maxResultCount: 300,
      sortType: 'COUNT',
    },
    {
      name: 'ModifiedBy',
      maxResultCount: 300,
      sortType: 'COUNT',
    },
    {
      name: 'CreatedOn',
      maxResultCount: 300,
      sortType: 'COUNT',
    },
    {
      name: 'Tissue',
      maxResultCount: 300,
      sortType: 'COUNT',
    },
    {
      name: 'CreatedBy',
      maxResultCount: 300,
      sortType: 'COUNT',
    },
  ],
  start: 0,
  size: 30,
}

const NavDrawerListItem = (props: MenuItemParams) => {
  const {
    tooltip,
    iconName,
    onClickOpenNavMenu,
    onClickGoToUrl,
    additionalChildren,
    badgeContent,
    isCurrentlySelectedItem = false,
    handleDrawerClose,
    handleDrawerOpen,
  } = props
  const handler =
    isCurrentlySelectedItem || onClickGoToUrl
      ? handleDrawerClose
      : () => {
          handleDrawerOpen(onClickOpenNavMenu)
        }
  const item = iconName ? (
    <>
      <IconSvg options={{ icon: iconName }} /> {additionalChildren}{' '}
    </>
  ) : (
    additionalChildren
  )

  const listItem = (
    <Tooltip title={tooltip} placement="right">
      <ListItem
        button
        key={iconName}
        data-testid={`${tooltip}`}
        onClick={handler}
        className="SRC-whiteText"
        selected={isCurrentlySelectedItem}
      >
        <Badge badgeContent={badgeContent} color="secondary">
          {item}
        </Badge>
      </ListItem>
    </Tooltip>
  )

  return onClickGoToUrl ? (
    <a
      href={onClickGoToUrl}
      rel="noopener noreferrer"
      className="SRC-whiteText"
    >
      {listItem}
    </a>
  ) : (
    listItem
  )
}

/**
 * Displays the Synapse navigational drawer on the left side of the page.  Has links to various areas if logged in.
 */
export const SynapseNavDrawer: React.FunctionComponent<
  SynapseNavDrawerProps
> = ({ initIsOpen = false, signoutCallback }) => {
  const [isOpen, setOpen] = useState(initIsOpen)
  const [selectedItem, setSelectedItem] = useState<NavItem>()
  const [projectSearchText, setProjectSearchText] = useState<string>('')
  const [docSiteSearchText, setDocSiteSearchText] = useState<string>('')
  const [isShowingCreateProjectModal, setIsShowingCreateProjectModal] =
    useState<boolean>(false)

  const { accessToken } = useSynapseContext()
  const isLoggedIn = !!accessToken

  const { data: currentUserBundle } = useGetCurrentUserBundle()

  // If the user is logged out, the UserBundle provides an "anonymous" user profile, so override that case with undefined
  const currentUserProfile =
    isLoggedIn && currentUserBundle ? currentUserBundle.userProfile : undefined

  const { data: downloadListStatistics } = useGetDownloadListStatistics({
    enabled: isLoggedIn,
  })

  const numberOfFilesInDownloadList = downloadListStatistics?.totalNumberOfFiles

  const { data: openSubmissionData } = useSearchAccessSubmissionsInfinite(
    {
      submissionState: SubmissionState.SUBMITTED,
      sort: [
        {
          field: SubmissionSortField.CREATED_ON,
          direction: Direction.DESC,
        },
      ],
    },
    {
      enabled:
        currentUserBundle?.isACTMember || currentUserBundle?.isARReviewer,
    },
  )

  let countOfOpenSubmissionsForReview: number | string =
    openSubmissionData?.pages[0].results.length ?? 0
  if (openSubmissionData?.pages[0].nextPageToken) {
    countOfOpenSubmissionsForReview = `${countOfOpenSubmissionsForReview}+`
  }

  const signOut = async () => {
    if (signoutCallback) {
      signoutCallback()
    } else {
      await SynapseClient.signOut(() => {
        console.log('Signed out')
      })
      window.location.reload()
    }
  }

  const handleDrawerOpen = (navItem?: NavItem) => {
    setOpen(true)
    setSelectedItem(navItem)
  }

  const handleDrawerClose = () => {
    setOpen(false)
    setSelectedItem(undefined)
  }

  const onProjectSearch = (searchTerm: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    projectSearchJson.queryTerm = searchTerm.split(/[ ,]+/) as any
    window.location.href = `/#!Search:${encodeURI(
      JSON.stringify(projectSearchJson),
    )}`
  }

  return (
    <div className="SynapseNavDrawer">
      <Drawer
        variant="permanent"
        className={`SynapseNavDrawerMenu ${isOpen ? 'tempDrawerOpen' : ''}`}
      >
        <div onClick={handleDrawerClose}>
          <a className="synapseIcon" rel="noopener noreferrer" href="/#!Home:0">
            <SynapseIconWhite />
          </a>
        </div>
        <List>
          {isLoggedIn && currentUserProfile && (
            <>
              <NavDrawerListItem
                tooltip="Projects"
                iconName="dashboard"
                onClickOpenNavMenu={NavItem.PROJECTS}
                isCurrentlySelectedItem={selectedItem == NavItem.PROJECTS}
                handleDrawerClose={handleDrawerClose}
                handleDrawerOpen={handleDrawerOpen}
              />
              <NavDrawerListItem
                tooltip="Favorites"
                iconName="favTwoTone"
                onClickGoToUrl={`/#!Profile:${currentUserProfile.ownerId}/favorites`}
                handleDrawerClose={handleDrawerClose}
                handleDrawerOpen={handleDrawerOpen}
              />
              <NavDrawerListItem
                tooltip="Teams"
                iconName="peopleTwoTone"
                onClickGoToUrl={`/#!Profile:${currentUserProfile.ownerId}/teams`}
                handleDrawerClose={handleDrawerClose}
                handleDrawerOpen={handleDrawerOpen}
              />
              <NavDrawerListItem
                tooltip="Challenges"
                iconName="challengesTwoTone"
                onClickGoToUrl={`/#!Profile:${currentUserProfile.ownerId}/challenges`}
                handleDrawerClose={handleDrawerClose}
                handleDrawerOpen={handleDrawerOpen}
              />
              <NavDrawerListItem
                tooltip="Download Cart"
                iconName="download"
                onClickGoToUrl="/#!DownloadCart:0"
                badgeContent={numberOfFilesInDownloadList}
                handleDrawerClose={handleDrawerClose}
                handleDrawerOpen={handleDrawerOpen}
              />
              <NavDrawerListItem
                tooltip="Trash Can"
                iconName="delete"
                onClickGoToUrl="/#!Trash:0"
                handleDrawerClose={handleDrawerClose}
                handleDrawerOpen={handleDrawerOpen}
              />
              {isInSynapseExperimentalMode() &&
                currentUserBundle?.isARReviewer && (
                  <NavDrawerListItem
                    tooltip="Data Access Management"
                    iconName="accessManagement"
                    onClickGoToUrl="/#!DataAccessManagement:default/Submissions"
                    badgeContent={countOfOpenSubmissionsForReview}
                    handleDrawerClose={handleDrawerClose}
                    handleDrawerOpen={handleDrawerOpen}
                  />
                )}
            </>
          )}
          <NavDrawerListItem
            tooltip="Search"
            iconName="search"
            onClickGoToUrl="/#!Search:"
            handleDrawerClose={handleDrawerClose}
            handleDrawerOpen={handleDrawerOpen}
          />
        </List>
        <div className="filler" />
        <List>
          {isLoggedIn && currentUserProfile && (
            <NavDrawerListItem
              tooltip="Your Account"
              onClickOpenNavMenu={NavItem.PROFILE}
              additionalChildren={
                <UserCard
                  userProfile={currentUserProfile}
                  size="AVATAR"
                  avatarSize="SMALL"
                />
              }
              isCurrentlySelectedItem={selectedItem == NavItem.PROFILE}
              handleDrawerClose={handleDrawerClose}
              handleDrawerOpen={handleDrawerOpen}
            />
          )}
          {!isLoggedIn && (
            <NavDrawerListItem
              tooltip="Sign in"
              iconName="login"
              onClickGoToUrl="/#!LoginPlace:0"
              handleDrawerClose={handleDrawerClose}
              handleDrawerOpen={handleDrawerOpen}
            />
          )}
          <NavDrawerListItem
            tooltip="Help"
            iconName="helpOutlined"
            onClickOpenNavMenu={NavItem.HELP}
            isCurrentlySelectedItem={selectedItem == NavItem.HELP}
            handleDrawerClose={handleDrawerClose}
            handleDrawerOpen={handleDrawerOpen}
          />
        </List>
      </Drawer>
      <Drawer
        variant="temporary"
        open={isOpen}
        className={`SynapseNavContentDrawer`}
        onClose={handleDrawerClose}
      >
        <div className="synapseLogoNameContainer">
          <SynapseLogoName />
        </div>
        <div className="navContentContainer">
          {selectedItem == NavItem.PROJECTS && (
            <>
              <div className="header projectHeader">Projects</div>
              <Tooltip title="Create a New Project" placement="right">
                <a
                  className="createProjectLink"
                  onClick={() => {
                    setIsShowingCreateProjectModal(true)
                    handleDrawerClose()
                  }}
                >
                  <IconSvg options={{ icon: 'addCircleOutline' }} />
                </a>
              </Tooltip>
              <div className="searchInputWithIcon">
                <IconSvg options={{ icon: 'searchOutlined' }} />
                <Form.Control
                  type="search"
                  placeholder="Search All Projects"
                  value={projectSearchText}
                  onChange={event => {
                    setProjectSearchText(event.target.value)
                  }}
                  onKeyDown={(event: any) => {
                    if (event.key === 'Enter') {
                      if (event.target.value !== '') {
                        setProjectSearchText('')
                        handleDrawerClose()
                        onProjectSearch(event.target.value)
                      }
                    }
                  }}
                />
              </div>
              <div className="linkList" onClick={handleDrawerClose}>
                <a
                  className="SRC-whiteText"
                  href={`/#!Profile:${currentUserProfile?.ownerId}/projects/all`}
                  rel="noopener noreferrer"
                >
                  All
                </a>
                <a
                  className="SRC-whiteText"
                  href={`/#!Profile:${currentUserProfile?.ownerId}/projects/created_by_me`}
                  rel="noopener noreferrer"
                >
                  Created By Me
                </a>
                <a
                  className="SRC-whiteText"
                  href={`/#!Profile:${currentUserProfile?.ownerId}/projects/favorites`}
                  rel="noopener noreferrer"
                >
                  Favorite Projects
                </a>
                <a
                  className="SRC-whiteText"
                  href={`/#!Profile:${currentUserProfile?.ownerId}/projects/shared_directly_with_me`}
                  rel="noopener noreferrer"
                >
                  Shared With Me
                </a>
                <a
                  className="SRC-whiteText"
                  href={`/#!Profile:${currentUserProfile?.ownerId}/projects/all_my_team_projects`}
                  rel="noopener noreferrer"
                >
                  Team Projects
                </a>
              </div>
            </>
          )}
          {selectedItem == NavItem.PROFILE && (
            <>
              <div className="header">
                Welcome Back,
                <br />
                {currentUserProfile?.userName}!
              </div>
              <div className="linkList" onClick={handleDrawerClose}>
                <a
                  className="SRC-whiteText"
                  href={`/#!Profile:${currentUserProfile?.ownerId}/profile`}
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
                <a
                  className="SRC-whiteText"
                  href={`/#!Profile:${currentUserProfile?.ownerId}/settings`}
                  rel="noopener noreferrer"
                >
                  Account Settings
                </a>
                <a
                  className="SRC-whiteText"
                  onClick={() => {
                    signOut()
                  }}
                  rel="noopener noreferrer"
                >
                  Sign Out
                </a>
              </div>
            </>
          )}
          {selectedItem == NavItem.HELP && (
            <>
              <div className="header">Help</div>
              <div className="searchInputWithIcon">
                <IconSvg options={{ icon: 'searchOutlined' }} />
                <Form.Control
                  type="search"
                  placeholder="Search Synapse Documentation"
                  value={docSiteSearchText}
                  onChange={event => {
                    setDocSiteSearchText(event.target.value)
                  }}
                  onKeyDown={(event: any) => {
                    if (event.key === 'Enter') {
                      if (event.target.value !== '') {
                        window.open(
                          `https://help.synapse.org/search.html?max=10&s=docs&q=${encodeURI(
                            event.target.value,
                          )}`,
                        )
                        setDocSiteSearchText('')
                        handleDrawerClose()
                      }
                    }
                  }}
                />
              </div>
              <div className="linkList" onClick={handleDrawerClose}>
                <a
                  className="SRC-whiteText"
                  href="https://help.synapse.org/docs/Getting-Started.2055471150.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Getting Started
                </a>
                <a
                  className="SRC-whiteText"
                  href="https://help.synapse.org/docs/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Synapse Documentation
                </a>
                <a
                  className="SRC-whiteText"
                  href="#!SynapseForum:default"
                  rel="noopener noreferrer"
                >
                  Help Forum
                </a>
                <a
                  className="SRC-whiteText"
                  href="https://sagebionetworks.jira.com/servicedesk/customer/portal/9"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Contact Us
                </a>
              </div>
            </>
          )}
        </div>
      </Drawer>
      <CreateProjectModal
        onClose={() => setIsShowingCreateProjectModal(false)}
        isShowingModal={isShowingCreateProjectModal}
      />
    </div>
  )
}
