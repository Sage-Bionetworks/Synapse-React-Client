import React, { useMemo } from 'react'
import { Reference } from '../../utils/synapseTypes'
import IconSvg from '../IconSvg'

/**
 * This node type is used if the user cannot access the entity for some reason
 */
export const EntityPlaceholderNodeLabel = (data: Reference) => {
  const targetVersionNumberString = data.targetVersionNumber
    ? `.${data.targetVersionNumber}`
    : ''
  const entityVersionString = `${data.targetId}${targetVersionNumberString}`
  return useMemo(
    () => (
      <>
        <div>
          <IconSvg icon="fileOutlined" />
        </div>
        <span>{entityVersionString}</span>
      </>
    ),
    [entityVersionString],
  )
}
