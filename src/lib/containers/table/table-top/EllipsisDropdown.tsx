import * as React from 'react'
import { Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

library.add(faEllipsisV)

type EllipsisDropdownProps = {
  onDownloadFiles: Function
  onDownloadTableOnly: Function
  onShowColumns: Function
  onFullScreen: Function
}

export const EllipsisDropdown: React.FunctionComponent<EllipsisDropdownProps> = (props) => {
  const {
    onDownloadFiles,
    onDownloadTableOnly,
    onShowColumns,
    onFullScreen
  } = props
  return (
    <Dropdown>
      <Dropdown.Toggle variant={'light'} id="dropdown-ellipsis-button">
        <FontAwesomeIcon color='white' icon={'ellipsis-v'}/>
      </Dropdown.Toggle>
      <Dropdown.Menu alignRight={true}>
        <Dropdown.Item onClick={() => onDownloadFiles()}> Download Files </Dropdown.Item>
        <Dropdown.Item onClick={() => onDownloadTableOnly()} >Download Table Only</Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item onClick={() => onShowColumns()} > Show Columns </Dropdown.Item>
        <Dropdown.Item onClick={() => onFullScreen()} > Full Screen </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}