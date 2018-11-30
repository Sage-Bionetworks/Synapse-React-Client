import React from "react";
import { Project } from '.';
import * as Utils from '../utils'

type ProjectState = {
    showMore: boolean
    hasCreatedIndex: boolean
};

type ProjectProps = {
    isHeader?: boolean
    data?: any
    schema?: any
};

export default class Study extends React.Component<ProjectProps, ProjectState> {

    static icon = <img className="iconImg" alt="" src={require("../../../assets/icons/project.svg")}/>

    constructor(props: ProjectProps) {
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
        
        const abstract = data[schema.Abstract]
        // const consortium = data[schema.Consortium]
        const grantNumber = data[schema["Grant Number"]]
        const institutions = data[schema.Institutions]
        const contributors = data[schema["Key Data Contributors"]]
        const program = data[schema.Program]
        const investigators = data[schema["Key Investigators"]]
        const link = data[schema.Link]
        const name = data[schema.Name]

        const values: string[][] = [["INSTITUTIONS", institutions], ["PROGRAM", program]]

        if (contributors) {
            values.unshift(["KEY CONTRIBUTORS", contributors])
        }

        if (grantNumber) {
            values.unshift(["GRANT", grantNumber])
        }

        return (
            <div className="SRC-portalCard SRC-typeStudy SRC-layoutLandscape SRC-showMetadata">
                <div className="SRC-cardThumbnail">
                    {Project.icon}
                </div>
                <div className="SRC-cardContent">
                    <div className="SRC-type">Project</div>
                    <div className="SRC-title">
                        <h3>
                            <a target="_blank" href={link}>
                                {name}
                            </a>
                        </h3>
                    </div>
                    <div className="SRC-author SRC-boldText">{investigators}</div>
                    <span className="SRC-font-size-base">
                        <Utils.ShowMore onClick={this.handleClick} summary={abstract} />
                    </span>
                </div>
                <Utils.CardFooter extraWide={true} values={values} />
            </div>

        );
    }
}
 