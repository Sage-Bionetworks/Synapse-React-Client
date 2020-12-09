import React, { ReactElement, useState } from 'react'
import { Button, InputGroup } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { idMap, setSearchEntity } from './state/SearchEntityState'
import { setLoading } from './state/LoadingState'

import 'react-bootstrap-typeahead/css/Typeahead.css'

interface dropDownData {
  id: string
  label: string
}

export default function EntitySearch(): ReactElement {
  const searchMap = idMap()
  const [item, setItem] = useState<dropDownData[]>([])
  const options: dropDownData[] = Object.keys(searchMap).map(id => ({
    id,
    label: searchMap[id],
  }))
  // Add the reset option to the top of the dropdown.
  options.unshift({ id: ``, label: `Reset Search` })

  return (
    <InputGroup className={`search-entity`}>
      <Typeahead
        id={`values-entity-search`}
        onChange={setItem}
        options={options}
        placeholder={`Search for entity`}
        selected={item}
      />
      <Button
        aria-label={`Search for entity`}
        disabled={item.length < 1 ? true : undefined}
        onClick={() => {
          setLoading(true)
          setSearchEntity(item[0].id)
          setItem([])
        }}
      >
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </InputGroup>
  )
}
