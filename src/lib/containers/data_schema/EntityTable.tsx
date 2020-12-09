import React, { forwardRef, ReactElement } from 'react'
import MaterialTable from 'material-table'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import { DataSchemaData } from './types/IDataSchemaTypes'
import IdLink from './IdLink'
import ItemList from './ItemList'
import { DATA_TYPES, DATA_TYPE_NAMES, VIEW_TYPES } from './constants'
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
          title: DATA_TYPE_NAMES[DATA_TYPES.ID],
          field: DATA_TYPES.ID,
          render: ({ id }: RowData) => (
            <IdLink id={id} isParent={parent === id} />
          ),
        },
        {
          title: DATA_TYPE_NAMES[DATA_TYPES.DISPLAY_NAME],
          field: DATA_TYPES.DISPLAY_NAME,
          headerStyle: { width: 135 },
        },
        {
          title: DATA_TYPE_NAMES[DATA_TYPES.LABEL],
          field: DATA_TYPES.LABEL,
          headerStyle: { width: 135 },
        },
        {
          title: DATA_TYPE_NAMES[DATA_TYPES.COMMENT],
          field: DATA_TYPES.COMMENT,
          headerStyle: { width: 135 },
        },
        {
          title: DATA_TYPE_NAMES[DATA_TYPES.TYPE],
          field: DATA_TYPES.TYPE,
          headerStyle: { width: 135 },
          render: ({ type }: RowData) => (
            <ItemList list={type} parent={parent} />
          ),
        },
        {
          title: DATA_TYPE_NAMES[VIEW_TYPES.RANGE_INCLUDES],
          field: VIEW_TYPES.RANGE_INCLUDES,
          headerStyle: { width: 135 },
          render: ({ validValues }: RowData) => (
            <ItemList list={validValues} parent={parent} />
          ),
        },
        {
          title: DATA_TYPE_NAMES[VIEW_TYPES.REQUIRES_DEPENDENCY],
          field: VIEW_TYPES.REQUIRES_DEPENDENCY,
          headerStyle: { width: 150 },
          render: ({ requiredDependencies }: RowData) => (
            <ItemList list={requiredDependencies} parent={parent} />
          ),
        },
        {
          title: DATA_TYPE_NAMES[VIEW_TYPES.DOMAIN_INCLUDES],
          field: VIEW_TYPES.DOMAIN_INCLUDES,
          headerStyle: { width: 120 },
          render: ({ domainIncludes }: RowData) => (
            <ItemList list={domainIncludes} parent={parent} />
          ),
        },
        {
          title: DATA_TYPE_NAMES[DATA_TYPES.REQUIRED],
          field: DATA_TYPES.REQUIRED,
          headerStyle: { width: 120 },
          type: 'boolean',
          render: ({ required }: RowData) => (
            <p>{required ? 'True' : 'False'}</p>
          ),
        },
        {
          title: DATA_TYPE_NAMES[VIEW_TYPES.SUBCLASS_OF],
          field: VIEW_TYPES.SUBCLASS_OF,
          headerStyle: { width: 135 },
          render: ({ parentIds }: RowData) => (
            <ItemList list={parentIds} parent={parent} />
          ),
        },
        {
          title: DATA_TYPE_NAMES[VIEW_TYPES.REQUIRES_COMPONENT],
          field: VIEW_TYPES.REQUIRES_COMPONENT,
          render: ({ requiresComponent }: RowData) => (
            <ItemList list={requiresComponent} parent={parent} />
          ),
        },
        {
          title: DATA_TYPE_NAMES[DATA_TYPES.VALIDATION_RULES],
          field: DATA_TYPES.VALIDATION_RULES,
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
