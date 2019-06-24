import * as React from 'react'
import { STUDY } from '../../../utils/SynapseConstants'
import * as Utils from './../utils'

type CSBCPublicationState = {
  showMore: boolean
}

type CSBCPublicationProps = {
  data?: any
  schema?: any
}

class CSBCPublication extends React.Component<CSBCPublicationProps, CSBCPublicationState> {

  constructor(props: CSBCPublicationProps) {
    super(props)
    this.state = {
      showMore: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  public handleClick(_event: React.SyntheticEvent) {
    this.setState({
      showMore: !this.state.showMore
    })
  }

  public render() {
    const { data, schema } = this.props
    const name = data[schema.name]
    const assay = data[schema.experimentalStrategy]
    const consortium = data[schema.consortium]
    const diseaseType = data[schema.tumorType]
    const centerName = data[schema.centerName]
    const grantType = data[schema.grantType]
    const theme = data[schema.Theme]
    const id = data[schema.id]
    const description = data[schema.description]

    const values = [
      ['Theme', theme],
      ['Assay', assay],
      ['Disease Type', diseaseType],
      ['Grant Type', grantType],
      ['Program', consortium],
    ]

    return (
      <div className="SRC-portalCard SRC-typePublication  ">
          <div className="SRC-cardThumbnail">
              <Utils.Icon type={STUDY} />
          </div>
          <div className="SRC-cardContent">
              <div className="SRC-type"> Study </div>
              <div className="SRC-title">
                <h3 className="SRC-boldText SRC-blackText" style={{ margin: 'none' }}>
                  {
                    id &&
                    (<a className="SRC-primary-text-color" target="_self" href={id ? `https://www.synapse.org/#!Synapse:${id}` : undefined}>
                      {name}
                    </a>)
                  }
                  {
                    !id &&
                    name
                  }
                </h3>
              </div>
              <div className="SRC-author"> {centerName} </div>
              <span className="SRC-font-size-base">
                {description}
              </span>
          </div>
          <Utils.CardFooter  values={values} />
      </div>
    )
  }
}
export default CSBCPublication
