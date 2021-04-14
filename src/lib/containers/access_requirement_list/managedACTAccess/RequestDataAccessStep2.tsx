import * as React from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import * as ReactBootstrap from 'react-bootstrap'
import { useEffect, useState } from 'react'
import {
  getDataAccessRequestForUpdate,
  getUserProfileById,
  getFiles,
  updateDataAccessRequest,
} from '../../../utils/SynapseClient'
import {
  BatchFileRequest,
  FileHandleAssociateType,
  FileUploadComplete,
  ManagedACTAccessRequirement,
  RequestInterface,
  UserProfile,
} from '../../../utils/synapseTypes'
import DirectDownloadButton from '../../DirectDownloadButton'
import FileUpload from '../../FileUpload'
import UserSearchBox from '../../UserSearchBox'
import {
  AccessorChange,
  AccessType
} from '../../../utils/synapseTypes/AccessRequirement/AccessorChange'
import { UserCardSmall } from '../../UserCardSmall'
import IconSvg from '../../IconSvg'

export type RequestDataAccessStep2Props = {
  token: string,
  managedACTAccessRequirement: ManagedACTAccessRequirement,
  accessRequirementId: string,
  requestDataStepCallback?: Function
  onHide: Function
}

export type DataAccessDoc = {
  fileName?: string,
  associateObjectId?: string,
  associateObjectType?: string,
  fileHandleId: string,
}

export type DataAccessDocs = {
  DUCTemplate: DataAccessDoc | undefined,
  DUC: DataAccessDoc | undefined,
  IRB: DataAccessDoc | undefined,
  attachments: DataAccessDoc[] | undefined
} | undefined

export type UploadCallbackResp = {
  resp: FileUploadComplete,
  context?: any
}

export type AlertProps = {
  key: string,
  message: string
}

