import React from 'react'
import * as Utils from './utils'
import { PUBLICATION } from '../../utils/SynapseConstants';

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
        const funder = data[schema.funder]
        const projectName = data[schema.projectName]
        const rows = [
            ["DOI", doi, "FUNDER", funder, "STUDY", projectName]
        ]

        return (
            <Utils.CardBorder>
                <Utils.Section>
                    <Utils.CardIcon type={PUBLICATION}/>
                    <Utils.Summary>
                        <Utils.SummaryHeader 
                            name={"PUBLICATION"}
                            title={citation}
                        />
                        <Utils.ChipContainer
                            chips={[{type: "gray", text: tumorType}, {type: "blue", text: diseaseFocus}]}
                        />
                    </Utils.Summary>
                </Utils.Section>
                <Utils.CardFooter rows={rows}/>
            </Utils.CardBorder>
        )
    }
}

export default Publication