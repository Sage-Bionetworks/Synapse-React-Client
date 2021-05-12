import { UserBundle } from '../utils/synapseTypes'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { SynapseClient, SynapseConstants } from '../utils'
import { ReactComponent as Registered } from '../assets/icons/account-registered.svg'
import { ReactComponent as Certified } from '../assets/icons/account-certified.svg'
import { ReactComponent as Validated } from '../assets/icons/account-validated.svg'
import { ErrorBanner } from './ErrorBanner'

export type AccountLevelBadgeProps = {
  userId: string
}

export const accountLevelRegisteredLabel: string = 'Registered'
export const accountLevelCertifiedLabel: string = 'Certified'
export const accountLevelVerifiedLabel: string = 'Validated'

export const AccountLevelBadge: React.FunctionComponent<AccountLevelBadgeProps> = ({
  userId,
}: AccountLevelBadgeProps) => {
  const [error, setError] = useState()
  const [userBundle, setUserBundle] = useState<UserBundle | undefined>(
    undefined,
  )
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true)

        const certificationOrVerification =
          SynapseConstants.USER_BUNDLE_MASK_IS_CERTIFIED |
          SynapseConstants.USER_BUNDLE_MASK_IS_VERIFIED

        const bundle: UserBundle = await SynapseClient.getUserBundle(
          userId,
          certificationOrVerification,
          undefined,
        )
        setUserBundle(bundle)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [userId])
  if (isLoading) {
    return <></>
  }
  if (error) {
    return <ErrorBanner error={error} />
  }

  let accountLevelString: string = accountLevelRegisteredLabel
  let icon = <Registered />
  if (userBundle?.isCertified) {
    accountLevelString = accountLevelCertifiedLabel
    icon = <Certified />
  }
  if (userBundle?.isVerified) {
    accountLevelString = accountLevelVerifiedLabel
    icon = <Validated />
  }
  return (
    <div className={'AccountLevelBadge cardContainer'}>
      <div className="AccountLevelBadge__iconContainer">{icon}</div>
      <div className="AccountLevelBadge__body">
        <p className="AccountLevelBadge__body__userAccountLevel">
          {accountLevelString}
        </p>
        <p className="AccountLevelBadge__body__accountLevelLabel">
          Synapse Account Level
        </p>
        <a
          className="AccountLevelBadge__body__moreInfoLink"
          target="_blank"
          rel="noopener noreferrer"
          href="https://help.synapse.org/docs/User-Types.2007072795.html"
        >
          Learn more
        </a>
      </div>
    </div>
  )
}
