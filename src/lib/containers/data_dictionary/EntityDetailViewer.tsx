import React, { ReactElement } from 'react'
import { Drawer, IconButton, Link } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { isUri } from 'valid-url'
import { DataDictionaryData } from './types/IDataDictionaryTypes'
import EntityTable from './EntityTable'
import ItemList from './ItemList'

interface EntityDetailViewerProps {
  entity?: DataDictionaryData
  onClose:
    | ((event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void)
    | undefined
  open: boolean
}

export const TEST_IDS = Object.freeze({
  root: 'EntityDetailViewer',
})

export default function EntityDetailViewer({
  entity,
  onClose,
  open,
}: EntityDetailViewerProps): ReactElement {
  return (
    <Drawer
      anchor={`left`}
      aria-labelledby={entity ? `title-entityDetail-${entity.id}` : undefined}
      className={`entityDetail`}
      open={open ? true : false}
      onClose={onClose}
    >
      {entity ? (
        <div className={`content-entityDetail`}>
          <IconButton
            className={`button-close`}
            onClick={
              onClose ? (event) => onClose(event, `escapeKeyDown`) : undefined
            }
          >
            <CloseIcon />
          </IconButton>
          <EntityHeader entity={entity} />
          {entity.required && (
            <>
              <span className={`required`}>*</span>
              <p className={`required`}>{`* Required`}</p>
            </>
          )}
          {entity.description && (
            <>
              <h3 className={`h3`}>{`Description`}</h3>
              <p className={`description`}>{entity.description}</p>
            </>
          )}
          {entity.type.length > 0 && (
            <>
              <h3 className={`h3`}>{`Type`}</h3>
              <ItemList list={entity.type} />
            </>
          )}
          {entity.validValues.length > 0 && (
            <>
              <h3 className={`h3`}>{`Valid Values`}</h3>
              <ItemList list={entity.validValues} />
            </>
          )}
          {entity.requiredDependencies.length > 0 && (
            <>
              <h3 className={`h3`}>{`Required Dependencies`}</h3>
              <EntityTable list={entity.requiredDependencies} />
            </>
          )}
          {entity.domainIncludes.length > 0 && (
            <>
              <h3 className={`h3`}>{`Domain Includes`}</h3>
              <ItemList list={entity.domainIncludes} />
            </>
          )}
          {entity.parentIds.length > 0 && (
            <>
              <h3 className={`h3`}>{`Parent Entities`}</h3>
              <EntityTable list={entity.parentIds} />
            </>
          )}
          {entity.requiresComponent.length > 0 && (
            <>
              <h3 className={`h3`}>{`Requires Component`}</h3>
              <EntityTable list={entity.requiresComponent} />
            </>
          )}
          {entity.validationRules.length > 0 && (
            <>
              <h3 className={`h3`}>{`Validation Rules`}</h3>
              <ItemList list={entity.validationRules} />
            </>
          )}
        </div>
      ) : (
        <></>
      )}
    </Drawer>
  )
}

function EntityHeader({
  entity,
}: {
  entity: DataDictionaryData
}): ReactElement {
  const children: ReactElement = (
    <>
      {entity.attribute || entity.label}
      <span>{entity.id}</span>
    </>
  )
  return (
    <h2 className={`h2`} id={`title-entityDetail-${entity.id}`}>
      {isUri(entity.source) ? (
        <Link
          href={entity.source}
          target={`_blank`}
          title={`View the source of ${entity.id}`}
          children={children}
        />
      ) : (
        children
      )}
    </h2>
  )
}
