import * as React from 'react'

import { SynapseClient } from '../../utils'
import { FileEntity } from '../../utils/jsonResponses/FileEntity'
import { UiSchema } from 'react-jsonschema-form'
import { StatusEnum } from './types'
import Alert from 'react-bootstrap/Alert'
import DrugUploadForm from './DrugUploadForm'
import { FormData } from '../../utils/jsonResponses/Forms'
import { SRC_SIGN_IN_CLASS } from '../../utils/SynapseConstants';
import _ from 'lodash'

export type UploadToolSearchParams = {
  formDataId?: string //formDataId for user data form data
  dataFileHandleId?: string //fileHandle to get userData
  formGroupId: string
}

export type DrugUploadToolProps = {
  // Provide the parent container (folder/project), that should contain a folder (named <user_id>) that this user can write to.
  formSchemaEntityId: string // Synapse file that contains the form schema.
  formUiSchemaEntityId: string // Synapse file that contains the form ui schema.
  formNavSchemaEntityId: string //Synapse file that consists screen nav schema
  token?: string // user's session token
  searchParams?: UploadToolSearchParams
  isWizardMode?: boolean // if we are displaying the form in wizard mode
  fileNamePath: string // path in data to specify the name of saved file
  formTitle: string //for UI customization
  formClass?: string // to support potential theaming
}

type DrugUploadToolState = {
  notification?: Notification
  isLoading?: boolean
  formDataId?: string; // file holding user form data
  formData?: any // form data that prepopulates the form
  formSchema?: any // schema that drives the form
  formUiSchema?: UiSchema // ui schema that directs how to render the form elements
  formNavSchema?: any // drives the steps left panel

  status?: StatusEnum
}

type Notification = {
  name?: string
  message?: string
  reason?: string
  type: StatusEnum
}

class DrugUploadTool extends React.Component<
  DrugUploadToolProps,
  DrugUploadToolState
