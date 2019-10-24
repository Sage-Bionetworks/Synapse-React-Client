import {
  getEndpoint,
  BackendDestinationEnum,
  PRODUCTION_ENDPOINT_CONFIG,
} from '../../../lib/utils/getEndpoint'

describe('getting endpoints works', () => {
  it('returns PORTAL endpoint', () => {
    expect(getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT)).toEqual(
      PRODUCTION_ENDPOINT_CONFIG.PORTAL,
    )
  })
  it('returns REPO endpoint', () => {
    expect(getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)).toEqual(
      PRODUCTION_ENDPOINT_CONFIG.REPO,
    )
  })
  it('uses custom object set in the window', () => {
    const OVERRIDE_ENDPOINT_CONFIG = {
      REPO: 'REPO_CUSTOM_ENDPOINT',
      PORTAL: 'PORTAL_CUSTOM_ENDPOINT',
    }
    // @ts-ignore
    window.SRC = {}
    // @ts-ignore
    window.SRC.OVERRIDE_ENDPOINT_CONFIG = OVERRIDE_ENDPOINT_CONFIG
    expect(getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)).toEqual(
      OVERRIDE_ENDPOINT_CONFIG.REPO,
    )
    expect(getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT)).toEqual(
      OVERRIDE_ENDPOINT_CONFIG.PORTAL,
    )
  })
  it('throws an error when the custom object does not have the right keys', () => {
    // @ts-ignore
    window.SRC = {}
    // @ts-ignore
    window.SRC.OVERRIDE_ENDPOINT_CONFIG = {
      PORTALZ: 'PORTAL_ENDPOINT',
    }
    // https://jestjs.io/docs/en/expect.html#tothrowerror
    expect(() => getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)).toThrow()
  })
})
