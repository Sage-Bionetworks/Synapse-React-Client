import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useListState } from '../../utils/hooks/useListState'
import { EntityBundle, EntityHeader } from '../../utils/synapseTypes'
import { EntityType } from '../../utils/synapseTypes/EntityType'

import { TreeView } from './tree/TreeView'
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex'
import { Button } from 'react-bootstrap'
import useGetEntityBundle from '../../utils/hooks/SynapseAPI/useEntityBundle'
import { SynapseClient } from '../..'
import { SYNAPSE_ENTITY_ID_REGEX } from '../../utils/functions/RegularExpressions'
import {
  EntityFinderDetails,
  EntityFinderDetailsConfiguration,
  EntityFinderDetailsConfigurationType,
} from './details/EntityFinderDetails'
import { CSSTransition } from 'react-transition-group'

// Create a client
const queryClient = new QueryClient()

export type EntityIdAndVersion = {
  entityId: string
  entityVersion?: number
}

const EntityPathDisplay: React.FunctionComponent<{
  sessionToken: string
  entity: EntityIdAndVersion
  toggleSelection: (entity: EntityIdAndVersion) => void
}> = ({ sessionToken, entity, toggleSelection }) => {
  const { data: bundle } = useGetEntityBundle(
    sessionToken,
    entity.entityId,
    { includeEntity: true, includeEntityPath: true },
    entity.entityVersion,
  )

  const [text, setText] = useState('')

  useEffect(() => {
    if (bundle?.path?.path) {
      if (bundle.path.path.length < 5) {
        // Show the full path from project to entity
        setText(
          bundle.path?.path
            .slice(1)
            .map(header => header.name)
            .join('/'),
        )
      } else {
        // Truncate the path, showing only project, parent, and self
        setText(
          bundle.path.path[1].name +
            '/.../' +
            bundle.path.path
              .slice(bundle.path.path.length - 2)
              .map(header => header.name)
              .join('/'),
        )
      }
    }
  }, [bundle])

  return (
    <>
      <span
        style={{ margin: '5px' }}
        onClick={() => {
          toggleSelection(entity)
        }}
      >
        <FontAwesomeIcon size={'sm'} icon={'times'} />
      </span>
      <span>{text}</span>
      {entity.entityVersion && <span> (Version {entity.entityVersion})</span>}
    </>
  )
}

