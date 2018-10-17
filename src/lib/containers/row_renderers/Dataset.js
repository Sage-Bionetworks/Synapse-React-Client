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
        // const id = data[schema.id]
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
                    <div class="SRC-type">Dataset
                        <div class="SRC-title"><h3><a>{datasetName}</a></h3></div>
                        <div class="SRC-description"> {summary} </div>
                    </div>
                    <div className="SRC-cardAnnotations">
                        <Utils.ChipContainer chips={[tumorType, diseaseFocus]}/>
                    </div>
                </div>
                <Utils.CardFooter values={values}/>
            </div>
        )
    }
}

export default Dataset