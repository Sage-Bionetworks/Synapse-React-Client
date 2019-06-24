import * as React from 'react'
import { DATASET } from '../../../utils/SynapseConstants'
import calculateFriendlyFileSize from '../../calculateFriendlyFileSize'
import * as Utils from '../utils'

type DatasetProps = {
  data?: any
  schema?: any
  secondaryLabelLimit?: number
}

class CSBCDataset extends React.Component<DatasetProps, {}> {

  constructor(props: DatasetProps) {
    super(props)
  }

  public render() {
    const { data, schema } = this.props
    const name = data[schema.name]
    const assay = data[schema.experimentalStrategy]
    const consortium = data[schema.consortium]
    const platform = data[schema.platform]
    const diseaseType = data[schema.tumorType]
    const centerName = data[schema.centerName]
    const grantType = data[schema.grantType]
    const theme = data[schema.Theme]
    const id = data[schema.id]
    const summary = data[schema.summary]
    const species = data[schema.species]
    const fileSize = calculateFriendlyFileSize(data[schema.fileSize])
    const values = [
      ['Disease Type', diseaseType],
      ['Assay', assay],
      ['Platform', platform],
      ['Theme', theme],
      ['Species', species],
      ['Program', consortium],
      ['Grant Type', grantType],
      ['Grant', centerName]
    ]
    return (
      <div className="SRC-portalCard  ">
        <div className="SRC-cardThumbnail">
          <Utils.Icon type={DATASET} />
          <div>{fileSize}</div>
        </div>
        <div className="SRC-cardContent">
          <div className="SRC-type">Dataset </div>
          <div className="SRC-title">
            <h3>
              <a target="_self" href={`https://www.synapse.org/#!Synapse:${id}`}>
                {name}
              </a>
            </h3>
          </div>
          <div className="SRC-downloadData SRC-floatRight">
            <a className="download" href={`https://www.synapse.org/#!Synapse:${id}`}>
              Download Dataset
            </a>
          </div>
          <div className="SRC-description"> {summary} </div>
        </div>
        <Utils.CardFooter secondaryLabelLimit={this.props.secondaryLabelLimit} values={values} />
      </div>
    )
  }
}
export default CSBCDataset
