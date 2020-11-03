import * as React from 'react'
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
      <div style={{ display: 'flex' }}>
        <div style={{ alignItems: 'flex-start', flexGrow: 1 }}>
          <h1>{title}</h1>
          {body}
        </div>
        <div style={{ alignItems: 'flex-end', alignSelf: 'center' }}>
          <button
            onClick={() => setShowCreateTokenModal(true)}
            className="btn btn-primary"
            style={{ display: 'right', alignSelf: 'bottom' }}
          >
            Create New Token
          </button>
        </div>
      </div>
      {accessTokenCardList}
    </React.Fragment>
  )
}
