import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Collapse } from '@material-ui/core'
import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import useDeepCompareEffect from 'use-deep-compare-effect'
import { ElementWithTooltip } from '../../../containers/widgets/ElementWithTooltip'
import { SynapseConstants } from '../../../utils'
import useGetInfoFromIds from '../../../utils/hooks/useGetInfoFromIds'
import { UserProfile, ColumnType } from '../../../utils/synapseTypes'
import { EntityHeader } from '../../../utils/synapseTypes/EntityHeader'
import {
  FacetColumnResultValueCount,
  SelectColumn,
} from '../../../utils/synapseTypes/Table'
import { Checkbox } from '../Checkbox'
import { FacetFilterHeader } from './FacetFilterHeader'

library.add(faArrowLeft)

export type EnumFacetFilterProps = {
  facetValues: FacetColumnResultValueCount[]
  columnModel: SelectColumn
  onChange: (facetNamesMap: Record<string, string>) => void
  onClear: () => void
  facetAliases?: Record<string, string>
  containerAs?: 'Collapsible' | 'Dropdown'
  dropdownType?: 'Icon' | 'SelectBox'
  collapsed?: boolean
}

function valueToId(value: string): string {
  return value.replace(/\s/g, '').toLowerCase()
}

function valueToLabel(
  facet: FacetColumnResultValueCount,
  profiles: UserProfile[] = [],
  entityHeaders: EntityHeader[] = [],
): string {
  const { value } = facet
  let displayValue = value
  if (value === SynapseConstants.VALUE_NOT_SET) {
    displayValue = SynapseConstants.FRIENDLY_VALUE_NOT_SET
  }
  const profile = profiles.find(profile => profile.ownerId === value)
  if (profile) {
    displayValue = profile ? profile.userName : `unknown (${value})`
  }

  const eh = entityHeaders.find(eh => eh.id === value)
  if (eh) {
    displayValue = eh ? eh.name : `unknown (${value})`
  }

  return `${displayValue}`
}

function formatFacetValuesForDisplay(
  facetValues: FacetColumnResultValueCount[],
  isShowAll: boolean,
  visibleItemsCount: number,
) {
  //sort facets by count
  const facets = [...facetValues.sort((a, b) => b.count - a.count)]
  if (isShowAll || facets.length <= visibleItemsCount) {
    return facets
  } else {
    //if we are not hiding elected facets
    if (facets.slice(visibleItemsCount).find(item => item.isSelected)) {
      return facets
    } else {
      return facets.splice(0, visibleItemsCount)
    }
  }
}

/************* QUERY ENUM CONMPONENT  *************/

