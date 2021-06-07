import * as React from 'react'
import { useEffect, useState } from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import { Alert, Button, Form } from 'react-bootstrap'
import {
  getDataAccessRequestForUpdate,
  getFiles,
  getUserProfileById,
  submitDataAccessRequest,
  updateDataAccessRequest,
} from '../../../utils/SynapseClient'
import {
  AccessorChange,
  AccessType,
  ACTSubmissionStatus,
  BatchFileRequest,
  CreateSubmissionRequest,
  FileHandleAssociateType,
  FileUploadComplete,
  ManagedACTAccessRequirement,
  RequestInterface,
  RestrictableObjectType,
  SUBMISSION_STATE,
  UserProfile,
} from '../../../utils/synapseTypes'
import DirectDownloadButton from '../../DirectDownloadButton'
import FileUpload from '../../FileUpload'
import UserSearchBox from '../../UserSearchBox'
import { UserCardSmall } from '../../UserCardSmall'
import IconSvg from '../../IconSvg'
import { useSynapseContext } from '../../../utils/SynapseContext'
import { RenewalInterface } from '../../../utils/synapseTypes/AccessRequirement/RenewalInterface'

export type RequestDataAccessStep2Props = {
  managedACTAccessRequirement: ManagedACTAccessRequirement
  entityId: string
  requestDataStepCallback: Function
  user: UserProfile
  researchProjectId: string
  onHide: Function
}

export type DataAccessDoc = {
  fileName?: string
  associateObjectId?: string
  associateObjectType?: string
  fileHandleId: string
}

export type DataAccessDocs =
  | {
      DUCTemplate: DataAccessDoc | undefined
      DUC: DataAccessDoc | undefined
      IRB: DataAccessDoc | undefined
      attachments: DataAccessDoc[] | undefined
    }
  | undefined

export type UploadCallbackResp = {
  resp: FileUploadComplete
  context?: any
}

export type AlertProps = {
  key: string
  message: string | JSX.Element
}

