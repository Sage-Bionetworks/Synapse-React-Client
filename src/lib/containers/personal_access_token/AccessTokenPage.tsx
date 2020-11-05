import * as React from 'react'
import { Button } from 'react-bootstrap'
import { AccessTokenCardList } from './AccessTokenCardList'
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
  const [showCreateTokenModal, setShowCreateTokenModal] = React.useState(false)
  const [refreshList, setRefreshList] = React.useState(false)
  const [accessTokenCardList, setAccessTokenCardList] = React.useState(
    <AccessTokenCardList token={token} />,
  )

  React.useEffect(() => {
    if (refreshList) {
      setAccessTokenCardList(
        <AccessTokenCardList token={token} key={Math.random()} />,
      )
    }
    return () => setRefreshList(false)
  }, [refreshList, token])

  return (
    <React.Fragment>
      {showCreateTokenModal && (
        <CreateAccessTokenModal
          token={token}
          onClose={() => setShowCreateTokenModal(false)}
          onCreate={() => setRefreshList(true)}
        ></CreateAccessTokenModal>
      )}
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
      {accessTokenCardList}
    </React.Fragment>
  )
}
