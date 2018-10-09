import React from 'react'
import * as Utils from './utils'

const logoLinks = {
    CTF : require("../../assets/logos/ctf.svg"),
    "DHART SPORE" : require("../../assets/logos/dhart.svg"),
    NTAP : require("../../assets/logos/ntap.svg")
}


export default class Funder extends React.Component {
    
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
        const organizationName = data[schema.organizationName]
        const summary = data[schema.summary]
        const website = data[schema.website]
        const abbreviation = data[schema.abbreviation]
        const logo = logoLinks[abbreviation]

        return (
            <Utils.CardBorder>
                 <Utils.Section>
                    <div className="col-xs-6">
                        <Utils.SummaryHeader
                            name={"FUNDER"}
                            title={organizationName}
                        />
                        <div>
                            <a className={"SRC-primary-text-color"} href={website}>
                                {website}
                            </a>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <img alt="" className="pull-right img-responsive" src={logo}></img>
                    </div>
                </Utils.Section>
                <p>
                    {summary}
                </p>
                <Utils.Section>
                    <div className="col-xs-2"/>
                    <div className="">
                        <Utils.SynButton
                            link={website}
                            text={"VIEW RESEARCH"}
                            onClick={this.handleLinkClick}
                        />
                    </div>
                </Utils.Section>
            </Utils.CardBorder>
        )
    }
}