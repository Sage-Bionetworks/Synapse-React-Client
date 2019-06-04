import * as React from 'react'
import * as Utils from './row_renderers/utils'

type KeyAndAlias = {
  key: string
  alias?: string
}

type KeyAndAliasMap = {
  [index: number]: KeyAndAlias
}

export type GenericCardSchema = {
  type: string
  title: string
  subTitle?: string
  description: string
  icon: string
  secondaryLabels?: KeyAndAliasMap
}

export type IconOptions = {
  [index: string]: string
}
export type GenericCardProps = {
  iconOptions?: IconOptions
  backgroundColor?: string
  isHeader?: boolean
  genericCardSchema: GenericCardSchema,
  schema: any,
  data: any
  secondaryLabelLimit?: number
}

export type GenericCardState = {
  showMoreDescription: boolean
}

export default class GenericCard extends React.Component<GenericCardProps, GenericCardState> {

  constructor(props: GenericCardProps) {
    super(props)
    this.state = {
      showMoreDescription: false,
    }
  }

  public toggleShowMoreDescription(_event: React.SyntheticEvent) {
    this.setState({
      showMoreDescription: !this.state.showMoreDescription
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
      isHeader = false
    } = this.props
    const type = genericCardSchema.type
    const title = data[schema[genericCardSchema.title]]
    const subTitle = genericCardSchema.subTitle && data[schema[genericCardSchema.subTitle]]
    const description = data[schema[genericCardSchema.description]]
    const icon = data[schema[genericCardSchema.icon]]

    const values: string [][] = []
    if (genericCardSchema.secondaryLabels) {
      for (let i = 0; i < Object.keys(genericCardSchema.secondaryLabels).length; i += 1) {
        const { key, alias = '' } =  genericCardSchema.secondaryLabels[i]
        const displayValue = alias ? alias : key
        const keyValue = [displayValue, data[schema[key]]]
        values.push(keyValue)
      }
    }

    const style: React.CSSProperties = {
      background: backgroundColor,
      // undefined, take default value from class
      marginTop: isHeader ? '0px' : undefined,
      marginBottom: isHeader ? '0px' : undefined
    }
    return (
      <div
        style={style}
        className={`SRC-portalCard SRC-layoutLandscape SRC-showMetadata ${isHeader ? 'SRC-cardHeader' : ''} `}
      >
        <div className="SRC-cardThumbnail">
          {iconOptions ? <img src={iconOptions[icon]} className="iconImg"/> : <Utils.Icon type={icon} />}
        </div>
        <div className="SRC-cardContent">
          <div className="SRC-type">{type}</div>
          <div className="SRC-title">
            <h3 className="SRC-boldText SRC-blackText" style={{ margin: 'none' }}>
              {
                isHeader ?
                    title
                    :
                    <a className="SRC-primary-text-color" target="_blank" href={''}>
                      {title}
                    </a>
              }
            </h3>
          </div>
            {subTitle && <div className="SRC-author"> {subTitle} </div>}
          <span className="SRC-font-size-base">
            {isHeader ? description : <Utils.ShowMore onClick={this.toggleShowMoreDescription} summary={description} />}
          </span>
        </div>
        {genericCardSchema.secondaryLabels
          && <Utils.CardFooter secondaryLabelLimit={secondaryLabelLimit} values={values}/>
        }
      </div>
    )
  }
}
