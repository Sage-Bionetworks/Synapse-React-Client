import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import {
  entityTypeToFriendlyName,
  isVersionableEntityType,
} from '../../../utils/functions/EntityTypeUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../utils/functions/getEndpoint'
import useGetEntityBundle from '../../../utils/hooks/SynapseAPI/entity/useEntityBundle'
import { AnnotationsTable } from './AnnotationsTable'
import { MetadataTable } from './MetadataTable'
import Skeleton from '@material-ui/lab/Skeleton'
import { SchemaDrivenAnnotationEditor } from '../annotations/SchemaDrivenAnnotationEditor'
import { SkeletonButton } from '../../../assets/skeletons/SkeletonButton'
import { SynapseErrorBoundary } from '../../ErrorBanner'
import { VersionableEntity } from '../../../utils/synapseTypes'
import { rebuildTooltip } from '../../../utils/functions/TooltipUtils'
import ReactTooltip from 'react-tooltip'

export enum EntityModalTabs {
  METADATA = 'METADATA', // non-annotation metadata about the entity
  ANNOTATIONS = 'ANNOTATIONS', // annotation and schema information
  // TODO: Access -- we haven't yet built a viewer/editor for ACLs in SRC -- consider a redesign before building
  // ACCESS = 'ACCESS', // ACLs (and maybe ARs?)
  // TODO: Previews - we would need preview renderers that accomplish feature parity with SWC
  // PREVIEW = 'PREVIEW' // should only show this tab if a preview exists
}

export type EntityModalProps = {
  readonly show: boolean
  readonly entityId: string
  readonly versionNumber?: number
  readonly onClose: () => void
  readonly initialTab?: EntityModalTabs
  readonly showTabs?: boolean
}

export const EntityModal: React.FC<EntityModalProps> = ({
  entityId,
  versionNumber,
  show,
  onClose,
  initialTab = EntityModalTabs.METADATA,
  showTabs = true,
}: EntityModalProps) => {
  const [currentTab, setCurrentTab] = useState<EntityModalTabs>(initialTab)
  const [isInEditMode, setIsInEditMode] = useState(false)
  const { data: entityBundle } = useGetEntityBundle(
    entityId,
    undefined,
    versionNumber,
  )

  const canEdit = entityBundle && entityBundle.permissions?.canEdit

  const isVersionable =
    entityBundle && isVersionableEntityType(entityBundle.entityType!)

  const isLatestVersion =
    isVersionable && (entityBundle.entity as VersionableEntity).isLatestVersion!

  useEffect(() => {
    if (show) {
      rebuildTooltip()
    }
  }, [show])

  return (
    <>
      <ReactTooltip
        id="entityModalTooltip"
        delayShow={300}
        type="dark"
        effect="solid"
        className="SRC-tooltip"
      />
      <Modal
        className="bootstrap-4-backport EntityMetadata"
        backdrop="static"
        size={isInEditMode ? 'lg' : undefined}
        show={show}
        animation={false}
        onHide={onClose}
      >
        <Modal.Header closeButton>
          {entityBundle ? (
            <Modal.Title>{entityBundle.entity!.name}</Modal.Title>
          ) : (
            <Skeleton width={'40%'} />
          )}
        </Modal.Header>
        <Modal.Body>
          {showTabs && !isInEditMode ? (
            <div className="Tabs">
              {Object.keys(EntityModalTabs).map((tabName: string) => {
                return (
                  <div
                    className="Tab"
                    role="tab"
                    key={tabName}
                    onClick={e => {
                      e.stopPropagation()
                      setCurrentTab(EntityModalTabs[tabName])
                    }}
                    aria-selected={tabName === currentTab}
                  >
                    {tabName}
                  </div>
                )
              })}
            </div>
          ) : null}
          <>
            {currentTab === EntityModalTabs.ANNOTATIONS && (
              <>
                {isInEditMode ? (
                  <SynapseErrorBoundary>
                    <SchemaDrivenAnnotationEditor
                      entityId={entityId}
                      onSuccess={() => {
                        setIsInEditMode(false)
                      }}
                      onCancel={() => setIsInEditMode(false)}
                    />
                  </SynapseErrorBoundary>
                ) : (
                  <AnnotationsTable
                    entityId={entityId}
                    versionNumber={versionNumber}
                  />
                )}
              </>
            )}
            {currentTab === EntityModalTabs.METADATA && (
              <MetadataTable
                entityId={entityId}
                versionNumber={versionNumber}
              />
            )}
          </>
        </Modal.Body>
        {!isInEditMode && ( // in edit mode, an editor manages its own footer
          <Modal.Footer>
            <div className="ButtonContainer">
              {canEdit && currentTab === EntityModalTabs.ANNOTATIONS ? ( // Currently only have an editor for annotations
                <>
                  <Button
                    variant="primary-500"
                    disabled={isVersionable && !isLatestVersion}
                    data-for="entityModalTooltip"
                    data-tip={
                      isVersionable && !isLatestVersion
                        ? 'Annotations can only be edited on the latest version'
                        : undefined
                    }
                    onClick={() => {
                      setIsInEditMode(true)
                    }}
                  >
                    Edit
                  </Button>
                  <div className="Spacer" />
                </>
              ) : (
                <div className="Spacer" />
              )}
              {entityBundle ? (
                <Button
                  variant="primary-500"
                  onClick={() =>
                    window.open(
                      `${getEndpoint(
                        BackendDestinationEnum.PORTAL_ENDPOINT,
                      )}#!Synapse:${entityId}`,
                      '_blank',
                      'noopener',
                    )
                  }
                >
                  Open {entityTypeToFriendlyName(entityBundle.entityType!)}
                </Button>
              ) : (
                <SkeletonButton placeholderText="Open entity" />
              )}
            </div>
          </Modal.Footer>
        )}
      </Modal>
    </>
  )
}
