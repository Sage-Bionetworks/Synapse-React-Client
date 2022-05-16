import * as React from 'react'
import { Button } from 'react-bootstrap'
import { uploadFile } from '../utils/SynapseClient'
import { useSynapseContext } from '../utils/SynapseContext'
import { FileUploadComplete, UploadCallbackResp } from '../utils/synapseTypes'

export type FileUploadProps = {
  id?: string
  label?: string
  variant?: string // allow you to change the appearance of the button to link (see react bootstrap doc)
  uploadCallback?: (response: UploadCallbackResp) => void
  context?: any // to distinguish which file was uploaded if we have several FileUpload components on the same page
}

const FileUpload: React.FC<FileUploadProps> = props => {
  const { id, variant, label = 'Browse...', uploadCallback, context } = props
  const { accessToken } = useSynapseContext()
  const hiddenFileInput = React.useRef<HTMLInputElement>(null)

  const clickHandler = () => {
    if (hiddenFileInput?.current!) {
      hiddenFileInput.current?.click()
    }
  }

  const changeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]
      try {
        const resp: FileUploadComplete = await uploadFile(
          accessToken,
          file.name,
          file,
        )
        uploadCallback?.({
          success: true,
          resp: resp,
          context: context,
        })
      } catch (e) {
        console.log('FileUpload: fail to upload file', e)
        uploadCallback?.({
          success: false,
          error: e,
        })
      }
    }
  }

  return (
    <>
      <input
        type={'file'}
        ref={hiddenFileInput}
        onChange={changeHandler}
        style={{ display: 'none' }}
      />
      <Button id={id} variant={variant} onClick={clickHandler}>
        {label}
      </Button>
    </>
  )
}

export default FileUpload
