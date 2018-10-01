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
        this.handleLinkClick = this.handleLinkClick.bind(this)
    }

    handleChange(updatedState) {
        this.setState({
            showMore: !this.state.showMore
        })
    }

    handleLinkClick = (link) => (event) => {
        event.preventDefault()
        window.open(link, "_blank")
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
                            <Utils.SynButton onClick={this.handleLinkClick} link={id}  text={id} ></Utils.SynButton>
                        </div>

                        <Utils.ChipContainer
                            chips={[{type: "gray", text: tumorType},{type: "blue", text: diseaseFocus}]}
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

export default Dataset