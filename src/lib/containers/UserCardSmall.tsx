import React, { useRef, useState } from 'react'
import { Overlay } from 'react-bootstrap'
import { MEDIUM_USER_CARD } from '../utils/SynapseConstants'
import { UserProfile } from '../utils/synapseTypes/'
import UserCard from './UserCard'

export type UserCardSmallProps = {
  userProfile: UserProfile
  showCardOnHover?: boolean
  disableLink?: boolean
  link?: string
  openLinkInNewTab?: boolean
}

const TIMER_DELAY_SHOW = 250 // milliseconds
const TIMER_DELAY_HIDE = 500

function resetTimer(timer: React.MutableRefObject<NodeJS.Timeout | null>) {
  if (timer.current) {
    clearTimeout(timer.current)
  }
}

export const UserCardSmall: React.FunctionComponent<UserCardSmallProps> = ({
  userProfile,
  showCardOnHover = true,
  disableLink,
  link,
  openLinkInNewTab,
  ...rest
}) => {
  const timer = useRef<NodeJS.Timeout | null>(null)
  const [show, setShow] = useState(false)

  const target = useRef(null)

  const OverlayComponent = (
    <Overlay target={target.current} show={show} placement="top-start">
      {({ placement, arrowProps, show: _show, popper, ...props }) => {
        return (
          <div
            className="bootstrap-4-backport"
            onMouseEnter={() => {
              resetTimer(timer)
              setShow(true)
            }}
            onMouseLeave={() => {
              // Assume the user is done with the card regardless of click state
              resetTimer(timer)
              timer.current = setTimeout(() => {
                setShow(false)
              }, TIMER_DELAY_HIDE)
            }}
            {...props}
            style={{ ...props.style, width: 'max-content', minWidth: '300px' }}
          >
            <UserCard
              size={MEDIUM_USER_CARD}
              userProfile={userProfile}
              link={link}
              disableLink={disableLink}
              openLinkInNewTab={openLinkInNewTab}
              {...rest}
            />
          </div>
        )
      }}
    </Overlay>
  )

  return showCardOnHover ? (
    <>
      {OverlayComponent}
      <span
        ref={target}
        onMouseEnter={() => {
          resetTimer(timer)
          timer.current = setTimeout(() => setShow(true), TIMER_DELAY_SHOW)
        }}
        onMouseLeave={() => {
          resetTimer(timer)
          timer.current = setTimeout(() => setShow(false), TIMER_DELAY_HIDE)
        }}
        onClick={event => {
          event.stopPropagation()
          resetTimer(timer)
          setShow(!show)
        }}
        className="SRC-userCard UserCardSmall SRC-underline-on-hover"
        style={{ whiteSpace: 'nowrap' }}
      >{`@${userProfile.userName}`}</span>
    </>
  ) : disableLink ? (
    <span
      className="SRC-userCard UserCardSmall SRC-boldText"
      style={{ cursor: 'unset' }}
    >{`@${userProfile.userName}`}</span>
  ) : (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a
      className="SRC-userCard UserCardSmall"
      target={openLinkInNewTab ? '_blank' : ''}
      rel={openLinkInNewTab ? 'noreferrer' : ''}
      href={
        link ? link : `https://www.synapse.org/#!Profile:${userProfile.ownerId}`
      }
    >{`@${userProfile.userName}`}</a>
  )
}
