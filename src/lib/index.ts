import 'regenerator-runtime/runtime'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import { Facets } from './containers/Facets'
import MarkdownSynapse from './containers/MarkdownSynapse'
import QueryWrapper from './containers/QueryWrapper'
import QueryWrapperPlotNav from './containers/query_wrapper_plot_nav/QueryWrapperPlotNav'
import StackedBarChart from './containers/StackedBarChart'
import HasAccess from './containers/HasAccess'
import SynapseTable from './containers/table/SynapseTable'
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
import SynapsePlot from './containers/widgets/SynapsePlot'
import UserCardListRotate from './containers/UserCardListRotate'
import FeaturedDataTabs from './containers/home_page/featured-data/FeaturedDataTabs'
import UserCardListGroups from './containers/home_page/people/UserCardListGroups'
import { AccountLevelBadge } from './containers/AccountLevelBadge'
import DataSchema from './containers/data_schema'
import RenderIfInView from './containers/RenderIfInView'
import TermsAndConditions from './containers/TermsAndConditions'
import PageProgress from './containers/PageProgress'
import ProjectViewCarousel from './containers/home_page/project_view_carousel/ProjectViewCarousel'

// we exclude this from main.scss because react doesn't like importing an svg
// with a relative import.
import './style/components/_spinner.scss'
import { SynapseConstants, SynapseClient } from './utils'
import { EvaluationRoundEditorList } from './containers/evaluation_queues/EvaluationRoundEditorList'
import { EvaluationCard } from './containers/evaluation_queues/EvaluationCard'
import { EvaluationEditor } from './containers/evaluation_queues/EvaluationEditor'

const SynapseComponents = {
  Facets,
  Login,
  CardContainer,
  DataSchema,
  QueryWrapper,
  StackedBarChart,
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
  EvaluationRoundEditorList,
  EvaluationCard,
  EvaluationEditor,
  AccountLevelBadge,
  RenderIfInView,
  TermsAndConditions,
  PageProgress,
  ProjectViewCarousel,
}

export { SynapseClient, SynapseConstants, SynapseComponents }
