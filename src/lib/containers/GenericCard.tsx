import * as React from 'react'
import HeaderCard from './HeaderCard'
import { CardFooter, Icon } from './row_renderers/utils'
import {
  CardLink,
  CommonCardProps,
  MarkdownLink,
  MarkdownValue,
} from './CardContainerLogic'
import { unCamelCase } from '../utils/functions/unCamelCase'
import MarkdownSynapse from './MarkdownSynapse'
import { SelectColumn, ColumnModel, ColumnType } from '../utils/synapseTypes'
import { SynapseConstants } from '../utils'
import { FileHandleLink } from './widgets/FileHandleLink'

export type KeyToAlias = {
  key: string
  alias?: string
}

export type KeyToAliasMap = {
  [index: number]: KeyToAlias
  [index: string]: KeyToAlias
}

export type GenericCardSchema = {
  type: string
  title: string
  subTitle?: string
  description?: string
  icon?: string
  secondaryLabels?: any[]
  link?: string
}

export type IconOptions = {
  [index: string]: string
}

export type GenericCardProps = {
  selectColumns?: SelectColumn[]
  columnModels?: ColumnModel[]
  facetAliases?: {}
  iconOptions?: IconOptions
  backgroundColor?: string
  isHeader?: boolean
  isAlignToLeftNav?: boolean
  schema: any
  data: any
  token?: string
  tableEntityConcreteType: string | undefined
  tableId: string | undefined
  columnIconOptions?: {}
} & CommonCardProps

export type GenericCardState = {
  hasClickedShowMore: boolean
}

const CHAR_COUNT_CUTOFF = 400
export const CARD_SHORT_DESCRIPTION_CSS = 'SRC-short-description'
export const CARD_LONG_DESCRIPTION_CSS = 'SRC-long-description'

// doi regex here - https://www.crossref.org/blog/dois-and-matching-regular-expressions/
// note - had to add an escape character for the second and third forward slash in the regex above
export const DOI_REGEX = /^10.\d{4,9}\/[-._;()\/:a-z0-9]+$/i
// check for 'syn' followed and ended by a digit of unlimited length, must also begin the line
export const SYNAPSE_REGX = /^syn\d+\.?\d+$/

// This function isn't in the class only for ease of testing with renderShortDescription
export const getCutoff = (summary: string) => {
  let previewText = ''
  const summarySplit = summary!.split(' ')
  // find num words to join such that its >= char_count_cutoff
  let i = 0
  while (previewText.length < CHAR_COUNT_CUTOFF && i < summarySplit.length) {
    previewText += `${summarySplit[i]} `
    i += 1
  }
  previewText = previewText.trim()
  return { previewText }
}

export const renderValueOrMultiValue = ({
  columnName,
  value,
  selectColumns,
  columnModels,
}: {
  columnName: string | undefined
  value: string
  selectColumns?: SelectColumn[]
  columnModels?: ColumnModel[]
}): ValueOrMultiValue => {
  if (!value) {
    return {
      str: '',
      strList: undefined,
    }
  }
  const selectedColumnOrUndefined =
    selectColumns?.find(el => el.name === columnName) ||
    columnModels?.find(el => el.name === columnName)
  const isMultiValue =
    selectedColumnOrUndefined?.columnType === 'STRING_LIST' ||
    selectedColumnOrUndefined?.columnType === 'INTEGER_LIST'

  if (isMultiValue) {
    let val: any = value
    let strList: any
    try {
      strList = JSON.parse(val)
      val = (strList as string[]).join(', ')
      return {
        strList,
        str: val,
      }
    } catch (e) {
      console.error(
        'Could not parse multivalue string ',
        val,
        ' caught err ',
        e,
      )
    }
  }
  return { str: value }
}

