import 'regenerator-runtime/runtime'
import UserCard from './containers/UserCard'
import Login from './containers/Login'
import StatisticsPlot from './containers/StatisticsPlot'
import EntityForm from './containers/EntityForm'
import HasAccess from './containers/HasAccess'
import DownloadListTable from './containers/download_list/DownloadListTable'
import './style/main.scss'
import { SynapseConstants, SynapseClient } from './utils/'
import { EvaluationRoundEditorList } from './containers/evaluation_queues/EvaluationRoundEditorList'
import { EvaluationCard } from './containers/evaluation_queues/EvaluationCard'
import { EvaluationEditor } from './containers/evaluation_queues/EvaluationEditor'
import { AccessTokenPage } from './containers/personal_access_token/AccessTokenPage'
import { AccountLevelBadge } from './containers/AccountLevelBadge'
import TermsAndConditions from './containers/TermsAndConditions'
import PageProgress from './containers/PageProgress'
import ProjectViewCarousel from './containers/home_page/project_view_carousel/ProjectViewCarousel'
import { SynapseHomepage } from './containers/SynapseHomepage'

const SynapseComponents = {
  Login,
  EntityForm,
  UserCard,
  StatisticsPlot,
  HasAccess,
  DownloadListTable,
  EvaluationRoundEditorList,
  EvaluationCard,
  EvaluationEditor,
  AccessTokenPage,
  AccountLevelBadge,
  TermsAndConditions,
  PageProgress,
  ProjectViewCarousel,
  SynapseHomepage,
}

export { SynapseComponents, SynapseConstants, SynapseClient }
