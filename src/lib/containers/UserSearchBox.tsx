import * as React from 'react'
import Downshift from 'downshift'
import { useState } from 'react'
import { getUserGroupHeaders } from '../utils/SynapseClient'
import { UserGroupHeader } from '../utils/synapseTypes'

export type UserSearchBoxProps = {
  id?: string  // id for the input tag
  onSelectCallback?: Function
}

export type FormattedUserHeader = {
  ownerId: string
  firstName: string
  lastName: string
  userName: string
}

const UserSearchBox: React.FC<UserSearchBoxProps> = props => {
  const { id, onSelectCallback } = props
  const [users, setUsers] = useState<FormattedUserHeader[]>([])

  const onInputValueChange = async (inputValue:string) => {
    try {
      const headers = await getUserGroupHeaders(inputValue)
      const formattedList:FormattedUserHeader[] = headers.children.map((user:UserGroupHeader) => {
        return {
          ownerId: user.ownerId,
          firstName: user.firstName,
          lastName: user.lastName,
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
      onSelectCallback(selected)
    }
  }

  return (<>
    <Downshift
      onInputValueChange={(inputValue) => onInputValueChange(inputValue)}
      onChange={selectedItem => onSelectedItem(selectedItem)}
      itemToString={item => item?.name ? item.name : ""}
    >
      {({
        getInputProps,
        getMenuProps,
        getItemProps,
        isOpen,
        inputValue,
      }) => (
        <div className={"user-search-box"}>
          <input {...getInputProps({
            className: 'form-control',
            id: id,
            type: 'search',
            role: 'searchbox'
          })} style={{marginBottom: '0'}} />
          <ul {...getMenuProps()} className={isOpen ? "users-visible" : ""} role='list'>
            { isOpen ? users.filter((user:FormattedUserHeader) => !inputValue
              || `${user.firstName} ${user.lastName}`.includes(inputValue)
              || user.userName.includes(inputValue))
                  .map((item, index) => (
                    <li key={`userSearchBox-${index}`} {...getItemProps({key:item.ownerId, index, item})}>
                      {<>
                        <a
                          href={`https://www.synapse.org/#!Profile:${item.ownerId}`}
                          target={"_blank"}
                          rel="noreferrer"
                          className={"user-profile-link"}
                        >{`@${item.userName}`}</a>
                        <span>
                          { item.firstName && <>{item.firstName}</> }
                          { item.lastName && <>{item.lastName}</> }
                        </span>
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