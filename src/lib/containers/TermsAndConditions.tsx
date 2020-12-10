import React, { useEffect, useState } from 'react'
import { tcItem } from './TermsAndConditionsItem'
import TermsAndConditionsItem from './TermsAndConditionsItem'
import { ReactComponent as chatBubblesSvg } from '../assets/icons/terms/chat-bubbles.svg'
import { ReactComponent as lockSvg } from '../assets/icons/terms/lock.svg'
import { ReactComponent as scaleSvg } from '../assets/icons/terms/scale.svg'
import { ReactComponent as shieldSvg } from '../assets/icons/terms/shield.svg'
import { ReactComponent as peopleSvg } from '../assets/icons/terms/people.svg'
import { ReactComponent as penSvg } from '../assets/icons/terms/pen.svg'
import { ReactComponent as speakerSvg } from '../assets/icons/terms/speaker.svg'
import { ReactComponent as flagSvg } from '../assets/icons/terms/flag.svg'
import { Button } from 'react-bootstrap'

export type TermsAndConditionsProps = {
  onFormChange: Function
}

const dataUseLink = "https://s3.amazonaws.com/static.synapse.org/governance/SynapseCommonsDataUseProcedure.pdf?v=4"
const termsLink = "https://s3.amazonaws.com/static.synapse.org/governance/SageBionetworksSynapseTermsandConditionsofUse.pdf?v=5"

const tcList: tcItem[] = [
  {
    icon: chatBubblesSvg,
    label: 'I will adhere to the Synapse Community Standards of inclusion and respect.',
    description: `A participant in the Synapse Community: <ul>
    <li>Welcomes others</li>
    <li>Uses inclusive language</li>
    <li>Shares experiences and knowledge</li>
    <li>Respects other viewpoints and ideas</li>
    <li>Shows empathy and kindness when interacting with others</li>
    </ul>
Please refer to our full <a target="_blank" href="https://docs.synapse.org/articles/governance.html#synapse-community-standards">Synapse Community Standards</a>.`,
  },
  {
    icon: lockSvg,
    label: 'I will adhere to all conditions and use limitations, including privacy laws and regulations.',
    description: `For more information about how Sage Bionetworks regulates data access and privacy, please refer to the 
    <a target="_blank" href=${dataUseLink}>Synapse Commons Data Use Procedure</a>.`
  },
  {
    icon: scaleSvg,
    label: 'I will act ethically and responsibly.',
    description: `You agree to the following Synapse Operating Ethics Principles, outlined in our 
    <a target="_blank" href=${termsLink}>Terms and Conditions of Use</a>.
    <br><br>Consequences of misconduct can include loss of both data use privileges and future use of Synapse.`
  },
  {
    icon: shieldSvg,
    label: 'I will use appropriate physical, technical and administrative measures to keep data secure and protect participants\' privacy.',
    description: `In your use of Synapse, you agree to:<ul>
    <li>Keep your login information secure and not share with others.</li>
    <li>Keep data safe from breach or misuse through appropriate security measures.</li>
    <li>Not attempt to re-identify or contact participants.</li>
    <li>Refrain from unauthorized data redistribution. Please refer to the 
    <a target="_blank" href=${dataUseLink}>Synapse Commons Data Use Procedure</a>.</li>
    </ul>
    For more information, please refer to the full <a target="_blank" href=${termsLink}>Synapse Terms and Conditions of Use</a>.`
  },
  {
    icon: peopleSvg,
    label: 'I will support open access best practices for public facing data.',
    description: `The Synapse open access platform promotes data accessibility and collaboration. We encourage you to 
    contribute your research findings to open access journals when applicable.<br><br>
    You agree to support open access best practices when possible (e.g., sharing code, metadata, annotating files for discovery).`
  },
  {
    icon: penSvg,
    label: 'I will credit research participants and all data sources.',
    description: `You agree to acknowledge data participants and to cite contributors and data sources using the language provided with the dataset.<br><br>
    It is our policy to terminate the access privileges of those who infringe the intellectual property rights of others. For more information, please refer to our full 
    <a target="_blank" href=${termsLink}>Terms and Conditions of Use</a>.`
  },
  {
    icon: speakerSvg,
    label: 'I will not use data for marketing and/or advertising.',
    description: `Data may not be used for marketing or advertising purposes. You agree not to upload or otherwise transmit 
    any unsolicited or unauthorized advertising, promotional materials, junk mail, spam, or any other form of solicitation (commercial or otherwise). <br><br>
    Please review the <a target="_blank" href="https://s3.amazonaws.com/static.synapse.org/governance/SynapsePrivacyPolicy.pdf?v=5">Synapse Privacy Policy</a> for Sage's commitment to privacy protections.`
  },
  {
    icon: flagSvg,
    label: `I will report any suspected data breach or misuse to privacyofficer@sagebase.org within 2 business days of initial incident knowledge.`,
    description: `Data misuse includes violating dataset access requirements, unauthorized use or 
    redistribution, lack of data accreditation, and unethical data handling.<br><br>
    For more information about what classifies as a violation of our data governance policies, please refer to our 
    <a target="_blank" href=${dataUseLink}>Data Use Procedure</a> and <a target="_blank" href=${termsLink}>Terms and Conditions of Use</a>.`
  },
]

