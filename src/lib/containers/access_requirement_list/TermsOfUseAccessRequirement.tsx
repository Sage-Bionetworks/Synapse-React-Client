import * as React from 'react'
import {  useEffect, useState } from 'react'
import { TermsOfUseAccessRequirement } from 'lib/utils/synapseTypes/AccessRequirement/TermsOfUseAccessRequirement'
import { SynapseClient } from 'lib/utils'
import MarkdownSynapse from '../../../lib/containers/MarkdownSynapse'
import { ObjectType } from 'lib/utils/synapseTypes/WikiPageKey'
import { UserProfile, AccessApproval, ApprovalState } from 'lib/utils/synapseTypes'
import { AccessRequirementStatus } from 'lib/utils/synapseTypes/AccessRequirement/AccessRequirementStatus'


type Props = {
  accessRequirement: TermsOfUseAccessRequirement,
  token: string | undefined,
  user: UserProfile | undefined,
}
export default function TermsOfUseAccessRequirementComponent({
  accessRequirement,
  token,
  user,
}: Props) {

  const [wikiPage, setWikiPage] = useState({wikiPageKey: '', ownerId: '', objectType: ''})
  const [termsOfUseRequirementStatus, setTermsOfUseRequirementStatus] = useState<AccessRequirementStatus | undefined>(undefined)
  const [accessApproval, setAccessApproval] = useState<AccessApproval | undefined>(undefined)
  const [isHide, setIsHide] = useState<boolean>(true);
  useEffect(() => {

    const getPrepareTermsOfUse = async () => {
      if(!accessRequirement.termsOfUse){

        const wikiPageRequirment = await SynapseClient.getWikiPageKey(token, accessRequirement.id)

        const markDownWikiRequirements = {
          wikiPageKey: wikiPageRequirment.wikiPageId, 
          ownerId: wikiPageRequirment.ownerObjectId, 
          objectType: wikiPageRequirment.ownerObjectType,
        }

        setWikiPage(markDownWikiRequirements)
      }
      

      const requirementStatus = await SynapseClient.getAccessRequirementStatus(token, accessRequirement!.id)
      setTermsOfUseRequirementStatus(requirementStatus)
      console.log(requirementStatus)
      
    }

    getPrepareTermsOfUse()
    
  }, [token, accessRequirement])

  // const isApproved:boolean = accessApproval?.state === ApprovalState.APPROVED

  const onAcceptClicked = () => {

    if(!termsOfUseRequirementStatus?.isApproved){
      const accessApprovalRequest: AccessApproval = {
        requirementId: accessRequirement?.id!,
        submitterId: user?.ownerId!,
        accessorId: user?.ownerId!,
        state: ApprovalState.APPROVED,
      }  
    
      SynapseClient.postAccessApproval(token, accessApprovalRequest).then(
        data => {
          setAccessApproval(data)
          console.log(data)
        }
      )
    }

  }

  const TermsAndConditions = () => {

    if(accessApproval){
      return <TermsAndConditionResult/>
    }
    return (
      <TermsAndConditionsContent/>
    )
  }

  const TermsAndConditionsContent = () => {
    console.log(accessRequirement.termsOfUse)
    return (
      <div>
      {accessRequirement.termsOfUse ? (
        <div dangerouslySetInnerHTML={{__html: accessRequirement.termsOfUse}} />
        ) : (
        <MarkdownSynapse  
          wikiId={wikiPage.wikiPageKey} 
          ownerId={wikiPage.ownerId} 
          objectType={ObjectType[wikiPage.objectType]}
        />
      )}
    </div>
    )
  }

  const TermsAndConditionResult = () => {
    
    const dates = accessApproval?.createdOn?.split('T')[0].split('-')!;
    const approvalDate =`${dates[1]}/${dates[2]}/${dates[0]}`;
  
    return(
      <div>
        <p>
          You have accepted Terms of Use on {approvalDate} 
          <button className="view-terms-button bold-text" onClick={() => {
            setIsHide(!isHide)
          }}>
            View Terms
          </button>
        </p>
        <div className={`view-terms ${isHide ? 'hide' : 'show'}`}>
          <TermsAndConditionsContent/>
          </div>
      </div>
    )
  }
  
  return (
    <div>
      <div className="requirement-container">
        <div className={`check-mark-container ${termsOfUseRequirementStatus?.isApproved ? 'green' : 'orange'}`} >
          <div className={`check-mark ${termsOfUseRequirementStatus?.isApproved ? 'accepted' : 'not-accepted'}`}/>
        </div>
        <div>
          <p className="terms-of-use-title bold-text">
            Agree to the following terms and conditions.
          </p>
          <div className="terms-of-use-content">
            <TermsAndConditions/>
          </div>
        </div>
      </div>
      <div className={`button-container ${termsOfUseRequirementStatus?.isApproved ? `hide` : `default`}`}>
        <div className="accept-button-container">
          <button className="accept-button" onClick={onAcceptClicked}>Accept Terms of Use</button>
        </div>
        <div className="not-accept-button-container"> 
          <button className="not-accpet-button" onClick={() => {
            window.open("playground", "_self", "")?.close()
          }}>I do not accept</button>
        </div>
      </div>
    </div>
    
  )
}

