import * as React from 'react'
import * as Utils from '../utils'
import controlledStudySvg from '../../../assets/icons/controlledStudy.svg'
import studyActiveSvg from '../../../assets/icons/study-active.svg'

type StudyState = {
  showMore: boolean
}

type StudyProps = {
  data?: any
  schema?: any
  secondaryLabelLimit?: number
}

export default class Study extends React.Component<StudyProps, StudyState> {

  constructor(props: StudyProps) {
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

  public getIcon(name: string) {
    switch (name) {
      case 'Controlled':
        return (<img src={controlledStudySvg}/>)
      default:
        return (<img src={studyActiveSvg}/>)
    }
  }

  public render() {
    const { data, schema } = this.props
    const accessType: string = data[schema.Access_Type]
    const id: string = data[schema.Study]
    const link: string = `https://www.synapse.org/#!Synapse:${id}`

    const dataContributors = data[schema.Data_Contributor]
    const studyName = data[schema.Study_Name]
    const studyDescription = data[schema.Study_Description]

    const model = data[schema.Model_System] || ''
    const species = data[schema.Species]
    const individuals = data[schema.Number_of_Individuals]
    const program  = data[schema.Consortium]
    const grant  = data[schema.Grant]
    const dataTypes  = data[schema.DataType_All]

    const values: string [][] = [
      ['Data Types', dataTypes],
      ['SPECIES', `${species} ${model}`],
      ['INDIVIDUALS', individuals],
      ['PROGRAM', program],
      ['GRANT', grant]
    ]

    return (
      <div className="SRC-portalCard SRC-typeStudy  ">
        <div className="SRC-cardThumbnail">
          {this.getIcon(accessType)}
        </div>
        <div className="SRC-cardContent">
          <div className="SRC-type">Study</div>
          <div className="SRC-title">
            {' '}
            <h3>
              {' '}
              <a target="_self" href={link}>
                {studyName}
              </a>{' '}
            </h3>{' '}
          </div>
          <div className="SRC-author">{dataContributors}</div>
          <span className="SRC-font-size-base">
              <Utils.ShowMore onClick={this.handleClick} summary={studyDescription} />
          </span>
        </div>
        <Utils.CardFooter secondaryLabelLimit={this.props.secondaryLabelLimit} values={values} />
      </div>
    )
  }
}
