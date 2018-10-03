import React from 'react'
import * as Utils from './utils/index';
import { STUDY } from '../../utils/SynapseConstants';

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
        const institutions = data[schema.institutions]

        const rows = [
            ["STATUS", projectStatus, "INVESTIGATORS", projectLeads, "INSTITUTIONS", institutions],
            ["FUNDER", fundingAgency], 
            ["DATA", dataStatus,], 
            ["PUBLICATION", "NONE"]
        ]

        return (
            <Utils.CardBorder>
                <Utils.Section>
                    <Utils.IconHolder>
                        <Utils.Icon type={STUDY} size={Utils.LARGE_ICON}/>
                    </Utils.IconHolder>
                    <Utils.Summary>
                        <div className="SRC-flex">
                            <div className="SRC-flex SRC-noPadding col-xs-2 visible-xs-inline-block">
                                <Utils.Icon type={STUDY} size={Utils.SMALL_ICON}/>
                            </div>
                            <div className="col-xs-10 col-md-12 SRC-noPadding">
                                <Utils.SummaryHeader
                                    name="STUDY"
                                    title={projectName}
                                />
                                <Utils.Authors authors={projectLeads} />
                            </div>
                        </div>
                        <Utils.ShowMore onClick={this.handleClick} summary={summary} />
                        <Utils.ChipContainer
                            chips={
                                [
                                    {type: "gray", text: tumorType},
                                    {type: "blue", text: diseaseFocus}
                                ]
                            }                    
                        />
                    </Utils.Summary>
                </Utils.Section>
               {
                    this.state.showMore && <Utils.CardFooter rows={rows}/>
                }
            </Utils.CardBorder>
        )

    }
}