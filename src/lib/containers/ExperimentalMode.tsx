import * as React from 'react'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import UniversalCookies from 'universal-cookie'
import { isInSynapseExperimentalMode } from '../utils/SynapseClient'
import { EXPERIMENTAL_MODE_COOKIE } from '../utils/SynapseConstants'

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
  }

  const deleteExperimentalModeCookie = () => {
    cookies.remove(EXPERIMENTAL_MODE_COOKIE, { path: '/' })
    setIsExperimentalModeOn(false)
  }

  return (<>
    <Button variant="primary" onClick={isExperimentalModeOn ? deleteExperimentalModeCookie: createExperimentalModeCookie}>
      Experimental mode is {isExperimentalModeOn ? "on" : "off"}
    </Button>
  </>)
}

export default ExperimentalMode