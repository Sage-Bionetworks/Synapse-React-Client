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
            animation: t.visible
              ? 'fadeInUp 0.5s ease'
              : 'fadeOutDown 0.5s ease',
          }}
        ></ToastBar>
      )}
    </Toaster>
  )
}

/**
 * Displays a toast message. Requires one 'SynapseToastContainer' to be somewhere in the page.
 *
 * @param variant - The type of toast message to display.
 * @param title - The title of the toast message.
 * @param description - The description of the toast message.
 * @param autoCloseInMs - The amount of time in milliseconds to wait before automatically closing the toast. To prevent autoclose, set to 0 or Infinity.
 */
export const displayToast = (
  variant: 'info' | 'success' | 'warning' | 'danger',
  title: string,
  description: string,
  autoCloseInMs = 15000,
) => {
  // Some toast libraries use 0 to prevent autoclose
  // react-hot-toast doesn't, but we can convert it for better compatibility as we try to migrate to use just one library
  if (autoCloseInMs === 0) {
    autoCloseInMs = Infinity
  }

  const id = uniqueId('synToast-')
  toast(
    <FullWidthAlert
      isGlobal={false}
      onClose={() => {
        toast.dismiss(id)
      }}
      variant={variant}
      show={true}
      title={title}
      description={description}
    />,
    {
      id: id,
      className: 'SynapseToastMessage',
      duration: autoCloseInMs,
    },
  )
}
