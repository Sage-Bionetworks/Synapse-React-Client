import * as React from 'react'
import CardContainerLogic from '../../../lib/containers/CardContainerLogic'
import { SynapseConstants } from '../../../lib'
import { GenericCardSchema } from '../../../lib/containers/GenericCard'
import brainSvg from './icons/brain.svg'
import circleSvg from './icons/circle.svg'
import mouseSvg from './icons/mouse.svg'
import resilienceadSvg from './icons/resiliencead.svg'

type State = {
  tabIndex: Number
}

export default class CardContainerLogicDemo extends React.Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      tabIndex: 2,
    }
  }

  render() {
    const { tabIndex } = this.state
    const iconOptions = {
      'AMP-AD': circleSvg,
      'M2OVE-AD': brainSvg,
      'MODEL-AD': mouseSvg,
      'Resilience-AD': resilienceadSvg,
    }
    const genericCardSchemaHeader: GenericCardSchema = {
      type: 'PROGRAM',
      title: 'Full Name',
      subTitle: 'Short Description',
      description: 'Long Description',
      icon: 'Program',
      secondaryLabels: ['Full Name'],
    }
    const genericCardSchema: GenericCardSchema = {
      title: 'studyName',
      type: SynapseConstants.EXPERIMENTAL,
      description: 'summary',
      subTitle: 'studyLeads',
      icon: 'studyStatus',
      secondaryLabels: [
        'dataStatus',
        'diseaseFocus',
        'manifestation',
        'fundingAgency',
        'institutions',
        'studyStatus',
      ],
    }
    return (
      <div>
        <hr />
        <p> Generic Card Rendering </p>
        <button
          className="btn btn-primary"
          onClick={() => this.setState({ tabIndex: 0 })}
        >
          Header Card
        </button>
        <button
          className="btn btn-primary"
          onClick={() => this.setState({ tabIndex: 1 })}
        >
          People Card
        </button>
        <button
          className="btn btn-primary"
          onClick={() => this.setState({ tabIndex: 2 })}
        >
          Other Card
        </button>
        <div style={{ height: 50 }} />
        {tabIndex === 0 && (
          <CardContainerLogic
            type={SynapseConstants.GENERIC_CARD}
            sql={'SELECT * FROM syn17024173'}
            searchParams={{ Program: 'AMP-AD' }}
            genericCardSchema={genericCardSchemaHeader}
            backgroundColor={'#5960a5'}
            isHeader={true}
            iconOptions={iconOptions}
          />
        )}
        {tabIndex === 1 && (
          <CardContainerLogic
            type={SynapseConstants.MEDIUM_USER_CARD}
            sql={'SELECT ownerID as ownerId FROM syn13897207'}
            loadingScreen={<div> Im loading as fast I can !!! </div>}
          />
        )}
        {tabIndex === 2 && (
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <CardContainerLogic
                  type={SynapseConstants.GENERIC_CARD}
                  sql={'SELECT * FROM syn16787123'}
                  unitDescription="studies"
                  genericCardSchema={genericCardSchema}
                  secondaryLabelLimit={3}
                />
              </div>
            </div>
          </div>
        )}
        <div style={{ height: 50 }} />
      </div>
    )
  }
}
