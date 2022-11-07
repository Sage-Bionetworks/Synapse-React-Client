import React from 'react'
import { convertToEntityType } from '../../utils/functions/EntityTypeUtils'
import { EntityHeader, EntityType } from '../../utils/synapseTypes'
import { EntityTypeIcon } from '../EntityIcon'
import IconSvg from '../IconSvg'

export type ProvenanceEntityIconProps = {
  entityHeader?: EntityHeader
}

const codeFileExtensionSet = new Set([
  '.awk',
  '.bat',
  '.btm',
  '.c',
  '.cmd',
  '.cpp',
  '.cxx',
  '.def',
  '.dlg',
  '.dpc',
  '.dpj',
  '.dtd',
  '.h',
  '.hdl',
  '.hpp',
  '.hrc',
  '.html',
  '.hxx',
  '.inc',
  '.ini',
  '.inl',
  '.ins',
  '.ipy',
  '.java',
  '.js',
  '.jsp',
  '.l',
  '.lgt',
  '.ll',
  '.par',
  '.pl',
  '.py',
  '.r',
  '.rc',
  '.rdb',
  '.res',
  '.s',
  '.sbl',
  '.scp',
  '.sh',
  '.sql',
  '.src',
  '.srs',
  '.xml',
  '.xrb',
  '.y',
  '.yaml',
  '.yxx',
  '.cwl',
  '.wdl',
  '.json',
])

export const ProvenanceEntityIcon = (props: ProvenanceEntityIconProps) => {
  const { entityHeader } = props
  if (entityHeader) {
    const entityType: EntityType = convertToEntityType(entityHeader?.type)
    if (entityType == EntityType.FILE) {
      // this is a file, may want to use a special icon in this case
      const lastPeriodIndex = entityHeader.name.lastIndexOf('.')
      if (lastPeriodIndex > -1) {
        const extension = entityHeader.name.slice(lastPeriodIndex)
        if (codeFileExtensionSet.has(extension.toLowerCase())) {
          return <IconSvg icon="code" />
        }
      }
    } else {
      return <EntityTypeIcon type={entityType} includeTooltip={false} />
    }
  }

  // return the default (File icon)
  return <EntityTypeIcon type={EntityType.FILE} includeTooltip={false} />
}
