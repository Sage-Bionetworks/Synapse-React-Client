import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import * as React from 'react'
import { Button, Modal, ModalBody } from 'react-bootstrap'
import { Checkbox } from '../widgets/Checkbox'
import { SynapseClient } from 'lib/utils'
import { AccessTokenGenerationRequest } from 'lib/utils/synapseTypes/AccessToken/AccessTokenGenerationRequest'
import { scopeDescriptions } from 'lib/utils/synapseTypes/AccessToken/ScopeDescriptions'
import { Error } from 'lib/containers/Error'
import { CopyToClipboardInput } from '../CopyToClipboardInput'

library.add(faTimes)

const INVALID_INPUT_MSG =
  'You must provide a token name and at least one permission.'

export type CreateAccessTokenModalProps = {
  onClose: (...args: any[]) => void
  onCreate: (...args: any[]) => void
  token: string
}

export const CreateAccessTokenModal: React.FunctionComponent<CreateAccessTokenModalProps> = ({
  onClose,
  onCreate,
  token,
}: CreateAccessTokenModalProps) => {
  const [tokenName, setTokenName] = React.useState('')
  const [viewAccess, setViewAccess] = React.useState(false)
  const [downloadAccess, setDownloadAccess] = React.useState(false)
  const [modifyAccess, setModifyAccess] = React.useState(false)

  const [isLoading, setIsLoading] = React.useState(false)

  const [showCreatedToken, setShowCreatedToken] = React.useState(false)
  const [createdToken, setCreatedToken] = React.useState('')

  const [errorMessage, setErrorMessage] = React.useState('')
  const [showErrorMessage, setShowErrorMessage] = React.useState(false)

  const handleTokenNameChange = (
    event: React.SyntheticEvent<HTMLInputElement>,
  ) => {
    setTokenName((event.target as HTMLInputElement).value)
  }

  const validateInput = (tokenName: string, access: boolean[]): boolean => {
    return !!tokenName && access.some(x => x)
  }

  const onSubmit = async (): Promise<void> => {
    if (validateInput(tokenName, [viewAccess, downloadAccess, modifyAccess])) {
      try {
        const request: AccessTokenGenerationRequest = {
          scope: [],
          name: tokenName,
        }
        if (viewAccess) request.scope.push('view')
        if (downloadAccess) request.scope.push('download')
        if (modifyAccess) request.scope.push('modify')

        setIsLoading(true)

        const response = await SynapseClient.createPersonalAccessToken(
          request,
          token,
        )

        setIsLoading(false)
        setCreatedToken(response.token)
        setShowCreatedToken(true)
        onCreate()
      } catch (err) {
        setIsLoading(false)
        setErrorMessage(err.reason)
        setShowErrorMessage(true)
      }
    } else {
      setErrorMessage(INVALID_INPUT_MSG)
      setShowErrorMessage(true)
    }
  }

  return (
    <Modal animation={false} show={true} onHide={onClose}>
      <Modal.Header>
        <Modal.Title>Create New Personal Access Token</Modal.Title>
      </Modal.Header>
      <ModalBody>
        {isLoading ? (
          <p>Loading</p>
        ) : showCreatedToken ? (
          <React.Fragment>
            <span className="SRC-boldText">
              This token will not be able to be retrieved again.
            </span>{' '}
            <span>
              If needed, generate a new personal access token, and delete this
              one.
            </span>
            <div style={{ textAlign: 'center' }}>
              <CopyToClipboardInput value={createdToken} inputWidth={'350px'} />
            </div>
            <p>
              This token grants access to your account functions and should be
              treated like a password.
            </p>
          </React.Fragment>
        ) : (
          <div className="SRC-marginFive">
            <form>
              <div className="SRC-marginBottomTen">
                <p className="SRC-boldText">Token Name</p>
                <input
                  className="form-control "
                  value={tokenName}
                  onChange={handleTokenNameChange}
                  type="text"
                  placeholder="e.g. Synapse command line access on my laptop"
                  style={{ width: '325px' }}
                ></input>
              </div>
              <div className="SRC-marginBottomTop">
                <p className="SRC-boldText">Token Permissions</p>
                <Checkbox
                  label={`view (${scopeDescriptions.view})`}
                  id="view"
                  checked={viewAccess}
                  onChange={() => setViewAccess(!viewAccess)}
                ></Checkbox>
                <Checkbox
                  label={`download (${scopeDescriptions.download})`}
                  id="download"
                  checked={downloadAccess}
                  onChange={() => setDownloadAccess(!downloadAccess)}
                ></Checkbox>
                <Checkbox
                  label={`modify (${scopeDescriptions.modify})`}
                  id="modify"
                  checked={modifyAccess}
                  onChange={() => setModifyAccess(!modifyAccess)}
                ></Checkbox>
              </div>
            </form>
            <div className="SRC-center-text">
              {showErrorMessage && <Error error={errorMessage}></Error>}
            </div>
          </div>
        )}
      </ModalBody>
      <Modal.Footer>
        {showCreatedToken ? (
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        ) : (
          <React.Fragment>
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button variant={'primary'} onClick={onSubmit}>
              <span>{'Create Token'}</span>
            </Button>
          </React.Fragment>
        )}
      </Modal.Footer>
    </Modal>
  )
}
