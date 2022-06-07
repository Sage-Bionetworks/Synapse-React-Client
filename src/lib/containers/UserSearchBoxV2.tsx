import { Skeleton } from '@material-ui/lab'
import * as React from 'react'
import { components, GroupTypeBase } from 'react-select'
import AsyncSelect from 'react-select/async'
import { SelectComponents } from 'react-select/src/components'
import { SynapseClient } from '../utils'
import useGetInfoFromIds from '../utils/hooks/useGetInfoFromIds'
import useTraceUpdate from '../utils/hooks/useTraceUpdate'
import { UserGroupHeader } from '../utils/synapseTypes'
import { TYPE_FILTER } from '../utils/synapseTypes/UserGroupHeader'
import UserOrTeamBadge from './UserOrTeamBadge'

export type UserSearchBoxProps = {
  /* id for the input tag */
  htmlId?: string
  /* The initial principal ID */
  defaultValue?: string
  onChange?: (
    principalId: string | null,
    header: UserGroupHeader | null,
  ) => void
  typeFilter?: TYPE_FILTER
  filterPredicate?: (item: UserGroupHeader) => boolean
  placeholder?: string
}

const customSelectComponents: Partial<
  SelectComponents<
    {
      id: string
      value: string
      label: string
      header: UserGroupHeader
    },
    false,
    GroupTypeBase<{
      id: string
      value: string
      label: string
      header: UserGroupHeader
    }>
  >
> = {
  Control: props => {
    return (
      <components.Control
        {...props}
        className={`form-control ${props.className ?? ''}`}
      />
    )
  },
  Option: props => {
    const { data, selectOption } = props
    return (
      <div
        {...props}
        onClick={() => selectOption(data)}
        style={{ padding: '5px 10px' }}
      >
        <UserOrTeamBadge
          userGroupHeader={data.header}
          disableHref={true}
          showFullName={true}
        />
      </div>
    )
  },
}

const UserSearchBoxV2: React.FC<UserSearchBoxProps> = props => {
  const {
    htmlId,
    defaultValue = null,
    onChange,
    filterPredicate,
    typeFilter,
    placeholder,
  } = props

  useTraceUpdate({
    htmlId,
    defaultValue,
    onChange,
    filterPredicate,
    typeFilter,
    placeholder,
  })

  const [defaultUserGroupHeader = undefined] =
    useGetInfoFromIds<UserGroupHeader>({
      ids: defaultValue ? [defaultValue] : [],
      type: 'USER_PROFILE',
    })

  async function loadOptions(inputValue: string) {
    let data: Array<UserGroupHeader> | undefined = undefined
    // If the input wasn't an integer, or didn't match an existing AR ID, then search ARs
    if (!data) {
      data = (await SynapseClient.getUserGroupHeaders(inputValue, typeFilter))
        ?.children
    }

    if (filterPredicate) {
      data = data.filter(filterPredicate)
    }

    // Map the AR(s) to options for the select input component
    return (
      data?.map(item => ({
        id: item.ownerId.toString(),
        value: item.ownerId.toString(),
        label: item.userName,
        header: item,
      })) ?? []
    )
  }

  if (defaultValue && defaultUserGroupHeader == null) {
    return <Skeleton width="100%" />
  }

  return (
    <AsyncSelect
      className="bootstrap-4-backport"
      defaultInputValue={
        defaultValue ? defaultUserGroupHeader!.userName : undefined
      }
      // defaultOptions={
      //   defaultValue
      //     ? [
      //         {
      //           id: defaultUserGroupHeader!.ownerId.toString(),
      //           value: defaultUserGroupHeader!.ownerId.toString(),
      //           label: defaultUserGroupHeader!.userName,
      //           header: defaultUserGroupHeader!,
      //         },
      //       ]
      //     : true
      // }
      id={htmlId}
      cacheOptions
      isClearable
      styles={{
        // Bootstrap's form-control class overrides the display value, manually set to flex (the default without Bootstrap)
        control: styles => ({ ...styles, display: 'flex !important' }),
      }}
      components={customSelectComponents}
      loadOptions={loadOptions}
      onChange={option => {
        if (onChange) {
          onChange(option?.id ?? null, option?.header ?? null)
        }
      }}
      placeholder={placeholder}
    />
  )
}

export default UserSearchBoxV2
