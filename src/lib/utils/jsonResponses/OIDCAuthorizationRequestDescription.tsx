// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/oauth/OIDCAuthorizationRequestDescription.html

export type OIDCAuthorizationRequestDescription = {
  client_name: string,
  client_uri: string,
  policy_uri: string,
  tos_uri: 'code',
  scope: string []
}
