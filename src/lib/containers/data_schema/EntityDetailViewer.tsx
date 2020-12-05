import React, { ReactElement } from 'react'
import { Modal } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
import isURL from 'validator/lib/isURL'
import { DESC_MAP } from './constants'
import { DataSchemaData } from './types/IDataSchemaTypes'
import EntityTable from './EntityTable'
import ItemList from './ItemList'
import getTestIDs from './utils/getTestIds'

interface EntityDetailViewerProps {
  entity?: DataSchemaData
  onClose:
    | ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void)
    | undefined
  open: boolean
}

const toolTipIdPrefix: string = `tooltip-`

export const TEST_IDS = getTestIDs()

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
        <ReactTooltip
          className={`entityToolTip`}
          id={`${toolTipIdPrefix}modalEntity-${entity.id}`}
          place={`top`}
          effect={`solid`}
        />
        {entity.description && (
          <>
            <h3
              className={`h3`}
              data-tip={DESC_MAP.description}
              data-for={`${toolTipIdPrefix}modalEntity-${entity.id}`}
              data-testid={TEST_IDS.headingDescription}
            >{`Description`}</h3>
            <p
              className={`entity-description`}
              data-testid={TEST_IDS.description}
            >
              {entity.description}
            </p>
          </>
        )}
        {entity.type.length > 0 && (
          <>
            <h3
              className={`h3`}
              data-tip={DESC_MAP.type}
              data-for={`${toolTipIdPrefix}modalEntity-${entity.id}`}
              data-testid={TEST_IDS.headingType}
            >{`Type`}</h3>
            <ItemList list={entity.type} parent={entity.id} />
          </>
        )}
        <h3
          className={`h3`}
          data-tip={DESC_MAP.label}
          data-for={`${toolTipIdPrefix}modalEntity-${entity.id}`}
          data-testid={TEST_IDS.headingLabel}
        >{`Label`}</h3>
        <p className={`entity-label`} data-testid={TEST_IDS.label}>
          {entity.label}
        </p>
        {entity.attribute && (
          <>
            <h3
              className={`h3`}
              data-tip={DESC_MAP.attribute}
              data-for={`${toolTipIdPrefix}modalEntity-${entity.id}`}
              data-testid={TEST_IDS.headingAttribute}
            >{`Attribute`}</h3>
            <p className={`entity-attribute`} data-testid={TEST_IDS.attribute}>
              {entity.attribute}
            </p>
          </>
        )}
        {entity.validValues.length > 0 && (
          <>
            <h3
              className={`h3`}
              data-tip={DESC_MAP.validValues}
              data-for={`${toolTipIdPrefix}modalEntity-${entity.id}`}
              data-testid={TEST_IDS.headingValidValues}
            >{`Valid Values`}</h3>
            <ItemList list={entity.validValues} parent={entity.id} />
          </>
        )}
        {entity.requiredDependencies.length > 0 && (
          <>
            <h3
              className={`h3`}
              data-tip={DESC_MAP.requiredDependencies}
              data-for={`${toolTipIdPrefix}modalEntity-${entity.id}`}
              data-testid={TEST_IDS.headingRequiredDependencies}
            >{`Requires Attributes`}</h3>
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
              data-tip={DESC_MAP.domainIncludes}
              data-for={`${toolTipIdPrefix}modalEntity-${entity.id}`}
              data-testid={TEST_IDS.headingDomainIncludes}
            >{`Properties`}</h3>
            <ItemList list={entity.domainIncludes} parent={entity.id} />
          </>
        )}
        {entity.parentIds.length > 0 && (
          <>
            <h3
              className={`h3`}
              data-tip={DESC_MAP.parentIds}
              data-for={`${toolTipIdPrefix}modalEntity-${entity.id}`}
              data-testid={TEST_IDS.headingParentIds}
            >{`Parent Attributes`}</h3>
            <EntityTable list={entity.parentIds} parent={entity.id} />
          </>
        )}
        {entity.requiresComponent.length > 0 && (
          <>
            <h3
              className={`h3`}
              data-tip={DESC_MAP.requiresComponent}
              data-for={`${toolTipIdPrefix}modalEntity-${entity.id}`}
              data-testid={TEST_IDS.headingRequiresComponent}
            >{`Depends on Component`}</h3>
            <EntityTable list={entity.requiresComponent} parent={entity.id} />
          </>
        )}
        {entity.validationRules.length > 0 && (
          <>
            <h3
              className={`h3`}
              data-tip={DESC_MAP.validationRules}
              data-for={`${toolTipIdPrefix}modalEntity-${entity.id}`}
              data-testid={TEST_IDS.headingValidationRules}
            >{`Format`}</h3>
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
      <span className={`id-entity`}>
        <span
          data-tip={DESC_MAP.id}
          data-for={`${toolTipIdPrefix}modalEntity-${entity.id}`}
        >
          {'ID:'}
        </span>
        {entity.id}
      </span>
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
