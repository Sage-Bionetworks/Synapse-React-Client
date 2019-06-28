import * as React from 'react'
import {
  DATASET,
  FUNDER,
  PUBLICATION,
  STUDY_ACTIVE,
  STUDY_COMPLETE,
  TOOL,
  STUDY,
  EXPERIMENTAL,
  COMPUTATIONAL,
  CLINICAL,
  PROJECT
} from '../../../utils/SynapseConstants'

import PublicationSvg from '../../../assets/icons/Publication.svg'
import Data2Svg from '../../../assets/icons/Data2.svg'
import studyActiveSvg from '../../../assets/icons/study-active.svg'
import studySvg from '../../../assets/icons/study.svg'
import studyCompleteSvg from '../../../assets/icons/study-complete.svg'
import DNA_TwoSvg from '../../../assets/icons/DNA_Two.svg'
import ToolClinicalSvg from '../../../assets/icons/ToolClinical.svg'
import ToolComputationalSvg from '../../../assets/icons/ToolComputational.svg'
import ToolExperimentalSvg from '../../../assets/icons/ToolExperimental.svg'
import projectSvg from '../../../assets/icons/project.svg'

import { KeyValue } from '../../../../lib/utils/modules/sqlFunctions'

type IconProps = {
  type: string
  iconOptions?: KeyValue
  value?: string
}

const defaultIcons = {
  [PUBLICATION]: PublicationSvg,
  [DATASET]: Data2Svg,
  [FUNDER]: Data2Svg,
  [STUDY_ACTIVE]: studyActiveSvg,
  [STUDY_COMPLETE]: studyCompleteSvg,
  [STUDY]: studySvg,
  [TOOL]: DNA_TwoSvg,
  [EXPERIMENTAL]: ToolExperimentalSvg,
  [COMPUTATIONAL]: ToolComputationalSvg,
  [CLINICAL]: ToolClinicalSvg,
  [PROJECT]: projectSvg
}
const Icon: React.FunctionComponent<IconProps> = ({ type, value = '', iconOptions }) => {
  const iconSet = { ...defaultIcons, ...iconOptions }
  // see if the value has a corresponding icon, e.g. 'Active' in a studies table
  // or if the type of card has a corresponding icon, e.g. 'Publication'
  const icon = iconSet[value] || iconSet[type]
  // TODO: get rid of dataset icon class, none of the icons should be special cased
  const datasetIconClass = (value === DATASET) || (type === DATASET) ? 'SRC-datasetIcon' : ''
  return (<img className={`iconImg  ${datasetIconClass}`} src={icon} />)
}
export default Icon
