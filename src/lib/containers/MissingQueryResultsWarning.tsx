import { WarningSharp } from '@mui/icons-material'
import React from 'react'
import { SynapseConstants } from '../utils/'
import { isDataset } from '../utils/functions/EntityTypeUtils'
import useGetQueryResultBundle from '../utils/hooks/SynapseAPI/entity/useGetQueryResultBundle'
import { QueryBundleRequest, Table } from '../utils/synapseTypes/'
import { Typography } from '@mui/material'
import { HelpPopover } from './HelpPopover'

const DATASETS_CURRENT_VERSION_HELP =
  'Files may be unavailable because you do not have permission to see them, they have been deleted, or the Dataset has been misconfigured.'

// Help text for snapshot does not indicate that files were deleted, because the deleted file would have been captured in the snapshot
const DATASETS_SNAPSHOT_HELP =
  'Files may be unavailable because you do not have permission to see them or the Dataset was misconfigured.'

export type MissingQueryResultsWarningProps = {
  entity: Table
  versionNumber?: number
}

/**
 * If possible, this component will render a warning message if results may be missing from the query due to user permissions or
 * entities being deleted. If not possible, it will render an empty fragment.
 */
const MissingQueryResultsWarning: React.FunctionComponent<
  MissingQueryResultsWarningProps
> = ({ entity }) => {
  // Currently, Datasets are the only table type for which we can reliably get this info.
  // Other cases will need a new service, tracked by PLFM-7046
  const isMissingResultsCalculable = entity && isDataset(entity)

  const request: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    query: {
      sql: `SELECT * FROM ${entity.id!}${
        !entity.isLatestVersion && entity.versionNumber
          ? `.${entity.versionNumber}`
          : ''
      }`,
    },
    entityId: entity.id!,
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_COUNT,
  }

  const { data: queryResult } = useGetQueryResultBundle(request, {
    enabled: isMissingResultsCalculable,
  })
  if (isMissingResultsCalculable && queryResult && entity) {
    const totalVisibleResults = queryResult.queryCount!
    const totalResults = entity.items?.length ?? 0

    if (totalVisibleResults === totalResults) {
      // All of the results are visible, so there is no need to show a warning.
      return <></>
    }

    const difference = totalResults - totalVisibleResults

    let helpMessage = ''

    if (entity.isLatestVersion) {
      helpMessage = DATASETS_CURRENT_VERSION_HELP
    } else {
      helpMessage = DATASETS_SNAPSHOT_HELP
    }

    return (
      <Typography
        className="SRC-centerContent"
        style={{
          marginLeft: 10,
        }}
        variant="smallText1"
        color="textSecondary"
      >
        <WarningSharp
          className="SRC-color-warning"
          style={{ fontSize: '16px' }}
        />
        {difference.toLocaleString() + ' Unavailable'}
        <HelpPopover
          className="SRC-margin-left-5"
          markdownText={helpMessage}
          placement="right"
        ></HelpPopover>
      </Typography>
    )
  } else {
    return <></>
  }
}

export default MissingQueryResultsWarning
