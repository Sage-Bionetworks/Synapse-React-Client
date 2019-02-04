import { Facets } from './containers/Facets'
import MarkdownSynapse from './containers/MarkdownSynapse'
import QueryWrapperMenu from './containers/QueryWrapperMenu'
import QueryWrapper from './containers/QueryWrapper'
import StackedBarChart from './containers/StackedBarChart'
import StaticQueryWrapper from './containers/StaticQueryWrapper'
import SynapseTable from './containers/SynapseTable'
import Login from './containers/Login'
import CardContainer from './containers/CardContainer'
import CardContainerLogic from './containers/CardContainerLogic'
import './style/Cards.css'
import './style/Portal.css'
import { SynapseClient, SynapseConstants } from './utils/'

const SynapseComponents = {
  Facets,
  Login,
  QueryWrapper,
  StackedBarChart,
  StaticQueryWrapper,
  SynapseTable,
  CardContainer,
  QueryWrapperMenu,
  CardContainerLogic,
  Markdown: MarkdownSynapse
}

export { SynapseClient, SynapseConstants, SynapseComponents }
