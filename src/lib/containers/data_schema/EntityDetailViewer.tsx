import React, { ReactElement } from 'react'
import { Modal } from 'react-bootstrap'
import isURL from 'validator/lib/isURL'
import { DataSchemaData } from './types/IDataSchemaTypes'
import EntityTable from './EntityTable'
import ItemList from './ItemList'

interface EntityDetailViewerProps {
  entity?: DataSchemaData
  onClose:
    | ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void)
    | undefined
  open: boolean
}

export const TEST_IDS = Object.freeze({
  body: `Modal Body`,
  description: `Entity Description`,
  header: `Modal Header`,
  headingDescription: `Description Heading`,
  headingDomainIncludes: `Domain Includes Heading`,
  headingParentIds: `Parent Ids Heading`,
  headingRequiredDependencies: `Required Dependencies Heading`,
  headingRequiresComponent: `Requires Component Heading`,
  headingType: `Type Heading`,
  headingValidationRules: `Validation Rules Heading`,
  headingValidValues: `Valid Values Heading`,
  root: `EntityDetailViewer`,
  title: `Modal Title`,
})

export default function EntityDetailViewer({
  entity,
  onClose,
  open,
}: EntityDetailViewerProps): ReactElement {
  return entity ? (
    <Modal
      animation={false}
      aria-labelledby={`title-entityDetail-${entity.id}`}
      className={`modal-entityDetail`}
      dialogClassName={`entityDetail`}
      onHide={onClose}
      show={open ? true : false}
      data-testid={TEST_IDS.root}
    >
      <Modal.Header closeButton data-testid={TEST_IDS.header}>
        <Modal.Title
          className={`h1`}
          data-testid={TEST_IDS.title}
          id={`title-dialog-${entity.id}`}
        >
          <EntityHeader entity={entity} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className={`content-entityDetail`}
        data-testid={TEST_IDS.body}
      >
        {entity.description && (
          <>
            <h3
              className={`h3`}
              data-testid={TEST_IDS.headingDescription}
            >{`Description`}</h3>
            <p className={`description`} data-testid={TEST_IDS.description}>
              {entity.description}
            </p>
          </>
        )}
        {entity.type.length > 0 && (
          <>
            <h3
              className={`h3`}
              data-testid={TEST_IDS.headingType}
            >{`Type`}</h3>
            <ItemList list={entity.type} parent={entity.id} />
          </>
        )}
        {entity.validValues.length > 0 && (
          <>
            <h3
              className={`h3`}
              data-testid={TEST_IDS.headingValidValues}
            >{`Valid Values`}</h3>
            <ItemList list={entity.validValues} parent={entity.id} />
          </>
        )}
        {entity.requiredDependencies.length > 0 && (
          <>
            <h3
              className={`h3`}
              data-testid={TEST_IDS.headingRequiredDependencies}
            >{`Depends On`}</h3>
            <EntityTable
              list={entity.requiredDependencies}
              parent={entity.id}
            />
          </>
        )}
        {entity.domainIncludes.length > 0 && (
          <>
            <h3
              className={`h3`}
              data-testid={TEST_IDS.headingDomainIncludes}
            >{`Domain Includes`}</h3>
            <ItemList list={entity.domainIncludes} parent={entity.id} />
          </>
        )}
        {entity.parentIds.length > 0 && (
          <>
            <h3
              className={`h3`}
              data-testid={TEST_IDS.headingParentIds}
            >{`Parent Entities`}</h3>
            <EntityTable list={entity.parentIds} parent={entity.id} />
          </>
        )}
        {entity.requiresComponent.length > 0 && (
          <>
            <h3
              className={`h3`}
              data-testid={TEST_IDS.headingRequiresComponent}
            >{`Requires Component`}</h3>
            <EntityTable list={entity.requiresComponent} parent={entity.id} />
          </>
        )}
        {entity.validationRules.length > 0 && (
          <>
            <h3
              className={`h3`}
              data-testid={TEST_IDS.headingValidationRules}
            >{`Validation Rules`}</h3>
            <ItemList list={entity.validationRules} parent={entity.id} />
          </>
        )}
      </Modal.Body>
    </Modal>
  ) : (
    <></>
  )
}

function EntityHeader({ entity }: { entity: DataSchemaData }): ReactElement {
  const children: ReactElement = (
    <>
      {entity.attribute || entity.label}
      <span>{entity.id}</span>
    </>
  )
  return (
    <>
      <h2 className={`h2`} id={`title-entityDetail-${entity.id}`}>
        {isURL(entity.source, { require_protocol: true }) ? (
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
