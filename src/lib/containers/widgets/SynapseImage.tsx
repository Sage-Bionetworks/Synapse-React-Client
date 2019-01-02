import * as React from 'react'
import { BatchFileResult } from '../../utils/jsonResponses/BatchFileResult'
import { FileEntity } from '../../utils/jsonResponses/FileEntity'
import { FileHandle } from '../../utils/jsonResponses/FileHandle'
import { getEntity, getFiles } from '../../utils/SynapseClient'

type SynapseImageProps = {
  wikiId?: string
  synapseId?: string
  token?: string
  fileName?: string
  fileResults?: FileHandle []
  params: any
}

type SynapseImageState = {
  isLoaded: boolean
  preSignedURL: string
}

class SynapseImage extends React.Component<SynapseImageProps, SynapseImageState> {

  constructor(props: SynapseImageProps) {
    super(props)
    this.getEntity = this.getEntity.bind(this)
    this.getSynapseFiles = this.getSynapseFiles.bind(this)
    this.compareById = this.compareById.bind(this)
    this.state = {
      isLoaded: false,
      preSignedURL: ''
    }
  }

  public compareById(fileName: string, key: string) {
    return (element: any) => element[key] === fileName
  }

    /**
     * Attach markdown to wiki attachments
     */
  public matchToHandle(comparator: any , objectList: any) {
    if (objectList) {
            // make sure the files have loaded
      const filtered = objectList.filter(comparator)
      return filtered
    }
    return []
  }

  public getEntity() {
    const { token, synapseId } = this.props
    getEntity(token, synapseId!).then(
            // https://docs.synapse.org/rest/org/sagebionetworks/repo/model/FileEntity.html
            (data: FileEntity) => {
              const fileHandleAssociationList = [
                {
                  associateObjectId: synapseId,
                  associateObjectType: 'FileEntity',
                  fileHandleId: data.dataFileHandleId
                }
              ]
              this.getSynapseFiles(fileHandleAssociationList, data.dataFileHandleId)
            })
  }
  public getSynapseFiles(fileHandleAssociationList: any, id: string) {
        // overload the method for two different use cases, one where
        // the image is attached to an entity and creates a list on the spot,
        // the other where list is passed in from componentDidMount in MarkdownSynapse
    const request: any = {
      includeFileHandles: false,
      includePreSignedURLs: true,
      includePreviewPreSignedURLs: false,
      requestedFiles: fileHandleAssociationList
    }
    getFiles(request, this.props.token).then(
            (data: BatchFileResult) => {
              const match = this.matchToHandle(this.compareById(id, 'fileHandleId'), data.requestedFiles)
              this.setState({
                preSignedURL: match[0].preSignedURL
              })
            })
  }
  public componentDidMount() {
    if (!this.props.token) {
      return
    }
    if (!this.props.hasOwnProperty('wikiId')) {
      this.getEntity()
    } else {
      const { fileName, fileResults } = this.props
      const match = this.matchToHandle(this.compareById(fileName!, 'fileName'), fileResults!)
      const fileHandleAssociationList = [
        {
          associateObjectId: this.props.wikiId,
          associateObjectType: 'WikiAttachment',
          fileHandleId: match[0].id
        }
      ]
      this.getSynapseFiles(fileHandleAssociationList, match[0].id)
    }
  }
  public render() {
    const imgStyle: any = {}
    const { params } = this.props
    if (params && params.align) {
      imgStyle.float = params.align.toLowerCase()
    }
    if (this.state.isLoaded) {
      return null
    }
    return (
      <React.Fragment>
        <img
          alt="synapse"
          className="img-fluid"
          src={this.state.preSignedURL}
          style={imgStyle}
        />
      </React.Fragment>
    )
  }
}
export default SynapseImage
