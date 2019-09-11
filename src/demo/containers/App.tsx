import * as React from 'react'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import Login from '../../lib/containers/Login'
import logoSvg from '../../images/logo.svg'
import Demo from './Demo'
import Playground from './playground/Playground'
import FileGrid from '../../lib/containers/drug_upload_tool/UserFileGrid'
import { SynapseClient } from '../../lib/utils/'


/**
 * Demo of features that can be used from src/demo/utils/SynapseClient
 * module
 */

type AppState = {
  token: string
}
export default class App extends React.Component<{}, AppState>  {
  constructor(props: any) {
    super(props)
    this.state = {
      token: ''
    }
  }

  handleChange = (updatedState: {}): void => {
    this.setState(updatedState)
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

  renderLoginAndSignout(token: string): JSX.Element {

    const signedInState = <div className="bg-success text-center" role="alert">
      You are logged in.&nbsp;
    <button
        onClick={SynapseClient.signOut}
      >
        <span aria-hidden="true">Sign out</span>
      </button>
    </div>

    const notSignedInState = <div className="text-center">
      <h4>Synapse Production (Google SSO redirects here)</h4>
      <Login
        token={SynapseClient.IS_DEV_ENV ? token : this.state.token}
        theme={'light'}
        icon={true}
      />
      <hr />
      <h4>Synapse Staging (Google SSO redirects to staging site)</h4>
      <Login
        token={SynapseClient.IS_DEV_ENV ? token : this.state.token}
        theme={'dark'}
        icon={true}
        googleRedirectUrl={'https://staging.synapse.org/Portal/oauth2callback?oauth2provider=GOOGLE_OAUTH_2_0'}
        endpoint={'https://repo-staging.prod.sagebase.org/'}
      />
      <hr />
    </div>

    if (token && token !== '') {
      return signedInState
    } else {
      return notSignedInState
    }

  }

  public render(): JSX.Element {
  
    return (
      <Router
        basename={process.env.PUBLIC_URL}
      >
        <div>
          <div className="App-header text-center">
            <img src={logoSvg} className="App-logo" alt="logo" />
            <h4 className="white-text">Synapse React Client Demo</h4>
          </div>
          {this.renderLoginAndSignout(this.state.token)}
          <ul>
            <li>
              <Link to="/">Demo</Link>
            </li>
            <li>
              <Link to="/Playground">Playground</Link>
            </li>
            <li>
              <Link to="/drugUploadTool">DrugUploadTool</Link>
            </li>
          </ul>
          {this.state.token}token
        <Route exact={true} path="/" component={Demo} />
          <Route path="/Playground" component={Playground} />
          <Route exact={true} path="/drugUploadTool"
            render={(props) => <FileGrid pathpart="drugUploadTool" token={this.state.token}
              parentContainerId="syn20673186"
            />} />
        </div>
      </Router>
    )
  }
}


