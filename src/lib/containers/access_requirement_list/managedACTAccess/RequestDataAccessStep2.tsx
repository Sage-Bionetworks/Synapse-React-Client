import * as React from 'react'
import { Button, Form } from 'react-bootstrap'
import * as ReactBootstrap from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { Checkbox } from '../../widgets/Checkbox'
import {
  getDataAccessRequestForUpdate,
  getUserProfileById,
  getFiles,
} from '../../../utils/SynapseClient'
import { UserCardSmall } from '../../UserCardSmall'
import {
  BatchFileRequest, BatchFileResult,
  FileHandleAssociateType,
  ManagedACTAccessRequirement, RequestInterface,
  UserProfile,
} from '../../../utils/synapseTypes'

export type RequestDataAccessStep2Props = {
  token: string | undefined,
  managedACTAccessRequirement: ManagedACTAccessRequirement,
  accessRequirementId: string,
  requestDataStepCallback?: Function
}

const RequestDataAccessStep2: React.FC<RequestDataAccessStep2Props> = props => {
  const {token, requestDataStepCallback, accessRequirementId, managedACTAccessRequirement} = props
  const [requester, setRequester] = useState<string>("")
  const [accessorProfiles, setAccessorProfiles] = useState<UserProfile[]>([])
  const [requiredFiles, setRequiredFiles] = useState<BatchFileResult>()
  let mounted = true
  const requestedFiles = {}
  const batchFileRequest: BatchFileRequest = {
    requestedFiles: [],
    includeFileHandles: true,
    includePreSignedURLs: true,
    includePreviewPreSignedURLs: false,
  }

  useEffect(() => {
    if (mounted) {
      setFormData()
    }
    return () => {
      mounted = false
    }
  }, [token, accessRequirementId])

  const setFormData = async () => {
    const dataAccessRequestData = await getDataAccessRequestForUpdate(accessRequirementId, token)
    const accessorChanges = dataAccessRequestData.accessorChanges

    // save assessors' user profiles
    if (accessorChanges && accessorChanges.length) {
      const ids = accessorChanges.map(item => item.userId)
      const promises = ids.map((userId, i) => {
        return getUserProfileById(token, userId)
      })
      Promise.all(promises).then(profiles => {
        setAccessorProfiles(profiles)
      })
    }

    getFilesData(dataAccessRequestData)

  }

  // TODO: Add other file attachments
  const getFilesData = (dataAccessRequestData:RequestInterface) => {

    if (managedACTAccessRequirement.isDUCRequired && managedACTAccessRequirement.ducTemplateFileHandleId) {
      batchFileRequest.requestedFiles.push({
        associateObjectId: dataAccessRequestData!.accessRequirementId,
        associateObjectType: FileHandleAssociateType.AccessRequirementAttachment,
        fileHandleId: managedACTAccessRequirement!.ducTemplateFileHandleId,
      })
      requestedFiles["DUCTemplate"] = managedACTAccessRequirement.ducTemplateFileHandleId
    }

    if (managedACTAccessRequirement.isDUCRequired && dataAccessRequestData!.ducFileHandleId) {
      batchFileRequest.requestedFiles.push({
        associateObjectId: dataAccessRequestData!.id,
        associateObjectType: FileHandleAssociateType.DataAccessRequestAttachment,
        fileHandleId: dataAccessRequestData!.ducFileHandleId,
      })
      requestedFiles["DUC"] =  dataAccessRequestData!.ducFileHandleId
    }

    if (managedACTAccessRequirement.isIRBApprovalRequired) {
      batchFileRequest.requestedFiles.push({
        associateObjectId: dataAccessRequestData!.id,
        associateObjectType: FileHandleAssociateType.DataAccessRequestAttachment,
        fileHandleId: dataAccessRequestData!.irbFileHandleId,
      })
      requestedFiles["IRB"] = dataAccessRequestData!.irbFileHandleId
    }

    if (batchFileRequest.requestedFiles.length) {
      getFiles(batchFileRequest, token).then(files => {
        setRequiredFiles(files)
      })
    }

  }

  const goBack = () => {
    requestDataStepCallback?.()
  }

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    requestDataStepCallback?.(accessRequirementId)
  }

  const setCheck = (checked: boolean) => {

  }

  return (<>
    <Form className={"access-request-form2"} onSubmit={handleSubmit}>
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
            label=""
            id="ch1"
            checked={false}
            onChange={(checked: boolean) => setCheck(checked)}
            className={"ch1"}
          ></Checkbox>
          {accessorProfiles?.map((profile, i) => {
              return (
                <UserCardSmall key={i} userProfile={profile}></UserCardSmall>
              )
            })
          }
          <hr />
          <Button variant="link" style={{paddingLeft: "0"}}>Select All</Button>
          <Button variant="link" disabled>Remove Selected</Button>
        </Form.Group>

        { managedACTAccessRequirement?.isDUCRequired &&
          <>
            <Form.Group>
              <Form.Label htmlFor={"duc-temp"} className={"SRC-noMargin"}>DUC template</Form.Label><br />
              {/*<Button id={"duc-temp"} variant="link" className={"SRC-noPadding"} onClick={() => {}}>{getFileName(fileHandleIds?.ducTemplateFileHandleId)}</Button>*/}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor={"duc"} className={"SRC-noMargin"}>Upload DUC</Form.Label><br />
              <Button variant="link" className={"SRC-noPadding"}>duc.txt</Button><br />
              <Button id={"duc"} variant={"light-primary-base"}>Browse...</Button>
            </Form.Group>
          </>
        }

        { managedACTAccessRequirement?.isIRBApprovalRequired &&
          <Form.Group>
            <Form.Label htmlFor={"irb"} className={"SRC-noMargin"}>Upload IRB approval</Form.Label><br/>
            <Button variant="link" className={"SRC-noPadding"}>irb.txt</Button><br/>
            <Button id={"irb"} variant={"light-primary-base"}>Browse...</Button>
          </Form.Group>
        }
        <Form.Group>
          <Form.Label htmlFor={"irb"} className={"SRC-noMargin"}>Upload other required documents</Form.Label><br />
          <Checkbox
            label="irb.json"
            id="ch2"
            checked={false}
            onChange={(checked: boolean) => setCheck(checked)}
          ></Checkbox>
          <Button variant={"light-primary-base"}>Browse...</Button>
          <hr />
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