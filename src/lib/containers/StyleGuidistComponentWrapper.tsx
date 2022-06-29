import React, { useEffect } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { SynapseContextProvider } from '../utils/SynapseContext'
import { SynapseClient } from '../utils'
import { SynapseToastContainer } from './ToastMessage'
import moment from 'moment'
import {
  detectSSOCode,
  getAccessTokenFromCookie,
  getUserProfile,
  getAuthenticatedOn,
} from '../utils/SynapseClient'

export async function sessionChangeHandler() {
  detectSSOCode()
  const accessToken = await getAccessTokenFromCookie()
  global.accessToken = accessToken
  const profile = await getUserProfile(accessToken)
  global.currentUserProfile = profile
  if (accessToken) {
    getAuthenticatedOn(accessToken).then(authenticatedOn => {
      const date = moment(authenticatedOn.authenticatedOn).format('L LT')
    })
  }
  return profile
}

export const StyleGuidistComponentWrapper: React.FC = props => {
  useEffect(() => {
    sessionChangeHandler()
  }, [])
  return (
    <SynapseContextProvider
      synapseContext={{
        accessToken: (global as any).accessToken,
        isInExperimentalMode: SynapseClient.isInSynapseExperimentalMode(),
        utcTime: SynapseClient.getUseUtcTimeFromCookie(),
        withErrorBoundary: true,
      }}
    >
      <MemoryRouter>
        <SynapseToastContainer />
        <main>{props.children}</main>
      </MemoryRouter>
    </SynapseContextProvider>
  )
}

export default StyleGuidistComponentWrapper
