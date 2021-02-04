import * as React from 'react'
import Login from './Login'
import SynapseLogoSvg from '../../lib/assets/logos/synapse-logo-blue.svg'

export type LoginPageProps = {
  googleRedirectUrl?: string
  redirectUrl?: string // will redirect here after a successful login. if unset, reload the current page url.
  sessionCallback: Function // Callback is invoked after login
}

const LoginPage: React.FunctionComponent<LoginPageProps> = (props) => {
  const { googleRedirectUrl, redirectUrl, sessionCallback } = props
  const thisClass = "login-panel-wrapper"

  return (
    <div className={"login-panel-wrapper-bg"}>
      <div
        id={thisClass}
        className={thisClass}
      >
        <div className={"login-panel panel-left"}>
          <div className={"panel-logo"}>
            <img
              alt={'Synapse logo'}
              src={SynapseLogoSvg}
            />
            <p className={"panel-tagline"}>Organize. Get credit. Collaborate.</p>
          </div>
          <Login
            googleRedirectUrl={googleRedirectUrl}
            redirectUrl={redirectUrl}
            sessionCallback={sessionCallback}
          />
        </div>
        <div className={"login-panel panel-right"} >
          <div className={"panel-tagline"}>
            <strong>Organize</strong> your digital research assets.<br />
            <strong>Get credit</strong> for your research.<br />
            <strong>Collaborate</strong> with your colleagues and the public.
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
