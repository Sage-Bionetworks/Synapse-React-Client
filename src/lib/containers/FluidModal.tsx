import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { ButtonVariant } from 'react-bootstrap/esm/types'
import Typography from '../utils/typography/Typography'

type ModalAction = {
  variant?: ButtonVariant
  copy: React.ReactNode
  onClick: () => void
}

export type FluidModalProps = {
  show: boolean
  children: JSX.Element
  title: string
  onClose: () => void
  primaryAction?: ModalAction
  secondaryActions?: ModalAction[]
  tertiaryActions?: ModalAction[]
}

function ModalActionButton(props: Required<ModalAction>) {
  return (
    <Button variant={props.variant} onClick={props.onClick}>
      {props.copy}
    </Button>
  )
}

/**
 * Full-screen modal that scales with screen size. Fits requirements defined in SWC-5801
 * @param props
 * @returns
 */
export const FluidModal = (props: FluidModalProps) => {
  // TODO: Info button
  return (
    <Modal
      className="FluidModal bootstrap-4-backport"
      backdrop="static"
      animation={false}
      show={props.show}
      onHide={props.onClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <Typography variant={'headline1'}>{props.title}</Typography>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        {props.tertiaryActions && (
          <>
            {props.tertiaryActions.map((action, index) => {
              return (
                <ModalActionButton
                  key={index}
                  {...{
                    variant: 'outline',
                    ...action,
                  }}
                />
              )
            })}
            <div style={{ margin: 'auto' }}></div>
          </>
        )}
        {props.secondaryActions &&
          props.secondaryActions.reverse().map((action, index) => {
            return (
              <ModalActionButton
                key={index}
                {...{
                  variant: 'outline',
                  ...action,
                }}
              />
            )
          })}
        {props.primaryAction && (
          <ModalActionButton
            {...{
              variant: 'sds-primary',
              ...props.primaryAction,
            }}
          />
        )}
      </Modal.Footer>
    </Modal>
  )
}
