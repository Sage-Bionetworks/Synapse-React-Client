import * as React from 'react'
import ButtonContent from '../assets/ButtonContent'
import GoogleIcon from '../assets/GoogleIcon'
import { SynapseClient } from '../utils'

type State = {
  username: string
  password: string
  email: string
  isSignedIn: boolean
  hasLoginInFailed: boolean
  errorMessage: string
  dissmissButtonClicked: boolean
}

type Props = {
  onTokenChange: ((val: {}) => void)
  token: string | undefined
  theme: string
  icon: boolean
  buttonText: string
  authProvider: string
  redirectURL: string
}

/**
 *  Demo of user session, show login screen and handling user login submission.
 *
 *  To support Google SSO in your portal, you must add your domain to the Authorized Redirect URIs
 *  for Synapse authentication.
 *  This can be done by contacting synapseInfo@sagebionetworks.org to form a collaboration.
 *  Synapse engineers must add your redirect URL in the Google API console found at https://console.cloud.google.com/ for this functionality to work.
 *
 * @class Login
 * @extends {React.Component}
 */
class Login extends React.Component<Props, State> {

    /**
     * Creates a user session, maintaining credentials
     * @param {*} props
     * @memberof Login
     */
  constructor(props: Props) {
    super(props)
    this.state = {
      dissmissButtonClicked: false,
      email: '',
      errorMessage: '',
      hasLoginInFailed: false,
      isSignedIn: false,
      password: '',
      username: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.getTokenView = this.getTokenView.bind(this)
    this.getLoginFailureView = this.getLoginFailureView.bind(this)
    this.getSignInStateView = this.getSignInStateView.bind(this)
    this.onSignOut = this.onSignOut.bind(this)
    this.onSignIn = this.onSignIn.bind(this)
    this.setDismissButton = this.setDismissButton.bind(this)
  }
    /**
     * Updates internal state with the event that was triggered
     *
     * @param {*} event Form update
     */
  public handleChange(event: React.FormEvent<HTMLInputElement>): void {
    const target = event.currentTarget
    const name = target.name
    const value = target.value
    const newState: (Pick<any, any>) = { [name]: value }
    this.setState(newState)
  }
    /**
     * Handle user login on click
     *
     * @param {*} clickEvent Userclick event
     */
  public handleLogin(clickEvent: React.FormEvent<HTMLElement>) {
    clickEvent.preventDefault() // avoid page refresh
    SynapseClient.login(this.state.username, this.state.password)
            .then((data: any) => {
              SynapseClient.setSessionTokenCookie(data.sessionToken).catch((errSetSession) => {
                console.log('Could not set session token cookie', errSetSession)
              })
              this.props.onTokenChange({ token: data.sessionToken })
              this.setState({
                errorMessage: '',
                hasLoginInFailed: false,
                isSignedIn: true
              })
            })
            .catch((err: any) => {
              console.log('Handle login failed with err = ', err)
              this.setState({
                errorMessage: err.reason,
                hasLoginInFailed: true,
                isSignedIn: false
              })
            })
  }

    /**
     * Shows user session token if they've signed in
     *
     * @returns View displaying user session on login, otherwise null.
     */
  public getTokenView(): (JSX.Element | boolean) {
    if (this.state.isSignedIn && this.props.token !== '' && !this.state.hasLoginInFailed) {
      return <p> Your session token is {this.props.token} </p>
    }
    return false
  }
    /**
     * Shows user login failure view on login failure
     *
     * @returns view to be displayed on user sign in error.
     */
  public getLoginFailureView(): (JSX.Element | boolean) {
    if (this.state.hasLoginInFailed) {
      return (
                <div>
                    <small className="form-text text-danger"> {this.state.errorMessage} </small>
                    <div className="invalid-feedback" />
                </div>
      )
    }
    return false
  }
    /**
     * Show whether user is signed in or not, display banner on login success
     *
     * @returns View corresponding to whether the user is signed in, whether they've dismissed
     * sign in banner
     */
  public getSignInStateView(): (JSX.Element | boolean) {
    if (!this.state.isSignedIn) {
      return (
                <p>
                    {' '}
                    You are currently{' '}
                    <strong>
                        {' '}
                        <i> not </i>{' '}
                    </strong>{' '}
                    signed in to Synpase{' '}
                </p>
      )
    }
    if (!this.state.dissmissButtonClicked) {
      return (
                <div>
                    <p>
                        {' '}
                        You are currently{' '}
                        <strong>
                            {' '}
                            <i> signed in </i>{' '}
                        </strong>{' '}
                        to Synapse{' '}
                    </p>
                    <div className="bg-success" role="alert">
                        Synapse login successful
                        <button
                            type="button"
                            className="close"
                            onClick={this.setDismissButton}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
      )
    }
    return false
  }
  public componentDidMount() {
    // TODO: 'code' handling (from SSO) needs to be moved to root page, and then redirect to original route.
    let code: URL | null | string = new URL(window.location.href)
        // in test environment the searchParams isn't defined
    const { searchParams } = code
    if (!searchParams) {
      return
    }
    code = searchParams.get('code')
    if (code) {
      SynapseClient.oAuthSessionRequest(this.props.authProvider, code, `${this.props.redirectURL}?provider=${this.props.authProvider}`)
                .then((synToken: any) => {
                  SynapseClient.setSessionTokenCookie(synToken.sessionToken).then(() => {
                    // go back to original route after successful SSO login
                    const originalUrl = localStorage.getItem('after-sso-login-url')
                    localStorage.removeItem('after-sso-login-url')
                    if (originalUrl) {
                      window.location.replace(originalUrl)
                    }
                  }).catch((errSetSession) => {
                    console.error('Error on set sesion token cookie ', errSetSession)
                  })
                })
                .catch((err: any) => {
                  if (err.statusCode === 404) {
                    // Synapse account not found, send to registration page
                    window.location.replace('https://www.synapse.org/#!RegisterAccount:0')
                  }
                  console.error('Error on sso sign in ', err)
                })
    }
  }
  public onSignIn(event: React.MouseEvent<HTMLButtonElement>) {
    // TODO: save current route (so that we can go back here after SSO)
    localStorage.setItem('after-sso-login-url', window.location.href)
    event.preventDefault()
    SynapseClient.oAuthUrlRequest(this.props.authProvider, `${this.props.redirectURL}?provider=${this.props.authProvider}`)
            .then((data: any) => {
              const authUrl = data.authorizationUrl
              window.location = authUrl // ping the url
            })
            .catch((err: any) => {
              console.log('Error on oAuth url ', err)
            })
  }
  public onSignOut(event: any) {
    // TODO: move to Sign In or Sign Out button in portal (where sign in pops up the modal that contains the Login component)
    event.preventDefault()
    SynapseClient.setSessionTokenCookie(undefined).catch((err) => { console.log('err on set session cookie ', err) })
    this.props.onTokenChange({ token: '' })
    this.setState({
      errorMessage: '',
      hasLoginInFailed: false,
      isSignedIn: false
    })
  }
  public render() {
    const { theme, icon, buttonText } = this.props
    const googleTheme = theme === 'dark' ? 'SRC-google-button-dark-color' : 'SRC-google-button-light-color'
    return (
            <div id="loginPage" className="container loginContainer SRC-syn-border-spacing">
                  <form>
                    {/* tslint:disable-next-line */}
                    <button onClick={this.onSignIn} className={`SRC-google-button ${googleTheme} SRC-marginBottomTen`}>
                        <GoogleIcon key={1} active={true} />
                        <ButtonContent icon={icon} key={2}>
                            {buttonText}
                        </ButtonContent>
                    </button>
                </form>
                <div className="SRC-center-text SRC-deemphasized-text SRC-marginBottomTen">or</div>
                <div className="SRC-center-text SRC-marginBottomTen">Sign in with your Synapse account</div>
                <form onSubmit={this.handleLogin}>
                    <div className="form-group">
                        <input
                                autoComplete="email"
                                placeholder="username or email"
                                className="form-control"
                                id="exampleEmail"
                                name="username"
                                type="text"
                                value={this.state.username}
                                onChange={this.handleChange}
                                data-lpignore="true"
                        />
                    </div>
                    <div className="form-group">
                        <input
                                autoComplete="password"
                                placeholder="password"
                                className="form-control"
                                id="examplePassword"
                                name="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                data-lpignore="true"
                        />
                    </div>
                    {this.getLoginFailureView()}
                    <button
                      onSubmit={this.handleLogin}
                      type="submit"
                      className="btn btn-primary m-1 SRC-google-button SRC-marginBottomTen"
                    >
                      <ButtonContent>
                        Sign in
                      </ButtonContent>
                    </button>
                </form>
                <div>
                  <a href="https://www.synapse.org/#!PasswordReset:0" className="SRC-floatLeft">Forgot password?</a>
                  <span className="SRC-deemphasized-text SRC-floatRight">&nbsp;It's free!</span>
                  <a href="https://www.synapse.org/#!RegisterAccount:0" className="SRC-floatRight">Register</a>
                </div>
            </div>
    )
  }

  public setDismissButton(event: React.MouseEvent<HTMLButtonElement>)  {
    this.setState({ dissmissButtonClicked: true })
  }
}
export default Login
