import * as React from 'react'
import CardContainerLogic from '../../../lib/containers/CardContainerLogic'
import { SynapseConstants } from '../../../lib'
import { GenericCardSchema } from '../../../lib/containers/GenericCard'
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
    // @ts-ignore
    const genericToolSchema: GenericCardSchema = {
      type: 'Tool',
      title: 'name',
      subTitle: 'contact',
      description: 'summary',
      icon: 'type',
      link: 'link',
      secondaryLabels: ['subtype', 'disease', 'manifestation','Sample_Type','fundingAgency','studyName']
    }
    const genericCardSchemaHeader: GenericCardSchema = {
      type: 'PROGRAM',
      title: 'Full Name',
      subTitle: 'Short Description',
      description: 'Long Description',
      icon: 'Program',
      secondaryLabels: ['Full Name']
    }
    // @ts-ignore
    const genericCardSchema: GenericCardSchema = {
      type: 'Study',
      title: 'Study_Name',
      subTitle: 'Data_Contributor',
      description: 'Study_Description',
      icon: 'Access_Type',
      secondaryLabels: ['DataType_All',
        'Diagnosis_or_Model_System',
        'Number_of_Individuals',
        'Sample_Type',
        'Species',
        'Cohort_Type',
        'Study_Status',
        'Consortium',
        'Grant']
    }
    return (
      <div>
        <hr/>
        <p> Generic Card Rendering </p>
        <CardContainerLogic
          type={SynapseConstants.GENERIC_CARD}
          // tslint:disable-next-line
          sql={"SELECT * FROM syn17024173"}
          searchParams={{ Program: 'AMP-AD' }}
          genericCardSchema={genericCardSchemaHeader}
          backgroundColor={'#5960a5'}
          isHeader={true}
          iconOptions={iconOptions}
        />
        {/* <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <CardContainerLogic
                type={SynapseConstants.GENERIC_CARD}
                sql={'SELECT * FROM syn16859448'}
                unitDescription="studies"
                genericCardSchema={genericToolSchema}
                secondaryLabelLimit={3}
              />
            </div>
          </div>
        </div> */}
        <CardContainerLogic
          type={SynapseConstants.MEDIUM_USER_CARD}
          sql={'SELECT ownerID as ownerId FROM syn13897207'}
          loadingScreen={<div> Im loading as fast I can !!! </div>}
        />
      </div>
    )
  }
}
