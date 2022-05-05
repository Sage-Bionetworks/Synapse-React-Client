import moment from 'moment'
import React from 'react'
import { formatDate } from '../../utils/functions/DateFormatter'
import Typography from '../../utils/typography/Typography'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import { useQueryContext } from '../QueryWrapper'

export default function LastUpdatedOn() {
  const { data } = useQueryContext()
  const { showLastUpdatedOn } = useQueryVisualizationContext()
  return showLastUpdatedOn && data && data.lastUpdatedOn ? (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      <Typography variant="body2">
        Last updated on {formatDate(moment(data.lastUpdatedOn))}
      </Typography>
    </div>
  ) : (
    <></>
  )
}
