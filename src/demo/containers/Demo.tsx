import * as React from 'react'
import { SynapseVersion } from '../../lib/utils/jsonResponses/SynapseVersion'
import { SynapseClient } from '../../lib/utils/'
import QueryWrapperMenu, {
  MenuConfig,
} from '../../lib/containers/QueryWrapperMenu'
import Uploader from '../../lib/containers/Uploader'
import FileContentDownloadUploadDemo from '../../lib/containers/FileContentDownloadUploadDemo'
import StatisticsPlot from 'lib/containers/StatisticsPlot'
import {testDownloadSpeed} from '../../lib/utils/DownloadSpeedTest'

type DemoState = {
  token: string | null
  ownerId: string
  isLoading: boolean
  showMarkdown: boolean
  version: number
  tabOne: any
  tabTwo: any
  showTabOne: boolean
  userFormDataSynId?: string
  estimatedDownloadBytesPerSecond?: number
}

/**
 * Demo of features that can be used from src/demo/utils/SynapseClient
 * module

 */
class Demo extends React.Component<{}, DemoState> {
  entityFormRef: any
  /**
   * Maintain internal state of user session
   */
  constructor(props: any) {
    super(props)
    this.entityFormRef = React.createRef()
    this.state = {
      isLoading: true,
      ownerId: '',
      showMarkdown: true,
      token: '',
      version: 0,
      showTabOne: true,
      tabOne: {
        unitDescription: 'datum',
        tableConfiguration: {
          title: 'title',
          synapseId: 'syn16787123',
        },
        menuConfig: [
          {
            title: 'Data',
            facetDisplayValue: 'Organism',
            facet: 'dataStatus',
            sql: 'SELECT studyStatus, dataStatus FROM syn16787123',
          },
          {
            title: 'Data',
            facetDisplayValue: 'Study',
            facet: 'projectStatus',
            sql: 'SELECT * FROM syn16787123',
          },
          {
            title: 'File Add To List Demo',
            facetDisplayValue: 'Name',
            facet: 'name',
            sql: 'SELECT name, grant FROM syn11346063',
          },
          {
            title: 'File Add To List Demo with Where Clause',
            facetDisplayValue: 'Name',
            facet: 'consortium',
            sql: 'SELECT name, grant FROM syn11346063 WHERE ( ( "consortium" IS NULL ) )',
          },
        ],
        rgbIndex: 2,
      },
      tabTwo: {
        unitDescription: 'datum',
        tableConfiguration: {
          title: 'title',
          synapseId: 'syn16858331',
          showAccessColumn: true,
        },
        menuConfig: [
          {
            facet: 'assay',
            sql: 'SELECT * FROM syn21156352',
          },
          {
            facet: 'dataType',
            sql:
              'SELECT id, fundingAgency, assay, diagnosis, dataType FROM syn16858331',
          },
          {
            facet: 'diagnosis',
            sql:
              'SELECT id, fundingAgency, assay, diagnosis, dataType FROM syn16858331',
          },
          {
            facet: 'individuals',
            sql:
              'SELECT diagnosis, sex, dataType, assay, count(distinct(id)) as "Files", count(distinct(specimenID)) as "Specimens", count(distinct(individualID)) as "Individuals" FROM syn11346063 GROUP BY 1,2,3,4 ORDER BY 1 DESC',
          },
        ] as MenuConfig[],
        rgbIndex: 5,
      },
    }
    this.getVersion = this.getVersion.bind(this)
    this.removeHandler = this.removeHandler.bind(this)
    this.onRunDownloadSpeedTest = this.onRunDownloadSpeedTest.bind(this)
  }

  public onSubmitEntityForm() {
    this.entityFormRef.current.submitForm()
  }

  public onEntityFormSubmitted(synId: string) {
    this.setState({ userFormDataSynId: synId })
  }

