import * as React from 'react'
import CardContainerLogic from '../../../lib/containers/CardContainerLogic'
import { SynapseConstants } from 'src/lib'
import { GenericCardSchema } from 'src/lib/containers/GenericCard'

export default class CardContainerLogicDemo extends React.Component {

  constructor(props: any) {
    super(props)
    this.state = {}
  }

  render() {
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
    return (
      <div>
        <hr/>
        <p> Generic Card Rendering </p>
        <CardContainerLogic
          type={SynapseConstants.GENERIC_CARD}
          sql={'SELECT * FROM syn17083367'}
          unitDescription="studies"
          genericCardSchema={genericCardSchema}
          secondaryLabelLimit={1}
        />
      </div>
    )
  }
}
