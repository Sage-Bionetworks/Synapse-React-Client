import { AccessTokenCard } from 'lib/containers/personal_access_token/AccessTokenCard'
import { AccessTokenPage } from 'lib/containers/personal_access_token/AccessTokenPage'
import { AccessTokenRecord } from 'lib/utils/synapseTypes/AccessToken/AccessTokenRecord'
import * as React from 'react'

const activeAccessToken: AccessTokenRecord = {
  id: '45',
  userId: '1',
  scopes: ['view', 'openid'],
  userInfoClaims: {
    is_certified: null,
    team: {
      values: ['273957'],
    },
    userid: null,
    email: null,
  },
  name: 'My active access token',
  createdOn: '2020-08-23T14:59:19.073Z',
  lastUsed: '2020-10-25T14:59:19.073Z',
  state: 'ACTIVE',
}

const expiredAccessToken: AccessTokenRecord = {
  id: '46',
  userId: '1',
  scopes: ['view', 'modify', 'download'],
  userInfoClaims: {
    is_certified: null,
    team: {
      values: ['273957'],
    },
    userid: null,
    email: null,
  },
  name: 'My expired access token',
  createdOn: '2020-03-23T14:59:19.073Z',
  lastUsed: '2020-04-23T14:59:19.073Z',
  state: 'EXPIRED',
}

export type PersonalAccessTokenDemoProps = {
  token: string
}

export const PersonalAccessTokensDemo: React.FunctionComponent<PersonalAccessTokenDemoProps> = ({
  token,
}: PersonalAccessTokenDemoProps) => {
  return (
    <div style={{ marginLeft: '15px', marginRight: '15px' }}>
      <hr></hr>
      <h1>Cards</h1>
      <div style={{ maxWidth: '800px', margin: 'auto' }}>
        {[activeAccessToken, expiredAccessToken].map(token => {
          return (
            <AccessTokenCard
              key={token.id}
              accessToken={token}
              onDelete={() => {}}
            ></AccessTokenCard>
          )
        })}
      </div>
      <hr></hr>
      <h1>Page</h1>
      <AccessTokenPage
        title="Personal Access Tokens"
        body="Create and manage tokens that can be used to access your Synapse
          account programmatically."
        token={token}
      ></AccessTokenPage>
    </div>
  )
}
