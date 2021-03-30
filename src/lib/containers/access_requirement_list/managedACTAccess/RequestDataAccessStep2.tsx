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
  BatchFileRequest,
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

export type DataAccessDoc = {
  name: string,
  preSignedURL: string
}

export type DataAccessDocs = {
  DUCTemplate: DataAccessDoc | undefined,
  DUC: DataAccessDoc | undefined,
  IRB: DataAccessDoc | undefined,
  attachments: DataAccessDoc[] | undefined
} | undefined

const RequestDataAccessStep2: React.FC<RequestDataAccessStep2Props> = props => {
  const {token, requestDataStepCallback, accessRequirementId, managedACTAccessRequirement} = props
  const [requester, setRequester] = useState<string>("")
  const [accessorProfiles, setAccessorProfiles] = useState<UserProfile[]>([])
  const [DUCTemplate, setDUCTemplate] = useState<DataAccessDoc>()
  const [DUC, setDUC] = useState<DataAccessDoc>()
  const [IRB, setIRB] = useState<DataAccessDoc>()
  const [attachments, setAttachments] = useState<DataAccessDoc[]>([])

  let mounted = true
  const requestedFileTypes = {}
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

    // get data access required docs data
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
      if (!requestedFileTypes[managedACTAccessRequirement.ducTemplateFileHandleId]) {
        requestedFileTypes[managedACTAccessRequirement.ducTemplateFileHandleId] = []
      }
      requestedFileTypes[managedACTAccessRequirement.ducTemplateFileHandleId].push("DUCTemplate")
    }

    if (managedACTAccessRequirement.isDUCRequired && dataAccessRequestData!.ducFileHandleId) {
      batchFileRequest.requestedFiles.push({
        associateObjectId: dataAccessRequestData!.id,
        associateObjectType: FileHandleAssociateType.DataAccessRequestAttachment,
        fileHandleId: dataAccessRequestData!.ducFileHandleId,
      })
      if (!requestedFileTypes[dataAccessRequestData.ducFileHandleId]) {
        requestedFileTypes[dataAccessRequestData.ducFileHandleId] = []
      }
      requestedFileTypes[dataAccessRequestData!.ducFileHandleId].push("DUC")
    }

    if (managedACTAccessRequirement.isIRBApprovalRequired) {
      batchFileRequest.requestedFiles.push({
        associateObjectId: dataAccessRequestData!.id,
        associateObjectType: FileHandleAssociateType.DataAccessRequestAttachment,
        fileHandleId: dataAccessRequestData!.irbFileHandleId,
      })
      if (!requestedFileTypes[dataAccessRequestData.ducFileHandleId]) {
        requestedFileTypes[dataAccessRequestData.ducFileHandleId] = []
      }
      requestedFileTypes[dataAccessRequestData!.irbFileHandleId].push("IRB")
    }

    if(dataAccessRequestData.attachments.length) {
      dataAccessRequestData.attachments.forEach(id => {
        batchFileRequest.requestedFiles.push({
          associateObjectId: dataAccessRequestData!.id,
          associateObjectType: FileHandleAssociateType.DataAccessRequestAttachment,
          fileHandleId: id,
        })
        if (!requestedFileTypes[id]) {
          requestedFileTypes[id] = []
        }
        requestedFileTypes[id].push("attachments")
      })
    }

    if (batchFileRequest.requestedFiles.length) {
      getFiles(batchFileRequest, token).then(resp => {
        resp.requestedFiles.forEach(file => {
          const fileName = file.fileHandle!.fileName
          const preSignedURL = file.preSignedURL!
          const fileTypes = requestedFileTypes[file.fileHandleId]

          fileTypes.forEach((type:string) => {
            switch (type) {
              case "DUCTemplate":
                setDUCTemplate({
                  name: fileName,
                  preSignedURL: preSignedURL
                })
                requestedFileTypes[file.fileHandleId].splice(fileTypes.indexOf("DUCTemplate"), 1)
                break
              case "DUC":
                setDUC({
                  name: fileName,
                  preSignedURL: preSignedURL
                })
                requestedFileTypes[file.fileHandleId].splice(fileTypes.indexOf("DUC"), 1)
                break
              case "IRB":
                setIRB({
                  name: fileName,
                  preSignedURL: preSignedURL
                })
                requestedFileTypes[file.fileHandleId].splice(fileTypes.indexOf("IRB"), 1)
                break
              case "attachments":
                setAttachments(prev => [...prev, {
                  name: fileName,
                  preSignedURL: preSignedURL
                }])
                requestedFileTypes[file.fileHandleId].splice(fileTypes.indexOf("attachments"), 1)
                break
              default:
            }
          })
        })
      }) // end getFiles
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

        {/* Accessors Checkboxes */}
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

        {/* DUC */}
        { managedACTAccessRequirement?.isDUCRequired &&
          <>
            <Form.Group>
              <Form.Label htmlFor={"duc-temp"} className={"SRC-noMargin"}>DUC template</Form.Label><br />
              <Button
                id={"duc-temp"}
                variant="link"
                className={"SRC-noPadding"}
                onClick={() => { window.open(DUCTemplate?.preSignedURL) }}>
                {DUCTemplate?.name}
              </Button>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor={"duc"} className={"SRC-noMargin"}>Upload DUC</Form.Label><br />
              <Button
                id={"duc"}
                variant="link"
                className={"SRC-noPadding"}
                onClick={() => { window.open(DUC?.preSignedURL) }}>
                {DUC?.name}
              </Button>
              <br />
              <Button id={"duc"} variant={"light-primary-base"}>Browse...</Button>
            </Form.Group>
          </>
        }

        {/* IRB */}
        { managedACTAccessRequirement?.isIRBApprovalRequired &&
          <Form.Group>
            <Form.Label htmlFor={"irb"} className={"SRC-noMargin"}>Upload IRB approval</Form.Label><br/>
            <Button
              id={"irb"}
              variant="link"
              className={"SRC-noPadding"}
              onClick={() => { window.open(IRB?.preSignedURL) }}>
              {IRB?.name}
            </Button>
            <br/>
            <Button id={"irb"} variant={"light-primary-base"}>Browse...</Button>
          </Form.Group>
        }

        {/* Attachments */}
        <Form.Group>
          <Form.Label className={"SRC-noMargin"}>Upload other required documents</Form.Label><br />
          {
            attachments?.length && attachments.map((attachment, i) => {
              return (<div key={`file-attachment-${i}`}>
                <Checkbox
                  id={""}
                  label={""}
                  checked={false}
                  onChange={(checked: boolean) => setCheck(checked)}
                  className={"ch2"}
                ></Checkbox>
                <Button
                  variant="link"
                  className={"SRC-noPadding"}
                  onClick={() => { window.open(attachment?.preSignedURL) }}>
                  {attachment?.name}
                </Button>
              </div>)
            })
          }
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