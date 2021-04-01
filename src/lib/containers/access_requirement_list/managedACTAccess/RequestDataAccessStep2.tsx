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
import DirectDownloadButton from '../../DirectDownloadButton'
import FileUpload from '../../FileUpload'

export type RequestDataAccessStep2Props = {
  token: string,
  managedACTAccessRequirement: ManagedACTAccessRequirement,
  accessRequirementId: string,
  requestDataStepCallback?: Function
}

export type DataAccessDoc = {
  fileName?: string,
  associateObjectId: string,
  associateObjectType: string,
  fileHandleId: string
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
  const requestedFileTypes = {}
  const batchFileRequest: BatchFileRequest = {
    requestedFiles: [],
    includeFileHandles: true,
    includePreSignedURLs: false,
    includePreviewPreSignedURLs: false,
  }

  let mounted = true

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

  const getFilesData = (dataAccessRequestData:RequestInterface) => {

    if (managedACTAccessRequirement.isDUCRequired && managedACTAccessRequirement.ducTemplateFileHandleId) {
      const requestObj = {
        associateObjectId: accessRequirementId,
        associateObjectType: FileHandleAssociateType.AccessRequirementAttachment,
        fileHandleId: managedACTAccessRequirement!.ducTemplateFileHandleId,
      }
      batchFileRequest.requestedFiles.push(requestObj)
      if (!requestedFileTypes[managedACTAccessRequirement.ducTemplateFileHandleId]) {
        requestedFileTypes[managedACTAccessRequirement.ducTemplateFileHandleId] = []
      }
      requestedFileTypes[managedACTAccessRequirement.ducTemplateFileHandleId].push("DUCTemplate")
      setDUCTemplate(requestObj)
    }

    if (managedACTAccessRequirement.isDUCRequired && dataAccessRequestData!.ducFileHandleId) {
      const requestObj = {
        associateObjectId: dataAccessRequestData!.id,
        associateObjectType: FileHandleAssociateType.DataAccessRequestAttachment,
        fileHandleId: dataAccessRequestData!.ducFileHandleId,
      }
      batchFileRequest.requestedFiles.push(requestObj)
      if (!requestedFileTypes[dataAccessRequestData.ducFileHandleId]) {
        requestedFileTypes[dataAccessRequestData.ducFileHandleId] = []
      }
      requestedFileTypes[dataAccessRequestData!.ducFileHandleId].push("DUC")
      setDUC(requestObj)
    }

    if (managedACTAccessRequirement.isIRBApprovalRequired) {
      const requestObj = {
        associateObjectId: dataAccessRequestData!.id,
        associateObjectType: FileHandleAssociateType.DataAccessRequestAttachment,
        fileHandleId: dataAccessRequestData!.irbFileHandleId,
      }
      batchFileRequest.requestedFiles.push(requestObj)
      if (!requestedFileTypes[dataAccessRequestData.ducFileHandleId]) {
        requestedFileTypes[dataAccessRequestData.ducFileHandleId] = []
      }
      requestedFileTypes[dataAccessRequestData!.irbFileHandleId].push("IRB")
      setIRB(requestObj)
    }

    if(dataAccessRequestData.attachments && dataAccessRequestData.attachments.length) {
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
          const fileTypes = requestedFileTypes[file.fileHandleId]

          fileTypes.forEach((type:string, index:number) => {
            switch (type) {
              case "DUCTemplate":
                setDUCTemplate(prevState => {
                  return Object.assign({}, prevState, {fileName: fileName})
                })
                requestedFileTypes[file.fileHandleId].splice(fileTypes.indexOf("DUCTemplate"), 1)
                break
              case "DUC":
                setDUC(prevState => {
                  return Object.assign({}, prevState, {fileName: fileName})
                })
                requestedFileTypes[file.fileHandleId].splice(fileTypes.indexOf("DUC"), 1)
                break
              case "IRB":
                setIRB(prevState => {
                  return Object.assign({}, prevState, {fileName: fileName})
                })
                requestedFileTypes[file.fileHandleId].splice(fileTypes.indexOf("IRB"), 1)
                break
              case "attachments":
                setAttachments(prev => [...prev, {
                  fileName: fileName,
                  associateObjectId: dataAccessRequestData!.id,
                  associateObjectType: FileHandleAssociateType.DataAccessRequestAttachment,
                  fileHandleId: file.fileHandleId
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
          {accessorProfiles?.map((profile, i) => {
              return (<>
                <Checkbox
                  label=""
                  id=""
                  checked={false}
                  onChange={(checked: boolean) => setCheck(checked)}
                  className={"ch1"}
                  key={`checkbox-accessor-${i}`}
                  value={profile.ownerId}
                ></Checkbox>
                <UserCardSmall key={`accessor-${i}`} userProfile={profile}></UserCardSmall>
              </>)
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
              { DUCTemplate && <DirectDownloadButton
                  fileHandleAssociation={{
                    associateObjectId: DUCTemplate.associateObjectId,
                    associateObjectType: DUCTemplate.associateObjectType as FileHandleAssociateType,
                    fileHandleId: DUCTemplate.fileHandleId
                  }}
                  fileName={DUCTemplate.fileName}
                  id={"duc-temp"}
                  variant={"link"}
                  className={"SRC-noPadding"}
                  token={token}
                />
              }
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor={"duc"} className={"SRC-noMargin"}>Upload DUC</Form.Label><br />
              { DUC && <DirectDownloadButton
                  fileHandleAssociation={{
                    associateObjectId: DUC.associateObjectId,
                    associateObjectType: DUC.associateObjectType as FileHandleAssociateType,
                    fileHandleId: DUC.fileHandleId
                  }}
                  fileName={DUC?.fileName}
                  id={"duc-download"}
                  variant={"link"}
                  className={"SRC-noPadding"}
                  token={token}
                />
              }
              <br />
              <FileUpload token={token} id={"duc-browse"} variant={"light-primary-base"}></FileUpload>
            </Form.Group>
          </>
        }

        {/* IRB */}
        { managedACTAccessRequirement?.isIRBApprovalRequired &&
          <Form.Group>
            <Form.Label htmlFor={"irb"} className={"SRC-noMargin"}>Upload IRB approval</Form.Label><br/>
            { IRB && <DirectDownloadButton
                fileHandleAssociation={{
                  associateObjectId: IRB.associateObjectId,
                  associateObjectType: IRB.associateObjectType as FileHandleAssociateType,
                  fileHandleId: IRB.fileHandleId
                }}
                fileName={IRB?.fileName}
                id={"irb-download"}
                variant={"link"}
                className={"SRC-noPadding"}
                token={token}
              />
            }
            <br/>
            <FileUpload token={token} id={"irb-browse"} variant={"light-primary-base"}></FileUpload>
          </Form.Group>
        }

        {/* Attachments */}
        <Form.Group>
          <Form.Label className={"SRC-noMargin"}>Upload other required documents</Form.Label><br />
          {
            attachments.map((attachment, i) => {
              return (<>
                <Checkbox
                  id={`checkbox-ch2-${i}`}
                  label={""}
                  checked={false}
                  onChange={(checked: boolean) => setCheck(checked)}
                  className={"ch2"}
                  key={`file-attachment-checkbox-${i}`}
                  value={attachment.fileHandleId}
                ></Checkbox>

                <DirectDownloadButton
                  key={`file-attachment-btn-${i}`}
                  fileHandleAssociation={{
                    associateObjectId: attachment.associateObjectId,
                    associateObjectType: attachment.associateObjectType as FileHandleAssociateType,
                    fileHandleId: attachment.fileHandleId
                  }}
                  fileName={attachment?.fileName}
                  variant={"link"}
                  className={"SRC-noPadding"}
                  token={token}
                />
                <br/>
              </>)
            })
          }
          <FileUpload token={token} id={"attachment-browse"} variant={"light-primary-base"}></FileUpload>
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