> {
  constructor(props: DrugUploadToolProps) {
    super(props)
    this.state = {
      isLoading: true,
      formDataId: _.get(this.props, 'searchParams.formDataId')
    }
  }

  async componentDidMount() {
    await this.getData(this.props.token)
  }

  async componentDidUpdate(prevProps: DrugUploadToolProps) {
    const shouldUpdate = this.props.token !== prevProps.token
    if (shouldUpdate) {
      await this.getData(this.props.token)
    }
  }

  //gets a file entity with content
  getFileEntityData = async (
    token: string,
    entityId: string,
  ): Promise<{version?: number, content: JSON}> => {
    const entity: FileEntity = await SynapseClient.getEntity(token, entityId)
    const entityContent = await SynapseClient.getFileEntityContent(
      token,
      entity,
    )
    return { version: entity.versionNumber, content: JSON.parse(entityContent)}
  }

  getData = async (token?: string): Promise<void> => {
    if (!token) {
      return
    }
    try {
      let formData = {}
      //let currentFileEntity: FileEntity;

      const promises = [
        this.getFileEntityData(token, this.props.formSchemaEntityId),
        this.getFileEntityData(token, this.props.formUiSchemaEntityId),
        this.getFileEntityData(token, this.props.formNavSchemaEntityId),
      ]
      const { searchParams } = this.props

      const configData = await Promise.all(promises)

      const dataFileHandleId = searchParams && searchParams.dataFileHandleId
      if (dataFileHandleId) {
        const fileData = await SynapseClient.getFileHandleContentFromID(
          dataFileHandleId,
          token,
        )
        formData = JSON.parse(fileData)
      } else {
        //if we are creating a new file - store the versions
        formData = {
          metadata: {
            formSchemaVersion: configData[0].version,
            uiSchemaVersion: configData[1].version,
            navSchemaVersion: configData[2].version,
          }
        }
      }
      this.setState({
        // currentFileEntity,
        formData: formData,
        formSchema: configData[0].content,
        formUiSchema: configData[1].content,
        formNavSchema: configData[2].content,
        isLoading: false,
      })
    } catch (error) {
      this.onError(error)
    } finally {
      this.setState({
        isLoading: false,
      })
    }
  }

  finishedProcessing = (status: StatusEnum, message?: string) => {
    this.setState({
      isLoading: false,
      notification: { type: status, message: message },
      status: status,
    })
    //this will show the update message for 7 seconds
    setTimeout(() => {
      this.setState({ status: undefined })
    }, 7000)
  }

  onError = (error: any) => {
    this.setState({
      notification: {
        type: StatusEnum.ERROR,
        message: error.reason,
        name: error.name,
      },
      status: StatusEnum.ERROR,
      isLoading: false,
    })
  }

  submitForm = async (formData: any) => {
    await this.saveToFile(formData)

    this.setState({
      isLoading: true,
    })

    await SynapseClient.submitFormData(this.state.formDataId!, this.props.token)
    this.finishedProcessing(StatusEnum.SUBMIT_SUCCESS, 'File Submitted')
  }

  createOrUpdateFormDataFile = async (
    fileName: string,
    fileContentsBlob: Blob,
  ): Promise<FormData> => {
    fileName = `${fileName}.json`
    const fileUploadComplete = await SynapseClient.uploadFile(
      this.props.token,
      fileName,
      fileContentsBlob,
    )
    const { searchParams } = this.props
    const formGroupId = searchParams && searchParams.formGroupId
    if (!formGroupId) {
      console.error('formGroupId must be defined')
      throw 'formGroupId must be defined'
    }
    try {
      // do we need to create a new file entity, or update an existing file entity?
      const newFileHandleId = fileUploadComplete.fileHandleId

      let formData
      if (this.state.formDataId) {
        formData = await SynapseClient.updateFormData(
          this.state.formDataId,
          fileName,
          newFileHandleId,
          this.props.token!,
        )
      } else {
        formData = await SynapseClient.createFormData(
          formGroupId,
          fileName,
          newFileHandleId,
          this.props.token!,
        )
      }

      return formData
    } catch (error) {
      this.onError(error)
      throw error
    }
  }

  saveToFile = async (data: any) => {
    const fileName = _.get(data, this.props.fileNamePath)
    this.setState({
      status: StatusEnum.PROGRESS,
      notification: { type: StatusEnum.PROGRESS, message: 'Progress' },
      isLoading: true,
    })

    if (!fileName) {
      this.onError({ reason: 'Please Provide the File Name' })
      return
    }

    try {
      const fileContent: Blob = new Blob([JSON.stringify(data)], {
        type: 'text/json',
      })

      const formData = await this.createOrUpdateFormDataFile(
        fileName,
        fileContent,
      )
      this.setState({
        formDataId: formData.formDataId,
      })

      this.finishedProcessing(StatusEnum.SAVE_SUCCESS, 'File Saved')
    } catch (error) {
      this.onError(error)
    }
  }


  isReadyToDisplayForm = (state: DrugUploadToolState): boolean => {
    return (
      this.state.status !== StatusEnum.ERROR_CRITICAL &&
      state.formSchema &&
      state.formUiSchema &&
      state.formNavSchema &&
      state.formData
    )
  }

  renderLoader = (
    state: DrugUploadToolState,
    props: DrugUploadToolProps,
  ): JSX.Element => {
    if (
      !_.includes(
        [StatusEnum.ERROR, StatusEnum.ERROR_CRITICAL],
        state.status,
      ) &&
      props.token &&
      state.isLoading
    ) {
      return (
        <div className="text-center">
          <span className={'spinner'} />
        </div>
      )
    } else {
      return <></>
    }
  }

  renderNotification = (notification?: Notification): JSX.Element => {
    if (!notification) {
      return <></>
    }
    if (notification.type === StatusEnum.ERROR) {
      return (
        <Alert
          variant="danger"
          onClose={() => this.setState({ status: undefined })}
          dismissible
        >
          <Alert.Heading>Error</Alert.Heading>

          <p>{notification.message}</p>
        </Alert>
      )
    }

    return <></>
  }

  renderUnauthenticatedView = (token: string | undefined) => {
    if (token) {
      return <></>
    } else {
      return (
        <div className="panel padding-full unauthenticated text-center">
          Please <button className={`SRC-standard-button-shape SRC-light-button SRC-sign-in-button ${SRC_SIGN_IN_CLASS}`}> sign in </button> to initiate or continue your submission{' '}
        </div>
      )
    }
  }

  render() {
    return (
      <div className={`SRC-ReactJsonForm ${this.props.formClass}`}>
        {this.renderNotification(this.state.notification)}
        {this.renderLoader(this.state, this.props)}
        {this.renderUnauthenticatedView(this.props.token)}

        {this.isReadyToDisplayForm(this.state) && (
          <div>
            <DrugUploadForm
              schema={this.state.formSchema}
              uiSchema={this.state.formUiSchema!}
              formData={this.state.formData}
              navSchema={this.state.formNavSchema}
              isWizardMode={this.props.isWizardMode}
              formTitle={this.props.formTitle}
              formClass={this.props.formClass}
              callbackStatus={this.state.status}
              onSave={(data: any) => this.saveToFile(data)}
              onSubmit={(data: any) => this.submitForm(data)}
            ></DrugUploadForm>
          </div>
        )}
      </div>
    )
  }
}

export default DrugUploadTool
