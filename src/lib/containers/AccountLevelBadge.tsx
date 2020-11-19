import { UserBundle } from 'lib/utils/synapseTypes'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { SynapseClient, SynapseConstants } from '../utils'
import { ReactComponent as Registered } from '../assets/icons/account-registered.svg'
import { ReactComponent as Certified } from '../assets/icons/account-certified.svg'
import { ReactComponent as Validated } from '../assets/icons/account-validated.svg'

export type AccountLevelBadgeProps = {
  userId: string
}

export const AccountLevelBadge: React.FunctionComponent<AccountLevelBadgeProps> = ({
  userId,
}: AccountLevelBadgeProps) => {
  const handleError = useErrorHandler()
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

        const bundle = await SynapseClient.getUserBundle(
          userId,
          certificationOrVerification,
          undefined,
        )
        setUserBundle(bundle)
      
      } catch (err) {
        handleError(err)
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [userId])
  if (isLoading) {
    return <></>
  }

  let accountLevelString:string = 'Registered'
  let icon = <Registered />
  if (userBundle?.isCertified) {
    accountLevelString = 'Certified'
    icon = <Certified />
  }
  if (userBundle?.isVerified) {
    accountLevelString = 'Validated'
    icon = <Validated />
  }
  return (
    <div
      className={
        'AccountLevelBadge cardContainer'
      }
    >
      <div className="AccountLevelBadge__iconContainer">
        {icon}
      </div>
      <div className="AccountLevelBadge__body">
        <p className="AccountLevelBadge__body__userAccountLevel">
          {accountLevelString}
        </p>
        <p className="AccountLevelBadge__body__accountLevelLabel">
          Synapse Account Level
        </p>
        <a
          className='AccountLevelBadge__body__moreInfoLink'
          target="_blank"
          rel="noopener noreferrer"
          href='https://docs.synapse.org/articles/accounts_certified_users_and_profile_validation.html'
        >
          Learn more
        </a>
      </div>
    </div>
  )
}
