import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import {
  useDeleteOAuthClient,
  useMutateOAuthClient,
} from '../../utils/hooks/SynapseAPI'
import { OAuthClient } from '../../utils/synapseTypes/OAuthClient'
import Typography from '../../utils/typography/Typography'
import { displayToast } from '../ToastMessage'
import { AlertIcon } from '../../assets/icons/Alert'

export type ConfirmModalProps = {
  showModal: boolean
  isDelete: boolean
  client: OAuthClient
  onClose: () => void
}
export const ConfirmModal: React.FunctionComponent<ConfirmModalProps> = ({
  showModal,
  isDelete,
  client,
  onClose,
}) => {
  const deleteClient = useDeleteOAuthClient({
    onSuccess: () => {
      displayToast('Successfully deleted', 'success')
      onClose()
    },
  })

  const updateClient = useMutateOAuthClient({
    onSuccess: () => {
      displayToast('Successfully updated', 'success')
      onClose()
    },
  })

  const onSubmit = () => {
    isDelete
      ? deleteClient.mutate(client?.client_id!)
      : updateClient.mutate({ action: 'UPDATE', client: client! })
    onClose()
  }

  return (
    <Modal
      show={showModal}
      animation={false}
      onHide={onClose}
      style={{ textAlign: 'center' }}
    >
      <Modal.Header>
        <AlertIcon />
        <Typography variant="headline2">Are you absolutely sure?</Typography>
      </Modal.Header>
      <Modal.Body>
        <Typography variant="body1">
          Editing this detail will render your client invalid and will require
          you to resubmit verification. This action cannot be undone.
        </Typography>
        <Typography variant="headline3">
          Are you sure you want to continue editing this field?
        </Typography>
        <Button variant="primary" onClick={onClose}>
          No, Don't Edit
        </Button>
        <button onClick={onSubmit}>
          <Typography color="error" variant="body1">
            Yes, Continue
          </Typography>
        </button>
      </Modal.Body>
    </Modal>
  )
}
