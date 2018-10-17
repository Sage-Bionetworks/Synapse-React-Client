import React from 'react'
import * as Utils from './utils'
import { TOOL } from '../../utils/SynapseConstants';

export default class Tool extends React.Component {

    constructor(props) {
        super(props)
        this.handleLinkClick = this.handleLinkClick.bind(this)
    }

    handleLinkClick = (link) => (event) => {
        event.preventDefault()
        window.open(link, "_blank")
    }

    render () {
        const {data, schema} = this.props
        const softwareName = data[schema.softwareName]
        const summary = data[schema.summary]
        const softwareLink = data[schema.softwareLink]

        return (
            <div className="SRC-portalCard SRC-typeTool SRC-layoutLandscape SRC-showMetadata">
                <div className="SRC-cardThumbnail">
                    <Utils.Icon type={TOOL}/>
                </div>
                <div className="SRC-cardContent">
                    <div className="SRC-type">Tool</div>
                    <div className="SRC-title"><h3><a>{softwareName}</a></h3></div>
                    <div className="SRC-description">{summary}</div>
                </div>
                <div className="SRC-cardAction">
                    <button onClick={this.handleLinkClick(softwareLink)} type="button">Open Tool</button>        
                </div>
            </div>
        )
    }
}