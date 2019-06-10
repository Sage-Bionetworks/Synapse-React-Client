import * as React from 'react'

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

  render() {
    return (
      <div>
        <input ref={this.inputOpenFileRef} type="file" style={{ display: 'none' }} />
        <button onClick={this.showOpenFileDlg}>Browse...</button>
      </div>
    )
  }
}
