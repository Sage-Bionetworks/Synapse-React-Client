import * as React from 'react'

import { SynapseClient } from '../../utils'
import {
  FormData,
  ListRequest,
  StatusEnum,
  ListResponse,
} from '../../utils/synapseTypes/'
import { faTrash, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WarningModal from './WarningModal'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import moment from 'moment'
import { SRC_SIGN_IN_CLASS } from '../../utils/SynapseConstants'
import NoSubmissionsIcon from '../../assets/icons/json-form-tool-no-submissions.svg'
import { isSignedIn } from '../../utils/SynapseClient'

export type SynapseFormSubmissionGridProps = {
  formGroupId: string
  pathpart: string
  formClass?: string
  itemNoun: string
}

type FileListType = 'IN_PROGRESS' | 'SUBMITTED'

type SynapseFormSubmissionGridState = {
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

export default class SynapseFormSubmissionGrid extends React.Component<
  SynapseFormSubmissionGridProps,
  SynapseFormSubmissionGridState
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
      <p>Are you sure you want to trash this submission?</p>
    </>
  )
  static requestFilter = {
    IN_PROGRESS: [StatusEnum.WAITING_FOR_SUBMISSION],
    SUBMITTED: [
      StatusEnum.SUBMITTED_WAITING_FOR_REVIEW,
      StatusEnum.ACCEPTED,
      StatusEnum.REJECTED,
    ],
  }

  constructor(props: SynapseFormSubmissionGridProps) {
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
    await this.refresh()
  }

  async refresh() {
    if (isSignedIn()) {
      await this.getUserFileListing().catch(error => {
        this.onError(error)
      })
    }
  }

  getTypeFileListing = async (
    filter: StatusEnum[],
    nextPageToken?: string,
  ): Promise<{ fileList: FormData[]; nextPageToken?: string }> => {
    this.setState({
      isLoading: true,
    })
    const groupId = this.props.formGroupId
    try {
      const cleanUpName = (item: FormData): FormData => {
        item = { ...item, ...{ name: item.name.replace('.json', '') } }
        return item
      }
      const request: ListRequest = {
        filterByState: filter,
        groupId,
        nextPageToken: nextPageToken,
      }

      const response: ListResponse = await SynapseClient.listFormData(request)
      const fileList = response.page
        ? response.page.map(item => cleanUpName(item))
        : []

      return {
        fileList,
        nextPageToken: response.nextPageToken,
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

  getMore = async (fileListType: FileListType, nextPageToken: string) => {
    const statusList =
      fileListType === 'SUBMITTED'
        ? SynapseFormSubmissionGrid.requestFilter.SUBMITTED
        : SynapseFormSubmissionGrid.requestFilter.IN_PROGRESS
    const result = await this.getTypeFileListing(statusList, nextPageToken)
    if (fileListType === 'SUBMITTED') {
      this.setState(prevState => ({
        submitted: {
          fileList: [...prevState.submitted.fileList, ...result.fileList],
          nextPageToken: result.nextPageToken,
        },
      }))
    } else {
      this.setState(prevState => ({
        inProgress: {
          fileList: [...prevState.inProgress.fileList, ...result.fileList],
          nextPageToken: result.nextPageToken,
        },
      }))
    }
  }

  getUserFileListing = async (): Promise<void> => {
    const inProgress = await this.getTypeFileListing(
      SynapseFormSubmissionGrid.requestFilter.IN_PROGRESS,
      this.state.inProgress.nextPageToken,
    )
    const submitted = await this.getTypeFileListing(
      SynapseFormSubmissionGrid.requestFilter.SUBMITTED,
      this.state.submitted.nextPageToken,
    )

    this.setState({
      inProgress: inProgress,
      submitted: submitted,
    })

    return
  }
  onError = (args: any) => {
    console.log(args)
  }

  deleteFile = async (formDataId: string): Promise<any> => {
    this.setState({
      isLoading: true,
      modalContext: undefined,
    })
    try {
      await SynapseClient.deleteFormData(formDataId)
      //await this.getUserFileListing(this.props.formGroupId)
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

  setModalConfirmationState = (formDataId: string) => {
    this.setState({
      modalContext: {
        action: this.deleteFile,
        arguments: [formDataId],
      },
    })
  }
  /* ------------------------------------------   rendering fns  ------------------------------------------------*/

  renderLoading = (isLoading: boolean): JSX.Element => {
    if (isSignedIn() && isLoading) {
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

  renderUnauthenticatedView = () => {
    if (isSignedIn()) {
      return <></>
    } else {
      return (
        <div className="bootstrap-4-backport file-grid">
          <h3>Your Submissions</h3>
          <div className="panel padding-full unauthenticated text-center">
            <p className="padding-full">
              Please sign in or register to initiate or continue your submission
            </p>
            <Button
              className={`${SRC_SIGN_IN_CLASS} pill`}
              variant="primary"
              size="lg"
            >
              Sign In
            </Button>
          </div>
        </div>
      )
    }
  }

  renderSubmissionsTable = (
    fileList: FormData[],
    pathpart: string,
    formGroupId: string,
    fileListType: FileListType,
    nextPageToken?: string,
  ): JSX.Element => {
    if (!formGroupId) {
      this.onError('Form Group ID is undefined')
      return <></>
    }
    const isInProgress = fileListType === 'IN_PROGRESS'
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
    const viewMore = nextPageToken ? (
      <div className="view-more">
        <button
          className="btn btn-link"
          onClick={() => this.getMore(fileListType, nextPageToken)}
        >
          more ...
        </button>
      </div>
    ) : (
      <></>
    )
    if (fileList.length > 0) {
      content = (
        <div className="file-table" key={`table${fileListType}`}>
          <table className="table">
            <thead>{tableTitleRow}</thead>
            <tbody>
              {fileList.map((dataFileRecord, key) => {
                if (isInProgress) {
                  return (
                    <tr key={dataFileRecord.formDataId! + key + fileListType}>
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
                      <td>
                        <a
                          href={`${pathpart}?formGroupId=${formGroupId}&formDataId=${dataFileRecord.formDataId}&dataFileHandleId=${dataFileRecord.dataFileHandleId}&submitted=1`}
                        >
                          {dataFileRecord.name}
                        </a>
                      </td>
                      <td>{moment(dataFileRecord.modifiedOn).calendar()}</td>
                      <td>{dataFileRecord.submissionStatus.state}</td>
                      <td className="text-right">
                        <button
                          className="btn"
                          aria-label="information"
                          onClick={() =>
                            this.setState({ isShowInfoModal: true })
                          }
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
          {viewMore}
        </div>
      )
    }
    return (
      <div key={`grid-${fileListType}`}>
        {subhead} {content}
      </div>
    )
  }

  renderSubmissionsTables = (
    inProgress: { fileList: FormData[]; nextPageToken?: string },
    submitted: { fileList: FormData[]; nextPageToken?: string },
    pathpart: string,
    formGroupId: string,
  ): JSX.Element[] | JSX.Element => {
    if (inProgress.fileList.length === 0 && submitted.fileList.length === 0) {
      return (
        <div className="text-center">
          <img src={NoSubmissionsIcon} alt="no submissions"></img>
          <p className="padding-full">You have no submissions</p>
        </div>
      )
    } else {
      return [
        this.renderSubmissionsTable(
          inProgress.fileList,
          pathpart,
          formGroupId,
          'IN_PROGRESS',
          inProgress.nextPageToken,
        ),

        this.renderSubmissionsTable(
          submitted.fileList,
          pathpart,
          formGroupId,
          'SUBMITTED',
          submitted.nextPageToken,
        ),
      ]
    }
  }

  render() {
    return (
      <div className={`theme-${this.props.formClass}`}>
        <div className="SRC-ReactJsonForm">
          {this.renderLoading(this.state.isLoading)}
          {this.renderUnauthenticatedView()}

          {!this.state.isLoading && (
            <div className="file-grid ">
              <h3>Your Submissions</h3>
              <div className="panel panel-default padding-full">
                {this.renderSubmissionsTables(
                  this.state.inProgress,
                  this.state.submitted,
                  this.props.pathpart,
                  this.props.formGroupId,
                )}

                <div className="text-center bootstrap-4-backport">
                  <Button
                    className="pill-xl btn-large" // .btn-large is a custom class, don't use size="lg"
                    variant="primary"
                    href={`${this.props.pathpart}?formGroupId=${this.props.formGroupId}`}
                  >
                    Add new {this.props.itemNoun}
                  </Button>
                </div>
              </div>
            </div>
          )}
          {this.state.modalContext && (
            <WarningModal
              className={`theme-${this.props.formClass}`}
              show={typeof this.state.modalContext !== 'undefined'}
              title={this.modalTitle}
              modalBody={this.modalCopy}
              onConfirmCallbackArgs={this.state.modalContext.arguments}
              onCancel={() => this.setState({ modalContext: undefined })}
              onConfirm={(formDataId: string) => this.deleteFile(formDataId)}
            />
          )}

          <Modal
            show={this.state.isShowInfoModal}
            animation={false}
            className={`theme-${this.props.formClass}`}
          >
            <Modal.Header
              closeButton={false}
              onHide={() => this.setState({ isShowInfoModal: false })}
            >
              <Modal.Title>More Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Please <a href="mailto:ModelAD@iupui.edu">contact us</a> for more
              information about your submission
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
      </div>
    )
  }
}
