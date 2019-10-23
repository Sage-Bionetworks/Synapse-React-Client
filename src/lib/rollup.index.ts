import 'regenerator-runtime/runtime'
import { Facets } from './containers/Facets'
import MarkdownSynapse from './containers/MarkdownSynapse'
import QueryWrapperMenu from './containers/QueryWrapperMenu'
import QueryWrapper from './containers/QueryWrapper'
import StackedBarChart from './containers/StackedBarChart'
import SynapseTable from './containers/table/SynapseTable'
import UserCard from './containers/UserCard'
import Login from './containers/Login'
import QueryCount from './containers/QueryCount'
import EntityForm from './containers/EntityForm'
import CardContainer from './containers/CardContainer'
import CardContainerLogic from './containers/CardContainerLogic'
import ModalDownload from './containers/ModalDownload'
import StatisticsPlot from './containers/StatisticsPlot'
import './style/Index.css'
import { SynapseConstants, SynapseClient } from './utils/'

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
  StatisticsPlot,
}

export { SynapseClient, SynapseConstants, SynapseComponents }
