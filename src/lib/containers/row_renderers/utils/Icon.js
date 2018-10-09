import React from 'react'
import { PUBLICATION, DATASET, FUNDER, TOOL, STUDY_ACTIVE, STUDY_COMPLETE } from '../../../utils/SynapseConstants';
import {SMALL_ICON, LARGE_ICON} from './index'

const Icon = ({type, size}) => {
    const styleDict = {
        [SMALL_ICON]: "img-responsive visible-xs-inline",
        [LARGE_ICON]: "SRC-width-50-percent center-block img-responsive"
    }
    
    const style = size === SMALL_ICON ? {marginRight: "10px"} : {}
    const classStyle = styleDict[size]

    switch (type) {
        case PUBLICATION:
            return (<img alt="" style={style} className={classStyle} src={require("../../../assets/icons/Publication.svg")}></img>)
        case DATASET:
            return (<img alt="" style={style} className={classStyle} src={require("../../../assets/icons/Data2.svg")}></img>)
        case FUNDER:
            return (<img alt="" style={style} className={classStyle} src={require("../../../assets/icons/Data2.svg")}></img>)
        case STUDY_ACTIVE:
            return (<img alt="" style={style} className={classStyle} src={require("../../../assets/icons/study-active.svg")}></img>)
        case STUDY_COMPLETE:
            return (<img alt="" style={style} className={classStyle} src={require("../../../assets/icons/study-complete.svg")}></img>)
        case TOOL:
            return (<img alt="" style={style} className={classStyle} src={require("../../../assets/icons/DNA_Two.svg")}></img>)
        default:
            return null
    }
}

export default Icon