export const EnumFacetFilter: React.FunctionComponent<EnumFacetFilterProps> = ({
  facetValues,
  columnModel,
  onClear,
  onChange,
  facetAliases,
  containerAs = 'Collapsible',
  dropdownType = 'Icon',
  collapsed = false,
}: EnumFacetFilterProps) => {
  const [isShowAll, setIsShowAll] = useState<boolean>(false)
  const [isCollapsed, setIsCollapsed] = useState<boolean>(collapsed)
  const [isShowDropdown, setIsShowDropdown] = useState<boolean>(false)
  const [showSearch, setShowSearch] = useState<boolean>(false)
  const [searchTerm, setSearchText] = useState<string>('')
  const [filteredSet, setFilteredSet] =
    useState<FacetColumnResultValueCount[]>(facetValues)

  useDeepCompareEffect(() => {
    setFilteredSet(facetValues)
  }, [facetValues])

  const visibleItemsCount = 5
  const selectionDelay = 1500 // in ms
  const textInput: React.RefObject<HTMLInputElement> = React.createRef()
  const selectedValuesMap = {}
  let timer: ReturnType<typeof setTimeout>

  const allIsSelected = facetValues.filter(item => item.isSelected).length === 0

  const userIds =
    columnModel?.columnType === ColumnType.USERID ||
    columnModel?.columnType === ColumnType.USERID_LIST
      ? facetValues.map(facet => facet.value)
      : []
  const userProfiles = useGetInfoFromIds<UserProfile>({
    ids: userIds,
    type: 'USER_PROFILE',
  })

  const entityIds =
    columnModel?.columnType === ColumnType.ENTITYID ||
    columnModel?.columnType === ColumnType.ENTITYID_LIST
      ? facetValues.map(facet => facet.value)
      : []
  const entityHeaders = useGetInfoFromIds<EntityHeader>({
    ids: entityIds,
    type: 'ENTITY_HEADER',
  })

  const handleTextInputFilterEvent = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const inputValue: string = e.target.value
    setSearchText(inputValue)
    setIsShowAll(true) // While in filter search mode, display all filtered values

    if (!inputValue) {
      // if input field is empty, display all facet values
      facetValues.forEach(obj => {
        obj.isSelected = false
      })
      setFilteredSet(facetValues)
    } else {
      // display only facet values that contain text from the text input field
      const filtered = facetValues.filter(obj => {
        const label = valueToLabel(obj, userProfiles, entityHeaders)
        return label.toLowerCase().indexOf(inputValue.trim().toLowerCase()) > -1
          ? obj
          : null
      })
      setFilteredSet(filtered)
    }
  }

  if (!columnModel) {
    return <></>
  }
  const isDropdown = containerAs === 'Dropdown'
  const content = (
    <div className={isDropdown ? 'EnumFacetFilter__dropdown_menu' : ''}>
      <div className="EnumFacetFilter__checkboxContainer--forAll">
        <div
          className={
            showSearch
              ? 'EnumFacetFilter__search active'
              : 'EnumFacetFilter__search'
          }
        >
          <button // Close Search Button
            className="EnumFacetFilter__closeSearch"
            onClick={() => {
              setFilteredSet(facetValues)
              setShowSearch(false)
              setIsShowAll(false)
            }}
          >
            <FontAwesomeIcon
              className="EnumFacetFilter__previous"
              icon={faArrowLeft}
            />
          </button>
          {searchTerm.length > 0 && (
            <button // Clear Search Filter Text Button
              className="EnumFacetFilter__resetSearch"
              onClick={() => {
                setSearchText('')
                textInput.current?.focus()
              }}
            >
              <FontAwesomeIcon
                className="EnumFacetFilter__reset"
                icon={'times'}
              />
            </button>
          )}
          <input // Search Filter Text
            type="text"
            placeholder="Find values"
            value={searchTerm}
            ref={textInput}
            onChange={e => {
              handleTextInputFilterEvent(e)
            }}
          />
        </div>
        {!showSearch && (
          <div className="EnumFacetFilter__checkAll">
            <Checkbox
              className="EnumFacetFilter__checkbox"
              onChange={() => {
                onClear()
              }}
              key="select_all"
              checked={allIsSelected}
              label="All"
              isSelectAll={true}
            ></Checkbox>
            <button
              className="EnumFacetFilter__searchbtn"
              onClick={() => {
                setSearchText('')
                setShowSearch(true)
                textInput.current?.focus()
              }}
            >
              <FontAwesomeIcon
                className="EnumFacetFilter__searchicon"
                icon={'search'}
              />
            </button>
          </div>
        )}
      </div>
      <div>
        {filteredSet.length > 0 &&
          formatFacetValuesForDisplay(
            filteredSet,
            isShowAll || isDropdown,
            visibleItemsCount,
          ).map((facet, index: number) => (
            <EnumFacetFilterOption
              key={`checkLabel${index}`}
              id={valueToId(facet.value)}
              index={index}
              label={valueToLabel(facet, userProfiles, entityHeaders)}
              count={facet.count}
              isDropdown={isDropdown}
              initialIsSelected={facet.isSelected}
              onChange={(isChecked: boolean) => {
                selectedValuesMap[facet.value] = isChecked
                clearTimeout(timer)
                timer = setTimeout(() => {
                  onChange(selectedValuesMap)
                  setIsShowDropdown(false)
                }, selectionDelay)
              }}
            />
          ))}
        {!isDropdown && (
          <>
            {!isShowAll && filteredSet.length > visibleItemsCount && (
              <button
                className="EnumFacetFilter__showMoreFacetsBtn"
                onClick={() => setIsShowAll(true)}
              >
                <div className="EnumFacetFilter__checkboxContainer">
                  <div className="EnumFacetFilter__showMoreFacetsLabel">
                    Show all ({filteredSet.length})
                  </div>
                </div>
              </button>
            )}
            {isShowAll && filteredSet.length > visibleItemsCount && (
              <button
                className="EnumFacetFilter__showMoreFacetsBtn"
                onClick={() => setIsShowAll(false)}
              >
                <div className="EnumFacetFilter__checkboxContainer">
                  <div className="EnumFacetFilter__showMoreFacetsLabel">
                    Show less
                  </div>
                </div>
              </button>
            )}
          </>
        )}
        {filteredSet.length <= 0 && (
          <div className="EnumFacetFilter__noMatch">No match found</div>
        )}
      </div>
    </div>
  )

  const onToggle = () => setIsShowDropdown(!isShowDropdown)

  if (isDropdown) {
    if (dropdownType === 'SelectBox') {
      return (
        <Dropdown
          className={'EnumFacetFilter EnumFacetFilterSelect'}
          show={isShowDropdown}
          onToggle={onToggle}
        >
          <Dropdown.Toggle className="secondary-caret" variant="gray-select">
            {allIsSelected && 'All'}
            {!allIsSelected &&
              facetValues.filter(item => item.isSelected).length === 1 &&
              facetValues.filter(item => item.isSelected)[0].value}
            {!allIsSelected &&
              facetValues.filter(item => item.isSelected).length > 1 &&
              'Multiple Values Selected'}
          </Dropdown.Toggle>
          <Dropdown.Menu>{content}</Dropdown.Menu>
        </Dropdown>
      )
    } else {
      return (
        <Dropdown
          className="EnumFacetFilter"
          show={isShowDropdown}
          onToggle={onToggle}
        >
          <ElementWithTooltip
            idForToolTip="facetFilterTooltip"
            tooltipText="Filter by specific facet"
            key="facetFilterTooltip"
            darkTheme={false}
            icon={'filter'}
          />
          <Dropdown.Menu>{content}</Dropdown.Menu>
        </Dropdown>
      )
    }
  } else {
    return (
      <>
        <FacetFilterHeader
          facetAliases={facetAliases}
          isCollapsed={isCollapsed}
          label={columnModel.name}
          onClick={(isCollapsed: boolean) => setIsCollapsed(isCollapsed)}
        />
        <Collapse className="EnumFacetFilter" in={!isCollapsed}>
          {content}
        </Collapse>
      </>
    )
  }
}

