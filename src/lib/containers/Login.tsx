import * as React from 'react'
import { Button } from 'react-bootstrap'
import ButtonContent from '../assets/ButtonContent'
import GoogleIcon from '../assets/GoogleIcon'
import { SynapseClient } from '../utils'
import {
  getEndpoint,
  BackendDestinationEnum,
} from '../utils/functions/getEndpoint'

type State = {
  username: string
  password: string
  email: string
  isSignedIn: boolean
  hasLoginInFailed: boolean
  errorMessage: string
}

type Props = {
  theme: string
  icon: boolean
  googleRedirectUrl?: string
  redirectUrl?: string // will redirect here after a successful login. if unset, reload the current page url.
  sessionCallback: Function // Callback is invoked after login
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
  authenticationReceiptKey = 'last_user_authentication_receipt'

  /**
   * Creates a user session, maintaining credentials
   * @param {*} props
   * @memberof Login
   */
  constructor(props: Props) {
    super(props)
    this.state = {
      email: '',
      errorMessage: '',
      hasLoginInFailed: false,
      isSignedIn: false,
      password: '',
      username: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.getLoginFailureView = this.getLoginFailureView.bind(this)
    this.onGoogleSignIn = this.onGoogleSignIn.bind(this)
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
    const newState: Pick<any, any> = { [name]: value }
    this.setState(newState)
  }
  /**
   * Handle user login on click
   *
   * @param {*} clickEvent Userclick event
   */
  public async handleLogin(clickEvent: React.FormEvent<HTMLElement>) {
    clickEvent.preventDefault() // avoid page refresh
    try {
      // get last valid receipt
      const authenticationReceipt = localStorage.getItem(
        this.authenticationReceiptKey,
      )
      const data = await SynapseClient.login(
        this.state.username,
        this.state.password,
        authenticationReceipt,
      )
      // now get session token from cookie has to be called in the portals repo
      await SynapseClient.setSessionTokenCookie(
        data.sessionToken,
        this.props.sessionCallback,
      )
      // Set the new receipt
      localStorage.setItem(
        this.authenticationReceiptKey,
        data.authenticationReceipt,
      )
    } catch (err) {
      console.log('Error on login: ', err.reason)
      this.setState({
        errorMessage: err.reason,
        hasLoginInFailed: true,
        isSignedIn: false,
      })
    }
  }

  /**
   * Shows user login failure view on login failure
   *
   * @returns view to be displayed on user sign in error.
   */
  public getLoginFailureView(): JSX.Element | boolean {
    if (this.state.hasLoginInFailed) {
      return (
        <div>
          <small className="form-text text-danger">
            {this.state.errorMessage}
          </small>
          <div className="invalid-feedback" />
        </div>
      )
    }
    return false
  }

  public onGoogleSignIn(event: React.MouseEvent<HTMLButtonElement>) {
    // save current route (so that we can go back here after SSO)
    localStorage.setItem('after-sso-login-url', window.location.href)
    event.preventDefault()
    const redirectUrl = this.props.googleRedirectUrl
      ? this.props.googleRedirectUrl
      : `${SynapseClient.getRootURL()}?provider=${SynapseClient.AUTH_PROVIDER}`
    SynapseClient.oAuthUrlRequest(SynapseClient.AUTH_PROVIDER, redirectUrl)
      .then((data: any) => {
        const authUrl = data.authorizationUrl
        window.location = authUrl // ping the url
      })
      .catch((err: any) => {
        console.log('Error on oAuth url ', err)
      })
  }
  public render() {
    const { theme, icon } = this.props
    const googleTheme =
      theme === 'dark'
        ? 'SRC-google-button-dark-color'
        : 'SRC-google-button-light-color'
    return (
      <div
        id="loginPage"
        className="container loginContainer SRC-syn-border-spacing"
      >
        <form>
          <button
            onClick={this.onGoogleSignIn}
            className={`SRC-google-button ${googleTheme} SRC-marginBottomTen`}
          >
            <GoogleIcon key={1} active={true} />
            <ButtonContent icon={icon} key={2}>
              Sign in with Google
            </ButtonContent>
          </button>
        </form>
        <div className="SRC-center-text SRC-deemphasized-text SRC-marginBottomTen">
          or
        </div>

        <div className="SRC-centerAndJustifyContent SRC-marginBottomTen">
          <img
            height="20px"
            style={{ marginRight: '10px' }}
            alt={'sage bionetworks logo'}
            src="https://s3.amazonaws.com/static.synapse.org/sage-bionetworks-logo.svg"
          />
          Sign in with your Sage Bionetworks Synapse account
        </div>
        <form onSubmit={this.handleLogin} className="form-group">
          <input
            autoComplete="username"
            placeholder="username or email"
            className="form-control SRC-marginBottomTop"
            id="exampleEmail"
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            autoComplete="password"
            placeholder="password"
            className="form-control SRC-marginBottomTop"
            id="examplePassword"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          {this.getLoginFailureView()}
          <Button
            variant="primary"
            onSubmit={this.handleLogin}
            type="submit"
            className="SRC-google-button SRC-marginBottomTen"
          >
            <ButtonContent icon={icon}>Sign in</ButtonContent>
          </Button>
        </form>
        <div>
          <a
            href={`${getEndpoint(
              BackendDestinationEnum.PORTAL_ENDPOINT,
            )}#!PasswordReset:0`}
            className="SRC-floatLeft SRC-primary-text-color"
          >
            Forgot password?
          </a>
          <span className="SRC-deemphasized-text SRC-floatRight">
            &nbsp;It's free!
          </span>
          <a
            href={`${getEndpoint(
              BackendDestinationEnum.PORTAL_ENDPOINT,
            )}#!RegisterAccount:0`}
            className="SRC-floatRight SRC-primary-text-color"
          >
            Register
          </a>
        </div>
      </div>
    )
  }
}
export default Login
