import React from "react";
import { getFiles, getEntity } from "../../utils/SynapseClient";

type SynapseImageProps = {
    wikiId?: string,
    synapseId?: string,
    token?: string,
    fileName?: string,
    fileResults?: any[]
    params: any
};

type SynapseImageState = {
    isLoaded: boolean,
    preSignedURL: string
};


class SynapseImage extends React.Component<SynapseImageProps, SynapseImageState> {

    constructor(props: SynapseImageProps) {
        super(props);
        this.getEntity = this.getEntity.bind(this);
        this.getSynapseFiles = this.getSynapseFiles.bind(this);
        this.compareById = this.compareById.bind(this);
        this.state = {
            isLoaded: false,
            preSignedURL: ""
        };
    }

    compareById(fileName: string, key: string) {
        return function(element: any) {
            return element[key] === fileName;
        };
    }

    /**
     * Attach markdown to wiki attachments
     */
    matchToHandle(comparator: any , objectList:any) {
        if (objectList) {
            // make sure the files have loaded
            let filtered = objectList.filter(comparator);
            return filtered;
        }
    }

    getEntity() {
        const { token, synapseId } = this.props;
        getEntity(token, synapseId!).then(
            (data: any) => {
                let fileHandleAssociationList = [
                    {
                        fileHandleId: data.dataFileHandleId,
                        associateObjectId: synapseId,
                        associateObjectType: "FileEntity"
                    }
                ];
                this.getSynapseFiles(fileHandleAssociationList, data.dataFileHandleId);
        });
    }
    getSynapseFiles(fileHandleAssociationList: any, id: string) {
        // overload the method for two different use cases, one where
        // the image is attached to an entity and creates a list on the spot,
        // the other where list is passed in from componentDidMount in MarkdownSynapse
        let request: any = {
            requestedFiles: fileHandleAssociationList,
            includePreSignedURLs: true,
            includeFileHandles: false,
            includePreviewPreSignedURLs: false
        };
        getFiles(request, this.props.token).then(
            (data: any) => {
                let match = this.matchToHandle(this.compareById(id, "fileHandleId"), data.requestedFiles);
                this.setState({
                    preSignedURL: match[0].preSignedURL
                });
        });
    }
    componentDidMount() {
        if (!this.props.token) {
            return;
        }
        if (!this.props.hasOwnProperty("wikiId")) {
            this.getEntity();
        } else {
            const { fileName, fileResults } = this.props;
            let match = this.matchToHandle(this.compareById(fileName!, "fileName"), fileResults);
            let fileHandleAssociationList = [
                {
                    fileHandleId: match[0].id,
                    associateObjectId: this.props.wikiId,
                    associateObjectType: "WikiAttachment"
                }
            ];
            this.getSynapseFiles(fileHandleAssociationList, match[0].id);
        }
    }
    render() {
        let imgStyle: any = {};
        let { params } = this.props;
        if (params && params.align) {
            imgStyle.float = params.align.toLowerCase();
        }
        if (this.state.isLoaded) {
            return null;
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
            );
        }
    }
}
export default SynapseImage;
