import 'regenerator-runtime/runtime'
import UserCard from './containers/UserCard'
import Login from './containers/Login'
import StatisticsPlot from './containers/StatisticsPlot'
import EntityForm from './containers/EntityForm'
import QueryWrapperMenu from './containers/QueryWrapperMenu'
import './style/main.scss'
import { SynapseConstants, SynapseClient } from './utils/'

const SynapseComponents = {
  Login,
  EntityForm,
  QueryWrapperMenu,
  UserCard,
  StatisticsPlot,
}

export { SynapseClient, SynapseConstants, SynapseComponents }
