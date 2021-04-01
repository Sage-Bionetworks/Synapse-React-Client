import * as React from 'react'
import { Button } from 'react-bootstrap'
import { uploadFile } from '../utils/SynapseClient'

export type FileUploadProps = {
  id?: string
  token: string
  label?: string
  variant?: string // allow you to change the appearance of the button to link (see react bootstrap doc)
  uploadCallback?: Function
}

const FileUpload: React.FC<FileUploadProps> = props => {
  const { id, token, variant, label="Browse...", uploadCallback } = props
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  const clickHandler = () => {
    if (hiddenFileInput?.current!) {
      hiddenFileInput.current?.click()
    }
  }

  const changeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]
      try {
        const resp = await uploadFile(token, file.name, file)
        if (uploadCallback) {
          uploadCallback(resp)
        }
      } catch (e) {
        console.log("Fail to upload file", e)
      }
    }
  }

  return (<>
    <input type={"file"} ref={hiddenFileInput} onChange={changeHandler} style={{display: 'none'}}/>
    <Button id={id} variant={variant} onClick={clickHandler}>{label}</Button>
  </>)
}

export default FileUpload