import * as React from 'react'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import Login from '../../lib/containers/Login'
import logoSvg from '../../images/logo.svg'
import '../style/App.css'
import '../style/DemoStyle.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Demo from './Demo'
import Playground from './playground/Playground'
import SynapseFormWrapper from '../../lib/containers/synapse_form_wrapper/SynapseFormWrapper'
import SynapseFormSubmissionsGrid from '../../lib/containers/synapse_form_wrapper/SynapseFormSubmissionsGrid'
import { SynapseClient } from '../../lib/utils/'
import { Alert } from 'react-bootstrap'
import { SynapseContextProvider } from '../../lib/utils/SynapseContext'

/**
 * Demo of features that can be used from src/demo/utils/SynapseClient
 * module
 */

type AppState = {
  token: string
  getSessionCalled: boolean
}
export const TokenContext = React.createContext('')

export default class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props)
    this.state = {
      token: '',
      getSessionCalled: false,
    }
  }

  handleChange = (updatedState: {}): void => {
    this.setState(updatedState)
  }

  public componentDidMount() {
    // Note:  All portals should do this once on the initial app load.
    // This looks for the access token cookie (HttpOnly, unable to directly access), and initialize the session if it does exists.
    SynapseClient.detectSSOCode()
    SynapseClient.getAccessTokenFromCookie()
      .then(accessToken =>
        this.handleChange({ token: accessToken, getSessionCalled: true }),
      )
      .catch((error: any) => {
        console.error(error)
        this.setState({
          getSessionCalled: true,
        })
      })
  }

  getSession = async () => {
    SynapseClient.detectSSOCode()
    SynapseClient.getAccessTokenFromCookie()
      .then(accessToken => {
        this.handleChange({ token: accessToken })
      })
      .catch((error: any) => {
        console.error(error)
      })
  }

  renderLoginAndSignout(token: string): JSX.Element {
    const signedInState = (
      <div className="bg-success text-center" role="alert">
        You are logged in.&nbsp;
        <button
          onClick={() => {
            SynapseClient.signOut(this.getSession)
          }}
        >
          <span aria-hidden="true">Sign out</span>
        </button>
      </div>
    )

    const notSignedInState = (
      <div className="text-center">
        <h4>Synapse Production (Google SSO redirects here)</h4>
        <Login sessionCallback={this.getSession} />
        <details>
          <summary>
            Synapse Staging (Google SSO redirects to staging site)
          </summary>
          <Login
            sessionCallback={this.getSession}
            ssoRedirectUrl={
              'https://staging.synapse.org/Portal/oauth2callback?oauth2provider=GOOGLE_OAUTH_2_0'
            }
          />
        </details>
        <hr />
      </div>
    )

    if (token && token !== '') {
      return signedInState
    } else {
      return notSignedInState
    }
  }

  public render(): JSX.Element {
    const { token, getSessionCalled } = this.state

    const alert = (
      <Alert
        dismissible={false}
        show={true}
        variant={'warning'}
        transition={false}
      >
        <h4>@Deprecated</h4>
        <p>
          Demo a new component by creating a .md file of the same name
          (Button.md for Button.tsx), and run the styleguidist server:{' '}
          <code>yarn start-docs</code>
        </p>
      </Alert>
    )

    if (!getSessionCalled) {
      // This lets us keep better track of API calls made, it avoids having the token cause an unecessary
      // component update
      return (
        <div>
          <div className="App-header text-center">
            <img src={logoSvg} className="App-logo" alt="logo" />
            <h4 className="white-text">Synapse React Client Demo</h4>
          </div>
          {alert}
          <p> Getting access token... </p>
        </div>
      )
    }
    return (
      <SynapseContextProvider
        synapseContext={{
          accessToken: token,
          isInExperimentalMode: SynapseClient.isInSynapseExperimentalMode(),
          utcTime: SynapseClient.getUseUtcTimeFromCookie(),
        }}
      >
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <div className="App-header text-center">
              <img src={logoSvg} className="App-logo" alt="logo" />
              <h4 className="white-text">Synapse React Client Demo</h4>
            </div>
            {alert}
            {this.renderLoginAndSignout(token)}
            <ul>
              <li>
                <Link to="/">Demo</Link>
              </li>
              <li>
                <Link to="/Playground">Playground</Link>
              </li>
              <li>
                <Link to="/drugUploadTool">Drug Upload Tool</Link>
              </li>
              <li>
                <Link to="/contribReqForm">
                  AMP-AD external data contribution{' '}
                </Link>
              </li>
            </ul>
            <Route exact={true} path="/">
              <Demo />
            </Route>
            <Route path="/Playground">
              <Playground />
            </Route>
            <Route
              exact={true}
              path="/drugUploadTool"
              render={props => {
                const searchParamsProps: any = {}
                // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams -- needs polyfill for ie11
                const searchParams = new URLSearchParams(props.location.search)
                searchParams.forEach((value, key) => {
                  searchParamsProps[key] = value
                })
                return !props.location.search ? (
                  <SynapseFormSubmissionsGrid
                    pathpart="drugUploadTool"
                    token={token}
                    formClass="drug-upload-tool"
                    formGroupId="9"
                    itemNoun="Compound"
                  />
                ) : (
                  <SynapseFormWrapper
                    {...props}
                    formSchemaEntityId="syn20680102"
                    fileNamePath="naming.compound_name"
                    formUiSchemaEntityId="syn20693568"
                    formNavSchemaEntityId="syn20680027"
                    token={token}
                    formTitle="Your Submission"
                    formClass="drug-upload-tool"
                    searchParams={searchParamsProps}
                  />
                )
              }}
            />

            {/*------------------- contributions request form ---------------------------------*/}
            <Route
              exact={true}
              path="/contribReqForm"
              render={props => {
                let searchParamsProps: any = {}
                // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams -- needs polyfill for ie11
                const searchParams = new URLSearchParams(props.location.search)
                searchParams.forEach((value, key) => {
                  searchParamsProps[key] = value
                })
                return !props.location.search ? (
                  <SynapseFormSubmissionsGrid
                    pathpart="contribReqForm"
                    formGroupId="11"
                    token={token}
                    formClass="contribution-request"
                    itemNoun={'Contribution Request'}
                  />
                ) : (
                  <SynapseFormWrapper
                    {...props}
                    formSchemaEntityId="syn20692910"
                    fileNamePath="study.submission_name"
                    formUiSchemaEntityId="syn20692911"
                    formNavSchemaEntityId="syn20968007"
                    isWizardMode={true}
                    token={token}
                    formTitle="Your Contribution Request"
                    formClass="contribution-request"
                    searchParams={searchParamsProps}
                  />
                )
              }}
            />
          </div>
        </Router>
      </SynapseContextProvider>
    )
  }
}
