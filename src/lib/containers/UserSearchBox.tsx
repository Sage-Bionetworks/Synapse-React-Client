import * as React from 'react'
import Downshift from 'downshift'
import { useState } from 'react'
import { getUserGroupHeaders } from '../utils/SynapseClient'
import { UserGroupHeader } from '../utils/synapseTypes'

export type UserSearchBoxProps = {
  onSelectCallback?: Function
}

export type FormattedUserHeader = {
  ownerId: string,
  name: string,
  userName: string
}

const UserSearchBox: React.FC<UserSearchBoxProps> = props => {
  const { onSelectCallback } = props
  const [users, setUsers] = useState<FormattedUserHeader[]>([])

  const onInputValueChange = async (inputValue:string) => {
    try {
      const headers = await getUserGroupHeaders(inputValue)
      const formattedList:FormattedUserHeader[] = headers.children.map((user:UserGroupHeader) => {
        return {
          ownerId: user.ownerId,
          name: `${user.firstName} ${user.lastName}`,
          userName: user.userName,
        }
      })
      setUsers(formattedList)
    } catch (e) {
      console.log("onInputValueChange", e)
    }
  }

  const onSelectedItem = (selected:FormattedUserHeader) => {
    if (onSelectCallback) {
      onSelectCallback(selected.ownerId)
    }
  }

  return (<>
    <Downshift
      onInputValueChange={(inputValue) => onInputValueChange(inputValue)}
      onSelect={(selectedItem => onSelectedItem(selectedItem))}
      itemToString={item => item.name}
    >
      {({
        getInputProps,
        getMenuProps,
        getItemProps,
        isOpen,
        inputValue,
      }) => (
        <div>
          <input {...getInputProps({
            isOpen,
            placeholder: 'Enter a name'
          })} />
          <ul {...getMenuProps()}>
            { isOpen ? users.filter((user:FormattedUserHeader) => !inputValue || user.name.includes(inputValue))
                  .map((item, index) => (
                    <li key={`userSearchBox-${index}`} {...getItemProps({key:item.ownerId, index, item})}>
                      {<>
                        <a href={`https://www.synapse.org/#!Profile:${item.ownerId}`} target={"_blank"} rel="noreferrer">{item.userName}</a>
                        <span>{item.name}</span>
                      </>}
                    </li>
                  ))
                : null
            }
          </ul>
        </div>
      )}
    </Downshift>
  </>)
}

export default UserSearchBox