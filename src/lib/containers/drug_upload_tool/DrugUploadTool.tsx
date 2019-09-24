import * as React from 'react';

import { SynapseClient } from '../../utils';
import { FileEntity } from '../../utils/jsonResponses/FileEntity';
import { Entity } from '../../utils/jsonResponses/Entity';
import { UiSchema } from 'react-jsonschema-form';
import { StatusEnum } from './types';
import Alert from 'react-bootstrap/Alert';
import DrugUploadForm from './DrugUploadForm';
import _ from 'lodash';

export type UploadToolSearchParams = {
  formDataId?: string; //entityId fo the file that contains form data
  formGroupId: string;
}

export type DrugUploadToolProps = {
  // Provide the parent container (folder/project), that should contain a folder (named <user_id>) that this user can write to.
  parentContainerId: string; // ProjectId
  formSchemaEntityId: string; // Synapse file that contains the form schema.
  formUiSchemaEntityId: string; // Synapse file that contains the form ui schema.
  formNavSchemaEntityId: string; //Synapse file that consists screen nav schema
  token?: string; // user's session token
  searchParams?: UploadToolSearchParams
  isWizardMode?: boolean; // if we are displaying the form in wizard mode
  fileNamePath: string; // path in data to specify the name of saved file
  formTitle: string; //for UI customization
  formClass?: string; // to support potential theaming
};

type DrugUploadToolState = {
  notification?: Notification;
  isLoading?: boolean;
  currentFileEntity?: FileEntity; // file holding user form data
  formData?: any; // form data that prepopulates the form
  formSchema?: any; // schema that drives the form
  formUiSchema?: UiSchema; // ui schema that directs how to render the form elements
  formNavSchema?: any; // drives the steps left panel

  status?: StatusEnum;
};

type Notification = {
  name?: string;
  message?: string;
  reason?: string;
  type: StatusEnum;
};

type FileEntityWithData = {
  fileEntity: FileEntity;
  data: JSON;
};

class DrugUploadTool extends React.Component<
  DrugUploadToolProps,
  DrugUploadToolState
