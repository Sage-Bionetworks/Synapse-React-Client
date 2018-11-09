import React, { Component } from "react";
import logo from "../../images/logo.svg";
import "./App.css";
import Login from "../../lib/containers/demo_components/Login";
import MarkdownSynapse from "../../lib/containers/MarkdownSynapse";
import UserFavorites from "../../lib/containers/demo_components/UserFavorites";
import UserProjects from "../../lib/containers/demo_components/UserProjects";
import UserTeam from "../../lib/containers/demo_components/UserTeams";
import UserProfile from "../../lib/containers/demo_components/UserProfile";
import CustomMarkdownView from "../../lib/containers/demo_components/CustomMarkdownView";
import * as SynapseClient from "../../lib/utils/SynapseClient";
import * as SynapseConstants from "../../lib/utils/SynapseConstants";
import QueryWrapper from "../../lib/containers/QueryWrapper";
import { Facets } from "../../lib/containers/Facets";
import StackedRowHomebrew from "../../lib/containers/StackedRowHomebrew";
import SynapseTable from "../../lib/containers/SynapseTable";
import UserBadgeBatch from "../../lib/containers/UserBadgeBatch";
import SynapseTableCardView from "../../lib/containers/SynapseTableCardView";
import syn16787123 from "../../JSON_test_data/syn16787123.json";
import syn16859580 from "../../JSON_test_data/syn16859580.json";
import syn16858699 from "../../JSON_test_data/syn16858699.json";
import syn16859448 from "../../JSON_test_data/syn16859448.json";
import syn16857542 from "../../JSON_test_data/syn16857542.json";
import StaticQueryWrapper from "../../lib/containers/StaticQueryWrapper";
import TeamMemberList from "../../lib/containers/TeamMemberList";

type AppState = 
  {
    token: string,
    ownerId: string,
    isLoading: boolean,
    showMarkdown: boolean,
    version: string,
    initQueryRequest: {
      concreteType: string,
      partMask: number,
      query: {
        isConsistent: boolean,
        sql: string,
        limit: number,
        offset: number
      }
    }
  };
/**
 * Demo of features that can be used from src/demo/utils/SynapseClient
 * module
 */
class App extends Component<{}, AppState> {
  /**
   * Maintain internal state of user session
   */
  constructor(props: any) {
    super(props);
    this.state = {
      token: "",
      version: "",
      ownerId: "",
      isLoading: true,
      showMarkdown: true,
      initQueryRequest: {
        concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest",
        partMask:
          SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
          SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
          SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
        query: {
          isConsistent: false,
          sql: `SELECT * FROM syn`,
          limit: 25,
          offset: 0
        }
      }
    };
    this.makeSampleQueryCall = this.makeSampleQueryCall.bind(this);
    this.getVersion = this.getVersion.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
  }
  /**
   * Get the current version of Synapse
   */
  getVersion(): void {
    // IMPORTANT: Your component should have a property (with default) to change the endpoint.  This is necessary for Synapse.org integration.
    // Pass your endpoint through to the rpc call:
    // SynapseClient.getVersion('https://repo-staging.prod.sagebase.org')
    SynapseClient.getVersion()
      .then((data: any) => this.setState(data))
      .catch(function(error: any) {
        // Handle HTTPError.  Has statusCode and message.
        console.error("Get version failed", error);
      });
  }
  /**
   * Make a query on synapse
   */
  makeSampleQueryCall(): void {
    // Example table (view) query.
    // See https://docs.synapse.org/rest/POST/entity/id/table/query/async/start.html
    let QUERY = {
      entityId: "syn12335586",
      query: {
        sql: "SELECT * FROM syn12335586",
        includeEntityEtag: true,
        isConsistent: false,
        offset: 0,
        limit: 100
      },
      partMask:
        SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
        SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
        SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
        SynapseConstants.BUNDLE_MASK_QUERY_FACETS
    };
    SynapseClient.getQueryTableResults(QUERY)
      .then((data: any) => console.log(data))
      .catch(function(error: any) {
        console.error(error);
      });
  }
  /**
   * Update internal state
   * @param {Object} updatedState new state to be updated by the component
   */
  handleChange(updatedState: {}): void {
    this.setState(updatedState);
  }

  removeHandler(): void {
    this.setState({ showMarkdown: !this.state.showMarkdown });
  }
  render(): JSX.Element {
    let redirectUrl: string = "http://localhost:3000/";
    if (process.env.NODE_ENV === "production") {
      redirectUrl = "https://leem42.github.io/Synapse-React-Client/";
    }
    let token: string | undefined = "";
    let inDevEnv = false;
    if (process.env.NODE_ENV === "development") {
      token = process.env.REACT_APP_DEV_TOKEN;
      inDevEnv = true;
    }
    return (
      <div className="App">
        <div className="App-header text-center">
          <img src={logo} className="App-logo" alt="logo" />
          <h4 className="white-text">Synapse React Client Demo</h4>
        </div>
        <p className="App-intro text-center">Synapse production version: {this.state.version}</p>

        <Login
          onTokenChange={this.handleChange}
          token={inDevEnv ? token : this.state.token}
          theme={"light"}
          icon={true}
          buttonText={"Sign in with Google"}
          authProvider={"GOOGLE_OAUTH_2_0"}
          redirectURL={redirectUrl}
        />

        <UserFavorites token={inDevEnv ? token : this.state.token} getUserFavoritesEndpoint={SynapseClient.getUserFavorites} />

        <UserProjects token={inDevEnv ? token : this.state.token} getUserProjectsEndpoint={SynapseClient.getUserProjectList} />

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
            onClick={() => {
              this.removeHandler();
            }}
          >
            {" "}
            Toggle markdown from view
          </button>
        </div>

        <CustomMarkdownView>
          <MarkdownSynapse
            token={inDevEnv ? token : this.state.token}
            ownerId={"syn17012850"}
            wikiId={"584559"}
            updateLoadState={this.handleChange}
          />
        </CustomMarkdownView>

        <QueryWrapper
          initQueryRequest={{
            concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest",
            partMask:
              SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
              SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
              SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
            query: {
              isConsistent: false,
              sql: `SELECT * FROM syn16858331`,
              limit: 25,
              offset: 0
            }
          }}
          showMenu
          filter={"assay"}
          token={inDevEnv ? token : this.state.token}
          rgbIndex={4}
        >
          <StackedRowHomebrew loadingScreen={<div>I'm loading as fast as I can</div>} />
          <Facets/>
          <SynapseTable synapseId={"syn16858331"} visibleColumnCount={8} />
        </QueryWrapper>
        <StaticQueryWrapper json={syn16787123}>
          <SynapseTableCardView type={SynapseConstants.STUDY} limit={3} />
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
    );
  }
}
export default App;
