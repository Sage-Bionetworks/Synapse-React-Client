import * as React from 'react'
import {
  DATASET,
  FUNDER,
  PUBLICATION,
  STUDY_ACTIVE,
  STUDY_COMPLETE,
  TOOL,
  STUDY
} from '../../../utils/SynapseConstants'

import PublicationSvg from '../../../assets/icons/Publication.svg'
import Data2Svg from '../../../assets/icons/Data2.svg'
import studyActiveSvg from '../../../assets/icons/study-active.svg'
import studySvg from '../../../assets/icons/study.svg'
import studyCompleteSvg from '../../../assets/icons/study-complete.svg'
import DNA_TwoSvg from '../../../assets/icons/DNA_Two.svg'

type IconProps = {
  type: string
}

const Icon: React.SFC<IconProps> = ({ type }) => {
  switch (type) {
    case PUBLICATION:
      return <img className="iconImg" alt="" src={PublicationSvg} />
    case DATASET:
      return <img className="iconImg SRC-datasetIcon" alt="" src={Data2Svg} />
    case FUNDER:
      return <img className="iconImg" alt="" src={Data2Svg} />
    case STUDY_ACTIVE:
      return <img className="iconImg" alt="" src={studyActiveSvg} />
    case STUDY_COMPLETE:
      return <img className="iconImg" alt="" src={studyCompleteSvg} />
    case STUDY:
      return <img className="iconImg" alt="" src={studySvg} />
    case TOOL:
      return <img className="iconImg" alt="" src={DNA_TwoSvg} />
    default:
      return null
  }
}
export default Icon
