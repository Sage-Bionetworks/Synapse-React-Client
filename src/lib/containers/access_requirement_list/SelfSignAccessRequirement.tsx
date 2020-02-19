import * as React from 'react'
import { useEffect, useState } from 'react'
import {
  SelfSignAccessRequirement,
  UserProfile,
  WikiPageKey,
  UserBundle,
  AccessRequirementStatus
} from '../../../lib/utils/synapseTypes'
import { SynapseClient, SynapseConstants } from '../../../lib/utils'
import AccessApprovalCheckMark from './AccessApprovalCheckMark'
import AcceptedRequirements from './AcceptedRequirements'

type Props = {
  accessRequirement: SelfSignAccessRequirement,
  token: string | undefined,
  user: UserProfile | undefined,
  onHide?: Function,
}

export default function SelfSignAccessRequirementComponent({
  accessRequirement,
  token,
  user,
  onHide,
}: Props) {

  const [wikiPage, setWikiPage] = useState<WikiPageKey | undefined>(undefined)
  const [userBundle, setUserBundle] = useState<UserBundle | undefined>(undefined)
  const [accessRequirementStatus, setAccessRequirementStatus] = useState<AccessRequirementStatus | undefined>(undefined)
  const [isApproved, setIsApproved] = useState<boolean>(false)

  useEffect(() => {

    const getSelfSignAccessData = async () => {

      const wikiPageRequirment = await SynapseClient.getWikiPageKey(token, accessRequirement.id)

      setWikiPage(wikiPageRequirment)

      const certificationOrVerification = SynapseConstants.USER_BUNDLE_MASK_IS_CERTIFIED | SynapseConstants.USER_BUNDLE_MASK_IS_VERIFIED
      const bundle = await SynapseClient.getUserBundle(user!.ownerId, certificationOrVerification, token)
      setUserBundle(bundle)

      const selfSignAccessRequirement = await SynapseClient.getAccessRequirementStatus(token, accessRequirement.id)
      setAccessRequirementStatus(selfSignAccessRequirement)
      setIsApproved(selfSignAccessRequirement.isApproved)
    }

    getSelfSignAccessData()
  }, [accessRequirement, token, user])

  return (
    <div>
      {accessRequirement.isCertifiedUserRequired &&
        <div className="requirement-container">
          <AccessApprovalCheckMark isCompleted={userBundle?.isCertified} />
          <div>
            <p className="self-sign-access-title bold-text">
              You must first become a
              <a className="self-sign-access-certified bold-text" href="https://www.synapse.org/#!Quiz:">
                &nbsp;certified user
              </a>
            </p>
            <p className={`self-sign-access-certified-success-text ${userBundle?.isCertified ? 'show' : 'hide'}`}>
              You have became a certified user
            </p>
          </div>
        </div>
      }
      {accessRequirement.isValidatedProfileRequired &&
        <div className="requirement-container">
          <AccessApprovalCheckMark isCompleted={userBundle?.isVerified} />
          <div>
            <p className="self-sign-access-title bold-text">
              You must first apply to have your
              <a className="self-sign-access-validated bold-text" href="https://www.synapse.org/#!Profile:v/settings">
                &nbsp;user profile validated
              </a>
            </p>
            <p className={`self-sign-access-verified-success-text ${userBundle?.isVerified ? 'show' : 'hide'}`}>
              You have applied to have user profile valiadation successfully
            </p>
          </div>
        </div>
      }
      <div className="requirement-container">
        <AccessApprovalCheckMark isCompleted={isApproved} />
        <div className="terms-of-use-content">
          <AcceptedRequirements
            user={user}
            token={token}
            wikiPage={wikiPage!}
            accessRequirement={accessRequirement}
            accessRequirementStatus={accessRequirementStatus!}
            approval={isApproved}
            onHide={onHide}
          />
        </div>
      </div>
    </div>
  )
}

