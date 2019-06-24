import * as React from 'react'
import * as Utils from '../utils'
import projectSvg from '../../../assets/icons/project.svg'

type ProjectState = {
  showMore: boolean
  hasCreatedIndex: boolean
}

type ProjectProps = {
  data?: any
  schema?: any
  secondaryLabelLimit?: number
}

export default class Project extends React.Component<ProjectProps, ProjectState> {

  constructor(props: ProjectProps) {
    super(props)
    this.state = {
      hasCreatedIndex: false,
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

    const abstract = data[schema.summary]
        // const consortium = data[schema.Consortium]
    const grantNumber = data[schema.grantNumber]
    const investigators = data[schema.keyInvestigators]
    const link = `https://www.synapse.org/#!Synapse:${data[schema.id]}`
    const name = data[schema.name]
    const subtitle = `${data[schema.grantType]} | ${data[schema.institution]}`
    const consortium = data[schema.consortium]
    const values: string[][] = [[]]
    if (grantNumber) {
      values.push(['GRANT', grantNumber])
    }
    if (investigators) {
      values.push(['INVESTIGATORS', investigators])
    }
    if (consortium) {
      values.push(['PROGRAM', consortium])
    }

    return (
      <div className="SRC-portalCard SRC-typeStudy  ">
        <div className="SRC-cardThumbnail">
          <img className="iconImg" alt="" src={projectSvg}/>
        </div>
        <div className="SRC-cardContent">
            <div className="SRC-type">Project</div>
            <div className="SRC-title">
              <h3>
                <a className="SRC-primary-text-color" target="_self" href={link}>
                  {name}
                </a>
              </h3>
            </div>
            <div className="SRC-author">{subtitle}</div>
            <span className="SRC-font-size-base">
                <Utils.ShowMore onClick={this.handleClick} summary={abstract} />
            </span>
        </div>
        <Utils.CardFooter secondaryLabelLimit={this.props.secondaryLabelLimit} values={values} />
      </div>
    )
  }
}
