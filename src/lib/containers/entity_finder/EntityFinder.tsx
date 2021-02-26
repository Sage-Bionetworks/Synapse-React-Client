import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex'
import 'react-reflex/styles.css'
import { CSSTransition } from 'react-transition-group'
import { SynapseClient } from '../../utils'
import { SYNAPSE_ENTITY_ID_REGEX } from '../../utils/functions/RegularExpressions'
import useGetEntityBundle from '../../utils/hooks/SynapseAPI/useEntityBundle'
import { EntityHeader, Reference } from '../../utils/synapseTypes'
import { EntityType } from '../../utils/synapseTypes/EntityType'
import {
  EntityFinderDetails,
  EntityFinderDetailsConfiguration,
  EntityFinderDetailsConfigurationType,
} from './details/EntityFinderDetails'
import { TreeView } from './tree/TreeView'

library.add(faTimes, faSearch)

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000, // 30s
      retry: false, // SynapseClient knows which queries to retry
    },
  },
})

const EntityPathDisplay: React.FunctionComponent<{
  sessionToken: string
  entity: Reference
  toggleSelection: (entity: Reference) => void
}> = ({ sessionToken, entity, toggleSelection }) => {
  const { data: bundle } = useGetEntityBundle(
    sessionToken,
    entity.targetId,
    { includeEntity: true, includeEntityPath: true },
    entity.targetVersionNumber,
  )

  const [entityName, setEntityName] = useState('')
  const [pathString, setPathString] = useState('')

  useEffect(() => {
    if (bundle?.path?.path) {
      setEntityName(bundle.path.path[bundle.path.path.length - 1].name)
      const path = bundle.path.path.slice(1, bundle.path.path.length - 1) // drop the first element, which is always syn4489 "root"

      if (path.length < 4) {
        // Show the full path from project to entity
        setPathString(path.map(header => header.name).join('/'))
      } else {
        // Truncate the path, showing only project, parent, and self
        setPathString(
          path[0].name + // Project
            '/.../' +
            path
              .slice(path.length - 1) // drop everything except parent and self
              .map(header => header.name)
              .join('/'),
        )
      }
    }
  }, [bundle])

  return (
    <>
      <span
        style={{ margin: '5px', cursor: 'pointer' }}
        onClick={() => {
          toggleSelection(entity)
        }}
      >
        <FontAwesomeIcon
          style={{ marginBottom: '3px' }}
          size={'sm'}
          icon={faTimes}
        />
      </span>
      <span>{pathString ? pathString + '/' : ''}</span>
      <span style={{ fontWeight: 'bold' }}>{entityName}</span>
      {entity.targetVersionNumber && (
        <span> (Version {entity.targetVersionNumber})</span>
      )}
    </>
  )
}

type EntityFinderProps = {
  sessionToken: string
  initialContainerId: string // The SynID of the entity that should open by default. This dictates the 'Current Project'
  selectMultiple: boolean
  onSelectedChange: (selected: Reference[]) => void
  showVersionSelection?: boolean
  showTypes: EntityType[]
  selectableTypes?: EntityType[]
}
export const EntityFinder: React.FunctionComponent<EntityFinderProps> = ({
  sessionToken,
  initialContainerId,
  selectMultiple,
  onSelectedChange,
  showVersionSelection = true,
  showTypes,
  selectableTypes = Object.values(EntityType),
}) => {
  const [selectedEntities, setSelectedEntities] = useState<Reference[]>([])

  const [searchActive, setSearchActive] = useState(false)
  const [searchTerms, setSearchTerms] = useState<string[]>()
  const [searchByIdResults, setSearchByIdResults] = useState<EntityHeader[]>([])
  const [
    configFromTreeView,
    setConfigFromTreeView,
  ] = useState<EntityFinderDetailsConfiguration>()

  const isSelected = (entity: Reference) => {
    return selectedEntities.some(
      s =>
        s.targetId === entity.targetId &&
        s.targetVersionNumber === entity.targetVersionNumber,
    )
  }

  const otherVersionSelected = (entity: Reference) => {
    return selectedEntities.some(
      s =>
        s.targetId === entity.targetId &&
        s.targetVersionNumber !== entity.targetVersionNumber,
    )
  }

  const toggleSelection = (entity: Reference) => {
    if (isSelected(entity)) {
      // remove from selection
      setSelectedEntities(
        selectedEntities.filter(e => e.targetId !== entity.targetId),
      )
    } else if (otherVersionSelected(entity)) {
      // replace with selected version
      setSelectedEntities([
        ...selectedEntities.filter(e => e.targetId !== entity.targetId),
        entity,
      ])
    } else {
      // add to selection
      if (!selectMultiple) {
        setSelectedEntities([entity])
      } else {
        setSelectedEntities([
          ...selectedEntities.filter(s => s.targetId !== entity.targetId),
          entity,
        ])
      }
    }
  }

  useEffect(() => {
    onSelectedChange(selectedEntities)
  }, [onSelectedChange, selectedEntities])

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
  }, [sessionToken, searchTerms])

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bootstrap-4-backport EntityFinder">
        <div style={{ display: 'flex', justifyContent: 'right' }}>
          <div className="EntityFinder__SearchContainer">
            <div className="EntityFinder__SearchContainer__SearchButton">
              <FontAwesomeIcon
                size={'sm'}
                icon={faSearch}
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
              icon={faTimes}
              onClick={() => {
                setSearchActive(false)
                setSearchTerms(undefined)
              }}
            />
          </div>
        </div>
        {/* We have a separate Details component for search in order to preserve state in the other component between searches */}
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
            showVersionSelection={showVersionSelection}
            selectColumnType={selectMultiple ? 'checkbox' : 'radio'}
            selected={selectedEntities}
            includeTypes={showTypes}
            selectableTypes={selectableTypes}
            toggleSelection={toggleSelection}
          />
        )}
        {
          <div style={searchActive ? { display: 'none' } : {}}>
            <div className="EntityViewReflexContainer">
              <ReflexContainer orientation="vertical" windowResizeAware>
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
                <ReflexElement minSize={400}>
                  {configFromTreeView && (
                    <EntityFinderDetails
                      sessionToken={sessionToken}
                      configuration={configFromTreeView}
                      showVersionSelection={showVersionSelection}
                      selected={selectedEntities}
                      includeTypes={showTypes}
                      selectableTypes={selectableTypes}
                      selectColumnType={selectMultiple ? 'checkbox' : 'radio'}
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
                  key={`${e.targetId}${
                    e.targetVersionNumber ? `.${e.targetVersionNumber}` : ''
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
      </div>
    </QueryClientProvider>
  )
}

export default EntityFinder
