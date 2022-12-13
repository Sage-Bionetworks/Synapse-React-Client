import React, { useState } from 'react'
import { Button } from '@mui/material'
import IconSvg from '../IconSvg'
import ImposeRestrictionDialog from './ImposeRestrictionDialog'
import {
  useGetEntityBundle,
  useIsCurrentUserACTMember,
} from '../../utils/hooks/SynapseAPI'
import { RestrictionLevel } from '../../utils/synapseTypes'
import {
  isEntityRefCollectionView,
  isEntityView,
} from '../../utils/functions/EntityTypeUtils'

export type AddConditionsForUseButtonProps = {
  entityId: string
  /* Handler for when an ACT member clicks the button. */
  onACTMemberClick: () => void
}

export default function AddConditionsForUseButton(
  props: AddConditionsForUseButtonProps,
) {
  const { entityId, onACTMemberClick } = props
  const [openDialog, setOpenDialog] = useState(false)

  const { data: entityBundle, isLoading: isLoadingBundle } =
    useGetEntityBundle(entityId)

  const { data: isActMember, isLoading: isLoadingIsACT } =
    useIsCurrentUserACTMember()
  const isLoading = isLoadingBundle || isLoadingIsACT
  // EntityViews and Dataset/Collections can have ARs, but they aren't meaningful, so hide the button (SWC-5909)
  const isRestrictableEntityType =
    entityBundle?.entity &&
    !isEntityView(entityBundle.entity) &&
    !isEntityRefCollectionView(entityBundle.entity)
  const hasAdministrativeAccess = entityBundle?.permissions.canChangePermissions
  const hasNoExistingRestrictions =
    entityBundle?.restrictionInformation?.restrictionLevel ===
    RestrictionLevel.OPEN

  const showButton =
    !isLoading &&
    hasNoExistingRestrictions &&
    isRestrictableEntityType &&
    (hasAdministrativeAccess || isActMember)

  return (
    <>
      <ImposeRestrictionDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        entityId={entityId}
      />
      {showButton && (
        <Button
          onClick={() => {
            if (isActMember) {
              onACTMemberClick()
            } else {
              setOpenDialog(true)
            }
          }}
          startIcon={<IconSvg icon={'addConditions'} wrap={false} />}
        >
          Add Conditions for Use
        </Button>
      )}
    </>
  )
}
