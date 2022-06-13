import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useErrorHandler } from 'react-error-boundary'
import ReactTooltip from 'react-tooltip'
import { SynapseClient } from '../../utils/'
import { useSynapseContext } from '../../utils/SynapseContext'
import { AccessTokenRecord } from '../../utils/synapseTypes/AccessToken/AccessTokenRecord'
import { scopeDescriptions } from '../../utils/synapseTypes/AccessToken/ScopeDescriptions'
import IconSvg from '../IconSvg'
import WarningModal from '../synapse_form_wrapper/WarningModal'

export type AccessTokenCardProps = {
  /** Record referring to an access token, not a token itself */
  accessToken: AccessTokenRecord
  onDelete: (...args: any[]) => void
}

export const AccessTokenCard: React.FunctionComponent<AccessTokenCardProps> = ({
  accessToken,
  onDelete,
}: AccessTokenCardProps) => {
  const { accessToken: authToken } = useSynapseContext()
  const [showModal, setShowModal] = useState(false)
  const handleError = useErrorHandler()

  const isExpired = accessToken.state === 'EXPIRED'

  useEffect(() => {
    // For reasons unknown, the tooltips in this component would not load in Synapse.org without this
    // see https://github.com/wwayne/react-tooltip/issues/344
    ReactTooltip.rebuild()
  }, [])

  return (
    <div
      className={
        'cardContainer PersonalAccessTokenCard' +
        (isExpired ? ' bg-warning' : '')
      }
    >
      <WarningModal
        title={'Confirm Deletion'}
        modalBody={
          <>
            <p>
              If you delete this token, any applications using it will stop
              working. This action cannot be undone.
            </p>
            <p className="SRC-boldText">
              Are you sure you want to delete this token?
            </p>
          </>
        }
        confirmButtonText={'Delete Token'}
        onCancel={() => setShowModal(false)}
        onConfirm={(id: string) => {
          SynapseClient.deletePersonalAccessToken(id, authToken)
            .then(() => {
              onDelete()
              setShowModal(false)
            })
            .catch(error => {
              handleError(error)
            })
        }}
        confirmButtonVariant="danger"
        show={showModal}
        onConfirmCallbackArgs={[accessToken.id, authToken]}
      ></WarningModal>

      <div className="SRC-cardContent">
        <div className="SRC-eqHeightRow SRC-userCardName">
          <ReactTooltip delayShow={100} />
          <span className={'SRC-blackText'}>{accessToken.name}</span>
          {isExpired && (
            <span
              data-tip={
                'This token has expired. It no longer works and can only be deleted.'
              }
              aria-hidden="true"
            >
              <IconSvg options={{ icon: 'warning' }} />
            </span>
          )}
        </div>

        <div className="SRC-eqHeightRow">
          <span>Permissions: </span>
          {accessToken.scopes.map(scope => {
            return (
              <span
                className="PersonalAccessTokenCard__ScopeName SRC-primary-text-color SRC-primary-color-hover SRC-hand-cursor SRC-inlineFlex"
                data-tip={scopeDescriptions[scope].description}
                key={scope}
              >
                {scopeDescriptions[scope].displayName}
              </span>
            )
          })}
        </div>
        <div className="SRC-eqHeightRow">
          <span>Last used {moment(accessToken.lastUsed).fromNow()}</span>
          <span className={'SRC-deemphasized-text'}>{' | '}</span>
          <span>Created {moment(accessToken.createdOn).fromNow()}</span>
        </div>
      </div>
      {/* Delete button */}
      <div className="PersonalAccessTokenCard__DeleteButton">
        <Button
          variant="default"
          aria-label="delete"
          onClick={() => {
            if (isExpired) {
              // token no longer works, no need for warning/confirmation
              SynapseClient.deletePersonalAccessToken(accessToken.id, authToken)
                .then(() => {
                  onDelete()
                })
                .catch(error => {
                  handleError(error)
                })
            } else {
              setShowModal(true)
            }
          }}
        >
          <IconSvg options={{ icon: 'delete' }} aria-hidden="true" />
        </Button>
      </div>
    </div>
  )
}
