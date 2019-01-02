import * as React from 'react'
import { PUBLICATION } from '../../utils/SynapseConstants'
import * as Utils from './utils'

type PublicationState = {
  showMore: boolean
}

type PublicationProps = {
  data?: any
  schema?: any
}

class Publication extends React.Component<PublicationProps, PublicationState> {

  constructor(props: PublicationProps) {
    super(props)
    this.state = {
      showMore: false
    }
  }

  public render() {
    const { data, schema } = this.props
    const citation = data[schema.citation]
    const tumorType = data[schema.tumorType]
    const diseaseFocus = data[schema.diseaseFocus]
    const doi = data[schema.doi]
    const fundingAgency = data[schema.fundingAgency]
    const projectName = data[schema.projectName]
    const values = [['DOI', doi], ['FUNDER', fundingAgency], ['STUDY', projectName]]
    return (
            <div className="SRC-portalCard SRC-typePublication SRC-layoutLandscape SRC-showMetadata">
                <div className="SRC-cardThumbnail">
                    <Utils.Icon type={PUBLICATION} />
                </div>
                <div className="SRC-cardContent">
                    <div className="SRC-type">Publication</div>
                    <div className="SRC-title">
                        <h3>
                            <a target="_blank" href={`https://dx.doi.org/${doi}`}>
                                {citation}
                            </a>
                        </h3>
                    </div>
                    <div className="SRC-cardAnnotations">
                        <Utils.ChipContainer chips={[tumorType, diseaseFocus]} />
                    </div>
                </div>
                <Utils.CardFooter values={values} />
            </div>
    )
  }
}
export default Publication
