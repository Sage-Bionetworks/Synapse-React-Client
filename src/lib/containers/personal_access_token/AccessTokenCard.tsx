import {
  faExclamationTriangle,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
import * as React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useErrorHandler } from 'react-error-boundary'
import ReactTooltip from 'react-tooltip'
import { SynapseClient } from '../../utils/'
import { AccessTokenRecord } from '../../utils/synapseTypes/AccessToken/AccessTokenRecord'
import { scopeDescriptions } from '../../utils/synapseTypes/AccessToken/ScopeDescriptions'
import WarningModal from '../synapse_form_wrapper/WarningModal'

export type AccessTokenCardProps = {
  accessToken: AccessTokenRecord
  token?: string
  onDelete: (...args: any[]) => void
}

export const AccessTokenCard: React.FunctionComponent<AccessTokenCardProps> = ({
  accessToken,
  token,
  onDelete,
}: AccessTokenCardProps) => {
  const [showModal, setShowModal] = useState(false)
  const handleError = useErrorHandler()

  const isExpired = accessToken.state === 'EXPIRED'

  return (
    <div
      className={
        'cardContainer SRC-personalAccessTokenCard' +
        (isExpired ? ' bg-warning' : '')
      }
    >
      <WarningModal
        title={'Confirm Deletion'}
        copy={
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
        confirmCopy={'Delete Token'}
        onCancel={() => setShowModal(false)}
        onConfirm={(id: string, token: string) => {
          SynapseClient.deletePersonalAccessToken(id, token)
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
        callbackArgs={[accessToken.id, token]}
      ></WarningModal>

      <div className="SRC-cardContent">
        <p className="SRC-eqHeightRow SRC-userCardName">
          <span className={'SRC-blackText'}>{accessToken.name}</span>
          {isExpired && (
            <span>
              <ReactTooltip delayShow={100} />{' '}
              <FontAwesomeIcon
                data-tip={
                  'This token has expired. It no longer works and can only be deleted.'
                }
                icon={faExclamationTriangle}
                aria-hidden="true"
              />
            </span>
          )}
        </p>

        <p className="SRC-eqHeightRow">
          <span>Permissions: </span>
          {accessToken.scopes.map(scope => {
            return (
              <span
                className="SRC-primary-text-color SRC-primary-color-hover SRC-hand-cursor SRC-inlineFlex SRC-scopeName"
                data-tip={scopeDescriptions[scope].description}
                key={scope}
              >
                {scopeDescriptions[scope].displayName}
              </span>
            )
          })}
        </p>
        <p className="SRC-eqHeightRow">
          <span>Last used {moment(accessToken.lastUsed).fromNow()}</span>
          <span className={'SRC-deemphasized-text'}>{' | '}</span>
          <span>Created {moment(accessToken.createdOn).fromNow()}</span>
        </p>
      </div>
      {/* Delete button */}
      <div className="SRC-deleteAccessTokenButton">
        <Button
          variant="default"
          aria-label="delete"
          onClick={() => {
            if (isExpired) {
              // token no longer works, no need for warning/confirmation
              SynapseClient.deletePersonalAccessToken(accessToken.id, token)
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
          <FontAwesomeIcon icon={faTrash} aria-hidden="true" />
        </Button>
      </div>
    </div>
  )
}
