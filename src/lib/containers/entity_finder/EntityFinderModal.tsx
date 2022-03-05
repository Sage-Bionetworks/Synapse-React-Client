import React, { useState } from 'react'
import { Reference } from '../../utils/synapseTypes'
import Typography from '../../utils/typography/Typography'
import { FluidModal } from '../FluidModal'
import EntityFinder, { EntityFinderProps } from './EntityFinder'

export type EntityFinderModalProps = {
  configuration: Omit<EntityFinderProps, 'onSelectedChange'>
  show: boolean
  onClose: () => void
  title: string
  onConfirm: (selected: Reference[]) => void
  confirmButtonCopy: string
  onCancel: () => void
  promptCopy?: string
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
      <>
        <Typography variant={'body1'}>{props.promptCopy}</Typography>
        <EntityFinder {...props.configuration} onSelectedChange={setSelected} />
      </>
    </FluidModal>
  )
}
