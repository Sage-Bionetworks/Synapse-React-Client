import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useListState } from '../../utils/hooks/useListState'
import { EntityBundle, EntityHeader } from '../../utils/synapseTypes'
import { EntityType } from '../../utils/synapseTypes/EntityType'
import {
  DetailsView,
  EntityFinderDetailsViewConfiguration,
  EntityFinderViewConfigurationType as EntityFinderDetailsViewConfigurationType,
} from './EntityFinderDetailsView'
import { TreeView } from './EntityFinderTreeView'
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex'

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
  const [
    configFromTreeView,
    setConfigFromTreeView,
  ] = useState<EntityFinderDetailsViewConfiguration>()

  const onSelect = (entity: EntityIdAndVersion): void => {
    if (!selectMultiple) {
      appendToSelectedEntities(entity)
    } else {
      setSelectedEntities([
        ...selectedEntities.filter(s => s.entityId !== entity.entityId),
        entity,
      ])
    }
  }

  const onDeselect = (entity: EntityIdAndVersion): void => {
    if (selectedEntities.map(s => s.entityId).includes(entity.entityId)) {
      setSelectedEntities(
        selectedEntities.filter(e => e.entityId !== entity.entityId),
      )
    }
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bootstrap-4-backport EntityFinder">
        <span className="EntityFinder__SearchContainer">
          <FontAwesomeIcon size={'sm'} icon={'search'} />
          <input
            className="EntityFinder__SearchContainer__SearchBox"
            type="search"
            placeholder="Search all of Synapse"
            onKeyDown={(event: any) => {
              if (event.key === 'Enter') {
                if (event.target.value === '') {
                  setSearchTerms(undefined)
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
              type: EntityFinderDetailsViewConfigurationType.ENTITY_SEARCH,
              query: {
                queryTerm: searchTerms,
                size: 30,
              },
            }}
            showVersionSelection={true}
            selectMultiple={selectMultiple}
            selected={selectedEntities}
            showTypes={[
              EntityType.PROJECT,
              EntityType.TABLE,
              EntityType.FOLDER,
              EntityType.FILE,
              EntityType.LINK,
              EntityType.ENTITY_VIEW,
            ]}
            disableTypes={[
              EntityType.TABLE,
              EntityType.FILE,
              EntityType.LINK,
              EntityType.ENTITY_VIEW,
            ]}
            onSelect={onSelect}
            onDeselect={onDeselect}
          />
        )}
        {
          <div style={searchTerms ? { display: 'none' } : {}}>
            <div className="EntityViewReflexContainer">
              <ReflexContainer orientation="vertical">
                <ReflexElement minSize={200} size={350}>
                  <TreeView
                    sessionToken={sessionToken}
                    setDetailsViewConfiguration={setConfigFromTreeView}
                    showDetailsView={true}
                    showFakeRootNode={true}
                    showDropdown={true}
                    initialContainer={initialContainerId}
                  ></TreeView>
                </ReflexElement>
                <ReflexSplitter></ReflexSplitter>
                <ReflexElement>
                  {configFromTreeView && (
                    <DetailsView
                      sessionToken={sessionToken}
                      configuration={configFromTreeView}
                      showVersionSelection={true}
                      selected={selectedEntities}
                      showTypes={[
                        EntityType.PROJECT,
                        EntityType.TABLE,
                        EntityType.FOLDER,
                        EntityType.FILE,
                        EntityType.LINK,
                        EntityType.ENTITY_VIEW,
                      ]}
                      disableTypes={[
                        EntityType.TABLE,
                        EntityType.FILE,
                        EntityType.LINK,
                        EntityType.ENTITY_VIEW,
                      ]}
                      selectMultiple={selectMultiple}
                      onSelect={onSelect}
                      onDeselect={onDeselect}
                    ></DetailsView>
                  )}
                </ReflexElement>
              </ReflexContainer>
            </div>
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
