import * as React from 'react'
import { FileEntity } from '../utils/jsonResponses/FileEntity'
import { uploadFile, createEntity } from '../utils/SynapseClient'
import { FileUploadComplete } from '../utils/jsonResponses/FileUploadComplete'

type UploaderState = {
  token?: string,
  error?: any
}

export type UploaderProps = {
  token?: string
}

export default class Uploader extends React.Component<UploaderProps, UploaderState> {
  private readonly inputOpenFileRef: React.RefObject<HTMLInputElement>

  constructor(props: UploaderProps) {
    super(props)
    this.state = { token: '' }
    this.inputOpenFileRef = React.createRef()
  }

  showOpenFileDlg = () => {
    if (this.inputOpenFileRef && this.inputOpenFileRef.current) {
      this.inputOpenFileRef.current.click()
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      this.handleFilesChanged(event.target.files)
    }
  }

  handleFilesChanged = (selectorFiles: FileList) => {
    Array.from(selectorFiles).forEach((file) => {
      // TODO: check for existing filename in parent folder before upload (add new version if exists?)
      // TODO: make parentId (container) configurable.
      // TODO: add progress of some kind!
      uploadFile(this.props.token, file).then((fileUploadComplete: FileUploadComplete) => {
        console.log('successfully created file handle: ', fileUploadComplete.fileHandleId)
        const newFileEntity: FileEntity = {
          parentId: 'syn18987891',
          name: fileUploadComplete.fileName,
          dataFileHandleId: fileUploadComplete.fileHandleId,
          concreteType: 'org.sagebionetworks.repo.model.FileEntity'
        }
        createEntity(newFileEntity, this.props.token)
      }).catch((error: any) => {
        this.setState({ error: { error } })
      })
    })
  }

  render() {
    return (
      <div>
        <input
          ref={this.inputOpenFileRef}
          type="file"
          style={{ display: 'none' }}
          onChange={this.handleChange}
          multiple={true}
        />
        <button onClick={this.showOpenFileDlg}>Browse...</button>
        {
          this.state.error &&
          <p>
            {this.state.error}
          </p>
        }
      </div>
    )
  }
}
