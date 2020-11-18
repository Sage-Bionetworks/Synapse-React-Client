import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { Button, Modal } from 'react-bootstrap'
import Form, { IChangeEvent } from 'react-jsonschema-form'
import { SynapseClient } from '../utils'
import {
  DownloadFromTableRequest,
  DownloadFromTableResult,
  SortItem,
  QueryBundleRequest,
} from '../utils/synapseTypes/'
import {
  csvOption,
  formSchemaArray,
  formSchemaUIArray,
  includeRowIdAndRowVersionOption,
  writeHeaderOption,
} from './ModalDownload.FormSchema'
import { parseEntityIdFromSqlStatement } from '../utils/functions/sqlFunctions'

library.add(faTimes)

export type ModalDownloadState = {
  isLoading: boolean
  step: number
  data?: DownloadFromTableResult
  formData: {}
}

export type ModalDownloadProps = {
  onClose: (...args: any[]) => void
  token?: string
  includeEntityEtag?: boolean
  queryBundleRequest?: QueryBundleRequest // either the query bundle request needs to be provided, or getLastQueryRequest
  getLastQueryRequest?: () => QueryBundleRequest
  offset?: number
  limit?: number
  sort?: SortItem[]
}

export default class ModalDownload extends React.Component<
  ModalDownloadProps,
  ModalDownloadState
> {
  constructor(props: ModalDownloadProps) {
    super(props)
    this.state = {
      isLoading: false,
      step: 0,
      formData: {
        'File Type': csvOption,
        Contents: [writeHeaderOption, includeRowIdAndRowVersionOption],
      },
    }
  }

  handleSubmit = (event: IChangeEvent) => {
    if (this.state.step === 0) {
      this.handleDownloadSetup(event)
    } else {
      this.onDownload()
    }
  }

  handleDownloadSetup = (event: IChangeEvent) => {
    this.setState({
      isLoading: true,
    })
    const { formData } = event
    const fileType = formData['File Type']
    const contents = formData.Contents as string[]
    const { token, queryBundleRequest, getLastQueryRequest } = this.props
    const separator = fileType === csvOption ? ',' : '\t'
    const writeHeader = contents.includes(writeHeaderOption)
    const includeRowIdAndRowVersion = contents.includes(
      includeRowIdAndRowVersionOption,
    )
    const queryRequest = queryBundleRequest ?? getLastQueryRequest!()
    const sql = queryRequest.query.sql
    const downloadFromTableRequest: DownloadFromTableRequest = {
      sql,
      entityId: parseEntityIdFromSqlStatement(sql),
      selectedFacets: queryRequest.query.selectedFacets,
      concreteType:
        'org.sagebionetworks.repo.model.table.DownloadFromTableRequest',
      writeHeader,
      includeRowIdAndRowVersion,
      csvTableDescriptor: { separator },
    }
    SynapseClient.getDownloadFromTableRequest(downloadFromTableRequest, token)
      .then(data => {
        this.setState({
          isLoading: false,
          step: 1,
          data,
        })
      })
      .catch(err => {
        console.log('Error getDownloadFromTableRequest: ', err)
      })
  }

  onDownload = () => {
    const { data } = this.state
    const { token } = this.props
    // data will always be defined if calling this function
    SynapseClient.getFileHandleByIdURL(data!.resultsFileHandleId, token).then(
      url => {
        window.location.href = url
        this.props.onClose()
      },
    )
  }

  handleChange = (event: IChangeEvent) => {
    const { formData } = event
    this.setState({
      formData,
    })
  }

  render() {
    const closeBtn: React.CSSProperties = {
      position: 'absolute',
      top: 10,
      right: 10,
      zIndex: 10,
    }

    const spinnerStyle: React.CSSProperties = {
      height: 50,
      width: 50,
      backgroundSize: 50,
    }
    return (
      <Modal animation={false} show={true} onHide={this.props.onClose}>
        <Modal.Header>
          <button style={closeBtn} onClick={this.props.onClose}>
            <FontAwesomeIcon style={{ fontSize: '21px' }} icon="times" />
          </button>
          <Form
            schema={formSchemaArray[this.state.step]}
            uiSchema={formSchemaUIArray[this.state.step]}
            onChange={this.handleChange}
            formData={this.state.formData}
            onSubmit={this.handleSubmit}
          >
            {this.state.isLoading && (
              <div className="SRC-centerAndJustifyContent">
                <div className="SRC-center-text">
                  <p> Creating the File </p>
                  <div style={spinnerStyle} className="spinner" />
                  <p> Loading... </p>
                </div>
              </div>
            )}
            <hr />
            <div style={{ textAlign: 'right' }}>
              <Button variant="link" onClick={this.props.onClose}>
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                {this.state.step === 0 ? 'Next' : 'Download'}
              </Button>
            </div>
          </Form>
        </Modal.Header>
      </Modal>
    )
  }
}
