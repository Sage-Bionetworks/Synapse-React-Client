import * as React from 'react'
import { Form } from 'react-bootstrap'
import ButtonWithIcon from '../assets/ButtonWithIcon'
import { SynapseClient } from '../utils'
import {
  getEndpoint,
  BackendDestinationEnum,
} from '../utils/functions/getEndpoint'
import { GoogleIcon24 } from '../assets/GoogleIcon24'
import { Button, Link } from '@mui/material'
import IconSvg from './IconSvg'

export const PROVIDERS = {
  GOOGLE: 'GOOGLE_OAUTH_2_0',
  ORCID: 'ORCID',
}

type State = {
  username: string
  password: string
  email: string
  isSignedIn: boolean
  hasLoginInFailed: boolean
  errorMessage: string
  isEmailLogin: boolean
}

type Props = {
  ssoRedirectUrl?: string
  redirectUrl?: string // will redirect here after a successful login. if unset, reload the current page url.
  sessionCallback: () => void // Callback is invoked after login
  registerAccountUrl?: string
  resetPasswordUrl?: string
}

/**
 *  Demo of user session, show login screen and handling user login submission.
 *
 *  To support Google SSO in your portal, you must add your domain to the Authorized Redirect URIs
 *  for Synapse authentication.
 *  This can be done by visiting https://sagebionetworks.jira.com/servicedesk/customer/portal/9 to set up a collaboration.
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
      isEmailLogin: false,
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
  public handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
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
      // now get access token from cookie has to be called in the portals repo
      await SynapseClient.setAccessTokenCookie(
        data.accessToken,
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
    const redirectUrl = this.props.ssoRedirectUrl
      ? `${this.props.ssoRedirectUrl}${PROVIDERS.GOOGLE}`
      : `${SynapseClient.getRootURL()}?provider=${PROVIDERS.GOOGLE}`
    SynapseClient.oAuthUrlRequest(PROVIDERS.GOOGLE, redirectUrl)
      .then((data: any) => {
        const authUrl = data.authorizationUrl
        window.location = authUrl // ping the url
      })
      .catch((err: any) => {
        console.log('Error on oAuth url ', err)
      })
  }
  public render() {
    const registerAccountUrl =
      this.props.registerAccountUrl ??
      `${getEndpoint(
        BackendDestinationEnum.PORTAL_ENDPOINT,
      )}#!RegisterAccount:0`
    const resetPasswordUrl =
      this.props.resetPasswordUrl ??
      `${getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT)}#!PasswordReset:0`
    return (
      <div
        id="loginPage"
        className="container LoginComponent SRC-syn-border-spacing bootstrap-4-backport"
      >
        <div className={!this.state.isEmailLogin ? '' : 'hide-component'}>
          <form>
            <ButtonWithIcon
              variant="white"
              onClick={this.onGoogleSignIn}
              className={`SRC-signin-button`}
              icon={<GoogleIcon24 />}
            >
              Sign in with Google
            </ButtonWithIcon>
          </form>
          <ButtonWithIcon
            variant="white"
            className={`SRC-signin-button`}
            icon={<IconSvg icon="email" />}
            onClick={() => this.setState({ isEmailLogin: true })}
          >
            Sign in with your email
          </ButtonWithIcon>
        </div>
        <Form
          className={this.state.isEmailLogin ? '' : 'hide-component'}
          onSubmit={this.handleLogin}
        >
          <button
            type="button"
            onClick={() => this.setState({ isEmailLogin: false })}
          >
            <IconSvg icon="arrowBack" />
          </button>
          <label htmlFor={'username'}>Username or Email Address</label>
          <Form.Control
            required
            autoComplete="username"
            placeholder="Username or Email Address"
            className="LoginComponent__Input"
            id="username"
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor={'current-password'}>Password</label>
          <Form.Control
            required
            autoComplete="current-password"
            placeholder="Password"
            className="LoginComponent__Input"
            id="current-password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          {this.getLoginFailureView()}
          <Link href={resetPasswordUrl}>Forgot password?</Link>
          <Button
            onClick={this.handleLogin}
            type="submit"
            color="primary"
            variant="contained"
            className="SRC-login-button SRC-marginBottomTen"
          >
            Sign in
          </Button>
        </Form>
        <div className={'SRC-center-text'}>
          <Link href={registerAccountUrl}>
            Don&apos;t have an account? Create one now
          </Link>
        </div>
      </div>
    )
  }
}
export default Login
