import { Skeleton } from '@material-ui/lab'
import React from 'react'
import { components } from 'react-select'
import AsyncSelect from 'react-select/async'
import { SelectComponents } from 'react-select/src/components'
import { SynapseClient } from '../../utils'
import useGetAccessRequirement from '../../utils/hooks/SynapseAPI/dataaccess/useGetAccessRequirement'
import { useSynapseContext } from '../../utils/SynapseContext'

export type AccessRequirementSearchBoxProps = {
  initialId?: string | number
  onChange: (accessRequirementId?: string | undefined) => void
  placeholder?: string
}

export function getOptionLabel(id: string | number, name: string) {
  if (id.toString() === name) {
    return name
  } else {
    return `${name} (${id})`
  }
}

const customSelectComponents: Partial<
  SelectComponents<
    {
      id: string | number
      value: string | number
      label: string
    },
    false
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
}

export default function AccessRequirementSearchBox(
  props: AccessRequirementSearchBoxProps,
) {
  const { initialId: initialId, onChange, placeholder } = props
  const { accessToken } = useSynapseContext()
  const { data: initialAccessRequirement, isLoading: isLoadingInitialAR } =
    useGetAccessRequirement(initialId!, {
      enabled: !!initialId,
    })

  async function loadOptions(inputValue: string) {
    // Check to see if the entered text is an AR ID
    const parsedId = parseInt(inputValue)
    let data: Array<{ id: string | number; name: string }> | undefined =
      undefined
    if (parsedId) {
      data = [
        await SynapseClient.getAccessRequirementById(accessToken, parsedId),
      ]
    }

    // If the input wasn't an integer, or didn't match an existing AR ID, then search ARs
    if (!data) {
      data = (
        await SynapseClient.searchAccessRequirements(accessToken, {
          nameContains: inputValue,
        })
      )?.results
    }

    // Map the AR(s) to options for the select input component
    return (
      data?.map(item => ({
        id: item.id.toString(),
        value: item.id.toString(),
        label: getOptionLabel(item.id, item.name),
      })) ?? []
    )
  }

  if (initialId && isLoadingInitialAR) {
    return <Skeleton width="100%" />
  }

  return (
    <AsyncSelect
      className="bootstrap-4-backport"
      defaultInputValue={
        initialId
          ? getOptionLabel(
              initialId,
              initialAccessRequirement?.name ?? initialId.toString(),
            )
          : undefined
      }
      defaultOptions={
        initialId
          ? [
              {
                id: initialId,
                value: initialId,
                label: getOptionLabel(
                  initialId,
                  initialAccessRequirement?.name ?? initialId.toString(),
                ),
              },
            ]
          : true
      }
      cacheOptions
      isClearable
      styles={{
        // Bootstrap's form-control class overrides the display value, manually set to flex (the default without Bootstrap)
        control: styles => ({ ...styles, display: 'flex !important' }),
      }}
      components={customSelectComponents}
      loadOptions={loadOptions}
      onChange={option => {
        onChange(option?.id.toString())
      }}
      placeholder={placeholder}
    />
  )
}