const TermsAndConditions: React.FunctionComponent<TermsAndConditionsProps> = ({
  onFormChange
}) => {
  const checkboxCount = tcList.length
  const tcAgreement = "https://s3.amazonaws.com/static.synapse.org/governance/SageBionetworksSynapseTermsandConditionsofUse.pdf"
  const getInitialCheckboxState = () => Array.from(Array(checkboxCount).fill(false))
  let mounted = true

  // State variables
  const [checkboxChecked, setCheckboxChecked] = useState<boolean[]>(getInitialCheckboxState())
  // disabled all checkbox except the first one
  const [checkboxEnabled, setCheckboxEnabled] = useState<boolean[]>(getInitialCheckboxState().fill(true, 0, 1))

  useEffect(() => {
    if (mounted) {
      checkFormCompleted()
    }
    return () => {
      mounted = false
    }
  }, [checkboxEnabled, checkboxChecked])

  // Placeholder function to check if all checkboxes are checked and agreement is signed
  const checkFormCompleted = () => {
    const allCheckboxChecked = !checkboxChecked.includes(false)
    onFormChange(allCheckboxChecked)
  }

  const updateCheckboxState = (id:number) => {
    const newState = !checkboxChecked[id]
    if (newState) { // if the checkbox is checked (i.e. newState is true)
      setCheckboxChecked(getInitialCheckboxState().fill(true, 0, id+1))
      if ( id+2 <= tcList.length ) {
        setCheckboxEnabled(getInitialCheckboxState().fill(true, 0, id+2))
      }
    } else {
      setCheckboxChecked(getInitialCheckboxState().fill(true, 0, id))
      setCheckboxEnabled(getInitialCheckboxState().fill(true, 0, id+1))
    }
  }

  return(
    <section className="terms-conditions">
      <h3 className="page-header">Synapse Terms and Conditions Agreement</h3>
      <form>
        <label>
          I affirm my commitment to all Synapse Governance policies for responsible research and data handling, including:
        </label>
        <ul className="term-list">
        { tcList.length &&
            tcList.map((item, i) => {
              return (
                <li key={`tc-item-${i}`} className={checkboxEnabled[i] === true ? "terms-enabled" : ""}>
                  <TermsAndConditionsItem
                    item={item}
                    id={i}
                    checked={checkboxChecked[i]}
                    enabled={checkboxEnabled[i]}
                    onChange={updateCheckboxState}
                  />
                </li>
              )
        })}
        </ul>
        <div className="view-terms"><Button href={tcAgreement} target="_blank">View Complete Terms and Conditions for Use</Button></div>
      </form>
    </section>
  )
}

export default TermsAndConditions