export const renderLabel = (args: {
  value: string
  columnName: string
  labelLink: CardLink | MarkdownLink | undefined
  selectColumns: SelectColumn[] | undefined
  columnModels: ColumnModel[] | undefined
  isHeader: boolean
}) => {
  const {
    value,
    columnName,
    labelLink,
    selectColumns,
    columnModels,
    isHeader,
  } = args
  if (!value) {
    return value
  }
  const { strList, str } = renderValueOrMultiValue({
    columnName,
    value,
    selectColumns,
    columnModels,
  })

  if (!str) {
    // the array came back empty
    return str
  }

  let className = ''
  const style: React.CSSProperties = {}
  if (isHeader) {
    className = 'SRC-lightLink'
  } else {
    className = 'SRC-primary-text-color'
  }

  if (!labelLink) {
    // if this looks like a Synapse ID, then autolink.
    if (str.match(SYNAPSE_REGX)) {
      // its a synId
      return <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.synapse.org/#!Synapse:${str}`} className={className}>
          {str}
        </a>
    } else {
      // they don't need a link
      return str
    }
  }

  if (labelLink.isMarkdown) {
    if (strList) {
      return strList.map((el, index) => {
        return (
          <span>
            <MarkdownSynapse key={el} renderInline={true} markdown={el} />
            {/* \u00a0 is a nbsp; */}
            {index < strList.length - 1 && ",\u00a0\u00a0"}
          </span>
        )
      })
    } else {
      return <MarkdownSynapse renderInline={true} markdown={value} />
    }
  }
  const split = strList ? strList : str.split(',')
  return split.map((el, index) => {
    const { baseURL, URLColumnName, wrapValueWithParens } = labelLink
    const value = wrapValueWithParens ? `(${el})` : el
    const href = `/${baseURL}?${URLColumnName}=${value}`
    return (
      <React.Fragment key={el}>
        <a href={href} key={el} className={className} style={style}>
          {el}
        </a>
        {index < split.length - 1 && <span style={{ marginRight: 4 }}>, </span>}
      </React.Fragment>
    )
  })
}

type ValueOrMultiValue = {
  str: string
  strList?: string[]
}

export default class GenericCard extends React.Component<
  GenericCardProps,
  GenericCardState
