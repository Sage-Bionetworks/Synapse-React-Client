import * as React from 'react'
import { FileEntity } from '../utils/jsonResponses/FileEntity'
import { uploadFile, createEntity, updateEntity, lookupChildEntity, getEntity } from '../utils/SynapseClient'
import { FileUploadComplete } from '../utils/jsonResponses/FileUploadComplete'
import { EntityId } from '../utils/jsonResponses/EntityId'

type UploaderState = {
  token?: string,
  error?: any
}

export type UploaderProps = {
  token?: string,
  parentContainerId: string
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
    this.setState({ error: undefined })
    Array.from(selectorFiles).forEach((file) => {
      // check for existing filename in parent folder before upload (add new version if exists).
      // note that the parent container (project/folder) is configurable.
      // TODO: add progress of some kind!
      const newFileEntity: FileEntity = {
        parentId: this.props.parentContainerId,
        name: file.name,
        concreteType: 'org.sagebionetworks.repo.model.FileEntity',
        dataFileHandleId: ''
      }
      lookupChildEntity(
        {
          entityName: file.name,
          parentId: this.props.parentContainerId
        },
        this.props.token).then((entityId: EntityId) => {
          // ok, found an entity of the same name.
          getEntity(this.props.token, entityId.id).then((existingEntity: FileEntity) => {
            if (existingEntity.concreteType === 'org.sagebionetworks.repo.model.FileEntity') {
              this.updateEntityFile(existingEntity, file)
            } else {
              this.updateEntityFile(newFileEntity, file)
            }
          }).catch((error: any) => {
            this.setState({ error: { error } })
          })
        }).catch((error: any) => {
          debugger
          if (error.statusCode === 404) {
            // great, it's a new file!
            this.updateEntityFile(newFileEntity, file)
          } else {
            this.setState({ error: { error } })
          }
        })
    })
  }

  updateEntityFile = (fileEntity: FileEntity, file: File) => {
    uploadFile(this.props.token, file).then((fileUploadComplete: FileUploadComplete) => {
      const isCreate = fileEntity.dataFileHandleId === ''
      fileEntity.dataFileHandleId = fileUploadComplete.fileHandleId
      if (isCreate) {
        createEntity(fileEntity, this.props.token)
      } else {
        updateEntity(fileEntity, this.props.token)
      }
    }).catch((error: any) => {
      this.setState({ error: { error } })
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
            Upload error!
          </p>
        }
      </div>
    )
  }
}
