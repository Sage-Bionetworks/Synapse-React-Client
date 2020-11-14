import * as React from 'react'
import {
  DATABASE,
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
  ORGANIZATION,
  PERSON,
  MOUSE,
  EXPLORE,
  SEARCH,
  CHART,
  FILTER,
  DOWNLOAD,
  EXPAND,
  COLLAPSE,
  CLOSE,
  SORTUP,
  SORTDOWN,
  SETTINGS,
  COLUMNS,
  COLUMNSDARK,
  VERTICAL_DOTS,
  CHART2,
  FILE,
} from '../../../utils/SynapseConstants'

import Data2Svg from '../../../assets/icons/Data2.svg'
import studyActiveSvg from '../../../assets/icons/study-active.svg'
import studyCompleteSvg from '../../../assets/icons/study-complete.svg'
import DNA_TwoSvg from '../../../assets/icons/DNA_Two.svg'
import organizationsSvg from '../../../assets/icons/organizations.svg'
import personSvg from '../../../assets/icons/person.svg'
import mouseSvg from '../../../assets/icons/mouse.svg'
import chart2Svg from '../../../assets/icons/chart2.svg'
import fileSvg from '../../../assets/icons/file.svg'

import {
  Project,
  Publication,
  Study,
  ToolClinical,
  ToolComputational,
  ToolExperimental,
  Database,
  Explore,
  Search,
  Chart,
  Filter,
  Download,
  Expand,
  Collapse,
  Close,
  SortUp,
  SortDown,
  Settings,
  Columns,
  ColumnsDark,
  VerticalDots,
} from '../../../assets/themed_icons'

import { KeyValue } from '../../../utils/functions/sqlFunctions'

type IconProps = {
  type: string
  iconOptions?: KeyValue
  value?: string
  isHeader?: boolean
  cssClass?: string
}

const defaultIcons = {
  [DATABASE]: Database, // this returns svg tag
  [DATASET]: Data2Svg, // this returns img tag link to svg
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
  [ORGANIZATION]: organizationsSvg,
  [PERSON]: personSvg,
  [MOUSE]: mouseSvg,
  [EXPLORE]: Explore,
  [SEARCH]: Search,
  [CHART]: Chart,
  [FILTER]: Filter,
  [DOWNLOAD]: Download,
  [EXPAND]: Expand,
  [COLLAPSE]: Collapse,
  [CLOSE]: Close,
  [SORTUP]: SortUp,
  [SORTDOWN]: SortDown,
  [SETTINGS]: Settings,
  [COLUMNS]: Columns,
  [COLUMNSDARK]: ColumnsDark,
  [VERTICAL_DOTS]: VerticalDots,
  [CHART2]: chart2Svg,
  [FILE]: fileSvg,
}
const Icon: React.FunctionComponent<IconProps> = ({
  type,
  value = '',
  iconOptions,
  cssClass,
}) => {
  const iconSet = { ...defaultIcons, ...iconOptions }
  // see if the value has a corresponding icon, e.g. 'Active' in a studies table
  // or if the type of card has a corresponding icon, e.g. 'Publication'
  const Icon = iconSet[value] || iconSet[type]
  // TODO: get rid of dataset icon class, none of the icons should be special cased
  const datasetIconClass =
    value === DATASET || type === DATASET ? 'SRC-datasetIcon' : ''
  if (typeof Icon == 'function') {
    return (
      <span className={cssClass}>
        <Icon />
      </span>
    )
  }
  return <img src={Icon} className={`iconImg ${datasetIconClass}`} />
}
export default Icon
