import * as React from 'react'
import { Button, Form } from 'react-bootstrap'
import * as ReactBootstrap from 'react-bootstrap'
import { useState } from 'react'
import { createResearchProject } from '../../../utils/SynapseClient'
import { ResearchProject } from '../../../utils/synapseTypes/ResearchProject'

export type RequestDataAccessStep1 = {
  token: string | undefined
  accessRequirementId: string
  requestDataStepCallback?: Function
}

const RequestDataAccessStep1:React.FC<RequestDataAccessStep1> = props => {
  const {requestDataStepCallback, token, accessRequirementId} = props
  const [projectLead, setProjectLead] = useState<string>("")
  const [institution, setInstitution] = useState<string>("")
  const [intendedDataUseStatement, setIntendedDataUseStatement] = useState<string>("")

  const goBack = () => {
    requestDataStepCallback?.()
  }

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    const responseObj:ResearchProject = {
      accessRequirementId: accessRequirementId,
      institution: institution,
      projectLead: projectLead,
      intendedDataUseStatement: intendedDataUseStatement
    }
    // const resp = await createResearchProject(responseObj, token)
  };

  return (<>
  <Form onSubmit={handleSubmit}>
    <ReactBootstrap.Modal.Header closeButton={true}>
      <ReactBootstrap.Modal.Title className="AccessRequirementList__title">
        Request Access
      </ReactBootstrap.Modal.Title>
    </ReactBootstrap.Modal.Header>
    <ReactBootstrap.Modal.Body>
      <h4>Please tell us about your project</h4>
        <Form.Group style={{marginTop: "2rem"}} >
          <Form.Label htmlFor={"project-lead"}>Project Lead</Form.Label>
          <Form.Control
            id={"project-lead"}
            type="text"
            value={projectLead}
            required
            onChange={e => setProjectLead(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor={"institution"}>Institution</Form.Label>
          <Form.Control
            id={"institution"}
            type="text"
            value={institution}
            required
            onChange={e => setInstitution(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor={"data-use"}>Intended Data Use Statement - <i>this will be visible to the public</i></Form.Label>
          <Form.Control
            id={"data-use"}
            as="textarea"
            value={intendedDataUseStatement}
            rows={10}
            required
            onChange={e => setIntendedDataUseStatement(e.target.value)}
          />
        </Form.Group>
    </ReactBootstrap.Modal.Body>
    <ReactBootstrap.Modal.Footer>
      <Button variant="link" onClick={goBack}>Cancel</Button>
      <Button variant="primary" type="submit">Save changes</Button>
    </ReactBootstrap.Modal.Footer>
  </Form>
  </>)
}

export default RequestDataAccessStep1