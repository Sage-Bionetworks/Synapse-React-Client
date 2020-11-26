import React, { ReactElement, useState } from 'react'
import { Button, InputGroup } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { stateData } from './state/DataState'
import { setSearchEntity } from './state/SearchEntityState'

import 'react-bootstrap-typeahead/css/Typeahead.css'

interface dropDownData {
  id: string
  label: string
}

export default function EntitySearch(): ReactElement {
  const data = stateData()
  const [item, setItem] = useState<dropDownData[]>([])
  const options: dropDownData[] = data
    .map(entity => ({ id: entity.id, label: entity.id }))
    .sort((a, b) => {
      const entityA = a.label.toUpperCase()
      const entityB = b.label.toUpperCase()

      if (entityA > entityB) {
        return 1
      } else if (entityA < entityB) {
        return -1
      }
      return 0
    })
  // Add the reset option to the top of the dropdown.
  options.unshift({ id: ``, label: `Reset Search` })

  return (
    <InputGroup className={`search-entity`}>
      <Typeahead
        id={`values-entity-search`}
        onChange={setItem}
        options={options}
        placeholder={`Search for id`}
        selected={item}
      />
      <Button
        disabled={item.length < 1 ? true : undefined}
        onClick={() => {
          setSearchEntity(item[0].id)
          setItem([])
        }}
      >
        <FontAwesomeIcon icon={`search`} />
      </Button>
    </InputGroup>
  )
}
