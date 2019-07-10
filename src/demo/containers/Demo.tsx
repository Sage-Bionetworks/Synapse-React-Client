import * as React from 'react'
import Login from '../../lib/containers/Login'
import { SynapseVersion } from '../../lib/utils/jsonResponses/SynapseVersion'
import { SynapseClient, SynapseConstants } from '../../lib/utils/'
import './App.css'
import EntityForm from '../../lib/containers/EntityForm'
import QueryWrapperMenu, { MenuConfig } from '../../lib/containers/QueryWrapperMenu'
import Uploader from '../../lib/containers/Uploader'
import FileContentDownloadUploadDemo from '../../lib/containers/FileContentDownloadUploadDemo'

type DemoState = {
  token: string
  ownerId: string
  isLoading: boolean
  showMarkdown: boolean
  version: number
  cardSelection: string
  cardSql: string
  tabOne: any
  tabTwo: any
  showTabOne: boolean
  userFormDataSynId?: string
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
      cardSql: 'SELECT * FROM syn16859448',
      cardSelection: SynapseConstants.TOOL,
      showTabOne: false,
      tabOne:
      {
        menuConfig: [
          {
            title: 'Data',
            facetDisplayValue: 'Organism',
            facetName: 'dataStatus',
            sql: 'SELECT projectStatus, dataStatus, tumorType, diseaseFocus FROM syn16787123',
            synapseId: 'syn16787123',
            unitDescription: 'dataStatus'
          },
          {
            title: 'Data',
            facetDisplayValue: 'Study',
            facetName: 'projectStatus',
            sql: 'SELECT * FROM syn16787123',
            synapseId: 'syn16787123',
            unitDescription: 'projectStatus',
            visibleColumnCount: 5,
          }
        ],
        rgbIndex: 2
      }
    ,
      tabTwo: {
        menuConfig: [
          {
            facetName: 'assay',
            sql:
            // tslint:disable-next-line:max-line-length
            'SELECT * FROM syn16858331',
            // facetAliases: {
            //   id: 'File ID',
            //   fundingAgency: 'Funding Agency',
            //   assay: 'Assay',
            //   dataType: 'Data Type'
            // },
            synapseId: 'syn16858331',
            title: 'title',
            unitDescription: 'datum'
          },
          {
            facetName: 'dataType',
            sql: 'SELECT id, fundingAgency, assay, diagnosis, dataType FROM syn16858331',
          },
          {
            facetName: 'diagnosis',
            sql: 'SELECT id, fundingAgency, assay, diagnosis, dataType FROM syn16858331',
            title: 'title'
          }
        ] as MenuConfig[]
        ,
        rgbIndex: 5
      }
    }
    this.makeSampleQueryCall = this.makeSampleQueryCall.bind(this)
    this.getVersion = this.getVersion.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.removeHandler = this.removeHandler.bind(this)
    this.handleCardSelection = this.handleCardSelection.bind(this)
    this.onSubmitEntityForm = this.onSubmitEntityForm.bind(this)
    this.onEntityFormSubmitted = this.onEntityFormSubmitted.bind(this)
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
   * Make a query on synapse
   */
  public makeSampleQueryCall(): void {
    // Example table (view) query.
    // See https://docs.synapse.org/rest/POST/entity/id/table/query/async/start.html
    const QUERY = {
      entityId: 'syn12335586',
      partMask:
        SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
        SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
        SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
        SynapseConstants.BUNDLE_MASK_QUERY_FACETS,
      query: {
        includeEntityEtag: true,
        isConsistent: false,
        limit: 100,
        offset: 0,
        sql: 'SELECT * FROM syn12335586'
      },
    }
    SynapseClient.getQueryTableResults(QUERY)
      .then((data: any) => console.log(data))
      .catch((error: any) => {
        console.error(error)
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

  public handleCardSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    let sql = ''
    switch (value) {
      case SynapseConstants.AMP_STUDY:
        sql = 'SELECT * FROM syn9886254'
        break
      case SynapseConstants.AMP_PROJECT:
        sql = 'SELECT * FROM syn17024229'
        break
      case SynapseConstants.AMP_CONSORTIUM:
        sql = 'SELECT * FROM syn17024173'
        break
      case SynapseConstants.DATASET:
        sql = 'SELECT * FROM syn16859580'
        break
      case SynapseConstants.TOOL:
        sql = 'SELECT * FROM syn16859448'
        break
      // peculiar edge case here that breaks the app..
      // react doesn't set state when this sql statement is used below
      // case SynapseConstants.FUNDER:
      //   sql = 'SELECT * FROM syn16858699'
      //   break
      case SynapseConstants.PUBLICATION:
        sql = 'SELECT * FROM syn16857542'
        break
    }
    this.setState(
      {
        cardSql: sql,
        cardSelection: value
      }
    )
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
  }
  public render(): JSX.Element {
    let token: string | undefined = ''
    token = ''
    const userFormSynLink = `https://www.synapse.org/#!Synapse:${this.state.userFormDataSynId}`
    return (
      <div>
        <p className="App-intro text-center">Synapse production version: {this.state.version}</p>
        {
            (this.state.token && this.state.token !== '') &&
            <div className="bg-success text-center" role="alert">
              You are logged in.&nbsp;
              <button
                onClick={SynapseClient.signOut}
              >
                  <span aria-hidden="true">Sign out</span>
              </button>
            </div>
        }
        {
          (!this.state.token || this.state.token === '') &&
          <div>
            <Login
              token={SynapseClient.IS_DEV_ENV ? token : this.state.token}
              theme={'light'}
              icon={true}
            />
            <hr />
          </div>
        }
        {
          (this.state.token && this.state.token !== '') &&
          <div className="container">
            <EntityForm
              parentContainerId="syn20355732"
              token={this.state.token!}
              formSchemaEntityId="syn20184776"
              formUiSchemaEntityId="syn20184771"
              initFormData={false}
              ref={this.entityFormRef}
              synIdCallback={this.onEntityFormSubmitted}
            />
          </div>
        }
        {
          (this.state.token && this.state.token !== '') &&
          !this.state.userFormDataSynId &&
          <div className="container">
            <button
              onClick={this.onSubmitEntityForm}
              className="btn btn-info"
            >
              Programmatically Call Submit
            </button>
          </div>
        }
        {
          (this.state.token && this.state.token !== '') &&
          this.state.userFormDataSynId &&
          <div className="container">
            <a href={userFormSynLink} target="_blank">User Form Data Synapse FileEntity created/updated</a>
          </div>
        }
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
        {this.state.isLoading ? <div className="container"> Loading markdown.. </div> : ''}
        <div className="container">
          <form>
            <label>
              Pick a card type
            <select value={this.state.cardSelection} onChange={this.handleCardSelection}>
                <option value={SynapseConstants.AMP_STUDY}>{SynapseConstants.AMP_STUDY}</option>
                <option value={SynapseConstants.AMP_CONSORTIUM}>{SynapseConstants.AMP_CONSORTIUM}</option>
                <option value={SynapseConstants.AMP_PROJECT}>{SynapseConstants.AMP_PROJECT}</option>
                <option value={SynapseConstants.DATASET}>{SynapseConstants.DATASET}</option>
                <option value={SynapseConstants.TOOL}>{SynapseConstants.TOOL}</option>
                {/* <option value={SynapseConstants.FUNDER}>{SynapseConstants.FUNDER}</option> */}
                <option value={SynapseConstants.PUBLICATION}>{SynapseConstants.PUBLICATION}</option>
              </select>
            </label>
          </form>
        </div>

        <div className="container">
          <button
            className="btn btn-default"
            onClick={() => {this.setState({showTabOne: !this.state.showTabOne})}}
          >
            toggle tabs for query wrapper menu
          </button>
          <a href="#table"> Table Demo </a>
          <QueryWrapperMenu
            isConsistent={true}
            name={'Demo'}
            token={SynapseClient.IS_DEV_ENV ? token! : this.state.token!}
            menuConfig={this.state.showTabOne ? this.state.tabOne.menuConfig : this.state.tabTwo.menuConfig}
            rgbIndex={this.state.showTabOne ? this.state.tabOne.rgbIndex : this.state.tabTwo.rgbIndex}
            stackedBarChartProps={
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
