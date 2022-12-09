import React from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormLabel,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { RadioGroup } from '../widgets/RadioGroup'
import FullWidthAlert from '../FullWidthAlert'
import IconSvg from '../IconSvg'
import { useCreateLockAccessRequirement } from '../../utils/hooks/SynapseAPI'
import { displayToast } from '../ToastMessage'
import { HelpPopover } from '../HelpPopover'

export type ImposeRestrictionFormProps = {
  /* The ID of the entity that the user may choose to restrict */
  entityId: string
  open: boolean
  onClose: () => void
}

export default function ImposeRestrictionDialog(
  props: ImposeRestrictionFormProps,
) {
  const NOT_HUMAN_DATA_WARNING = (
    <Typography variant={'smallText1'}>
      Sage Bionetworks does not typically impose conditions for use on non-human
      data unless there is a legal, ethical or regulatory reason to do so. If
      you want to add conditions for use to this content, please contact the
      Synapse Access and Compliance Team (ACT) to discuss at{' '}
      <a href={'mailto:act@sagebase.org'}>act@sagebase.org</a>.
    </Typography>
  )

  const { entityId, open, onClose } = props
  const [isSensitiveHumanData, setIsSensitiveHumanData] = React.useState<
    boolean | undefined
  >(undefined)

  const { mutate: createLockedAccessRequirement, isLoading } =
    useCreateLockAccessRequirement({
      onSuccess: () => {
        displayToast('Successfully imposed restriction', 'success')
        onClose()
      },
      onError: e => {
        displayToast(`Failed to impose restriction: ${e.reason}`, 'danger')
      },
    })

  function okClickedHandler() {
    if (isSensitiveHumanData) {
      createLockedAccessRequirement(entityId)
    } else {
      onClose()
    }
  }

  function radioOnChangeHandler(newValue: boolean) {
    setIsSensitiveHumanData(newValue)
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth={'sm'} fullWidth>
      <DialogTitle>
        <Stack direction="row" alignItems={'center'} gap={'5px'}>
          Conditions for Use
          <HelpPopover
            markdownText={
              'Conditions for use describes data use requirements that must be fulfilled before downloading.'
            }
            helpUrl={
              'https://help.synapse.org/docs/Sharing-Settings,-Permissions,-and-Conditions-for-Use.2024276030.html#SharingSettings,Permissions,andConditionsforUse-ConditionsforUse'
            }
          />
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={onClose}>
            <IconSvg icon={'close'} wrap={false} sx={{ color: 'grey.700' }} />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <FormControl sx={{ width: '100%' }}>
          <FormLabel id="demo-radio-buttons-group-label">
            Is this sensitive human data that must be protected?
          </FormLabel>
          <RadioGroup<boolean>
            id={`impose-restriction-${entityId}`}
            value={isSensitiveHumanData}
            options={[
              {
                label: 'Yes',
                value: true,
              },
              {
                label: 'No',
                value: false,
              },
            ]}
            onChange={radioOnChangeHandler}
          ></RadioGroup>
          {isSensitiveHumanData === false && (
            <FullWidthAlert
              variant={'warning'}
              isGlobal={false}
              description={NOT_HUMAN_DATA_WARNING}
            />
          )}
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" disabled={isLoading} onClick={onClose}>
          Cancel
        </Button>
        <Button
          disabled={isSensitiveHumanData == null || isLoading}
          variant="contained"
          onClick={okClickedHandler}
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}
