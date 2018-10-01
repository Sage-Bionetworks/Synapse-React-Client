import React from 'react'
import * as Utils from './utils'
import { FUNDER } from '../../utils/SynapseConstants';

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
        // const logoLink = data[schema.logo] TODO: do something with this

        return (
            <Utils.CardBorder>
                 <Utils.Section>
                     <Utils.CardIcon type={FUNDER}/>
                    <Utils.Summary>
                            <Utils.SummaryHeader
                                name={"FUNDER"}
                                title={organizationName}
                            />
                            <div>
                                <a className={"SRC-primary-text-color"} href={website}>
                                    {website}
                                </a>
                            </div>
                            <p>
                                {summary}
                            </p>
                    </Utils.Summary>
                </Utils.Section>
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