import * as React from 'react'
import { Link, Route, match } from 'react-router-dom'
import QueryWrapperMenuDemo from './QueryWrapperMenuDemo'
import CardContainerLogicDemo from './CardContainerLogicDemo'
import SearchDemo from './SearchDemo'
import ModalDownloadDemo from './ModalDownloadDemo'
import UserCardDemo from './UserCardDemo'
import { MarkdownSynapseDemo } from './MarkdownSynapseDemo'
import { NewsFeedDemo } from './NewsFeedDemo'
import FormServicesIntegrationDemo from './FormServicesIntegrationDemo'

/**
 * Demo of features that can be used from src/demo/utils/SynapseClient
 * module
 */
const App = ({ match }: { match: match }) => {
  return (
      <div>
        <h2>Links to components under development </h2>
        <ul>
          <li>
            <Link to={`${match.url}/QueryWrapperMenuDemo`}>QueryWrapperMenuDemo</Link>
          </li>
          <li>
            <Link to={`${match.url}/SearchDemo`}>SearchDemo</Link>
          </li>
          <li>
            <Link to={`${match.url}/CardContainerLogicDemo`}>CardContainerLogicDemo</Link>
          </li>
          <li>
            <Link to={`${match.url}/UserBadgeDemo`}>UserBadgeDemo</Link>
          </li>
          <li>
            <Link to={`${match.url}/MarkdownSynapseDemo`}>MarkdownSynapseDemo</Link>
          </li>
          <li>
            <Link to={`${match.url}/NewsFeedDemo`}>NewsFeedDemo</Link>
          </li>
          <li>
            <Link to={`${match.url}/FormServicesIntegrationDemo`}>FormServicesIntegrationDemo</Link>
          </li>

          <li>
            <Link to={`${match.url}/ModalDownloadDemo`}>ModalDownload</Link>
          </li>
        </ul>

        <Route
          exact={true}
          path={`${match.url}/QueryWrapperMenuDemo`}
          render={() => <QueryWrapperMenuDemo rgbIndex={0}/>}
        />

        <Route
          exact={true}
          path={`${match.url}/SearchDemo`}
          render={() => <SearchDemo />}
        />

        <Route
          exact={true}
          path={`${match.url}/CardContainerLogicDemo`}
          component={CardContainerLogicDemo}
        />

        <Route
          exact={true}
          path={`${match.url}/UserBadgeDemo`}
          component={() => <UserCardDemo/>}
        />

        <Route
          exact={true}
          path={`${match.url}/MarkdownSynapseDemo`}
          component={() => <MarkdownSynapseDemo/>}
        />
        <Route
          exact={true}
          path={`${match.url}/NewsFeedDemo`}
          component={() => <NewsFeedDemo/>}
        />
        <Route
          exact={true}
          path={`${match.url}/FormServicesIntegrationDemo`}
          component={() => <FormServicesIntegrationDemo/>}
        />
        <Route
          exact={true}
          path={`${match.url}/ModalDownloadDemo`}
          component={() => <ModalDownloadDemo/>}
        />

        <Route
          exact={true}
          path={match.path}
          component={() => <div/>}
        />

      </div>
  )
}

export default App
