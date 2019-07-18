import * as React from 'react'
import { PUBLICATION } from '../../../utils/SynapseConstants'
import * as Utils from './../utils'

type CSBCPublicationState = {
  showMore: boolean
}

type CSBCPublicationProps = {
  data?: any
  schema?: any
  secondaryLabelLimit?:number
}

class CSBCPublication extends React.Component<CSBCPublicationProps, CSBCPublicationState> {

  constructor(props: CSBCPublicationProps) {
    super(props)
    this.state = {
      showMore: false
    }
  }

  public render() {
    const { data, schema } = this.props
    const title = data[schema.Title]
    const authors = data[schema.Authors]
    const experimentalStrategy = data[schema.experimentalStrategy]
    const doi = data[schema.doi]
    const consortum = data[schema.Consortum]
    const datasets = data[schema.datasets]
    const journal = data[schema.Journal]
    const year = data[schema['Publication Year']]
    const grantType = data[schema.grantType]
    const theme = data[schema.Theme]
    const diseaseType = data[schema.diseaseType]
    const studies = data[schema.studies]

    const values = [
      ['Journal', journal],
      ['Publication Year', year],
      ['Consortium', consortum],
      ['Grant Type', grantType],
      ['Theme', theme],
      ['Disease', diseaseType],
      ['Assay', experimentalStrategy],
      ['datasets', datasets],
      ['studies', studies]
    ]
    return (
      <div className="SRC-portalCard SRC-typePublication  ">
          <div className="SRC-cardThumbnail">
              <Utils.Icon type={PUBLICATION} />
          </div>
          <div className="SRC-cardContent">
              <div className="SRC-type">Publication</div>
              <div >
                <h3 className="SRC-boldText SRC-blackText" style={{ margin: 'none' }}>
                  {
                    doi &&
                    (<a className="SRC-primary-text-color" rel="noopener noreferrer" target="_blank" href={doi ? `https://dx.doi.org/${doi}` : undefined}>
                      {title}
                    </a>)
                  }
                  {
                    !doi &&
                    title
                  }
                </h3>
              </div>
              <p>
                <i>
                  {authors}
                </i>
              </p>
          </div>
          <Utils.CardFooter secondaryLabelLimit={this.props.secondaryLabelLimit} values={values} />
      </div>
    )
  }
}
export default CSBCPublication
