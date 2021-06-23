import 'regenerator-runtime/runtime'
import UserCard from './containers/UserCard'
import Login from './containers/Login'
import LoginPage from './containers/LoginPage'
import StatisticsPlot from './containers/StatisticsPlot'
import EntityForm from './containers/EntityForm'
import HasAccess from './containers/HasAccess'
import DownloadListTable from './containers/download_list/DownloadListTable'
import './style/main.scss'
import { SynapseConstants, SynapseClient } from './utils/'
import { EvaluationCard } from './containers/evaluation_queues/EvaluationCard'
import { AccessTokenPage } from './containers/personal_access_token/AccessTokenPage'
import { AccountLevelBadge } from './containers/AccountLevelBadge'
import TermsAndConditions from './containers/TermsAndConditions'
import PageProgress from './containers/PageProgress'
import ProjectViewCarousel from './containers/home_page/project_view_carousel/ProjectViewCarousel'
import { SynapseHomepage } from './containers/SynapseHomepage'
import DownloadCartPage from './containers/download_list_v2/DownloadCartPage'
import { EvaluationEditorPage } from './containers/evaluation_queues/EvaluationEditorPage'
import { EntityFinder } from './containers/entity_finder/EntityFinder'
import ErrorPage from './containers/ErrorPage'
import {
  SynapseContextProvider,
  SynapseContextConsumer,
  useSynapseContext,
} from './utils/SynapseContext'

const SynapseContext = {
  SynapseContextProvider,
  SynapseContextConsumer,
  useSynapseContext,
}

const SynapseComponents = {
  Login,
  LoginPage,
  EntityForm,
  UserCard,
  StatisticsPlot,
  HasAccess,
  DownloadListTable,
  EvaluationCard,
  EvaluationEditorPage,
  AccessTokenPage,
  AccountLevelBadge,
  TermsAndConditions,
  PageProgress,
  ProjectViewCarousel,
  SynapseHomepage,
  EntityFinder,
  ErrorPage,
  DownloadCartPage,
}

export { SynapseComponents, SynapseConstants, SynapseClient, SynapseContext }
