import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { SynapseClient } from '../../utils'
import { useListState } from '../../utils/hooks/useListState'
import { AccessTokenRecord } from '../../utils/synapseTypes/AccessToken/AccessTokenRecord'
import { ErrorBanner, SynapseErrorBoundary } from '../ErrorBanner'
import loadingScreen from '../LoadingScreen'
import { AccessTokenCard } from './AccessTokenCard'
import { CreateAccessTokenModal } from './CreateAccessTokenModal'

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
  const [isLoading, setIsLoading] = useState(false)

  const [showCreateTokenModal, setShowCreateTokenModal] = useState(false)

  const {
    list: tokenRecords,
    appendToList: appendTokenRecords,
    setList: setTokenRecords,
  } = useListState<AccessTokenRecord>([])

  const [loadNextPage, setLoadNextPage] = useState(true)
  const [nextPageToken, setNextPageToken] = useState<string | undefined>(
    undefined,
  )

  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  // We rerender the list whenever a token is created or deleted to ensure we are up-to-date
  const rerenderList = () => {
    setTokenRecords([])
    setNextPageToken(undefined)
    setLoadNextPage(true)
  }

  useEffect(() => {
    if (loadNextPage) {
      setLoadNextPage(false)
      setIsLoading(true)
      SynapseClient.getPersonalAccessTokenRecords(token, nextPageToken)
        .then(response => {
          setIsLoading(false)
          appendTokenRecords(...response.results)
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
    <div className="PersonalAccessTokenPage bootstrap-4-backport">
      <div className="PersonalAccessTokenPage__Header">
        <div className="PersonalAccessTokenPage__Header__CopyText">
          <h1>{title}</h1>
          {body}
        </div>
        <div className="PersonalAccessTokenPage__Header__CreateButton">
          <Button
            variant="primary"
            onClick={() => setShowCreateTokenModal(true)}
          >
            Create New Token
          </Button>
        </div>
      </div>
      <SynapseErrorBoundary>
        {showCreateTokenModal && (
          <CreateAccessTokenModal
            token={token}
            onClose={() => setShowCreateTokenModal(false)}
            onCreate={rerenderList}
          ></CreateAccessTokenModal>
        )}

        <div>
          {!isLoading && tokenRecords.length === 0 && (
            <div className="PersonalAccessTokenPage__NoTokensMessage SRC-text-title">
              You currently have no personal access tokens.
            </div>
          )}
          <div className="PersonalAccessTokenPage__CardList">
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
              <div className="PersonalAccessTokenPage__CardList__LoadMore">
                <Button
                  className="PersonalAccessTokenPage__CardList__LoadMore__Button"
                  variant="primary"
                  onClick={() => setLoadNextPage(true)}
                >
                  Load More
                </Button>
              </div>
            )}
          </div>
          {showErrorMessage && <ErrorBanner error={errorMessage}></ErrorBanner>}
        </div>
      </SynapseErrorBoundary>
    </div>
  )
}
