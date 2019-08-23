// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/oauth/OIDCAuthorizationRequest.html

export type OIDCAuthorizationRequest = {
  clientId: string,
  scope: string,
  claims: string,
  responseType: 'code',
  redirectUri: string,
  nonce?: string,
  userId?: string,
  authenticatedAt?: string,
  authorizedAt?: string
}
