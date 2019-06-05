import * as React from 'react'
import CardContainerLogic from '../../../lib/containers/CardContainerLogic'
import { SynapseConstants } from 'src/lib'
import { GenericCardSchema } from 'src/lib/containers/GenericCard'
import brainSvg from './icons/brain.svg'
import circleSvg from './icons/circle.svg'
import mouseSvg from './icons/mouse.svg'
import resilienceadSvg from './icons/resiliencead.svg'

export default class CardContainerLogicDemo extends React.Component {

  constructor(props: any) {
    super(props)
    this.state = {}
  }

  render() {
    const iconOptions = {
      'AMP-AD': circleSvg,
      'M2OVE-AD': brainSvg,
      'MODEL-AD': mouseSvg,
      'Resilience-AD': resilienceadSvg
    }

    const genericCardSchema: GenericCardSchema = {
      type: 'Study',
      title: 'Study_Name',
      subTitle: 'Data_Contributor',
      description: 'Study_Description',
      icon: 'Access_Type',
      secondaryLabels: {
        0: { key: 'DataType_All', alias: 'Data Types' },
        1: { key: 'Diagnosis_or_Model_System', alias: 'Diagnosis' },
        2: { key: 'Number_of_Individuals', alias: 'Individuals' },
        3: { key: 'Sample_Type', alias: 'Tissue' },
        4: { key: 'Species ' },
        5: { key: 'Cohort_Type', alias: 'Cohort Type' },
        6: { key: 'Study_Status', alias: 'Study Status' },
        7: { key: 'Consortium', alias: 'Program' },
        8: { key: 'Grant' },
      }
    }
    const genericCardSchemaHeader: GenericCardSchema = {
      type: 'PROGRAM',
      title: 'Full Name',
      subTitle: 'Short Description',
      description: 'Long Description',
      icon: 'Program',
    }
    return (
      <div>
        <hr/>
        <p> Generic Card Rendering </p>
        <CardContainerLogic
          type={SynapseConstants.GENERIC_CARD}
          sql={'SELECT * FROM syn17024173'}
          unitDescription="studies"
          genericCardSchema={genericCardSchemaHeader}
          backgroundColor={'#5960a5'}
          isHeader={true}
          iconOptions={iconOptions}
        />
        <CardContainerLogic
          type={SynapseConstants.GENERIC_CARD}
          sql={'SELECT * FROM syn17083367 LIMIT 1'}
          unitDescription="studies"
          genericCardSchema={genericCardSchema}
          secondaryLabelLimit={3}
        />
      </div>
    )
  }
}
