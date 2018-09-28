import React from 'react'
import * as Utils from './utils'

const PUBLICATION_SCHEMA = {
    projectName: 0,
    id: 1,
    fundingAgency: 2,
    citation: 3,
    doi: 4,
    tumorType: 5,
    diseaseFocus: 6,
}


class Publication extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            showMe: false
        }
    }

    handleChange(updatedState) {
        this.setState(
            updatedState
        )
    }

    render () {
        const {data, icon}= this.props
        const citation = data[PUBLICATION_SCHEMA.citation]
        const tumorType = data[PUBLICATION_SCHEMA.tumorType]
        const diseaseFocus = data[PUBLICATION_SCHEMA.diseaseFocus]
        return (
            <Utils.CardBorder>
                <Utils.Section>
                    <Utils.CardIcon icon={icon}/>
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
                <Utils.Footer>
                </Utils.Footer>
            </Utils.CardBorder>
        )
    }
}

export default Publication