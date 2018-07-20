import React, { Component } from 'react';

import Login from './Login.js'
import Markdown from './Markdown.js'
import UserFavorites from './UserFavorites.js';

import logo from 'images/logo.svg';
import './App.css';
import * as SynapseClient from 'lib/utils/SynapseClient.js';
import * as SynapseConstants from 'lib/utils/SynapseConstants.js';
import UserProjects from './UserProjects.js';
import UserTeam from './UserTeams.js';
import UserProfile from './UserProfile.js';

class App extends Component {
  constructor () {
    super()
    this.state = {
      token: "",
      ownerId: ""
    }
    this.makeSampleQueryCall = this.makeSampleQueryCall.bind(this)
    this.getVersion = this.getVersion.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  getVersion () {
    // IMPORTANT: Your component should have a property (with default) to change the endpoint.  This is necessary for Synapse.org integration.
    // Pass your endpoint through to the rpc call:
    // SynapseClient.getVersion('https://repo-staging.prod.sagebase.org')
    SynapseClient.getVersion()
      .then(data => this.setState(data))
      .catch(function (error) {
        // Handle HTTPError.  Has statusCode and message.
        console.error(error)
      });
  }

  makeSampleQueryCall () {
   // Example table (view) query
   let QUERY = {
    entityId: "syn12335586",
    query: {
      sql: "SELECT * FROM syn12335586",
      includeEntityEtag: true,
      isConsistent: true,
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

  handleChange(updatedState) {
    this.setState(
      updatedState
    );
}

  render() {
    return (
      <div className="App mb-5">
        <div className="App-header text-center">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Synapse React Client Demo</h2>
        </div>
        <p className="App-intro text-center">
          Synapse production version: {this.state.version}
        </p>
        <Login onTokenChange={this.handleChange} token={this.state.token} loginEndpoint={SynapseClient.login} ></Login>
        <UserProfile onProfileChange={this.handleChange} token={this.state.token} ownerId={this.state.ownerId} getUserProfileEndpoint={SynapseClient.getUserProfile}> </UserProfile>
        <Markdown markdownEndpoint={SynapseClient.getWikiEntity}> </Markdown>
        <UserFavorites token={this.state.token} getUserFavoritesEndpoint={SynapseClient.getUserFavorites} > </UserFavorites>
        <UserProjects token={this.state.token} getUserProjectsEndpoint={SynapseClient.getUserProjectList} > </UserProjects>
        <UserTeam token={this.state.token} ownerId={this.state.ownerId} getUserTeamEndpoint={SynapseClient.getUserTeamList} > </UserTeam>
      </div>
    );
  }

  componentDidMount() {
    this.getVersion()
    this.makeSampleQueryCall()
  }
}

export default App;