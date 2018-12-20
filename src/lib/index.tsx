import { Facets } from './containers/Facets'
import MarkdownSynapse from './containers/MarkdownSynapse'
import QueryWrapperMenu from './containers/QueryWrapperMenu'
import QueryWrapper from './containers/QueryWrapper'
import StackedRowHomebrew from './containers/StackedRowHomebrew'
import StaticQueryWrapper from './containers/StaticQueryWrapper'
import SynapseTable from './containers/SynapseTable'
import SynapseTableCardView from './containers/SynapseTableCardView'
import './style/Cards.css'
import './style/Portal.css'
import * as SynapseClient from './utils/SynapseClient'
import * as SynapseConstants from './utils/SynapseConstants'

const SynapseComponents = {
  Facets,
  QueryWrapper,
  StackedRowHomebrew,
  StaticQueryWrapper,
  SynapseTable,
  SynapseTableCardView,
  QueryWrapperMenu,
  Markdown: MarkdownSynapse
}

export { SynapseClient, SynapseConstants, SynapseComponents }
