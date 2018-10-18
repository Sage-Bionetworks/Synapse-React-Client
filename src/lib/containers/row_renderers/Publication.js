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
        const fundingAgency = data[schema.fundingAgency]
        const projectName = data[schema.projectName]
        const values = [
            ["DOI", doi],
            ["FUNDER", fundingAgency],
            ["STUDY", projectName]
        ]

        return (
            <div class="SRC-portalCard SRC-typePublication SRC-layoutLandscape SRC-showMetadata">
                <div className="SRC-cardThumbnail">
                    <Utils.Icon type={PUBLICATION}/>
                </div>
                <div class="SRC-cardContent">
                    <div class="SRC-type">Publication</div>
                    <div class="SRC-title"><h3><a>{citation}</a></h3></div>
                    <div class="SRC-author">Smita Bhatia / Jean L. Nakamuralue</div>
                    <div className="SRC-cardAnnotations">
                        <Utils.ChipContainer chips={[tumorType, diseaseFocus]}/>
                    </div>
                  </div>
                <Utils.CardFooter values={values}/>
            </div>
        )
    }
}

export default Publication