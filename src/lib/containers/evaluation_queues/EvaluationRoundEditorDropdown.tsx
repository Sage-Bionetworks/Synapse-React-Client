import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { Dropdown } from 'react-bootstrap'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export type EvaluationRoundEditorDropdownProps = {
  onDelete: () => void
  onSave: () => void
}

export const EvaluationRoundEditorDropdown: React.FunctionComponent<EvaluationRoundEditorDropdownProps> = ({
  onSave,
  onDelete,
}) => {
  return (
    <>
      <Dropdown className="float-right">
        <Dropdown.Toggle
          variant="link"
          className="dropdown-no-caret evaluation-round-editor-dropdown"
        >
          <FontAwesomeIcon icon={faEllipsisV} />
        </Dropdown.Toggle>
        <Dropdown.Menu alignRight={true}>
          <Dropdown.Item onClick={onSave}>Save</Dropdown.Item>
          <Dropdown.Item onClick={onDelete}>Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}
