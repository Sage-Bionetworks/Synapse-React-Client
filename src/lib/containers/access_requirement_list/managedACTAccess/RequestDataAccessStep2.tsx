import * as React from 'react'
import { Button, Form } from 'react-bootstrap'
import * as ReactBootstrap from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { Checkbox } from '../../widgets/Checkbox'
import { getDataAccessRequest } from '../../../utils/SynapseClient'

export type RequestDataAccessStep2Props = {
  token: string | undefined,
  accessRequirementId: string,
  requestDataStepCallback?: Function
}

const RequestDataAccessStep2: React.FC<RequestDataAccessStep2Props> = props => {
  const {token, requestDataStepCallback, accessRequirementId} = props
  const [requester, setRequester] = useState<string>("")
  let mounted = true

  useEffect(() => {
    if (mounted) {
      getDataAccessRequest(accessRequirementId, token).then(resp => {
        // console.log(resp)
      })
    }
    return () => {
      mounted = false
    }
  }, [token, accessRequirementId])

  const goBack = () => {
    requestDataStepCallback?.()
  }

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    requestDataStepCallback?.(accessRequirementId)
  }

  const setCheck = (checked: boolean) => {

  }

  return (<>
    <Form className={"model-form"} onSubmit={handleSubmit}>
      <ReactBootstrap.Modal.Header closeButton={true}>
        <ReactBootstrap.Modal.Title className="AccessRequirementList__title">
          Request Access
        </ReactBootstrap.Modal.Title>
      </ReactBootstrap.Modal.Header>
      <ReactBootstrap.Modal.Body>
        <h4>Please provide the information below to submit the request for access.</h4>
        <Form.Group style={{marginTop: "2rem"}} >
          <Form.Label htmlFor={"requesters"}>
            Data Requesters<br/>
            <em>This list should match those listed on your DUC.<br/>
            All data requesters must have a <a href={"#"}>validated user profile</a>.</em>
          </Form.Label>
          <Form.Control
            id={"requesters"}
            type="text"
            value={requester}
            required
            onChange={e => setRequester(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Checkbox
            label="@emmanmills"
            id="ch1"
            checked={false}
            onChange={(checked: boolean) => setCheck(checked)}
          ></Checkbox>
        </Form.Group>
        <hr />
        <Form.Group>
          <Button variant="link" style={{paddingLeft: "0"}}>Select All</Button>
          <Button variant="link" disabled>Remove Selected</Button>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor={"duc-temp"} className={"SRC-noMargin"}>DUC template</Form.Label><br />
          <Button id={"duc-temp"} variant="link" className={"SRC-noPadding"}>duct.txt</Button>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor={"duc"} className={"SRC-noMargin"}>Upload DUC</Form.Label><br />
          <Button variant="link" className={"SRC-noPadding"}>duc.txt</Button><br />
          <Button id={"duc"} variant={"light-primary-base"}>Browse...</Button>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor={"irb"} className={"SRC-noMargin"}>Upload IRB approval</Form.Label><br />
          <Button variant="link" className={"SRC-noPadding"}>irb.txt</Button><br />
          <Button id={"irb"} variant={"light-primary-base"}>Browse...</Button>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor={"irb"} className={"SRC-noMargin"}>Upload other required documents</Form.Label><br />
          <Checkbox
            label="irb.json"
            id="ch2"
            checked={false}
            onChange={(checked: boolean) => setCheck(checked)}
          ></Checkbox>
          <Button variant={"light-primary-base"}>Browse...</Button>
        </Form.Group>
        <hr />
        <Form.Group>
          <Button variant="link" style={{paddingLeft: "0"}}>Select All</Button>
          <Button variant="link" disabled>Remove Selected</Button>
        </Form.Group>
      </ReactBootstrap.Modal.Body>
      <ReactBootstrap.Modal.Footer>
        <Button variant="link" onClick={goBack}>Cancel</Button>
        <Button variant="primary" type="submit">Submit</Button>
      </ReactBootstrap.Modal.Footer>
    </Form>
  </>)
}

export default RequestDataAccessStep2