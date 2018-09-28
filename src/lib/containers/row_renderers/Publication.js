import React from 'react'
import {
        CardIcon,
        CardBorder,
        Section,
        Summary,
        Footer,
        SummaryHeader,
        ChipContainer
    }
from './utils/index'

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
            <CardBorder>
                <Section>
                    <CardIcon icon={icon}/>
                    <Summary>
                        <SummaryHeader 
                            name={"Publication"}
                            title={citation}
                        />
                        <ChipContainer
                            chips={[{type: "gray", text: tumorType}, {type: "blue", text: diseaseFocus}]}
                        >
                        </ChipContainer>
                    </Summary>
                </Section>
                <Footer>
                </Footer>
            </CardBorder>
        )
    }
}

export default Publication