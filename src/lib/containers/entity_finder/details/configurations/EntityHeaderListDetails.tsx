import React from 'react'
import { EntityHeader, ProjectHeader } from '../../../../utils/synapseTypes'
import { DetailsView } from '../view/DetailsView'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'

type EntityHeaderListDetailsProps = EntityDetailsListSharedProps & {
  entityHeaders: (EntityHeader | ProjectHeader)[]
}

export const EntityHeaderListDetails: React.FunctionComponent<EntityHeaderListDetailsProps> = ({
  sessionToken,
  entityHeaders,
  showVersionSelection,
  selectColumnType,
  selected,
  includeTypes,
  selectableTypes,
  toggleSelection,
}) => {
  return (
    <DetailsView
      sessionToken={sessionToken}
      entities={entityHeaders}
      queryStatus={'success'}
      queryIsFetching={false}
      hasNextPage={false}
      showVersionSelection={showVersionSelection}
      selectColumnType={selectColumnType}
      selected={selected}
      showTypes={includeTypes}
      selectableTypes={selectableTypes}
      toggleSelection={toggleSelection}
    ></DetailsView>
  )
}
