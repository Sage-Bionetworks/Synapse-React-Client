import 'regenerator-runtime/runtime'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import { Facets } from './containers/Facets'
import MarkdownSynapse from './containers/MarkdownSynapse'
import QueryWrapperMenu from './containers/QueryWrapperMenu'
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
import Resources from './containers/home_page/resources/Resources'
import NewsFeedMenu from './containers/NewsFeedMenu'
import RssFeedCards from './containers/RssFeedCards'
import ThemesPlot from './containers/widgets/themes-plot/ThemesPlot'
import UpsetPlot from './containers/UpsetPlot'
import SynapsePlot from './containers/widgets/SynapsePlot'
import UserCardListRotate from './containers/UserCardListRotate'
// we exclude this from main.scss because react doesn't like importing an svg
// with a relative import.
import './style/components/_spinner.scss'
import { SynapseConstants, SynapseClient } from './utils'

const SynapseComponents = {
  Facets,
  Login,
  CardContainer,
  QueryWrapper,
  StackedBarChart,
  SynapseTable,
  QueryWrapperMenu,
  CardContainerLogic,
  EntityForm,
  UserCard,
  QueryCount,
  Markdown: MarkdownSynapse,
  ModalDownload,
  NewsFeedMenu,
  SynapseFormWrapper,
  SynapseFormSubmissionsGrid,
  HasAccess,
  DownloadListTable,
  ThemesPlot,
  ShowDownload,
  QueryWrapperPlotNav,
  ExternalFileHandleLink,
  Goals,
  Resources,
  UpsetPlot,
  SynapsePlot,
  RssFeedCards,
  UserCardListRotate,
}

export { SynapseClient, SynapseConstants, SynapseComponents }