> {
  constructor(props: GenericCardProps) {
    super(props)
    this.state = {
      hasClickedShowMore: false,
    }
    this.getTitleParams = this.getTitleParams.bind(this)
    this.renderLongDescription = this.renderLongDescription.bind(this)
    this.renderShortDescription = this.renderShortDescription.bind(this)
  }

  public getTitleParams(
    link: string,
    titleLink: CardLink | undefined,
    data: string[] | undefined,
    schema: any | undefined,
  ): {
    href: string
    target: string
  } {
    link = link.trim()
    let href = link
    let target = '_self'
    if (link.match(SYNAPSE_REGX)) {
      // its a synId
      href = `https://www.synapse.org/#!Synapse:${link}`
    } else if (link.match(DOI_REGEX)) {
      target = '_blank'
      href = `https://dx.doi.org/${link}`
    } else if (!titleLink) {
      target = '_blank'
    } else if (titleLink) {
      if (!data || !schema) {
        throw Error('Must specify CardLink and data for linking to work')
      }
      const { matchColumnName, URLColumnName } = titleLink
      const indexInData = schema[matchColumnName]
      if (indexInData === undefined) {
        console.error(
          `Could not find match for data: ${data} with columnName ${matchColumnName}`,
        )
      } else {
        const value = data[indexInData]
        href = `/${titleLink.baseURL}?${URLColumnName}=${value}`
      }
    }
    return { href, target }
  }

  getCutoff = (summary: string) => {
    let previewText = ''
    const summarySplit = summary!.split(' ')
    // find num words to join such that its >= char_count_cutoff
    let i = 0
    while (previewText.length < CHAR_COUNT_CUTOFF && i < summarySplit.length) {
      previewText += `${summarySplit[i]} `
      i += 1
    }
    previewText = previewText.trim()
    return { previewText }
  }

  toggleShowMore = () => {
    this.setState({
      hasClickedShowMore: true,
    })
  }

  renderTitle = ({
    href,
    target,
    titleSearchHandle,
    title,
  }: {
    target: string
    titleSearchHandle: string | undefined
    title: string
    href: string
  }) => {
    if (href) {
      return (
        <a
          data-search-handle={titleSearchHandle}
          className="SRC-primary-text-color"
          target={target}
          href={href}
        >
          {title}
        </a>
      )
    } else {
      return <span data-search-handle={titleSearchHandle}> {title} </span>
    }
  }

  render() {
    const {
      schema,
      data,
      genericCardSchema,
      secondaryLabelLimit,
      backgroundColor,
      selectColumns,
      columnModels,
      iconOptions,
      isHeader = false,
      titleLinkConfig,
      labelLinkConfig,
      facetAliases = {},
      descriptionLinkConfig,
      rgbIndex,
      tableId,
      tableEntityConcreteType,
      columnIconOptions,
      token,
    } = this.props
    // GenericCard inherits properties from CommonCardProps so that the properties have the same name
    // and type, but theres one nuance which is that we can't override if one specific property will be
    // defined, so we assert genericCardSchema is not null and assign to genericCardSchemaDefined
    const genericCardSchemaDefined = genericCardSchema!
    const { hasClickedShowMore } = this.state
    const { link = '', type } = genericCardSchemaDefined
    const title = data[schema[genericCardSchemaDefined.title]]
    let subTitle =
      genericCardSchemaDefined.subTitle &&
      data[schema[genericCardSchemaDefined.subTitle]]
    subTitle =
      genericCardSchemaDefined?.subTitle &&
      renderValueOrMultiValue({
        value: subTitle,
        columnName: genericCardSchemaDefined?.subTitle,
        selectColumns,
        columnModels,
      }).str
    const description = data[schema[genericCardSchemaDefined.description || '']]
    const iconValue = data[schema[genericCardSchemaDefined.icon || '']]
    const titleColumnModel = columnModels?.find(
      el => genericCardSchemaDefined.link === el.name,
    )
    const titleColumnType = titleColumnModel?.columnType
    // wrap link in parens because undefined would throw an error
    const linkValue: string = data[schema[link]] || ''
    const { href, target } = this.getTitleParams(
      linkValue,
      titleLinkConfig,
      data,
      schema,
    )
    const values: string[][] = []
    const { secondaryLabels = [] } = genericCardSchemaDefined
    for (let i = 0; i < secondaryLabels.length; i += 1) {
      const columnName = secondaryLabels[i]
      let value = data[schema[columnName]]
      if (value) {
        const labelLink = labelLinkConfig?.find(
          el => el.matchColumnName === columnName,
        )
        value = renderLabel({
          value,
          columnName,
          labelLink,
          isHeader,
          selectColumns,
          columnModels,
        })
        const columnDisplayName = unCamelCase(columnName, facetAliases)
        const keyValue = [columnDisplayName, value, columnName]
        values.push(keyValue)
      }
    }

    const showFooter = values.length > 0

    const style: React.CSSProperties = {
      background: backgroundColor,
      // undefined, take default value from class
      marginTop: isHeader ? '0px' : undefined,
      marginBottom: isHeader ? '0px' : undefined,
      paddingBottom: showFooter ? undefined : '15px',
    }

    if (isHeader) {
      return (
        <HeaderCard
          descriptionLinkConfig={descriptionLinkConfig}
          type={type}
          title={title}
          subTitle={subTitle}
          backgroundColor={backgroundColor}
          description={description}
          iconValue={iconValue}
          iconOptions={iconOptions}
          values={values}
          href={href}
          target={target}
          isAlignToLeftNav={true}
          secondaryLabelLimit={secondaryLabelLimit}
          rgbIndex={rgbIndex}
        />
      )
    }

    const titleSearchHandle = unCamelCase(
      genericCardSchemaDefined.title,
      facetAliases,
    )
    const stubTitleSearchHandle = unCamelCase(
      genericCardSchemaDefined.subTitle,
      facetAliases,
    )
    const descriptionSubTitle = unCamelCase(
      genericCardSchemaDefined.description,
      facetAliases,
    )

    return (
      <div style={style} className={'SRC-portalCard'}>
        <div className="SRC-cardThumbnail">
          <Icon iconOptions={iconOptions} value={iconValue} type={type} />
        </div>
        <div className="SRC-cardContent">
          <div className="SRC-type">{type}</div>
          <div>
            <h3
              className="SRC-boldText SRC-blackText"
              style={{ margin: 'none' }}
            >
              {!titleLinkConfig &&
              titleColumnType === ColumnType.FILEHANDLEID ? (
                <FileHandleLink
                  token={token}
                  fileHandleId={linkValue}
                  tableEntityConcreteType={tableEntityConcreteType}
                  showDownloadIcon={type !== SynapseConstants.EXPERIMENTAL}
                  rowId={data![schema.id]}
                  tableId={tableId}
                  displayValue={title}
                />
              ) : (
                this.renderTitle({
                  href,
                  target,
                  titleSearchHandle,
                  title,
                })
              )}
            </h3>
          </div>
          {subTitle && (
            <div
              data-search-handle={stubTitleSearchHandle}
              className="SRC-author"
            >
              {subTitle}
            </div>
          )}
          {/* 
            Below is a hack that allows word highlighting to work, the Search component insert's
            html elements outside of the React DOM which if detected would break the app,
            but as written below this avoids that reconcilliation process.
          */}
          {description &&
            this.renderShortDescription(
              description,
              hasClickedShowMore,
              descriptionSubTitle,
              descriptionLinkConfig,
            )}
          {description &&
            this.renderLongDescription(
              description,
              hasClickedShowMore,
              descriptionSubTitle,
              descriptionLinkConfig,
              this.props.token,
            )}
        </div>
        {showFooter && (
          <CardFooter
            isHeader={false}
            secondaryLabelLimit={secondaryLabelLimit}
            values={values}
            columnIconOptions={columnIconOptions}
          />
        )}
      </div>
    )
  }

  public renderLongDescription(
    description: string,
    hasClickedShowMore: boolean,
    descriptionSubTitle: any,
    descriptionLinkConfig?: MarkdownValue,
    token?: string,
  ): React.ReactNode {
    let content: JSX.Element | string = description
    if (descriptionLinkConfig?.isMarkdown) {
      content = <MarkdownSynapse token={token} markdown={content} />
    }
    const show = hasClickedShowMore || descriptionLinkConfig
    return (
      <div className={show ? '' : 'SRC-hidden'}>
        <span
          data-search-handle={descriptionSubTitle}
          className={`SRC-font-size-base ${CARD_LONG_DESCRIPTION_CSS}`}
        >
          {content}
        </span>
      </div>
    )
  }

  public renderShortDescription(
    description: string,
    hasClickedShowMore: boolean,
    descriptionSubTitle: any,
    descriptionLinkConfig?: MarkdownValue,
  ): React.ReactNode {
    if (descriptionLinkConfig) {
      return <></>
    }
    return (
      <div className={hasClickedShowMore ? 'SRC-hidden' : ''}>
        <span
          data-search-handle={descriptionSubTitle}
          className={`SRC-font-size-base ${CARD_SHORT_DESCRIPTION_CSS} SRC-short-description`}
        >
          {getCutoff(description).previewText}
        </span>
        {description.length >= CHAR_COUNT_CUTOFF && (
          <button
            style={{
              fontSize: '14px',
              cursor: 'pointer',
              marginLeft: '-2px',
            }}
            className="SRC-primary-text-color"
            onClick={this.toggleShowMore}
          >
            ...Show More
          </button>
        )}
      </div>
    )
  }
}
