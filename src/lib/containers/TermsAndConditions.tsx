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
import { ReactComponent as RefreshSvg } from '../assets/icons/terms/refresh.svg'
import { Button, Modal } from 'react-bootstrap'
import SignatureCanvas from 'react-signature-canvas'
import ReactSignatureCanvas from 'react-signature-canvas'

export type TermsAndConditionsProps = {
  onFormChange: Function
}

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
Please refer to our full Synapse Community Standards.
`,
  },
  {
    icon: lockSvg,
    label: 'I will adhere to all conditions and use limitations, including privacy laws and regulations.',
    description: ''
  },
  {
    icon: scaleSvg,
    label: 'I will act ethically and responsibly.',
    description: ''
  },
  {
    icon: shieldSvg,
    label: 'I will use appropriate physical, technical and administrative measures to keep data secure and protect participants’ privacy.',
    description: ''
  },
  {
    icon: peopleSvg,
    label: 'I will support open access best practices for public facing data.',
    description: ''
  },
  {
    icon: penSvg,
    label: 'I will credit research participants and all data sources.',
    description: ''
  },
  {
    icon: speakerSvg,
    label: 'I will not use data for marketing and/or advertising.',
    description: ''
  },
  {
    icon: flagSvg,
    label: `I will report any suspected data breach or misuse to <a href="mailto:privacyofficer@sagebase.org">privacyofficer@sagebase.org</a> within 2 business days of initial incident knowledge.`,
    description: ''
  },
]

const TermsAndConditions: React.FunctionComponent<TermsAndConditionsProps> = ({
  onFormChange
}) => {
  const checkboxCount = tcList.length
  const canvasDimension = {width: 500, height: 200}
  const tcAgreement = "https://s3.amazonaws.com/static.synapse.org/governance/SageBionetworksSynapseTermsandConditionsofUse.pdf"
  const getInitialCheckboxState = () => Array.from(Array(checkboxCount).fill(false))
  let mounted = true
  let sigPadRef:ReactSignatureCanvas | null = null

  // State variables
  // initialize all checkboxes to be unchecked
  const [checkboxChecked, setCheckboxChecked] = useState<boolean[]>(getInitialCheckboxState())
  // disabled all checkbox except the first one
  const [checkboxEnabled, setCheckboxEnabled] = useState<boolean[]>(getInitialCheckboxState().fill(true, 0, 1))
  const [showDialog, setShowDialog] = useState(false)
  const [showSignaturePad, setShowSignaturePad] = useState(false)
  const [trimmedDataUrl, setTrimmedDataUrl] = useState<string|undefined>()
  const [submitBtnActive, setSubmitBtnActive] = useState(false)

  useEffect(() => {
    if (mounted) {
      checkFormCompleted()
    }
    return () => {
      mounted = false
    }
  }, [checkboxEnabled, checkboxChecked, trimmedDataUrl])

  // Placeholder function to check if all checkboxes are checked and agreement is signed
  const checkFormCompleted = () => {
    const allCheckboxChecked = !checkboxChecked.includes(false)
    const isSigned = trimmedDataUrl ? true : false
    const isFormCompleted = allCheckboxChecked && isSigned
    onFormChange(isFormCompleted)
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

  const displaySignatureDialog = () => setShowDialog(true)
  const displaySignaturePad = () => setShowSignaturePad(true)
  const clearSignature = () => {
    sigPadRef?.clear()
    setTrimmedDataUrl(undefined)
    resetSignatureDialog(true)
  }
  const closeSignatureDialog = () => {
    setTrimmedDataUrl(undefined)
    resetSignatureDialog()
  }
  const submitSignature = () => {
    if (showSignaturePad && !sigPadRef?.isEmpty()) {
      setTrimmedDataUrl(sigPadRef?.getTrimmedCanvas().toDataURL('image/png'))
      resetSignatureDialog()
    }
  }
  const resetSignatureDialog = (showDialog: boolean = false) => {
    setShowDialog(showDialog)
    setShowSignaturePad(false)
    setSubmitBtnActive(false)
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
        <div className="terms-signature">
          <div><label>Your Signature</label></div>
          <Modal animation={false} show={showDialog} className="signature-pad-modal" onHide={closeSignatureDialog}>
            <Modal.Header closeButton>
              <Modal.Title>Sign Agreement</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              { !showSignaturePad &&
                <label style={canvasDimension} onClick={displaySignaturePad} className="signature-pad-label">Tap to sign</label>
              }
              { showSignaturePad &&
                <SignatureCanvas
                  ref={(ref) => sigPadRef = ref}
                  canvasProps={canvasDimension}
                  onEnd={() => setSubmitBtnActive(true)}
                />
              }
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={clearSignature}><RefreshSvg />CLEAR SIGNATURE</Button>
              <Button variant="secondary" onClick={closeSignatureDialog}>CANCEL</Button>
              <Button
                variant="primary"
                className={submitBtnActive ? "" : "btn-disabled"}
                active={submitBtnActive}
                onClick={submitSignature}>Submit Signature
              </Button>
            </Modal.Footer>
          </Modal>
          <div className="terms-signature-action">
            { trimmedDataUrl
              ? <img onClick={displaySignatureDialog} src={trimmedDataUrl} />
              : <Button onClick={displaySignatureDialog} className="btn-tap-sign">Tap to Sign</Button>
            }
          </div>
        </div>
      </form>
    </section>
  )
}

export default TermsAndConditions