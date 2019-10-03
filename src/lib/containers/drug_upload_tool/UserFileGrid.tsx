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
import { faTrash, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WarningModal from './WarningModal'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import moment from 'moment'
import { SRC_SIGN_IN_CLASS } from '../../utils/SynapseConstants'
import NoSubmissionsIcon from '../../assets/icons/json-form-tool-no-submissions.svg'

export type UserFileGridProps = {
  token?: string
  formGroupId: string
  pathpart: string
  formClass?: string
  itemNoun: string
}

type UserFileGridState = {
  inProgress: {
    fileList: FormData[]
    nextPageToken?: string
  }
  submitted: {
    fileList: FormData[]
    nextPageToken?: string
  }
  isLoading: boolean
  isShowInfoModal: boolean
  modalContext?: { action: Function; arguments: any[] }
}

export default class UserFileGrid extends React.Component<
  UserFileGridProps,
  UserFileGridState
> {
  modalTitle = 'Trash Submission?'
  listingText = {
    inProgress: {
      subhead: 'In Progress',
      noRecords: `You don't have submissions in progress`,
    },
    submitted: {
      subhead: 'Submitted',
      noRecords: `You don't have anything submitted`,
    },
  }
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
      isShowInfoModal: false,
      inProgress: {
        fileList: [],
      },
      submitted: {
        fileList: [],
      },
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
      await this.getUserFileListing(token, this.props.formGroupId).catch(
        error => {
          this.onError(error)
        },
      )
    }
  }

  getUserFileListing = async (
    token: string,
    groupId: string,
  ): Promise<{ inProgress: FormData[]; submitted: FormData[] }> => {
    this.setState({
      isLoading: true,
    })
    try {
      const requestInProgress: ListRequest = {
        filterByState: [StatusEnum.WAITING_FOR_SUBMISSION],
        groupId,
        nextPageToken: this.state.inProgress.nextPageToken,
      }
      const requestSubmitted: ListRequest = {
        filterByState: [
          StatusEnum.SUBMITTED_WAITING_FOR_REVIEW,
          StatusEnum.ACCEPTED,
          StatusEnum.REJECTED,
        ],
        groupId,
        nextPageToken: this.state.submitted.nextPageToken,
      }

      const listInProgress: ListResponse = await SynapseClient.listFormData(
        requestInProgress,
        token,
      )
      const listSubmitted: ListResponse = await SynapseClient.listFormData(
        requestSubmitted,
        token,
      )
      this.setState({
        inProgress: {
          fileList: listInProgress.page,
          nextPageToken: listInProgress.nextPageToken,
        },
        submitted: {
          fileList: listSubmitted.page,
          nextPageToken: listSubmitted.nextPageToken,
        },
      })
      return {
        inProgress: listInProgress.page || [],
        submitted: listSubmitted.page || [],
      }
    } catch (error) {
      this.onError(error)
      return Promise.reject(error)
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
      //await this.getUserFileListing(token, this.props.formGroupId)
      this.setState((prevState, props) => ({
        inProgress: {
          fileList: prevState.inProgress.fileList.filter(
            item => item.formDataId !== formDataId,
          ),
          nextPageToken: prevState.inProgress.nextPageToken,
        },
      }))
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
          Please{' '}
          <button
            className={`SRC-standard-button-shape SRC-light-button ${SRC_SIGN_IN_CLASS} SRC-sign-in-button`}
          >
            {' '}
            sign in{' '}
          </button>{' '}
          to initiate or continue your submission{' '}
        </div>
      )
    }
  }

  renderSubmissionsTable = (
    fileList: FormData[],
    pathpart: string,
    formGroupId: string,
    isInProgress: boolean,
  ): JSX.Element => {
    if (!formGroupId) {
      this.onError('Form Group ID is undefined')
      return <></>
    }
    const textSource = isInProgress
      ? this.listingText.inProgress
      : this.listingText.submitted

    const subhead = <h4>{textSource.subhead}</h4>
    const tableTitleRow = isInProgress ? (
      <tr>
        <th>Submission Name</th>
        <th>Edited On</th>
        <th></th>
        <th></th>
      </tr>
    ) : (
      <tr>
        <th>Submission Name</th>
        <th>Submitted On</th>
        <th>Status</th>
        <th></th>
      </tr>
    )

    let content = (
      <h5 className="text-center no-submissions padding-full">
        {textSource.noRecords}
      </h5>
    )
    if (fileList.length > 0) {
      content = (
        <table className="table file-table">
          <thead>{tableTitleRow}</thead>
          <tbody>
            {fileList.map((dataFileRecord, key) => {
              if (isInProgress) {
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
                    <td>&nbsp;</td>
                    <td className="text-right">
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
              } else {
                return (
                  <tr key={dataFileRecord.formDataId! + key}>
                    <td>{dataFileRecord.name}</td>
                    <td>{moment(dataFileRecord.modifiedOn).calendar()}</td>
                    <td>{dataFileRecord.submissionStatus.state}</td>
                    <td className="text-right">
                      <button
                        className="btn"
                        aria-label="information"
                        onClick={() => this.setState({ isShowInfoModal: true })}
                      >
                        <FontAwesomeIcon
                          icon={faPhone}
                          aria-hidden="true"
                        ></FontAwesomeIcon>
                      </button>
                    </td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      )
    }
    return (
      <>
        {subhead} {content}
      </>
    )
  }

  renderSubmissionsTables = (
    filesInProgress: FormData[],
    filesSubmitted: FormData[],
    pathpart: string,
    formGroupId: string,
  ): JSX.Element[] | JSX.Element => {
    if (filesInProgress.length === 0 && filesSubmitted.length === 0) {
      return (
        <div className="text-center">
          <img src={NoSubmissionsIcon} alt="no submissions"></img>
          <p className="padding-full">You have no submissions</p>
        </div>
      )
    } else {
      return [
        this.renderSubmissionsTable(
          filesInProgress,
          pathpart,
          formGroupId,
          true,
        ),

        this.renderSubmissionsTable(
          filesSubmitted,
          pathpart,
          formGroupId,
          false,
        ),
      ]
    }
  }

  render() {
    return (
      <div className={`SRC-ReactJsonForm ${this.props.formClass}`}>
        {this.renderLoading(this.props.token, this.state.isLoading)}
        {this.renderUnauthenticatedView(this.props.token)}

        {!this.state.isLoading && (
          <div className="file-grid ">
            <h3>Your Submissions</h3>
            <div className="panel panel-default padding-full">
              {this.renderSubmissionsTables(
                this.state.inProgress.fileList,
                this.state.submitted.fileList,
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
            className={this.props.formClass}
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

        <Modal
          show={this.state.isShowInfoModal}
          animation={false}
          className={this.props.formClass}
        >
          <Modal.Header
            closeButton={false}
            onHide={() => this.setState({ isShowInfoModal: false })}
          >
            <Modal.Title>More Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Please{' '}
            <a href="mailto:synapseInfo@sagebionetworks.org">contact us</a> for
            more information about your submission
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="success"
              onClick={() => this.setState({ isShowInfoModal: false })}
            >
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
