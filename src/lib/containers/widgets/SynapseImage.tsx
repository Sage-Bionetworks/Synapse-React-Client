import * as React from 'react'
import { BatchFileResult } from '../../utils/jsonResponses/BatchFileResult'
import { FileEntity } from '../../utils/jsonResponses/FileEntity'
import { FileHandle } from '../../utils/jsonResponses/FileHandle'
import { getEntity, getFiles } from '../../utils/SynapseClient'
import { BatchFileRequest } from '../../utils/jsonResponses/BatchFileRequest'
import {
  FileHandleAssociation,
  FileHandleAssociateType,
} from '../../utils/jsonResponses/FileHandleAssociation'

type SynapseImageProps = {
  wikiId?: string
  synapseId?: string
  token?: string
  fileName?: string
  fileResults?: FileHandle[]
  params: any
}

type SynapseImageState = {
  preSignedURL: string
}

class SynapseImage extends React.Component<
  SynapseImageProps,
  SynapseImageState
> {
  constructor(props: SynapseImageProps) {
    super(props)
    this.getEntity = this.getEntity.bind(this)
    this.getSynapseFiles = this.getSynapseFiles.bind(this)
    this.state = {
      preSignedURL: '',
    }
  }

  public getEntity() {
    const { token, synapseId } = this.props
    if (synapseId) {
      getEntity<FileEntity>(token, synapseId).then(
        // https://docs.synapse.org/rest/org/sagebionetworks/repo/model/FileEntity.html
        (data: FileEntity) => {
          const fileHandleAssociationList = [
            {
              associateObjectId: synapseId,
              associateObjectType: FileHandleAssociateType.FileEntity,
              fileHandleId: data.dataFileHandleId,
            },
          ]
          this.getSynapseFiles(fileHandleAssociationList, data.dataFileHandleId)
        },
      )
    }
  }
  public getSynapseFiles(
    fileHandleAssociationList: FileHandleAssociation[],
    id: string,
  ) {
    // overload the method for two different use cases, one where
    // the image is attached to an entity and creates a list on the spot,
    // the other where list is passed in from componentDidMount in MarkdownSynapse
    const request: BatchFileRequest = {
      includeFileHandles: false,
      includePreSignedURLs: true,
      includePreviewPreSignedURLs: false,
      requestedFiles: fileHandleAssociationList,
    }
    getFiles(request, this.props.token)
      .then((data: BatchFileResult) => {
        const { preSignedURL } = data.requestedFiles.filter(
          el => el.fileHandleId === id,
        )[0]
        this.setState({
          preSignedURL: preSignedURL,
        })
      })
      .catch(err => {
        console.error('Error on getting image ', err)
      })
  }
  public componentDidMount() {
    if (!this.props.wikiId) {
      // Get file handle as external attachment
      this.getEntity()
    } else {
      // Can get presigned url right away from wiki association
      const { fileName, fileResults = [] } = this.props
      const { id } = fileResults.filter(el => el.fileName === fileName)[0]
      const fileHandleAssociationList: FileHandleAssociation[] = [
        {
          associateObjectId: this.props.wikiId,
          associateObjectType: FileHandleAssociateType.WikiAttachment,
          fileHandleId: id,
        },
      ]
      this.getSynapseFiles(fileHandleAssociationList, id)
    }
  }

  public render() {
    const imgStyle: React.CSSProperties = {}
    const { params = {} } = this.props
    const { align = '' } = params
    const alignLowerCase = align.toLowerCase()
    let className = ''
    if (alignLowerCase === 'left') {
      className = 'floatLeft'
    }
    if (alignLowerCase === 'right') {
      className = 'floatright'
    }
    if (alignLowerCase === 'center') {
      className = 'align-center'
    }
    if (!this.state.preSignedURL) {
      return null
    }
    return (
      <React.Fragment>
        <img
          alt="synapse"
          className={'img-fluid  ' + className}
          src={this.state.preSignedURL}
          style={imgStyle}
        />
      </React.Fragment>
    )
  }
}
export default SynapseImage
