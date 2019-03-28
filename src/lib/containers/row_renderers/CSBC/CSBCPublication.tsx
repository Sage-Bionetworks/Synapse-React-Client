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
      ['Experimental Strategy', experimentalStrategy],
      ['datasets', datasets],
      ['studies', studies]
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
                  <a className="SRC-primary-text-color" target="_blank" href={doi ? `https://dx.doi.org/${doi}` : undefined}>
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
          <Utils.CardFooter extraWide={true} values={values} />
      </div>
    )
  }
}
export default CSBCPublication
