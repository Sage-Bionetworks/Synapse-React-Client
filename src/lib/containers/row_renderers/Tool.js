import React from 'react'
import * as Utils from './utils'

const TOOLS_SCHEMA = {
    softwareName: 0,
    summary: 1,
    softwareLink: 2,
}

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
        const {data, icon} = this.props
        const softwareName = data[TOOLS_SCHEMA.softwareName]
        const summary = data[TOOLS_SCHEMA.summary]
        const softwareLink = data[TOOLS_SCHEMA.softwareLink]

        return (
            <Utils.CardBorder>
                <Utils.Section>
                    <Utils.CardIcon icon={icon}/>
                    <Utils.Summary>
                        <Utils.SummaryHeader 
                            name={"TOOL"}
                            title={softwareName}
                        />
                        <Utils.ShowMe summary={summary}/>
                    </Utils.Summary>
                </Utils.Section>
                <Utils.Section>
                    <div className="col-xs-2">
                    </div>
                    <div className="col-xs-10">
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