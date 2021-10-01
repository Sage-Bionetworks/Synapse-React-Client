import * as React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useEffect } from 'react'

export interface GeneFilterEnum {
  [id: string]: string
}

export type GeneFilterDropdownProps = {
  label?: string
  defaultItem?: string
  dropDownItems: GeneFilterEnum
  onChangeCallback: (event:any) => void
  showAll?: boolean,
  style?: any
}

const GeneFilterDropdown: React.FC<GeneFilterDropdownProps> = props => {
  const { label, defaultItem="", dropDownItems, onChangeCallback, showAll=false, style} = props
  const [ value, setValue ] = React.useState<string>("")

  useEffect(() => {
    setValue(defaultItem)
  }, [dropDownItems])

  const uFormStyles = makeStyles({
    formControl: {
      minWidth: 200
    },
  })

  const formClass = uFormStyles();

  return (<>
    <FormControl className={formClass.formControl} style={style}>
      { label && <InputLabel id="demo-simple-select-label">{label}</InputLabel> }
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={ showAll ? (value || "All") : value }
        onChange={(event) =>{
          if (showAll) {
            event.target.value == "All" ? onChangeCallback("") : onChangeCallback(event)
          } else {
            onChangeCallback(event)
          }
        }}
      >
        { showAll && <MenuItem value={"All"}>All</MenuItem> }
        {
          Object.keys(dropDownItems).map((item, i) =>
            <MenuItem key={`${item}-${i}`} value={dropDownItems[item] as string}>
              {dropDownItems[item]}
            </MenuItem>
          )
        }
      </Select>
    </FormControl>
  </>)
}

export default GeneFilterDropdown
