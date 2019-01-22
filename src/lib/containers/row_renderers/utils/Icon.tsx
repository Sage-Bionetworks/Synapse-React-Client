import * as React from 'react'
import { DATASET, FUNDER, PUBLICATION, STUDY_ACTIVE, STUDY_COMPLETE, TOOL } from '../../../utils/SynapseConstants'

import PublicationSvg from '../../../assets/icons/Publication.svg'
import Data2Svg from '../../../assets/icons/Data2.svg'
import studyActiveSvg from '../../../assets/icons/study-active.svg'
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
      return <img className="iconImg" alt="" src={DNA_TwoSvg} />
    case FUNDER:
      return <img className="iconImg" alt="" src={Data2Svg} />
    case STUDY_ACTIVE:
      return <img className="iconImg" alt="" src={studyActiveSvg} />
    case STUDY_COMPLETE:
      return <img className="iconImg" alt="" src={studyCompleteSvg} />
    case TOOL:
      return <img className="iconImg" alt="" src={DNA_TwoSvg} />
    default:
      return null
  }
}
export default Icon
