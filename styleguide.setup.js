import {
  detectSSOCode,
  getAccessTokenFromCookie,
  signOut,
  getUserProfile,
  isInSynapseExperimentalMode,
  getAuthenticatedOn,
} from './src/lib/utils/SynapseClient'
import {
  AVATAR,
  SMALL_USER_CARD,
  MEDIUM_USER_CARD,
  LARGE_USER_CARD,
  GENERIC_CARD,
  COMPUTATIONAL,
  PUBLICATION,
  OBSERVATION_CARD,
} from './src/lib/utils/SynapseConstants'
import brainSvg from './src/demo/containers/playground/icons/brain.svg'
import circleSvg from './src/demo/containers/playground/icons/circle.svg'
import mouseSvg from './src/demo/containers/playground/icons/mouse.svg'
import resilienceadSvg from './src/demo/containers/playground/icons/resiliencead.svg'
import moment from 'moment'
import { SynapseContextConsumer } from './src/lib/utils/SynapseContext'
import { Checkbox } from './src/lib/containers/widgets/Checkbox'
import { RadioGroup } from './src/lib/containers/widgets/RadioGroup'
import Typography from './src/lib/utils/typography/Typography'
import * as ReactBootstrap from 'react-bootstrap'
import { ReactQueryDevtoolsPanel } from 'react-query/devtools'
import {
  SynapseToastContainer,
  displayToast,
} from './src/lib/containers/ToastMessage'
import React from 'react'
import ReactDOM from 'react-dom'

// Inject the ToastContainer so we can push toast notifications
let toastContainerDiv = document.createElement('div')
document.getElementsByTagName('body')[0].append(toastContainerDiv)
ReactDOM.render(React.createElement(SynapseToastContainer), toastContainerDiv)

global.currentUserProfile = false
global.accessToken = false
global.sessionChangeHandler = async () => {
  detectSSOCode()
  getAccessTokenFromCookie()
    .then(accessToken => {
      global.accessToken = accessToken
      getUserProfile(accessToken).then(profile => {
        global.currentUserProfile = profile
        if (accessToken) {
          getAuthenticatedOn(accessToken).then(authenticatedOn => {
            const date = moment(authenticatedOn.authenticatedOn).format('L LT')
            displayToast(
              `You are currently logged in as ${profile.userName} (last authenticated at ${date})`,
              'info',
              { autoCloseInMs: 5000 },
            )
          })
        }
      })
      console.log('Session has successfully been changed ' + accessToken)
    })
    .catch(error => {
      console.error(error)
    })
}

global.signOut = signOut
global.sessionChangeHandler()

console.log(`Is in Synapse Experimental Mode? ${isInSynapseExperimentalMode()}`)

// example iconOptions (for custom icon mapping)
global.iconOptions = {
  'AMP-AD': circleSvg,
  'M2OVE-AD': brainSvg,
  'MODEL-AD': mouseSvg,
  'Resilience-AD': resilienceadSvg,
}

global.SynapseContextConsumer = SynapseContextConsumer
global.AVATAR = AVATAR
global.SMALL_USER_CARD = SMALL_USER_CARD
global.MEDIUM_USER_CARD = MEDIUM_USER_CARD
global.LARGE_USER_CARD = LARGE_USER_CARD
global.GENERIC_CARD = GENERIC_CARD
global.COMPUTATIONAL = COMPUTATIONAL
global.PUBLICATION = PUBLICATION
global.OBSERVATION_CARD = OBSERVATION_CARD
global.Checkbox = Checkbox
global.RadioGroup = RadioGroup
global.ReactBootstrap = ReactBootstrap
global.ReactQueryDevtoolsPanel = ReactQueryDevtoolsPanel
global.displayToast = displayToast
global.Typography = Typography
