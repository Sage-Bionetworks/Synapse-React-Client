import React, { Component } from "react"
import { Link } from "react-router-dom"
import logo from "../../images/logo.svg"
import syn16857542 from "../../JSON_test_data/syn16857542.json"
import syn16858699 from "../../JSON_test_data/syn16858699.json"
import syn16859448 from "../../JSON_test_data/syn16859448.json"
import syn16859580 from "../../JSON_test_data/syn16859580.json"
import CustomMarkdownView from "../../lib/containers/demo_components/CustomMarkdownView"
import Login from "../../lib/containers/demo_components/Login"
import UserFavorites from "../../lib/containers/demo_components/UserFavorites"
import UserProfile from "../../lib/containers/demo_components/UserProfile"
import UserProjects from "../../lib/containers/demo_components/UserProjects"
import UserTeam from "../../lib/containers/demo_components/UserTeams"
import MarkdownSynapse from "../../lib/containers/MarkdownSynapse"
// import QueryWrapperMenu from "../../lib/containers/QuerryWrapperMenu"
import StaticQueryWrapper from "../../lib/containers/StaticQueryWrapper"
import SynapseTableCardView from "../../lib/containers/SynapseTableCardView"
import TeamMemberList from "../../lib/containers/TeamMemberList"
import UserBadgeBatch from "../../lib/containers/UserBadgeBatch"
import { SynapseVersion } from "../../lib/utils/jsonResponses/SynapseVersion"
import * as SynapseClient from "../../lib/utils/SynapseClient"
import * as SynapseConstants from "../../lib/utils/SynapseConstants"
import "./App.css"

type DemoState = {
    token: string
    ownerId: string
    isLoading: boolean
    showMarkdown: boolean
    version: number
  }
/**
 * Demo of features that can be used from src/demo/utils/SynapseClient
 * module
 */
class Demo extends Component<{}, DemoState> {
  /**
   * Maintain internal state of user session
   */
  constructor(props: any) {
    super(props)
    this.state = {
      isLoading: true,
      ownerId: "",
      showMarkdown: true,
      token: "",
      version: 0
    }
    this.makeSampleQueryCall = this.makeSampleQueryCall.bind(this)
    this.getVersion = this.getVersion.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.removeHandler = this.removeHandler.bind(this)
  }
  /**
   * Get the current version of Synapse
   */
  public getVersion(): void {
    // IMPORTANT: Your component should have a property (with default) to change the endpoint.  This is necessary for Synapse.org integration.
    // Pass your endpoint through to the rpc call:
    // SynapseClient.getVersion('https://repo-staging.prod.sagebase.org')
    SynapseClient.getVersion()
      .then((data: SynapseVersion) => this.setState({version: data.version}))
      .catch((error: any) => {
        // Handle HTTPError.  Has statusCode and message.
        console.error("Get version failed", error)
      })
  }
  /**
   * Make a query on synapse
   */
  public makeSampleQueryCall(): void {
    // Example table (view) query.
    // See https://docs.synapse.org/rest/POST/entity/id/table/query/async/start.html
    const QUERY = {
      entityId: "syn12335586",
      // like it or not synapse has a bitwise protocol for parmask
      partMask:
      // tslint:disable-next-line
        SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
        SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
        SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
        SynapseConstants.BUNDLE_MASK_QUERY_FACETS,
      query: {
        includeEntityEtag: true,
        isConsistent: false,
        limit: 100,
        offset: 0,
        sql: "SELECT * FROM syn12335586"
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

  public render(): JSX.Element {
    let redirectUrl: string = "http://localhost:3000/"
    if (process.env.NODE_ENV === "production") {
      redirectUrl = "https://leem42.github.io/Synapse-React-Client/"
    }
    let token: string | undefined = ""
    let inDevEnv = false
    if (process.env.NODE_ENV === "development") {
      token = process.env.REACT_APP_DEV_TOKEN
      inDevEnv = true
    }
    return (
      <div className="App">
        <div className="App-header text-center">
          <img src={logo} className="App-logo" alt="logo" />
          <h4 className="white-text">Synapse React Client Demo</h4>
        </div>
        <p className="App-intro text-center">Synapse production version: {this.state.version}</p>

        <Link to="/Playground"> To Playground </Link>

        <Login
          onTokenChange={this.handleChange}
          token={inDevEnv ? token : this.state.token}
          theme={"light"}
          icon={true}
          buttonText={"Sign in with Google"}
          authProvider={"GOOGLE_OAUTH_2_0"}
          redirectURL={redirectUrl}
        />

        <UserFavorites
          token={inDevEnv ? token : this.state.token}
          getUserFavoritesEndpoint={SynapseClient.getUserFavorites}
        />

        <UserProjects
          token={inDevEnv ? token : this.state.token}
          getUserProjectsEndpoint={SynapseClient.getUserProjectList}
        />

        <UserProfile
          onProfileChange={this.handleChange}
          token={inDevEnv ? token : this.state.token}
          ownerId={this.state.ownerId}
          getUserProfileEndpoint={SynapseClient.getUserProfile}
        />

        <UserTeam
          token={inDevEnv ? token : this.state.token}
          ownerId={this.state.ownerId}
          getUserTeamEndpoint={SynapseClient.getUserTeamList}
        />

        <UserBadgeBatch principalIds={[3342573, 3374422, 1131050]} />

        {this.state.isLoading ? <div className="container"> Loading markdown.. </div> : ""}

        <div className="container SRC-syn-border-spacing">
          <button
            className="btn btn-primary"
            // tslint:disable-next-line
            onClick={() => {this.removeHandler()}}
          >
            {" "}
            Toggle markdown from view
          </button>
        </div>

        <CustomMarkdownView>
          <MarkdownSynapse
            token={inDevEnv ? token : this.state.token}
            wikiId={"581895"}
            ownerId={"syn12666371"}
            updateLoadState={this.handleChange}
          />
        </CustomMarkdownView>

        <StaticQueryWrapper token={inDevEnv ? token : this.state.token} sql={"SELECT * FROM syn9886254"}>
          <SynapseTableCardView type={SynapseConstants.AMP_STUDY} />
        </StaticQueryWrapper>

        <StaticQueryWrapper token={inDevEnv ? token : this.state.token} sql={"SELECT * FROM syn17024229"}>
          <SynapseTableCardView type={SynapseConstants.AMP_PROJECT} />
        </StaticQueryWrapper>

        <StaticQueryWrapper token={inDevEnv ? token : this.state.token} sql={"SELECT * FROM syn17024173"}>
          <SynapseTableCardView
            type={SynapseConstants.AMP_CONSORTIUM}
          />
        </StaticQueryWrapper>

        <StaticQueryWrapper json={syn16859580}>
          <SynapseTableCardView type={SynapseConstants.DATASET} />
        </StaticQueryWrapper>

        <StaticQueryWrapper json={syn16859448}>
          <SynapseTableCardView type={SynapseConstants.TOOL} />
        </StaticQueryWrapper>

        <StaticQueryWrapper json={syn16857542}>
          <SynapseTableCardView type={SynapseConstants.PUBLICATION} />
        </StaticQueryWrapper>

        <StaticQueryWrapper json={syn16858699}>
          <SynapseTableCardView type={SynapseConstants.FUNDER} />
        </StaticQueryWrapper>

        <StaticQueryWrapper json={syn16858699}>
          <SynapseTableCardView hideOrganizationLink={true} type={SynapseConstants.FUNDER} />
        </StaticQueryWrapper>

        <TeamMemberList id={3379644} token={inDevEnv ? token : this.state.token} />
      </div>
    )
  }
}
export default Demo
