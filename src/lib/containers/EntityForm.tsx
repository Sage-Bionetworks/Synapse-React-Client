import * as React from 'react'
import { default as Form } from 'react-jsonschema-form'
import { UserProfile } from '../utils/jsonResponses/UserProfile'
import { SynapseClient } from '../utils'
import { AccessControlList } from '../utils/jsonResponses/AccessControlList'
import { ResourceAccess } from '../utils/jsonResponses/ResourceAccess'
import { Evaluation } from '../utils/jsonResponses/Evaluation'
import { Submission } from '../utils/jsonResponses/Submission'
import { FileEntity } from '../utils/jsonResponses/FileEntity'
import { EntityId } from '../utils/jsonResponses/EntityId'

type EntityFormState = {
  error?: any,
  isLoading?: boolean,
  successfullyUploaded: boolean,
  containerId?: string,
  userprofile?: UserProfile,
  successMessage?: string,
  evaluation?: Evaluation, // if evaluation id was provided, submit to this evaluation
  currentFileEntity?: FileEntity, // file holding user form data
  formData?: any, // form data that prepopulates the form
  formSchema?: any, // schema that drives the form
  formUiSchema?: any // ui schema that directs how to render the form elements
}

export type EntityFormProps = {
  parentContainerId: string, // A container (project/folder) to create the user’s form folder in (which holds all of their form files).
  // By default, only the user will have access to this subfolder (and files within).
  formSchemaEntityId: string, // Synapse file that contains the form schema.
  formUiSchemaEntityId: string, // Synapse file that contains the form ui schema.
  initFormData: boolean // If true, it indicates that you’d like to download and pre-fill the form with the user's previous response.
  token?: string, // user's session token
  evaluationId?: string // Optional: Will submit the new form entity to the given evaluation queue on submit.
}

