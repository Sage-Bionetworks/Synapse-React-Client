// Alina TODO:
//  - pagination and scroll
// - submission

import './DrugUploadTool.scss'

import * as React from 'react'

import { SynapseClient } from '../../utils'
import {
  FormData,
  ListRequest,
  StatusEnum,
  ListResponse,
} from '../../utils/jsonResponses/Forms'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WarningModal from './WarningModal'

import moment from 'moment'
import { SRC_SIGN_IN_CLASS } from '../../utils/SynapseConstants'

export type UserFileGridProps = {
  token?: string
  parentContainerId: string //projectId
  formGroupId: string
  pathpart: string
  formClass?: string
  itemNoun: string
}

type UserFileGridState = {
  userProfile?: any
  fileList: any 
  isLoading: boolean
  modalContext?: { action: Function; arguments: any[] }
}

export default class UserFileGrid extends React.Component<
  UserFileGridProps,
  UserFileGridState
> {
  modalTitle = 'Trash Submission?'
  modalCopy = (
    <>
      <p>
        This submission is currently incomplete and has not been submitted. If
        you trash this submission, you won't be able to recover the data.
      </p>
      <p>Are you sure you want to trash this submission?' </p>
    </>
  )

  constructor(props: UserFileGridProps) {
    super(props)
    this.state = {
      isLoading: true,
      fileList: [],
    }
  }

  async componentDidMount() {
    await this.refresh(this.props.token)
  }

  async componentDidUpdate(prevProps: UserFileGridProps) {
    const shouldUpdate = this.props.token !== prevProps.token
    if (shouldUpdate) {
      await this.refresh(this.props.token)
    }
  }

  async refresh(token?: string) {
    if (token) {
      await this.getUserFileListing(token,  this.props.formGroupId).catch(
        error => {
          this.onError(error)
        },
      )
    }
  }

  private getUserFileListing = async (
    token: string,
    groupId: string,
 
  ): Promise<FormData[]> => {
    this.setState({
      isLoading: true,
    })
    try {
      const request: ListRequest = {
        filterByState: [StatusEnum.WAITING_FOR_SUBMISSION],
        groupId
        // nextPageToken?: string
      }

      const list: ListResponse = await SynapseClient.listFormData(
        request,
        token,
      )
      this.setState({
        fileList: list.page || [],
      })
      return list ? list.page : []
    } catch (error) {
      this.onError(error)
      return Promise.reject(error)
      // }
    } finally {
      this.setState({
        isLoading: false,
      })
    }
  }
  onError = (args: any) => {
    console.log(args)
  }


  deleteFile = async (token: string, formDataId: string): Promise<any> => {
    this.setState({
      isLoading: true,
      modalContext: undefined,
    })
    try {
      await SynapseClient.deleteFormData(formDataId, token)
      const fileList = await this.getUserFileListing(
        token,
        this.props.formGroupId,
      )
      this.setState({
        fileList,
      })
    } catch (error) {
      this.onError(error)
      return []
    } finally {
      this.setState({
        isLoading: false,
      })
    }
  }

  setModalConfirmationState = (token: string, formDataId: string) => {
    this.setState({
      modalContext: {
        action: this.deleteFile,
        arguments: [token, formDataId],
      },
    })
  }
  /* ------------------------------------------   rendering fns  ------------------------------------------------*/

  renderLoading = (
    token: string | undefined,
    isLoading: boolean,
  ): JSX.Element => {
    if (token && isLoading) {
      return (
        <div className="text-center">
          <span>Loading&hellip;</span>
          <span style={{ marginLeft: '2px' }} className={'spinner'} />
        </div>
      )
    } else {
      return <></>
    }
  }

  renderUnauthenticatedView = (token: string | undefined) => {
    if (token) {
      return <></>
    } else {
      return (
        <div className="panel padding-full unauthenticated text-center">
          Please <button className={`SRC-standard-button-shape SRC-light-button ${SRC_SIGN_IN_CLASS} SRC-sign-in-button`}> sign in </button> to initiate or continue your submission{' '}
        </div>
      )
    }
  }

  renderFileTable = (
    fileList: FormData[],
    pathpart: string,
    formGroupId: string,
  ): JSX.Element => {
    if (!formGroupId) {
      this.onError('Form Group ID is undefined')
      return <></>
    }
    if (fileList.length === 0) {
      return (
        <h5 className="text-center no-submissions padding-full">
          You don't have submissions in progress [COPY!]
        </h5>
      )
    }
    return (
      <table className="table file-table">
        <thead>
          <tr>
            <th>Submission Name</th>
            <th>Edited On</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {fileList.map((dataFileRecord, key) => {
            return (
              <tr key={dataFileRecord.formDataId! + key}>
                <td>
                  <a
                    href={`${pathpart}?formGroupId=${formGroupId}&formDataId=${dataFileRecord.formDataId}&dataFileHandleId=${dataFileRecord.dataFileHandleId}`}
                  >
                    {dataFileRecord.name}
                  </a>
                </td>
                <td>{moment(dataFileRecord.modifiedOn).calendar()}</td>

                <td>
                  <button
                    className="btn"
                    aria-label="delete"
                    onClick={() =>
                      this.setModalConfirmationState(
                        this.props.token!,
                        dataFileRecord.formDataId!,
                      )
                    }
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      aria-hidden="true"
                    ></FontAwesomeIcon>
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }

  render() {
    return (
      <div className={`container SRC-ReactJsonForm ${this.props.formClass}`}>
        {this.renderLoading(this.props.token, this.state.isLoading)}
        {this.renderUnauthenticatedView(this.props.token)}

        {!this.state.isLoading && (
          <div>
            <h3>Your Submissions</h3>
            <div className="panel panel-default padding-full">
              {this.renderFileTable(
                this.state.fileList,
                this.props.pathpart,
                this.props.formGroupId,
              )}
              <div className="text-center">
                <a
                  className="btn btn-large"
                  href={`${this.props.pathpart}?formGroupId=${this.props.formGroupId}`}
                >
                  Add new {this.props.itemNoun}
                </a>
              </div>
            </div>
          </div>
        )}
        {this.state.modalContext && (
          <WarningModal
            show={typeof this.state.modalContext !== 'undefined'}
            title={this.modalTitle}
            copy={this.modalCopy}
            callbackArgs={this.state.modalContext.arguments}
            onCancel={() => this.setState({ modalContext: undefined })}
            onOK={(token: string, formDataId: string) =>
              this.deleteFile(token, formDataId)
            }
          />
        )}
      </div>
    )
  }
}
