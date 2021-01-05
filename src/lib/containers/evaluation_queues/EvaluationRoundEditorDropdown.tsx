import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { Dropdown } from 'react-bootstrap'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WarningModal from '../synapse_form_wrapper/WarningModal'

export type EvaluationRoundEditorDropdownProps = {
  onDelete: () => void
  onSave: () => void
}

export const EvaluationRoundEditorDropdown: React.FunctionComponent<EvaluationRoundEditorDropdownProps> = ({
  onSave,
  onDelete,
}) => {
  const [deleteWarningShow, setDeleteWarningShow] = useState<boolean>(false)

  return (
    <>
      <WarningModal
        title="Delete Evaluation Round"
        modalBody="Are you sure you want to delete this Evaluation Round?"
        show={deleteWarningShow}
        confirmButtonText="Delete"
        onConfirm={() => {
          onDelete()
          setDeleteWarningShow(false)
        }}
        onConfirmCallbackArgs={[]}
        onCancel={() => {
          setDeleteWarningShow(false)
        }}
        confirmButtonVariant="danger"
      />

      <Dropdown className="float-right">
        <Dropdown.Toggle
          variant="link"
          className="dropdown-no-caret evaluation-round-editor-dropdown"
        >
          <FontAwesomeIcon icon={faEllipsisV} />
        </Dropdown.Toggle>
        <Dropdown.Menu alignRight={true}>
          <Dropdown.Item onClick={onSave}>Save</Dropdown.Item>
          <Dropdown.Item onClick={() => setDeleteWarningShow(true)}>
            Delete
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}
