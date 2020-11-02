import moment from 'moment'
import * as React from 'react'
import { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCircle,
  faEllipsisV,
  faCopy,
  faTrash,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons'
import { AccessTokenRecord } from 'lib/utils/synapseTypes/AccessToken/AccessTokenRecord'
import ReactTooltip from 'react-tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SynapseClient } from 'lib/utils'
import { scopeDescriptions } from 'lib/utils/synapseTypes/AccessToken/ScopeDescriptions'
import WarningModal from '../synapse_form_wrapper/WarningModal'
import { Button } from 'react-bootstrap'

library.add(faCircle)
library.add(faEllipsisV)
library.add(faCopy)

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
  const [showModal, setShowModal] = useState<boolean>(false)

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
          <React.Fragment>
            <p>
              If you delete this token, any applications using it will stop
              working. This action cannot be undone.
            </p>
            <p className="SRC-boldText">
              Are you sure you want to delete this token?
            </p>
          </React.Fragment>
        }
        confirmCopy={'Delete Token'}
        onCancel={() => setShowModal(false)}
        onOK={async (id: string, token: string) => {
          await SynapseClient.deletePersonalAccessToken(id, token)
          setShowModal(false)
          onDelete()
        }}
        okButtonVariant="danger"
        show={showModal}
        callbackArgs={[accessToken.id, token]}
      ></WarningModal>

      <div className="SRC-cardContent">
        <p className="SRC-eqHeightRow SRC-userCardName">
          <span className={'SRC-blackText'}>{accessToken.name + ' '}</span>
          {isExpired && (
            <span>
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
        <ReactTooltip delayShow={100} />

        <p className="SRC-eqHeightRow">
          <span>Permissions: </span>
          {accessToken.scopes.map(scope => {
            return (
              <span
                className="SRC-primary-text-color SRC-primary-color-hover SRC-hand-cursor SRC-inlineFlex SRC-scopeName"
                data-tip={scopeDescriptions[scope]}
                key={scope}
              >
                {scope}
              </span>
            )
          })}
        </p>
        <p className="SRC-eqHeightRow">
          <span>Last used {moment(accessToken.lastUsed).fromNow()}</span>
          <span className={'SRC-deemphasized-text'}>
            {' | '} Created {moment(accessToken.createdOn).fromNow()}
          </span>
        </p>
      </div>
      {/* Delete button */}
      <div style={{ float: 'right', alignSelf: 'flex-start', margin: '10px' }}>
        <Button
          variant="light"
          className="btn"
          aria-label="delete"
          onClick={async () => {
            if (isExpired) {
              // token no longer works, no need for warning/confirmation
              await SynapseClient.deletePersonalAccessToken(
                accessToken.id,
                token,
              )
              onDelete()
            } else {
              return setShowModal(true)
            }
          }}
        >
          <FontAwesomeIcon icon={faTrash} aria-hidden="true" />
        </Button>
      </div>
    </div>
  )
}
