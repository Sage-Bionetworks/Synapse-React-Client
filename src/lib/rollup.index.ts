import 'regenerator-runtime/runtime'
import UserCard from './containers/UserCard'
import Login from './containers/Login'
import StatisticsPlot from './containers/StatisticsPlot'
import EntityForm from './containers/EntityForm'
import HasAccess from './containers/HasAccess'
import DownloadListTable from './containers/download_list/DownloadListTable'
import './style/main.scss'
import { SynapseConstants, SynapseClient } from './utils/'

const SynapseComponents = {
  Login,
  EntityForm,
  UserCard,
  StatisticsPlot,
  HasAccess,
  DownloadListTable,
}

export { SynapseComponents, SynapseConstants, SynapseClient }
