import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import * as React from 'react'
import IconCopy from '../../lib/assets/icons/IconCopy'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

library.add(faTimes)

export type CopyToClipboardInputProps = {
  value: string
  inputWidth: string
}

/**
 * Component that holds a large string in a readonly <input> to be copied to the user's clipboard when clicked.
 * This component should only be used when the value to copy is not very long AND the full length of the string
 * does not necessarily need to be seen by the user. This component was adapted from the email address copy to
 * clipboard functionality in UserCardMedium. For smaller/inline strings, look at UserCardMedium functionality
 * for displaying the value in a <p> tag instead of a readonly <input> tag.
 */
export const CopyToClipboardInput: React.FunctionComponent<CopyToClipboardInputProps> = ({
  value,
  inputWidth,
}: CopyToClipboardInputProps) => {
  const [showModal, setShowModal] = React.useState(false)
  const htmlDivRef = React.createRef<HTMLDivElement>()

  const copyToClipboard = (value: string) => (event: React.SyntheticEvent) => {
    event.preventDefault()
    // https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
    // this copies the email to the clipoard
    const el = document.createElement('textarea')
    el.value = value
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    htmlDivRef.current!.appendChild(el)
    el.select()
    document.execCommand('copy')
    htmlDivRef.current!.removeChild(el)
    // show modal and hide after 4 seconds, the timing is per Material Design
    setShowModal(true)
    // hide after 4 seconds
    setTimeout(() => {
      setShowModal(false)
    }, 4000)
  }

  return (
    <React.Fragment>
      <TransitionGroup>
        {showModal && (
          <CSSTransition
            key={value}
            classNames="SRC-card"
            timeout={{ enter: 500, exit: 300 }}
          >
            <div key={value} className="SRC-modal">
              Token copied to clipboard
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>{' '}
      <input
        className="form-control SRC-marginBottomTop"
        type="text"
        style={{
          display: 'inline',
          width: inputWidth,
          marginRight: '5px',
        }}
        value={value}
        readOnly={true}
        onClick={copyToClipboard(value)}
      ></input>
      <div
        ref={htmlDivRef}
        style={{ display: 'inline' }}
        onClick={copyToClipboard(value)}
      >
        {IconCopy}
      </div>
    </React.Fragment>
  )
}

export default CopyToClipboardInput
