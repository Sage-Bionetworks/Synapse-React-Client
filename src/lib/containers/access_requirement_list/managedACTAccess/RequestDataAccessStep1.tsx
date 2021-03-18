import * as React from 'react'
import { Button, Form } from 'react-bootstrap'
import * as ReactBootstrap from 'react-bootstrap'

export type RequestDataAccessStep1 = {
  token: string | undefined
  requestDataStepCallback?: Function
}

const RequestDataAccessStep1:React.FC<RequestDataAccessStep1> = props => {
  const {requestDataStepCallback} = props

  const goBack = () => {
    requestDataStepCallback?.()
  }

  return (<>
    <ReactBootstrap.Modal.Header closeButton={true}>
      <ReactBootstrap.Modal.Title className="AccessRequirementList__title">
        Request Access
      </ReactBootstrap.Modal.Title>
    </ReactBootstrap.Modal.Header>
    <ReactBootstrap.Modal.Body>
      <h4>Please tell us about your project</h4>
      <Form style={{marginTop: "2rem"}}>
        <Form.Group>
          <Form.Label>Project Lead</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Institution</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Intended Data Use Statement - <i>this will be visible to the public</i></Form.Label>
          <Form.Control as="textarea" rows={10}/>
        </Form.Group>
      </Form>
    </ReactBootstrap.Modal.Body>
    <ReactBootstrap.Modal.Footer>
      <Button variant="link" onClick={goBack}>Cancel</Button>
      <Button variant="primary">Save changes</Button>
    </ReactBootstrap.Modal.Footer>
  </>)
}

export default RequestDataAccessStep1