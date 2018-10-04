import React from 'react'
import * as Utils from './utils'
import { DATASET } from '../../utils/SynapseConstants';
const uuidv4 = require("uuid/v4")

class Dataset extends React.Component {
    constructor(props) {
        super(props)
        this.handleLinkClick = this.handleLinkClick.bind(this)
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
        const columns = [
            [["FUNDER", fundingAgency]],
            [[ "SIZE", "12"]],
            [[ "FILES", fileCount]],
            [["MODIFIED", "TODAY"]]
        ]

        return (
            <Utils.CardBorder>
                <Utils.Section>
                    <Utils.IconHolder>
                        <Utils.Icon size={Utils.LARGE_ICON} type={DATASET} />
                    </Utils.IconHolder>
                    <Utils.Summary>
                        <Utils.SummaryHeader
                            name="DATASET"
                            title={datasetName}
                        >
                            <Utils.Icon type={DATASET} size={Utils.SMALL_ICON}/>
                        </Utils.SummaryHeader>
                        <div className="SRC-marginBottomTop">
                            <p>{summary}</p>
                            <Utils.SynButton onClick={this.handleLinkClick} link={id}  text={id} ></Utils.SynButton>
                        </div>

                        <Utils.ChipContainer
                            chips={[{type: "gray", text: tumorType},{type: "blue", text: diseaseFocus}]}
                        />
                    </Utils.Summary>
                </Utils.Section>
                <Utils.CardFooter>
                    <div className="col-sm-1 hidden-xs">
                    </div>
                    {
                      columns.map(
                          column => {
                              return (
                                  <div key={uuidv4()} className="col-md-2 col-sm-2">
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

export default Dataset