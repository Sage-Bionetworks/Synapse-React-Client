import * as React from 'react'
import { uploadFiles } from '../utils/SynapseClient'

type UploaderState = {
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
    uploadFiles(this.props.token, selectorFiles, 'syn18987891')
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
      </div>
    )
  }
}
