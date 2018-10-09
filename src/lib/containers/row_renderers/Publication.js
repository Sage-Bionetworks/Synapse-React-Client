import React from 'react'
import * as Utils from './utils'
import { PUBLICATION } from '../../utils/SynapseConstants';
const uuidv4 = require("uuid/v4")

class Publication extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            showMore: false
        }
    }

    handleChange(updatedState) {
        this.setState(
            updatedState
        )
    }

    render () {
        const {data, schema}= this.props
        const citation = data[schema.citation]
        const tumorType = data[schema.tumorType]
        const diseaseFocus = data[schema.diseaseFocus]
        const doi = data[schema.doi]
        const fundingAgency = data[schema.fundingAgency]
        const projectName = data[schema.projectName]
        const columns = [
            [
                ["DOI", doi],
                ["FUNDER", fundingAgency],
                ["STUDY", projectName]
            ]
        ]

        return (
            <Utils.CardBorder>
                <Utils.Section>
                    <Utils.IconHolder>
                        <Utils.Icon size={Utils.LARGE_ICON} type={PUBLICATION}/>
                    </Utils.IconHolder>
                    <Utils.Summary>
                        <Utils.SummaryHeader 
                            name={"PUBLICATION"}
                            title={citation}
                        >
                            <Utils.Icon type={PUBLICATION} size={Utils.SMALL_ICON}/>
                        </Utils.SummaryHeader>
                        <Utils.ChipContainer
                            chips={[{type: "gray", text: tumorType}, {type: "blue", text: diseaseFocus}]}
                        />
                    </Utils.Summary>
                </Utils.Section>
                <Utils.CardFooter>
                    <div className="col-sm-2 hidden-xs">
                    </div>
                    {
                        columns.map(
                            column => {
                                return (
                                    <div key={uuidv4()} className="col-sm-10" >
                                        <Utils.FauxTable
                                            values={column}
                                        />
                                    </div>
                                )
                            }
                        )
                    }
                </Utils.CardFooter>
            </Utils.CardBorder>
        )
    }
}

export default Publication