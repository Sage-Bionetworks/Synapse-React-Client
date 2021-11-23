import React, { useState } from 'react'
import { Reference } from '../../utils/synapseTypes'
import { FluidModal } from '../FluidModal'
import EntityFinder, { EntityFinderProps } from './EntityFinder'

type EntityFinderModalProps = {
  configuration: Omit<EntityFinderProps, 'onSelectedChange'>
  show: boolean
  onClose: () => void
  title: string
  onConfirm: (selected: Reference[]) => void
  confirmButtonCopy: string
  onCancel: () => void
}

export const EntityFinderModal = (props: EntityFinderModalProps) => {
  const [selected, setSelected] = useState<Reference[]>([])

  return (
    <FluidModal
      show={props.show}
      title={props.title}
      onClose={props.onClose}
      primaryAction={{
        copy: props.confirmButtonCopy,
        onClick: () => {
          props.onConfirm(selected)
        },
      }}
      secondaryActions={[
        {
          copy: 'Cancel',
          onClick: props.onCancel,
        },
      ]}
    >
      <EntityFinder {...props.configuration} onSelectedChange={setSelected} />
    </FluidModal>
  )
}
