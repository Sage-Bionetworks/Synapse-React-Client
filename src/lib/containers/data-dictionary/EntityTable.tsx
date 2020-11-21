import React, { ReactElement } from 'react'
import { Grid } from '@material-ui/core'
import MaterialTable from 'material-table'
import {
  DataDictionaryData,
  DataDictionaryState,
} from './types/IDataDictionaryTypes'
import IdLink from './IdLink'
import ItemList from './ItemList'
import { stateData } from './state/DataState'
import { tableConfig } from './utils/tableConfig'

interface EntityTableProps {
  list: string[]
}

interface RowData extends DataDictionaryData {
  [key: string]: unknown
}

function EntityTable({ list }: EntityTableProps): ReactElement {
  const { data }: DataDictionaryState = stateData()
  const entityData = buildEntityData(list, data)

  return (
    <Grid container>
      <Grid item xs={12}>
        <MaterialTable
          options={tableConfig<RowData>({}, { length: entityData.length })}
          columns={[
            {
              title: 'ID',
              field: 'id',
              render: ({ id }: RowData) => <IdLink id={id} />,
            },
            {
              title: 'Attribute',
              field: 'attribute',
              headerStyle: { width: 135 },
            },
            {
              title: 'Label',
              field: 'label',
              headerStyle: { width: 135 },
            },
            {
              title: 'Description',
              field: 'description',
              headerStyle: { width: 135 },
            },
            {
              title: 'Type',
              field: 'type',
              headerStyle: { width: 135 },
              render: ({ type }: RowData) => <ItemList list={type} />,
            },
            {
              title: 'Valid Values',
              field: 'validValues',
              headerStyle: { width: 135 },
              render: ({ validValues }: RowData) => (
                <ItemList list={validValues} />
              ),
            },
            {
              title: 'Requires',
              field: 'requiredDependencies',
              headerStyle: { width: 150 },
              render: ({ requiredDependencies }: RowData) => (
                <ItemList list={requiredDependencies} />
              ),
            },
            {
              title: 'Properties',
              field: 'domainIncludes',
              headerStyle: { width: 120 },
              render: ({ domainIncludes }: RowData) => (
                <ItemList list={domainIncludes} />
              ),
            },
            {
              title: 'Required',
              field: 'required',
              headerStyle: { width: 120 },
              type: 'boolean',
              render: ({ required }: RowData) => (
                <p>{required ? 'True' : 'False'}</p>
              ),
            },
            {
              title: 'Parent',
              field: 'parentIds',
              headerStyle: { width: 135 },
              render: ({ parentIds }: RowData) => <ItemList list={parentIds} />,
            },
            {
              title: 'Requires Component',
              field: 'requiresComponent',
              render: ({ requiresComponent }: RowData) => (
                <ItemList list={requiresComponent} />
              ),
            },
            {
              title: 'Validation Rules',
              field: 'validationRules',
              render: ({ validationRules }: RowData) => (
                <ItemList list={validationRules} />
              ),
            },
          ]}
          data={entityData as RowData[]}
        />
      </Grid>
    </Grid>
  )
}

function buildEntityData(
  list: string[],
  data: DataDictionaryData[],
): DataDictionaryData[] {
  const entityData = data.reduce(
    (
      acc: DataDictionaryData[],
      entity: DataDictionaryData,
    ): DataDictionaryData[] => {
      if (list.includes(entity.id)) {
        acc.push(entity)
      }
      return acc
    },
    [] as DataDictionaryData[],
  )
  return entityData
}

export default EntityTable
