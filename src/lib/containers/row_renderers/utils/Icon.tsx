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
  PROJECT,
  GRANT,
} from '../../../utils/SynapseConstants'

import Data2Svg from '../../../assets/icons/Data2.svg'
import studyActiveSvg from '../../../assets/icons/study-active.svg'
import studyCompleteSvg from '../../../assets/icons/study-complete.svg'
import DNA_TwoSvg from '../../../assets/icons/DNA_Two.svg'

import {
  Project,
  Publication,
  Study,
  ToolClinical,
  ToolComputational,
  ToolExperimental,
} from '../../../assets/themed_icons'

import { KeyValue } from '../../../utils/functions/sqlFunctions'

type IconProps = {
  type: string
  iconOptions?: KeyValue
  value?: string
  isHeader?: boolean
}

const defaultIcons = {
  [DATASET]: Data2Svg,
  [FUNDER]: Data2Svg,
  [TOOL]: DNA_TwoSvg,
  [STUDY_ACTIVE]: studyActiveSvg,
  [STUDY_COMPLETE]: studyCompleteSvg,
  // new icons
  [PUBLICATION]: Publication,
  [STUDY]: Study,
  [EXPERIMENTAL]: ToolExperimental,
  [COMPUTATIONAL]: ToolComputational,
  [CLINICAL]: ToolClinical,
  [PROJECT]: Project,
  [GRANT]: Project,
}
const Icon: React.FunctionComponent<IconProps> = ({
  type,
  value = '',
  iconOptions,
}) => {
  const iconSet = { ...defaultIcons, ...iconOptions }
  // see if the value has a corresponding icon, e.g. 'Active' in a studies table
  // or if the type of card has a corresponding icon, e.g. 'Publication'
  const Icon = iconSet[value] || iconSet[type]
  // TODO: get rid of dataset icon class, none of the icons should be special cased
  const datasetIconClass =
    value === DATASET || type === DATASET ? 'SRC-datasetIcon' : ''
  if (typeof Icon == 'function') {
    return <Icon />
  }
  return <img src={Icon} className={`iconImg ${datasetIconClass}`} />
}
export default Icon