const RequestDataAccessStep2: React.FC<RequestDataAccessStep2Props> = props => {
  const {token, requestDataStepCallback, accessRequirementId, managedACTAccessRequirement, onHide} = props
  const [DUCTemplate, setDUCTemplate] = useState<DataAccessDoc>()
  const [DUC, setDUC] = useState<DataAccessDoc>()
  const [IRB, setIRB] = useState<DataAccessDoc>()
  const [attachments, setAttachments] = useState<DataAccessDoc[]>([])
  const [accessorProfiles, setAccessorProfiles] = useState<UserProfile[]>([])
  const [formSubmitRequestObject, setFormSubmitRequestObject] = useState<RequestInterface>()
  const [alert, setAlert] = useState<AlertProps | undefined>()
  const [showCancelModal, setShowCancelModal] = useState<boolean>(false)
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

    // initialize form submission request object
    setFormSubmitRequestObject(dataAccessRequestData)

    // get data access required docs data to display file names
    getFilesData(dataAccessRequestData)

    // get assessors' user profiles data for display and save them in the state variables
    if (accessorChanges && accessorChanges.length) {
      const ids:string[] = []

      accessorChanges.forEach((item, index) => {
        ids.push(item.userId)
      })

      const promises = ids.map(userId => {
        return getUserProfileById(token, userId)
      })
      Promise.all(promises).then(profiles => {
        setAccessorProfiles(profiles)
      })
    }

  }

  const getFilesData = (dataAccessRequestData:RequestInterface) => {

    // Create the request objects for required documents and save them in the state variables
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
      if (!requestedFileTypes[dataAccessRequestData.irbFileHandleId]) {
        requestedFileTypes[dataAccessRequestData.irbFileHandleId] = []
      }
      requestedFileTypes[dataAccessRequestData!.irbFileHandleId].push("IRB")
      setIRB(requestObj)
    }

    if(dataAccessRequestData.attachments && dataAccessRequestData.attachments.length) {
      dataAccessRequestData.attachments.forEach((id, index) => {
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

    // Fetch the required doc file names and save them in the state variables
    if (batchFileRequest.requestedFiles.length) {
      getFiles(batchFileRequest, token).then(resp => {
        resp.requestedFiles.forEach(file => {
          const fileName = file.fileHandle!.fileName
          const fileTypes = requestedFileTypes[file.fileHandleId]

          fileTypes.forEach((type:string) => {
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

  const handleSubmit = async () => {
    if (formSubmitRequestObject) {
      try {
        const resp = await updateDataAccessRequest(formSubmitRequestObject, token)
        if (resp.id) {
          setAlert({
            key: 'success',
            message: 'The information you submitted has been updated. You may close this dialog.'
          })
        }

        // requestDataStepCallback?.(accessRequirementId)
      } catch (e) {
        console.log("RequestDataAccessStep2: Error updating form", e)
        setAlert({
          key: 'danger',
          message: 'Sorry, there is an error in submitting your request. Please try again later.'
        })
      }
    }
  }

  const onClearAccessor = (pid:string) => {
    const filtered:UserProfile[] = accessorProfiles.filter(item => item.ownerId !== pid)
    setAccessorProfiles(filtered)

    // Update form submission request object
    const newAccessorChanges:AccessorChange[] = filtered.map(item => {
      return {
        userId: item.ownerId,
        type: AccessType.GAIN_ACCESS
      }
    })
    setFormSubmitRequestObject(prevState => {
      return Object.assign({}, prevState, {
        accessorChanges: newAccessorChanges
      })
    })
  }

  const onClearAttachment = (fid:string) => {
    const filtered:DataAccessDoc[] = attachments.filter(item => item.fileHandleId !== fid)
    setAttachments(filtered)

    // Update form submission request object
    const newAttachments:string[] = filtered.map(item => item.fileHandleId)
    setFormSubmitRequestObject(prevState => {
      return Object.assign({}, prevState, {
        attachments: newAttachments
      })
    })
  }

  const uploadCallback = (data: UploadCallbackResp) => {
    if (data.context === "attachments") {
      const docs = formSubmitRequestObject?.attachments
      docs?.push(data.resp.fileHandleId)
      setFormSubmitRequestObject(prevState => {
        return Object.assign({}, prevState, {[data.context]: docs})
      })
      // Update the view
      setAttachments(prev => [...prev, {
        fileName: data.resp.fileName,
        fileHandleId: data.resp.fileHandleId
      }])
    } else {
      setFormSubmitRequestObject(prevState => {
        return Object.assign({}, prevState, {[data.context]: data.resp.fileHandleId})
      })
      // Update the view
      if (data.context === "ducFileHandleId") {
        setDUC(prevState => {
          return Object.assign({}, prevState, {
            fileName: data.resp.fileName,
            fileHandleId: data.resp.fileHandleId
          })
        })
      }
      if (data.context === "irbFileHandleId") {
        setIRB(prevState => {
          return Object.assign({}, prevState, {
            fileName: data.resp.fileName,
            fileHandleId: data.resp.fileHandleId
          })
        })
      }
    }
  }

  // User search input event handler
  const onSelectUserCallback = (selected:UserProfile) => {
    setAccessorProfiles(prev => [...prev, {
      ownerId: selected.ownerId,
      firstName: selected.firstName,
      lastName: selected.lastName,
      userName: selected.userName
    }])
    const selectedAccessor:AccessorChange = {
      userId: selected.ownerId,
      type: AccessType.GAIN_ACCESS
    }
    const accessorsArr = formSubmitRequestObject?.accessorChanges || []
    accessorsArr.push(selectedAccessor)
    setFormSubmitRequestObject(prevState => {
      return Object.assign({}, prevState, {
        accessorChanges: accessorsArr
      })
    })
  }

  return (<>
    <Form className={"access-request-form2"} onSubmit={e => e.preventDefault()}>
      <ReactBootstrap.Modal.Header closeButton={true}>
        <ReactBootstrap.Modal.Title className="AccessRequirementList__title">
          Request Access
        </ReactBootstrap.Modal.Title>
      </ReactBootstrap.Modal.Header>
      <ReactBootstrap.Modal.Body>
        <h4>Please provide the information below to submit the request for access.</h4>
        {
          alert && <Alert variant={alert.key}>
            {alert.message}
          </Alert>
        }
        <Form.Group style={{marginTop: "2rem"}} >
          <Form.Label htmlFor={"requesters"}>
            Data Requesters<br/>
            <em>This list should match those listed on your DUC.<br/>
            All data requesters must have a <a href={"#"}>validated user profile</a>.</em>
          </Form.Label>
          <UserSearchBox
            id={"requesters"}
            onSelectCallback={onSelectUserCallback}
          />
        </Form.Group>

        {/* Accessors Checkboxes */}
        <Form.Group style={{marginBottom: "1rem"}}>
          {
            accessorProfiles.map((profile, i) => {
              return (<div className={"list-items"} key={`accessors-${i}`}>
                <UserCardSmall
                  userProfile={profile}
                  showAccountLevelIcon={true}
                />
                <Button
                  className={"clear-x"}
                  variant={"link"}
                  onClick={(e) => onClearAccessor(profile.ownerId)}
                ><IconSvg options={{icon: 'clear'}} /></Button>
              </div>)
            })
          }
        </Form.Group>

        {/* DUC */}
        { managedACTAccessRequirement?.isDUCRequired &&
          <>
            <Form.Group>
              <Form.Label htmlFor={"duc-temp"} className={"SRC-noMargin"}>DUC template</Form.Label><br />
              { DUCTemplate && <DirectDownloadButton
                  fileHandleAssociation={{
                    associateObjectId: DUCTemplate?.associateObjectId!,
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
                    associateObjectId: DUC.associateObjectId!,
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
              <FileUpload
                token={token}
                id={"duc-browse"}
                variant={"light-primary-base"}
                uploadCallback={uploadCallback}
                context={"ducFileHandleId"}
              />
            </Form.Group>
          </>
        }

        {/* IRB */}
        { managedACTAccessRequirement?.isIRBApprovalRequired &&
          <Form.Group>
            <Form.Label htmlFor={"irb"} className={"SRC-noMargin"}>Upload IRB approval</Form.Label><br/>
            { IRB && <DirectDownloadButton
                fileHandleAssociation={{
                  associateObjectId: IRB.associateObjectId!,
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
            <FileUpload
              token={token}
              id={"irb-browse"}
              variant={"light-primary-base"}
              uploadCallback={uploadCallback}
              context={"irbFileHandleId"}
            />
          </Form.Group>
        }

        {/* Attachments */}
        <Form.Group>
          <Form.Label className={"SRC-noMargin"}>Upload other required documents</Form.Label><br />
          {
            attachments.map((attachment:DataAccessDoc, i:number) => {
              return (<div className={"list-items"} key={`file-attachment-${i}`}>
                <DirectDownloadButton
                  fileHandleAssociation={{
                    associateObjectId: attachment.associateObjectId!,
                    associateObjectType: attachment.associateObjectType as FileHandleAssociateType,
                    fileHandleId: attachment.fileHandleId
                  }}
                  fileName={attachment?.fileName}
                  variant={"link"}
                  className={"SRC-noPadding"}
                  token={token}
                />
                <Button
                  className={"clear-x"}
                  variant={"link"}
                  onClick={(e) => onClearAttachment(attachment.fileHandleId)}
                ><IconSvg options={{icon: 'clear'}} /></Button>
              </div>)
            })
          }
          <FileUpload
            token={token}
            id={"attachment-browse"}
            variant={"light-primary-base"}
            uploadCallback={uploadCallback}
            context={"attachments"}
          />
        </Form.Group>

      </ReactBootstrap.Modal.Body>
      <ReactBootstrap.Modal.Footer>
        <Button variant="link" onClick={() => setShowCancelModal(true)}>Cancel</Button>
        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
      </ReactBootstrap.Modal.Footer>
    </Form>

    {/* Cancel Dialog */}
    <div>
      <ReactBootstrap.Modal
        show={showCancelModal}
        className={'bootstrap-4-backport AccessRequirementList modal-auto-height cancel-modal'}
      >
        <ReactBootstrap.Modal.Header>
          <ReactBootstrap.Modal.Title>Save?</ReactBootstrap.Modal.Title>
        </ReactBootstrap.Modal.Header>

        <ReactBootstrap.Modal.Body>
          <p>Would you want to save your recent changes?</p>
        </ReactBootstrap.Modal.Body>

        <ReactBootstrap.Modal.Footer>
          <Button variant="link" onClick={() => onHide()}>Cancel</Button>
          <Button variant="primary">Save changes</Button>
        </ReactBootstrap.Modal.Footer>
      </ReactBootstrap.Modal>
    </div>


  </>)
}

export default RequestDataAccessStep2