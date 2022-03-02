import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Map } from 'immutable'
import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react'
import { Button } from 'react-bootstrap'
import { useErrorHandler } from 'react-error-boundary'
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex'
import 'react-reflex/styles.css'
import { SizeMe } from 'react-sizeme'
import Arrow from '../../assets/icons/Arrow'
import { SynapseClient } from '../../utils'
import { SYNAPSE_ENTITY_ID_REGEX } from '../../utils/functions/RegularExpressions'
import { useDependencies, useSynapseContext } from '../../utils/SynapseContext'
import { EntityHeader, Reference } from '../../utils/synapseTypes'
import { EntityType } from '../../utils/synapseTypes/EntityType'
import { KeyValue } from '../../utils/synapseTypes/Search'
import { SynapseErrorBoundary } from '../ErrorBanner'
import { BreadcrumbItem, Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs'
import {
  EntityDetailsListDataConfiguration,
  EntityDetailsListDataConfigurationType,
} from './details/EntityDetailsList'
import { SelectionPane } from './SelectionPane'
import { EntityTreeNodeType } from './tree/TreeNode'
import { FinderScope } from './tree/TreeView'

library.add(faTimes, faSearch)

const DEFAULT_SELECTABLE_TYPES = Object.values(EntityType)
const TABLE_DEFAULT_VISIBLE_TYPES = Object.values(EntityType)
const TREE_DEFAULT_VISIBLE_TYPES = [EntityType.PROJECT, EntityType.FOLDER]

// In the map used to track selections, we use -1 to denote 'selected without version'
// This is necessary because undefined is returned by map.get when the item is not in the map
export const NO_VERSION_NUMBER = -1

const searchForOnlyTypesBooleanQuery = (
  entityTypes: EntityType[],
): KeyValue[] => {
  // Boolean query terms will be combined with AND, and there's no way to OR.
  // So we will negate searching for all omitted types.
  const allTypes = Object.values(EntityType)
  const typesToOmit = allTypes.filter(type => !entityTypes.includes(type))
  return typesToOmit.map(type => ({
    key: 'node_type',
    value: type.toString(),
    not: true,
  }))
}

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
  /** For versionable entities, require the user to select a numbered version of an entity. This disallows selecting 'Always Latest Version'. Note that the latest version may still be mutable. Default true. */
  mustSelectVersionNumber?: boolean
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
  mustSelectVersionNumber = false,
  selectableTypes = DEFAULT_SELECTABLE_TYPES,
  visibleTypesInList = TABLE_DEFAULT_VISIBLE_TYPES,
  visibleTypesInTree = TREE_DEFAULT_VISIBLE_TYPES,
  selectedCopy = 'Selected',
  treeOnly = false,
}: EntityFinderProps) => {
  const { EntityDetailsList, TreeView } = useDependencies()
  const { accessToken } = useSynapseContext()

  const [searchActive, setSearchActive] = useState(false)
  // The raw value of the search input box:
  const [searchInput, setSearchInput] = useState<string>()
  // The "parsed" search terms, which are only calculated when Enter is pressed:
  const [searchTerms, setSearchTerms] = useState<string[]>()
  const [breadcrumbsProps, setBreadcrumbsProps] = useState<BreadcrumbsProps>({
    items: [],
  })
  const [searchByIdResults, setSearchByIdResults] = useState<EntityHeader[]>([])
  const [configFromTreeView, setConfigFromTreeView] =
    useState<EntityDetailsListDataConfiguration>({
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

  /**
   *
   * @param entity The entity to check selected status
   * @param selected the list of selected entities
   * @returns a boolean array of length equal to entities.length denoting selection status
   */
  function isSelected(
    entity: Reference,
    selected: Map<string, number>,
  ): boolean {
    const match = selected.get(entity.targetId)
    if (match == null) {
      return false
    }
    if (match === NO_VERSION_NUMBER) {
      return entity.targetVersionNumber === undefined
    }
    return match === entity.targetVersionNumber
  }

  /**
   * Given the existing selections and a list of toggled references, return the new list of selections
   * @param selected
   * @param toggledReference
   * @returns
   */
  function entitySelectionReducer(
    selected: Map<string, number>,
    toggledReferences: Reference | Reference[],
  ): Map<string, number> {
    const newSelected = selected.withMutations(map => {
      // Note: we currently don't allow selecting two versions of the same entity, so we replace previous selected version with new selected version
      if (!Array.isArray(toggledReferences)) {
        toggledReferences = [toggledReferences]
      }
      toggledReferences.forEach(toggledReference => {
        if (isSelected(toggledReference, selected)) {
          // remove from selection
          map.delete(toggledReference.targetId)
        } else {
          // add to selection
          if (!selectMultiple) {
            map.clear()
          }
          map.set(
            toggledReference.targetId,
            toggledReference.targetVersionNumber ?? NO_VERSION_NUMBER,
          )
        }
      })
    })

    return newSelected
  }

  const [selectedEntities, toggleSelection] = useReducer(
    entitySelectionReducer,
    Map<string, number>(),
  )

  useEffect(() => {
    // When it changes, convert the map of selected items to a list of references and invoke the callback
    onSelectedChange(
      selectedEntities.toArray().map(([id, version]) => {
        return {
          targetId: id,
          targetVersionNumber:
            version === NO_VERSION_NUMBER ? undefined : version,
        }
      }),
    )
  }, [selectedEntities, onSelectedChange])

  useEffect(() => {
    if (searchTerms?.length === 1) {
      const synIdMatch = SYNAPSE_ENTITY_ID_REGEX.exec(searchTerms[0])
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
          accessToken,
        )
          .then(response => {
            setSearchByIdResults(response.results)
          })
          .catch(e => handleError(e))
      }
    } else {
      setSearchByIdResults([])
    }
  }, [accessToken, searchTerms, handleError])

  const mainPanelClass = searchActive
    ? 'MainPanelSearch'
    : treeOnly
    ? 'MainPanelSinglePane'
    : 'MainPanelDualPane'

  return (
    <SynapseErrorBoundary>
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
            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
            <input
              role="textbox"
              ref={searchInputRef}
              aria-hidden={!searchActive}
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
                      type: EntityDetailsListDataConfigurationType.HEADER_LIST,
                      headerList: searchByIdResults,
                    }
                  : {
                      type: EntityDetailsListDataConfigurationType.ENTITY_SEARCH,
                      query: {
                        queryTerm: searchTerms,
                        booleanQuery:
                          searchForOnlyTypesBooleanQuery(selectableTypes),
                      },
                    }
              }
              showVersionSelection={showVersionSelection}
              mustSelectVersionNumber={mustSelectVersionNumber}
              selectColumnType={selectMultiple ? 'checkbox' : 'none'}
              selected={selectedEntities}
              visibleTypes={selectableTypes}
              selectableTypes={selectableTypes}
              toggleSelection={toggleSelection}
              enableSelectAll={selectMultiple}
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
                    treeNodeType={EntityTreeNodeType.SELECT}
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
                          flex={0.24}
                        >
                          <TreeView
                            selectedEntities={selectedEntities}
                            setDetailsViewConfiguration={setConfigFromTreeView}
                            showDropdown={true}
                            visibleTypes={visibleTypesInTree}
                            initialScope={initialScope}
                            projectId={projectId}
                            initialContainer={initialContainer}
                            treeNodeType={EntityTreeNodeType.BROWSE}
                            setBreadcrumbItems={setBreadcrumbs}
                            selectableTypes={visibleTypesInTree}
                          />
                        </ReflexElement>
                        <ReflexSplitter></ReflexSplitter>
                        <ReflexElement className="DetailsViewReflexElement">
                          <EntityDetailsList
                            configuration={configFromTreeView}
                            mustSelectVersionNumber={mustSelectVersionNumber}
                            showVersionSelection={showVersionSelection}
                            selected={selectedEntities}
                            visibleTypes={selectableAndVisibleTypesInList}
                            selectableTypes={selectableTypes}
                            selectColumnType={
                              selectMultiple ? 'checkbox' : 'none'
                            }
                            toggleSelection={toggleSelection}
                            enableSelectAll={selectMultiple}
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

        {selectedEntities.size > 0 && (
          <SelectionPane
            title={selectedCopy}
            selectedEntities={selectedEntities}
            toggleSelection={toggleSelection}
          />
        )}
      </div>
    </SynapseErrorBoundary>
  )
}

export default EntityFinder
