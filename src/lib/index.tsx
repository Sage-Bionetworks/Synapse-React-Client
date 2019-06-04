import 'react-app-polyfill/ie11'
import { Facets } from './containers/Facets'
import MarkdownSynapse from './containers/MarkdownSynapse'
import QueryWrapperMenu from './containers/QueryWrapperMenu'
import QueryWrapper from './containers/QueryWrapper'
import StackedBarChart from './containers/StackedBarChart'
import SynapseTable from './containers/SynapseTable'
import UserCard from './containers/UserCard'
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
  SynapseTable,
  CardContainer,
  QueryWrapperMenu,
  CardContainerLogic,
  UserCard,
  Markdown: MarkdownSynapse
}

export { SynapseClient, SynapseConstants, SynapseComponents }
