import React, { Component } from 'react';

import logo from 'images/logo.svg';
import './App.css';

import Login from 'lib/containers/Login.js'
import MarkdownSynapse from 'lib/containers/MarkdownSynapse.js'
import UserFavorites from 'lib/containers/UserFavorites.js';
import UserProjects from 'lib/containers/UserProjects.js';
import UserTeam from 'lib/containers/UserTeams.js';
import UserProfile from 'lib/containers/UserProfile.js';
import CustomMarkdownView from 'lib/containers/CustomMarkdownView'

import * as SynapseClient from 'lib/utils/SynapseClient.js';
import * as SynapseConstants from 'lib/utils/SynapseConstants.js';

import QueryWrapper from 'lib/containers/QueryWrapper'
import {Facets} from 'lib/containers/Facets';
import StackedRowHomebrew from 'lib/containers/StackedRowHomebrew';
import SynapseTable from 'lib/containers/SynapseTable'

import SynapseRow from 'lib/containers/SynapseRow'
import syn16787123 from '../../JSON_test_data/syn16787123.json'
import syn16859580 from '../../JSON_test_data/syn16859580.json'

/**
 * Demo of features that can be used from src/demo/utils/SynapseClient
 * module
 */
class App extends Component {

  /**
   * Maintain internal state of user session
   */
  constructor () {
    super()
    this.state = {
      token: "",
      ownerId: "",
      isLoading: true,
      showMarkdown: true
    }
    this.makeSampleQueryCall = this.makeSampleQueryCall.bind(this)
    this.getVersion = this.getVersion.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.removeHandler = this.removeHandler.bind(this)
  }
  
  /**
   * Get the current version of Synapse
   */
  getVersion () {
    // IMPORTANT: Your component should have a property (with default) to change the endpoint.  This is necessary for Synapse.org integration.
    // Pass your endpoint through to the rpc call:
    // SynapseClient.getVersion('https://repo-staging.prod.sagebase.org')
    SynapseClient.getVersion()
      .then(data => this.setState(data))
      .catch(function (error) {
        // Handle HTTPError.  Has statusCode and message.
        console.error("Get version failed" , error)
      });
  }

