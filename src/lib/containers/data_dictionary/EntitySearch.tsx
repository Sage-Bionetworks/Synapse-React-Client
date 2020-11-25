import React, { ReactElement, useState } from 'react'
import { Grid, TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import SearchIcon from '@material-ui/icons/Search'
import { stateData } from './state/DataState'
import { setSearchEntity } from './state/SearchEntityState'

export default function EntitySearch(): ReactElement {
  const data = stateData()
  const [id, setId] = useState<string>(``)
  const options: string[] = data
    .map(entity => entity.id)
    .sort((a, b) => {
      const entityA = a.toUpperCase()
      const entityB = b.toUpperCase()

      if (entityA > entityB) {
        return 1
      } else if (entityA < entityB) {
        return -1
      }
      return 0
    })

  return (
    <div className={`search-entity`}>
      <Grid container spacing={1} alignItems={`flex-end`}>
        <Grid item>
          <Autocomplete
            id={`values-entity-search`}
            options={options}
            getOptionLabel={id => id}
            style={{ width: 300 }}
            onInputChange={(_event, newInputValue) => setId(newInputValue)}
            renderInput={(params: object) => (
              <TextField
                id={`entitySearch`}
                label={`Search for id`}
                {...params}
                type={`search`}
              />
            )}
          />
        </Grid>
        <Grid item>
          <SearchIcon onClick={() => setSearchEntity(id)} />
        </Grid>
      </Grid>
    </div>
  )
}
