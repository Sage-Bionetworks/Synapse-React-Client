import * as React from 'react'
import { Link, Route } from 'react-router-dom'
import QueryWrapperMenuDemo from './QueryWrapperMenuDemo'
import CardContainerLogicDemo from './CardContainerLogicDemo'
import SearchDemo from './SearchDemo'
import ModalDownloadDemo from './ModalDownloadDemo'
import UserCardDemo from './UserCardDemo'
import MarkdownSynapseDemo from './MarkdownSynapseDemo'
import ShowDownloadDemo from './ShowDownloadDemo'
import { NewsFeedDemo } from './NewsFeedDemo'
import { SingleNewsFeedPostDemo } from './SingleNewsFeedPostDemo'
import FormServicesIntegrationDemo from './FormServicesIntegrationDemo'
import QueryWrapperPlotNavDemo from './QueryWrapperPlotNavDemo'
import DownloadListTable from 'lib/containers/download_list/DownloadListTable'
import { WidgetDemo } from './WidgetDemo'
import { RouteChildrenProps } from 'react-router'
import { AccessRequirementDemo } from './AccessRequirementDemo'
import TemplateComponentDemo from './TemplateComponentDemo'
import { ThemesPlotDemo } from './ThemesPlotDemo'

/**
 * Demo of features that can be used from src/demo/utils/SynapseClient
 * module
 */
const App = ({
  match,
  token,
}: {
  match?: RouteChildrenProps['match']
  token: string
}) => {
  if (!match) {
    return <div />
  }
  return (
    <div>
      <h2>Links to components under development </h2>
      <ul>
        <li>
          <Link to={`${match.url}/QueryWrapperMenuDemo`}>
            QueryWrapperMenuDemo
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/QueryWrapperPlotNavDemo`}>
            QueryWrapperPlotNavDemo
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/SearchDemo`}>SearchDemo</Link>
        </li>
        <li>
          <Link to={`${match.url}/CardContainerLogicDemo`}>
            CardContainerLogicDemo
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/UserBadgeDemo`}>UserBadgeDemo</Link>
        </li>
        <li>
          <Link to={`${match.url}/MarkdownSynapseDemo`}>
            MarkdownSynapseDemo
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/NewsFeedDemo`}>NewsFeedDemo</Link>
        </li>
        <li>
          <Link to={`${match.url}/SingleNewsFeedPostDemo?tag=centenarians`}>
            SingleNewsFeedPostDemo
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/FormServicesIntegrationDemo`}>
            FormServicesIntegrationDemo
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/ModalDownloadDemo`}>ModalDownload</Link>
        </li>
        <li>
          <Link to={`${match.url}/DownloadListTableDemo`}>
            DownloadListTableDemo
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/WidgetDemo`}>WidgetDemo</Link>
        </li>
        <li>
          <Link to={`${match.url}/AccessRequirementDemo`}>
            AccessRequirementDemo
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/TemplateComponentDemo`}>
            TemplateComponentDemo
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/ShowDownloadDemo`}>ShowDownloadDemo</Link>
        </li>
        <li>
          <Link to={`${match.url}/ThemesPlotDemo`}>ThemesPlotDemo</Link>
        </li>
      </ul>

      <Route
        exact={true}
        path={`${match.url}/QueryWrapperMenuDemo`}
        render={() => <QueryWrapperMenuDemo token={token} rgbIndex={0} />}
      />

      <Route
        exact={true}
        path={`${match.url}/QueryWrapperPlotNavDemo`}
        render={() => <QueryWrapperPlotNavDemo token={token} />}
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
        component={() => <UserCardDemo />}
      />

      <Route
        exact={true}
        path={`${match.url}/MarkdownSynapseDemo`}
        component={() => <MarkdownSynapseDemo token={token} />}
      />

      <Route
        exact={true}
        path={`${match.url}/NewsFeedDemo`}
        component={() => <NewsFeedDemo />}
      />
      <Route
        exact={true}
        path={`${match.url}/SingleNewsFeedPostDemo`}
        component={() => <SingleNewsFeedPostDemo />}
      />
      <Route
        exact={true}
        path={`${match.url}/FormServicesIntegrationDemo`}
        component={() => <FormServicesIntegrationDemo />}
      />
      <Route
        exact={true}
        path={`${match.url}/ModalDownloadDemo`}
        component={() => <ModalDownloadDemo />}
      />

      <Route
        exact={true}
        path={`${match.url}/DownloadListTableDemo`}
        component={() => (
          <div className="container download-list-demo">
            <div className="col-xs-10">
              <DownloadListTable
                token={token}
                listUpdatedCallback={() => {
                  console.log('DownloadList updated')
                }}
              />
            </div>
          </div>
        )}
      />

      <Route
        exact={true}
        path={`${match.url}/WidgetDemo`}
        component={() => <WidgetDemo token={token} />}
      />

      <Route
        exact={true}
        path={`${match.url}/AccessRequirementDemo`}
        component={() => <AccessRequirementDemo token={token} />}
      />

      <Route
        exact={true}
        path={`${match.url}/TemplateComponentDemo`}
        component={() => <TemplateComponentDemo />}
      />

      <Route
        exact={true}
        path={`${match.url}/ShowDownloadDemo`}
        component={() => <ShowDownloadDemo token={token} />}
      />

      <Route
        exact={true}
        path={`${match.url}/ThemesPlotDemo`}
        component={ThemesPlotDemo}
      />

      <Route exact={true} path={match.path} component={() => <div />} />
    </div>
  )
}

export default App
