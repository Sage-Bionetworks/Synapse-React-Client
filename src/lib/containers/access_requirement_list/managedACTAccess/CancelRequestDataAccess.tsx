import * as React from 'react'
import { RequestInterface } from '../../../utils/synapseTypes'
import * as ReactBootstrap from 'react-bootstrap'
import { Alert, Button } from 'react-bootstrap'
import { useState } from 'react'
import { updateDataAccessRequest } from '../../../utils/SynapseClient'
import { AlertProps } from './RequestDataAccessStep2'

export type CancelRequestDataAccessProps = {
  formSubmitRequestObject: RequestInterface | undefined,
  token: string,
  requestDataStepCallback: Function
}

const CancelRequestDataAccess:React.FC<CancelRequestDataAccessProps> = props => {

  const {formSubmitRequestObject, token, requestDataStepCallback} = props
  const [alert, setAlert] = useState<AlertProps | undefined>()
  const [showCloseBtn, setShowCloseBtn] = useState<boolean>(false)

  const handleSave = async () => {
    if (formSubmitRequestObject) {
      try {
        const resp = await updateDataAccessRequest(formSubmitRequestObject, token)
        if (resp.etag) {  // save success, close dialog
          requestDataStepCallback?.()
        } else {
          setAlert({
            key: 'danger',
            message: 'Sorry, there is an error in submitting your request. Please close this dialog and try again later.'
          })
          setShowCloseBtn(true)
        }
      } catch (e) {
        console.log("CancelRequestDataAccess: Error updating form", e)
        setAlert({
          key: 'danger',
          message: `Sorry, there is an error in submitting your request. ${e.reason || ''}. Please close this dialog and try again later`
        })
        setShowCloseBtn(true)
      }
    }
  }

  return (<>
    <ReactBootstrap.Modal.Header>
      <ReactBootstrap.Modal.Title>Save?</ReactBootstrap.Modal.Title>
    </ReactBootstrap.Modal.Header>

    <ReactBootstrap.Modal.Body>
      <p>Would you want to save your recent changes?</p>
      { /* Alert message */
        alert && <Alert variant={alert.key}>
          {alert.message}
        </Alert>
      }
    </ReactBootstrap.Modal.Body>

    <ReactBootstrap.Modal.Footer>
      { !showCloseBtn && <>
      <Button variant="link" onClick={() => requestDataStepCallback?.()}>Cancel</Button>
      <Button variant="primary" onClick={() => handleSave()}>Save changes</Button>
      </>}
      { showCloseBtn && <Button variant="primary" onClick={() => requestDataStepCallback?.()}>Close</Button>}
    </ReactBootstrap.Modal.Footer>
  </>)
}

export default CancelRequestDataAccess