import React, { ReactElement, useState } from 'react'
import { DropzoneAreaBase, FileObject } from 'material-ui-dropzone'
import { Button, Form, InputGroup, Modal } from 'react-bootstrap'
import { faFileUpload, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import isURL from 'validator/lib/isURL'
import { dbSet, encode, SUFFIX } from './utils/cache'
import { SchemaJson } from './types/IDataSchemaTypes'
import { DEFAULT_SCHEMA, MINUTES_TO_CACHE } from './constants'
import { getSchemaData } from './services/getSchemaData'
import { replaceData } from './state/DataState'

export default function UploadButton(): ReactElement {
  const [open, setOpen] = useState(false)
  const [fileObjects, setFileObjects] = useState<Array<FileObject>>([])
  const [url, setUrl] = useState<string>(``)
  const [validUrl, setValidUrl] = useState<boolean>(true)

  return (
    <>
      <Button
        aria-label={`Upload Schema File`}
        className={`button-upload`}
        onClick={() => setOpen(true)}
      >
        <FontAwesomeIcon icon={faFileUpload} />
      </Button>
      <Modal
        animation={false}
        show={open}
        onHide={() => setOpen(false)}
        aria-labelledby={`title-dialog-upload`}
        className={`dialog-upload`}
      >
        <Modal.Header closeButton>
          <Modal.Title
            className={`h1`}
            id={`title-dialog-upload`}
          >{`Upload a schema file`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{`Enter a URL to the JSON-LD schema file:`}</p>
          <Form.Label id={`schemaUrlLabel`}>{`Schema URL`}</Form.Label>
          <InputGroup>
            <Form.Control
              isInvalid={!validUrl}
              type={`url`}
              id={`schemaUrl`}
              aria-describedby={`schemaUrlLabel`}
              onChange={validateUrl}
            />
            {!validUrl && (
              <Form.Control.Feedback type={`invalid`}>
                <p className={`text-error`}>{`* Invalid URL`}</p>
              </Form.Control.Feedback>
            )}
          </InputGroup>
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
            onAdd={files => setFileObjects(files)}
            onDelete={() => setFileObjects([])}
            previewChipProps={{
              icon: <FontAwesomeIcon icon={faPaperclip} />,
              classes: { root: `fileChip-upload` },
            }}
            previewGridClasses={{ container: `uploadPreview` }}
            useChipsForPreview={true}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            className={`button-cancelUpload`}
            onClick={() => {
              console.log(`upload cancelled`)
              setOpen(false)
              setFileObjects([])
            }}
            variant={`secondary`}
          >
            Cancel
          </Button>
          <Button
            className={`button-submitUpload`}
            disabled={fileObjects.length > 0 || url ? false : true}
            onClick={submitFile}
            variant={`primary`}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
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
        dbSet(SUFFIX.scma, encode(content), MINUTES_TO_CACHE, true)
      }
      fileReader.readAsText(file.file)
    } else if (url) {
      getSchemaData(url, true).then(data => replaceData(data))
    }
    setOpen(false)
    setUrl(``)
    setFileObjects([])
  }

  function validateUrl(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void {
    const value: string = event.target.value
    if (value === `` || isURL(value, { require_protocol: true })) {
      setValidUrl(true)
      setUrl(value)
    } else {
      setValidUrl(false)
      setUrl(``)
    }
  }
}
