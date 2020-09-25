import React from 'react'
import {
  QueryResultBundle,
  QueryBundleRequest,
} from '../../../utils/synapseTypes'
import { SynapseConstants } from '../../../utils'

import useGetQueryResultBundle from '../../../utils/hooks/useGetQueryResultBundle'
import useShowDesktop from '../../../utils/hooks/useShowDesktop'
import ProgramsMobile from './Programs.Mobile'
import ProgramsDesktop from './Programs.Desktop'
import getColorPallette from '../../../../lib/containers/ColorGradient'
import { CardLink } from '../../../../lib/containers/CardContainerLogic'
import { IconOptions } from '../../../../lib/containers/GenericCard'

export type ProgramsProps = {
  entityId: string
  rgbIndex: number
  titleColumnName: string
  linkColumnName: string
  summaryColumnName: string
  iconColumnName: string
  linkInfo: CardLink
  iconOptions: IconOptions
  token?: string  
}

export type ProgramsDataProps = {
  title: string
  summary: string
  link: string
  exploreLink: string
  color: string
  iconValue: string
  iconOptions: IconOptions
}

export const getFieldIndex = (
  name: string,
  result: QueryResultBundle | undefined,
) => {
  return (
    result?.selectColumns?.findIndex(el => {
      return el.name === name
    }) ?? -1
  )
}

export default function (props: ProgramsProps) {
  const { entityId, titleColumnName, linkColumnName, summaryColumnName, iconColumnName, linkInfo, token, rgbIndex, iconOptions } = props
  const showDesktop = useShowDesktop()
  const { colorPalette } = getColorPallette(rgbIndex ?? 0, 2)
  const queryBundleRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: {
      sql: `select * from ${entityId}`,
    },
  }
  const { queryResultBundle } = useGetQueryResultBundle({
    token,
    queryBundleRequest,
  })

  const titleColumnIndex = getFieldIndex(
    titleColumnName,
    queryResultBundle,
  )
  const summaryColumnIndex = getFieldIndex(
    summaryColumnName,
    queryResultBundle,
  )
  const linkColumnIndex = getFieldIndex(linkColumnName, queryResultBundle)
  const iconColumnIndex = getFieldIndex(iconColumnName, queryResultBundle)
  const matchColIndex = getFieldIndex(linkInfo.matchColumnName, queryResultBundle)
  const baseExploreUrl = `/${linkInfo.baseURL}?${linkInfo.URLColumnName}=`
  return (
    <div className={`Programs${showDesktop ? '__Desktop' : ''}`}>
      {queryResultBundle?.queryResult.queryResults.rows.map((el, index) => {
        const values = el.values
        const title = values[titleColumnIndex]
        const summary = values[summaryColumnIndex]
        const link = values[linkColumnIndex]
        const iconValue = values[iconColumnIndex]
        const matchValue = values[matchColIndex]
        
        const ProgramsDataProps: ProgramsDataProps = {
          title,
          summary,
          link,
          color: colorPalette[0],
          exploreLink: `${baseExploreUrl}${matchValue}`,
          iconValue,
          iconOptions,
        }
        return showDesktop ? (
          <ProgramsDesktop {...ProgramsDataProps} />
        ) : (
          <ProgramsMobile {...ProgramsDataProps} />
        )
      })}
    </div>
  )
}
