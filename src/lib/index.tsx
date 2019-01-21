import { Facets } from './containers/Facets'
import MarkdownSynapse from './containers/MarkdownSynapse'
import QueryWrapperMenu from './containers/QueryWrapperMenu'
import QueryWrapper from './containers/QueryWrapper'
import StackedBarChart from './containers/StackedBarChart'
import StaticQueryWrapper from './containers/StaticQueryWrapper'
import SynapseTable from './containers/SynapseTable'
import SynapseTableCardView from './containers/SynapseTableCardView'
import './style/Cards.css'
import './style/Portal.css'
import { SynapseClient, SynapseConstants } from './utils/'

const SynapseComponents = {
  Facets,
  QueryWrapper,
  StackedBarChart,
  StaticQueryWrapper,
  SynapseTable,
  SynapseTableCardView,
  QueryWrapperMenu,
  Markdown: MarkdownSynapse
}

export { SynapseClient, SynapseConstants, SynapseComponents }
