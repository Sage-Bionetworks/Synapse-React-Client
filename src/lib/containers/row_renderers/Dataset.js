import React from 'react'
import * as Utils from './utils'
import { DATASET } from '../../utils/SynapseConstants';
import calculateFriendlyFileSize from '../calculateFriendlyFileSize'

class Dataset extends React.Component {
    constructor(props) {
        super(props)
        this.handleLinkClick = this.handleLinkClick.bind(this)
    }

    handleLinkClick = (link) => (event) => {
        event.preventDefault()
        window.open(`https://www.synapse.org/#!Synapse:${link}`, "_blank")
    }

    render() {
        const {data, schema} = this.props
        const datasetName = data[schema.datasetName]
        const summary = data[schema.summary]
        const tumorType = data[schema.tumorType]
        const diseaseFocus = data[schema.diseaseFocus]
        const id = data[schema.id]
        const fundingAgency = data[schema.fundingAgency]
        const fileCount = data[schema.fileCount]
        const fileSize = calculateFriendlyFileSize(data[schema.fileSize])

        const values = [
            ["FUNDER", fundingAgency],
            [ "SIZE", fileSize],
            [ "FILES", fileCount]
        ]

        return (
            <div className="SRC-portalCard SRC-typeDataset SRC-layoutLandscape SRC-showMetadata">
                <div className="SRC-cardThumbnail">
                    <Utils.Icon type={DATASET}/>
                    <div>{fileSize}</div>
                </div>

                <div className="SRC-cardContent">
                    <div className="SRC-type">Dataset </div>
                    <div className="SRC-title"><h3><a>{datasetName}</a></h3></div>
                    <div className="SRC-description"> {summary} </div>
                    <div className="SRC-cardAnnotations">
                        <Utils.ChipContainer chips={[tumorType, diseaseFocus]}/>
                    </div>
                </div>

                <div className="SRC-cardAction">
                    <button onClick={this.handleLinkClick(id)} type="button">Download Dataset</button>
                </div>
                <Utils.CardFooter values={values}/>
            </div>
        )
    }
}

export default Dataset