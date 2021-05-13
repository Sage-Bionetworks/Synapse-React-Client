import * as React from 'react'
import { Button, OverlayTrigger, Popover } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import UniversalCookies from 'universal-cookie'
import { isInSynapseExperimentalMode } from '../utils/SynapseClient'
import { EXPERIMENTAL_MODE_COOKIE } from '../utils/SynapseConstants'
import { InfoOutlined } from '@material-ui/icons'


const ExperimentalMode: React.FC = () => {
  const [isExperimentalModeOn, setIsExperimentalModeOn] = useState<boolean>(false)
  const cookies = new UniversalCookies()
  let mounted = true

  useEffect(() => {
    if (mounted) {
      if (isInSynapseExperimentalMode()) {
        setIsExperimentalModeOn(true)
      }
    }
    return () => {
      mounted = false
    }
  }, [])

  const createExperimentalModeCookie = () => {
    cookies.set(EXPERIMENTAL_MODE_COOKIE, { path: '/' })
    setIsExperimentalModeOn(true)
    window.location.reload();
  }

  const deleteExperimentalModeCookie = () => {
    cookies.remove(EXPERIMENTAL_MODE_COOKIE)
    setIsExperimentalModeOn(false)
    window.location.reload();
  }

  const popover = ({...props}) =>  (
    <div className={"bootstrap-4-backport"} >
      <Popover id={"experimental-mode-popover"} {...props}>
        <Popover.Content>
          This mode gives you early access to features that are still in development. Please note that we do not guarantee an absence of errors, and that the data created using these features may be lost during product upgrade.
        </Popover.Content>
      </Popover>
    </div>
  );

  return (<>
    <Button
      className={"experimental-mode"}
      variant="link"
      onClick={isExperimentalModeOn ? deleteExperimentalModeCookie: createExperimentalModeCookie}
    >
      Experimental mode is {isExperimentalModeOn ? "on" : "off"}
    </Button>
    <OverlayTrigger
      trigger="click"
      placement="top"
      overlay={popover}
    >
      <InfoOutlined style={{verticalAlign: 'middle'}} />
    </OverlayTrigger>
  </>)
}

export default ExperimentalMode