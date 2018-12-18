import React from "react"

const logoLinks = {
    "CTF": require("../../assets/logos/ctf.svg"),
    "DHART SPORE": require("../../assets/logos/dhart.svg"),
    "NTAP": require("../../assets/logos/ntap.svg")
}

type FunderProps = {
    data?: any
    schema?: any
    hideOrganizationLink?: boolean
}

export default class Funder extends React.Component<FunderProps, {}> {
    constructor(props: FunderProps) {
        super(props)
        this.handleLinkClick = this.handleLinkClick.bind(this)
    }
    public handleLinkClick = (link: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        window.open(link, "_blank")
    }
    public render() {
        const { data, schema } = this.props
        const organizationName = data[schema.organizationName]
        const organizationPath = data[schema.organizationPath]
        const summary = data[schema.summary]
        const website = data[schema.website]
        const abbreviation = data[schema.abbreviation]
        const logo = logoLinks[abbreviation]
        const orgPath = `${window.location.origin}/#${organizationPath}`
        // remove leading http(s):// and trailing /
        let websiteDisplayName = website.replace("https://", "")
        websiteDisplayName = websiteDisplayName.replace("http://", "")
        if (websiteDisplayName.charAt(websiteDisplayName.length - 1) === "/") {
            websiteDisplayName = websiteDisplayName.substring(0, websiteDisplayName.length - 1)
        }
        const isOnOrgPath = window.location.hash.substring(1) === organizationPath
        const style: any = {}
        let showOrgLink
        if (isOnOrgPath) {
            style.paddingBottom = "42px"
            showOrgLink = (
                            <div className="SRC-marginAuto SRC-cardAction">
                                <button onClick={this.handleLinkClick(orgPath)} type="button">
                                View Funded Research
                                </button>)
                            </div>
                        )
        }
        return (
            <div className="SRC-portalCard SRC-typeFunder SRC-layoutLandscape" style={style}>
                <div className="SRC-cardContent">
                    <div className="SRC-type">Organization</div>
                    <div className="SRC-cardThumbnail">
                        <img alt="funder logo" className="SRC-logo" src={logo} />
                    </div>
                    <div className="SRC-title">
                        <h3>
                            {this.props.hideOrganizationLink && organizationName}
                            {!this.props.hideOrganizationLink && <a href={orgPath}>{organizationName}</a>}
                        </h3>
                    </div>
                    <div className="SRC-website">
                        <a target="_blank" href={website}>
                            {websiteDisplayName}
                        </a>
                    </div>
                    <div className="SRC-description">{summary}</div>
                </div>
                {showOrgLink}
            </div>
        )
    }
}
