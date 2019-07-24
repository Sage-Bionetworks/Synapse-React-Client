import * as React from 'react'
import Form, { IChangeEvent } from 'react-jsonschema-form'
import { formSchemaArray, formSchemaUIArray, writeHeaderOption, includeRowIdAndRowVersionOption, csvOption } from './ModalDownload.FormSchema'
import { DownloadFromTableRequest } from 'lib/utils/jsonResponses/Table/DownloadFromTableRequest'
import { SynapseClient } from 'lib/utils'
import { DownloadFromTableResult } from 'lib/utils/jsonResponses/Table/DownloadFromTableResult'
import { SortItem } from 'lib/utils/jsonResponses/Table/Query'
import { FacetColumnRequest } from 'lib/utils/jsonResponses/Table/FacetColumnRequest'

export type ModalDownloadState = {
  isLoading: boolean
  step: number,
  data?: DownloadFromTableResult
}

export type ModalDownloadProps = {
  entityId: string
  sql: string
  onClose: () => void
  token?: string
  includeEntityEtag?: boolean
  selectedFacets?: FacetColumnRequest [] // The selected facet filters.
  isConsistent?: boolean
  offset?: number
  limit?: number
  sorT?: SortItem []
}

export default class ModalDownload extends React.Component<ModalDownloadProps, ModalDownloadState> {

  constructor(props: ModalDownloadProps) {
    super(props)
    this.state = {
      isLoading: false,
      step: 0
    }
  }

  handleSubmit = (event: IChangeEvent ) => {
    if (this.state.step === 0) {
      this.handleDownloadSetup(event)
    } else {
      this.onDownload()
    }
  }

  handleDownloadSetup = (event: IChangeEvent) => {
    this.setState({
      isLoading: true
    })
    const { formData } = event
    const fileType = formData['File Type']
    const contents = formData.Contents as string []
    const { token, ...rest } = this.props
    const separator = fileType === csvOption ? ',': '\t'
    const writeHeader = contents.includes(writeHeaderOption)
    const includeRowIdAndRowVersion = contents.includes(includeRowIdAndRowVersionOption)
    const downloadFromTableRequest: DownloadFromTableRequest = {
      ...rest,
      concreteType: 'org.sagebionetworks.repo.model.table.DownloadFromTableRequest',
      writeHeader,
      includeRowIdAndRowVersion,
      csvTableDescriptor: { separator },
    }
    SynapseClient.getDownloadFromTableRequest(downloadFromTableRequest, token).then(
      data => {
        this.setState({
          isLoading: false,
          step: 1,
          data
        })
      }
    ).catch(err => {
      console.log('Error getDownloadFromTableRequest: ', err)
    })
  }

  onDownload = () => {
    // if calling this then data will be defined
    const { data } = this.state
    window.open(`https://repo-prod.prod.sagebase.org/file/v1/fileHandle/${data!.resultsFileHandleId}/url`)
    this.props.onClose()
  }

  render() {
    return (
      <div className="SRC-modal">
        <div className="container-fluid SRC-fullWidth">
          <div className="row">
            <div className="SRC-modal-content col-xs-6 col-xs-offset-3">
              <Form
                formData={{
                  boolean: {default: true}
                }}
                schema={formSchemaArray[this.state.step]}
                uiSchema={formSchemaUIArray[this.state.step]}
                onSubmit={this.handleSubmit}
                >
                {
                  this.state.isLoading
                  &&
                  <div className="SRC-centerContent">
                    <div className="SRC-center-text">
                      <p> Creating the File </p>
                      <div style={{height: 50, width: 50, backgroundSize: 50}} className="spinner" />
                      <p> Loading... </p>
                    </div>
                  </div>
                }
                <hr/>
                <div style={{textAlign: 'right'}}>
                  <button onClick={this.props.onClose} className="SRC-primary-text-color SRC-roundBorder SRC-underline-on-hover " type="button"> Cancel </button>
                  <button className="SRC-primary-background-color SRC-roundBorder SRC-whiteText" type="submit"> {this.state.step === 0 ? 'Next': 'Download' } </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }

}