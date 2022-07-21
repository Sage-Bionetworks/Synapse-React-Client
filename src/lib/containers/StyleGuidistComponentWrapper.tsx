import React, { useEffect } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { SynapseContextProvider } from '../utils/SynapseContext'
import { SynapseClient } from '../utils'
import { SynapseToastContainer } from './ToastMessage'
import { ReactQueryDevtools } from 'react-query/devtools'
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
  const profile = await getUserProfile(accessToken)
  let date
  if (accessToken) {
    getAuthenticatedOn(accessToken).then(authenticatedOn => {
      date = moment(authenticatedOn.authenticatedOn).format('L LT')
    })
  }
  return { accessToken, profile, authenticatedOn: date }
}

export const StyleGuidistComponentWrapper: React.FC = props => {
  const [accessToken, setAccessToken] = React.useState(undefined)
  useEffect(() => {
    sessionChangeHandler().then(data => {
      setAccessToken(data.accessToken)
    })
  })
  return (
    <SynapseContextProvider
      synapseContext={{
        accessToken: accessToken,
        isInExperimentalMode: SynapseClient.isInSynapseExperimentalMode(),
        utcTime: SynapseClient.getUseUtcTimeFromCookie(),
        withErrorBoundary: true,
      }}
    >
      <MemoryRouter>
        <ReactQueryDevtools />
        <SynapseToastContainer />
        <main>{props.children}</main>
      </MemoryRouter>
    </SynapseContextProvider>
  )
}

export default StyleGuidistComponentWrapper
