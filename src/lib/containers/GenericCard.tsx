import * as React from 'react'
import HeaderCard from './HeaderCard'
import { CardFooter, Icon } from './row_renderers/utils'
import { CardLink, CommonCardProps, MarkdownLink } from './CardContainerLogic'
import { unCamelCase } from '../utils/functions/unCamelCase'
import MarkdownSynapse from './MarkdownSynapse'

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
  facetAliases?: {}
  iconOptions?: IconOptions
  backgroundColor?: string
  isHeader?: boolean
  isAlignToLeftNav?: boolean
  schema: any
  data: any
} & CommonCardProps

export type GenericCardState = {
  showMoreDescription: boolean
}

const CHAR_COUNT_CUTOFF = 400
export const CARD_SHORT_DESCRIPTION_CSS = 'SRC-short-description'
export const CARD_LONG_DESCRIPTION_CSS = 'SRC-long-description'

// doi regex here - https://www.crossref.org/blog/dois-and-matching-regular-expressions/
// note - had to add an escape character for the second slash in the regex above
export const DOI_REGEX = /^10.\d{4,9}\/[-._;()/:a-z0-9]+$/
// check for 'syn' followed and ended by a digit of unlimited length, must also begin the line
export const SYNAPSE_REGX = /^syn\d+$/

export default class GenericCard extends React.Component<
  GenericCardProps,
  GenericCardState
> {
  constructor(props: GenericCardProps) {
    super(props)
    this.state = {
      showMoreDescription: false,
    }
    this.renderTitleLink = this.renderTitleLink.bind(this)
    this.renderLabel = this.renderLabel.bind(this)
  }

  public renderTitleLink(
    link: string,
    titleLink?: CardLink,
    data?: string[],
    schema?: any,
  ) {
    let linkDisplay = link
    let target = '_self'
    if (link.match(SYNAPSE_REGX)) {
      // its a synId
      linkDisplay = `https://www.synapse.org/#!Synapse:${link}`
    } else if (link.match(DOI_REGEX)) {
      target = '_blank'
      linkDisplay = `https://dx.doi.org/${link}`
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
        linkDisplay = `/${titleLink.baseURL}?${URLColumnName}=${value}`
      }
    }
    return { linkDisplay, target }
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
      showMoreDescription: true,
    })
  }

  public renderLabel(
    value: string,
    labelLink: CardLink | MarkdownLink,
    isHeader: boolean,
  ) {
    if (labelLink.isMarkdown) {
      return <MarkdownSynapse renderInline={true} markdown={value} />
    }
    const split = value.split(',')
    let className = ''
    const style: React.CSSProperties = {}
    if (isHeader) {
      className = 'SRC-lightLink'
    } else {
      className = 'SRC-primary-text-color'
    }
    return split.map((el, index) => {
      const { baseURL, URLColumnName } = labelLink
      const href = `/${baseURL}?${URLColumnName}=${el}`
      return (
        <React.Fragment key={el}>
          <a href={href} key={el} className={className} style={style}>
            {el}
          </a>
          {index < split.length - 1 && (
            <span style={{ marginRight: 4 }}> , </span>
          )}
        </React.Fragment>
      )
    })
  }

  render() {
    const {
      schema,
      data,
      genericCardSchema,
      secondaryLabelLimit,
      backgroundColor,
      iconOptions,
      isHeader = false,
      titleLinkConfig,
      labelLinkConfig,
      facetAliases = {},
      isAlignToLeftNav = false,
    } = this.props
    // GenericCard inherits properties from CommonCardProps so that the properties have the same name
    // and type, but theres one nuance which is that we can't override if one specific property will be
    // defined, so we assert genericCardSchema is not null and assign to genericCardSchemaDefined
    const genericCardSchemaDefined = genericCardSchema!
    const { showMoreDescription } = this.state
    const { link = '', type } = genericCardSchemaDefined
    const title = data[schema[genericCardSchemaDefined.title]]
    const subTitle =
      genericCardSchemaDefined.subTitle &&
      data[schema[genericCardSchemaDefined.subTitle]]
    const description = data[schema[genericCardSchemaDefined.description || '']]
    const iconValue = data[schema[genericCardSchemaDefined.icon || '']]
    // wrap link in parens because undefined would throw an error
    const linkValue: string = data[schema[link]] || ''
    const { linkDisplay, target } = this.renderTitleLink(
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
        const labelLink =
          labelLinkConfig &&
          labelLinkConfig.find(el => el.matchColumnName === columnName)
        if (labelLink) {
          // create link for this column
          value = this.renderLabel(value, labelLink, isHeader)
        }
        const columnDisplayName =
          facetAliases[columnName] || unCamelCase(columnName)
        const keyValue = [columnDisplayName, value]
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
          type={type}
          title={title}
          subTitle={subTitle}
          backgroundColor={backgroundColor}
          description={description}
          iconValue={iconValue}
          iconOptions={iconOptions}
          values={values}
          isAlignToLeftNav={isAlignToLeftNav}
          secondaryLabelLimit={secondaryLabelLimit}
        />
      )
    }

    const titleSearchHandle =
      facetAliases[genericCardSchemaDefined.title] ||
      unCamelCase(genericCardSchemaDefined.title)
    const stubTitleSearchHandle =
      facetAliases[genericCardSchemaDefined.subTitle || ''] ||
      unCamelCase(genericCardSchemaDefined.subTitle)
    const descriptionSubTitle =
      facetAliases[genericCardSchemaDefined.description || ''] ||
      unCamelCase(genericCardSchemaDefined.description)
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
              {linkDisplay ? (
                <a
                  data-search-handle={titleSearchHandle}
                  className="SRC-primary-text-color"
                  target={target}
                  href={linkDisplay}
                >
                  {title}
                </a>
              ) : (
                <span data-search-handle={titleSearchHandle}> {title} </span>
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
            Below is a hack that allows word highlighting to work, the Search componenet insert's
            html elements outside of the React DOM which if detected would break the app,
            but as written below this avoids that reconcilliation process.
          */}
          {description && (
            <div className={showMoreDescription ? 'SRC-hidden' : ''}>
              <span
                data-search-handle={descriptionSubTitle}
                className={`SRC-font-size-base ${CARD_SHORT_DESCRIPTION_CSS} SRC-short-description`}
              >
                {this.getCutoff(description).previewText}
              </span>
              {description.length >= CHAR_COUNT_CUTOFF && (
                <a
                  style={{
                    fontSize: '14px',
                    cursor: 'pointer',
                    marginLeft: '3px',
                  }}
                  className="SRC-primary-text-color"
                  onClick={this.toggleShowMore}
                >
                  ...Show More
                </a>
              )}
            </div>
          )}
          {description && (
            <div className={showMoreDescription ? '' : 'SRC-hidden'}>
              <span
                data-search-handle={descriptionSubTitle}
                className={`SRC-font-size-base ${CARD_LONG_DESCRIPTION_CSS}`}
              >
                {description}
              </span>
            </div>
          )}
        </div>
        {showFooter && (
          <CardFooter
            isHeader={false}
            secondaryLabelLimit={secondaryLabelLimit}
            values={values}
          />
        )}
      </div>
    )
  }
}
