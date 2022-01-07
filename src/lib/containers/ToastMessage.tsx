import { uniqueId } from 'lodash-es'
import React from 'react'
import { toast, ToastBar, Toaster } from 'react-hot-toast'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import FullWidthAlert from './FullWidthAlert'

export type ToastMessageProps = {
  text: string
  show: boolean
  autohide: boolean
}

/**
 *
 * Generalization of a Material-style toast message used in a couple of places. This component is simple and
 * cannot handle issuing multiple toast messages. For more sophisticated cases, see {@link displayToast}
 */
export const ToastMessage: React.FunctionComponent<ToastMessageProps> = ({
  text,
  show,
  autohide,
}) => {
  return (
    <TransitionGroup>
      {show && (
        <CSSTransition
          classNames="SRC-card"
          timeout={autohide ? { enter: 500, exit: 300 } : {}}
        >
          <div className="SRC-modal">{text}</div>
        </CSSTransition>
      )}
    </TransitionGroup>
  )
}

/**
 * Customized ToastContainer for using react-toastify.
 *
 * Note that this will collide with other notification systems, such as the BootstrapNotify notifications
 * in SWC.
 */
export const SynapseToastContainer: React.FunctionComponent = () => {
  return (
    <Toaster
      containerClassName="SynapseToastContainer bootstrap-4-backport"
      position="bottom-center"
    >
      {t => (
        <ToastBar
          toast={t}
          style={{
            ...t.style,
            animation: t.visible ? 'fadeInUp 0.5s ease' : 'fadeOutDown 1s ease', // The exit animation needs to be long enough for the element to be removed, or else it will pop back in
          }}
        ></ToastBar>
      )}
    </Toaster>
  )
}

type ToastMessageOptions = {
  title?: string
  /* autoCloseInMs default: 15000 */
  autoCloseInMs?: number
  primaryButtonText?: string
  onPrimaryButtonClick?: () => void
  dismissOnPrimaryButtonClick?: boolean
  secondaryButtonText?: string
  onSecondaryButtonClickOrHref?: (() => void) | string
  dismissOnSecondaryButtonClick?: boolean
}

/**
 * Displays a toast message. Requires one 'SynapseToastContainer' to be somewhere in the page.
 *
 * @param message - The description of the toast message.
 * @param variant - The type of toast message to display. Default 'info'.

 * In ToastMessageOptions:
 *
 * @param autoCloseInMs - The amount of time in milliseconds to wait before automatically closing the toast. To prevent autoclose, set to 0 or Infinity. Default 15000.
 *
 * The rest of the options params are undefined by default.
 */
export const displayToast = (
  message: string,
  variant?: 'info' | 'success' | 'warning' | 'danger',
  toastMessageOptions: ToastMessageOptions = {},
) => {
  const id = uniqueId('synToast-')
  const onClose = () => {
    toast.dismiss(id)
  }

  const {
    title = undefined,
    primaryButtonText = undefined,
    secondaryButtonText = undefined,
    dismissOnPrimaryButtonClick = false,
    dismissOnSecondaryButtonClick = false,
  } = toastMessageOptions

  let onPrimaryButtonClick
  if (toastMessageOptions.onPrimaryButtonClick) {
    if (dismissOnPrimaryButtonClick) {
      onPrimaryButtonClick = () => {
        toastMessageOptions.onPrimaryButtonClick!()
        onClose()
      }
    } else {
      onPrimaryButtonClick = toastMessageOptions.onPrimaryButtonClick
    }
  }

  let onSecondaryButtonClickOrHref
  if (toastMessageOptions.onSecondaryButtonClickOrHref) {
    if (
      dismissOnSecondaryButtonClick &&
      typeof toastMessageOptions.onSecondaryButtonClickOrHref === 'function'
    ) {
      onSecondaryButtonClickOrHref = () => {
        // @ts-ignore - The above type guard isn't recognized within the inner function
        toastMessageOptions.onSecondaryButtonClickOrHref!()
        onClose()
      }
    } else {
      onSecondaryButtonClickOrHref =
        toastMessageOptions.onSecondaryButtonClickOrHref
    }
  }

  let { autoCloseInMs = 15000 } = toastMessageOptions
  // Some toast libraries use 0 to prevent autoclose
  // react-hot-toast doesn't, but we can convert it for better compatibility as we try to migrate to use just one library
  if (autoCloseInMs === 0) {
    autoCloseInMs = Infinity
  }

  toast(
    <FullWidthAlert
      isGlobal={false}
      onClose={onClose}
      variant={variant ?? 'info'}
      show={true}
      title={title}
      description={message}
      primaryButtonText={primaryButtonText}
      onPrimaryButtonClick={onPrimaryButtonClick}
      secondaryButtonText={secondaryButtonText}
      onSecondaryButtonClickOrHref={onSecondaryButtonClickOrHref}
    />,
    {
      id: id,
      className: 'SynapseToastMessage',
      duration: autoCloseInMs,
    },
  )
}
