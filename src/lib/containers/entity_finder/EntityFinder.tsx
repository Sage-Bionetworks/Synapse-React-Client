import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { FormControl } from 'react-bootstrap'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SYNAPSE_ENTITY_ID_REGEX } from '../../utils/functions/RegularExpressions'
import { useListState } from '../../utils/hooks/useListState'
import { EntityBundle, EntityHeader } from '../../utils/synapseTypes'
import { EntityType } from '../../utils/synapseTypes/EntityType'
import {
  DetailsView,
  EntityFinderViewConfigurationType,
} from './EntityFinderDetailsView'
import { TreeView } from './EntityFinderTreeView'

// Create a client
const queryClient = new QueryClient()

export type EntityIdAndVersion = {
  entityId: string
  entityVersion?: number
}

// type CheckCriteriaEvent = 'finder' | 'select' // optimization idea (premature)
type EntityFinderProps = {
  sessionToken: string
  initialContainerId: string // the initial entity container that should be open
  confirmCopy: string // The text to display in the button
  onConfirm: (selectedEntityIds: EntityIdAndVersion[]) => void // returns the list of selected entity IDs
  selectMultiple?: boolean
  allowSelectionFor?: (header: EntityHeader, bundle?: EntityBundle) => boolean // TODO: Define additional criteria that prevents an entity from being selected.
  // other names: `enableSelectionFilter`
}
export const EntityFinder: React.FunctionComponent<EntityFinderProps> = ({
  sessionToken,
  initialContainerId,
  selectMultiple = false,
}) => {
  const {
    list: selectedEntities,
    appendToList: appendToSelectedEntities,
    setList: setSelectedEntities,
  } = useListState<EntityIdAndVersion>([]) // synId(s)

  const [searchTerms, setSearchTerms] = useState<string[]>()

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bootstrap-4-backport EntityFinder">
        <span className="EntityFinder__SearchContainer">
          <FontAwesomeIcon size={'sm'} icon={'search'} />
          <input
            className="EntityFinder__SearchContainer__SearchBox"
            type="search"
            placeholder="Search all of Synapse"
            onKeyDown={event => {
              if (event.key === 'Enter') {
                if (event.target.value === '') {
                  setSearchTerms(null)
                } else {
                  setSearchTerms(event.target.value.split(' '))
                }
              }
            }}
          ></input>
        </span>

        {searchTerms && (
          <DetailsView
            sessionToken={sessionToken}
            configuration={{
              type: EntityFinderViewConfigurationType.ENTITY_SEARCH,
              query: {
                queryTerm: searchTerms,
                size: 30,
              },
            }}
            showVersionSelection={true}
            selected={selectedEntities}
            onSelect={() => {}}
            onDeselect={() => {}}
          />
        )}
        {
          <div style={searchTerms ? { display: 'none' } : {}}>
            <TreeView
              sessionToken={sessionToken}
              selectMultiple={selectMultiple}
              selected={selectedEntities}
              setSelected={(selected: EntityIdAndVersion[]) => {
                setSelectedEntities(selected)
              }}
              showDetailsView={true}
              showFakeRootNode={true}
              showDropdown={true}
              initialContainer={initialContainerId}
              showTypesInDetailsView={[
                EntityType.TABLE,
                EntityType.FOLDER,
                EntityType.FILE,
                EntityType.LINK,
                EntityType.ENTITY_VIEW,
              ]}
            ></TreeView>
          </div>
        }

        {selectMultiple ? (
          <p>
            Selected entities:{' '}
            {selectedEntities
              .map(
                e =>
                  `${e.entityId}${
                    e.entityVersion ? `.${e.entityVersion}` : ''
                  }`,
              )
              .join(', ')}
          </p>
        ) : (
          <p>Selected:</p>
        )}
      </div>
    </QueryClientProvider>
  )
}

export default EntityFinder
