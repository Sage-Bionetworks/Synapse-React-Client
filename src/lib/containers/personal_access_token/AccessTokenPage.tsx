import { SynapseClient } from '../../utils'
import * as React from 'react'
import { Button } from 'react-bootstrap'
import { AccessTokenRecord } from '../../utils/synapseTypes/AccessToken/AccessTokenRecord'
import { Error } from '../Error'
import loadingScreen from '../LoadingScreen'
import { AccessTokenCard } from './AccessTokenCard'
import { CreateAccessTokenModal } from './CreateAccessTokenModal'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'

const ErrorFallback: React.FunctionComponent<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div role="alert" className="SRC-marginBottomTop">
      <Error error={error}></Error>
      <Button onClick={resetErrorBoundary}>Reload Access Tokens</Button>
    </div>
  )
}

export type AccessTokenPageProps = {
  title: string
  body: string | JSX.Element
  token: string
}

export const AccessTokenPage: React.FunctionComponent<AccessTokenPageProps> = ({
  title,
  body,
  token,
}: AccessTokenPageProps) => {
  const [isLoading, setIsLoading] = React.useState(false)

  const [showCreateTokenModal, setShowCreateTokenModal] = React.useState(false)

  // TODO: replace this with the `useListState` custom hook when it gets merged.
  const [tokenRecords, setTokenRecords] = React.useState<AccessTokenRecord[]>(
    [],
  )

  const [loadNextPage, setLoadNextPage] = React.useState(true)
  const [nextPageToken, setNextPageToken] = React.useState<string | undefined>(
    undefined,
  )

  const [showErrorMessage, setShowErrorMessage] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')

  // We rerender the list whenever a token is created or deleted to ensure we are up-to-date
  const rerenderList = () => {
    setTokenRecords([])
    setNextPageToken(undefined)
    setLoadNextPage(true)
  }

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
  }, [loadNextPage, token, nextPageToken])

  return (
    <>
      <div className="SRC-accessTokenPageHeaderContainer">
        <div className="SRC-accessTokenPageText">
          <h1>{title}</h1>
          {body}
        </div>
        <div className="SRC-accessTokenPageCreateButtonContainer">
          <Button
            variant="primary"
            onClick={() => setShowCreateTokenModal(true)}
          >
            Create New Token
          </Button>
        </div>
      </div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {showCreateTokenModal && (
          <CreateAccessTokenModal
            token={token}
            onClose={() => setShowCreateTokenModal(false)}
            onCreate={rerenderList}
          ></CreateAccessTokenModal>
        )}

        <div>
          {!isLoading && tokenRecords.length === 0 && (
            <div className="SRC-noAccessTokensMessage SRC-text-title">
              You currently have no personal access tokens.
            </div>
          )}
          <div className="SRC-accessTokenCardList">
            {tokenRecords.map(accessToken => {
              return (
                <AccessTokenCard
                  key={accessToken.id}
                  accessToken={accessToken}
                  token={token}
                  onDelete={rerenderList}
                />
              )
            })}
            {isLoading && loadingScreen}
            {!isLoading && nextPageToken && !showErrorMessage && (
              <div className="SRC-loadMoreButtonContainer">
                <Button
                  className="SRC-loadMoreAccessTokensButton"
                  variant="primary"
                  onClick={() => setLoadNextPage(true)}
                >
                  Load More
                </Button>
              </div>
            )}
          </div>
          {showErrorMessage && <Error error={errorMessage}></Error>}
        </div>
      </ErrorBoundary>
    </>
  )
}
