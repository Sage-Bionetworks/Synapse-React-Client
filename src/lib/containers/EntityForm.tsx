// EntityForm:
// Will generate a Form (based on your schema files).
// Gathers user input (including files)
// Will give you the Synapse ID of the FileEntity that contains the user form data.
import * as React from 'react'
import Form from 'react-jsonschema-form'
import { UserProfile } from '../utils/jsonResponses/UserProfile'
import { SynapseClient } from '../utils'
import { FileEntity } from '../utils/jsonResponses/FileEntity'
import { EntityId } from '../utils/jsonResponses/EntityId'
import { EntityLookupRequest } from '../utils/jsonResponses/EntityLookupRequest'

export type EntityFormProps = {
  // Provide the parent container (folder/project), that should contain a folder (named <user_id>) that this user can write to.
  parentContainerId: string
  formSchemaEntityId: string // Synapse file that contains the form schema.
  formUiSchemaEntityId: string // Synapse file that contains the form ui schema.
  initFormData: boolean // If true, it indicates that you’d like to download and pre-fill the form with the user's previous response.
  token?: string // user's session token
  synIdCallback: (synId: string) => void // callback.  Once the form output has been saved to a FileEntity, will send synID back
}
type EntityFormState = {
  error?: any
  isLoading?: boolean
  successfullyUploaded: boolean
  containerId?: string
  userprofile?: UserProfile
  currentFileEntity?: FileEntity // file holding user form data
  formData?: any // form data that prepopulates the form
  formSchema?: any // schema that drives the form
  formUiSchema?: any // ui schema that directs how to render the form elements
}

export default class EntityForm extends React.Component<
  EntityFormProps,
  EntityFormState
