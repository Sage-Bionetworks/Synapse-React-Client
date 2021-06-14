export enum BackendDestinationEnum {
  REPO_ENDPOINT,
  PORTAL_ENDPOINT,
}

// Encodes the portal and repo service destinations
type EndpointObject = {
  REPO: string
  PORTAL: string
}

export const PRODUCTION_ENDPOINT_CONFIG: EndpointObject = {
  REPO: 'https://repo-prod.prod.sagebase.org',
  PORTAL: 'https://www.synapse.org/',
}

// Given an endpoint will return the specific stack object
export const getEndpoint = (endpoint: BackendDestinationEnum): string => {
  let endpoint_config = PRODUCTION_ENDPOINT_CONFIG
  // @ts-ignore if overriding endpoint config
  if (window.SRC && window.SRC.OVERRIDE_ENDPOINT_CONFIG) {
    // @ts-ignore
    endpoint_config = window.SRC && window.SRC.OVERRIDE_ENDPOINT_CONFIG
  }
  const { PORTAL, REPO } = endpoint_config
  if (!PORTAL || !REPO) {
    throw Error('Error failed to specify endpoints, cannot make call')
  }
  if (endpoint === BackendDestinationEnum.PORTAL_ENDPOINT) {
    return PORTAL
  }
  return REPO
}
