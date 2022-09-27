import 'regenerator-runtime/runtime'
import { SkeletonButton } from './assets/skeletons/SkeletonButton'
import { AccountLevelBadge } from './containers/AccountLevelBadge'
import ChangePassword from './containers/ChangePassword'
import { ReviewerDashboard } from './containers/dataaccess/ReviewerDashboard'
import { DownloadConfirmation } from './containers/download_list/DownloadConfirmation'
import DirectProgrammaticDownload from './containers/download_list_v2/DirectProgrammaticDownload'
import { DownloadCartPage } from './containers/download_list_v2/DownloadCartPage'
import ShowDownloadV2 from './containers/download_list_v2/ShowDownloadV2'
import { SchemaDrivenAnnotationEditor } from './containers/entity/annotations/SchemaDrivenAnnotationEditor'
import { EntityModal } from './containers/entity/metadata/EntityModal'
import { EntityBadgeIcons } from './containers/EntityBadgeIcons'
import EntityForm from './containers/EntityForm'
import { EntityTypeIcon } from './containers/EntityIcon'
import { EntityFinder } from './containers/entity_finder/EntityFinder'
import ErrorPage from './containers/ErrorPage'
import { EvaluationCard } from './containers/evaluation_queues/EvaluationCard'
import { EvaluationEditorPage } from './containers/evaluation_queues/EvaluationEditorPage'
import FavoritesPage from './containers/FavoritesPage'
import ForumSearch from './containers/ForumSearch'
import FullWidthAlert from './containers/FullWidthAlert'
import { HasAccessV2 as HasAccess } from './containers/HasAccessV2'
import { HelpPopover } from './containers/HelpPopover'
import ProjectViewCarousel from './containers/home_page/project_view_carousel/ProjectViewCarousel'
import IconSvg from './containers/IconSvg'
import Login from './containers/Login'
import LoginPage from './containers/LoginPage'
import PageProgress from './containers/PageProgress'
import { AccessTokenPage } from './containers/personal_access_token/AccessTokenPage'
import PlotlyWrapper from './containers/PlotlyWrapper'
import { ProgrammaticInstructionsModal } from './containers/ProgrammaticInstructionsModal'
import QueryWrapperPlotNav from './containers/query_wrapper_plot_nav/QueryWrapperPlotNav'
import StatisticsPlot from './containers/StatisticsPlot'
import { SynapseHomepage } from './containers/SynapseHomepage'
import { SynapseNavDrawer } from './containers/SynapseNavDrawer'
import { DatasetItemsEditor } from './containers/table/datasets/DatasetItemsEditor'
import StandaloneQueryWrapper from './containers/table/StandaloneQueryWrapper'
import ProgrammaticTableDownload from './containers/table/table-top/ProgrammaticTableDownload'
import TermsAndConditions from './containers/TermsAndConditions'
import { displayToast, SynapseToastContainer } from './containers/ToastMessage'
import { TrashCanList } from './containers/trash/TrashCanList'
import { OAuthManagement } from './containers/oauth/OAuthManagement'
import UserCard from './containers/UserCard'
import UserProfileLinks from './containers/user_profile_links/UserProfileLinks'
import CertificationQuiz from './containers/CertificationQuiz'
import { ProvenanceGraph } from './containers/provenance/ProvenanceGraph'
import { SynapseClient, SynapseConstants } from './utils'
import {
  SynapseContextConsumer,
  SynapseContextProvider,
  useSynapseContext,
} from './utils/SynapseContext'

// Also include scss in the bundle
import './style/main.scss'

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
  ProvenanceGraph,
  TrashCanList,
  OAuthManagement,
  CertificationQuiz,
}

// Include the version in the build
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-member-access
const SynapseReactClientVersion = require('../../package.json').version

export {
  SynapseReactClientVersion,
  SynapseComponents,
  SynapseConstants,
  SynapseClient,
  SynapseContext,
}
