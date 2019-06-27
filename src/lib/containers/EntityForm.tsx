import * as React from 'react'
import { default as Form } from 'react-jsonschema-form'
import { UserProfile } from '../utils/jsonResponses/UserProfile'
import { SynapseClient } from '../utils'
import { AccessControlList } from '../utils/jsonResponses/AccessControlList'
import { ResourceAccess } from '../utils/jsonResponses/ResourceAccess'
import { Evaluation } from '../utils/jsonResponses/Evaluation'
import { Submission } from '../utils/jsonResponses/Submission'
import { FileEntity } from '../utils/jsonResponses/FileEntity'

type EntityFormState = {
  error?: any,
  isLoading?: boolean,
  successfullyUploaded: boolean,
  containerId?: string,
  userprofile?: UserProfile,
  successMessage?: string,
  evaluation?: Evaluation,
  formSchema?: any,
  formUiSchema?: any
}

export type EntityFormProps = {
  parentContainerId: string, // container (project/folder) to create our form folder in (that holds the form files)
  formSchemaEntityId: string, // Synapse file that contains the form schema
  formUiSchemaEntityId: string, // Synapse file that contains the form ui schema
  token?: string, // user's session token
  evaluationId?: string // optional: submits the new form entity to the evaluation queue
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
    const newFileEntity: any = {
      parentId: this.state.containerId,
      name: `${Math.floor(Date.now() / 1000).toString()}.json`,
      concreteType: 'org.sagebionetworks.repo.model.FileEntity',
      dataFileHandleId: '',
    }
    SynapseClient.uploadFile(this.props.token, newFileEntity.name, fileContentsBlob).then(
      (fileUploadComplete: any) => {
        newFileEntity.dataFileHandleId = fileUploadComplete.fileHandleId
        SynapseClient.createEntity(newFileEntity, this.props.token).then((updatedEntity) => {
          if (this.state.evaluation) {
            this.submitToEvaluation(updatedEntity)
          } else {
            this.finishedProcessing('Successfully uploaded.')
          }
        })
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
        this.getTargetFolder(userprofile, this.props.token!)
        const formSchemaFileEntity: FileEntity = values[1]
        const formUiSchemaFileEntity: FileEntity = values[2]
        this.getSchemaFileContent(formSchemaFileEntity, formUiSchemaFileEntity)
        if (values[3]) {
          const evaluation: Evaluation = values[3]
          this.setState({ evaluation })
        }
      }).catch((error) => {
        this.onError(error)
      })
    }
  }

  getSchemaFileContent = (formSchemaFileEntity: FileEntity, formUiSchemaFileEntity: FileEntity) => {
    const promises = [
      SynapseClient.getFileEntityContent(this.props.token!, formSchemaFileEntity),
      SynapseClient.getFileEntityContent(this.props.token!, formUiSchemaFileEntity),
    ]
    Promise.all(promises).then((values) => {
      const formSchemaContent: string = values[0]
      const formUiSchemaContent: string = values[1]
      this.setState(
        {
          formSchema: JSON.parse(formSchemaContent),
          formUiSchema: JSON.parse(formUiSchemaContent)
        })
    }).catch((error) => {
      this.onError(error)
    })
  }
  getTargetFolder = (userprofile: UserProfile, token: string) => {
    const folderName = `${userprofile.userName} (form files)`
    const entityLookupRequest = { entityName: folderName, parentId: this.props.parentContainerId }
    SynapseClient.lookupChildEntity(entityLookupRequest, token).then((entityId) => {
      // ok, found an entity of the same name.
      console.log(`EntityForm uploading to https://www.synapse.org/#!Synapse:${entityId.id}`)
      this.setState({
        userprofile,
        containerId: entityId.id,
        isLoading: false
      })
    }).catch((error: any) => {
      if (error.statusCode === 404) {
        // ok, it's a new folder
        return this.createTargetFolder(folderName, userprofile, token)
      }
      return this.onError(error)
    })
  }

  createTargetFolder = (folderName: string, userprofile: UserProfile, token: string) => {
    const newEntity = {
      name: folderName,
      parentId: this.props.parentContainerId,
      concreteType: 'org.sagebionetworks.repo.model.Folder'
    }
    return SynapseClient.createEntity(newEntity, token).then((entity) => {
      // and set the acl to private by default
      const resourceAccess: ResourceAccess[] = [
        {
          principalId: parseInt(userprofile.ownerId, 10),
          accessType:
          ['READ', 'DOWNLOAD', 'UPDATE', 'DELETE',
            'CREATE', 'CHANGE_PERMISSIONS', 'CHANGE_SETTINGS', 'MODERATE']
        }
      ]
      const acl: AccessControlList = {
        resourceAccess,
        id: entity.id,
      }
      SynapseClient.createACL(entity.id, acl, token).then((acl: AccessControlList) => {
        console.log(`EntityForm uploading to https://www.synapse.org/#!Synapse:${entity.id}`)
        this.setState({
          userprofile,
          containerId: entity.id,
          isLoading: false
        })
      })
    }).catch((error: any) => {
      return this.onError(error)
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
            schema={this.state.formSchema}
            uiSchema={this.state.formUiSchema}
            onSubmit={this.onSubmit}
            showErrorList={true}
          />
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
