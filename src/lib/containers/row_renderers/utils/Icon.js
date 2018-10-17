import React from 'react'
import { PUBLICATION, DATASET, FUNDER, TOOL, STUDY_ACTIVE, STUDY_COMPLETE } from '../../../utils/SynapseConstants';

const Icon = ({type}) => {
    switch (type) {
        case PUBLICATION:
            return (<img alt="" src={require("../../../assets/icons/Publication.svg")}></img>)
        case DATASET:
            return (<img alt="" src={require("../../../assets/icons/Data2.svg")}></img>)
        case FUNDER:
            return (<img alt="" src={require("../../../assets/icons/Data2.svg")}></img>)
        case STUDY_ACTIVE:
            return (<img alt="" src={require("../../../assets/icons/study-active.svg")}></img>)
        case STUDY_COMPLETE:
            return (<img alt="" src={require("../../../assets/icons/study-complete.svg")}></img>)
        case TOOL:
            return (<img alt="" src={require("../../../assets/icons/DNA_Two.svg")}></img>)
        default:
            return null
    }
}

export default Icon