import * as React from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import * as ReactBootstrap from 'react-bootstrap'
import { useEffect, useRef, useState } from 'react'
import { updateResearchProject, getResearchProject } from '../../../utils/SynapseClient'
import { ResearchProject } from '../../../utils/synapseTypes/ResearchProject'
import { ManagedACTAccessRequirement } from '../../../utils/synapseTypes'
import { AlertProps } from './RequestDataAccessStep2'

export type RequestDataAccessStep1 = {
  token: string
  accessRequirementId: string
  requestDataStepCallback?: Function
  managedACTAccessRequirement: ManagedACTAccessRequirement
}

const RequestDataAccessStep1:React.FC<RequestDataAccessStep1> = props => {
  const {requestDataStepCallback, token, accessRequirementId, managedACTAccessRequirement} = props
  const [projectLead, setProjectLead] = useState<string>("")
  const [institution, setInstitution] = useState<string>("")
  const [intendedDataUseStatement, setIntendedDataUseStatement] = useState<string>("")
  const [alert, setAlert] = useState<AlertProps | undefined>()
  const researchProjectRef = useRef({})
  let mounted = true

  useEffect(() => {
    if (mounted) {
      setAlert(undefined)
      retrieveExistingResearchProject()
    }
    return () => {
      mounted = false
    }
  }, [token, accessRequirementId])

  const retrieveExistingResearchProject = async () => {
    try {
      const researchProject = await getResearchProject(accessRequirementId, token)
      if (researchProject.id) {
        researchProjectRef.current = researchProject
        setProjectLead(researchProject.projectLead)
        setInstitution(researchProject.institution)
        setIntendedDataUseStatement(researchProject.intendedDataUseStatement)
      }
    } catch (e) {
      console.log("RequestDataAccessStep1: Error getting research project data: ", e)
    }
  }

  const goBack = () => {
    requestDataStepCallback?.()
  }

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    const errAlert = {
      key: 'danger',
      message: 'Unable to update form data. Please try again later.'
    }
    const requestObj:ResearchProject = Object.assign({}, researchProjectRef.current, {
      accessRequirementId: accessRequirementId,
      institution: institution,
      projectLead: projectLead,
      intendedDataUseStatement: intendedDataUseStatement
    })

    try {
      updateResearchProject(requestObj, token).then((researchProject) => {
        requestDataStepCallback?.(managedACTAccessRequirement, 2, researchProject.id)
      }).catch(e => {
        console.log("RequestDataAccessStep1: Error updating research project data: ", e)
        setAlert(errAlert)
      })
    } catch (e) {
      console.log("RequestDataAccessStep1: Error updating research project data: ", e)
      setAlert(errAlert)
    }
  }

  return (<>
  <Form className={"access-request-form1"} onSubmit={handleSubmit}>
    <ReactBootstrap.Modal.Header closeButton={true}>
      <ReactBootstrap.Modal.Title className="AccessRequirementList__title">
        Request Access
      </ReactBootstrap.Modal.Title>
    </ReactBootstrap.Modal.Header>
    <ReactBootstrap.Modal.Body>
      <h4>Please tell us about your project.</h4>
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
      { managedACTAccessRequirement.isIDURequired &&
        <Form.Group>
          <Form.Label htmlFor={"data-use"}>Intended Data Use Statement -
            { managedACTAccessRequirement.isIDUPublic && <i>this will be visible to the public</i>}
          </Form.Label>
          <Form.Control
            id={"data-use"}
            as="textarea"
            value={intendedDataUseStatement}
            rows={10}
            required
            onChange={e => setIntendedDataUseStatement(e.target.value)}
          />
        </Form.Group>
      }
      { /* Alert message */
        alert && <Alert variant={alert.key}>
          {alert.message}
        </Alert>
      }
    </ReactBootstrap.Modal.Body>
    <ReactBootstrap.Modal.Footer>
      <Button variant="link" onClick={goBack}>Cancel</Button>
      <Button variant="primary" type="submit">Save changes</Button>
    </ReactBootstrap.Modal.Footer>
  </Form>
  </>)
}

export default RequestDataAccessStep1