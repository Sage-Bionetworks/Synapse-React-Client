import { Clear } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import useGetEntityBundle from '../../utils/hooks/SynapseAPI/entity/useEntityBundle'
import { Reference } from '../../utils/synapseTypes'
import Typography from '../../utils/typography/Typography'
import { EntityTypeIcon } from '../EntityIcon'
import { NO_VERSION_NUMBER } from './EntityFinder'
import { Map } from 'immutable'
import { Skeleton } from '@material-ui/lab'
import Tooltip from '../../utils/tooltip/Tooltip'
import { TOOLTIP_DELAY_SHOW } from '../table/SynapseTableConstants'

export type SelectionPaneProps = {
  title: string | ((count: number) => string)
  selectedEntities: Map<string, number>
  toggleSelection: (entity: Reference) => void
}

export const SelectionPane: React.FC<SelectionPaneProps> = ({
  title,
  selectedEntities,
  toggleSelection,
}: SelectionPaneProps) => {
  if (typeof title === 'function') {
    title = title(selectedEntities.size)
  }
  return (
    <div className="EntityFinderSelectionPane alert alert-warning">
      <Typography variant={'headline3'} display={'inline'}>
        {title}
      </Typography>
      {selectedEntities.size <= 200 ? (
        <div className={'EntityFinderSelectionPane__Items'}>
          {Array.from(selectedEntities.keys()).map(id => {
            const version = selectedEntities.get(id)
            return (
              <div
                key={`${id}${
                  version !== NO_VERSION_NUMBER ? `.${version}` : ''
                }`}
              >
                <EntityPathDisplay
                  entity={{
                    targetId: id,
                    targetVersionNumber:
                      version !== NO_VERSION_NUMBER ? version : undefined,
                  }}
                  toggleSelection={toggleSelection}
                ></EntityPathDisplay>
              </div>
            )
          })}
        </div>
      ) : (
        <Typography variant="smallText1">
          Too many items to show here
        </Typography>
      )}
    </div>
  )
}

const EntityPathDisplay: React.FunctionComponent<{
  entity: Reference
  toggleSelection: (entity: Reference) => void
}> = ({ entity, toggleSelection }) => {
  const { data: bundle } = useGetEntityBundle(
    entity.targetId,
    undefined,
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
      {bundle && (
        <EntityTypeIcon className="EntityIcon" type={bundle.entityType!} />
      )}
      <Tooltip
        title={`${fullPath}/${entityName}`}
        enterNextDelay={TOOLTIP_DELAY_SHOW}
        placement="top"
      >
        <span>{displayedPath ? displayedPath + '/' : ''}</span>
      </Tooltip>
      {entityName ? (
        <span className="EntityFinderSelectionPane__Row__EntityName">
          {entityName}
        </span>
      ) : (
        <Skeleton width={500} />
      )}
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
