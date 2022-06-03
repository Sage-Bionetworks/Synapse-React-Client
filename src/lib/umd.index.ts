import 'regenerator-runtime/runtime'
import UserCard from './containers/UserCard'
import Login from './containers/Login'
import LoginPage from './containers/LoginPage'
import StatisticsPlot from './containers/StatisticsPlot'
import EntityForm from './containers/EntityForm'
import HasAccess from './containers/HasAccess'
import DownloadListTable from './containers/download_list/DownloadListTable'
import './style/main.scss'
import { SynapseConstants, SynapseClient } from './utils'
import { EvaluationCard } from './containers/evaluation_queues/EvaluationCard'
import { AccessTokenPage } from './containers/personal_access_token/AccessTokenPage'
import { AccountLevelBadge } from './containers/AccountLevelBadge'
import TermsAndConditions from './containers/TermsAndConditions'
import PageProgress from './containers/PageProgress'
import ProjectViewCarousel from './containers/home_page/project_view_carousel/ProjectViewCarousel'
import { SynapseHomepage } from './containers/SynapseHomepage'
import { SynapseNavDrawer } from './containers/SynapseNavDrawer'
import { DownloadCartPage } from './containers/download_list_v2/DownloadCartPage'
import FavoritesPage from './containers/FavoritesPage'
import { EvaluationEditorPage } from './containers/evaluation_queues/EvaluationEditorPage'
import { EntityFinder } from './containers/entity_finder/EntityFinder'
import QueryWrapperPlotNav from './containers/query_wrapper_plot_nav/QueryWrapperPlotNav'
import StandaloneQueryWrapper from './containers/table/StandaloneQueryWrapper'
import ErrorPage from './containers/ErrorPage'
import { EntityBadgeIcons } from './containers/EntityBadgeIcons'
import ShowDownloadV2 from './containers/download_list_v2/ShowDownloadV2'
import FullWidthAlert from './containers/FullWidthAlert'
import { HelpPopover } from './containers/HelpPopover'
import DirectProgrammaticDownload from './containers/download_list_v2/DirectProgrammaticDownload'
import { DownloadConfirmation } from './containers/download_list/DownloadConfirmation'
import UserProfileLinks from './containers/user_profile_links/UserProfileLinks'
import { SchemaDrivenAnnotationEditor } from './containers/entity/annotations/SchemaDrivenAnnotationEditor'
import { EntityModal } from './containers/entity/metadata/EntityModal'
import ProgrammaticTableDownload from './containers/table/table-top/ProgrammaticTableDownload'
import { SynapseToastContainer, displayToast } from './containers/ToastMessage'
import { ProgrammaticInstructionsModal } from './containers/ProgrammaticInstructionsModal'
import PlotlyWrapper from './containers/PlotlyWrapper'
import IconSvg from './containers/IconSvg'
import ChangePassword from './containers/ChangePassword'
import ForumSearch from './containers/ForumSearch'
import {
  SynapseContextProvider,
  SynapseContextConsumer,
  useSynapseContext,
} from './utils/SynapseContext'
import { DatasetItemsEditor } from './containers/table/datasets/DatasetItemsEditor'
import { EntityTypeIcon } from './containers/EntityIcon'
import { SkeletonButton } from './assets/skeletons/SkeletonButton'
import ReviewerDashboard from './containers/dataaccess/ReviewerDashboard'

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
  EntityBadgeIcons,
  DownloadCartPage,
  ShowDownloadV2,
  DownloadConfirmation,
  FullWidthAlert: FullWidthAlert,
  SchemaDrivenAnnotationEditor,
  SynapseNavDrawer,
  FavoritesPage,
  EntityModal,
  SynapseToastContainer,
  displayToast,
  IconSvg,
  UserProfileLinks,
  PlotlyWrapper,
  DatasetItemsEditor,
  EntityTypeIcon,
  HelpPopover,
  ProgrammaticTableDownload,
  DirectProgrammaticDownload,
  ProgrammaticInstructionsModal,
  SkeletonButton,
  QueryWrapperPlotNav,
  StandaloneQueryWrapper,
  ChangePassword,
  ForumSearch,
  ReviewerDashboard,
}

export { SynapseComponents, SynapseConstants, SynapseClient, SynapseContext }
