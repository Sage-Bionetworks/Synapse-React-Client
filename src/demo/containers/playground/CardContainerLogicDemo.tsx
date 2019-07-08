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
    // @ts-ignore
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
      secondaryLabels: {
        0: { key: 'subtype', alias: 'Subtype' },
        1: { key: 'disease', alias: 'Disease' },
        2: { key: 'manifestation', alias: 'Manifestation' },
        3: { key: 'Sample_Type', alias: 'Tissue' },
        4: { key: 'fundingAgency', alias: 'Funding Agency' },
        5: { key: 'studyName', alias: 'Study Name' }
      }
    }
    // @ts-ignore
    const genericCardSchemaHeader: GenericCardSchema = {
      type: 'PROGRAM',
      title: 'Full Name',
      subTitle: 'Short Description',
      description: 'Long Description',
      icon: 'Program',
      secondaryLabels: {
        0: { key: 'Full Name' }
      }
    }
    // @ts-ignore
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
          loadingScreen={<div> I'm loading as fast I can !!! </div>}
        />
      </div>
    )
  }
}
