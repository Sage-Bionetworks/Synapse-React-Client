import React from "react";
import * as Utils from '../utils'
import { AMP_CONSORTIUM } from 'src/lib/utils/SynapseConstants';

type ConsortiumState = {
    showMore: boolean
    hasCreatedIndex: boolean
};

type ConsortiumProps = {
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
    }

    handleClick(event: React.SyntheticEvent) {
        this.setState({
            showMore: !this.state.showMore
        });
    }

    render() {
        const { data, schema } = this.props;
        
        const description = data[schema["Short Description"]]
        const link = data[schema.Website]
        const name = data[schema["Full Name"]]

        return (
            <div className="SRC-portalCard SRC-typeStudy SRC-layoutLandscape SRC-showMetadata">
                <div className="SRC-cardThumbnail">
                    <Utils.Icon type={AMP_CONSORTIUM}/>
                </div>
                <div className="SRC-cardContent">
                    <div className="SRC-type">Consortium</div>
                    <div className="SRC-title">
                        <h3>
                            <a target="_blank" href={link}>
                                {name}
                            </a>
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
 