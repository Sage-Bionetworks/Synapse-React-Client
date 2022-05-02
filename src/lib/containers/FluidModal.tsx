import { Skeleton } from '@material-ui/lab'
import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { ButtonVariant } from 'react-bootstrap/esm/types'
import Typography from '../utils/typography/Typography'
import { HelpPopover, HelpPopoverProps } from './HelpPopover'

type ModalAction = {
  skeleton?: boolean
  variant?: ButtonVariant
  copy?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  [key: string]: any
}

export type FluidModalProps = {
  className?: string
  show: boolean
  children: JSX.Element
  title: string | JSX.Element
  titlePopoverProps?: HelpPopoverProps
  onClose: () => void
  primaryAction?: ModalAction
  secondaryActions?: ModalAction[]
  tertiaryActions?: ModalAction[]
}

function ModalActionButton(props: ModalAction) {
  const { copy, skeleton, ...rest } = props

  if (props.skeleton) {
    return <Skeleton variant="rect" width={150} />
  }

  return <Button {...rest}>{copy}</Button>
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
      className={`FluidModal bootstrap-4-backport ${props.className ?? ''}`}
      backdrop="static"
      animation={false}
      show={props.show}
      onHide={props.onClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <Typography variant={'headline1'}>
            {props.title}
            {props.titlePopoverProps && (
              <HelpPopover
                {...{
                  placement: 'right',
                  ...props.titlePopoverProps,
                  className:
                    'SRC-margin-left-5 ' +
                    (props.titlePopoverProps?.className ?? ''),
                }}
              />
            )}
          </Typography>
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
