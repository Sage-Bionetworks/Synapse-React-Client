import React from 'react'
import * as Utils from './utils'

const DATASET_SCHEMA = {
    id: 0,
    datasetName: 1,
    diseaseFocus: 2,
    tumorType: 3,
    summary: 4,
    fundingAgency: 5,
    fileCount: 6,
}

class Dataset extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showMe: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(updatedState) {
        this.setState(
            updatedState
        )
    }

    render() {
        const {data, icon} = this.props
        const datasetName = data[DATASET_SCHEMA.datasetName]
        const summary = data[DATASET_SCHEMA.summary]
        const tumorType = data[DATASET_SCHEMA.tumorType]
        const diseaseFocus = data[DATASET_SCHEMA.diseaseFocus]


        return (
            <Utils.CardBorder>
                <Utils.Section>
                    <Utils.CardIcon icon={icon}/>
                    <Utils.Summary>
                        <Utils.SummaryHeader
                            name="DATASET"
                            title={datasetName}
                        />
                        <Utils.ShowMe onClick={this.handleChange} summary={summary}></Utils.ShowMe>
                        <Utils.ChipContainer
                            chips={[{type: "gray", text: tumorType},{type: "blue", text: diseaseFocus}]}
                        />
                    </Utils.Summary>
                    {this.state.showMe && <Utils.Footer></Utils.Footer>}
                </Utils.Section>


            </Utils.CardBorder>
        )


    }

}

export default Dataset