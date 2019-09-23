// Alina TODO:
//  - pagination and scroll
// - submission

import './DrugUploadTool.scss'

import * as React from 'react'

import { Entity, } from '../../utils/jsonResponses/Entity'
import { EntityLookupRequest } from '../../utils/jsonResponses/EntityLookupRequest'
import { UserProfile } from '../../utils/jsonResponses/UserProfile'
import { SynapseClient } from '../../utils'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WarningModal from './WarningModal'

import moment from 'moment';

type UserData = {
  fileList: Entity[];
  existingData: any;
  dataFolderId: string;
}

export type UserFileGridProps = {
  token?: string;
  parentContainerId: string; //projectId
  pathpart: string;
  formClass?:string;
  itemNoun: string;
}

type UserFileGridState = {
  userProfile?: any;
  dataFolderId?: string,
  fileList: Entity[]
  isLoading: boolean;
  modalContext?: { 'action': Function, 'arguments': any[] }
}


export default class UserFileGrid extends React.Component<UserFileGridProps, UserFileGridState> {
  modalTitle = 'Trash Submission?'
  modalCopy = <><p>This submission is currently incomplete and has not been submitted. If you trash this submission, you won't be able to recover the data.</p>
    <p>Are you sure you want to trash this submission?' </p></>

  constructor(props: UserFileGridProps) {
    super(props)
    this.state = {
      isLoading: true,
      fileList: []
    }
  }

  async componentDidMount(){
    await this.refresh(this.props.token)
  }

  async componentDidUpdate(prevProps: UserFileGridProps) {
    const shouldUpdate = this.props.token !== prevProps.token
    if (shouldUpdate) {
      await this.refresh(this.props.token)
    }
  }

  async refresh (token?: string) {
    if (token) {
      await this.getUserFileListing(token, this.props.parentContainerId).catch((error) => {
        this.onError(error)
      })
    }
  }



  private getUserFileListing = async (token: string, parentContainerId: string): Promise<UserData> => {
    this.setState({ 
      isLoading: true });
    const result: UserData = {
      fileList: [],
      existingData: {},
      dataFolderId: ''
    }
    let userProfile
    try {
      // get user profile
      userProfile = await SynapseClient.getUserProfile(token)
      //find directory named with profileId
      const entityLookupRequest: EntityLookupRequest = {
        entityName: userProfile.ownerId,
        parentId: parentContainerId
      }
      const entity = await SynapseClient.lookupChildEntity(entityLookupRequest, token)
      //if found - that's the folder id
      result.dataFolderId = entity.id
    }

    catch (error) {
      if (error.statusCode === 404 && userProfile) {
        // if doesn't exist - create
        const entityId = await this.createDataFolder(userProfile, token)
        if (!entityId) {
          throw ('no folder')
        }
        result.dataFolderId = entityId;
      } else {
        this.onError(error)
        return Promise.reject(error);
      }
    }
    finally {
      // get the file listing
      result.fileList = await this.getFileListingInFolder(token, result.dataFolderId)
      this.setState({
        userProfile,
        dataFolderId: result.dataFolderId,
        fileList: result.fileList || [],
        isLoading: false
      })
      return result;
    }
  }
  onError = (args: any) => {
    console.log(args)
  }


  // creates data folder for user
  createDataFolder = async (userProfile: UserProfile, token: string): Promise<string | undefined> => {
    const newFolder: Entity = {
      parentId: this.props.parentContainerId,
      name: userProfile.ownerId,
      concreteType: 'org.sagebionetworks.repo.model.Folder',
    }
    try {
      const folder: Entity = await SynapseClient.createEntity(newFolder, token);
      return folder.id
    }
    catch (error) {
      this.onError(error)
      throw (error)
    }
  }

  getFileListingInFolder = async (token: string, targetFolderId: string): Promise<Entity[]> => {
    const request = {
      includeTypes: ['file'],
      parentId: targetFolderId,
      sortBy: 'NAME',
      sortDirection: 'ASC'
    }
    try {
      const data = await SynapseClient.getEntityChildren(request, token);
      return data.page;
    }
    catch (error) {
      this.onError(error)
      return [];
    }
  }

  deleteFile = async (token: string, entityId: string): Promise<any> => {
    this.setState({
      isLoading: true, modalContext: undefined
    })
    try {
      await SynapseClient.deleteEntity(token, entityId);
      const fileList = await this.getFileListingInFolder(token, this.state.dataFolderId!)
      this.setState({
        fileList
      })
    }
    catch (error) {
      this.onError(error)
      return [];
    }
    finally {
      this.setState({
        isLoading: false
      })
    }
  }

  setModalConfirmationState = (token: string,  entityId: string) => {
    this.setState({
      modalContext: 
      { 
        action: this.deleteFile,
        arguments: [token, entityId] 
      } 
    })
  }
  /* ------------------------------------------   rendering fns  ------------------------------------------------*/

  renderLoading = (token: string | undefined, isLoading: boolean): JSX.Element => {
    if (
      token &&
      isLoading) {
      return (<div className='text-center'>
        <span>Loading&hellip;</span>
        <span style={{ marginLeft: '2px' }} className={'spinner'} />
      </div>)
    } else {
      return <></>
    }
  }

  renderFileTable = (fileList: Entity[], pathpart: string, dataFolderId?: string): JSX.Element => {
    if (!dataFolderId) {
      this.onError('Data Folder ID is undefined')
      return <></>
    }
    if (fileList.length === 0) {
      return <h5 className='text-center no-submissions padding-full'>You don't have submissions in progress [COPY!]</h5>
    }
    return (<table className='table file-table' >
      <thead>
        <tr>
          <th>Submission Name</th>
          <th>Edited On</th>
      
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {fileList.map((entity, key) => {
          return (<tr key={entity.id!+key}>
            <td><a href={`${pathpart}?formGroupId=${dataFolderId}&formDataId=${entity.id}`}>{entity.name}</a></td>
            <td>{moment(entity.modifiedOn).calendar()}</td>
           
            <td><button className='btn' aria-label="delete" onClick={() => this.setModalConfirmationState(this.props.token!, entity.id!)}><FontAwesomeIcon icon={faTrash} aria-hidden="true" ></FontAwesomeIcon></button></td>
          </tr>)
        })}
      </tbody>
    </table>
    )
  }

  render() {
    return (<div className={`container SRC-ReactJsonForm ${this.props.formClass}`}>
      {this.renderLoading(this.props.token, this.state.isLoading)}

      {!(this.state.isLoading) &&
        <div>
          <h3>Your Submissions</h3>
          <div className='panel panel-default padding-full'>
            {this.renderFileTable(this.state.fileList, this.props.pathpart, this.state.dataFolderId)}
            <div className='text-center'>
              <a className='btn btn-large' href={`${this.props.pathpart}?formGroupId=${this.state.dataFolderId}`}>Add new {this.props.itemNoun}</a></div>
          </div>
        </div>
        }
      {this.state.modalContext &&
        <WarningModal
          show={typeof this.state.modalContext !== 'undefined' }
          title={this.modalTitle}
          copy={this.modalCopy}
          callbackArgs={this.state.modalContext.arguments}
          onCancel={() => this.setState({ modalContext: undefined })}
          onOK={(x: string, y: string) => this.deleteFile(x, y)}/>
      }
    </div>)

  }
}