> {
  formRef: any

  constructor(props: EntityFormProps) {
    super(props)
    this.formRef = React.createRef()
    this.state = {
      isLoading: true,
      successfullyUploaded: false,
    }
  }

  componentDidMount() {
    this.refresh()
  }

  componentDidUpdate(prevProps: any) {
    const shouldUpdate = this.props.token !== prevProps.token
    if (shouldUpdate) {
      this.refresh()
    }
  }

  submitForm = () => {
    this.formRef.current.submit()
  }

  refresh = () => {
    if (this.props.token) {
      const promises = [
        SynapseClient.getUserProfile(this.props.token),
        SynapseClient.getEntity(
          this.props.token,
          this.props.formSchemaEntityId,
        ),
        SynapseClient.getEntity(
          this.props.token,
          this.props.formUiSchemaEntityId,
        ),
      ] as Promise<any>[]
      Promise.all(promises)
        .then(values => {
          const userprofile: UserProfile = values[0]
          this.getTargetContainer(userprofile, this.props.token!).then(
            (targetContainerId: string) => {
              const formSchemaFileEntity: FileEntity = values[1]
              const formUiSchemaFileEntity: FileEntity = values[2]
              this.getSchemaFileContent(
                targetContainerId,
                formSchemaFileEntity,
                formUiSchemaFileEntity,
              )
            },
          )
        })
        .catch(error => {
          this.onError(error)
        })
    }
  }

  getSchemaFileContent = (
    targetFolderId: string,
    formSchemaFileEntity: FileEntity,
    formUiSchemaFileEntity: FileEntity,
  ) => {
    const promises = [
      SynapseClient.getFileEntityContent(
        this.props.token!,
        formSchemaFileEntity,
      ),
      SynapseClient.getFileEntityContent(
        this.props.token!,
        formUiSchemaFileEntity,
      ),
    ]
    Promise.all(promises)
      .then(values => {
        const formSchemaContent = JSON.parse(values[0])
        const formUiSchemaContent = JSON.parse(values[1])
        this.getExistingFileData(
          targetFolderId,
          formSchemaContent,
          formUiSchemaContent,
        )
      })
      .catch(error => {
        this.onError(error)
      })
  }

  getExistingFileData = (
    targetFolderId: string,
    formSchemaContent: any,
    formUiSchemaContent: any,
  ) => {
    // if data already exists, save a reference to the existing entity and prefill the form
    const fileName = `${formSchemaContent.title}.json`
    const entityLookupRequest = {
      entityName: fileName,
      parentId: targetFolderId,
    }
    let formData: any
    let currentFileEntity: FileEntity
    SynapseClient.lookupChildEntity(entityLookupRequest, this.props.token)
      .then((entityId: EntityId) => {
        // ok, found the existing file
        return SynapseClient.getEntity<FileEntity>(
          this.props.token,
          entityId.id,
        ).then(entity => {
          currentFileEntity = entity
          if (this.props.initFormData) {
            return SynapseClient.getFileEntityContent(
              this.props.token!,
              currentFileEntity,
            ).then(existingFileData => {
              formData = JSON.parse(existingFileData)
            })
          }
          // else we're done
          return Promise.resolve()
        })
      })
      .finally(() => {
        this.setState({
          formData,
          currentFileEntity,
          formSchema: formSchemaContent,
          formUiSchema: formUiSchemaContent,
        })
      })
  }

  getTargetContainer = async (userprofile: UserProfile, token: string) => {
    const entityLookupRequest: EntityLookupRequest = {
      entityName: userprofile.ownerId,
      parentId: this.props.parentContainerId,
    }
    try {
      const entityId = await SynapseClient.lookupChildEntity(
        entityLookupRequest,
        token,
      )
      // ok, found an entity of the same name.
      console.log(
        `EntityForm uploading to https://www.synapse.org/#!Synapse:${entityId.id}`,
      )
      this.setState({
        userprofile,
        containerId: entityId.id,
        isLoading: false,
      })
      return entityId.id
    } catch (error) {
      if (error.statusCode === 404) {
        return this.onError(
          new Error(
            'Your folder has not yet been set up, please retry in a few minutes.',
          ),
        )
      }
      // else
      return this.onError(error)
    }
  }

  finishedProcessing = () => {
    this.setState({
      isLoading: false,
      successfullyUploaded: true,
    })
  }

  onError = (error: any) => {
    this.setState({
      error,
      isLoading: false,
      successfullyUploaded: false,
    })
  }

  onSubmit = ({ formData }: any) => {
    this.setState({
      isLoading: true,
      successfullyUploaded: false,
    })

    const submissionFileAndForm: Blob = new Blob([JSON.stringify(formData)], {
      type: 'text/json',
    })
    this.createEntityFile(submissionFileAndForm)
  }

  createEntityFile = (fileContentsBlob: Blob) => {
    const fileName = `${this.state.formSchema.title}.json`
    SynapseClient.uploadFile(this.props.token, fileName, fileContentsBlob)
      .then((fileUploadComplete: any) => {
        // do we need to create a new file entity, or update an existing file entity?
        const newFileHandleId = fileUploadComplete.fileHandleId
        if (this.state.currentFileEntity) {
          this.state.currentFileEntity.dataFileHandleId = newFileHandleId
          return SynapseClient.updateEntity(
            this.state.currentFileEntity,
            this.props.token,
          )
        }
        // else, it's a new file entity
        const newFileEntity: FileEntity = {
          parentId: this.state.containerId!,
          name: fileName,
          concreteType: 'org.sagebionetworks.repo.model.FileEntity',
          dataFileHandleId: newFileHandleId,
        }
        return SynapseClient.createEntity(newFileEntity, this.props.token)
      })
      .then((fileEntity: FileEntity) => {
        // by this point we've either found and updated the existing file entity, or created a new one.
        this.finishedProcessing()
        if (this.props.synIdCallback) {
          this.props.synIdCallback(fileEntity.id!)
        }
      })
      .catch((error: any) => {
        this.onError(error)
      })
  }

  render() {
    return (
      <div>
        {this.state.error && (
          <div className="panel panel-danger errors">
            <div className="panel-heading">
              <h3 className="panel-title">Error</h3>
            </div>
            <ul className="list-group">
              <li className="list-group-item text-danger">
                {this.state.error.name} {this.state.error.reason}{' '}
                {this.state.error.message}
              </li>
            </ul>
          </div>
        )}
        {this.props.token &&
          !this.state.isLoading &&
          !this.state.successfullyUploaded &&
          this.state.formSchema &&
          this.state.formUiSchema &&
          !this.state.error && (
            <Form
              formData={this.state.formData}
              schema={this.state.formSchema}
              uiSchema={this.state.formUiSchema}
              onSubmit={this.onSubmit}
              showErrorList={true}
              ref={this.formRef}
            >
              <div style={{ display: 'none' }}>
                <button type="submit" className="btn btn-info">
                  Submit
                </button>
              </div>
            </Form>
          )}
        {!this.state.error && this.props.token && this.state.isLoading && (
          <React.Fragment>
            <span>Saving&hellip;</span>
            <span style={{ marginLeft: '2px' }} className={'spinner'} />
          </React.Fragment>
        )}
      </div>
    )
  }
}
