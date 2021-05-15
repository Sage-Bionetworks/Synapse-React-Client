import {detectSSOCode, getAccessTokenFromCookie, signOut, getUserProfile, isInSynapseExperimentalMode} from './src/lib/utils/SynapseClient'
import {AVATAR, SMALL_USER_CARD, MEDIUM_USER_CARD, LARGE_USER_CARD,GENERIC_CARD,COMPUTATIONAL, PUBLICATION} from './src/lib/utils/SynapseConstants'
import brainSvg from './src/demo/containers/playground/icons/brain.svg'
import circleSvg from './src/demo/containers/playground/icons/circle.svg'
import mouseSvg from './src/demo/containers/playground/icons/mouse.svg'
import resilienceadSvg from './src/demo/containers/playground/icons/resiliencead.svg'

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
              alert(`You are currently logged in as ${profile.userName}`)
            }
          })
          
          console.log('Session has successfully been changed' + accessToken)
      })
      .catch((error) => {
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


global.AVATAR = AVATAR
global.SMALL_USER_CARD = SMALL_USER_CARD
global.MEDIUM_USER_CARD = MEDIUM_USER_CARD
global.LARGE_USER_CARD = LARGE_USER_CARD
global.GENERIC_CARD = GENERIC_CARD
global.COMPUTATIONAL = COMPUTATIONAL
global.PUBLICATION = PUBLICATION
