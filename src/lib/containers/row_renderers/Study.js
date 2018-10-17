import React from 'react'
import * as Utils from './utils/index';
import { STUDY_ACTIVE, STUDY_COMPLETE } from '../../utils/SynapseConstants';

export default class Study extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showMore: false,
            hasCreatedIndex: false,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        this.setState({
            showMore: !this.state.showMore
        })
    }

    render () {
        const {data, schema} = this.props
        const projectName = data[schema.projectName]
        const projectLeads = data[schema.projectLeads] && data[schema.projectLeads].split(";").join(" / ")
        let summary = data[schema.summary]
        const diseaseFocus = data[schema.diseaseFocus]
        const tumorType = data[schema.tumorType]
        const projectStatus = data[schema.projectStatus]
        const fundingAgency = data[schema.fundingAgency]
        const dataStatus = data[schema.dataStatus]
        // const institutions = data[schema.institutions]

        const values = [
            ["STATUS", projectStatus],
            ["FUNDER", fundingAgency],
            ["DATA", dataStatus],
            ["PUBLICATION", "NONE"]
        ]

        return (
            <div className="SRC-portalCard SRC-typeStudy SRC-layoutLandscape SRC-showMetadata">
                <div className="SRC-cardThumbnail">
                    <Utils.Icon type={projectStatus === "Active" ? STUDY_ACTIVE: STUDY_COMPLETE}> </Utils.Icon>
                    <div>{projectStatus}</div>
                </div>
                <div className="SRC-cardContent">
                    <div className="SRC-type">Study</div>
                    <div className="SRC-title"><a>{projectName}</a></div>
                    <div className="SRC-author">{projectLeads}</div>
                    <Utils.ShowMore onClick={this.handleClick} summary={summary} />
                    <div className="SRC-cardAnnotations">
                        <Utils.ChipContainer chips={[tumorType, diseaseFocus]}/>
                    </div>
                </div>
                <Utils.CardFooter values={values}/>
            </div>
        )
    }
}