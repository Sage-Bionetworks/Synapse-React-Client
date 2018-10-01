import React from 'react'
import * as Utils from './utils'
import { DNA } from '../../../assets/icons'

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
                    <Utils.CardIcon>  {DNA} </Utils.CardIcon>
                    <Utils.Summary>
                        <Utils.SummaryHeader 
                            name={"TOOL"}
                            title={softwareName}
                        />
                        <Utils.ShowMore summary={summary}/>
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