// Alina TODO:
//  - pagination and scroll
// - submission

import './DrugUploadTool.scss'

import * as React from 'react'

import { Link } from 'react-router-dom'

import { Entity, } from '../../utils/jsonResponses/Entity'
import { EntityLookupRequest } from '../../utils/jsonResponses/EntityLookupRequest'
import { UserProfile } from '../../utils/jsonResponses/UserProfile'
import { SynapseClient } from '../../utils'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WarningModal from './WarningModal'
import Login from '../Login'

import _ from 'lodash';

type UserData = {
  fileList: Entity[];
  existingData: any;
  dataFolderId: string;
}

export type UserFileGridProps = {
  token?: string;
  parentContainerId: string; //projectId
  pathpart: string;
}

type UserFileGridState = {
  token?: string;
  userprofile?: any;
  dataFolderId?: string,
  fileList: Entity[]
  isLoading: boolean;
  modalContext?: { 'action': Function, 'arguments': any[] }
}


export default class UserFileGrid extends React.Component<UserFileGridProps, UserFileGridState> {
  modalTitle='Trash Submission?' 
  modalCopy=<><p>This submission is currently incomplete and has not been submitted. If you trash this submission, you won't be able to recover the data.</p>
  <p>Are you sure you want to trash this submission?' </p></>
  
  
  constructor(props: UserFileGridProps) {
    super(props)
    this.state = {
      isLoading: true,
      token: this.props.token,
      fileList: []
    }
  }

  componentDidMount(): Promise<any> {
    // Note:  All portals should do this once on the initial app load.
    // This looks for the session token cookie (HttpOnly, unable to directly access), and initialize the session if it does exists.
    SynapseClient.detectSSOCode()
    return SynapseClient.getSessionTokenFromCookie()
      .then((sessionToken: any) => { return this.refresh(sessionToken) })
      .catch((error: any) => {
        console.error(error)
      })
  }


  refresh = (token?: string): Promise<any> => {
    this.setState({ token })
    if (token) {
      return this.getUserFileListing(token!, this.props.parentContainerId).catch((error) => {
        this.onError(error)
      })

    } else {
      return Promise.reject()
    }
  }



  private getUserFileListing = async (token: string, parentContainerId: string): Promise<UserData> => {
    this.setState({ isLoading: true });
    const result: UserData = {
      fileList: [],
      existingData: {},
      dataFolderId: ''
    }

    // get user profile
    const userprofile = await SynapseClient.getUserProfile(token)

    //find directory named with profileId
    const entityLookupRequest: EntityLookupRequest = {
      entityName: userprofile.ownerId,
      parentId: parentContainerId
    }
    try {
      const entity = await SynapseClient.lookupChildEntity(entityLookupRequest, token)

      //if found - that's the folder id
      result.dataFolderId = entity.id
    }

    catch (error) {
      if (error.statusCode === 404) {
        // if doesn't exist - create
        const entityId = await this.createDataFolder(userprofile, token)
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
        userprofile,
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
  createDataFolder = async (userprofile: UserProfile, token: string): Promise<string | undefined> => {

    const newFolder: Entity = {
      parentId: this.props.parentContainerId,
      name: userprofile.ownerId,
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

  /* ------------------------------------------   rendering fns  ------------------------------------------------*/
  /*  login control if user is not logged in */
  renderLogin = (stateToken: string = ''): JSX.Element => {
    let token: string | undefined = ''
    const loggedInState: JSX.Element = <div className='bg-success text-center' role='alert'>
      You are logged in.&nbsp;
        <button onClick={SynapseClient.signOut}><span aria-hidden='true'>Sign out</span></button>
    </div>

    if (!_.isEmpty(stateToken)) {
      return loggedInState;
    } else {
      return (
        <Login
          token={SynapseClient.IS_DEV_ENV ? token : stateToken}
          theme={'light'}
          icon={true}
        />)
    }
  }

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
    if (_.isEmpty(fileList)) {
      return <h5 className='text-center no-submissions padding-full'>You don't have submissions in progress [COPY!]</h5>
    }
    return (<table className='table file-table' >
      <thead>
        <tr>
          <th>Submission Name</th>
          <th>Edited On</th>
          <th>Submitted On</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
        {fileList.map((entity, i: number) => {
          return (<tr className='test' key={i}>
            <td><Link className='nav-green' to={`/${pathpart}/${dataFolderId}/${entity.id}/`}>{entity.name}</Link></td>
            <td>{entity.modifiedOn}</td>
            <td>?</td>
            <td><button className='btn' aria-label="delete" onClick={() => this.setState({ modalContext: { action: this.deleteFile, arguments: [this.state.token!, entity.id!] } })}><FontAwesomeIcon icon={faTrash} aria-hidden="true" ></FontAwesomeIcon></button></td>
          </tr>)
        })}
      </tbody>
    </table>
    )
  }

  render() {

    return (<div className='container'>
      {this.renderLoading(this.state.token, this.state.isLoading)}
      {this.renderLogin(this.state.token)}
      {!(this.state.isLoading) &&
        <div>
          <h3>Your Submissions</h3>
          <div className='panel panel-default padding-full'>
            {this.renderFileTable(this.state.fileList, this.props.pathpart, this.state.dataFolderId)}
            <div className='text-center'>
              <a className='btn btn-success' href={`/${this.props.pathpart}/${this.state.dataFolderId}`}>Add new Compound</a></div>
          </div></div>}
      {this.state.modalContext &&
        <WarningModal show={true} title={this.modalTitle} copy={this.modalCopy} callbackArgs={this.state.modalContext.arguments} onCancel={() => this.setState({ modalContext: undefined })} onOK={(x: string, y: string) => this.deleteFile(x, y)}></WarningModal>}

    </div>)

  }
}