import * as React from 'react'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const ExperimentalMode: React.FC = () => {
  const [isExperimentalModeOn, setIsExperimentalModeOn] = useState<boolean>(false)
  let mounted = true

  useEffect(() => {
    if (mounted) {
      if (document.cookie.indexOf("SynapseTestWebsite") !== -1) {
        setIsExperimentalModeOn(true)
      }
    }
    return () => {
      mounted = false
    }
  }, [])

  const createExperimentalModeCookie = () => {
    document.cookie = "SynapseTestWebsite=true"
    setIsExperimentalModeOn(true)
  }

  const deleteExperimentalModeCookie = () => {
    document.cookie = "SynapseTestWebsite= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    setIsExperimentalModeOn(false)
  }

  return (<>
    <Button variant="primary" onClick={isExperimentalModeOn ? deleteExperimentalModeCookie: createExperimentalModeCookie}>
      Experimental mode is {isExperimentalModeOn ? "on" : "off"}
    </Button>
  </>)
}

export default ExperimentalMode