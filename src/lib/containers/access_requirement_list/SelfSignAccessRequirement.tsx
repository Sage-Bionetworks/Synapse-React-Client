import * as React from 'react'
import {  useEffect, useState} from 'react'
import { SelfSignAccessRequirement, UserProfile } from 'lib/utils/synapseTypes'
import { SynapseClient, SynapseConstants } from 'lib/utils'
import MarkdownSynapse from '../../../lib/containers/MarkdownSynapse'
import { ObjectType } from 'lib/utils/synapseTypes/WikiPageKey'

type Props = {
  accessRequirement: SelfSignAccessRequirement,
  token: string | undefined,
  user: UserProfile | undefined,
}


export default function SelfSignAccessRequirementComponent({
  accessRequirement,
  token,
  user,
}: Props) {

  const [wikiPage, setWikiPage] = useState({wikiPageKey: '', ownerId: '', objectType: ''})
  const [isUserCertified, setIsUserCertified] = useState<boolean>(false)
  const [isUserVerified, setIsUserVerified] = useState<boolean>(false)
  const [isApproved, setIsApproved] = useState<boolean>(false)

  useEffect(() => {

    const getPrepareSelfSignAccessRequirement = async () => {

      const wikiPageRequirment = await SynapseClient.getWikiPageKey(token, accessRequirement.id)

      const markDownWikiRequirements = {
        wikiPageKey: wikiPageRequirment.wikiPageId, 
        ownerId: wikiPageRequirment.ownerObjectId, 
        objectType: wikiPageRequirment.ownerObjectType,
      }

      setWikiPage(markDownWikiRequirements)

      const userCertification = await SynapseClient.getUserBundle(user!.ownerId,SynapseConstants.USER_BUNDLE_MASK_IS_CERTIFIED ,token)
      setIsUserCertified(userCertification.isCertified)

      const userVerification = await SynapseClient.getUserBundle(user!.ownerId,SynapseConstants.USER_BUNDLE_MASK_IS_VERIFIED ,token)
      setIsUserVerified(!userVerification.isVerified)

      const aa = await SynapseClient.getAccessRequirementStatus(token, accessRequirement.id)
      console.log(aa)
    }

    getPrepareSelfSignAccessRequirement()
  },[accessRequirement, token, user])


  
  const SelfSignAccessRequirement = () => {
    if(isApproved){
      return <SelfSignAccessRequirementResult/>
    }

    return <SelfSignAccessRequirementContent/>
  }

  const SelfSignAccessRequirementContent = () => {
    return(
      <MarkdownSynapse
      wikiId={wikiPage.wikiPageKey}
      ownerId={wikiPage.ownerId}
      objectType={ObjectType[wikiPage.objectType]}
    />
    )

  }
  const SelfSignAccessRequirementResult = () => {

    return(
      <div>

      </div>
    )
  }

  return(
    <div>
      {accessRequirement.isCertifiedUserRequired && 
        <div className="requirement-container">
          <div className={`check-mark-container ${isUserCertified ? 'green' : 'orange'}`}>
            <div className={`check-mark ${isUserCertified ? 'certified' : 'not-certified'}`}/>
          </div>
          <div>
            <p className="self-sign-access-title bold-text">
              You must first become a 
              <a className="self-sign-access-certified bold-text" href="https://www.synapse.org/#!Quiz:">
                &nbsp;certified user
              </a>
            </p>
            <p className={`self-sign-access-certified-success-text ${isUserCertified ? 'show' : 'hide'}`}>
              You have became a certified user
            </p>
          </div>
        </div>
      }
      {accessRequirement.isValidatedProfileRequired && 
        <div className="requirement-container">
          <div className={`check-mark-container ${isUserVerified ? 'green' : 'orange'}`}>
            <div className={`check-mark ${isUserVerified ? 'verified' : 'not-verified'}`}/>
          </div>
          <div>
            <p className="self-sign-access-title bold-text">
              You must first apply to have your 
              <a className="self-sign-access-validated bold-text" href="https://www.synapse.org/#!Profile:v/settings">
                &nbsp;user profile validated
              </a>
            </p>
            <p className={`self-sign-access-verified-success-text ${isUserVerified ? 'show' : 'hide'}`}>
              You have applied to have user profile valiadation successfully
            </p>

            
          </div>
        </div>
      }
      <div className="requirement-container">
        <div className={`check-mark-container ${isApproved ? 'green' : 'orange'}`}>
          <div className={`check-mark ${isApproved ? 'approved' : 'not-approved'}`}/>
        </div>
        <div>
          <p className="self-sign-access-title bold-text">
             Agree to the following terms and conditions.
          </p>
          <SelfSignAccessRequirement/>
        </div>
      </div>
      <div className={`button-container ${isApproved ? 'hide' : 'default'}`}>
        <div className="accept-button-container">
          <button className="accept-button" onClick={() => {
            if(isUserCertified && isUserVerified){
              setIsApproved(true)}
            }}>Accept Terms of Use
          </button>
        </div>
        <div className="not-accept-button-container"> 
          <button className="not-accpet-button" onClick={() => {
            window.open("playground", "_self", "")?.close()
            }}>I do not accept
          </button>
        </div>
      </div>
    </div>
  )
}