const RequestDataAccessStep2: React.FC<RequestDataAccessStep2Props> = props => {
  const {
    requestDataStepCallback,
    managedACTAccessRequirement,
    entityId,
    user,
    researchProjectId,
  } = props
  const { accessToken } = useSynapseContext()
  const [DUCTemplate, setDUCTemplate] = useState<DataAccessDoc>()
  const [DUC, setDUC] = useState<DataAccessDoc>()
  const [IRB, setIRB] = useState<DataAccessDoc>()
  const [attachments, setAttachments] = useState<DataAccessDoc[]>([])
  const [accessorProfiles, setAccessorProfiles] = useState<UserProfile[]>([])
  const [
    formSubmitRequestObject,
    setFormSubmitRequestObject,
  ] = useState<RequestInterface|RenewalInterface>()
  const [alert, setAlert] = useState<AlertProps | undefined>()
  const [isRenewal, setIsRenewal] = useState<boolean>(false)
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
      setAlert(undefined)
      setFormData()
    }
    return () => {
      mounted = false
    }
  }, [accessToken, researchProjectId])

  const setFormData = async () => {
    const dataAccessRequestData = await getDataAccessRequestForUpdate(
      String(managedACTAccessRequirement.id),
      accessToken!,
    )

    // initialize form submission request object
    dataAccessRequestData.researchProjectId = researchProjectId
    setFormSubmitRequestObject(dataAccessRequestData)
    // get assessors' user profiles data for display and save them in the state variables
    getAccessorsData(dataAccessRequestData)
    // get data access required docs data to display file names
    getFilesData(dataAccessRequestData)

    if (dataAccessRequestData.concreteType === 'org.sagebionetworks.repo.model.dataaccess.Renewal') {
      setIsRenewal(true)
    }
  }

  const getAccessorsData = (dataAccessRequestData: RequestInterface) => {
    const accessorChanges = dataAccessRequestData.accessorChanges
    const ids: string[] = []

    if (!accessorChanges || !accessorChanges.length) {
      ids.push(user.ownerId)
      // Add current user to submission request object
      setFormSubmitRequestObject(prevState => {
        return Object.assign({}, prevState, {
          accessorChanges: [
            {
              userId: user.ownerId,
              type: AccessType.GAIN_ACCESS,
            },
          ],
        })
      })
    } else {
      accessorChanges.forEach(item => {
        ids.push(item.userId)
      })
    }

    const promises = ids.map(userId => {
      return getUserProfileById(accessToken, userId)
    })
    Promise.all(promises).then(profiles => {
      setAccessorProfiles(profiles)
    })
  }

  const getFilesData = (dataAccessRequestData: RequestInterface) => {
    // Create the request objects for required documents and save them in the state variables
    if (
      managedACTAccessRequirement.isDUCRequired &&
      managedACTAccessRequirement.ducTemplateFileHandleId
    ) {
      const requestObj = {
        associateObjectId: String(managedACTAccessRequirement.id),
        associateObjectType:
          FileHandleAssociateType.AccessRequirementAttachment,
        fileHandleId: managedACTAccessRequirement!.ducTemplateFileHandleId,
      }
      batchFileRequest.requestedFiles.push(requestObj)
      if (
        !requestedFileTypes[managedACTAccessRequirement.ducTemplateFileHandleId]
      ) {
        requestedFileTypes[
          managedACTAccessRequirement.ducTemplateFileHandleId
        ] = []
      }
      requestedFileTypes[
        managedACTAccessRequirement.ducTemplateFileHandleId
      ].push('DUCTemplate')
      setDUCTemplate(requestObj)
    }

    if (
      managedACTAccessRequirement.isDUCRequired &&
      dataAccessRequestData.ducFileHandleId
    ) {
      const requestObj = {
        associateObjectId: dataAccessRequestData!.id,
        associateObjectType:
          FileHandleAssociateType.DataAccessRequestAttachment,
        fileHandleId: dataAccessRequestData!.ducFileHandleId,
      }
      batchFileRequest.requestedFiles.push(requestObj)
      if (!requestedFileTypes[dataAccessRequestData.ducFileHandleId]) {
        requestedFileTypes[dataAccessRequestData.ducFileHandleId] = []
      }
      requestedFileTypes[dataAccessRequestData!.ducFileHandleId].push('DUC')
      setDUC(requestObj)
    }

    if (
      managedACTAccessRequirement.isIRBApprovalRequired &&
      dataAccessRequestData.irbFileHandleId
    ) {
      const requestObj = {
        associateObjectId: dataAccessRequestData!.id,
        associateObjectType:
          FileHandleAssociateType.DataAccessRequestAttachment,
        fileHandleId: dataAccessRequestData!.irbFileHandleId,
      }
      batchFileRequest.requestedFiles.push(requestObj)
      if (!requestedFileTypes[dataAccessRequestData.irbFileHandleId]) {
        requestedFileTypes[dataAccessRequestData.irbFileHandleId] = []
      }
      requestedFileTypes[dataAccessRequestData!.irbFileHandleId].push('IRB')
      setIRB(requestObj)
    }

    if (
      dataAccessRequestData.attachments &&
      dataAccessRequestData.attachments.length
    ) {
      dataAccessRequestData.attachments.forEach(id => {
        batchFileRequest.requestedFiles.push({
          associateObjectId: dataAccessRequestData!.id,
          associateObjectType:
            FileHandleAssociateType.DataAccessRequestAttachment,
          fileHandleId: id,
        })
        if (!requestedFileTypes[id]) {
          requestedFileTypes[id] = []
        }
        requestedFileTypes[id].push('attachments')
      })
    }

    // Fetch the required doc file names and save them in the state variables
    if (batchFileRequest.requestedFiles.length) {
      getFiles(batchFileRequest, accessToken).then(resp => {
        resp.requestedFiles.forEach(file => {
          const fileName = file.fileHandle!.fileName
          const fileTypes = requestedFileTypes[file.fileHandleId]

          fileTypes.forEach((type: string) => {
            switch (type) {
              case 'DUCTemplate':
                setDUCTemplate(prevState => {
                  return Object.assign({}, prevState, { fileName: fileName })
                })
                requestedFileTypes[file.fileHandleId].splice(
                  fileTypes.indexOf('DUCTemplate'),
                  1,
                )
                break
              case 'DUC':
                setDUC(prevState => {
                  return Object.assign({}, prevState, { fileName: fileName })
                })
                requestedFileTypes[file.fileHandleId].splice(
                  fileTypes.indexOf('DUC'),
                  1,
                )
                break
              case 'IRB':
                setIRB(prevState => {
                  return Object.assign({}, prevState, { fileName: fileName })
                })
                requestedFileTypes[file.fileHandleId].splice(
                  fileTypes.indexOf('IRB'),
                  1,
                )
                break
              case 'attachments':
                setAttachments(prev => [
                  ...prev,
                  {
                    fileName: fileName,
                    associateObjectId: dataAccessRequestData!.id,
                    associateObjectType:
                      FileHandleAssociateType.DataAccessRequestAttachment,
                    fileHandleId: file.fileHandleId,
                  },
                ])
                requestedFileTypes[file.fileHandleId].splice(
                  fileTypes.indexOf('attachments'),
                  1,
                )
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
        const resp = await updateDataAccessRequest(
          formSubmitRequestObject,
          accessToken!,
        )
        if (resp && resp.etag) {
          // save success
          const requestObject: CreateSubmissionRequest = {
            requestId: resp.id,
            requestEtag: resp.etag,
            subjectId: entityId,
            subjectType: RestrictableObjectType.ENTITY,
          }

          // Update save etag
          setFormSubmitRequestObject(prevState => {
            return Object.assign({}, prevState, {
              etag: resp.etag,
            })
          })

          // and submit
          const submission_resp: ACTSubmissionStatus = await submitDataAccessRequest(
            requestObject,
            accessToken!,
          )
          const alertMsg = getSubmissionMsg(submission_resp)
          if (submission_resp.state === SUBMISSION_STATE.REJECTED) {
            setAlert({
              key: 'danger',
              message: alertMsg,
            })
          } else {
            setAlert({
              key: 'success',
              message: alertMsg,
            })
          }
        } else {
          setAlert({
            key: 'danger',
            message: getErrorMessage(),
          })
        }
      } catch (e) {
        console.log('RequestDataAccessStep2: Error updating form', e)
        setAlert({
          key: 'danger',
          message: getErrorMessage(e.reason),
        })
      }
    }
  }

  const getErrorMessage = (reason: string = '') => {
    return (
      <>
        <strong>Sorry, there is an error in submitting your request.</strong>
        <br />
        {reason}
      </>
    )
  }

  const getSubmissionMsg = (submission_resp: ACTSubmissionStatus) => {
    const msgStart = 'The information has been '
    switch (submission_resp.state) {
      case SUBMISSION_STATE.SUBMITTED:
        return <strong>{msgStart} submitted.</strong>
      case SUBMISSION_STATE.APPROVED:
        return <strong>{msgStart} approved.</strong>
      case SUBMISSION_STATE.CANCELLED:
        return <strong>{msgStart} canceled.</strong>
      case SUBMISSION_STATE.REJECTED:
        return (
          <>
            <strong>{msgStart} rejected.</strong>{' '}
            {submission_resp.rejectedReason}. Please close this dialog and try
            again later.
          </>
        )
      default:
        return <></>
    }
  }

  const onClearAccessor = (pid: string) => {
    // Update the view
    const filtered: UserProfile[] = accessorProfiles.filter(
      item => item.ownerId !== pid,
    )
    setAccessorProfiles(filtered)

    // Update form submission request object
    const newAccessorChanges: AccessorChange[] = filtered.map(item => {
      return {
        userId: item.ownerId,
        type: AccessType.GAIN_ACCESS,
      }
    })
    setFormSubmitRequestObject(prevState => {
      return Object.assign({}, prevState, {
        accessorChanges: newAccessorChanges,
      })
    })
  }

  const onClearAttachment = (fid: string) => {
    // Update the view
    const filtered: DataAccessDoc[] = attachments.filter(
      item => item.fileHandleId !== fid,
    )
    setAttachments(filtered)

    // Update form submission request object
    const newAttachments: string[] = filtered.map(item => item.fileHandleId)
    setFormSubmitRequestObject(prevState => {
      return Object.assign({}, prevState, {
        attachments: newAttachments,
      })
    })
  }

  const uploadCallback = (data: UploadCallbackResp) => {
    if (data.context === 'attachments') {
      const docs = formSubmitRequestObject?.attachments
        ? formSubmitRequestObject?.attachments
        : []
      docs?.push(data.resp.fileHandleId)
      setFormSubmitRequestObject(prevState => {
        return Object.assign({}, prevState, { attachments: docs })
      })
      // Update the view
      setAttachments(prev => [
        ...prev,
        {
          fileName: data.resp.fileName,
          fileHandleId: data.resp.fileHandleId,
        },
      ])
    } else {
      setFormSubmitRequestObject(prevState => {
        return Object.assign({}, prevState, {
          [data.context]: data.resp.fileHandleId,
        })
      })
      // Update the view
      if (data.context === 'ducFileHandleId') {
        setDUC(prevState => {
          return Object.assign({}, prevState, {
            fileName: data.resp.fileName,
            fileHandleId: data.resp.fileHandleId,
          })
        })
      }
      if (data.context === 'irbFileHandleId') {
        setIRB(prevState => {
          return Object.assign({}, prevState, {
            fileName: data.resp.fileName,
            fileHandleId: data.resp.fileHandleId,
          })
        })
      }
    }
  }

  // User search input event handler
  const onSelectUserCallback = (selected: UserProfile) => {
    setAccessorProfiles(prev => [
      ...prev,
      {
        ownerId: selected.ownerId,
        firstName: selected.firstName,
        lastName: selected.lastName,
        userName: selected.userName,
      },
    ])
    const selectedAccessor: AccessorChange = {
      userId: selected.ownerId,
      type: AccessType.GAIN_ACCESS,
    }
    const accessorsArr = formSubmitRequestObject?.accessorChanges || []
    accessorsArr.push(selectedAccessor)
    setFormSubmitRequestObject(prevState => {
      return Object.assign({}, prevState, {
        accessorChanges: accessorsArr,
      })
    })
  }

  const handleTextAreaInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>, id: string) => {
    const value = e.target.value
    switch(id) {
      case 'publications':
        setFormSubmitRequestObject(prevState => {
          return Object.assign({}, prevState, {
            publication: value
          })
        })
        break
      case 'summaryOfUse':
        setFormSubmitRequestObject(prevState => {
          return Object.assign({}, prevState, {
            summaryOfUse: value
          })
        })
        break
      default:
    }
  }

  return (
    <>
      <Form
        className={'access-request-form2'}
        onSubmit={e => e.preventDefault()}
      >
        <ReactBootstrap.Modal.Header closeButton={true}>
          <ReactBootstrap.Modal.Title className="AccessRequirementList__title">
            Request Access
          </ReactBootstrap.Modal.Title>
        </ReactBootstrap.Modal.Header>
        <ReactBootstrap.Modal.Body>
          <p>
            Please provide the information below to submit the request for
            access.
          </p>
          <Form.Group>
            <Form.Label htmlFor={'requesters'} style={{ margin: '0' }}>
              Data Requesters
            </Form.Label>
            <br />
            <span>This list should match those listed on your DUC.</span>
            <br />
            <span className={'requester-label'}>
              All data requesters must have a validated user profile.
            </span>
            <a
              href={
                'https://help.synapse.org/docs/User-Types.2007072795.html#UserAccountTiers-ValidatedUsers'
              }
              target={'_blank'}
              rel={'noreferrer'}
            >
              <IconSvg
                options={{
                  icon: 'info',
                }}
              />
            </a>
            <UserSearchBox
              id={'requesters'}
              onSelectCallback={onSelectUserCallback}
            />
          </Form.Group>

          {/* Accessors Checkboxes */}
          <Form.Group style={{ marginBottom: '4rem' }}>
            {accessorProfiles.map((profile, i) => {
              return (
                <div className={'list-items'} key={`accessors-${i}`}>
                  <UserCardSmall
                    userProfile={profile}
                    showAccountLevelIcon={true}
                    disableLink={true}
                  />
                  {
                    // only display delete button if the user profile is other users.
                    user.ownerId !== profile.ownerId && (
                      <Button
                        className={'clear-x'}
                        variant={'link'}
                        onClick={() => onClearAccessor(profile.ownerId)}
                      >
                        <IconSvg options={{ icon: 'clear' }} />
                      </Button>
                    )
                  }
                </div>
              )
            })}
          </Form.Group>

          {/* DUC */}
          {managedACTAccessRequirement?.isDUCRequired && (
            <>
              <Form.Group>
                <Form.Label htmlFor={'duc-temp'} className={'SRC-noMargin'}>
                  DUC template
                </Form.Label>
                <br />
                {DUCTemplate && (
                  <div>
                    <DirectDownloadButton
                      fileHandleAssociation={{
                        associateObjectId: DUCTemplate?.associateObjectId!,
                        associateObjectType: DUCTemplate.associateObjectType as FileHandleAssociateType,
                        fileHandleId: DUCTemplate.fileHandleId,
                      }}
                      fileName={DUCTemplate.fileName}
                      id={'duc-temp'}
                      variant={'link'}
                      className={'SRC-noPadding'}
                    />
                  </div>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor={'duc'} className={'SRC-noMargin'}>
                  Upload DUC
                </Form.Label>
                <br />
                {DUC && (
                  <div>
                    <DirectDownloadButton
                      fileHandleAssociation={{
                        associateObjectId: DUC.associateObjectId!,
                        associateObjectType: DUC.associateObjectType as FileHandleAssociateType,
                        fileHandleId: DUC.fileHandleId,
                      }}
                      fileName={DUC?.fileName}
                      id={'duc-download'}
                      variant={'link'}
                      className={'SRC-noPadding'}
                    />
                  </div>
                )}
                <FileUpload
                  id={'duc-browse'}
                  variant={'light-primary-base'}
                  uploadCallback={uploadCallback}
                  context={'ducFileHandleId'}
                />
              </Form.Group>
            </>
          )}

          {/* IRB */}
          {managedACTAccessRequirement?.isIRBApprovalRequired && (
            <Form.Group>
              <Form.Label htmlFor={'irb'} className={'SRC-noMargin'}>
                Upload IRB approval
              </Form.Label>
              <br />
              {IRB && (
                <div>
                  <DirectDownloadButton
                    fileHandleAssociation={{
                      associateObjectId: IRB.associateObjectId!,
                      associateObjectType: IRB.associateObjectType as FileHandleAssociateType,
                      fileHandleId: IRB.fileHandleId,
                    }}
                    fileName={IRB?.fileName}
                    id={'irb-download'}
                    variant={'link'}
                    className={'SRC-noPadding'}
                  />
                </div>
              )}
              <FileUpload
                id={'irb-browse'}
                variant={'light-primary-base'}
                uploadCallback={uploadCallback}
                context={'irbFileHandleId'}
              />
            </Form.Group>
          )}

          {
            /* Attachments */
            managedACTAccessRequirement?.areOtherAttachmentsRequired && (
              <Form.Group>
                <Form.Label className={'SRC-noMargin'}>
                  Upload other required documents
                </Form.Label>
                <br />
                {attachments.map((attachment: DataAccessDoc, i: number) => {
                  return (
                    <div className={'list-items'} key={`file-attachment-${i}`}>
                      <DirectDownloadButton
                        fileHandleAssociation={{
                          associateObjectId: attachment.associateObjectId!,
                          associateObjectType: attachment.associateObjectType as FileHandleAssociateType,
                          fileHandleId: attachment.fileHandleId,
                        }}
                        fileName={attachment?.fileName}
                        variant={'link'}
                        className={'SRC-noPadding attachment-download'}
                      />
                      <Button
                        className={'clear-x'}
                        variant={'link'}
                        onClick={() =>
                          onClearAttachment(attachment.fileHandleId)
                        }
                      >
                        <IconSvg options={{ icon: 'clear' }} />
                      </Button>
                    </div>
                  )
                })}
                <FileUpload
                  id={'attachment-browse'}
                  variant={'light-primary-base'}
                  uploadCallback={uploadCallback}
                  context={'attachments'}
                />
              </Form.Group>
            )
          }

          { // Publications & Summary of Use
            isRenewal && (
            <>
              <Form.Group>
                <Form.Label htmlFor={'publications'} className={'SRC-noMargin'}>
                  Publication(s)
                </Form.Label>
                <Form.Control
                  id={"publications"}
                  as="textarea"
                  rows={3}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    handleTextAreaInputChange(e, 'publications')
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor={'summaryOfUse'} className={'SRC-noMargin'}>
                  Summary of use
                </Form.Label>
                <Form.Control
                  id={"summaryOfUse"}
                  as="textarea"
                  rows={3}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    handleTextAreaInputChange(e, 'summaryOfUse')
                  }
                />
              </Form.Group>
            </>
            )
          }

          {
            /* Alert message */
            alert && <Alert variant={alert.key}>{alert.message}</Alert>
          }
        </ReactBootstrap.Modal.Body>
        <ReactBootstrap.Modal.Footer>
          {
            <>
              <Button
                variant="link"
                onClick={() =>
                  requestDataStepCallback?.({
                    step: 3,
                    formSubmitRequestObject: formSubmitRequestObject,
                  })
                }
              >
                Cancel
              </Button>
              <Button variant="primary" onClick={() => handleSubmit()}>
                Submit
              </Button>
            </>
          }
        </ReactBootstrap.Modal.Footer>
      </Form>
    </>
  )
}

export default RequestDataAccessStep2
