import React from "react";

type ConsortiumState = {
    showMore: boolean
    hasCreatedIndex: boolean
};

type ConsortiumProps = {
    token?: string
    ownerId?: string
    isHeader?: boolean
    data?: any
    schema?: any
};

export default class Consortium extends React.Component<ConsortiumProps, ConsortiumState> {

    constructor(props: ConsortiumProps) {
        super(props);
        this.state = {
            showMore: false,
            hasCreatedIndex: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.getIcon = this.getIcon.bind(this);
    }

    handleClick(event: React.SyntheticEvent) {
        this.setState({
            showMore: !this.state.showMore
        });
    }

    getIcon(org: string) {
        switch(org) {
            case "AMP-AD":
                return <img src={require("../../../assets/icons/ampad.svg")}/>
            case "M2OVE-AD":
                return <img src={require("../../../assets/icons/movead.png")}/>
            case "MODEL-AD":
                return <img src={require("../../../assets/icons/ModelADLogo-IconOnly-FNL.svg")}/>
            case "Resilience-AD":
                return <img src={require("../../../assets/icons/resiliencead.png")}/>
            default:
                return (false)
        }
    }

    render() {
        const { data, schema } = this.props;
        
        const description = data[schema["Short Description"]]
        const name = data[schema["Full Name"]]
        const org = data[schema.Program]

        const path = data[schema.Path]
        let orgPath = `${window.location.origin}/#${path}`        

        let isOnOrgPath = window.location.hash.substring(1) === path

        return (
            <div style={{paddingBottom: "32px"}} className="SRC-portalCard SRC-typeStudy SRC-layoutLandscape SRC-showMetadata">
                <div className="SRC-cardThumbnail">
                    {this.getIcon(org)}
                </div>
                <div className="SRC-cardContent">
                    <div className="SRC-type">Program</div>
                    <div className="SRC-title">
                        <h3>
                            {!isOnOrgPath && 
                                <a target="_blank" href={orgPath}>
                                    {name}
                                </a>
                            }
                            {isOnOrgPath && 
                                name
                            }
                        </h3>
                    </div>
                    <span className="SRC-font-size-base">
                        {description}
                    </span>
                </div>
            </div>

        );
    }
}
 