type EnumFacetFilterOptionProps = {
  readonly id: string
  readonly index: number
  readonly label: string
  readonly count: number
  readonly isDropdown: boolean
  readonly initialIsSelected: boolean
  readonly onChange: (selected: boolean) => void
}

function EnumFacetFilterOption({
  id,
  index,
  label,
  count,
  isDropdown,
  initialIsSelected,
  onChange,
}: EnumFacetFilterOptionProps) {
  const [isSelected, setIsSelected] = useState(initialIsSelected)

  React.useEffect(() => {
    setIsSelected(initialIsSelected)
  }, [initialIsSelected])

  return (
    <div
      className="EnumFacetFilter__checkboxContainer"
      onClick={() => {
        if (isDropdown) {
          setIsSelected(!isSelected)
          onChange(!isSelected)
        }
      }}
    >
      <Checkbox
        className="EnumFacetFilter__checkbox"
        onClick={event => event.stopPropagation()}
        onChange={newValue => {
          setIsSelected(newValue)
          onChange(newValue)
        }}
        key={`${id}-${index}`}
        checked={isSelected}
        label={label}
      ></Checkbox>
      {isDropdown && <span className="EnumFacetFilter__count">({count})</span>}
      {!isDropdown && <div className="EnumFacetFilter__count">{count}</div>}
    </div>
  )
}