> {
  constructor(props: DrugUploadToolProps) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  async componentDidMount() {
    await this.getData(this.props.token);
  }

  async componentDidUpdate(prevProps: DrugUploadToolProps) {
    const shouldUpdate = this.props.token !== prevProps.token;
    if (shouldUpdate) {
      await this.getData(this.props.token);
    }
  }

  //gets a file entity with content
  getFileEntityWithData = async (
    token: string,
    entityId: string
  ): Promise<FileEntityWithData> => {
    const entity: FileEntity = await SynapseClient.getEntity(token, entityId);
    const entityContent = await SynapseClient.getFileEntityContent(
      token,
      entity
    );
    const result: FileEntityWithData = {
      fileEntity: entity,
      data: JSON.parse(entityContent)
    };
    return result;
  };

  getData = async (token?: string): Promise<void> => {
    if (token) {
      let formData = {};
      let currentFileEntity: FileEntity;
      let formSchema = {};
      let formUiSchema = {};
      let formNavSchema = {};
      const promises = [
        this.getFileEntityWithData(token, this.props.formSchemaEntityId),
        this.getFileEntityWithData(token, this.props.formUiSchemaEntityId),
        this.getFileEntityWithData(token, this.props.formNavSchemaEntityId)
      ];
      const { searchParams } = this.props
      const formDataId = searchParams && searchParams.formDataId
      // if there is saved data
      if (formDataId) {
        promises.push(
          this.getFileEntityWithData(token, formDataId)
        );
      }
      return Promise.all(promises)
        .then(values => {
          formSchema = values[0].data;
          formUiSchema = values[1].data;
          formNavSchema = values[2].data;
          if (formDataId) {
            formData = values[3].data;
            currentFileEntity = values[3].fileEntity;
          }
        })
        .catch(error => {
          this.onError(error);
        })
        .finally(() => {
          this.setState({
            formData,
            currentFileEntity,
            formSchema,
            formUiSchema,
            formNavSchema,
            isLoading: false
          });
        });
    }
  };

  finishedProcessing = (message?: string) => {
    this.setState({
      isLoading: false,
      notification: { type: StatusEnum.SUCCESS, message: message },
      status: StatusEnum.SUCCESS
    });
    setTimeout(() => {
      this.setState({ status: undefined });
    }, 5000);
  };

  onError = (error: any) => {
    this.setState({
      notification: {
        type: StatusEnum.ERROR,
        message: error.reason,
        name: error.name
      },
      status: StatusEnum.ERROR,
      isLoading: false
    });
  };

  /* alina TODO! This will change
  onSubmit = async ({ formData }: any) => {
    console.log('submit works!');
    this.setState({
      isLoading: true,
   
    });

    const submissionFileAndForm: Blob = new Blob([JSON.stringify(formData)], {
      type: 'text/json'
    });
    await this.createEntityFile('some name', submissionFileAndForm);

    this.finishedProcessing('File Saved');
  };*/

  createEntityFile = async (
    fileName: string,
    fileContentsBlob: Blob
  ): Promise<Entity> => {
    let fileEntity: Entity;
    fileName = `${fileName}.json`;
    const fileUploadComplete = await SynapseClient.uploadFile(
      this.props.token,
      fileName,
      fileContentsBlob
    );
    const { searchParams } = this.props
    const formGroupId = searchParams && searchParams.formGroupId
    if (!formGroupId) {
      console.error('formGroupId must be defined')
    }

    try {
      // do we need to create a new file entity, or update an existing file entity?
      const newFileHandleId = fileUploadComplete.fileHandleId;
      if (this.state.currentFileEntity) {
        this.state.currentFileEntity.dataFileHandleId = newFileHandleId;

        fileEntity = await SynapseClient.updateEntity(
          this.state.currentFileEntity,
          this.props.token
        );
        return fileEntity;
      }
      // else, it's a new file entity
      const newFileEntity: FileEntity = {
        parentId: formGroupId!,
        name: fileName,
        concreteType: 'org.sagebionetworks.repo.model.FileEntity',
        dataFileHandleId: newFileHandleId
      };

      fileEntity = await SynapseClient.createEntity(
        newFileEntity,
        this.props.token
      );
      return fileEntity;
    } catch (error) {
      this.onError(error);
      throw error;
    }
  };

  saveToFile = async (data: any) => {
    const fileName = _.get(data, this.props.fileNamePath);
    this.setState({
      status: StatusEnum.PROGRESS,
      notification: { type: StatusEnum.PROGRESS, message: 'Progress' },
      isLoading: true
    });

    if (!fileName) {
      this.onError({ reason: 'Please Provide the File Name' });
      return;
    }

    try {
      const fileContent: Blob = new Blob([JSON.stringify(data)], {
        type: 'text/json'
      });

      const fileEntity = await this.createEntityFile(fileName, fileContent);
      const dataFile = await this.getFileEntityWithData(
        this.props.token!,
        fileEntity.id!
      );
      const formData = dataFile.data;
      const currentFileEntity = dataFile.fileEntity;
      this.setState({
        formData,
        currentFileEntity
      });

      this.finishedProcessing('File Saved');
    } catch (error) {
      this.onError(error);
    }
  };

  // ALINA TODO: this is not real implementation
  submitForm = (data: any) => {
    alert(data);
    console.log('submitted');
  };

  isReadyToDisplayForm = (state: DrugUploadToolState): boolean => {
    return (
      this.state.status !== StatusEnum.ERROR_CRITICAL &&
      state.formSchema &&
      state.formUiSchema &&
      state.formNavSchema &&
      state.formData
    );
  };

  renderLoader = (
    state: DrugUploadToolState,
    props: DrugUploadToolProps
  ): JSX.Element => {
    if (
      !_.includes(
        [StatusEnum.ERROR, StatusEnum.ERROR_CRITICAL],
        state.status
      ) &&
      props.token &&
      state.isLoading
    ) {
      return (
        <div className="text-center">
          <span className={'spinner'} />
        </div>
      );
    } else {
      return <></>;
    }
  };

  renderNotification = (notification?: Notification): JSX.Element => {
    if (!notification) {
      return <></>;
    }
    switch (notification.type) {
      case StatusEnum.ERROR: {
        return (
          <Alert
            variant="danger"
            onClose={() => this.setState({ status: undefined })}
            dismissible
          >
            <Alert.Heading>Error</Alert.Heading>

            <p>{notification.message}</p>
          </Alert>
        );
      }
      case StatusEnum.PROGRESS: {
        return (
          <div className="bg-warning text-center" role="alert">
            In Progress...
          </div>
        );
      }

      case StatusEnum.SUCCESS: {
        return (
          <div className="bg-success text-center" role="alert">
            {notification.message}
          </div>
        );
      }
      default: {
        return <></>;
      }
    }
  };

  renderUnauthenticatedView = (token: string | undefined) => {
    if (token) {
      return <></>
    } else {
      return (
        <div className="panel padding-full unauthenticated text-center">
          Please sign in to initiate or continue your submission{' '}
        </div>
      )
    }
  }

  render() {
    return (
      <div className={`SRC-ReactJsonForm container ${this.props.formClass}`}>
        {this.state.status && this.renderNotification(this.state.notification)}
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
              onSave={(data: any) => this.saveToFile(data)}
              onSubmit={(data: any) => this.submitForm(data)}
            ></DrugUploadForm>
          </div>
        )}
      </div>
    );
  }
}

export default DrugUploadTool;
