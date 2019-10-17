import * as React from 'react'
import { SynapseVersion } from '../../lib/utils/jsonResponses/SynapseVersion'
import { SynapseClient } from '../../lib/utils/'
import QueryWrapperMenu, { MenuConfig } from '../../lib/containers/QueryWrapperMenu'
import Uploader from '../../lib/containers/Uploader'
import FileContentDownloadUploadDemo from '../../lib/containers/FileContentDownloadUploadDemo'
import StatisticsPlot from 'lib/containers/StatisticsPlot'

type DemoState = {
  token: string
  ownerId: string
  isLoading: boolean
  showMarkdown: boolean
  version: number
  tabOne: any
  tabTwo: any
  showTabOne: boolean
  userFormDataSynId?: string,
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
      tabOne:
      {
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
            sql: 'SELECT * FROM syn16787123',
          },
          {
            title: 'Data',
            facetDisplayValue: 'Study',
            facet: 'projectStatus',
            sql: 'SELECT createdBy FROM syn16787123',
          }
        ],
        rgbIndex: 2
      }
    ,
      tabTwo: {
        unitDescription: 'datum',
        tableConfiguration: {
          title: 'title',
          synapseId: 'syn16858331',
        },
        menuConfig: [
          {
            facet: 'assay',
            sql: 'SELECT * FROM syn16858331',
          },
          {
            facet: 'dataType',
            sql: 'SELECT id, fundingAgency, assay, diagnosis, dataType FROM syn16858331',
          },
          {
            facet: 'diagnosis',
            sql: 'SELECT id, fundingAgency, assay, diagnosis, dataType FROM syn16858331',
          }
        ] as MenuConfig[]
        ,
        rgbIndex: 5
      }
    }
    this.getVersion = this.getVersion.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.removeHandler = this.removeHandler.bind(this)
  }


  public onSubmitEntityForm() {
    this.entityFormRef.current.submitForm()
  }

  public onEntityFormSubmitted(synId: string) {
    this.setState({ userFormDataSynId: synId })
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
  
  /**
   * Update internal state
   * @param {Object} updatedState new state to be updated by the component
   */
  public handleChange(updatedState: {}): void {
    this.setState(updatedState)
  }

  public removeHandler(): void {
    this.setState({ showMarkdown: !this.state.showMarkdown })
  }
  
  public componentDidMount() {
    // Note:  All portals should do this once on the initial app load.
    // This looks for the session token cookie (HttpOnly, unable to directly access), and initialize the session if it does exists.
    SynapseClient.detectSSOCode()
    SynapseClient.getSessionTokenFromCookie()
    .then((sessionToken: any) => this.handleChange({ token: sessionToken }))
    .catch((error: any) => {
      console.error(error)
    })
    this.getVersion()
  }
  public render(): JSX.Element {
    let token: string | undefined = ''
    token = ''
    return (
      <div>
        <p className="App-intro text-center">Synapse production version: {this.state.version}</p>
        {
          (this.state.token && this.state.token !== '') &&
          <div className="container">
            <h5>Upload File(s) Demo</h5>
            <Uploader
              token={this.state.token!}
              parentContainerId="syn18987891"
            />
            <hr />
          </div>
        }
        {
          (this.state.token && this.state.token !== '') &&
          <div className="container">
            <h5>Download File Content Demo (syn12196718)</h5>
            <FileContentDownloadUploadDemo
              token={this.state.token!}
              targetEntityId="syn12196718"
            />
            <hr />
          </div>
        }
        {
          (this.state.token && this.state.token !== '') &&
          <div className="container">
            <h5>Project Statistics Demo</h5>
            <StatisticsPlot
              token={this.state.token!}
              request={ {
                concreteType: 'org.sagebionetworks.repo.model.statistics.ProjectFilesStatisticsRequest',
                objectId: 'syn5585645',
                fileDownloads: true,
                fileUploads: true
              }}
            />
            <hr />
          </div>
        }
        <div className="container">
          <button
            className="btn btn-default"
            onClick={() => {this.setState({showTabOne: !this.state.showTabOne})}}
          >
            toggle config for query wrapper menu
          </button>
          <QueryWrapperMenu
            isConsistent={true}
            name={'Demo'}
            token={SynapseClient.IS_OUTSIDE_SYNAPSE_ORG ? token! : this.state.token!}
            unitDescription={this.state.showTabOne ? this.state.tabOne.unitDescription : this.state.tabTwo.unitDescription}
            tableConfiguration={this.state.showTabOne ? this.state.tabOne.tableConfiguration : this.state.tabTwo.tableConfiguration}
            menuConfig={this.state.showTabOne ? this.state.tabOne.menuConfig : this.state.tabTwo.menuConfig}
            rgbIndex={this.state.showTabOne ? this.state.tabOne.rgbIndex : this.state.tabTwo.rgbIndex}
            stackedBarChartConfiguration={
              {
                loadingScreen: <div/>
              }
            }
          />
        </div>
      </div>
    )
  }
}
export default Demo