type EntityFinderProps = {
  sessionToken: string
  initialContainerId: string // the initial entity container that should be open
  showTypes: EntityType[]
  selectableTypes?: EntityType[]
  confirmCopy: string // The text to display in the button
  onConfirm: (selectedEntityIds: EntityIdAndVersion[]) => void // returns the list of selected entity IDs
  confirmPrecheck?: (
    selectedEntityIds: EntityIdAndVersion[],
  ) => Promise<{ canPerformAction: boolean; failureCopy: string }>
  selectMultiple?: boolean
  allowSelectionFor?: (header: EntityHeader, bundle?: EntityBundle) => boolean // TODO: Define additional criteria that prevents an entity from being selected.
  // other names: `enableSelectionFilter`
}
export const EntityFinder: React.FunctionComponent<EntityFinderProps> = ({
  sessionToken,
  initialContainerId,
  showTypes,
  selectableTypes = Object.values(EntityType),
  confirmCopy,
  onConfirm,
  confirmPrecheck = () => {
    return Promise.resolve({ canPerformAction: true, failureCopy: '' })
  },
  selectMultiple = false,
}) => {
  const [selectedEntities, setSelectedEntities] = useState<
    EntityIdAndVersion[]
  >([])

  const [searchActive, setSearchActive] = useState(false)
  const [searchTerms, setSearchTerms] = useState<string[]>()
  const [searchByIdResults, setSearchByIdResults] = useState<EntityHeader[]>([])
  const [canPerformAction, setCanPerformAction] = useState<boolean>(false)
  const [
    configFromTreeView,
    setConfigFromTreeView,
  ] = useState<EntityFinderDetailsConfiguration>()

  const isSelected = (entity: EntityIdAndVersion) => {
    return selectedEntities.some(
      s =>
        s.entityId === entity.entityId &&
        s.entityVersion === entity.entityVersion,
    )
  }

  const otherVersionSelected = (entity: EntityIdAndVersion) => {
    return selectedEntities.some(
      s =>
        s.entityId === entity.entityId &&
        s.entityVersion !== entity.entityVersion,
    )
  }

  const toggleSelection = (entity: EntityIdAndVersion) => {
    if (isSelected(entity)) {
      // remove from selection
      setSelectedEntities(
        selectedEntities.filter(e => e.entityId !== entity.entityId),
      )
    } else if (otherVersionSelected(entity)) {
      // replace with selected version
      setSelectedEntities([
        ...selectedEntities.filter(e => e.entityId !== entity.entityId),
        entity,
      ])
    } else {
      // add to selection
      if (!selectMultiple) {
        setSelectedEntities([entity])
      } else {
        setSelectedEntities([
          ...selectedEntities.filter(s => s.entityId !== entity.entityId),
          entity,
        ])
      }
    }
  }

  useEffect(() => {
    if (selectedEntities.length > 0) {
      confirmPrecheck(selectedEntities).then(result => {
        setCanPerformAction(result.canPerformAction)
      })
    } else {
      setCanPerformAction(false)
    }
  }, [selectedEntities, confirmPrecheck])

  useEffect(() => {
    if (searchTerms?.length === 1) {
      const synIdMatch = searchTerms[0].match(SYNAPSE_ENTITY_ID_REGEX)
      if (synIdMatch) {
        SynapseClient.getEntityHeaders(
          [
            {
              targetId: synIdMatch[1],
              targetVersionNumber: synIdMatch[2]
                ? parseInt(synIdMatch[2])
                : undefined,
            },
          ],
          sessionToken,
        ).then(response => {
          setSearchByIdResults(response.results)
        })
      }
    } else {
      setSearchByIdResults([])
    }
  }, [searchTerms])

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bootstrap-4-backport EntityFinder">
        <div style={{ display: 'flex', justifyContent: 'right' }}>
          <div className="EntityFinder__SearchContainer">
            <div className="EntityFinder__SearchContainer__SearchButton">
              <FontAwesomeIcon
                size={'sm'}
                icon={'search'}
                onClick={() => setSearchActive(true)}
              />
            </div>
            <CSSTransition
              in={searchActive}
              timeout={200}
              mountOnEnter={true}
              unmountOnExit={true}
              classNames="search-active-container"
            >
              <div className="EntityFinder__SearchContainer__SearchBoxContainer">
                <input
                  className="EntityFinder__SearchContainer__SearchBoxContainer__SearchBox"
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
              </div>
            </CSSTransition>
            <FontAwesomeIcon
              style={searchActive ? {} : { width: '0px' }}
              size={'sm'}
              icon={'times'}
              onClick={() => {
                setSearchActive(false)
                setSearchTerms(undefined)
              }}
            />
          </div>
        </div>
        {searchActive && (
          <EntityFinderDetails
            sessionToken={sessionToken}
            configuration={
              searchByIdResults && searchByIdResults.length > 0
                ? {
                    type: EntityFinderDetailsConfigurationType.HEADER_LIST,
                    headerList: searchByIdResults,
                  }
                : {
                    type: EntityFinderDetailsConfigurationType.ENTITY_SEARCH,
                    query: {
                      queryTerm: searchTerms,
                    },
                  }
            }
            showVersionSelection={true}
            selectMultiple={selectMultiple}
            selected={selectedEntities}
            includeTypes={showTypes}
            selectableTypes={selectableTypes}
            toggleSelection={toggleSelection}
          />
        )}
        {
          <div style={searchActive ? { display: 'none' } : {}}>
            <div className="EntityViewReflexContainer">
              <ReflexContainer orientation="vertical">
                <ReflexElement minSize={200} size={350}>
                  <TreeView
                    sessionToken={sessionToken}
                    setDetailsViewConfiguration={setConfigFromTreeView}
                    showFakeRootNode={true}
                    showDropdown={true}
                    initialContainer={initialContainerId}
                  ></TreeView>
                </ReflexElement>
                <ReflexSplitter></ReflexSplitter>
                <ReflexElement>
                  {configFromTreeView && (
                    <EntityFinderDetails
                      sessionToken={sessionToken}
                      configuration={configFromTreeView}
                      showVersionSelection={true}
                      selected={selectedEntities}
                      includeTypes={showTypes}
                      selectableTypes={selectableTypes}
                      selectMultiple={selectMultiple}
                      toggleSelection={toggleSelection}
                    />
                  )}
                </ReflexElement>
              </ReflexContainer>
            </div>
          </div>
        }
        <div style={{ margin: '15px 0px' }}>
          Selected:
          {selectedEntities.length > 0 ? (
            <div>
              {selectedEntities.map(e => (
                <div
                  key={`${e.entityId}${
                    e.entityVersion ? `.${e.entityVersion}` : ''
                  }`}
                >
                  <EntityPathDisplay
                    sessionToken={sessionToken}
                    entity={e}
                    toggleSelection={toggleSelection}
                  ></EntityPathDisplay>
                </div>
              ))}
            </div>
          ) : (
            ' None'
          )}
        </div>
        <hr></hr>
        <div style={{ textAlign: 'right' }}>
          <Button
            style={{ margin: '10px', borderRadius: '0px' }}
            variant="light"
            onClick={() => onConfirm(selectedEntities)}
          >
            {'CANCEL'}
          </Button>
          <Button
            style={{ margin: '10px', borderRadius: '0px' }}
            variant="primary-500"
            disabled={!canPerformAction}
            onClick={() => onConfirm(selectedEntities)}
          >
            {confirmCopy.toUpperCase()}
          </Button>
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default EntityFinder
