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
  EXPERIMENTAL_TOOL,
  COMPUTATIONAL,
  COMPUTATIONAL_TOOL,
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
  EXTERNALLINK,
  EASY_DIFFICULTY,
  MEDIUM_DIFFICULTY,
  VARIABLE_DIFFICULTY,
  SQL_EDITOR,
} from '../../../utils/SynapseConstants'

import { ReactComponent as Data2Svg } from '../../../assets/icons/Data2.svg'
import { ReactComponent as DatasetSvg } from '../../../assets/icons/Dataset.svg'
import { ReactComponent as studyActiveSvg } from '../../../assets/icons/study-active.svg'
import { ReactComponent as studyCompleteSvg } from '../../../assets/icons/study-complete.svg'
import { ReactComponent as DNA_TwoSvg } from '../../../assets/icons/DNA_Two.svg'
import { ReactComponent as organizationsSvg } from '../../../assets/icons/organizations.svg'
import { ReactComponent as personSvg } from '../../../assets/icons/person.svg'
import { ReactComponent as mouseSvg } from '../../../assets/icons/mouse.svg'
import { ReactComponent as chart2Svg } from '../../../assets/icons/chart2.svg'
import { ReactComponent as fileSvg } from '../../../assets/icons/file.svg'

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
  ExternalLink,
  SqlEditorIcon,
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
  [DATASET]: DatasetSvg, // this returns img tag link to svg
  [FUNDER]: Data2Svg,
  [TOOL]: DNA_TwoSvg,
  [STUDY_ACTIVE]: studyActiveSvg,
  [STUDY_COMPLETE]: studyCompleteSvg,
  // new icons
  [PUBLICATION]: Publication,
  [STUDY]: Study,
  [EXPERIMENTAL]: ToolExperimental,
  [EXPERIMENTAL_TOOL]: ToolExperimental,
  [COMPUTATIONAL]: ToolComputational,
  [COMPUTATIONAL_TOOL]: ToolComputational,
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
  [SQL_EDITOR]: SqlEditorIcon,
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
  [EXTERNALLINK]: ExternalLink,
  [EASY_DIFFICULTY]:
    'https://s3.amazonaws.com/static.synapse.org/images/easy.svg',
  [MEDIUM_DIFFICULTY]:
    'https://s3.amazonaws.com/static.synapse.org/images/medium.svg',
  [VARIABLE_DIFFICULTY]:
    'https://s3.amazonaws.com/static.synapse.org/images/variable.svg',
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
  const datasetCustomStyle =
    value === DATASET || type === DATASET ? { height: '55px' } : {}

  const className = `iconImg ${cssClass ?? ''}`

  if (Icon == null) {
    console.warn('Icon type not found:', type)
    return <></>
  }
  if (typeof Icon === 'string') {
    return <img src={Icon} className={className} />
  }
  return (
    <span>
      <Icon className={className} style={datasetCustomStyle} />
    </span>
  )
}
export default Icon
