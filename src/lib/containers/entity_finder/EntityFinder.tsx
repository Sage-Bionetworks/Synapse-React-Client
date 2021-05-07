import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react'
import { Button, FormControl } from 'react-bootstrap'
import {
  ErrorBoundary,
  FallbackProps,
  useErrorHandler,
} from 'react-error-boundary'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex'
import 'react-reflex/styles.css'
import { SizeMe } from 'react-sizeme'
import Arrow from '../../assets/icons/Arrow'
import { SynapseClient } from '../../utils'
import { SYNAPSE_ENTITY_ID_REGEX } from '../../utils/functions/RegularExpressions'
import { EntityHeader, Reference } from '../../utils/synapseTypes'
import { EntityType } from '../../utils/synapseTypes/EntityType'
import { ErrorBanner } from '../ErrorBanner'
import { BreadcrumbItem, Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs'
import {
  EntityDetailsList,
  EntityDetailsListDataConfiguration,
  EntityDetailsListDataConfigurationType,
} from './details/EntityDetailsList'
import { SelectionPane } from './SelectionPane'
import { NodeAppearance } from './tree/TreeNode'
import { FinderScope, TreeView } from './tree/TreeView'

library.add(faTimes, faSearch)

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

export type EntityFinderProps = {
  /** Whether or not it is possible to select multiple entities */
  selectMultiple: boolean
  /** Callback invoked when the selection changes */
  onSelectedChange: (selected: Reference[]) => void
  /** The initial appearance of the entity finder. Possible values include "Current Project", "All Projects", "Projects Created By Me", "My Favorites" */
  initialScope: FinderScope
  /** The SynID of the 'Current Project'. If this is not a defined, then the scope cannot be "Current Project" */
  projectId?: string
  /** The SynID of the entity that should open by default. If this is a Syn ID, then it must be in the project specified in `projectId` */
  initialContainer: string | 'root' | null
  /** Whether or not versions may be specified when selecting applicable entities */
  showVersionSelection?: boolean
  /** The entity types to show in the details view (right pane). Any types specified in `selectableTypes` will automatically be included. */
  visibleTypesInList?: EntityType[]
  /** The entity types that may be selected. Types in `visibleTypesInList` that are not in `selectableTypes` will appear as disabled options. Only the types in `selectableTypes` will appear in search */
  selectableTypes?: EntityType[]
  /** The types to show in the tree used to navigate. If `treeOnly` is true, any types specified in `selectableTypes` will automatically be included. */
  visibleTypesInTree?: EntityType[]
  /** The text to show before the list of selected entities */
  selectedCopy?: string
  /** Whether to show only the tree. If `true`, the tree will be used to make selections */
  treeOnly?: boolean
}

export const EntityFinder: React.FunctionComponent<EntityFinderProps> = ({
  initialScope,
  projectId,
  initialContainer,
  selectMultiple,
  onSelectedChange,
  showVersionSelection = true,
  selectableTypes = Object.values(EntityType),
  visibleTypesInList = Object.values(EntityType),
  visibleTypesInTree = DEFAULT_VISIBLE_TYPES,
  selectedCopy = 'Selected',
  treeOnly = false,
}: EntityFinderProps) => {
  const [searchActive, setSearchActive] = useState(false)
  // The raw value of the search input box:
  const [searchInput, setSearchInput] = useState<string>()
  // The "parsed" search terms, which are only calculated when Enter is pressed:
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

  const searchInputRef = useRef<HTMLInputElement>(null)

  // If a type is selectable, it should be visible in the tree/list (depending on treeOnly)
  const selectableAndVisibleTypesInTree = useMemo(
    () => [...visibleTypesInTree, ...selectableTypes],
    [visibleTypesInTree, selectableTypes],
  )
  const selectableAndVisibleTypesInList = useMemo(
    () => [...visibleTypesInList, ...selectableTypes],
    [visibleTypesInList, selectableTypes],
  )

  const handleError = useErrorHandler()

  const setBreadcrumbs = useCallback(
    (items: BreadcrumbItem[]) => {
      setBreadcrumbsProps({
        items,
      })
    },
    [setBreadcrumbsProps],
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
    let result: Reference[] = []
    if (isSelected(toggledReference, selected)) {
      // remove from selection
      result = selected.filter(e => e.targetId !== toggledReference.targetId)
    } else if (otherVersionSelected(toggledReference, selected)) {
      // Currently don't allow selecting two versions of the same entity
      // replace previous selected version with new selected version
      result = [
        ...selected.filter(e => e.targetId !== toggledReference.targetId),
        toggledReference,
      ]
    } else {
      // add to selection
      if (!selectMultiple) {
        result = [toggledReference]
      } else {
        result = [
          ...selected.filter(s => s.targetId !== toggledReference.targetId),
          toggledReference,
        ]
      }
    }
    onSelectedChange(result)
    return result
  }

  const [selectedEntities, toggleSelection] = useReducer(
    entitySelectionReducer,
    [] as Reference[],
  )

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
        )
          .then(response => {
            setSearchByIdResults(response.results)
          })
          .catch(e => handleError(e))
      }
    } else {
      setSearchByIdResults([])
    }
  }, [searchTerms, handleError])

  const mainPanelClass = searchActive
    ? 'MainPanelSearch'
    : treeOnly
    ? 'MainPanelSinglePane'
    : 'MainPanelDualPane'

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="bootstrap-4-backport EntityFinder">
          <div className="EntityFinder__Search" data-active={searchActive}>
            <>
              {searchActive ? (
                <Button
                  variant="gray-primary-500"
                  onClick={() => {
                    setSearchActive(false)
                    setSearchInput('')
                    setSearchTerms(undefined)
                  }}
                >
                  <Arrow arrowDirection="left" style={{ height: '18px' }} />
                  Back to Browse
                </Button>
              ) : (
                <Button
                  variant="gray-primary-500"
                  className="EntityFinder__Search__SearchButton"
                  onClick={() => {
                    setSearchActive(true)
                    searchInputRef!.current!.focus()
                  }}
                >
                  <FontAwesomeIcon size={'sm'} icon={faSearch} />
                  Search all of Synapse
                </Button>
              )}
              <FontAwesomeIcon
                size={'sm'}
                icon={faSearch}
                className="SearchIcon"
              />
              <FormControl
                ref={searchInputRef}
                aria-hidden={!searchActive}
                role="textbox"
                className="EntityFinder__Search__Input"
                type="search"
                placeholder="Search by name, Wiki contents, or Synapse ID"
                value={searchInput}
                onChange={event => {
                  setSearchInput(event.target.value)
                }}
                onKeyDown={(event: any) => {
                  if (event.key === 'Enter') {
                    if (event.target.value === '') {
                      setSearchTerms(undefined)
                    } else {
                      setSearchTerms(event.target.value.trim().split(' '))
                    }
                  }
                }}
              />
              {searchInput && (
                <FontAwesomeIcon
                  size={'sm'}
                  icon={faTimes}
                  role="button"
                  title="Clear Search"
                  className="ClearSearchIcon"
                  onClick={() => {
                    setSearchInput('')
                    setSearchTerms(undefined)
                  }}
                />
              )}
            </>
          </div>
          <div className={`EntityFinder__MainPanel ${mainPanelClass}`}>
            {/* We have a separate Details component for search in order to preserve state in the other component between searches */}
            {searchActive && (
              <EntityDetailsList
                configuration={
                  searchByIdResults && searchByIdResults.length > 0
                    ? {
                        type:
                          EntityDetailsListDataConfigurationType.HEADER_LIST,
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
                selectColumnType={selectMultiple ? 'checkbox' : 'none'}
                selected={selectedEntities}
                visibleTypes={selectableTypes}
                selectableTypes={selectableTypes}
                toggleSelection={toggleSelection}
              />
            )}
            {
              <div style={searchActive ? { display: 'none' } : {}}>
                {treeOnly ? (
                  <div>
                    <TreeView
                      toggleSelection={toggleSelection}
                      showDropdown={true}
                      visibleTypes={selectableAndVisibleTypesInTree}
                      initialScope={initialScope}
                      selectedEntities={selectedEntities}
                      projectId={projectId}
                      initialContainer={initialContainer}
                      showScopeAsRootNode={false}
                      nodeAppearance={NodeAppearance.SELECT}
                      selectableTypes={selectableTypes}
                    />
                  </div>
                ) : (
                  <div className="EntityFinderReflexContainer">
                    <SizeMe>
                      {({ size }) => (
                        <ReflexContainer
                          key={(!!size.width).toString()}
                          orientation="vertical"
                          windowResizeAware
                        >
                          <ReflexElement
                            className="TreeViewReflexElement"
                            flex={0.18}
                          >
                            <TreeView
                              selectedEntities={selectedEntities}
                              setDetailsViewConfiguration={
                                setConfigFromTreeView
                              }
                              showDropdown={true}
                              visibleTypes={visibleTypesInTree}
                              initialScope={initialScope}
                              projectId={projectId}
                              initialContainer={initialContainer}
                              nodeAppearance={NodeAppearance.BROWSE}
                              setBreadcrumbItems={setBreadcrumbs}
                              selectableTypes={visibleTypesInTree}
                            />
                          </ReflexElement>
                          <ReflexSplitter></ReflexSplitter>
                          <ReflexElement className="DetailsViewReflexElement">
                            <EntityDetailsList
                              configuration={configFromTreeView}
                              showVersionSelection={showVersionSelection}
                              selected={selectedEntities}
                              visibleTypes={selectableAndVisibleTypesInList}
                              selectableTypes={selectableTypes}
                              selectColumnType={
                                selectMultiple ? 'checkbox' : 'none'
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
          </div>

          {selectedEntities.length > 0 && (
            <SelectionPane
              title={selectedCopy}
              selectedEntities={selectedEntities}
              toggleSelection={toggleSelection}
            />
          )}
        </div>
      </ErrorBoundary>
    </QueryClientProvider>
  )
}

export default EntityFinder
