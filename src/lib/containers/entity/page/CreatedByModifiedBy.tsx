import React from 'react'
import {
  Box,
  Breadcrumbs,
  Skeleton,
  SxProps,
  Tooltip,
  Typography,
} from '@mui/material'
import {
  BUNDLE_MASK_LAST_UPDATED_ON,
  SMALL_USER_CARD,
} from '../../../utils/SynapseConstants'
import {
  useGetEntity,
  useGetQueryResultBundleWithAsyncStatus,
} from '../../../utils/hooks/SynapseAPI'
import {
  convertToEntityType,
  entityTypeToFriendlyName,
  isDataset,
  isTable,
} from '../../../utils/functions/EntityTypeUtils'
import UserCard from '../../UserCard'
import { formatDate } from '../../../utils/functions/DateFormatter'
import ConditionalWrapper from '../../utils/ConditionalWrapper'
import dayjs from 'dayjs'
import { InfoTwoTone } from '@mui/icons-material'

export type CreatedByModifiedByProps = {
  entityId: string
  versionNumber?: number
}

function Separator() {
  return (
    <Typography variant={'breadcrumb1'} sx={{ color: 'grey.700' }}>
      /
    </Typography>
  )
}

export function CreatedByModifiedBy(props: CreatedByModifiedByProps) {
  const { entityId, versionNumber } = props
  const entityIdWithVersion = `${entityId}${
    versionNumber ? `.${versionNumber}` : ''
  }`

  const { data: entity } = useGetEntity(entityId, versionNumber)

  const { data: tableQueryResult } = useGetQueryResultBundleWithAsyncStatus(
    {
      entityId,
      query: {
        sql: `SELECT * FROM ${entityIdWithVersion} LIMIT 0`,
      },
      partMask: BUNDLE_MASK_LAST_UPDATED_ON,
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    },
    { enabled: !!(entity && isTable(entity)) },
  )

  const tableLastRebuilt = tableQueryResult?.responseBody?.lastUpdatedOn
  const friendlyName = entity
    ? entityTypeToFriendlyName(convertToEntityType(entity.concreteType))
    : ''

  const datasetCreatedByTooltipText =
    'This is the user who created this Dataset. ' +
    'This may not be the same person who generated the files in this Dataset, or who originally uploaded these files to Synapse.'

  const tableModifiedOnTooltipText = (
    <>
      <p>
        This is when the configuration of this {friendlyName} was last changed.
      </p>
      <p>Configuration changes may be triggered by (for example):</p>
      <ul>
        <li>Editing the name of the {friendlyName}</li>
        <li>Updating the schema used by the {friendlyName}</li>
      </ul>
      <p>
        This does NOT reflect changes to the data displayed in the the{' '}
        {friendlyName}.
      </p>
    </>
  )
  /*
   If the tooltip text is a string, MUI automatically applies it to aria-label which is more accessible and testable.
    Since this tooltip text is a ReactNode, let's manually create a short string to use for the aria-label.
   */
  const tableModifiedOnAccessibleLabel = `This is when the configuration of this ${friendlyName} was last changed.`

  const tableLastUpdatedTooltipText =
    `When data changes, the ${friendlyName} is rebuilt to reflect those changes. ` +
    `This is the last time changes were made to the data.`

  const createdByTooltipId = `${entityIdWithVersion}-createdByTooltip`
  const modifiedByTooltipId = `${entityIdWithVersion}-modifiedByTooltip`
  const lastUpdatedTooltipId = `${entityIdWithVersion}-lastUpdatedTooltip`

  const iconSx: SxProps = {
    width: '16px',
    height: '16px',
    ml: '4px',
    verticalAlign: 'text-bottom',
  }

  return (
    <Box sx={{ bgcolor: 'grey.100', px: '40px', py: '10px' }}>
      <Breadcrumbs separator={<Separator />}>
        <ConditionalWrapper condition={!entity} wrapper={Skeleton}>
          <Typography
            sx={{ color: 'grey.700' }}
            variant={'breadcrumb1'}
            aria-describedby={createdByTooltipId}
          >
            {friendlyName} created by{' '}
            <UserCard ownerId={entity?.createdBy} size={SMALL_USER_CARD} /> on{' '}
            {formatDate(dayjs(entity?.createdOn))}
            {entity && isDataset(entity) && (
              <Tooltip
                id={createdByTooltipId}
                title={datasetCreatedByTooltipText}
              >
                <InfoTwoTone sx={iconSx} />
              </Tooltip>
            )}
          </Typography>
        </ConditionalWrapper>
        <ConditionalWrapper condition={!entity} wrapper={Skeleton}>
          <Typography
            sx={{ color: 'grey.700' }}
            variant={'breadcrumb1'}
            aria-describedby={modifiedByTooltipId}
          >
            {entity && isTable(entity) ? 'Configuration' : friendlyName} last
            modified by{' '}
            <UserCard ownerId={entity?.modifiedBy} size={SMALL_USER_CARD} /> on{' '}
            {formatDate(dayjs(entity?.modifiedOn))}
            {entity && isTable(entity) && (
              <Tooltip
                id={modifiedByTooltipId}
                title={tableModifiedOnTooltipText}
                aria-label={tableModifiedOnAccessibleLabel}
              >
                <InfoTwoTone sx={iconSx} />
              </Tooltip>
            )}
          </Typography>
        </ConditionalWrapper>
        {tableLastRebuilt && (
          <Typography
            sx={{ color: 'grey.700' }}
            variant={'breadcrumb1'}
            aria-describedby={lastUpdatedTooltipId}
          >
            {friendlyName} last rebuilt on {formatDate(dayjs(tableLastRebuilt))}
            <Tooltip
              title={tableLastUpdatedTooltipText}
              id={lastUpdatedTooltipId}
            >
              <InfoTwoTone sx={iconSx} />
            </Tooltip>
          </Typography>
        )}
      </Breadcrumbs>
    </Box>
  )
}
