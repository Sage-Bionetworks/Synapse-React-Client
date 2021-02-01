import * as React from 'react'
import Login from './Login'
import SynapseLogoSvg from '../../lib/assets/logos/synapse-logo-blue.svg'
import { useEffect } from 'react'

export type LoginPageProps = {
  backgroundElementId?: string  // contain the element id to set the page background if provided
}

const LoginPage: React.FunctionComponent<LoginPageProps> = (props) => {
  let mounted = true
  let parent:HTMLElement|null = null
  const { backgroundElementId } = props
  const thisClass = "login-panel-wrapper"

  useEffect(() => {
    if (mounted) {
    parent = backgroundElementId ? (document.getElementById(backgroundElementId) as HTMLElement)
      : (document.getElementById(thisClass)?.parentNode as HTMLElement)
      if (parent) {
        parent.classList.add("login-panel-wrapper-bg")
      }
    }
    return () => {
      mounted = false
    }
  }, [backgroundElementId])

  return (
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
        <Login sessionCallback={()=>{window.location.reload()}} />
      </div>
      <div className={"login-panel panel-right"} >
        <div className={"panel-tagline"}>
          <strong>Organize</strong> your digital research assets.<br />
          <strong>Get credit</strong> for your research.<br />
          <strong>Collaborate</strong> with your colleagues and the public.
        </div>
      </div>
    </div>
  )
}

export default LoginPage
