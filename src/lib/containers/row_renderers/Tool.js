import React from 'react'
import * as Utils from './utils'
import { TOOL } from '../../utils/SynapseConstants';
import { LARGE_ICON } from './utils/index';

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
            <Utils.CardBorder>
                <Utils.Section>
                    <Utils.IconHolder>
                        <Utils.Icon size={LARGE_ICON} type={TOOL}/>
                    </Utils.IconHolder>
                    <Utils.Summary>
                        <Utils.SummaryHeader 
                            name={"TOOL"}
                            title={softwareName}
                        />
                        <p>{summary}</p>
                    </Utils.Summary>
                </Utils.Section>
                <Utils.Section>
                    <div className="col-md-2 hidden-xs">
                    </div>
                    <div className="col-md-10">
                        <Utils.SynButton
                            link={softwareLink}
                            text={"OPEN"}
                            onClick={this.handleLinkClick}
                        />
                    </div>
                </Utils.Section>
            </Utils.CardBorder>
        )
    }
}