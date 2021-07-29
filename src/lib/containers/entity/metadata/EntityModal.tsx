import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { entityTypeToFriendlyName } from '../../../utils/functions/EntityTypeUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../utils/functions/getEndpoint'
import useGetEntityBundle from '../../../utils/hooks/SynapseAPI/useEntityBundle'
import { AnnotationsTable } from './AnnotationsTable'
import { MetadataTable } from './MetadataTable'
import Skeleton from '@material-ui/lab/Skeleton'

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
  readonly onClose: () => void
  readonly initialTab?: EntityModalTabs
  readonly showTabs?: boolean
}

export const EntityModal: React.FC<EntityModalProps> = ({
  entityId,
  show,
  onClose,
  initialTab = EntityModalTabs.METADATA,
  showTabs = true,
}: EntityModalProps) => {

  const [currentTab, setCurrentTab] = useState<EntityModalTabs>(initialTab)
  const { data: entityBundle, isLoading } = useGetEntityBundle(entityId)

  return (
    <Modal
      className="bootstrap-4-backport EntityMetadata"
      show={show}
      animation={false}
      onHide={onClose}
    >
      <Modal.Header closeButton>
        {entityBundle ? (
          <Modal.Title>{entityBundle.entity!.name}</Modal.Title>
        ) : (
          <Skeleton>
            <Modal.Title>Placeholder</Modal.Title>
          </Skeleton>
        )}
      </Modal.Header>
      <Modal.Body>
        {showTabs ? (
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
            <AnnotationsTable entityId={entityId} />
          )}
          {currentTab === EntityModalTabs.METADATA && (
            <MetadataTable entityId={entityId} />
          )}
        </>
      </Modal.Body>
      <Modal.Footer>
        <div className="ButtonContainer">
          <div className="Spacer" />
          {entityBundle ? (
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
              Open {entityTypeToFriendlyName(entityBundle.entityType!)}
            </Button>
          ) : (
            <Skeleton>
              <Button>Open</Button>
            </Skeleton>
          )}
        </div>
      </Modal.Footer>
    </Modal>
  )
}
