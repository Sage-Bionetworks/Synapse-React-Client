import * as React from 'react'
import { Button, FormControl, Modal, ModalBody } from 'react-bootstrap'
import { SynapseClient } from '../../utils'
import { AccessTokenGenerationRequest } from '../../utils/synapseTypes/AccessToken/AccessTokenGenerationRequest'
import { scopeDescriptions } from '../../utils/synapseTypes/AccessToken/ScopeDescriptions'
import { CopyToClipboardInput } from '../CopyToClipboardInput'
import { ErrorBanner } from '../ErrorBanner'
import loadingScreen from '../LoadingScreen'
import { Checkbox } from '../widgets/Checkbox'

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

  const handleTokenNameChange = (event: React.ChangeEvent) => {
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
          loadingScreen
        ) : showCreatedToken ? (
          <>
            <span className="SRC-boldText">
              This token will not be able to be retrieved again.
            </span>{' '}
            <span>
              If needed, generate a new personal access token, and delete this
              one.
            </span>
            <div className="SRC-createdTokenCopyToClipboardContainer">
              <CopyToClipboardInput value={createdToken} inputWidth={'350px'} />
            </div>
            <p>
              This token grants access to your account functions and should be
              treated like a password.
            </p>
          </>
        ) : (
          <div className="SRC-marginFive">
            <form>
              <div className="SRC-marginBottomTen">
                <label className="SRC-boldText">Token Name</label>
                <FormControl
                  className="SRC-personalAccessTokenNameInput"
                  value={tokenName}
                  onChange={handleTokenNameChange}
                  type="text"
                  placeholder="e.g. Synapse command line access on my laptop"
                ></FormControl>
              </div>
              <div className="SRC-marginBottomTop">
                <p className="SRC-boldText">Token Permissions</p>
                <Checkbox
                  label={`${scopeDescriptions.view.displayName} (${scopeDescriptions.view.description})`}
                  id="view"
                  checked={viewAccess}
                  onChange={() => setViewAccess(!viewAccess)}
                ></Checkbox>
                <Checkbox
                  label={`${scopeDescriptions.download.displayName} (${scopeDescriptions.download.description})`}
                  id="download"
                  checked={downloadAccess}
                  onChange={() => setDownloadAccess(!downloadAccess)}
                ></Checkbox>
                <Checkbox
                  label={`${scopeDescriptions.modify.displayName} (${scopeDescriptions.modify.description})`}
                  id="modify"
                  checked={modifyAccess}
                  onChange={() => setModifyAccess(!modifyAccess)}
                ></Checkbox>
              </div>
            </form>
            <div className="SRC-center-text">
              {showErrorMessage && (
                <ErrorBanner error={errorMessage}></ErrorBanner>
              )}
            </div>
          </div>
        )}
      </ModalBody>
      <Modal.Footer>
        {showCreatedToken ? (
          <Button variant="default" onClick={onClose}>
            Close
          </Button>
        ) : (
          <>
            <Button variant="default" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={onSubmit}>
              Create Token
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  )
}
