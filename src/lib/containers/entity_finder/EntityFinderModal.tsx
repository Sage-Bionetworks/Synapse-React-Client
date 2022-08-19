import React, { useState } from 'react'
import { Reference } from '../../utils/synapseTypes'
import Typography from '../../utils/typography/Typography'
import { FluidModal } from '../FluidModal'
import { HelpPopoverProps } from '../HelpPopover'
import WarningModal from '../synapse_form_wrapper/WarningModal'
import EntityFinder, { EntityFinderProps } from './EntityFinder'

export const UNSAVED_CHANGES = 'Unsaved Changes'

export type EntityFinderModalProps = {
  configuration: Omit<EntityFinderProps, 'onSelectedChange'>
  show: boolean
  onClose: () => void
  title: string
  titlePopoverProps?: HelpPopoverProps
  onConfirm: (selected: Reference[]) => void
  confirmButtonCopy: string
  onCancel: () => void
  promptCopy?: string
}

export const EntityFinderModal = (props: EntityFinderModalProps) => {
  const [selected, setSelected] = useState<Reference[]>([])
  const [showUnsavedChangesWarning, setShowUnsavedChangesWarning] =
    useState(false)
  return (
    <>
      <WarningModal
        title={UNSAVED_CHANGES}
        modalBody="Any unsaved changes will be lost. Are you sure you want to close the finder?"
        show={showUnsavedChangesWarning}
        confirmButtonText="Close Finder"
        onConfirm={() => {
          setShowUnsavedChangesWarning(false)
          props.onCancel()
        }}
        onCancel={() => {
          setShowUnsavedChangesWarning(false)
        }}
      />
      <FluidModal
        className={showUnsavedChangesWarning ? 'SRC-hidden' : undefined}
        show={props.show}
        title={props.title}
        titlePopoverProps={props.titlePopoverProps}
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
            onClick: () => {
              if (selected.length > 0) {
                setShowUnsavedChangesWarning(true)
              } else {
                props.onCancel()
              }
            },
          },
        ]}
      >
        <>
          <Typography variant={'body1'}>{props.promptCopy}</Typography>
          <EntityFinder
            {...props.configuration}
            onSelectedChange={setSelected}
          />
        </>
      </FluidModal>
    </>
  )
}
