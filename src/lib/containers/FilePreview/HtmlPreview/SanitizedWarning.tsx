import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import WarningModal from '../../synapse_form_wrapper/WarningModal'

export type SanitizedWarningProps = {
  rawHtml: string
}

function openRawHtmlInNewWindow(rawHtml: string) {
  const newWindow = window.open('', '')
  newWindow?.document.write(rawHtml)
  // close document, to run scripts inside html string
  newWindow?.document.close()
}

export function SanitizedWarning(props: SanitizedWarningProps) {
  const { rawHtml } = props
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <WarningModal
        title={'Open Untrusted Content in New Window?'}
        modalBody={
          'Click "OK" to leave this page and open this content in a new window; this enables additional functionality, but should only be done if you trust the content.'
        }
        show={showModal}
        confirmButtonText={'OK'}
        confirmButtonVariant={'sds-primary'}
        onConfirm={() => {
          openRawHtmlInNewWindow(rawHtml)
          setShowModal(false)
        }}
        onCancel={() => setShowModal(false)}
      />
      <Alert variant="info" dismissible={false} show={true} transition={false}>
        Limited rendering only.{' '}
        <a onClick={() => setShowModal(true)}>External view available.</a>
      </Alert>
    </>
  )
}
