import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Clear } from '@material-ui/icons'
import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { Button, FormControl } from 'react-bootstrap'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex'
import 'react-reflex/styles.css'
import { SizeMe } from 'react-sizeme'
import ReactTooltip from 'react-tooltip'
import { SynapseClient } from '../../utils'
import { SYNAPSE_ENTITY_ID_REGEX } from '../../utils/functions/RegularExpressions'
import useGetEntityBundle from '../../utils/hooks/SynapseAPI/useEntityBundle'
import { EntityHeader, Reference } from '../../utils/synapseTypes'
import { EntityType } from '../../utils/synapseTypes/EntityType'
import { ErrorBanner } from '../ErrorBanner'
import { BreadcrumbItem, Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs'
import {
  EntityDetailsList,
  EntityDetailsListDataConfiguration,
  EntityDetailsListDataConfigurationType,
} from './details/EntityDetailsList'
import { NodeAppearance } from './tree/TreeNode'
import { FinderScope, TreeView } from './tree/TreeView'

library.add(faTimes, faSearch, faCircle)

const DEFAULT_VISIBLE_TYPES = [EntityType.PROJECT, EntityType.FOLDER]

const ErrorFallback: React.FunctionComponent<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div role="alert" className="SRC-marginBottomTop">
      <ErrorBanner error={error}></ErrorBanner>
      <Button onClick={resetErrorBoundary}>Reload</Button>
    </div>
  )
}
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
  const ENTITY_PATH_TOOLTIP_ID = `EntityPathDisplayReactTooltip_${entity.targetId}`

  const { data: bundle } = useGetEntityBundle(
    sessionToken,
    entity.targetId,
    { includeEntity: true, includeEntityPath: true },
    entity.targetVersionNumber,
  )

  const [entityName, setEntityName] = useState('')
  const [fullPath, setFullPath] = useState('')
  const [displayedPath, setDisplayedPath] = useState('')

  useEffect(() => {
    if (bundle?.path?.path) {
      setEntityName(bundle.path.path[bundle.path.path.length - 1].name)
      const path = bundle.path.path.slice(1, bundle.path.path.length - 1) // drop the first element, which is always syn4489 "root"
      const _fullPath = path.map(header => header.name).join('/')
      setFullPath(_fullPath)
      if (path.length < 4) {
        // Show the full path from project to entity
        setDisplayedPath(_fullPath)
      } else {
        // Truncate the path, showing only project, parent, and self
        setDisplayedPath(
          path[0].name + // Project
            '/…/' +
            path
              .slice(path.length - 1) // drop everything except parent and self
              .map(header => header.name)
              .join('/'),
        )
      }
    }
  }, [bundle])

  return (
    <div className="EntityFinder__Selected__Row">
      <ReactTooltip id={ENTITY_PATH_TOOLTIP_ID} delayShow={500} place={'top'} />
      <span
        data-for={ENTITY_PATH_TOOLTIP_ID}
        data-tip={`${fullPath}/${entityName}`}
      >
        {displayedPath ? displayedPath + '/' : ''}
      </span>
      <span className="EntityFinder__Selected__Row__EntityName">
        {entityName}
      </span>
      {entity.targetVersionNumber && (
        <span> (Version {entity.targetVersionNumber})</span>
      )}
      <Clear
        className="EntityFinder__Selected__Row__DeselectButton"
        onClick={() => {
          toggleSelection(entity)
        }}
      />
    </div>
  )
}

