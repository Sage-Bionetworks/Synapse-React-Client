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
  const [isHide, setIsHide] = useState<boolean>(true);
  const [isApproved, setIsApproved] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  
  useEffect(() => {

    const getPrepareTermsOfUse = async () => {

      setIsLoading(true)
      try{

        if(!accessRequirement.termsOfUse){

          const wikiPageRequirment = await SynapseClient.getWikiPageKey(token, accessRequirement.id)
  
          const markDownWikiRequirements = {
            wikiPageKey: wikiPageRequirment.wikiPageId, 
            ownerId: wikiPageRequirment.ownerObjectId, 
            objectType: wikiPageRequirment.ownerObjectType,
          }
  
          setWikiPage(markDownWikiRequirements)
        }
        
  
        SynapseClient.getAccessRequirementStatus(token, accessRequirement!.id).then(
          data => {
          setTermsOfUseRequirementStatus(data)
          setIsApproved(data.isApproved)
          }
        )
      }catch(err){
        console.error('Error on prepare terms of use ', err)

      }finally{
        setIsLoading(false)
      }
      
    }

    getPrepareTermsOfUse()
    
  }, [token, accessRequirement])


  const onAcceptClicked = () => {

    if(!termsOfUseRequirementStatus?.isApproved){
      const accessApprovalRequest: AccessApproval = {
        requirementId: accessRequirement?.id!,
        submitterId: user?.ownerId!,
        accessorId: user?.ownerId!,
        state: ApprovalState.APPROVED,
      }  
    
      SynapseClient.postAccessApproval(token, accessApprovalRequest).then(data =>
        {
          setIsApproved(true)
        }).catch(
        err => console.log('Error on post access approval: ', err))
    }

  }

  const TermsAndConditions = () => {

    if(isApproved){
      return <TermsAndConditionResult/>
    }
    return (
      <TermsAndConditionsContent/>
    )
  }

  const TermsAndConditionsContent = () => {
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
      
    return(
      <div>
        <p>
          You have accepted Terms of Use 
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
        {isLoading && (<span className="spinner" />)}

      <div className="requirement-container">
        <div className={`check-mark-container ${isApproved ? 'green' : 'orange'}`} >
        {isApproved ? (          
          <div className={`check-mark ${isApproved ? 'signed-in' : 'unsigned'}`}/>
          ) : ( 
          <div className="lock-container">
            <span className="lock"/>
          </div>         
          )}
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
      <div className={`button-container ${isApproved ? `hide` : `default`}`}>
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