  public onRunDownloadSpeedTest() {
    const { token } = this.state
    if (token) {
      testDownloadSpeed(token).then((estimatedDownloadBytesPerSecond:number) => {
        this.setState({ estimatedDownloadBytesPerSecond })
      }).catch((error: any) => {
        console.error('estimate download speed failed', error)
      })
    }
  }

  /**
   * Get the current version of Synapse
   */
  public getVersion(): void {
    // IMPORTANT: Your component should have a property (with default) to change the endpoint.  This is necessary for Synapse.org integration.
    // Pass your endpoint through to the rpc call:
    // SynapseClient.getVersion('https://repo-staging.prod.sagebase.org')
    SynapseClient.getVersion()
      .then((data: SynapseVersion) => this.setState({ version: data.version }))
      .catch((error: any) => {
        // Handle HTTPError.  Has statusCode and message.
        console.error('Get version failed', error)
      })
  }

  public removeHandler(): void {
    this.setState({ showMarkdown: !this.state.showMarkdown })
  }

  public componentDidMount() {
    // Note:  All portals should do this once on the initial app load.
    // This looks for the session token cookie (HttpOnly, unable to directly access), and initialize the session if it does exists.
    SynapseClient.detectSSOCode()
    SynapseClient.getSessionTokenFromCookie()
      .then(sessionToken => {
        this.setState({
          token: sessionToken,
        })
      })
      .catch((error: any) => {
        console.error(error)
      })
    this.getVersion()
  }
  public render(): JSX.Element {
    const { token, estimatedDownloadBytesPerSecond } = this.state
    return (
      <div>
        <p className="App-intro text-center">
          Synapse production version: {this.state.version}
        </p>
        {token && (
          <div className="container">
            <button
              className="btn btn-default"
              onClick={this.onRunDownloadSpeedTest}
            >
              Run Download Speed Test
            </button>
            <hr />
          </div>
        )}
        {estimatedDownloadBytesPerSecond && (
            <div className="container">
              <h5>Estimated Download Speed: {(estimatedDownloadBytesPerSecond/1000000).toFixed(2)} MBps</h5>
              <hr />
            </div>
          )
        }
        {token && (
          <div className="container">
            <h5>Upload File(s) Demo</h5>
            <Uploader token={token} parentContainerId="syn18987891" />
            <hr />
          </div>
        )}
        {token && (
          <div className="container">
            <h5>Download File Content Demo (syn12196718)</h5>
            <FileContentDownloadUploadDemo
              token={token}
              targetEntityId="syn12196718"
            />
            <hr />
          </div>
        )}
        {token && (
          <div className="container">
            <h5>Project Statistics Demo</h5>
            <StatisticsPlot
              token={token}
              request={{
                concreteType:
                  'org.sagebionetworks.repo.model.statistics.ProjectFilesStatisticsRequest',
                objectId: 'syn5585645',
                fileDownloads: true,
                fileUploads: true,
              }}
            />
            <hr />
          </div>
        )}
        <div className="container">
          <button
            className="btn btn-default"
            onClick={() => {
              this.setState({ showTabOne: !this.state.showTabOne })
            }}
          >
            toggle config for query wrapper menu
          </button>
          <QueryWrapperMenu
            isConsistent={true}
            name={'Demo'}
            token={
              SynapseClient.IS_OUTSIDE_SYNAPSE_ORG ? token! : this.state.token!
            }
            unitDescription={
              this.state.showTabOne
                ? this.state.tabOne.unitDescription
                : this.state.tabTwo.unitDescription
            }
            tableConfiguration={
              this.state.showTabOne
                ? this.state.tabOne.tableConfiguration
                : this.state.tabTwo.tableConfiguration
            }
            menuConfig={
              this.state.showTabOne
                ? this.state.tabOne.menuConfig
                : this.state.tabTwo.menuConfig
            }
            rgbIndex={
              this.state.showTabOne
                ? this.state.tabOne.rgbIndex
                : this.state.tabTwo.rgbIndex
            }
            stackedBarChartConfiguration={{
              loadingScreen: <div />,
            }}
          />
        </div>
      </div>
    )
  }
}
export default Demo
