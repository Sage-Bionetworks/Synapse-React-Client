import React, { forwardRef, ReactElement } from 'react'
import MaterialTable from 'material-table'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import { DataSchemaData } from './types/IDataSchemaTypes'
import IdLink from './IdLink'
import ItemList from './ItemList'
import { stateData } from './state/DataState'
import { tableConfig } from './utils/tableConfig'

interface EntityTableProps {
  list: string[]
  parent?: string
}

interface RowData extends DataSchemaData {
  [key: string]: unknown
}

function EntityTable({ list, parent }: EntityTableProps): ReactElement {
  const data: DataSchemaData[] = stateData()
  const entityData = buildEntityData(list, data)

  return entityData.length > 0 ? (
    <MaterialTable
      options={tableConfig<RowData>({}, { length: entityData.length })}
      icons={{
        SortArrow: forwardRef((props, ref) => (
          <ArrowDownward {...props} ref={ref} />
        )),
      }}
      columns={[
        {
          title: 'ID',
          field: 'id',
          render: ({ id }: RowData) => (
            <IdLink id={id} isParent={parent === id} />
          ),
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
          render: ({ type }: RowData) => (
            <ItemList list={type} parent={parent} />
          ),
        },
        {
          title: 'Valid Values',
          field: 'validValues',
          headerStyle: { width: 135 },
          render: ({ validValues }: RowData) => (
            <ItemList list={validValues} parent={parent} />
          ),
        },
        {
          title: 'Requires',
          field: 'requiredDependencies',
          headerStyle: { width: 150 },
          render: ({ requiredDependencies }: RowData) => (
            <ItemList list={requiredDependencies} parent={parent} />
          ),
        },
        {
          title: 'Properties',
          field: 'domainIncludes',
          headerStyle: { width: 120 },
          render: ({ domainIncludes }: RowData) => (
            <ItemList list={domainIncludes} parent={parent} />
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
          render: ({ parentIds }: RowData) => (
            <ItemList list={parentIds} parent={parent} />
          ),
        },
        {
          title: 'Requires Component',
          field: 'requiresComponent',
          render: ({ requiresComponent }: RowData) => (
            <ItemList list={requiresComponent} parent={parent} />
          ),
        },
        {
          title: 'Validation Rules',
          field: 'validationRules',
          render: ({ validationRules }: RowData) => (
            <ItemList list={validationRules} parent={parent} />
          ),
        },
      ]}
      data={entityData as RowData[]}
    />
  ) : (
    <></>
  )
}

function buildEntityData(
  list: string[],
  data: DataSchemaData[],
): DataSchemaData[] {
  return data.reduce(
    (acc: DataSchemaData[], entity: DataSchemaData): DataSchemaData[] => {
      if (list.includes(entity.id)) {
        acc.push(entity)
      }
      return acc
    },
    [] as DataSchemaData[],
  )
}

export default EntityTable
