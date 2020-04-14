import * as React from 'react'
import { useEffect, useState } from 'react'
import {
  SelfSignAccessRequirement,
  WikiPageKey,
  UserBundle,
} from '../../utils/synapseTypes'
import { SynapseClient, SynapseConstants } from '../../utils'
import AccessApprovalCheckMark from './AccessApprovalCheckMark'
import AcceptedRequirements from './AcceptedRequirements'
import { AccessRequirementProps } from './AccessRequirementProps'

export default function SelfSignAccessRequirementComponent({
  accessRequirement,
  token,
  user,
  onHide,
  accessRequirementStatus,
}: AccessRequirementProps<SelfSignAccessRequirement>) {
  const [wikiPage, setWikiPage] = useState<WikiPageKey | undefined>(undefined)
  const [userBundle, setUserBundle] = useState<UserBundle | undefined>(
    undefined,
  )
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const getSelfSignAccessData = async () => {
      try {
        setIsLoading(true)
        const wikiPageRequirment = await SynapseClient.getWikiPageKey(
          token,
          accessRequirement.id,
        )

        setWikiPage(wikiPageRequirment)

        const certificationOrVerification =
          SynapseConstants.USER_BUNDLE_MASK_IS_CERTIFIED |
          SynapseConstants.USER_BUNDLE_MASK_IS_VERIFIED

        if (user?.ownerId) {
          const bundle = await SynapseClient.getUserBundle(
            user.ownerId,
            certificationOrVerification,
            token,
          )
          setUserBundle(bundle)
        }
      } catch (err) {
        console.error('Error on get Self Sign Access Requirement: ', err)
      } finally {
        setIsLoading(false)
      }
    }

    getSelfSignAccessData()
  }, [accessRequirement, token, user])

  return (
    <div>
      {accessRequirement.isCertifiedUserRequired && (
        <div className="requirement-container">
          <AccessApprovalCheckMark isCompleted={userBundle?.isCertified} />
          <div>
            <p className="self-sign-access-title bold-text">
              You must first become a
              <a
                className="self-sign-access-certified bold-text"
                href="https://www.synapse.org/#!Quiz:"
              >
                &nbsp;certified user
              </a>
            </p>
            {isLoading && <span className="spinner" />}

            <p
              className={`self-sign-access-certified-success-text ${
                userBundle?.isCertified ? 'show' : 'hide'
              }`}
            >
              You are a certified user
            </p>
          </div>
        </div>
      )}
      {accessRequirement.isValidatedProfileRequired && (
        <div className="requirement-container">
          <AccessApprovalCheckMark isCompleted={userBundle?.isVerified} />
          <div>
            <p className="self-sign-access-title bold-text">
              You must first apply to have your
              <a
                className="self-sign-access-validated bold-text"
                href="https://www.synapse.org/#!Profile:v/settings"
              >
                &nbsp;user profile validated
              </a>
            </p>
            {isLoading && <span className="spinner" />}

            <p
              className={`self-sign-access-verified-success-text ${
                userBundle?.isVerified ? 'show' : 'hide'
              }`}
            >
              You have applied to have user profile valiadation successfully
            </p>
          </div>
        </div>
      )}
      <AcceptedRequirements
        user={user}
        token={token}
        wikiPage={wikiPage}
        accessRequirement={accessRequirement}
        accessRequirementStatus={accessRequirementStatus}
        onHide={onHide}
      />
    </div>
  )
}
