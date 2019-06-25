import * as React from 'react'
import { DATASET } from '../../utils/SynapseConstants'
import calculateFriendlyFileSize from '../calculateFriendlyFileSize'
import * as Utils from './utils'

type DatasetProps = {
  data?: any
  schema?: any
  secondaryLabelLimit?:number
}

class Dataset extends React.Component<DatasetProps, {}> {

  constructor(props: DatasetProps) {
    super(props)
    this.handleLinkClick = this.handleLinkClick.bind(this)
  }

  public handleLinkClick = (link: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    window.open(`https://www.synapse.org/#!Synapse:${link}`, '_blank')
  }

  public render() {
    const { data, schema } = this.props
    const datasetName = data[schema.datasetName]
    const summary = data[schema.summary]
    const tumorType = data[schema.tumorType]
    const diseaseFocus = data[schema.diseaseFocus]
    const id = data[schema.id]
    const fundingAgency = data[schema.fundingAgency]
    const fileCount = data[schema.fileCount]
    const fileSize = calculateFriendlyFileSize(data[schema.fileSize])
    const values = [['FUNDER', fundingAgency], ['SIZE', fileSize], ['FILES', fileCount]]
    return (
      <div className="SRC-portalCard SRC-typeDataset  ">
        <div className="SRC-cardThumbnail">
          <Utils.Icon type={DATASET} />
          <div>{fileSize}</div>
        </div>
        <div className="SRC-cardContent SRC-dataset">
          <div className="SRC-type">Dataset </div>
          <div className="SRC-title">
            <h3>
              <a target="_self" href={`https://www.synapse.org/#!Synapse:${id}`}>
                {datasetName}
              </a>
            </h3>
          </div>
          <div className="SRC-description-dataset">
            <p className="SRC-description-text">
              {summary}
            </p>
            <div className="SRC-cardAction">
              <button className="SRC-datasetButton" onClick={this.handleLinkClick(id)} type="button">
                Download Dataset
              </button>
            </div>
          </div>
          <div className="SRC-cardAnnotations">
            <Utils.ChipContainer chips={[tumorType, diseaseFocus]} />
          </div>
        </div>
        <Utils.CardFooter secondaryLabelLimit={this.props.secondaryLabelLimit} values={values} />
      </div>
    )
  }
}
export default Dataset
