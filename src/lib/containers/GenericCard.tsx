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
  subTitle: string
  description: string
  icon: string
  secondaryLabels: KeyAndAliasMap
}

export type GenericCardProps = {
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
    const { schema, data, genericCardSchema, secondaryLabelLimit } = this.props
    const type = genericCardSchema.type
    const title = data[schema[genericCardSchema.title]]
    const subTitle = data[schema[genericCardSchema.subTitle]]
    const description = data[schema[genericCardSchema.description]]
    const icon = data[schema[genericCardSchema.icon]]

    const values: string [][] = []
    for (let i = 0; i < Object.keys(genericCardSchema.secondaryLabels).length; i += 1) {
      const { key, alias = '' } =  genericCardSchema.secondaryLabels[i]
      const displayValue = alias ? alias : key
      const keyValue = [displayValue, data[schema[key]]]
      values.push(keyValue)
    }

    return (
      <div className="SRC-portalCard SRC-layoutLandscape SRC-showMetadata">
        <div className="SRC-cardThumbnail">
          <Utils.Icon type={icon} />
        </div>
        <div className="SRC-cardContent">
          <div className="SRC-type"> {type} </div>
          <div className="SRC-title">
            <h3 className="SRC-boldText SRC-blackText" style={{ margin: 'none' }}>
              <a className="SRC-primary-text-color" target="_blank" href={''}>
                {title}
              </a>
            </h3>
          </div>
          <div className="SRC-author"> {subTitle} </div>
          <span className="SRC-font-size-base">
            <Utils.ShowMore onClick={this.toggleShowMoreDescription} summary={description} />
          </span>
        </div>
        <Utils.CardFooter secondaryLabelLimit={secondaryLabelLimit} values={values}/>
      </div>
    )
  }
}
