import React from 'react'
import { PUBLICATION, DATASET, FUNDER, TOOL, STUDY } from '../../../utils/SynapseConstants';

const CardIcon = ({type}) => {

    switch (type) {
        case PUBLICATION:
            return (<div className="SRC-flex col-xs-2">
                        <img alt="" className="SRC-width-50-percent center-block img-responsive" src={require("../../../../assets/icons/Publication.svg")}></img>
                    </div>)
        case DATASET:
            return (<div className="SRC-flex col-xs-2">
                        <img alt="" className="SRC-width-50-percent center-block img-responsive" src={require("../../../../assets/icons/Data2.svg")}></img>
                    </div>)
        case FUNDER:
            return (<div className="SRC-flex col-xs-2">
                        <img alt="" className="SRC-width-50-percent center-block img-responsive" src={require("../../../../assets/icons/Data2.svg")}></img>
                    </div>)
        case STUDY:
            return (<div className="SRC-flex col-xs-2">
                        <img alt="" className="SRC-width-50-percent center-block img-responsive" src={require("../../../../assets/icons/Study.svg")}></img>
                    </div>)
        case TOOL:
            return (<div className="SRC-flex col-xs-2">
                        <img alt="" className="SRC-width-50-percent center-block img-responsive" src={require("../../../../assets/icons/DNA_Two.svg")}></img>
                    </div>)
        default:
            return null
    }
}

export default CardIcon