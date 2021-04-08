import * as React from 'react'
import { useEffect, useState } from 'react'
// ignore because this is rollup requiring imports be named a certain way
// tslint:disable-next-line
import ReactTooltip from 'react-tooltip'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { UserBundle, UserProfile } from '../utils/synapseTypes/'
import { getColor } from '../utils/functions/getUserData'
import { SynapseClient, SynapseConstants } from '../utils'
import { ReactComponent as Registered } from '../assets/icons/account-registered.svg'
import { ReactComponent as Certified } from '../assets/icons/account-certified.svg'
import { ReactComponent as Validated } from '../assets/icons/account-validated.svg'

library.add(faCircle)

export type UserCardSmallProps = {
  userProfile: UserProfile
  preSignedURL?: string
  hideText?: boolean
  hideTooltip?: boolean
  link?: string
  extraSmall?: boolean,
  showAccountLevelIcon?: boolean
}

export const UserCardSmall: React.FunctionComponent<UserCardSmallProps> = ({
  userProfile,
  hideText = false,
  hideTooltip = false,
  preSignedURL,
  link,
  extraSmall = false,
  showAccountLevelIcon = false
}) => {
  const [userBundle, setUserBundle] = useState<UserBundle | undefined>()
  const linkLocation = link
    ? link
    : `https://www.synapse.org/#!Profile:${userProfile.ownerId}`
  let img
  let icon = <Registered />
  let marginLeft
  let label = ''
  if (!hideTooltip) {
    if (userProfile.displayName) {
      label += userProfile.displayName
    } else if (userProfile.firstName && userProfile.lastName) {
      label += `${userProfile.firstName} ${userProfile.lastName}`
    }
    if (userProfile.userName) {
      label += ` (${userProfile.userName})`
    }
    if (userProfile.position) {
      label += ` <br/>${userProfile.position}`
    }
    if (userProfile.location) {
      label += ` <br/>${userProfile.location}`
    }
  }

  const imgClassName = `SRC-userImgSmall ${extraSmall ? 'extraSmall' : ''} ${
    preSignedURL ? '' : 'SRC-centerContentInline'
  } `
  if (preSignedURL) {
    marginLeft = '3px'
    img = (
      <div
        className={imgClassName}
        style={{ backgroundImage: `url(${preSignedURL})` }}
        data-for={label}
        data-tip={label}
      />
    )
  } else {
    const color = getColor(userProfile.userName)
    marginLeft = '3px'
    img = (
      <div style={{ background: color }} className={imgClassName}>
        {(userProfile.firstName && userProfile.firstName[0]) ||
          userProfile.userName[0]}
      </div>
    )
  }

  let mounted = true
  useEffect(() => {
    if (mounted) {
      if (showAccountLevelIcon) {
        getUserAccountLevelIcon()
      }
    }
    return () => {
      mounted = false
    }
  }, [])

  const getUserAccountLevelIcon = async() => {
    try {
      const certificationOrVerification =
        SynapseConstants.USER_BUNDLE_MASK_IS_CERTIFIED |
        SynapseConstants.USER_BUNDLE_MASK_IS_VERIFIED

      const bundle: UserBundle = await SynapseClient.getUserBundle(
        userProfile.ownerId,
        certificationOrVerification,
        undefined,
      )
      if (userBundle?.isCertified) {
        icon = <Certified />
      }
      if (userBundle?.isVerified) {
        icon = <Validated />
      }
      setUserBundle(bundle)
    } catch (err) {
      console.log("getUserAccountLevelIcon", err)
    }
  }

  return (<>
    <a
      href={linkLocation}
      className={
        'SRC-userCard UserCardSmall SRC-primary-text-color SRC-no-underline-on-hover '
      }
    >
      {img}
      <ReactTooltip delayShow={1000} id={label} multiline={true} />
      {!hideText && (
        <span
          className="SRC-primary-text-color SRC-underline-on-hover"
          style={{ marginLeft, whiteSpace: 'nowrap' }}
        >{`@${userProfile.userName}`}</span>
      )}
    </a>
    { showAccountLevelIcon && (<span className={"account-level-icon"}>{icon}</span>) }
  </>)
}
