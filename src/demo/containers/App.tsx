import * as React from 'react'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import Login from '../../lib/containers/Login'
import logoSvg from '../../images/logo.svg'
import '../style/App.scss'
import '../style/DemoStyle.scss'
import Demo from './Demo'
import Playground from './playground/Playground'
import SynapseFormWrapper from '../../lib/containers/synapse_form_wrapper/SynapseFormWrapper'
import SynapseFormSubmissionsGrid from '../../lib/containers/synapse_form_wrapper/SynapseFormSubmissionsGrid'
import { SynapseClient } from '../../lib/utils/'
import { RouteChildrenProps } from 'react-router'

/**
 * Demo of features that can be used from src/demo/utils/SynapseClient
 * module
 */

type AppState = {
  token: string
}
export const TokenContext = React.createContext('')

export default class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props)
    this.state = {
      token: '',
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
      .then(sessionToken => this.handleChange({ token: sessionToken }))
      .catch((error: any) => {
        console.error(error)
      })
  }

  establishSession = () => {
    SynapseClient.detectSSOCode()
    SynapseClient.getSessionTokenFromCookie()
      .then(sessionToken => this.handleChange({ token: sessionToken }))
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
            SynapseClient.signOut(this.establishSession)
          }}
        >
          <span aria-hidden="true">Sign out</span>
        </button>
      </div>
    )

    const notSignedInState = (
      <div className="text-center">
        <h4>Synapse Production (Google SSO redirects here)</h4>
        <Login
          token={
            SynapseClient.IS_OUTSIDE_SYNAPSE_ORG ? token : this.state.token
          }
          sessionCallback={this.establishSession}
          theme={'light'}
          icon={true}
        />
        <details>
          <summary>
            Synapse Staging (Google SSO redirects to staging site)
          </summary>
          <Login
            token={
              SynapseClient.IS_OUTSIDE_SYNAPSE_ORG ? token : this.state.token
            }
            sessionCallback={this.establishSession}
            theme={'dark'}
            icon={true}
            googleRedirectUrl={
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
    const { token } = this.state
    return (
      <TokenContext.Provider value={token}>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <div className="App-header text-center">
              <img src={logoSvg} className="App-logo" alt="logo" />
              <h4 className="white-text">Synapse React Client Demo</h4>
            </div>
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

            <Route exact={true} path="/" component={Demo} />
            <Route
              path="/Playground"
              component={(props: RouteChildrenProps) => (
                <Playground {...props} token={token} />
              )}
            />
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
      </TokenContext.Provider>
    )
  }
}
