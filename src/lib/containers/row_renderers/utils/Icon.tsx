import * as React from "react"
import { DATASET, FUNDER, PUBLICATION, STUDY_ACTIVE, STUDY_COMPLETE, TOOL } from "../../../utils/SynapseConstants"

type IconProps = {
    type: string
}

const Icon: React.SFC<IconProps> = ({ type }) => {
    switch (type) {
        case PUBLICATION:
            return <img className="iconImg" alt="" src={require("../../../assets/icons/Publication.svg")} />
        case DATASET:
            return <img className="iconImg" alt="" src={require("../../../assets/icons/Data2.svg")} />
        case FUNDER:
            return <img className="iconImg" alt="" src={require("../../../assets/icons/Data2.svg")} />
        case STUDY_ACTIVE:
            return <img className="iconImg" alt="" src={require("../../../assets/icons/study-active.svg")} />
        case STUDY_COMPLETE:
            return <img className="iconImg" alt="" src={require("../../../assets/icons/study-complete.svg")} />
        case TOOL:
            return <img className="iconImg" alt="" src={require("../../../assets/icons/DNA_Two.svg")} />
        default:
            return null
    }
}
export default Icon
