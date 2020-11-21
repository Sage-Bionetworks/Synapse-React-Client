import React, { ReactElement, useState } from 'react'
import { DropzoneAreaBase, FileObject } from 'material-ui-dropzone'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core'
import AttachmentIcon from '@material-ui/icons/Attachment'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { isUri } from 'valid-url'
import { SchemaJson } from './types/IDataDictionaryTypes'
import { DEFAULT_SCHEMA } from './constants'
import { getSchemaData } from './services/getSchemaData'
import { replaceData } from './state/DataState'

export default function UploadButton(): ReactElement {
  const [open, setOpen] = useState(false)
  const [fileObjects, setFileObjects] = useState<Array<FileObject>>([])
  const [url, setUrl] = useState<string>(``)
  const [validUrl, setValidUrl] = useState<boolean>(true)

  return (
    <>
      <CloudUploadIcon
        className={`button-upload`}
        color={`primary`}
        onClick={() => setOpen(true)}
        titleAccess={`Upload Schema File`}
        viewBox={`0 0 24 16`}
      />
      <Dialog
        aria-labelledby={`title-dialog-upload`}
        className={`dialog-upload`}
        onClose={() => setOpen(false)}
        open={open}
      >
        <DialogTitle
          className={`h1`}
          id={`title-dialog-upload`}
        >{`Upload a schema file`}</DialogTitle>
        <DialogContent>
          <p>{`Enter a URL to the JSON-LD schema file:`}</p>
          <TextField
            error={!validUrl}
            margin="dense"
            id={`schemaUrl`}
            label={`Schema URL${!validUrl ? ` - (invalid URL)` : ``}`}
            type={`url`}
            fullWidth
            onChange={validateUrl}
          />
          <p>{`or`}</p>
          <DropzoneAreaBase
            acceptedFiles={[
              `.jsonld`,
              `application/json`,
              `application/ld+json`,
              `text/plain`,
            ]}
            alertSnackbarProps={{
              classes: { root: `snackbar-upload` },
              anchorOrigin: { vertical: 'top', horizontal: 'center' },
            }}
            dropzoneParagraphClass={`text-upload`}
            dropzoneText={`Drag and drop a schema file here or click`}
            filesLimit={1}
            fileObjects={fileObjects}
            maxFileSize={5242880}
            onAdd={(files) => setFileObjects(files)}
            onDelete={() => setFileObjects([])}
            previewChipProps={{
              icon: <AttachmentIcon />,
              classes: { root: `fileChip-upload` },
            }}
            previewGridClasses={{ container: `uploadPreview` }}
            useChipsForPreview={true}
          />
        </DialogContent>
        <DialogActions>
          <Button
            className={`button-cancelUpload`}
            onClick={() => {
              console.log(`upload cancelled`)
              setOpen(false)
              setFileObjects([])
            }}
            color={`primary`}
          >
            Cancel
          </Button>
          <Button
            className={`button-submitUpload`}
            disabled={fileObjects.length > 0 || url ? false : true}
            onClick={submitFile}
            color={`primary`}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )

  function submitFile() {
    if (fileObjects.length > 0) {
      const file = fileObjects[0]
      const fileReader = new FileReader()
      fileReader.onloadend = () => {
        const result = fileReader.result
        let content: SchemaJson = DEFAULT_SCHEMA
        try {
          content = JSON.parse(result as string)
        } catch (error) {
          // TODO: Add error handling for bad schema files.
          console.log(`error:`, error)
        }
        replaceData(content)
      }
      fileReader.readAsText(file.file)
    } else if (url) {
      getSchemaData(url).then((data) => {
        console.log(`data: `, data)
        replaceData(data)
      })
    }
    setOpen(false)
    setUrl(``)
    setFileObjects([])
  }

  function validateUrl(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void {
    const value: string = event.target.value
    if (isUri(value)) {
      setValidUrl(true)
      setUrl(value)
    } else {
      setValidUrl(false)
      setUrl(``)
    }
  }
}
