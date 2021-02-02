import * as React from 'react'
import Login from '../../lib/containers/Login'
import logoSvg from '../../images/logo.svg'
import '../style/App.css'
import '../style/DemoStyle.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { SynapseClient } from '../../lib/utils/'
import { Alert } from 'react-bootstrap'
import LoginPage from '../../lib/containers/LoginPage'

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
    // This looks for the session token cookie (HttpOnly, unable to directly access), and initialize the session if it does exists.
    SynapseClient.detectSSOCode()
    SynapseClient.getSessionTokenFromCookie()
      .then(sessionToken =>
        this.handleChange({ token: sessionToken, getSessionCalled: true }),
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
    SynapseClient.getSessionTokenFromCookie()
      .then(sessionToken => {
        this.handleChange({ token: sessionToken })
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
          <p> Getting session token... </p>
        </div>
      )
    }
    return (
      <TokenContext.Provider value={token}>
        <div id={"container"}>
          <LoginPage backgroundElementId={"container"}></LoginPage>
        </div>
      </TokenContext.Provider>
    )
  }
}
