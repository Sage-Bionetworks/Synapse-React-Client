import { SynapseClient } from 'lib/utils'
import { AccessTokenRecord } from 'lib/utils/synapseTypes/AccessToken/AccessTokenRecord'
import * as React from 'react'
import { Error } from '../Error'
import loadingScreen from '../LoadingScreen'
import { AccessTokenCard } from './AccessTokenCard'

export type AccessTokenCardListProps = {
  token?: string
}

export const AccessTokenCardList: React.FunctionComponent<AccessTokenCardListProps> = ({
  token,
}: AccessTokenCardListProps) => {
  const FIRST_PAGE_TOKEN = '10a0' //<limit>a<offset>
  const [isLoading, setIsLoading] = React.useState(false)
  const [tokenRecords, setTokenRecords] = React.useState<AccessTokenRecord[]>(
    [],
  )
  const [loadNextPage, setLoadNextPage] = React.useState(true)
  const [nextPageToken, setNextPageToken] = React.useState<string | undefined>(
    FIRST_PAGE_TOKEN,
  )

  const [showErrorMessage, setShowErrorMessage] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')

  React.useEffect(() => {
    if (loadNextPage) {
      setLoadNextPage(false)
      setIsLoading(true)
      SynapseClient.getPersonalAccessTokenRecords(token, nextPageToken)
        .then(response => {
          setIsLoading(false)
          setTokenRecords(records => records.concat(response.results))
          if (response.nextPageToken) {
            setNextPageToken(response.nextPageToken)
          } else {
            setNextPageToken(undefined)
          }
        })
        .catch(err => {
          setIsLoading(false)
          setErrorMessage(err)
          setShowErrorMessage(true)
        })
    }
  }, [loadNextPage, token])

  return (
    <div>
      <div className="SRC-accessTokenCardList">
        {tokenRecords.map(accessToken => {
          return (
            <AccessTokenCard
              key={accessToken.id}
              accessToken={accessToken}
              token={token}
              onDelete={() => {
                setTokenRecords([])
                setNextPageToken(FIRST_PAGE_TOKEN)
                setLoadNextPage(true)
              }}
            />
          )
        })}
        {isLoading && loadingScreen}
        {!isLoading && nextPageToken && !showErrorMessage && (
          <button
            className="btn btn-primary SRC-whiteText"
            style={{ float: 'right', margin: '10px' }}
            onClick={() => setLoadNextPage(true)}
          >
            Load more
          </button>
        )}
      </div>
      {showErrorMessage && <Error error={errorMessage}></Error>}
    </div>
  )
}
