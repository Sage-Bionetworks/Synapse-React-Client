import React, { useEffect, useMemo } from 'react'
import { MemoryRouter } from 'react-router-dom'
import {
  SynapseContextProvider,
  SynapseContextType,
} from '../utils/SynapseContext'
import { SynapseClient } from '../utils'
import { SynapseToastContainer } from './ToastMessage'
import { ReactQueryDevtools } from 'react-query/devtools'
import moment from 'moment'
import {
  detectSSOCode,
  getAccessTokenFromCookie,
  getUserProfile,
  getAuthenticatedOn,
  signOut,
} from '../utils/SynapseClient'
import { SynapseClientError } from '../utils/SynapseClientError'

export async function sessionChangeHandler() {
  detectSSOCode()
  let accessToken: string | undefined = await getAccessTokenFromCookie()
  let profile
  try {
    profile = await getUserProfile(accessToken)
  } catch (err) {
    if (err instanceof SynapseClientError && err.status === 401) {
      console.error(
        'Encountered error fetching profile: ',
        err,
        'Signing out...',
      )
      await signOut(() => {})
      accessToken = undefined
    }
    // Otherwise rethrow
    throw err
  }
  let date
  if (accessToken) {
    getAuthenticatedOn(accessToken).then(authenticatedOn => {
      date = moment(authenticatedOn.authenticatedOn).format('L LT')
    })
  }
  return { accessToken, profile, authenticatedOn: date }
}

/**
 * Wraps storybook story components to ensure that all components receive required context.
 * @param props
 * @returns
 */
export function StorybookComponentWrapper(props: {
  children: React.ReactNode
}) {
  const [accessToken, setAccessToken] = React.useState<string | undefined>(
    undefined,
  )
  useEffect(() => {
    sessionChangeHandler().then(data => {
      setAccessToken(data.accessToken)
    })
  })

  const context: SynapseContextType = useMemo(
    () => ({
      accessToken: accessToken,
      isInExperimentalMode: SynapseClient.isInSynapseExperimentalMode(),
      utcTime: SynapseClient.getUseUtcTimeFromCookie(),
      withErrorBoundary: true,
      downloadCartPageUrl: '/?path=/story/download-downloadcartpage--demo',
    }),
    [accessToken],
  )

  return (
    <SynapseContextProvider key={accessToken} synapseContext={context}>
      <MemoryRouter>
        <ReactQueryDevtools />
        <SynapseToastContainer />
        <main>{props.children}</main>
      </MemoryRouter>
    </SynapseContextProvider>
  )
}

export default StorybookComponentWrapper
