export const PORTAL_ENDPOINT: string = 'PORTAL_ENDPOINT'
export const SWC_ENDPOINT = 'SWC_ENDPOINT'

export const PRODUCTION_ENDPOINT_OBJECT = {
  REPO: 'https://repo-prod.prod.sagebase.org/',
  PORTAL: 'https://www.synapse.org/',
}

export const STAGING_ENDPOINT_OBJECT = {
  REPO: 'https://repo-staging.prod.sagebase.org/',
  PORTAL: 'https://staging.synapse.org/',
}

export const TST_ENDPOINT_OBJECT = {
  REPO: 'https://repo-dev.dev.sagebase.org',
  PORTAL: 'https://www.tst.synapse.org/',
}

type EndpointObject = {
  REPO: string
  PORTAL: string
}

const getPortalEndpoint = (): EndpointObject => {
  const hostname = window.location.hostname
  if (hostname === TST_ENDPOINT_OBJECT.PORTAL) {
    return TST_ENDPOINT_OBJECT
  }
  if (hostname.includes('staging')) {
    return STAGING_ENDPOINT_OBJECT
  }
  return PRODUCTION_ENDPOINT_OBJECT
}

export const ENDPOINT_CONFIG = getPortalEndpoint()

export const getEndpoint = (endpoint: string) => {
  if (endpoint === SWC_ENDPOINT) {
    return ENDPOINT_CONFIG.REPO
  }
  return ENDPOINT_CONFIG.REPO
}
