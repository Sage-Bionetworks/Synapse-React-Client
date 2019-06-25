import * as React from 'react'
import { STUDY_ACTIVE, STUDY_COMPLETE } from '../../utils/SynapseConstants'
import * as Utils from './utils/index'

type StudyState = {
  showMore: boolean
  hasCreatedIndex: boolean
}

type StudyProps = {
  data?: any
  schema?: any
  secondaryLabelLimit?:number
}

export default class Study extends React.Component<StudyProps, StudyState> {

  constructor(props: StudyProps) {
    super(props)
    this.state = {
      hasCreatedIndex: false,
      showMore: false
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
    const projectName: string = data[schema.projectName]
    const projectLeads: string = data[schema.projectLeads] && data[schema.projectLeads].split(';').join(' / ')
    const summary: string = data[schema.summary]
    const diseaseFocus: string = data[schema.diseaseFocus]
    const tumorType: string = data[schema.tumorType]
    const projectStatus: string = data[schema.projectStatus]
    const fundingAgency: string = data[schema.fundingAgency]
    const dataStatus: string = data[schema.dataStatus]
    const id: string = data[schema.id]
    const link: string = `https://www.synapse.org/#!Synapse:${id}`
    const values: string [][] = [
      ['STATUS', projectStatus],
      ['FUNDER', fundingAgency],
      ['DATA', dataStatus]
    ]
    const chips: string [] = [tumorType, diseaseFocus]
    return (
      <div className="SRC-portalCard SRC-typeStudy  ">
          <div className="SRC-cardThumbnail">
              <Utils.Icon type={projectStatus === 'Active' ? STUDY_ACTIVE : STUDY_COMPLETE}/>
              <div>{projectStatus}</div>
          </div>
          <div className="SRC-cardContent">
              <div className="SRC-type">Study</div>
              <div className="SRC-title">
                  {' '}
                  <h3>
                      {' '}
                      <a target="_self" href={link}>
                          {projectName}
                      </a>{' '}
                  </h3>{' '}
              </div>
              <div className="SRC-author">{projectLeads}</div>
              <span className="SRC-font-size-base">
                  <Utils.ShowMore onClick={this.handleClick} summary={summary} />
              </span>
              <div className="SRC-cardAnnotations">
                  <Utils.ChipContainer chips={chips} />
              </div>
          </div>
          <Utils.CardFooter secondaryLabelLimit={this.props.secondaryLabelLimit} values={values} />
      </div>
    )
  }
}
