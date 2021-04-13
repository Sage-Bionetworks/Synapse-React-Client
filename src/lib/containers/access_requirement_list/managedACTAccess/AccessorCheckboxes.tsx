import * as React from 'react'
import { useEffect, useState } from 'react'
import { Checkbox } from '../../widgets/Checkbox'
import { UserProfile } from '../../../utils/synapseTypes'
import { UserCardSmall } from '../../UserCardSmall'

export type CheckboxState = {
  id?: string,
  checked: boolean
}

export type AccessorCheckboxesProps = {
  allChecked: boolean | undefined,
  accessorProfiles: UserProfile[]
  onChangeCallback?: Function
}

const AccessorCheckboxes: React.FC<AccessorCheckboxesProps> = props => {
  const { accessorProfiles, allChecked, onChangeCallback } = props
  const [checkboxesState, setCheckboxState] = useState<CheckboxState[]>([])

  let mounted = true

  useEffect(() => {
    if (mounted) {
      const state = accessorProfiles.map((item, i) => {
        return {
          id: item.ownerId,
          checked: allChecked ? true : false
        }
      })
      setCheckboxState(state)
    }
    return () => {
      mounted = false
    }
  }, [accessorProfiles, allChecked])

  const handleOnChange = (checked: boolean, value: string) => {
    const state:CheckboxState[] = checkboxesState
    state.forEach(item => {
      if (item.id === value) {
        item.checked = checked
      }
    })
    setCheckboxState(state)
    if (onChangeCallback) {
      onChangeCallback("accessors", checkboxesState)
    }
  }

  return(
    <div className={"checkbox-list"}>
      { accessorProfiles.map((profile, i) => {
        return (<div key={`file-attachment-${i}`}>
          <Checkbox
            id={""}
            onChange={() => {}}
            label={""}
            className={"ch2"}
            value={profile.ownerId}
            onChangeCallBack={handleOnChange}
            checked={checkboxesState[i]?.checked}
          />
          <UserCardSmall
            userProfile={profile}
            showAccountLevelIcon={true}
          />
        </div>)
      })
      }
    </div>
  )
}

export default AccessorCheckboxes