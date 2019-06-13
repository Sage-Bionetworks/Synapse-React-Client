import * as React from 'react'
import { FileEntity } from '../utils/jsonResponses/FileEntity'
import { getEntity, getFileEntityContent, uploadFile, updateEntity } from '../utils/SynapseClient'
import { Entity } from '../utils/jsonResponses/Entity'
import { FileUploadComplete } from '../utils/jsonResponses/FileUploadComplete'

type FileContentDownloadUploadDemoState = {
  token?: string,
  error?: any,
  isLoading?: boolean,
  fileContent?: string,
  targetEntity?: FileEntity
}

export type FileContentDownloadUploadDemoProps = {
  token?: string,
  targetEntityId: string
}

export default class FileContentDownloadUploadDemo
  extends React.Component<FileContentDownloadUploadDemoProps, FileContentDownloadUploadDemoState> {
  constructor(props: FileContentDownloadUploadDemoProps) {
    super(props)
    this.state = {
      token: '',
      isLoading: false,
    }
  }

  public componentDidMount() {
    const { token, targetEntityId } = this.props
    // must be logged in to download content
    if (token) {
      this.setState({ isLoading: true })
      getEntity(token, targetEntityId).then((entity: Entity) => {
        // if file entity
        if (entity.concreteType === 'org.sagebionetworks.repo.model.FileEntity') {
          const fileEntity: FileEntity = entity as FileEntity
          getFileEntityContent(token, fileEntity).then((content) => {
            this.setState({ fileContent: content, targetEntity: fileEntity, isLoading: false })
          })
        } else {
          this.setState({ error: 'invalid type', isLoading: false })
        }
      }).catch((err) => {
        this.setState({ error: err, isLoading: false })
      })
    }
  }

  updateFileContent = (event: React.MouseEvent<HTMLButtonElement>) => {
    // create a new FileHandle, and update the FileEntity
    if (this.props.token && this.state.targetEntity && this.state.fileContent) {
      this.setState({ isLoading: true })
      const newFileContent = new Blob([this.state.fileContent], {
        type: 'text/plain'
      })
      uploadFile(this.props.token, this.state.targetEntity.name, newFileContent)
        .then((fileUploadComplete: FileUploadComplete) => {
          // now update the entity!
          if (this.state.targetEntity) {
            this.state.targetEntity.dataFileHandleId = fileUploadComplete.fileHandleId
            updateEntity(this.state.targetEntity, this.props.token).then((entity: FileEntity) => {
              // updated the target entity, force it to get the updated entity
              this.setState({ targetEntity: entity, isLoading: false })
            })
          }
        }).catch((err) => {
          this.setState({ error: err, isLoading: false })
        })
    }
  }
  handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ fileContent: event.target.value })
  }

  render() {
    return (
      <div>
        {
          this.state.fileContent &&
          <React.Fragment>
            <div>
              <textarea
                style={{ width: '100%', height: '300px' }}
                value={this.state.fileContent}
                onChange={this.handleContentChange}
              />
            </div>
            <button onClick={this.updateFileContent}>Update File Content...</button>
          </React.Fragment>
        }
        {
          this.state.isLoading &&
          <span style={{ marginLeft: '2px' }} className={'spinner'} />
        }

        {
          this.state.error &&
          <p>
            Download error!
          </p>
        }
      </div>
    )
  }
}
