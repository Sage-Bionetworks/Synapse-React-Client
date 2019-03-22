import * as React from 'react'
import { PUBLICATION } from '../../../utils/SynapseConstants'
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
      showMore: false
    }
  }

  public render() {
    const { data, schema } = this.props
    const title = data[schema.Title]
    const authors = data[schema.Authors]
    const diseaseType = data[schema.diseaseType]
    const experimentalStrategy = data[schema.experimentalStrategy]
    const pubMed = data[schema.PubMed]
    const site = data[schema.site]
    const doi = data[schema.doi]
    const consortum = data[schema.Consortum]
    const grantType = data[schema.grantType]
    const grant = data[schema.grant]
    const datasets = data[schema.datasets]

    const values = [
      ['DISEASE', diseaseType], ['EXPERIMENTAL STRATEGY', experimentalStrategy],
      ['SITE', site], ['DOI', doi], ['PROGRAM', consortum],
      ['GRANT TYPE', grantType], ['GRANT', grant], ['DATASETS', datasets]
    ]
    return (
      <div className="SRC-portalCard SRC-typePublication SRC-layoutLandscape SRC-showMetadata">
          <div className="SRC-cardThumbnail">
              <Utils.Icon type={PUBLICATION} />
          </div>
          <div className="SRC-cardContent">
              <div className="SRC-type">Publication</div>
              <div className="SRC-title">
                <h3 style={{ margin: 'none' }}>
                  <a className="SRC-primary-text-color" target="_blank" href={doi ? `https://dx.doi.org/${doi}` : pubMed}>
                    {title}
                  </a>
                </h3>
              </div>
              <p>
                <i>
                  {authors}
                </i>
              </p>
          </div>
          <Utils.CardFooter values={values} />
      </div>
    )
  }
}
export default CSBCPublication
