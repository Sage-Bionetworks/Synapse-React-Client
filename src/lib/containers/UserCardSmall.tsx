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
}

const TIMER_DELAY = 1000 // 1 second

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
              }, TIMER_DELAY)
            }}
            {...props}
            style={{ ...props.style, width: 'max-content', minWidth: '300px' }}
          >
            <UserCard
              size={MEDIUM_USER_CARD}
              ownerId={userProfile.ownerId}
              link={link}
              disableLink={disableLink}
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
          timer.current = setTimeout(() => setShow(true), TIMER_DELAY)
        }}
        onMouseLeave={() => {
          resetTimer(timer)
          timer.current = setTimeout(() => setShow(false), TIMER_DELAY)
        }}
        onClick={() => {
          resetTimer(timer)
          setShow(!show)
        }}
        className="SRC-userCard UserCardSmall SRC-primary-text-color SRC-underline-on-hover"
        style={{ whiteSpace: 'nowrap' }}
      >{`@${userProfile.userName}`}</span>
    </>
  ) : disableLink ? (
    <span
      className="SRC-userCard UserCardSmall SRC-boldText"
      style={{ cursor: 'unset' }}
    >{`@${userProfile.userName}`}</span>
  ) : (
    <a
      className="SRC-userCard UserCardSmall"
      href={
        link ? link : `https://www.synapse.org/#!Profile:${userProfile.ownerId}`
      }
    >{`@${userProfile.userName}`}</a>
  )
}