export type EntityFinderProps = {
  sessionToken: string
  /** Whether or not it is possible to select multiple entities */
  selectMultiple: boolean
  /** Callback invoked when the selection changes */
  onSelectedChange: (selected: Reference[]) => void
  /** The initial appearance of the entity finder. Possible values include "Current Project", "All Projects", "Projects Created By Me", "My Favorites" */
  initialScope: FinderScope
  /** Required if `initialScope` is The SynID of the entity that should open by default. This dictates the 'Current Project' */
  initialContainerId: string
  /** Whether or not versions may be specified when selecting applicable entities */
  showVersionSelection?: boolean
  /** The entity types to show in the details view (right pane) */
  visibleTypesInList: EntityType[]
  /** The entity types that may be selected. Types in `visibleTypesInList` that are not in `selectableTypes` will appear as disabled options */
  selectableTypes?: EntityType[]
  /** The types to show in the tree used to navigate. */
  visibleTypesInTree?: EntityType[]
  /** The text to show before the list of selected entities */
  selectedCopy?: string
  /** Whether to show only the tree, which will be used to make selections */
  treeOnly?: boolean
}

export const EntityFinder: React.FunctionComponent<EntityFinderProps> = ({
  sessionToken,
  initialScope,
  initialContainerId,
  selectMultiple,
  onSelectedChange,
  showVersionSelection = true,
  visibleTypesInList,
  selectableTypes = Object.values(EntityType),
  selectedCopy = 'Selected',
  visibleTypesInTree = DEFAULT_VISIBLE_TYPES,
  treeOnly = false,
}: EntityFinderProps) => {
  const [searchActive, setSearchActive] = useState(false)
  const [searchTerms, setSearchTerms] = useState<string[]>()
  const [breadcrumbsProps, setBreadcrumbsProps] = useState<BreadcrumbsProps>({
    items: [],
  })
  const [searchByIdResults, setSearchByIdResults] = useState<EntityHeader[]>([])
  const [
    configFromTreeView,
    setConfigFromTreeView,
  ] = useState<EntityDetailsListDataConfiguration>({
    type: EntityDetailsListDataConfigurationType.PROMPT,
  })

  const setBreadcrumbs = useCallback(
    (items: BreadcrumbItem[]) => {
      setBreadcrumbsProps({
        items,
      })
    },
    [setBreadcrumbsProps, sessionToken],
  )

  function isSelected(entity: Reference, selected: Reference[]): boolean {
    return selected.some(
      s =>
        s.targetId === entity.targetId &&
        s.targetVersionNumber === entity.targetVersionNumber,
    )
  }

  function otherVersionSelected(
    entity: Reference,
    selected: Reference[],
  ): boolean {
    return selected.some(
      s =>
        s.targetId === entity.targetId &&
        s.targetVersionNumber !== entity.targetVersionNumber,
    )
  }

  function entitySelectionReducer(
    selected: Reference[],
    toggledReference: Reference,
  ): Reference[] {
    if (isSelected(toggledReference, selected)) {
      // remove from selection
      return selected.filter(e => e.targetId !== toggledReference.targetId)
    } else if (otherVersionSelected(toggledReference, selected)) {
      // Currently don't allow selecting two versions of the same entity
      // replace previous selected version with new selected version
      return [
        ...selected.filter(e => e.targetId !== toggledReference.targetId),
        toggledReference,
      ]
    } else {
      // add to selection
      if (!selectMultiple) {
        return [toggledReference]
      } else {
        return [
          ...selected.filter(s => s.targetId !== toggledReference.targetId),
          toggledReference,
        ]
      }
    }
  }

  const [selectedEntities, toggleSelection] = useReducer(
    entitySelectionReducer,
    [] as Reference[],
  )

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
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="bootstrap-4-backport EntityFinder">
          <div className="EntityFinder__Search">
            {searchActive ? (
              <>
                <FontAwesomeIcon
                  size={'sm'}
                  icon={faSearch}
                  style={{ position: 'relative', left: '22px', top: '1px' }}
                />
                <FormControl
                  autoFocus={true}
                  className="EntityFinder__Search__Input"
                  type="search"
                  placeholder="Search by name, Wiki contents, or Synapse ID"
                  onKeyDown={(event: any) => {
                    if (event.key === 'Enter') {
                      if (event.target.value === '') {
                        setSearchTerms(undefined)
                      } else {
                        setSearchTerms([event.target.value.trim()])
                      }
                    }
                  }}
                ></FormControl>
                <FontAwesomeIcon
                  size={'sm'}
                  icon={faTimes}
                  style={{
                    cursor: 'pointer',
                    position: 'relative',
                    left: '-20px',
                    marginRight: '-8px',
                  }}
                  onClick={() => {
                    setSearchActive(false)
                    setSearchTerms(undefined)
                  }}
                />
              </>
            ) : (
              <Button
                variant="gray-primary-500"
                className="EntityFinder__Search__SearchButton"
                onClick={() => setSearchActive(true)}
              >
                <FontAwesomeIcon size={'sm'} icon={faSearch} />
                Search all of Synapse
              </Button>
            )}
          </div>
          {/* We have a separate Details component for search in order to preserve state in the other component between searches */}
          {searchActive && (
            <EntityDetailsList
              sessionToken={sessionToken}
              configuration={
                searchByIdResults && searchByIdResults.length > 0
                  ? {
                      type: EntityDetailsListDataConfigurationType.HEADER_LIST,
                      headerList: searchByIdResults,
                    }
                  : {
                      type:
                        EntityDetailsListDataConfigurationType.ENTITY_SEARCH,
                      query: {
                        queryTerm: searchTerms,
                      },
                    }
              }
              showVersionSelection={showVersionSelection}
              selectColumnType={selectMultiple ? 'checkbox' : 'radio'}
              selected={selectedEntities}
              includeTypes={visibleTypesInList}
              selectableTypes={selectableTypes}
              toggleSelection={toggleSelection}
            />
          )}
          {
            <div style={searchActive ? { display: 'none' } : {}}>
              {treeOnly ? (
                <div style={{ width: '550px', margin: 'auto' }}>
                  <TreeView
                    sessionToken={sessionToken}
                    toggleSelection={toggleSelection}
                    setDetailsViewConfiguration={() => {}}
                    showDropdown={true}
                    visibleTypes={visibleTypesInTree}
                    initialScope={initialScope}
                    initialContainerId={initialContainerId}
                    showFakeRoot={false}
                    nodeAppearance={NodeAppearance.SELECT}
                    setBreadcrumbItems={() => {}}
                  />
                </div>
              ) : (
                <div className="EntityViewReflexContainer">
                  <SizeMe>
                    {({ size }) => (
                      <ReflexContainer
                        key={(!!size.width).toString()}
                        orientation="vertical"
                        windowResizeAware
                      >
                        <ReflexElement
                          className="TreeViewReflexElement"
                          minSize={200}
                          size={275}
                        >
                          <TreeView
                            sessionToken={sessionToken}
                            toggleSelection={() => {}}
                            setDetailsViewConfiguration={setConfigFromTreeView}
                            showDropdown={true}
                            visibleTypes={visibleTypesInTree}
                            initialScope={initialScope}
                            initialContainerId={initialContainerId}
                            nodeAppearance={NodeAppearance.BROWSE}
                            setBreadcrumbItems={setBreadcrumbs}
                          />
                        </ReflexElement>
                        <ReflexSplitter></ReflexSplitter>
                        <ReflexElement
                          className="DetailsViewReflexElement"
                          minSize={400}
                        >
                          <EntityDetailsList
                            sessionToken={sessionToken}
                            configuration={configFromTreeView}
                            showVersionSelection={showVersionSelection}
                            selected={selectedEntities}
                            includeTypes={visibleTypesInList}
                            selectableTypes={selectableTypes}
                            selectColumnType={
                              selectMultiple ? 'checkbox' : 'radio'
                            }
                            toggleSelection={toggleSelection}
                          />
                          <Breadcrumbs {...breadcrumbsProps} />
                        </ReflexElement>
                      </ReflexContainer>
                    )}
                  </SizeMe>
                </div>
              )}
            </div>
          }
          {selectedEntities.length > 0 && (
            <div className="EntityFinder__Selected">
              <h3>{selectedCopy}</h3>
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
            </div>
          )}
        </div>
      </ErrorBoundary>
    </QueryClientProvider>
  )
}

export default EntityFinder
