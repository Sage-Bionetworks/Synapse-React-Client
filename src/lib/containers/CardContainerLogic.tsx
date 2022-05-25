import * as React from 'react'
import { SynapseConstants } from '..'
import {
  insertConditionsFromSearchParams,
  KeyValue,
  parseEntityIdFromSqlStatement,
  SQLOperator,
} from '../utils/functions/sqlFunctions'
import { QueryBundleRequest } from '../utils/synapseTypes/'
import CardContainer from './CardContainer'
import { ErrorBanner } from './ErrorBanner'
import { GenericCardSchema, IconOptions } from './GenericCard'
import { IconSvgOptions } from './IconSvg'
import { QueryVisualizationWrapper } from './QueryVisualizationWrapper'
import { QueryContextConsumer, QueryWrapper } from './QueryWrapper'

/**
 *  Used when a column value should link to an external URL defined by a value in another column.
 *  Currently only works in SynapseTable (not cards!)
 */
export interface ColumnSpecifiedLink {
  isMarkdown: false
  /* The column which should have the displayed value */
  matchColumnName: string
  /* The column which has the link. If the link is empty, the value will be displayed without a link. */
  linkColumnName: string
  // If set, also show a tooltip
  tooltipText?: string
}

export interface CardLink {
  baseURL: string
  // the key that will go into the url
  URLColumnName: string
  // the column name who's value will be used
  matchColumnName: string
  isMarkdown: false
  // the value that will go into the url link should be surrounded with parenthesis, making the search
  // param study=(ROSMAP) instead of study=ROSMAP
  wrapValueWithParens?: boolean
  // If set and a value exists in this column for the row, just use this value for the href
  overrideLinkURLColumnName?: string
  // If set, also show a tooltip
  tooltipText?: string
}

export type MarkdownLink = {
  isMarkdown: true
  // the columns whos value will be used for the markdown
  matchColumnName: string
  // If set, also show a tooltip
  tooltipText?: string
}

export type CTACardLink = {
  // link text
  text: string
  // column name to use for href
  link: string
}

export type DescriptionConfig = {
  isMarkdown?: boolean
  showFullDescriptionByDefault?: boolean
}

// Specify the indices in the values [] that should be rendered specially
export type LabelLinkConfig = (MarkdownLink | CardLink | ColumnSpecifiedLink)[]

export type ColumnIconConfigs = {
  columns: {
    [index: string]: {
      [index: string]: IconSvgOptions
    }
  }
}

export type CommonCardProps = {
  genericCardSchema?: GenericCardSchema
  secondaryLabelLimit?: number
  titleLinkConfig?: CardLink
  ctaLinkConfig?: CTACardLink
  labelLinkConfig?: LabelLinkConfig
  descriptionConfig?: DescriptionConfig
  rgbIndex?: number
  columnIconOptions?: ColumnIconConfigs
}
export type CardConfiguration = {
  type: string
  hasInternalLink?: boolean
  iconOptions?: IconOptions
} & CommonCardProps

export type CardContainerLogicProps = {
  limit?: number
  title?: string
  unitDescription?: string
  sqlOperator?: SQLOperator
  searchParams?: KeyValue
  facetAliases?: Record<string, string>
  rgbIndex?: number
  isHeader?: boolean
  isAlignToLeftNav?: boolean
  sql: string
} & CardConfiguration

/**
 * Class wraps around CardContainer and serves as a standalone logic container for rendering cards.
 */
export const CardContainerLogic = (props: CardContainerLogicProps) => {
  const sql = insertConditionsFromSearchParams(
    props.sql,
    props.searchParams,
    props.sqlOperator,
  )
  const initQueryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: parseEntityIdFromSqlStatement(sql),
    query: {
      sql: sql,
      limit: props.limit,
    },
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
      SynapseConstants.BUNDLE_MASK_QUERY_COUNT |
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE |
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
      SynapseConstants.BUNDLE_MASK_SUM_FILES_SIZE_BYTES |
      SynapseConstants.BUNDLE_MASK_LAST_UPDATED_ON,
  }

  return (
    <QueryWrapper {...props} initQueryRequest={initQueryRequest}>
      <QueryVisualizationWrapper
        rgbIndex={props.rgbIndex}
        unitDescription={props.unitDescription}
        facetAliases={props.facetAliases}
      >
        <CardContainer {...props} />
        <QueryContextConsumer>
          {queryContext => <ErrorBanner error={queryContext?.error} />}
        </QueryContextConsumer>
      </QueryVisualizationWrapper>
    </QueryWrapper>
  )
}

export default CardContainerLogic
