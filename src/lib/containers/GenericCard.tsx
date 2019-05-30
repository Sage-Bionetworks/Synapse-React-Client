import * as React from 'react'
import * as Utils from './row_renderers/utils'

export type GenericCardSchema = {
  type: string
  title: string
  subTitle: string
  description: string
  icon: string
  secondaryLabels: []
}

export type GenericCardProps = {
  schema: GenericCardSchema,
  data: any
}

export type GenericCardState = {
  showMoreDescription: boolean
  showMoreSecondayLabels: boolean
}

export default class GenericCard extends React.Component<GenericCardProps, GenericCardState> {

  constructor(props: GenericCardProps) {
    super(props)
    this.state = {
      showMoreDescription: false,
      showMoreSecondayLabels: false
    }
  }

  public toggleShowMoreDescription(_event: React.SyntheticEvent) {
    this.setState({
      showMoreDescription: !this.state.showMoreDescription
    })
  }

  public toggleshowMoreSecondayLabels(_event: React.SyntheticEvent) {
    this.setState({
      showMoreSecondayLabels: !this.state.showMoreSecondayLabels
    })
  }

  render() {
    const { schema, data } = this.props
    const type = data[schema.type]
    const title = data[schema.title]
    const subTitle = data[schema.subTitle]
    const description = data[schema.description]
    const icon = data[schema.icon]

    const values: string [][] = []
    for (let i = 0; i < schema.secondaryLabels.length; i += 1) {
      const key =  schema.secondaryLabels[i]
      const keyValue = [key, data[key]]
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
        <Utils.CardFooter values={values}/>
      </div>
    )
  }
}
