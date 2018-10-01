import React from 'react'
import * as Utils from './utils'
import { DATASET } from '../../utils/SynapseConstants';

class Dataset extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showMore: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    handleChange(updatedState) {
        this.setState({
            showMore: !this.state.showMore
        })
    }

    handleButtonClick = (link) => (event) => {
        // TODO: implement this method, get downloadable zip possibly
        console.log('link clicked ', link)
    }

    render() {
        const {data, schema} = this.props
        const datasetName = data[schema.datasetName]
        const summary = data[schema.summary]
        const tumorType = data[schema.tumorType]
        const diseaseFocus = data[schema.diseaseFocus]
        const id = data[schema.id]
        const fundingAgency = data[schema.fundingAgency]
        const fileCount = data[schema.fileCount]
        const rows = [
            ["FUNDER", fundingAgency, "SIZE", "12", "FILES", fileCount,  "MODIFIED", "TODAY"],
        ]

        return (
            <Utils.CardBorder>
                <Utils.Section>
                    <Utils.CardIcon type={DATASET} />
                    <Utils.Summary>
                        <Utils.SummaryHeader
                            name="DATASET"
                            title={datasetName}
                        />
                        <div>
                            <Utils.ShowMore onClick={this.handleChange} summary={summary}></Utils.ShowMore>
                            <Utils.SynButton onClick={this.handleButtonClick} link={id}  text={id} ></Utils.SynButton>
                        </div>

                        <Utils.ChipContainer
                            chips={[{type: "gray", text: tumorType},{type: "blue", text: diseaseFocus}]}
                        />
                    </Utils.Summary>
                </Utils.Section>
                {
                    this.state.showMore && <Utils.Footer rows={rows}/>
                }

            </Utils.CardBorder>
        )
    }
}

export default Dataset