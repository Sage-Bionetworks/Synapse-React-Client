import React from 'react'
import PropTypes from 'prop-types'
import {getFiles, getEntity} from '../../utils/SynapseClient'

class SynapseImage extends React.Component {

    constructor() {
        super()
        this.getEntity = this.getEntity.bind(this)
        this.getSynapseFiles = this.getSynapseFiles.bind(this)
        this.compareById = this.compareById.bind(this)

        this.state = {
            isLoaded: false,
            preSignedURL: ""
        }

    }

    compareById(fileName, key) {
        return function(element) {
            return element[key] === fileName
        }
    }

    /**
     * Attach markdown to wiki attachments
     */
    matchToHandle(comparator, objectList) {
        if (objectList) {
            // make sure the files have loaded
            let filtered =  objectList.filter(comparator)
            return filtered
        }
    }

    getEntity() {
        const {token, synapseId } = this.props
        getEntity(token, synapseId).then(
            data => {
                let fileHandleAssociationList = [{
                    fileHandleId: data.dataFileHandleId,
                    associateObjectId: synapseId,
                    associateObjectType: "FileEntity"
                }]
                this.getSynapseFiles(fileHandleAssociationList, data.dataFileHandleId)
            }
        )
        
    }
    
    getSynapseFiles(fileHandleAssociationList, id) {
        // overload the method for two different use cases, one where
        // the image is attached to an entity and creates a list on the spot,
        // the other where list is passed in from componentDidMount in MarkdownSynapse
        let request = {
            requestedFiles: fileHandleAssociationList,
            includePreSignedURLs: true,
            includeFileHandles: false,
            includePreviewPreSignedURLs: false
        }
        getFiles(request, this.props.token)
        .then(data => {
            let match = this.matchToHandle(this.compareById(id, "fileHandleId"), data.requestedFiles);
            this.setState({
                preSignedURL: match[0].preSignedURL
            })  
        })
    }
    
    componentDidMount() {
        if (!this.props.token) {
            return
        }
        if (!this.props.hasOwnProperty("wikiId")) {
            this.getEntity()
        } else {
            const {fileName, fileResults} = this.props
            let match = this.matchToHandle(this.compareById(fileName, "fileName"), fileResults);
            let fileHandleAssociationList = [{
                fileHandleId: match[0].id,
                associateObjectId: this.props.wikiId,
                associateObjectType: "WikiAttachment"
            }]
            this.getSynapseFiles(fileHandleAssociationList, match[0].id)
        }
    }

    render () {
        let imgStyle = {}
        let {params} = this.props
        
        if (params && params.align) {
            imgStyle.float = params.align.toLowerCase()
        }
        
        if (this.state.isLoaded) {
            return (
                null
            )
        } else {
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

}

SynapseImage.propTypes = {
    wikiId: PropTypes.string,
    synapseId: PropTypes.string,
    token: PropTypes.string,
    fileName: PropTypes.string,
    fileResults: PropTypes.array
}

export default SynapseImage