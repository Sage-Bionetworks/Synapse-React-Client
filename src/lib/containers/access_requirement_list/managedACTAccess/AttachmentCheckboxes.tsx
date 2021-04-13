import * as React from 'react'
import { useEffect, useState } from 'react'
import { Checkbox } from '../../widgets/Checkbox'
import { FileHandleAssociateType } from '../../../utils/synapseTypes'
import DirectDownloadButton from '../../DirectDownloadButton'
import { DataAccessDoc } from './RequestDataAccessStep2'

export type CheckboxState = {
  id?: string,
  checked: boolean
}

export type AttachmentCheckboxesProps = {
  allChecked: boolean | undefined,
  attachments: DataAccessDoc[]
  token: string
  onChangeCallback?: Function
}

const AttachmentCheckboxes: React.FC<AttachmentCheckboxesProps> = props => {
  const { attachments, token, allChecked, onChangeCallback } = props
  const [checkboxesState, setCheckboxState] = useState<CheckboxState[]>([])

  let mounted = true

  useEffect(() => {
    if (mounted) {   // TODO: Refactor this
      if (allChecked === undefined ) {
        const state = attachments.map((item, i) => {
          return {
            id: item.fileHandleId,
            checked: checkboxesState[i] ? checkboxesState[i].checked : false
          }
        })
        setCheckboxState(state)
      }
      if (allChecked === true ) {
        const state = attachments.map((item, i) => {
          return {
            id: item.fileHandleId,
            checked: true
          }
        })
        setCheckboxState(state)
      }
    }
    return () => {
      mounted = false
    }
  }, [attachments, allChecked])

  const handleOnChange = (checked: boolean, value: string) => {
    const state:CheckboxState[] = checkboxesState
    state.forEach(item => {
      if (item.id === value) {
        item.checked = checked
      }
    })
    setCheckboxState(state)
    if (onChangeCallback) {
      onChangeCallback("attachments", checkboxesState)
    }
  }

  return(
    <div className={"checkbox-list"}>
      { attachments.map((attachment:DataAccessDoc, i:number) => {
        return (<div key={`file-attachment-${i}`}>
          <Checkbox
            id={""}
            onChange={() => {}}
            label={""}
            className={"ch1"}
            value={attachment.fileHandleId}
            onChangeCallBack={handleOnChange}
            checked={checkboxesState[i]?.checked}
          />
          <DirectDownloadButton
            fileHandleAssociation={{
              associateObjectId: attachment.associateObjectId!,
              associateObjectType: attachment.associateObjectType as FileHandleAssociateType,
              fileHandleId: attachment.fileHandleId
            }}
            fileName={attachment?.fileName}
            variant={"link"}
            className={"SRC-noPadding"}
            token={token}
          />
        </div>)
      })
      }
    </div>
  )
}

export default AttachmentCheckboxes