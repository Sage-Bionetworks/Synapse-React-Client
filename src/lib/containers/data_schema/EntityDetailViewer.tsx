import React, { ReactElement } from 'react'
import { Modal } from 'react-bootstrap'
import { stateFullscreen } from './state/FullscreenState'
import ReactTooltip from 'react-tooltip'
import isURL from 'validator/lib/isURL'
import { DATA_TYPES, DATA_TYPE_NAMES, DESC_MAP, VIEW_TYPES } from './constants'
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
  if (!entity) {
    return <></>
  }

  const { isFullscreen, handle } = stateFullscreen()
  const attribute = entity[DATA_TYPES.DISPLAY_NAME]
  const description = entity[DATA_TYPES.COMMENT]
  const domainIncludes = entity[VIEW_TYPES.DOMAIN_INCLUDES]
  const id = entity[DATA_TYPES.ID]
  const parentIds = entity[VIEW_TYPES.SUBCLASS_OF]
  const requiredDependencies = entity[VIEW_TYPES.REQUIRES_DEPENDENCY]
  const requiresComponent = entity[VIEW_TYPES.REQUIRES_COMPONENT]
  const type = entity[DATA_TYPES.TYPE]
  const validationRules = entity[DATA_TYPES.VALIDATION_RULES]
  const validValues = entity[VIEW_TYPES.RANGE_INCLUDES]
  return (
    <Modal
      animation={false}
      aria-labelledby={`title-entityDetail-${id}`}
      className={`modal-entityDetail`}
      container={isFullscreen ? handle.node : undefined}
      dialogClassName={`entityDetail`}
      onHide={onClose}
      show={open ? true : false}
      data-testid={TEST_IDS.root}
    >
      <Modal.Header closeButton data-testid={TEST_IDS.header}>
        <Modal.Title
          className={`h1`}
          data-testid={TEST_IDS.title}
          id={`title-dialog-${id}`}
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
          id={`${toolTipIdPrefix}modalEntity-${id}`}
          place={`top`}
          effect={`solid`}
        />
        {description && (
          <>
            <h3
              className={`h3`}
              data-tip={DESC_MAP[DATA_TYPES.COMMENT]}
              data-for={`${toolTipIdPrefix}modalEntity-${id}`}
              data-testid={TEST_IDS.headingDescription}
            >
              {DATA_TYPE_NAMES[DATA_TYPES.COMMENT]}
            </h3>
            <p
              className={`entity-description`}
              data-testid={TEST_IDS.description}
            >
              {description}
            </p>
          </>
        )}
        {type.length > 0 && (
          <>
            <h3
              className={`h3`}
              data-tip={DESC_MAP[DATA_TYPES.TYPE]}
              data-for={`${toolTipIdPrefix}modalEntity-${id}`}
              data-testid={TEST_IDS.headingType}
            >
              {DATA_TYPE_NAMES[DATA_TYPES.TYPE]}
            </h3>
            <ItemList list={type} parent={id} />
          </>
        )}
        <h3
          className={`h3`}
          data-tip={DESC_MAP[DATA_TYPES.LABEL]}
          data-for={`${toolTipIdPrefix}modalEntity-${id}`}
          data-testid={TEST_IDS.headingLabel}
        >
          {DATA_TYPE_NAMES[DATA_TYPES.LABEL]}
        </h3>
        <p className={`entity-label`} data-testid={TEST_IDS.label}>
          {entity[DATA_TYPES.LABEL]}
        </p>
        {attribute && (
          <>
            <h3
              className={`h3`}
              data-tip={DESC_MAP[DATA_TYPES.DISPLAY_NAME]}
              data-for={`${toolTipIdPrefix}modalEntity-${id}`}
              data-testid={TEST_IDS.headingAttribute}
            >
              {DATA_TYPE_NAMES[DATA_TYPES.DISPLAY_NAME]}
            </h3>
            <p className={`entity-attribute`} data-testid={TEST_IDS.attribute}>
              {attribute}
            </p>
          </>
        )}
        {validValues.length > 0 && (
          <>
            <h3
              className={`h3`}
              data-tip={DESC_MAP[VIEW_TYPES.RANGE_INCLUDES]}
              data-for={`${toolTipIdPrefix}modalEntity-${id}`}
              data-testid={TEST_IDS.headingValidValues}
            >
              {DATA_TYPE_NAMES[VIEW_TYPES.RANGE_INCLUDES]}
            </h3>
            <ItemList list={validValues} parent={id} />
          </>
        )}
        {requiredDependencies.length > 0 && (
          <>
            <h3
              className={`h3`}
              data-tip={DESC_MAP[VIEW_TYPES.REQUIRES_DEPENDENCY]}
              data-for={`${toolTipIdPrefix}modalEntity-${id}`}
              data-testid={TEST_IDS.headingRequiredDependencies}
            >
              {DATA_TYPE_NAMES[VIEW_TYPES.REQUIRES_DEPENDENCY]}
            </h3>
            <EntityTable list={requiredDependencies} parent={id} />
          </>
        )}
        {domainIncludes.length > 0 && (
          <>
            <h3
              className={`h3`}
              data-tip={DESC_MAP[VIEW_TYPES.DOMAIN_INCLUDES]}
              data-for={`${toolTipIdPrefix}modalEntity-${id}`}
              data-testid={TEST_IDS.headingDomainIncludes}
            >
              {DATA_TYPES[VIEW_TYPES.DOMAIN_INCLUDES]}
            </h3>
            <ItemList list={domainIncludes} parent={id} />
          </>
        )}
        {parentIds.length > 0 && (
          <>
            <h3
              className={`h3`}
              data-tip={DESC_MAP[VIEW_TYPES.SUBCLASS_OF]}
              data-for={`${toolTipIdPrefix}modalEntity-${id}`}
              data-testid={TEST_IDS.headingParentIds}
            >
              {DATA_TYPE_NAMES[VIEW_TYPES.SUBCLASS_OF]}
            </h3>
            <EntityTable list={parentIds} parent={id} />
          </>
        )}
        {requiresComponent.length > 0 && (
          <>
            <h3
              className={`h3`}
              data-tip={DESC_MAP[VIEW_TYPES.REQUIRES_COMPONENT]}
              data-for={`${toolTipIdPrefix}modalEntity-${id}`}
              data-testid={TEST_IDS.headingRequiresComponent}
            >
              {DATA_TYPE_NAMES[VIEW_TYPES.REQUIRES_COMPONENT]}
            </h3>
            <EntityTable list={requiresComponent} parent={id} />
          </>
        )}
        {validationRules.length > 0 && (
          <>
            <h3
              className={`h3`}
              data-tip={DESC_MAP[DATA_TYPES.VALIDATION_RULES]}
              data-for={`${toolTipIdPrefix}modalEntity-${id}`}
              data-testid={TEST_IDS.headingValidationRules}
            >
              {DATA_TYPE_NAMES[DATA_TYPES.VALIDATION_RULES]}
            </h3>
            <ItemList list={validationRules} parent={id} />
          </>
        )}
      </Modal.Body>
    </Modal>
  )
}

function EntityHeader({ entity }: { entity: DataSchemaData }): ReactElement {
  const id = entity[DATA_TYPES.ID]
  const source = entity[DATA_TYPES.SOURCE]
  const children: ReactElement = (
    <>
      {entity[DATA_TYPES.DISPLAY_NAME] || entity[DATA_TYPES.LABEL]}
      <span className={`id-entity`}>
        <span
          data-tip={DESC_MAP[DATA_TYPES.ID]}
          data-for={`${toolTipIdPrefix}modalEntity-${id}`}
        >
          {`${DATA_TYPE_NAMES[DATA_TYPES.ID]}:`}
        </span>
        {id}
      </span>
    </>
  )
  return (
    <>
      <h2 className={`h2`} id={`title-entityDetail-${id}`}>
        {isURL(source, { require_protocol: true }) ? (
          <a href={source} target={`_blank`} title={`View the source of ${id}`}>
            {children}
          </a>
        ) : (
          children
        )}
      </h2>
      {entity[DATA_TYPES.REQUIRED] && (
        <>
          <span className={`required`}>*</span>
          <p className={`required`}>{`* ${
            DATA_TYPE_NAMES[DATA_TYPES.REQUIRED]
          }`}</p>
        </>
      )}
    </>
  )
}
