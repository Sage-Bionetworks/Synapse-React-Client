import 'regenerator-runtime/runtime'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import MarkdownSynapse from './containers/MarkdownSynapse'
import { QueryWrapper } from './containers/QueryWrapper'
import QueryWrapperPlotNav from './containers/query_wrapper_plot_nav/QueryWrapperPlotNav'
import StackedBarChart from './containers/StackedBarChart'
import HasAccess from './containers/HasAccess'
import SynapseTable from './containers/table/SynapseTable'
import StandaloneQueryWrapper from './containers/table/StandaloneQueryWrapper'
import UserCard from './containers/UserCard'
import Login from './containers/Login'
import QueryCount from './containers/QueryCount'
import EntityForm from './containers/EntityForm'
import CardContainer from './containers/CardContainer'
import { ExternalFileHandleLink } from './containers/ExternalFileHandleLink'
import SynapseFormWrapper from './containers/synapse_form_wrapper/SynapseFormWrapper'
import SynapseFormSubmissionsGrid from './containers/synapse_form_wrapper/SynapseFormSubmissionsGrid'
import CardContainerLogic from './containers/CardContainerLogic'
import ModalDownload from './containers/ModalDownload'
import ShowDownload from './containers/download_list/ShowDownload'
import DownloadListTable from './containers/download_list/DownloadListTable'
import Goals from './containers/home_page/goals/Goals'
import Programs from './containers/home_page/programs/Programs'
import Resources from './containers/home_page/resources/Resources'
import RssFeedCards from './containers/RssFeedCards'
import TableFeedCards from './containers/TableFeedCards'
import ThemesPlot from './containers/widgets/themes-plot/ThemesPlot'
import UpsetPlot from './containers/UpsetPlot'
import FileUpload from './containers/FileUpload'
import SynapsePlot from './containers/widgets/SynapsePlot'
import UserCardListRotate from './containers/UserCardListRotate'
import SubsectionRowRenderer from './containers/SubsectionRowRenderer'
import FeaturedDataTabs from './containers/home_page/featured-data/FeaturedDataTabs'
import FeaturedToolsList from './containers/home_page/featured_tools/FeaturedToolsList'
import UserCardListGroups from './containers/home_page/people/UserCardListGroups'
import { AccountLevelBadge } from './containers/AccountLevelBadge'
import RenderIfInView from './containers/RenderIfInView'
import TermsAndConditions from './containers/TermsAndConditions'
import PageProgress from './containers/PageProgress'
import ProjectViewCarousel from './containers/home_page/project_view_carousel/ProjectViewCarousel'
import EntityFinder from './containers/entity_finder/EntityFinder'
import ExperimentalMode from './containers/ExperimentalMode'
import { EntityBadgeIcons } from './containers/EntityBadgeIcons'
import ProgrammaticTableDownload from './containers/table/table-top/ProgrammaticTableDownload'
import UserProfileLinks from './containers/user_profile_links/UserProfileLinks'
import ChangePassword from './containers/ChangePassword'
import {
  SynapseContextProvider,
  SynapseContextConsumer,
  useSynapseContext,
} from './utils/SynapseContext'
import { MarkdownPopover } from './containers/MarkdownPopover'

// we exclude this from main.scss because react doesn't like importing an svg
// with a relative import.
import './style/components/_spinner.scss'
import { SynapseConstants, SynapseClient } from './utils'
import { EvaluationCard } from './containers/evaluation_queues/EvaluationCard'
import { EvaluationEditorPage } from './containers/evaluation_queues/EvaluationEditorPage'
import { DownloadCartPage } from './containers/download_list_v2/DownloadCartPage'
import ShowDownloadV2 from './containers/download_list_v2/ShowDownloadV2'
import FullWidthAlert from './containers/FullWidthAlert'
import { SynapseToastContainer, displayToast } from './containers/ToastMessage'
import Typography from './utils/typography/Typography'

const SynapseContext = {
  SynapseContextProvider,
  SynapseContextConsumer,
  useSynapseContext,
}

const SynapseComponents = {
  Login,
  CardContainer,
  QueryWrapper,
  StackedBarChart,
  StandaloneQueryWrapper,
  SynapseTable,
  CardContainerLogic,
  EntityForm,
  UserCard,
  QueryCount,
  Markdown: MarkdownSynapse,
  ModalDownload,
  SynapseFormWrapper,
  SynapseFormSubmissionsGrid,
  HasAccess,
  DownloadListTable,
  ThemesPlot,
  ShowDownload,
  QueryWrapperPlotNav,
  ExternalFileHandleLink,
  Programs,
  Goals,
  Resources,
  UpsetPlot,
  SynapsePlot,
  RssFeedCards,
  TableFeedCards,
  UserCardListRotate,
  FeaturedDataTabs,
  UserCardListGroups,
  EvaluationCard,
  EvaluationEditorPage,
  AccountLevelBadge,
  RenderIfInView,
  TermsAndConditions,
  PageProgress,
  ProjectViewCarousel,
  EntityFinder,
  ExperimentalMode,
  EntityBadgeIcons,
  DownloadCartPage,
  ShowDownloadV2,
  FullWidthAlert: FullWidthAlert,
  SynapseToastContainer,
  displayToast,
  UserProfileLinks,
  MarkdownPopover,
  FeaturedToolsList,
  SubsectionRowRenderer,
  ProgrammaticTableDownload,
  ChangePassword,
  FileUpload,
}

export {
  SynapseClient,
  SynapseConstants,
  SynapseComponents,
  SynapseContext,
  Typography,
}
