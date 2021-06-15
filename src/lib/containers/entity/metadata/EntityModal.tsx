import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { entityTypeToFriendlyName } from '../../../utils/functions/EntityTypeUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../utils/functions/getEndpoint'
import useGetEntityBundle from '../../../utils/hooks/SynapseAPI/useEntityBundle'
import { SynapseSpinner } from '../../LoadingScreen'
import { AnnotationsTable } from './AnnotationsTable'
import { MetadataTable } from './MetadataTable'

enum EntityModalTabs {
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
  readonly onClose: () => void
  readonly initialTab?: EntityModalTabs
}

export const EntityModal: React.FC<EntityModalProps> = ({
  entityId,
  show,
  onClose,
  initialTab = EntityModalTabs.METADATA,
}: EntityModalProps) => {
  const [currentTab, setCurrentTab] = useState<EntityModalTabs>(initialTab)
  const { data: entityBundle, isLoading: isLoadingBundle } = useGetEntityBundle(
    entityId,
  )

  return (
    <Modal
      className="bootstrap-4-backport EntityMetadata"
      show={show}
      animation={false}
      onClose={onClose}
    >
      <Modal.Header closeButton onHide={onClose}>
        <Modal.Title>
          {isLoadingBundle ? <SynapseSpinner /> : entityBundle?.entity?.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="Tabs">
          {Object.keys(EntityModalTabs).map((tabName: string) => {
            return (
              <div
                className="Tab"
                role="tab"
                key={tabName}
                onClick={() => setCurrentTab(EntityModalTabs[tabName])}
                aria-selected={tabName === currentTab}
              >
                {tabName}
              </div>
            )
          })}
        </div>
        {isLoadingBundle ? (
          <SynapseSpinner />
        ) : (
          <>
            {currentTab === EntityModalTabs.ANNOTATIONS && (
              <AnnotationsTable entityId={entityId} />
            )}
            {currentTab === EntityModalTabs.METADATA && (
              <MetadataTable entityId={entityId} />
            )}
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <div className="ButtonContainer">
          <div className="Spacer" />
          <Button
            variant="primary"
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
            Open{' '}
            {!isLoadingBundle
              ? entityTypeToFriendlyName(entityBundle!.entityType!)
              : ''}
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}
