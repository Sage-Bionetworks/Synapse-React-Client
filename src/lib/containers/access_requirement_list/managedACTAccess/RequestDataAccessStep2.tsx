import * as React from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import * as ReactBootstrap from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { Checkbox } from '../../widgets/Checkbox'
import {
  getDataAccessRequestForUpdate,
  getUserProfileById,
  getFiles,
  updateDataAccessRequest,
} from '../../../utils/SynapseClient'
import { UserCardSmall } from '../../UserCardSmall'
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

export type RequestDataAccessStep2Props = {
  token: string,
  managedACTAccessRequirement: ManagedACTAccessRequirement,
  accessRequirementId: string,
  requestDataStepCallback?: Function
}

export type DataAccessDoc = {
  fileName?: string,
  associateObjectId?: string,
  associateObjectType?: string,
  fileHandleId: string
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

export type CheckboxProps = {
  value: string,
  isChecked: boolean
}

export type AlertProps = {
  key: string,
  message: string
}

const RequestDataAccessStep2: React.FC<RequestDataAccessStep2Props> = props => {
  const {token, requestDataStepCallback, accessRequirementId, managedACTAccessRequirement} = props
  const [accessorProfiles, setAccessorProfiles] = useState<UserProfile[]>([])
  const [DUCTemplate, setDUCTemplate] = useState<DataAccessDoc>()
  const [DUC, setDUC] = useState<DataAccessDoc>()
  const [IRB, setIRB] = useState<DataAccessDoc>()
  const [attachments, setAttachments] = useState<DataAccessDoc[]>([])
  const [attachmentCheckboxes, setAttachmentCheckboxes] = useState<CheckboxProps[]>([])
  const [accessorCheckboxes, setAccessorCheckboxes] = useState<CheckboxProps[]>([])
  const [enableRemAccessorChecks, setEnableRemAccessorChecks] = useState<boolean>(false)
  const [enableRemAttachmentChecks, setEnableRemAttachmentChecks] = useState<boolean>(false)
  const [formSubmitRequestObject, setFormSubmitRequestObject] = useState<RequestInterface>()
  const [alert, setAlert] = useState<AlertProps | undefined>()
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

    setFormSubmitRequestObject(dataAccessRequestData)

    // get data access required docs data
    getFilesData(dataAccessRequestData)

    // save assessors' user profiles
    if (accessorChanges && accessorChanges.length) {
      const ids:string[] = []
      accessorChanges.forEach((item, index) => {
        ids.push(item.userId)
        // accessorCheckboxes[index] = {
        //   value: item.userId,
        //   isChecked: false
        // }
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

    const attachmentCheckboxArr:CheckboxProps[] = []

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
        attachmentCheckboxArr[index] = {
          value: id,
          isChecked: false
        }
      })
    }

    setAttachmentCheckboxes(attachmentCheckboxArr)

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

  const goBack = () => {
    requestDataStepCallback?.()
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

  const setCheck = (groupName: string, checkbox:CheckboxProps) => {
    if (!groupName) return

    let checkboxArr:CheckboxProps[] | undefined
    switch (groupName) {
      case "accessors":
        checkboxArr = accessorCheckboxes
        checkboxArr?.forEach(item => {
          if (item.value === checkbox.value) {
            item.isChecked = !item.isChecked
          }
        })
        checkboxArr.filter(item => item.isChecked).length > 0
          ? setEnableRemAccessorChecks(true) : setEnableRemAccessorChecks(false)
        setAccessorCheckboxes(checkboxArr)
        break
      case "attachments":
        checkboxArr = attachmentCheckboxes
        setAttachmentCheckboxes([])
        checkboxArr?.forEach(item => {
          if (item.value === checkbox.value) {
            item.isChecked = !item.isChecked
          }
        })
        checkboxArr.filter(item => item.isChecked).length > 0
          ? setEnableRemAttachmentChecks(true) : setEnableRemAttachmentChecks(false)
        setAttachmentCheckboxes(checkboxArr)
        break
      default:
    }
  }

  const setCheckAll = (groupName:string, checked: boolean) => {
    if (!groupName) return

    let checkboxArr:CheckboxProps[] | undefined
    switch (groupName) {
      case "accessors":
        checkboxArr = accessorCheckboxes
        checkboxArr?.forEach(item => {
          item.isChecked = checked
        })
        setAccessorCheckboxes(checkboxArr)
        checked ? setEnableRemAccessorChecks(true) : setEnableRemAccessorChecks(false)
        break
      case "attachments":
        checkboxArr = attachmentCheckboxes
        setAttachmentCheckboxes([])
        checkboxArr?.forEach(item => {
          item.isChecked = checked
        })
        setAttachmentCheckboxes(checkboxArr)
        checked ? setEnableRemAttachmentChecks(true) : setEnableRemAttachmentChecks(false)
        break
      default:
    }
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
        <Form.Group>
          {accessorProfiles?.map((profile, i) => {
            const checkbox: CheckboxProps = accessorCheckboxes![i]
              return (<div key={`checkbox-accessor-${i}`}>
                <Checkbox
                  label=""
                  id=""
                  onChange={() => setCheck('accessors', checkbox)}
                  className={"ch1"}
                  value={checkbox?.value}
                  checked={checkbox?.isChecked}
                />
                <UserCardSmall
                  userProfile={profile}
                  showAccountLevelIcon={true}
                />
              </div>)
            })
          }
          <hr />
          <Button
            variant="link"
            style={{paddingLeft: "0"}}
            onClick={() => setCheckAll('accessors', true)}
          >Select All</Button>
          <Button
            variant="link"
            disabled={!enableRemAccessorChecks}
            onClick={() => setCheckAll('accessors', false)}
          >Remove Selected</Button>
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
            attachments.map((attachment, i) => {
              const checkbox: CheckboxProps = attachmentCheckboxes[i]
              return (<>
                  <Checkbox
                    id={`checkbox-ch2-${i}`}
                    label={""}
                    onChange={() => setCheck('attachments', checkbox)}
                    className={"ch2"}
                    key={`file-attachment-checkbox-${i}`}
                    value={checkbox.value}
                    checked={checkbox.isChecked}
                  />

                  <DirectDownloadButton
                    key={`file-attachment-btn-${i}`}
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
                  <br/>
                </>)
              })
            }
          <FileUpload
            token={token}
            id={"attachment-browse"}
            variant={"light-primary-base"}
            uploadCallback={uploadCallback}
            context={"attachments"}
          />
          <hr />
          <Button
            variant="link"
            style={{paddingLeft: "0"}}
            onClick={() => setCheckAll('attachments', true)}
          >Select All
          </Button>
          <Button
            variant="link"
            disabled={!enableRemAttachmentChecks}
            onClick={() => setCheckAll('attachments', false)}
          >Remove Selected</Button>
        </Form.Group>

      </ReactBootstrap.Modal.Body>
      <ReactBootstrap.Modal.Footer>
        <Button variant="link" onClick={goBack}>Cancel</Button>
        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
      </ReactBootstrap.Modal.Footer>
    </Form>
  </>)
}

export default RequestDataAccessStep2