export default class EntityForm
  extends React.Component<EntityFormProps, EntityFormState> {

  constructor(props: EntityFormProps) {
    super(props)
    this.state = {
      isLoading: true,
      successfullyUploaded: false,
    }
  }

  componentDidUpdate(prevProps: any) {
    const shouldUpdate = this.props.token !== prevProps.token
    if (shouldUpdate && this.props.token) {
      const promises = [
        SynapseClient.getUserProfile(this.props.token, 'https://repo-prod.prod.sagebase.org'),
        SynapseClient.getEntity(this.props.token, this.props.formSchemaEntityId),
        SynapseClient.getEntity(this.props.token, this.props.formUiSchemaEntityId),
      ]
      if (this.props.evaluationId) {
        promises.push(SynapseClient.getEvaluation(this.props.evaluationId, this.props.token))
      }
      Promise.all(promises).then((values) => {
        const userprofile: UserProfile = values[0]
        this.getTargetFolder(userprofile, this.props.token!).then((targetFolderId: string) => {
          const formSchemaFileEntity: FileEntity = values[1]
          const formUiSchemaFileEntity: FileEntity = values[2]
          this.getSchemaFileContent(targetFolderId, formSchemaFileEntity, formUiSchemaFileEntity)
          if (values[3]) {
            const evaluation: Evaluation = values[3]
            this.setState({ evaluation })
          }
        })
      }).catch((error) => {
        this.onError(error)
      })
    }
  }

  getSchemaFileContent = (
    targetFolderId: string,
    formSchemaFileEntity: FileEntity,
    formUiSchemaFileEntity: FileEntity
  ) => {
    const promises = [
      SynapseClient.getFileEntityContent(this.props.token!, formSchemaFileEntity),
      SynapseClient.getFileEntityContent(this.props.token!, formUiSchemaFileEntity),
    ]
    Promise.all(promises).then((values) => {
      const formSchemaContent = JSON.parse(values[0])
      const formUiSchemaContent = JSON.parse(values[1])
      this.getExistingFileData(targetFolderId, formSchemaContent, formUiSchemaContent)
    }).catch((error) => {
      this.onError(error)
    })
  }

  getExistingFileData = (targetFolderId: string, formSchemaContent: any, formUiSchemaContent: any) => {
    // if data already exists, save a reference to the existing entity and prefill the form
    const fileName = `${formSchemaContent.title}.json`
    const entityLookupRequest = { entityName: fileName, parentId: targetFolderId }
    let formData: any
    let currentFileEntity: FileEntity
    SynapseClient.lookupChildEntity(entityLookupRequest, this.props.token).then((entityId:EntityId) => {
      // ok, found the existing file
      return SynapseClient.getEntity(this.props.token, entityId.id).then((entity: FileEntity) => {
        currentFileEntity = entity
        if (this.props.initFormData) {
          return SynapseClient.getFileEntityContent(this.props.token!, currentFileEntity).then((existingFileData) => {
            formData = JSON.parse(existingFileData)
          })
        }
        // else we're done
        return Promise.resolve()
      })
    }).finally(() => {
      this.setState(
        {
          formData,
          currentFileEntity,
          formSchema: formSchemaContent,
          formUiSchema: formUiSchemaContent
        })
    })
  }

  getTargetFolder = async (userprofile: UserProfile, token: string) => {
    const folderName = `${userprofile.userName} (form files)`
    const entityLookupRequest = { entityName: folderName, parentId: this.props.parentContainerId }
    try {
      const entityId = await SynapseClient.lookupChildEntity(entityLookupRequest, token)
      // ok, found an entity of the same name.
      console.log(`EntityForm uploading to https://www.synapse.org/#!Synapse:${entityId.id}`)
      this.setState({
        userprofile,
        containerId: entityId.id,
        isLoading: false
      })
      return entityId.id
    } catch (error) {
      if (error.statusCode === 404) {
        // ok, it's a new folder
        return this.createTargetFolder(folderName, userprofile, token)
      }
      return this.onError(error)
    }
  }

  createTargetFolder = async (folderName: string, userprofile: UserProfile, token: string) => {
    const newEntity = {
      name: folderName,
      parentId: this.props.parentContainerId,
      concreteType: 'org.sagebionetworks.repo.model.Folder'
    }
    try {
      const entity = await SynapseClient.createEntity(newEntity, token)
      // and set the acl to private by default
      const resourceAccess: ResourceAccess[] = [
        {
          principalId: parseInt(userprofile.ownerId, 10),
          accessType: ['READ', 'DOWNLOAD', 'UPDATE', 'DELETE',
            'CREATE', 'CHANGE_PERMISSIONS', 'CHANGE_SETTINGS', 'MODERATE']
        }
      ]
      const acl: AccessControlList = {
        resourceAccess,
        id: entity.id,
      }
      SynapseClient.createACL(entity.id, acl, token).then((newAcl: AccessControlList) => {
        console.log(`EntityForm uploading to https://www.synapse.org/#!Synapse:${entity.id}`)
        this.setState({
          userprofile,
          containerId: entity.id,
          isLoading: false
        })
        return entity.id
      })
    } catch (error) {
      return this.onError(error)
    }
  }

  finishedProcessing = (successMessage: string) => {
    this.setState(
      {
        successMessage,
        isLoading: false,
        successfullyUploaded: true,
      })
  }

  onError = (error: any) => {
    this.setState({
      error,
      isLoading: false,
      successfullyUploaded: false
    })
  }

  onSubmit = ({ formData }: any) => {
    this.setState(
      {
        isLoading: true,
        successfullyUploaded: false
      })

    const submissionFileAndForm: Blob = new Blob([JSON.stringify(formData)], {
      type: 'text/json'
    })
    this.createEntityFile(submissionFileAndForm)
  }

  createEntityFile = (fileContentsBlob: Blob) => {
    const fileName = `${this.state.formSchema.title}.json`
    SynapseClient.uploadFile(this.props.token, fileName, fileContentsBlob).then(
      (fileUploadComplete: any) => {
        // do we need to create a new file entity, or update an existing file entity?
        const newFileHandleId = fileUploadComplete.fileHandleId
        if (this.state.currentFileEntity) {
          this.state.currentFileEntity.dataFileHandleId = newFileHandleId
          return SynapseClient.updateEntity(this.state.currentFileEntity, this.props.token)
        }
        // else, it's a new file entity
        const newFileEntity: FileEntity = {
          parentId: this.state.containerId!,
          name: fileName,
          concreteType: 'org.sagebionetworks.repo.model.FileEntity',
          dataFileHandleId: newFileHandleId,
        }
        return SynapseClient.createEntity(newFileEntity, this.props.token)
      }).then((fileEntity: FileEntity) => {
        // by this point we've either found and updated the existing file entity, or created a new one.
        if (this.state.evaluation) {
          this.submitToEvaluation(fileEntity)
        } else {
          this.finishedProcessing('Successfully uploaded.')
        }
      }).catch((error: any) => {
        this.onError(error)
      })
  }

  submitToEvaluation = (entity: FileEntity) => {
    const submission: Submission = {
      entityId: entity.id!,
      versionNumber: entity.versionNumber!,
      userId: this.state.userprofile!.ownerId,
      evaluationId: this.state.evaluation!.id,
    }
    SynapseClient.submitToEvaluation(submission, entity.etag!, this.props.token).then(
      () => {
        this.finishedProcessing(this.state.evaluation!.submissionReceiptMessage)
      }).catch((error: any) => {
        this.onError(error)
      })
  }

  render() {
    return (
      <div>
        {
          !this.state.error &&
          this.props.token &&
          !this.state.isLoading &&
          !this.state.successfullyUploaded &&
          this.state.formSchema &&
          this.state.formUiSchema &&
          <Form
            formData={this.state.formData}
            schema={this.state.formSchema}
            uiSchema={this.state.formUiSchema}
            onSubmit={this.onSubmit}
            showErrorList={true}
          />
        }
        {
          !this.state.error &&
          this.props.token &&
          !this.state.isLoading &&
          !this.state.successfullyUploaded &&
          this.state.formSchema &&
          this.state.formUiSchema &&
          this.state.evaluation &&
          <div className="bg-warning" style={{ padding: '10px' }}>
            &#42; The information that you have entered in this form will be sent to the
            administrators of this evaluation:
            <strong style={{ marginLeft: '5px' }}>{this.state.evaluation.name}</strong>
          </div>
        }
        {
          !this.state.error &&
          this.props.token &&
          this.state.isLoading &&
          <React.Fragment>
            <span style={{ marginLeft: '2px' }} className={'spinner'} />
          </React.Fragment>
        }
        {
          !this.state.error &&
          this.props.token &&
          this.state.successfullyUploaded &&
          <span style={{ marginLeft: '10px' }}>
            {this.state.successMessage}
          </span>
        }
        {
          this.state.error &&
          <p>
            Error: {this.state.error.name || this.state.error.reason}
          </p>
        }
      </div>
    )
  }
}
