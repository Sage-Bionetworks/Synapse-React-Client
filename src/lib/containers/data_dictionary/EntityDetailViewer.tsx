import React, { ReactElement } from 'react'
import { Modal } from 'react-bootstrap'
import { isUri } from 'valid-url'
import { DataDictionaryData } from './types/IDataDictionaryTypes'
import EntityTable from './EntityTable'
import ItemList from './ItemList'

interface EntityDetailViewerProps {
  entity?: DataDictionaryData
  onClose:
    | ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void)
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
  return entity ? (
    <Modal
      animation={false}
      className={`modal-entityDetail`}
      dialogClassName={`entityDetail`}
      show={open ? true : false}
      onHide={onClose}
      aria-labelledby={`title-entityDetail-${entity.id}`}
    >
      <Modal.Header closeButton>
        <Modal.Title className={`h1`} id={`title-dialog-${entity.id}`}>
          <EntityHeader entity={entity} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={`content-entityDetail`}>
        {entity.description && (
          <>
            <h3 className={`h3`}>{`Description`}</h3>
            <p className={`description`}>{entity.description}</p>
          </>
        )}
        {entity.type.length > 0 && (
          <>
            <h3 className={`h3`}>{`Type`}</h3>
            <ItemList list={entity.type} parent={entity.id} />
          </>
        )}
        {entity.validValues.length > 0 && (
          <>
            <h3 className={`h3`}>{`Valid Values`}</h3>
            <ItemList list={entity.validValues} parent={entity.id} />
          </>
        )}
        {entity.requiredDependencies.length > 0 && (
          <>
            <h3 className={`h3`}>{`Required Dependencies`}</h3>
            <EntityTable
              list={entity.requiredDependencies}
              parent={entity.id}
            />
          </>
        )}
        {entity.domainIncludes.length > 0 && (
          <>
            <h3 className={`h3`}>{`Domain Includes`}</h3>
            <ItemList list={entity.domainIncludes} parent={entity.id} />
          </>
        )}
        {entity.parentIds.length > 0 && (
          <>
            <h3 className={`h3`}>{`Parent Entities`}</h3>
            <EntityTable list={entity.parentIds} parent={entity.id} />
          </>
        )}
        {entity.requiresComponent.length > 0 && (
          <>
            <h3 className={`h3`}>{`Requires Component`}</h3>
            <EntityTable list={entity.requiresComponent} parent={entity.id} />
          </>
        )}
        {entity.validationRules.length > 0 && (
          <>
            <h3 className={`h3`}>{`Validation Rules`}</h3>
            <ItemList list={entity.validationRules} parent={entity.id} />
          </>
        )}
      </Modal.Body>
    </Modal>
  ) : (
    <></>
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
    <>
      <h2 className={`h2`} id={`title-entityDetail-${entity.id}`}>
        {isUri(entity.source) ? (
          <a
            href={entity.source}
            target={`_blank`}
            title={`View the source of ${entity.id}`}
          >
            {children}
          </a>
        ) : (
          children
        )}
      </h2>
      {entity.required && (
        <>
          <span className={`required`}>*</span>
          <p className={`required`}>{`* Required`}</p>
        </>
      )}
    </>
  )
}
