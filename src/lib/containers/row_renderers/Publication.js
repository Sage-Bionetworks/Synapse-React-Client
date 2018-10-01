import React from 'react'
import * as Utils from './utils'
import {PublicationIcon} from '../../../assets/icons'

class Publication extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            ShoreMore: false
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
        return (
            <Utils.CardBorder>
                <Utils.Section>
                    <Utils.CardIcon> {PublicationIcon} </Utils.CardIcon>
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
            </Utils.CardBorder>
        )
    }
}

export default Publication