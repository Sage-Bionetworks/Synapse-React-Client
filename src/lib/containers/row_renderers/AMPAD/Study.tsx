import React from "react";
import * as Utils from '../utils'

type StudyState = {
    showMore: boolean
    hasCreatedIndex: boolean
};

type StudyProps = {
    data?: any
    schema?: any
};

export default class Study extends React.Component<StudyProps, StudyState> {

    constructor(props: StudyProps) {
        super(props);
        this.state = {
            showMore: false,
            hasCreatedIndex: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event: React.SyntheticEvent) {
        this.setState({
            showMore: !this.state.showMore
        });
    }

    getIcon(name: string) {
        switch(name) {
            case "Controlled":
                return (<img src={require("../../../assets/icons/controlledStudy.svg")}/>)
            default:
                return (<img src={require("../../../assets/icons/study-active.svg")}/>)
        }
    }

    render() {
        const { data, schema } = this.props;

        const accessType : string = data[schema["Access_Type"]];
        const id: string = data[schema.id];
        const link: string = `https://www.synapse.org/#!Synapse:${id}`

        const dataContributors = data[schema["Data_Contributor"]]
        const studyName = data[schema["Study_Name"]]
        const studyDescription = data[schema["Study_Description"]]

        const model = data[schema["Model_System"]]
        const organism = data[schema.Organism]
        const individuals = data[schema["Number_of_Individuals"]]
        const program  = data[schema.Consortium]
        const grant  = data[schema["Grant"]]
        const dataTypes  = data[schema["DataType_All"]]

        const values: string [][] = [["Data Types", dataTypes], ["ORGANISM", organism + " " + model], ["INDIVIDUALS", individuals], ["PROGRAM", program], ["GRANT", grant]];

        return (
            <div className="SRC-portalCard SRC-typeStudy SRC-layoutLandscape SRC-showMetadata">
                <div className="SRC-cardThumbnail">
                    {this.getIcon(accessType)}
                </div>
                <div className="SRC-cardContent">
                    <div className="SRC-type">Study</div>
                    <div className="SRC-title">
                        {" "}
                        <h3>
                            {" "}
                            <a target="_blank" href={link}>
                                {studyName}
                            </a>{" "}
                        </h3>{" "}
                    </div>
                    <div className="SRC-author">{dataContributors}</div>
                    <span className="SRC-font-size-base">
                        <Utils.ShowMore onClick={this.handleClick} summary={studyDescription} />
                    </span>
                </div>
                <Utils.CardFooter values={values} />
            </div>
        );
    }
}
