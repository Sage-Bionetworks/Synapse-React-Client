import { Clear } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'
import useGetEntityBundle from '../../utils/hooks/SynapseAPI/useEntityBundle'
import { Reference } from '../../utils/synapseTypes'

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
    <div className="EntityFinder__Selected">
      <h3>{title}</h3>
      <div>
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
    { includeEntity: true, includeEntityPath: true },
    entity.targetVersionNumber,
  )

  const [entityName, setEntityName] = useState('')
  const [fullPath, setFullPath] = useState('')
  const [displayedPath, setDisplayedPath] = useState('')

  useEffect(() => {
    if (bundle?.path?.path) {
      setEntityName(bundle.path.path[bundle.path.path.length - 1].name)
      const path = bundle.path.path.slice(1, bundle.path.path.length - 1) // drop the first element, which is always syn4489 "root"
      const _fullPath = path.map(header => header.name).join('/')
      setFullPath(_fullPath)
      if (path.length < 4) {
        // Show the full path from project to entity
        setDisplayedPath(_fullPath)
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
  }, [bundle])

  return (
    <div className="EntityFinder__Selected__Row">
      <ReactTooltip id={ENTITY_PATH_TOOLTIP_ID} delayShow={500} place={'top'} />
      <span
        data-for={ENTITY_PATH_TOOLTIP_ID}
        data-tip={`${fullPath}/${entityName}`}
      >
        {displayedPath ? displayedPath + '/' : ''}
      </span>
      <span className="EntityFinder__Selected__Row__EntityName">
        {entityName}
      </span>
      {entity.targetVersionNumber && (
        <span> (Version {entity.targetVersionNumber})</span>
      )}
      <Clear
        className="EntityFinder__Selected__Row__DeselectButton"
        onClick={() => {
          toggleSelection(entity)
        }}
      />
    </div>
  )
}