  /**
   * Make a query on synapse
   */
  makeSampleQueryCall () {
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
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
      | SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS
      | SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS
      | SynapseConstants.BUNDLE_MASK_QUERY_FACETS
  };
  SynapseClient.getQueryTableResults(QUERY)
    .then(data => console.log(data))
    .catch(function (error) {
      console.error(error)
    });
  }

  /**
   * Update internal state
   * @param {Object} updatedState new state to be updated by the component
   */
  handleChange(updatedState) {
    this.setState(
      updatedState
    );
  }
  
  removeHandler () {
    this.setState(
      {showMarkdown: !this.state.showMarkdown}
    )
  }
  
  render() {
    let redirectUrl = "http://localhost:3000/"
    if (process.env.NODE_ENV === "production") {
      redirectUrl = "https://leem42.github.io/Synapse-React-Client/"
    }
    let token = ""
    let inDevEnv = false
    if (process.env.NODE_ENV === "development") {
      token = "03021292-e395-4746-9ccf-055a662e25ea"
      inDevEnv = true
    }

    return (
      <div className="App">
        <div className="App-header text-center">
          <img src={logo} className="App-logo" alt="logo" />
          <h4 className="white-text">Synapse React Client Demo</h4>
        </div>
        <p className="App-intro text-center">
          Synapse production version: {this.state.version}
        </p>

        <Login onTokenChange={this.handleChange}
               token={inDevEnv ? token: this.state.token}
               theme={"light"}
               icon={true}
               buttonText={"Sign in with Google"}
               authProvider={"GOOGLE_OAUTH_2_0"}
               redirectURL={redirectUrl}
               >
        </Login>
        
        <UserFavorites token={inDevEnv ? token: this.state.token}
                       getUserFavoritesEndpoint={SynapseClient.getUserFavorites}>
        </UserFavorites>
        
        <UserProjects token={inDevEnv ? token: this.state.token} 
                      getUserProjectsEndpoint={SynapseClient.getUserProjectList}>
        </UserProjects>
        
        <UserProfile onProfileChange={this.handleChange}
                     token={inDevEnv ? token: this.state.token}
                     ownerId={this.state.ownerId}
                     getUserProfileEndpoint={SynapseClient.getUserProfile}>
        </UserProfile>
       
        <UserTeam token={inDevEnv ? token: this.state.token} 
                  ownerId={this.state.ownerId}
                  getUserTeamEndpoint={SynapseClient.getUserTeamList}>
        </UserTeam>

        {this.state.isLoading ? <div className="container"> Loading markdown.. </div> : ""}
      
        <div className="container SRC-syn-border-spacing">
           <button className="btn btn-primary" 
                   onClick={
                        () => {
                            this.removeHandler()
                        }
                    }> Toggle markdown from view 
            </button>  
        </div>

        <CustomMarkdownView>
          <MarkdownSynapse removeHandler={this.removeHandler} token={inDevEnv ? token: this.state.token}
                    ownerId={"syn14568473"}
                    wikiId={"582406"}
                    updateLoadState={this.handleChange}
                    >
          </MarkdownSynapse>
        </CustomMarkdownView>

        <QueryWrapper
          initQueryRequest={{
            concreteType:
              "org.sagebionetworks.repo.model.table.QueryBundleRequest",
            partMask:
              SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS
              | SynapseConstants.BUNDLE_MASK_QUERY_FACETS
              | SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
            query: {
                isConsistent: false,
                sql: `SELECT * FROM syn16858331`,
                limit: 25,
                offset: 0
            },
          }}
          token={inDevEnv ? token: this.state.token}
          >
          <Facets
            filter={"projectId"}
          />
          <StackedRowHomebrew
            filter={"projectId"}
          >
          </StackedRowHomebrew>
          <SynapseTable
            synapseId={"syn15661198"}
            visibleColumnCount={8}
          >
          </SynapseTable>
        </QueryWrapper>

        <QueryWrapper
          json={syn16787123}
        >
          <SynapseRow
            type={SynapseConstants.STUDY}
            limit={3}
          >
          </SynapseRow>
        </QueryWrapper>

        <QueryWrapper
          json={syn16859580}        
        >
          <SynapseRow
            type={SynapseConstants.DATASET}
          >
          </SynapseRow>
        </QueryWrapper>

        <QueryWrapper
          initQueryRequest={{
            concreteType:
              "org.sagebionetworks.repo.model.table.QueryBundleRequest",
            partMask:
              SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS
              | SynapseConstants.BUNDLE_MASK_QUERY_FACETS
              | SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
            query: {
                isConsistent: false,
                sql: `SELECT * FROM syn16859448`,
                limit: 7,
                offset: 0,
            },
          }}
          synapseId="syn16859448"
          token={inDevEnv ? token: this.state.token}
          alias="Disease"
          filter="parentId"
          defaultVisibleCount={4}>
          <SynapseRow type={SynapseConstants.TOOL}></SynapseRow>
        </QueryWrapper>

        <QueryWrapper
          initQueryRequest={{
            concreteType:
              "org.sagebionetworks.repo.model.table.QueryBundleRequest",
            partMask:
              SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS
              | SynapseConstants.BUNDLE_MASK_QUERY_FACETS
              | SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
            query: {
                isConsistent: false,
                sql: `SELECT * FROM syn16857542`,
                limit: 7,
                offset: 0,
            },
          }}
          synapseId="syn16857542"
          token={inDevEnv ? token: this.state.token}
          alias="Disease"
          filter="parentId"
          defaultVisibleCount={4}>
          <SynapseRow type={SynapseConstants.PUBLICATION}></SynapseRow>
        </QueryWrapper>

        <QueryWrapper
          initQueryRequest={{
            concreteType:
              "org.sagebionetworks.repo.model.table.QueryBundleRequest",
            partMask:
              SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS
              | SynapseConstants.BUNDLE_MASK_QUERY_FACETS
              | SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
            query: {
                isConsistent: false,
                sql: `SELECT * FROM syn16858699`,
                limit: 25,
                offset: 0,
            },
          }}
          synapseId="syn16858699"
          token={inDevEnv ? token: this.state.token}
          alias="Disease"
          filter="parentId"
          defaultVisibleCount={4}>
          <SynapseRow type={SynapseConstants.FUNDER}></SynapseRow>
        </QueryWrapper>
      </div>
    );
  }
}

export default App;