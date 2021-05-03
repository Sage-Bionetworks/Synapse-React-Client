import { Clear } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'
import useGetEntityBundle from '../../utils/hooks/SynapseAPI/useEntityBundle'
import { Reference } from '../../utils/synapseTypes'
import { EntityTypeIcon } from '../EntityIcon'
import { BUNDLE_REQUEST_OBJECT } from './EntityFinderUtils'

export type SelectionPaneProps = {
  sessionToken: string
  title: string
  selectedEntities: Reference[]
  toggleSelection: (entity: Reference) => void
}

export const SelectionPane: React.FC<SelectionPaneProps> = ({
  sessionToken,
  title,
  selectedEntities,
  toggleSelection,
}: SelectionPaneProps) => {
  return (
    <div className="EntityFinderSelectionPane alert alert-warning">
      <h5>{title}</h5>
      <div className={'EntityFinderSelectionPane__Items'}>
        {selectedEntities.map(e => (
          <div
            key={`${e.targetId}${
              e.targetVersionNumber ? `.${e.targetVersionNumber}` : ''
            }`}
          >
            <EntityPathDisplay
              sessionToken={sessionToken}
              entity={e}
              toggleSelection={toggleSelection}
            ></EntityPathDisplay>
          </div>
        ))}
      </div>
    </div>
  )
}

const EntityPathDisplay: React.FunctionComponent<{
  sessionToken: string
  entity: Reference
  toggleSelection: (entity: Reference) => void
}> = ({ sessionToken, entity, toggleSelection }) => {
  const ENTITY_PATH_TOOLTIP_ID = `EntityPathDisplayReactTooltip_${entity.targetId}`

  const { data: bundle } = useGetEntityBundle(
    sessionToken,
    entity.targetId,
    BUNDLE_REQUEST_OBJECT,
    entity.targetVersionNumber,
  )

  const [entityName, setEntityName] = useState('')
  const [fullPath, setFullPath] = useState('')
  const [displayedPath, setDisplayedPath] = useState('')

  useEffect(() => {
    if (bundle?.path?.path) {
      setEntityName(bundle.path.path[bundle.path.path.length - 1].name)
      const path = bundle.path.path.slice(1, bundle.path.path.length - 1) // drop the first element, which is always syn4489 "root"
      setFullPath(path.map(header => header.name).join('/'))
      if (path.length < 4) {
        // Show the full path from project to entity
        setDisplayedPath(fullPath)
      } else {
        // Truncate the path, showing only project, parent, and self
        setDisplayedPath(
          path[0].name + // Project
            '/…/' +
            path
              .slice(path.length - 1) // drop everything except parent and self
              .map(header => header.name)
              .join('/'),
        )
      }
    }
  }, [bundle, fullPath])

  return (
    <div className="EntityFinderSelectionPane__Row">
      <ReactTooltip id={ENTITY_PATH_TOOLTIP_ID} delayShow={500} place={'top'} />
      {bundle && (
        <EntityTypeIcon className="EntityIcon" type={bundle.entityType!} />
      )}
      <span
        data-for={ENTITY_PATH_TOOLTIP_ID}
        data-tip={`${fullPath}/${entityName}`}
      >
        {displayedPath ? displayedPath + '/' : ''}
      </span>
      <span className="EntityFinderSelectionPane__Row__EntityName">
        {entityName}
      </span>
      {entity.targetVersionNumber && (
        <span> (Version {entity.targetVersionNumber})</span>
      )}
      <Clear
        className="EntityFinderSelectionPane__Row__DeselectButton"
        onClick={() => {
          toggleSelection(entity)
        }}
      />
    </div>
  )
}
