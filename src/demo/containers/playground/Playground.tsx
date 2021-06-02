import * as React from 'react'
import { Link, Route } from 'react-router-dom'
import CardContainerLogicDemo from './CardContainerLogicDemo'
import SearchDemo from './SearchDemo'
import ModalDownloadDemo from './ModalDownloadDemo'
import ShowDownloadDemo from './ShowDownloadDemo'
import FormServicesIntegrationDemo from './FormServicesIntegrationDemo'
import DownloadListTable from '../../../lib/containers/download_list/DownloadListTable'
import { WidgetDemo } from './WidgetDemo'
import { RouteChildrenProps } from 'react-router'
import { AccessRequirementDemo } from './AccessRequirementDemo'
import TemplateComponentDemo from './TemplateComponentDemo'
import Resources from '../../../lib/containers/home_page/resources/Resources'
import { SynapsePlotDemo } from './SynapsePlotDemo'
import { ExternalFileHandleLink } from '../../../lib/containers/ExternalFileHandleLink'
import ColorPaletteInspector from './ColorPaletteInspector'

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
          <Link to={`${match.url}/ColorPalette`}>Inspect Color Palette</Link>
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
          <Link to={`${match.url}/SynapsePlotDemo`}>SynapsePlotDemo</Link>
        </li>
        <li>
          <Link to={`${match.url}/ExternalFileHandleLink`}>
            ExternalFileHandleLink
          </Link>
        </li>
      </ul>
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
        path={`${match.url}/SynapsePlotDemo`}
        component={() => <SynapsePlotDemo token={token} />}
      />

      <Route
        exact={true}
        path={`${match.url}/ResourcesDemo`}
        component={() => (
          <div className="container">
            {' '}
            <Resources entityId="syn22311127" />{' '}
          </div>
        )}
      />

      <Route
        exact={true}
        path={`${match.url}/ExternalFileHandleLink`}
        component={() => (
          <ExternalFileHandleLink synId={'syn22276050'} />
        )}
      />

      <Route
        exact={true}
        path={`${match.url}/ColorPalette`}
        component={() => <ColorPaletteInspector />}
      />

      <Route exact={true} path={match.path} component={() => <div />} />
    </div>
  )
}

export default App
