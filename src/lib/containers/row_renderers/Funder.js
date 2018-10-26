import React from 'react'

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
        const organizationPath = data[schema.organizationPath]
        const summary = data[schema.summary]
        const website = data[schema.website]
        const abbreviation = data[schema.abbreviation]
        const logo = logoLinks[abbreviation]
        
        let orgPath = `${window.location.origin}/#${organizationPath}`
        
        // remove leading http(s):// and trailing /
        let websiteDisplayName = website.replace("https://", "")
        websiteDisplayName = websiteDisplayName.replace("http://", "")

        if (websiteDisplayName.charAt(websiteDisplayName.length - 1) === "/") {
            websiteDisplayName = websiteDisplayName.substring(0,websiteDisplayName.length - 1)
        }

        let isOnOrgPath = window.location.hash.substring(1) === organizationPath

        return (
            <div className="SRC-portalCard SRC-typeFunder SRC-layoutLandscape">
                <div className="SRC-cardContent">
                    <div className="SRC-type">Organization</div>
                    <div className="SRC-cardThumbnail">
                        <img alt="funder logo" className="SRC-logo" src={logo} />
                    </div>
                    <div className="SRC-title">
                        <h3>
                            {
                                this.props.hideOrganizationLink && organizationName
                            }
                            {
                                !this.props.hideOrganizationLink && <a href={orgPath}>{organizationName}</a>
                            }
                        </h3>
                    </div>
                    <div className="SRC-website"><a target="_blank" href={website}>{websiteDisplayName}</a></div>
                    <div className="SRC-description">{summary}</div>
                </div>
                {!isOnOrgPath && <div className="SRC-cardAction">
                    <button onClick={this.handleLinkClick(orgPath)} type="button">View Funded Research</button>
                </div>}
            </div>
        )
    }
}