import React from "react";
import * as Utils from "./utils/index";
import { STUDY_ACTIVE, STUDY_COMPLETE } from "../../utils/SynapseConstants";

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

    render() {
        const { data, schema } = this.props;
        const projectName: string = data[schema.projectName];
        const projectLeads: string = data[schema.projectLeads] && data[schema.projectLeads].split(";").join(" / ");
        let summary: string = data[schema.summary];
        const diseaseFocus: string = data[schema.diseaseFocus];
        const tumorType: string = data[schema.tumorType];
        const projectStatus: string = data[schema.projectStatus];
        const fundingAgency: string = data[schema.fundingAgency];
        const dataStatus: string = data[schema.dataStatus];
        const id: string = data[schema.id];
        const link: string = `https://www.synapse.org/#!Synapse:${id}`
        // const institutions = data[schema.institutions]
        const values: string [][] = [["STATUS", projectStatus], ["FUNDER", fundingAgency], ["DATA", dataStatus], ["PUBLICATION", "NONE"]];
        let chips: string [] = [tumorType, diseaseFocus];
        return (
            <div className="SRC-portalCard SRC-typeStudy SRC-layoutLandscape SRC-showMetadata">
                <div className="SRC-cardThumbnail">
                    <Utils.Icon type={projectStatus === "Active" ? STUDY_ACTIVE : STUDY_COMPLETE}> </Utils.Icon>
                    <div>{projectStatus}</div>
                </div>
                <div className="SRC-cardContent">
                    <div className="SRC-type">Study</div>
                    <div className="SRC-title">
                        {" "}
                        <h3>
                            {" "}
                            <a target="_blank" href={link}>
                                {projectName}
                            </a>{" "}
                        </h3>{" "}
                    </div>
                    <div className="SRC-author">{projectLeads}</div>
                    <span className="SRC-font-size-base">
                        <Utils.ShowMore onClick={this.handleClick} summary={summary} />
                    </span>
                    <div className="SRC-cardAnnotations">
                        <Utils.ChipContainer chips={chips} />
                    </div>
                </div>
                <Utils.CardFooter values={values} />
            </div>
        );
    }
}
