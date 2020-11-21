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
  token?: string
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
  token
}) => {
  const checkboxCount = tcList.length
  // initialize all checkboxes to be unchecked
  const [checkboxChecked, setCheckboxChecked] = useState<boolean[]>(Array(checkboxCount).fill(false))
  // disabled all checkbox except the first one
  const [checkboxEnabled, setCheckboxEnabled] = useState<boolean[]>(Array(checkboxCount).fill(false).fill(true, 0, 1))
  const [showDialog, setShowDialog] = useState(false)
  // const [showSignaturePad, setShowSignaturePad] = useState(false)
  const [isSigned, setIsSigned] = useState(false)
  const canvasDimension = {width: 500, height: 200}
  let mounted = true
  let sigPadRef:ReactSignatureCanvas | null

  useEffect(() => {
    if (mounted) {
      //
    }
    return () => {
      mounted = false
    }
  }, [token, checkboxEnabled, checkboxChecked])

  // Placeholder function to check if all checkboxes are checked and agreement is signed
  const handleSubmit = () => {
    const allCheckboxChecked = !checkboxChecked.includes(false)
    console.log("allCheckboxChecked", allCheckboxChecked)
    console.log("isSigned", isSigned)
  }

  const updateCheckboxState = (id:number) => {
    const newState = !checkboxChecked[id]
    if (newState) {
      setCheckboxChecked(Array(checkboxCount).fill(true, 0, id+1))
      if ( id+2 <= tcList.length ) {
        setCheckboxEnabled(Array(checkboxCount).fill(true, 0, id+2))
      }
    } else {
      setCheckboxChecked(Array(checkboxCount).fill(true, 0, id))
      setCheckboxEnabled(Array(checkboxCount).fill(true, 0, id+1))
    }
  }

  const handleShowSignaturePadDialog = () => setShowDialog(true)
  // const handleShowSignaturePad = () => setShowSignaturePad(true)
  const handleClearSignature = () => {
    sigPadRef?.clear()
    setIsSigned(false)
    // setShowSignaturePad(false)
  }
  const handleCancelSignaturePadDialog = () => {
    setShowDialog(false)
    setIsSigned(false)
    // setShowSignaturePad(false)
  }
  const handleSubmitSignature = () => {
    if (!sigPadRef?.isEmpty()) {
      setShowDialog(false)
      setIsSigned(true)
    }
    // setShowSignaturePad(false)
  }

  return(
    <section className="terms-conditions">
      <h3 className="page-header">Synapse Terms and Conditions Agreement</h3>
      <form onSubmit={handleSubmit}>
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
        <div className="view-terms"><Button>View Complete Terms and Conditions for Use</Button></div>
        <div className="terms-signature">
          <div><label>Your Signature</label></div>
          { showDialog &&
            <Modal animation={false} show={true} className="signature-pad-modal">
              <Modal.Header closeButton>
                <Modal.Title>Sign Agreement</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {/*{ !showSignaturePad &&*/}
                {/*  <label style={canvasDimension} onClick={handleShowSignaturePad} className="signature-pad-label">Draw to sign</label>*/}
                {/*}*/}
                {/*{ showSignaturePad &&*/}
                  <SignatureCanvas
                    ref={(ref) => sigPadRef = ref}
                    canvasProps={canvasDimension}
                  />
                {/*}*/}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClearSignature}><RefreshSvg />CLEAR SIGNATURE</Button>
                <Button variant="secondary" onClick={handleCancelSignaturePadDialog}>CANCEL</Button>
                <Button variant="primary" onClick={handleSubmitSignature}>Submit Signature</Button>
              </Modal.Footer>
            </Modal>
          }
          <Button onClick={handleShowSignaturePadDialog} className="btn-tap-sign">Tap to Sign</Button>
        </div>
      </form>
    </section>
  )
}

export default TermsAndConditions