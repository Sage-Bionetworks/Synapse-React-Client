import { Drawer, IconButton, List, ListItem } from '@material-ui/core'
import React, {useState} from 'react'
import IconSvg from './IconSvg'

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
export const SynapseNavDrawer: React.FunctionComponent<SynapseNavDrawerProps> = ({initIsOpen = false}) => {
  const [isOpen, setOpen] = useState(initIsOpen)
  const [selectedItem, setSelectedItem] = useState<NavItem>()
  const handleDrawerOpen = (navItem?:NavItem) => {
    setOpen(true)
    setSelectedItem(navItem)
  }

  const handleDrawerClose = () => {
    setOpen(false)
    setSelectedItem(undefined)
  }
  return (
    <div className="SynapseNavDrawer">
      <Drawer variant="permanent" className={`SynapseNavDrawerMenu 'drawerClosed`} >
          <List>
            <ListItem button key='synapse' onClick={() => {handleDrawerOpen(undefined)}}>
              <IconSvg options={{ icon: 'download' }} />
            </ListItem>
            <ListItem button key='projects' onClick={() => {handleDrawerOpen(NavItem.PROJECTS)}}>
              <IconSvg options={{ icon: 'download' }} />
            </ListItem>
            <ListItem button key='favorites' onClick={() => {handleDrawerOpen(NavItem.FAVORITES)}}>
              <IconSvg options={{ icon: 'download' }} />
            </ListItem>
          </List>
      </Drawer>
      <Drawer variant="permanent" open={isOpen} className={`SynapseNavContentDrawer`} onClose={handleDrawerClose} >
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
