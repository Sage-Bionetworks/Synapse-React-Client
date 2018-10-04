import React from 'react'
import * as Utils from './utils/index';
import { STUDY } from '../../utils/SynapseConstants';
const uuidv4 = require("uuid/v4")

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

        const columns = [
            [
                ["STATUS", projectStatus],
                ["FUNDER", fundingAgency],
                ["DATA", dataStatus],
                ["PUBLICATION", "NONE"]
            ],
            [
                ["INVESTIGATORS", projectLeads]
            ],
            [
                ["INSTITUTIONS", institutions]
            ]
        ]

        return (
            <Utils.CardBorder>
                <Utils.Section>
                    <Utils.IconHolder>
                        <Utils.Icon type={STUDY} size={Utils.LARGE_ICON}/>
                    </Utils.IconHolder>
                    <Utils.Summary>
                        <Utils.SummaryHeader
                            name="STUDY"
                            title={projectName}
                        >
                            <Utils.Icon type={STUDY} size={Utils.SMALL_ICON}/>
                        </Utils.SummaryHeader>
                        <Utils.Authors authors={projectLeads} />
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
                <div className="row SRC-grayBackground">
                    <div className="col-md-2 hidden-xs">
                    </div>
                    {
                        columns.map(
                            column => {
                                return (
                                    <div key={uuidv4()} className="col-md-3 col-sm-4">
                                            <Utils.FauxTable
                                                values={column}
                                            >
                                            </Utils.FauxTable>
                                    </div>
                                )            
                            }
                        )
                    }
                </div>
            </Utils.CardBorder>
        )

    }
}