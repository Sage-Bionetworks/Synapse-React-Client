import * as React from 'react'

type ConsortiumState = {
  showMore: boolean
  hasCreatedIndex: boolean
}

type ConsortiumProps = {
  token?: string
  ownerId?: string
  isHeader?: boolean
  data?: any
  schema?: any
}

export default class Consortium extends React.Component<ConsortiumProps, ConsortiumState> {

  constructor(props: ConsortiumProps) {
    super(props)
    this.state = {
      hasCreatedIndex: false,
      showMore: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.getIcon = this.getIcon.bind(this)
  }

  public handleClick(event: React.SyntheticEvent) {
    this.setState({
      showMore: !this.state.showMore
    })
  }

  public getIcon(org: string, isHeader: boolean) {
        // This CAN NOT be refactored below -- dynamic imports are currently not supported
        // in es6, so the code below already has static references to the files below
        // even though its baked into if else clauses.
    switch (org) {
      case 'AMP-AD':
        if (isHeader) {
          return <img src={require('../../../assets/icons/AMP_AD/consortia-icons/amp-icon-header.svg')}/>
        }
        return <img src={require('../../../assets/icons/AMP_AD/consortia-icons/amp-icon.svg')}/>
      case 'M2OVE-AD':
        if (isHeader) {
          return <img src={require('../../../assets/icons/AMP_AD/consortia-icons/move-icon-header.svg')}/>
        }
        return <img src={require('../../../assets/icons/AMP_AD/consortia-icons/move-icon.svg')}/>
      case 'MODEL-AD':
        if  (isHeader) {
          return <img src={require('../../../assets/icons/AMP_AD/consortia-icons/ModelAD-icon-header.svg')}/>
        }
        return <img src={require('../../../assets/icons/AMP_AD/consortia-icons/ModelAD-icon.svg')}/>
      case 'Resilience-AD':
        if (isHeader) {
                    // ignore long require, this is inevitable
                    // tslint:disable-next-line
                    return <img src={require("../../../assets/icons/AMP_AD/consortia-icons/resilience-icon-header.svg")}/>
        }
        return <img src={require('../../../assets/icons/AMP_AD/consortia-icons/resilience-icon.svg')}/>
      default:
        return (false)
    }
  }

  public render() {
    const { data, schema } = this.props

    const description = data[schema['Short Description']]
    const name = data[schema['Full Name']]
    const org = data[schema.Program]

    const path = data[schema.Path]
    const orgPath = `${window.location.origin}/#${path}`

    const isOnOrgPath = window.location.hash.substring(1) === path

    return (
            <div
                style={{ paddingBottom: '32px' }}
                className="SRC-portalCard SRC-typeStudy SRC-layoutLandscape SRC-showMetadata"
            >
                <div className="SRC-cardThumbnail">
                    {this.getIcon(org, isOnOrgPath)}
                </div>
                <div className="SRC-cardContent">
                    <div className="SRC-type">Program</div>
                    <div className="SRC-title">
                        <h3>
                            {!isOnOrgPath && <a target="_blank" href={orgPath}> {name} </a>}
                            {isOnOrgPath && name}
                        </h3>
                    </div>
                    <span className="SRC-font-size-base">
                        {description}
                    </span>
                </div>
            </div>

    )
  }
}
